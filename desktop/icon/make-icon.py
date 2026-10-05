#!/usr/bin/env python3
"""Draw the XMarkdown app icon: a red "XM" on a black rounded square.

Writes desktop/icon/xm-icon.png (1024x1024). Then, from desktop/:

    npx tauri icon icon/xm-icon.png     # regenerates src-tauri/icons/*
    npm run build                       # bundles it into XMarkdown.app

Layout follows the macOS app-icon grid: an 824px rounded square (corner
radius ~185px) centred on a transparent 1024px canvas, so the icon sits at the
same size as other apps in the Dock. Needs Pillow.
"""

from pathlib import Path

from PIL import Image, ImageDraw, ImageFont

SIZE = 1024
TILE = 824
RADIUS = 185
SCALE = 4  # draw large, then downsample for smooth edges
BACKGROUND = (0, 0, 0, 255)
RED = (230, 30, 36, 255)
FONT = ("/System/Library/Fonts/HelveticaNeue.ttc", 1)  # Helvetica Neue Bold
TEXT = "XM"
TEXT_WIDTH = 0.70  # of the tile


def main():
    big = SIZE * SCALE
    image = Image.new("RGBA", (big, big), (0, 0, 0, 0))
    draw = ImageDraw.Draw(image)

    inset = (SIZE - TILE) // 2 * SCALE
    draw.rounded_rectangle(
        (inset, inset, big - inset - 1, big - inset - 1),
        radius=RADIUS * SCALE,
        fill=BACKGROUND,
    )

    # Size the text to a fixed share of the tile width, then centre its ink
    # (not its line box) so it is optically centred.
    path, index = FONT
    probe = ImageFont.truetype(path, 1000, index=index)
    left, top, right, bottom = draw.textbbox((0, 0), TEXT, font=probe)
    font_size = int(1000 * (TILE * SCALE * TEXT_WIDTH) / (right - left))
    font = ImageFont.truetype(path, font_size, index=index)
    left, top, right, bottom = draw.textbbox((0, 0), TEXT, font=font)
    x = (big - (right - left)) / 2 - left
    y = (big - (bottom - top)) / 2 - top
    draw.text((x, y), TEXT, font=font, fill=RED)

    out = Path(__file__).with_name("xm-icon.png")
    image.resize((SIZE, SIZE), Image.LANCZOS).save(out)
    print(f"wrote {out}")


if __name__ == "__main__":
    main()
