//! File > Export PDF in the desktop app: the same job as DemoTOC+Sync's
//! serve.py (`POST /export-pdf`). The page sends the LaTeX made by
//! LaTeX.Export plus the images it needs (`[url, localPath]` pairs); we
//! download the images next to the .tex in a temporary folder, run lualatex,
//! and copy the PDF to the path the user chose. Images that can't be fetched
//! become a framed "image not available" note so the rest still comes out.

use std::fs;
use std::io::Read;
use std::path::{Component, Path, PathBuf};
use std::process::{Command, Stdio};
use std::sync::atomic::{AtomicU64, Ordering};
use std::thread;
use std::time::{Duration, Instant, SystemTime, UNIX_EPOCH};

const LATEX_TIMEOUT: Duration = Duration::from_secs(60);
const LOG_TAIL_LINES: usize = 40;
const MAX_IMAGE_BYTES: u64 = 50 * 1024 * 1024;
// Some image hosts refuse a default/empty User-Agent (HTTP 406/403).
const USER_AGENT: &str = "Mozilla/5.0 (Macintosh) XMarkdown-desktop/1.0";
const ACCEPT: &str = "image/avif,image/webp,image/png,image/jpeg,image/*;q=0.8,*/*;q=0.5";

/// Build the PDF and write it to `output`. Ok holds the images that could not
/// be downloaded; Err is a message (for a LaTeX error, the tail of its log).
pub fn export(tex: String, images: Vec<(String, String)>, output: String) -> Result<Vec<String>, String> {
    let lualatex = find_lualatex()
        .ok_or("lualatex not found: install MacTeX (https://tug.org/mactex/)")?;
    let build = BuildDir::new()?;

    let mut tex = tex;
    let mut image_errors = Vec::new();
    for (url, local_path) in &images {
        if let Err(e) = fetch_image(url, local_path, build.path()) {
            image_errors.push(format!("{local_path}: {e}"));
            tex = replace_with_placeholder(&tex, local_path);
        }
    }

    fs::write(build.path().join("document.tex"), &tex).map_err(|e| format!("Could not write the LaTeX file: {e}"))?;
    run_lualatex(&lualatex, build.path())?;

    fs::copy(build.path().join("document.pdf"), &output).map_err(|e| format!("Could not write {output}: {e}"))?;
    Ok(image_errors)
}

/// Apps started from the Finder don't get the shell's PATH, so also look
/// where MacTeX and Homebrew put lualatex.
fn find_lualatex() -> Option<PathBuf> {
    let from_path = std::env::var_os("PATH")
        .map(|paths| std::env::split_paths(&paths).collect::<Vec<_>>())
        .unwrap_or_default();
    let usual = ["/Library/TeX/texbin", "/opt/homebrew/bin", "/usr/local/bin"].map(PathBuf::from);
    from_path
        .into_iter()
        .chain(usual)
        .map(|dir| dir.join("lualatex"))
        .find(|candidate| candidate.is_file())
}

fn run_lualatex(lualatex: &Path, dir: &Path) -> Result<(), String> {
    // Output goes to document.log anyway; not piping it avoids a full pipe
    // blocking lualatex.
    let mut child = Command::new(lualatex)
        .args(["-interaction=nonstopmode", "-halt-on-error", "document.tex"])
        .current_dir(dir)
        .stdin(Stdio::null())
        .stdout(Stdio::null())
        .stderr(Stdio::null())
        .spawn()
        .map_err(|e| format!("Could not start lualatex: {e}"))?;

    let started = Instant::now();
    let status = loop {
        match child.try_wait().map_err(|e| e.to_string())? {
            Some(status) => break status,
            None if started.elapsed() > LATEX_TIMEOUT => {
                let _ = child.kill();
                let _ = child.wait();
                return Err(format!("lualatex took longer than {}s", LATEX_TIMEOUT.as_secs()));
            }
            None => thread::sleep(Duration::from_millis(100)),
        }
    };

    if status.success() && dir.join("document.pdf").is_file() {
        Ok(())
    } else {
        let log = fs::read_to_string(dir.join("document.log")).unwrap_or_default();
        let lines: Vec<&str> = log.lines().collect();
        let tail = lines[lines.len().saturating_sub(LOG_TAIL_LINES)..].join("\n");
        Err(if tail.is_empty() { "lualatex failed".to_string() } else { tail })
    }
}

/// Download `url` to `dir/local_path`.
fn fetch_image(url: &str, local_path: &str, dir: &Path) -> Result<(), String> {
    // local_path comes from the page: keep it inside the build folder.
    let relative = Path::new(local_path);
    if !relative.components().all(|c| matches!(c, Component::Normal(_))) {
        return Err("path outside the build folder".to_string());
    }

    let response = ureq::get(url)
        .set("User-Agent", USER_AGENT)
        .set("Accept", ACCEPT)
        .timeout(Duration::from_secs(20))
        .call()
        .map_err(|e| e.to_string())?;

    // A 200 that isn't an image (a login or error page) would be a fatal
    // "not a JPEG/PNG" error in lualatex; treat it as a failed download.
    let content_type = response.content_type().to_string();
    if !(content_type.starts_with("image/") || content_type == "application/pdf") {
        return Err(format!("got {content_type}, not an image"));
    }

    let mut data = Vec::new();
    response
        .into_reader()
        .take(MAX_IMAGE_BYTES)
        .read_to_end(&mut data)
        .map_err(|e| e.to_string())?;

    // LaTeX.Export gives extensionless URLs an extensionless path, and
    // \includegraphics then searches .png, .jpg, ...: name the file by its type.
    let mut target = dir.join(relative);
    if target.extension().is_none() {
        if let Some(ext) = extension_for(&content_type) {
            target.set_extension(ext);
        }
    }
    if let Some(parent) = target.parent() {
        fs::create_dir_all(parent).map_err(|e| e.to_string())?;
    }
    fs::write(&target, data).map_err(|e| e.to_string())
}

fn extension_for(content_type: &str) -> Option<&'static str> {
    match content_type {
        "image/png" => Some("png"),
        "image/jpeg" | "image/jpg" => Some("jpg"),
        "application/pdf" => Some("pdf"),
        "image/gif" => Some("gif"),
        "image/webp" => Some("webp"),
        "image/svg+xml" => Some("svg"),
        _ => None,
    }
}

/// A missing image file is a fatal lualatex error; put a framed note in its
/// place so the rest of the document still comes out.
fn replace_with_placeholder(tex: &str, local_path: &str) -> String {
    let pattern = format!(r"\\includegraphics(\[[^\]]*\])?\{{{}\}}", regex::escape(local_path));
    match regex::Regex::new(&pattern) {
        Ok(re) => re
            .replace_all(tex, regex::NoExpand(r"\fbox{\texttt{image not available}}"))
            .into_owned(),
        Err(_) => tex.to_string(),
    }
}

/// A temporary folder that is removed when dropped.
struct BuildDir(PathBuf);

impl BuildDir {
    fn new() -> Result<Self, String> {
        // The clock alone isn't unique: macOS times have microsecond
        // resolution, so two exports started together (e.g. Print while an
        // Export runs) could share, and overwrite, one folder.
        static COUNT: AtomicU64 = AtomicU64::new(0);
        let n = COUNT.fetch_add(1, Ordering::SeqCst);
        let nanos = SystemTime::now().duration_since(UNIX_EPOCH).map(|d| d.as_nanos()).unwrap_or(0);
        let dir = std::env::temp_dir().join(format!("xmarkdown-pdf-{}-{nanos}-{n}", std::process::id()));
        fs::create_dir_all(&dir).map_err(|e| format!("Could not create a temporary folder: {e}"))?;
        Ok(BuildDir(dir))
    }

    fn path(&self) -> &Path {
        &self.0
    }
}

impl Drop for BuildDir {
    fn drop(&mut self) {
        let _ = fs::remove_dir_all(&self.0);
    }
}

#[cfg(test)]
mod tests {
    use super::*;

    #[test]
    fn placeholder_replaces_only_the_missing_image() {
        let tex = r"\includegraphics[width=0.5\textwidth]{img/a1b2.png} and \includegraphics{img/other.png}";
        let out = replace_with_placeholder(tex, "img/a1b2.png");
        assert_eq!(out, r"\fbox{\texttt{image not available}} and \includegraphics{img/other.png}");
    }

    // Need lualatex (and the network): cargo test -- --ignored
    // XM_EXPORT_REQUEST may name a JSON file {tex, images} captured from the page.

    fn out_dir() -> PathBuf {
        let dir = std::env::temp_dir().join("xmarkdown-pdf-tests");
        fs::create_dir_all(&dir).unwrap();
        dir
    }

    #[test]
    #[ignore]
    fn exports_a_captured_request() {
        let Ok(path) = std::env::var("XM_EXPORT_REQUEST") else { return };
        let request: serde_json::Value = serde_json::from_str(&fs::read_to_string(path).unwrap()).unwrap();
        let tex = request["tex"].as_str().unwrap().to_string();
        let images: Vec<(String, String)> = serde_json::from_value(request["images"].clone()).unwrap();
        let output = out_dir().join("captured.pdf");
        let image_errors = export(tex, images, output.to_string_lossy().into()).unwrap();
        println!("image errors: {image_errors:?}");
        assert!(fs::read(&output).unwrap().starts_with(b"%PDF"));
    }

    #[test]
    #[ignore]
    fn unreachable_image_becomes_a_placeholder() {
        let tex = "\\documentclass{article}\\usepackage{graphicx}\\begin{document}Before \\includegraphics{img/gone.png} after.\\end{document}";
        let output = out_dir().join("placeholder.pdf");
        let image_errors = export(
            tex.to_string(),
            vec![("https://nonexistent.invalid/gone.png".to_string(), "img/gone.png".to_string())],
            output.to_string_lossy().into(),
        )
        .unwrap();
        assert_eq!(image_errors.len(), 1);
        assert!(fs::read(&output).unwrap().starts_with(b"%PDF"));
    }

    #[test]
    #[ignore]
    fn latex_error_returns_the_log_tail() {
        let tex = "\\documentclass{article}\\begin{document}\\nosuchcommand\\end{document}";
        let output = out_dir().join("broken.pdf");
        let _ = fs::remove_file(&output); // left over from an earlier failed run
        let error = export(tex.to_string(), vec![], output.to_string_lossy().into()).unwrap_err();
        assert!(error.contains("! Undefined control sequence"), "{error}");
        assert!(!output.exists());
    }

    #[test]
    fn rejects_paths_outside_the_build_folder() {
        let dir = std::env::temp_dir();
        assert!(fetch_image("https://example.com/x.png", "../escape.png", &dir).is_err());
        assert!(fetch_image("https://example.com/x.png", "/etc/x.png", &dir).is_err());
    }
}
