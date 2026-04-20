# LinkedIn carousel — Know When to AI

Seven-page portrait carousel (1080x1350 px per page) promoting the book and inviting challenge to its top-level case.

## Rebuild

From this directory (`carousel/`), run:

```sh
USER_DATA_DIR="$(mktemp -d)" && \
"/Applications/Google Chrome.app/Contents/MacOS/Google Chrome" \
  --headless=new --disable-gpu \
  --user-data-dir="$USER_DATA_DIR" \
  --no-pdf-header-footer --print-to-pdf-no-header --no-margins \
  --virtual-time-budget=5000 \
  --print-to-pdf="./know-when-to-ai-carousel.pdf" \
  "file://$(pwd)/source/carousel.html"
```

## Tool

Google Chrome headless (Skia/PDF producer). The CSS `@page` size is set to `1080px 1350px`; Chrome translates that to `810 x 1013.04 pt` in the PDF (72/96 scaling), which is the same target size in print units.

## Fonts

System stack, first available wins: Inter, Helvetica Neue, Helvetica, SF Pro Text, Arial, sans-serif. No web fonts are loaded, so the PDF renders with the system font that is present on the machine that produces it. On macOS the rendered result uses Helvetica Neue if Inter is not installed.

## Source

- `source/carousel.html` — single HTML file with all seven pages as `<section class="page">` blocks and inline CSS. Edit here, then rerun the command above.
