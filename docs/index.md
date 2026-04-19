# Illustration rendering demo

Three techniques, three representative illustrations from the manuscript.

- **Illustration 1.1 — Mermaid flowchart.** Two gates above a six-stage method. Fits Mermaid's model cleanly: boxes, arrows, a subgraph for the Tier-0 band.
- **Illustration 2.1 — Inline SVG.** Four columns, three struck, one kept. Mermaid has no strike-through primitive, so this is written as hand-authored SVG with the palette and typography called for in the spec.
- **Illustration 8.1 — CSS matrix.** The 8×8 routing matrix, as a semantic HTML table with four cell classes (Fit / Acceptable / Poor / Do-not-route) styled in CSS. Keeps the data in source, keeps the visual hierarchy in stylesheet.

Each technique has a tradeoff. Use the nav on the left to step through them.

## How this site was built

- **MkDocs Material** — static site generator, single `mkdocs.yml` config, renders the directory tree.
- **mermaid.js** loaded from a CDN, initialised per-page.
- **Search** — built-in Lunr, indexes all pages client-side. Try the search box above.
- **Dark mode toggle** — top right. Mermaid re-renders in the right theme.

To run locally: `python3 -m mkdocs serve` from this directory. To publish: `python3 -m mkdocs build` produces a `site/` dir; push to Cloudflare Pages or GitHub Pages.
