# Illustration 2.1 — What this book is not

Referenced in Chapter 2. Three genres struck, one kept. Monochrome only: lines, strikes and borders in the theme's fg colour; fills in the theme's bg colour. The "kept" column earns its emphasis through a **heavier border and taller frame** — not hue.

<div style="max-width: 860px; margin: 2rem auto;">
<svg viewBox="0 0 800 380" xmlns="http://www.w3.org/2000/svg" role="img" aria-labelledby="ill21-title">
  <title id="ill21-title">What this book is not — three genres refused, one kept</title>

  <style>
    .col-rect { fill: var(--md-default-bg-color, #fff); stroke: var(--md-default-fg-color, #000); stroke-width: 1.2; }
    .col-kept { fill: var(--md-default-bg-color, #fff); stroke: var(--md-default-fg-color, #000); stroke-width: 3; }
    .col-title { font: 600 17px -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif; fill: var(--md-default-fg-color, #000); text-anchor: middle; }
    .col-title-kept { font: 700 17px -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif; fill: var(--md-default-fg-color, #000); text-anchor: middle; }
    .col-sub { font: 13px -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif; fill: var(--md-default-fg-color, #000); text-anchor: middle; }
    .col-sub-kept { font: 500 13px -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif; fill: var(--md-default-fg-color, #000); text-anchor: middle; }
    .strike { stroke: var(--md-default-fg-color, #000); stroke-width: 3; stroke-linecap: round; }
    .caption { font: 600 11px -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif; letter-spacing: 0.12em; fill: var(--md-default-fg-color, #000); text-anchor: middle; text-transform: uppercase; }
    .divider { stroke: var(--md-default-fg-color, #000); stroke-width: 1; opacity: 0.35; }
    .kept-tag { font: 600 10px -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif; letter-spacing: 0.18em; fill: var(--md-default-fg-color, #000); text-anchor: middle; text-transform: uppercase; }
    .genre-tag { font: 400 10px -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif; letter-spacing: 0.18em; fill: var(--md-default-fg-color, #000); text-anchor: middle; text-transform: uppercase; opacity: 0.55; }
  </style>

  <!-- dividers -->
  <line class="divider" x1="190" y1="20" x2="190" y2="310" />
  <line class="divider" x1="380" y1="20" x2="380" y2="310" />
  <line class="divider" x1="570" y1="20" x2="570" y2="310" />

  <!-- Column 1: Strategy deck (struck) -->
  <rect class="col-rect" x="20" y="30" width="150" height="60" rx="4" />
  <text class="col-title" x="95" y="55">Strategy deck</text>
  <text class="genre-tag" x="95" y="76">genre</text>
  <line class="strike" x1="30" y1="40" x2="160" y2="80" />
  <text class="col-sub" x="95" y="130">Destination,</text>
  <text class="col-sub" x="95" y="148">not route</text>
  <text class="col-sub" x="95" y="180">Technology-first</text>
  <text class="col-sub" x="95" y="198">default</text>
  <text class="col-sub" x="95" y="230">Benefits the</text>
  <text class="col-sub" x="95" y="248">seller</text>

  <!-- Column 2: Vendor guide (struck) -->
  <rect class="col-rect" x="210" y="30" width="150" height="60" rx="4" />
  <text class="col-title" x="285" y="55">Vendor guide</text>
  <text class="genre-tag" x="285" y="76">genre</text>
  <line class="strike" x1="220" y1="40" x2="350" y2="80" />
  <text class="col-sub" x="285" y="130">Comparison table</text>
  <text class="col-sub" x="285" y="148">of named products</text>
  <text class="col-sub" x="285" y="180">Stale in</text>
  <text class="col-sub" x="285" y="198">months</text>
  <text class="col-sub" x="285" y="230">Benefits the</text>
  <text class="col-sub" x="285" y="248">vendors</text>

  <!-- Column 3: Manifesto (struck) -->
  <rect class="col-rect" x="400" y="30" width="150" height="60" rx="4" />
  <text class="col-title" x="475" y="55">Manifesto</text>
  <text class="genre-tag" x="475" y="76">genre</text>
  <line class="strike" x1="410" y1="40" x2="540" y2="80" />
  <text class="col-sub" x="475" y="130">For-or-against</text>
  <text class="col-sub" x="475" y="148">posture</text>
  <text class="col-sub" x="475" y="180">Forecast dressed</text>
  <text class="col-sub" x="475" y="198">as principle</text>
  <text class="col-sub" x="475" y="230">Benefits the</text>
  <text class="col-sub" x="475" y="248">author</text>

  <!-- Column 4: Method (kept — taller frame, heavier border; no colour) -->
  <rect class="col-kept" x="590" y="18" width="170" height="76" rx="6" />
  <text class="col-title-kept" x="675" y="48">Method</text>
  <text class="kept-tag" x="675" y="70">kept</text>
  <text class="col-sub-kept" x="675" y="130">Route, with</text>
  <text class="col-sub-kept" x="675" y="148">six stages</text>
  <text class="col-sub-kept" x="675" y="180">Two gates above</text>
  <text class="col-sub-kept" x="675" y="198">the method</text>
  <text class="col-sub-kept" x="675" y="230">Benefits the</text>
  <text class="col-sub-kept" x="675" y="248">work</text>

  <!-- Caption strip -->
  <line class="divider" x1="20" y1="320" x2="760" y2="320" />
  <text class="caption" x="390" y="345">Three genres refused &mdash; one kept</text>
</svg>
</div>

## Encoding without colour

- **Kept column** — 3-pixel border on a 76-px tall frame vs 1.2-pixel border on 60-px frames for the struck three. Same fg/bg colour; the difference reads as weight.
- **Struck columns** — thick diagonal strike across each header card, in the same fg colour. The strike does the work a red "no" symbol would do in a coloured diagram.
- **Genre vs kept tag** — small-caps tag under each title: "genre" (struck columns) at 55% opacity, "kept" (Method column) at full opacity with heavier weight. Two readings with a single colour.

## Dark-mode test

Toggle the theme (top right). Strikes, borders, text — all flip to white on black. No per-theme SVG, no asset duplication, no second export.

## Where SVG + monochrome shines

- Printable as-is. Zero render cost to PDF or paper.
- Accessible: `<text>` nodes searchable by Lunr; `<title>` gives screen-reader label.
- Reviewable in git: a line edit = a visual change, diffable.

## Where it pushes back

- The genre tag under each title is deliberately muted (55% opacity) — that is the one "near-third-value" I allowed, because "struck-and-labelled-struck" is a double-encode. If even that reads as cheating, drop it.
