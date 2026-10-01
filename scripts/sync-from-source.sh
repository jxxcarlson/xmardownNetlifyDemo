#!/usr/bin/env bash
# Sync this Netlify demo with the DemoTOC+Sync source project and upgrade
# jxxcarlson/xmarkdown-compiler to its latest published version.
# See docs/update-app.md for the manual procedure this automates.
#
# Usage: scripts/sync-from-source.sh [--source DIR] [--dry-run] [--no-build] [--force]

set -euo pipefail

ROOT="$(cd "$(dirname "$0")/.." && pwd)"
SRC="$ROOT/../xmarkdown/DemoTOC+Sync"
DRY_RUN=0
BUILD=1
FORCE=0

while [[ $# -gt 0 ]]; do
    case "$1" in
        --source)   SRC="$2"; shift 2 ;;
        --dry-run)  DRY_RUN=1; shift ;;
        --no-build) BUILD=0; shift ;;
        --force)    FORCE=1; shift ;;
        -h|--help)  sed -n '2,6p' "$0"; exit 0 ;;
        *) echo "Unknown option: $1" >&2; exit 2 ;;
    esac
done

cd "$ROOT"
SRC="$(cd "$SRC" && pwd)"

die()  { echo "ERROR: $*" >&2; exit 1; }
info() { echo "==> $*"; }

[[ -f "$SRC/src/Main.elm" ]] || die "source project not found at $SRC"

if [[ $DRY_RUN -eq 0 && $FORCE -eq 0 && -n "$(git status --porcelain)" ]]; then
    die "working tree is dirty; commit/stash first or pass --force"
fi

STAGE="$(mktemp -d)"
trap 'rm -rf "$STAGE"' EXIT

# --- 1. Stage the files to sync -------------------------------------------

mkdir -p "$STAGE/src" "$STAGE/assets"
cp -R "$SRC/src/." "$STAGE/src/"
for f in katex.js style.css file-links.js desktop.js; do
    cp "$SRC/assets/$f" "$STAGE/assets/$f"
done

# editor.js: the source imports CodeMirror from node_modules (bundled with
# esbuild); rewrite to esm.sh CDN imports so Netlify needs no bundle step.
python3 - "$SRC/assets/editor.js" "$STAGE/assets/editor.js" <<'PY'
import re, sys
src, dst = sys.argv[1], sys.argv[2]
text = open(src).read()
mapping = {
    "../node_modules/codemirror/dist/index.js": "https://esm.sh/codemirror@6.0.1",
    "../node_modules/@codemirror/state/dist/index.js": "https://esm.sh/@codemirror/state@6",
    "../node_modules/@codemirror/view/dist/index.js": "https://esm.sh/@codemirror/view@6",
}
for old, new in mapping.items():
    text = text.replace(old, new)
text = text.replace(
    "// Minimal CodeMirror 6 custom element for DemoTOC+Sync.",
    "// Minimal CodeMirror 6 custom element for XMarkdownNetlifyDemo.\n"
    "// Imports without ?bundle so esm.sh shares one @codemirror/state instance\n"
    "// (duplicate state instances cause \"unrecognized extension\" errors).",
    1,
)
leftover = re.findall(r'from\s+"(\.\./node_modules/[^"]+)"', text)
if leftover:
    sys.exit("editor.js has unmapped node_modules imports: " + ", ".join(leftover))
open(dst, "w").write(text)
PY

# --- 2. Check ports against this app's JS --------------------------------
# Wiring lives in index.html's inline script and in assets/*.js helpers
# (file-links.js, desktop.js); main.js is the compiled Elm and doesn't count.

python3 - "$STAGE/src/Ports.elm" "assets/index.html" "$STAGE/assets/file-links.js" "$STAGE/assets/desktop.js" <<'PY'
import re, sys
ports = open(sys.argv[1]).read()
html = "".join(open(f).read() for f in sys.argv[2:])
missing = []
for name, sig in re.findall(r'^port\s+(\w+)\s*:\s*(.+)$', ports, re.M):
    method = "send" if sig.strip().endswith("Sub msg") else "subscribe"
    if f"app.ports.{name}.{method}" not in html:
        missing.append(f"app.ports.{name}.{method}")
if missing:
    sys.exit("assets/index.html / file-links.js / desktop.js are missing port wiring: " + ", ".join(missing))
print("    ports OK")
PY

# --- 3. Merge elm.json ----------------------------------------------------
# Take dependency versions from the source project, keep this repo's
# source-directories and elm-version, and pin xmarkdown-compiler to the
# latest published release.

LATEST="$(curl -fsS --compressed \
    https://package.elm-lang.org/packages/jxxcarlson/xmarkdown-compiler/releases.json \
    | python3 -c 'import json,sys; r=json.load(sys.stdin); print(max(r, key=lambda v: tuple(map(int, v.split(".")))))')"
info "latest published xmarkdown-compiler: $LATEST"

python3 - "$SRC/elm.json" "elm.json" "$STAGE/elm.json" "$LATEST" <<'PY'
import json, sys
src, local = json.load(open(sys.argv[1])), json.load(open(sys.argv[2]))
out, latest = sys.argv[3], sys.argv[4]
merged = dict(local)
deps = json.loads(json.dumps(src["dependencies"]))
deps["direct"]["jxxcarlson/xmarkdown-compiler"] = latest
deps["direct"] = dict(sorted(deps["direct"].items()))
merged["dependencies"] = deps
with open(out, "w") as f:
    json.dump(merged, f, indent=4)
    f.write("\n")
PY

# --- 4. Report / apply ----------------------------------------------------

FILES=(elm.json assets/editor.js assets/katex.js assets/style.css assets/file-links.js assets/desktop.js)
while IFS= read -r f; do FILES+=("${f#$STAGE/}"); done < <(find "$STAGE/src" -type f -name '*.elm')

CHANGED=()
for f in "${FILES[@]}"; do
    if ! cmp -s "$STAGE/$f" "$f" 2>/dev/null; then CHANGED+=("$f"); fi
done

if [[ ${#CHANGED[@]} -eq 0 ]]; then
    info "already in sync; nothing to do"
    exit 0
fi

info "files to update:"
for f in "${CHANGED[@]}"; do
    if [[ -f "$f" ]]; then
        echo "    $f ($(diff "$f" "$STAGE/$f" | grep -c '^[<>]' || true) lines differ)"
    else
        echo "    $f (new)"
    fi
done

if [[ $DRY_RUN -eq 1 ]]; then
    info "dry run; no changes made"
    exit 0
fi

for f in "${CHANGED[@]}"; do
    mkdir -p "$(dirname "$f")"
    cp "$STAGE/$f" "$f"
done

# --- 5. Build -------------------------------------------------------------

if [[ $BUILD -eq 1 ]]; then
    if [[ " ${CHANGED[*]} " == *" elm.json "* ]]; then
        info "elm.json changed; clearing elm-stuff"
        rm -rf elm-stuff
    fi
    # Use a compiler matching elm.json's elm-version (what Netlify installs
    # via npm, per package.json): $ELM, then node_modules, then PATH.
    WANT="$(python3 -c 'import json; print(json.load(open("elm.json"))["elm-version"])')"
    ELM_BIN=""
    for cand in "${ELM:-}" node_modules/.bin/elm "$(command -v elm || true)"; do
        if [[ -n "$cand" && -x "$cand" && "$("$cand" --version 2>/dev/null)" == "$WANT" ]]; then
            ELM_BIN="$cand"; break
        fi
    done
    [[ -n "$ELM_BIN" ]] || die "no Elm $WANT compiler found (elm.json asks for $WANT); set ELM=/path/to/elm"
    info "building with $ELM_BIN"
    "$ELM_BIN" make src/Main.elm --output=assets/main.js
fi

info "done. Review with 'git diff', test with 'npm run dev', then commit."
