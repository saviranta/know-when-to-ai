# Know When to AI

*A field guide to find nails that can be hammered with AI*

Source for the book site. Built with [MkDocs Material](https://squidfunk.github.io/mkdocs-material/).

## Local development

```bash
pip install -r requirements.txt
mkdocs serve
```

Open http://127.0.0.1:8000.

## Build

```bash
mkdocs build
```

Output is written to `site/`.

## Deployment

Cloudflare Pages auto-deploys from `main`:

- Build command: `pip install -r requirements.txt && mkdocs build`
- Output directory: `site`
