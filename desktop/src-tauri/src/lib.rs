//! XMarkdown desktop app. The UI is the web app in ../../assets (Elm +
//! CodeMirror); assets/desktop.js calls these commands for file I/O and
//! tauri-plugin-dialog for the Open / Save dialogs.
//!
//! Closing the window or quitting (Cmd+Q) is held back until the page has
//! saved the document (auto-save): we emit "xm-close" with "close" or "quit",
//! the page saves or asks, then calls `finish_close`. If the page never
//! answers, a second close/quit goes through regardless.

mod pdf;
mod print;

use std::fs;
use std::path::Path;
use std::sync::atomic::{AtomicBool, Ordering};

use tauri::{AppHandle, Emitter, Manager, RunEvent, WindowEvent};

/// Set once the page has saved and allowed the close/quit.
static CLOSE_ALLOWED: AtomicBool = AtomicBool::new(false);
/// Set while a close/quit is waiting for the page.
static CLOSE_PENDING: AtomicBool = AtomicBool::new(false);

/// Read a UTF-8 text file.
#[tauri::command]
fn read_file(path: String) -> Result<String, String> {
    fs::read_to_string(&path).map_err(|e| format!("Could not read {path}: {e}"))
}

/// Write (create or replace) a UTF-8 text file.
#[tauri::command]
fn write_file(path: String, contents: String) -> Result<(), String> {
    fs::write(&path, contents).map_err(|e| format!("Could not write {path}: {e}"))
}

/// Whether a regular file exists at `path`.
#[tauri::command]
fn file_exists(path: String) -> bool {
    Path::new(&path).is_file()
}

#[derive(serde::Serialize)]
#[serde(rename_all = "camelCase")]
struct ExportResult {
    image_errors: Vec<String>,
}

/// File > Export PDF: run lualatex on `tex` (with its `images`, as
/// `[url, localPath]` pairs) and write the PDF to `output`. See pdf.rs.
/// The page then shows the PDF in the app (assets/pdf-export.js), through the
/// asset protocol, whose scope starts empty: only this one file is allowed.
#[tauri::command]
async fn export_pdf(app: AppHandle, tex: String, images: Vec<(String, String)>, output: String) -> Result<ExportResult, String> {
    let pdf_path = output.clone();
    // Downloads and lualatex take seconds: keep them off the main thread.
    let image_errors = tauri::async_runtime::spawn_blocking(move || pdf::export(tex, images, output))
        .await
        .map_err(|e| e.to_string())??;
    app.asset_protocol_scope()
        .allow_file(&pdf_path)
        .map_err(|e| e.to_string())?;
    Ok(ExportResult { image_errors })
}

/// File > Print while a PDF is shown: print it (see print.rs). AppKit needs
/// the main thread; the command returns once the print panel is dismissed.
#[tauri::command]
async fn print_pdf(app: AppHandle, path: String) -> Result<(), String> {
    let (done, result) = std::sync::mpsc::channel();
    app.run_on_main_thread(move || {
        let _ = done.send(print::print_pdf(&path));
    })
    .map_err(|e| e.to_string())?;
    tauri::async_runtime::spawn_blocking(move || result.recv().map_err(|e| e.to_string()))
        .await
        .map_err(|e| e.to_string())??
}

/// The page has saved (or the user chose to discard): close or quit now.
#[tauri::command]
fn finish_close(app: AppHandle, then: String) {
    CLOSE_ALLOWED.store(true, Ordering::SeqCst);
    if then == "quit" {
        app.exit(0);
    } else if let Some(window) = app.get_webview_window("main") {
        // Closing the only window then ends the app.
        let _ = window.destroy();
    }
}

/// The user cancelled (or the save failed): stay open.
#[tauri::command]
fn cancel_close() {
    CLOSE_PENDING.store(false, Ordering::SeqCst);
}

/// Hold back a close/quit and ask the page to save first. Returns true if it
/// should be prevented.
fn hold_for_save(app: &AppHandle, then: &str) -> bool {
    if CLOSE_ALLOWED.load(Ordering::SeqCst) {
        return false;
    }
    // A second request while one is pending: let it through.
    if CLOSE_PENDING.swap(true, Ordering::SeqCst) {
        return false;
    }
    let _ = app.emit("xm-close", then);
    true
}

#[cfg_attr(mobile, tauri::mobile_entry_point)]
pub fn run() {
    tauri::Builder::default()
        .plugin(tauri_plugin_dialog::init())
        .plugin(tauri_plugin_opener::init())
        .invoke_handler(tauri::generate_handler![
            read_file,
            write_file,
            file_exists,
            export_pdf,
            print_pdf,
            finish_close,
            cancel_close
        ])
        .on_window_event(|window, event| {
            if let WindowEvent::CloseRequested { api, .. } = event {
                if hold_for_save(window.app_handle(), "close") {
                    api.prevent_close();
                }
            }
        })
        .build(tauri::generate_context!())
        .expect("error while building XMarkdown")
        .run(|app, event| {
            if let RunEvent::ExitRequested { api, .. } = event {
                if hold_for_save(app, "quit") {
                    api.prevent_exit();
                }
            }
        });
}
