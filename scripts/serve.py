#!/usr/bin/env python3
"""Serve the built app (assets/) locally, the way Netlify serves it.

Usage: scripts/serve.py [--port 8300]

Opening assets/index.html via file:// is unreliable: browsers restrict ES
module scripts (editor.js, katex.js) on file:// URLs. Caching is disabled so a
rebuilt main.js / edited editor.js is always picked up on reload.

If an earlier serve.py from this repo is still listening on the port, it is
stopped first. Any other program on the port is left alone and reported.
"""

import argparse
import functools
import http.server
import os
import signal
import subprocess
import sys
import time
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
ASSETS = ROOT / "assets"


def listeners(port):
    """PIDs of processes listening on `port` (any address), via lsof."""
    out = subprocess.run(
        ["lsof", "-nP", f"-iTCP:{port}", "-sTCP:LISTEN", "-t"],
        capture_output=True, text=True,
    ).stdout
    return sorted({int(pid) for pid in out.split()})


def describe(pid):
    """(command line, working directory) of a process."""
    cmd = subprocess.run(["ps", "-o", "command=", "-p", str(pid)],
                         capture_output=True, text=True).stdout.strip()
    cwd = subprocess.run(["lsof", "-a", "-p", str(pid), "-d", "cwd", "-Fn"],
                         capture_output=True, text=True).stdout
    cwd = next((line[1:] for line in cwd.splitlines() if line.startswith("n")), "?")
    return cmd, cwd


def is_ours(cmd, cwd):
    """An earlier `scripts/serve.py` started from this repo."""
    script = next((arg for arg in cmd.split() if arg.endswith("serve.py")), None)
    if script is None:
        return False
    if not os.path.isabs(script):
        script = os.path.join(cwd, script)
    return Path(script).resolve() == Path(__file__).resolve()


def free_port(port):
    """Stop earlier copies of this server on `port`; exit if anything else holds it."""
    # Check every listener before stopping any, so a foreign server on the
    # port never costs us the old instance for nothing.
    pids = [pid for pid in listeners(port) if pid != os.getpid()]
    for pid in pids:
        cmd, cwd = describe(pid)
        if not is_ours(cmd, cwd):
            sys.exit(f"Port {port} is in use by PID {pid}: {cmd}\n"
                     f"  (running in {cwd})\n"
                     f"Stop it, or pick another port with --port N.")
    for pid in pids:
        print(f"Stopping earlier serve.py on port {port} (PID {pid})")
        os.kill(pid, signal.SIGTERM)
    for _ in range(50):
        if not listeners(port):
            return
        time.sleep(0.1)
    sys.exit(f"Port {port} is still in use after stopping the earlier server.")


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
    parser.add_argument("--port", type=int, default=8300)
    args = parser.parse_args()

    free_port(args.port)
    handler = functools.partial(NoCacheHandler, directory=str(ASSETS))
    with http.server.ThreadingHTTPServer(("127.0.0.1", args.port), handler) as httpd:
        print(f"Serving {ASSETS} at http://localhost:{args.port}/  (Ctrl-C to stop)")
        try:
            httpd.serve_forever()
        except KeyboardInterrupt:
            pass


if __name__ == "__main__":
    main()
