# Updating the app from DemoTOC+Sync

This app is derived from `../xmarkdown/DemoTOC+Sync`. Commit `78e331f`
("Sync with DemoTOC+Sync; upgrade to xmarkdown-compiler 2.0.0") was the first
such sync. This document describes how to repeat it.

## Automated

```bash
./scripts/sync-from-source.sh            # sync, rewrite, bump packages, build
./scripts/sync-from-source.sh --dry-run  # show what would change, touch nothing
```

Options: `--source DIR` (default `../xmarkdown/DemoTOC+Sync`), `--no-build`,
`--force` (run even if the working tree is dirty). The build uses an Elm
compiler matching `elm.json`'s `elm-version` (0.19.2, the same as the global
`elm`); set `ELM=/path/to/elm` to use a different binary.
The script does not commit;
review `git diff`, test with `./scripts/serve.py`, then commit (including the
regenerated `assets/main.js`).

## Manual procedure

**What differs between `xmarkdown/DemoTOC+Sync` and this repo** (as of 2026-10-01):
- **Same:** `src/Ports.elm`, `assets/katex.js`, `assets/style.css`
- **Changed:** `src/Main.elm` (+51/−8), `src/Data/XMarkdown.elm` (+143/−15), `assets/editor.js` (+17/−10)
- **Don't copy:** `assets/index.html` and `elm.json`. The source versions are set up for elm-watch.
- **Library version:** the local `xmarkdown` library is at **2.0.3**. (2.0.3 is published on package.elm-lang.org.)

**How to sync:**

1. Copy the files that changed:
   ```bash
   S=../xmarkdown/DemoTOC+Sync
   cp $S/src/Main.elm src/
   cp $S/src/Data/XMarkdown.elm src/Data/
   cp $S/assets/editor.js assets/
   ```
   The source `editor.js` imports CodeMirror from `../node_modules/...`; rewrite
   those imports to the esm.sh CDN URLs (`https://esm.sh/codemirror@6.0.1`,
   `https://esm.sh/@codemirror/state@6`, `https://esm.sh/@codemirror/view@6`)
   so Netlify needs no bundle step.

2. Leave these as they are in this repo:
   - **`elm.json`:** keep `"source-directories": ["src"]`. The source uses `"../src"` (the live library code), which doesn't exist on Netlify. Both projects use Elm 0.19.2; `package.json` pins `"elm": "0.19.2-0"` so Netlify installs the same version.
   - **`assets/index.html`:** keep the inline `Elm.Main.init` script with its port subscriptions and the `editor.js` CDN import. The source uses `app.js` and `editor-bundle.js`, which need an esbuild step.
   - **Ports:** if the new `Main.elm` uses a new port, add a matching `subscribe` (outgoing) or `send` (incoming) in `assets/index.html`.

3. Upgrade the compiler package:
   - If a newer `jxxcarlson/xmarkdown-compiler` is published (check https://package.elm-lang.org/packages/jxxcarlson/xmarkdown-compiler/releases.json), change its version in `elm.json`. Then `rm -rf elm-stuff` and rebuild.
   - If it isn't published, run `elm publish` from `../xmarkdown` first. Netlify can only use published packages.
   - Bring the other dependency versions in line with the source `elm.json` (e.g. `jxxcarlson/etex` 1.0.0 → 1.0.2).

4. Build and check locally:
   ```bash
   npm run build      # elm make src/Main.elm --output=assets/main.js
   npm run dev        # elm-live; defaults to port 8000 — use e.g. --port=8080
   ```
   Or, without elm-live, serve the built app over http (don't open
   `assets/index.html` via `file://` — ES modules misbehave there):
   ```bash
   ./scripts/serve.py          # http://localhost:8300/  (--port N to change)
   ```
   Then commit, including the regenerated `assets/main.js`.

Note: `CLAUDE.md` is out of date: it says `main.js` and `index.html` are in the
root and that Netlify publishes `.`. In fact they're in `assets/`, and
`netlify.toml` publishes `assets`.
