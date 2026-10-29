# XMarkdown Netlify Demo

A browser app for writing and reading [XMarkdown](https://package.elm-lang.org/packages/jxxcarlson/xmarkdown-compiler/latest/)
documents: Markdown extended with LaTeX-style math, images, tables, charts,
`/begin ... /end` blocks, verse and more. It is written in Elm, deployed to
Netlify, and also packaged as a macOS desktop app (Tauri 2).

The window has three resizable panels: a source editor (CodeMirror 6, closed
by default), the rendered document, and a table of contents. Clicking in the
rendered text highlights the matching source, down to the word or range.

## Features

- **File menu**: New (⌘N), Open (⌘O), Open Folder, Save, Save As, a Recent
  menu, Print (⌘P) and, where available, Export PDF.
- **Normalize**: strips hand-written section numbers from headings
  (`# 1. Intro` → `# Intro`) and puts blank lines around `\[ ... \]` display
  math. Code fences and math are left untouched.
- **Make header**: adds a title/date header to a document that lacks one.
- **`file://` links**: after Open Folder, clicking `[text](file://other.md)`
  loads that file.
- **Light and dark themes**, a word count in the menu bar, and Escape to clear
  the sync highlight.

## Quick start

Requires Node and Elm 0.19.2.

```bash
npm install
npm run build          # src/Main.elm -> assets/main.js
./scripts/serve.py     # serves assets/ on port 8300 (--port to change)
```

Or `./rebuild.sh`, which does the build and serve in one step. `npm run dev`
runs `elm-live` with live reload.

Serve the app rather than opening `assets/index.html` directly: browsers
restrict the ES module scripts (`editor.js`, `katex.js`) on `file://` URLs.

## Project layout

```
src/
  Main.elm              application (Browser.element): model, update, view, menus
  Ports.elm             JavaScript interop
  Normalize.elm         File > Normalize
  Data/XMarkdown.elm    the sample document shown at startup
assets/                 what Netlify publishes
  index.html            page template; initializes Elm with window flags
  main.js               compiled Elm (generated, do not edit)
  editor.js             CodeMirror 6 editor element
  katex.js              math rendering
  file-links.js         Open Folder and file:// links
  desktop.js            native file access when running under Tauri
  pdf-export.js         Export PDF
  style.css
desktop/                macOS app (Tauri 2), wraps assets/
scripts/
  serve.py              local static server
  sync-from-source.sh   pull changes from the upstream project
docs/                   desktop app and sync notes
```

## Deployment

Netlify runs `npm run build` and publishes `assets/` (see `netlify.toml`).
Make sure the build succeeds before pushing.

## macOS desktop app

`desktop/` loads the same `assets/` in a native window; `assets/desktop.js`
switches the File menu to native dialogs and the local file system. It also
adds auto-save, reopening the last document, and Export PDF via `lualatex`.

```bash
cd desktop
npm install
npm run build
open src-tauri/target/release/bundle/macos/XMarkdown.app
```

Needs Rust 1.85+, the Xcode command-line tools, and MacTeX for PDF export.
See [docs/desktop.md](docs/desktop.md) and
[docs/tauri-install.md](docs/tauri-install.md).

## Keeping in sync with upstream

This app is derived from `../xmarkdown/DemoTOC+Sync`.
`scripts/sync-from-source.sh` brings over its changes and upgrades
`jxxcarlson/xmarkdown-compiler` to the latest published version
(`--dry-run` to preview). See [docs/update-app.md](docs/update-app.md).
