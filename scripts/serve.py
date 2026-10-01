#!/usr/bin/env python3
"""Serve the built app (assets/) locally, the way Netlify serves it.

Usage: scripts/serve.py [--port 8012]

Opening assets/index.html via file:// is unreliable: browsers restrict ES
module scripts (editor.js, katex.js) on file:// URLs. Caching is disabled so a
rebuilt main.js / edited editor.js is always picked up on reload.
"""

import argparse
import functools
import http.server
from pathlib import Path

ASSETS = Path(__file__).resolve().parent.parent / "assets"


class NoCacheHandler(http.server.SimpleHTTPRequestHandler):
    extensions_map = {
        **http.server.SimpleHTTPRequestHandler.extensions_map,
        ".js": "text/javascript",
        ".mjs": "text/javascript",
    }

    def end_headers(self):
        self.send_header("Cache-Control", "no-store")
        super().end_headers()


def main():
    parser = argparse.ArgumentParser(description=__doc__.splitlines()[0])
    parser.add_argument("--port", type=int, default=8012)
    args = parser.parse_args()

    handler = functools.partial(NoCacheHandler, directory=str(ASSETS))
    with http.server.ThreadingHTTPServer(("127.0.0.1", args.port), handler) as httpd:
        print(f"Serving {ASSETS} at http://localhost:{args.port}/  (Ctrl-C to stop)")
        try:
            httpd.serve_forever()
        except KeyboardInterrupt:
            pass


if __name__ == "__main__":
    main()
