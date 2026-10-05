# XMarkdown for macOS (Tauri)

`desktop/` wraps the web app in a native macOS window with real file access.
It has no UI code of its own: Tauri loads `../assets` (the same `index.html`,
`main.js`, `editor.js`, … that Netlify serves), and `assets/desktop.js`
switches the File menu to native dialogs and the local file system when it
finds `window.__TAURI__`. In a browser that file does nothing.

## Build and run

```bash
cd desktop
npm install           # once: Tauri 2 CLI
npm run build         # compiles Elm, then builds XMarkdown.app
open src-tauri/target/release/bundle/macos/XMarkdown.app
```

`npm run dev` starts it unbundled, for quick iteration. Both commands
recompile `src/Main.elm` into `assets/main.js` first (`npm run elm`).

To install, drag `XMarkdown.app` into `/Applications`. The app isn't signed,
so the first time macOS may refuse to open it: right-click → Open.

Requirements: Rust (1.85+), Node, Xcode command-line tools, Elm 0.19.2.
Export PDF also needs `pdflatex` (MacTeX); the app looks in `PATH`,
`/Library/TeX/texbin`, `/opt/homebrew/bin` and `/usr/local/bin`.

## Export PDF

The same job as DemoTOC+Sync's `serve.py`, done in Rust (`src-tauri/src/pdf.rs`):
the images the LaTeX needs are downloaded into a temporary folder (any that
fail become a framed "image not available"), `pdflatex` runs there (60 s
limit), and the PDF is copied to the chosen path. A LaTeX error shows its first
`!` line in the header. Tests that need pdflatex and the network:
`cargo test -- --ignored` in `desktop/src-tauri`.

## How it differs from the web app

| | Web | Desktop |
|---|---|---|
| Open… | browser file picker | macOS open dialog |
| Save | downloads a copy | writes the file in place |
| Save As… | small name window, downloads | macOS save dialog |
| New… | name window, empty document | name window; creates the file in the current folder (never overwrites) |
| Current folder | chosen with Open Folder | folder of the open file (Open Folder changes it) |
| `file://` links | looked up in the chosen folder | resolved against the current folder; `sub/x.md` and `../x.md` work |
| `http(s)` links | open in the page | open in the default browser |
| Export PDF | hidden (Netlify has no pdflatex) | macOS save dialog; LaTeX via `LaTeX.Export`, images downloaded, `pdflatex` run locally |

A `•` after the file name marks unsaved changes. Hovering the file name shows
its full path.

## Auto-save (desktop only)

- About one second after you stop typing, the open file is saved in place.
  Continuous typing doesn't trigger writes; the next pause does.
- Opening another file, following a `file://` link, or New first saves the
  document you're leaving.
- Closing the window or quitting (Cmd+Q) saves first, then closes.
- A document that has never been saved (New with no current folder) can't be
  auto-saved; it keeps its `•` until Save As. Closing or quitting then asks
  before discarding it.
- If a close ever gets stuck, closing or quitting a second time always goes
  through.

The web app never auto-saves (`autoSaves` in `src/Main.elm` requires the
desktop platform). Close handling: `desktop/src-tauri/src/lib.rs` holds back
`CloseRequested` / `ExitRequested` and emits `xm-close`; the page saves, then
calls `finish_close`.

## Pieces

- `assets/desktop.js` — handles `desktopRequest` from Elm (`open`, `openFolder`,
  `save`, `saveAs`, `create`) and replies on `desktopResponse`; follows
  `file://` links (called from `file-links.js`).
- `src/Main.elm` — the `platform` flag (`"desktop"` when `window.__TAURI__`
  exists, else `"web"`) picks the desktop or web behaviour for each File menu
  item.
- `desktop/src-tauri/src/lib.rs` — Rust commands `read_file`, `write_file`,
  `file_exists`, `export_pdf` (see `pdf.rs`); registers `tauri-plugin-dialog`
  and `tauri-plugin-opener`.
- `assets/pdf-export.js` — File > Export PDF: the desktop path above, or (in
  DemoTOC+Sync) a POST to its local `serve.py`.
- `desktop/src-tauri/capabilities/default.json` — permissions for those plugins.

The editor (esm.sh), KaTeX and fonts still load from CDNs, so the app needs a
network connection, as the web app does.
