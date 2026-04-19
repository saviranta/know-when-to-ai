# Illustration 2.1 — Four outcomes of the Tier-0 gates

Referenced in Chapter 2. Four equally-weighted cards: abolish, judge, redirect, proceed. Monochrome only — strokes and text in the theme's fg colour, fills in the theme's bg colour. No hue does any work. Equal weight across all four cards is deliberate: the book produces all four outcomes, not just the last.

<div style="max-width: 860px; margin: 2rem auto;">
<svg viewBox="0 0 800 240" xmlns="http://www.w3.org/2000/svg" role="img" aria-labelledby="ill21-title">
  <title id="ill21-title">Four outcomes of the Tier-0 gates</title>

  <style>
    .ill21-outcome-rect { fill: var(--md-default-bg-color, #fff); stroke: var(--md-default-fg-color, #000); stroke-width: 1.5; }
    .ill21-outcome-rule { stroke: var(--md-default-fg-color, #000); stroke-width: 1; opacity: 0.5; }
    .ill21-outcome-label { font: 700 15px -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif; letter-spacing: 0.16em; fill: var(--md-default-fg-color, #000); text-anchor: middle; text-transform: uppercase; }
    .ill21-outcome-sub { font: 12px -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif; fill: var(--md-default-fg-color, #000); text-anchor: middle; }
    .ill21-caption { font: 600 11px -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif; letter-spacing: 0.12em; fill: var(--md-default-fg-color, #000); text-anchor: middle; text-transform: uppercase; }
    .ill21-divider { stroke: var(--md-default-fg-color, #000); stroke-width: 1; opacity: 0.35; }
    .ill21-band { font: 500 10px -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif; letter-spacing: 0.18em; fill: var(--md-default-fg-color, #000); text-anchor: middle; text-transform: uppercase; opacity: 0.6; }
  </style>

  <text class="ill21-band" x="400" y="18">Outcomes after the Tier-0 gates</text>

  <rect class="ill21-outcome-rect" x="25" y="35" width="180" height="160" rx="4" />
  <text class="ill21-outcome-label" x="115" y="75">Abolish</text>
  <line class="ill21-outcome-rule" x1="55" y1="95" x2="175" y2="95" />
  <text class="ill21-outcome-sub" x="115" y="125">Category stays</text>
  <text class="ill21-outcome-sub" x="115" y="143">un-automated —</text>
  <text class="ill21-outcome-sub" x="115" y="161">now or later.</text>

  <rect class="ill21-outcome-rect" x="215" y="35" width="180" height="160" rx="4" />
  <text class="ill21-outcome-label" x="305" y="75">Judge</text>
  <line class="ill21-outcome-rule" x1="245" y1="95" x2="365" y2="95" />
  <text class="ill21-outcome-sub" x="305" y="125">A human signs.</text>
  <text class="ill21-outcome-sub" x="305" y="143">AI may support,</text>
  <text class="ill21-outcome-sub" x="305" y="161">but not decide.</text>

  <rect class="ill21-outcome-rect" x="405" y="35" width="180" height="160" rx="4" />
  <text class="ill21-outcome-label" x="495" y="75">Redirect</text>
  <line class="ill21-outcome-rule" x1="435" y1="95" x2="555" y2="95" />
  <text class="ill21-outcome-sub" x="495" y="125">Not a technical</text>
  <text class="ill21-outcome-sub" x="495" y="143">problem. Policy,</text>
  <text class="ill21-outcome-sub" x="495" y="161">process, or people.</text>

  <rect class="ill21-outcome-rect" x="595" y="35" width="180" height="160" rx="4" />
  <text class="ill21-outcome-label" x="685" y="75">Proceed</text>
  <line class="ill21-outcome-rule" x1="625" y1="95" x2="745" y2="95" />
  <text class="ill21-outcome-sub" x="685" y="125">Method opens.</text>
  <text class="ill21-outcome-sub" x="685" y="143">Next: which</text>
  <text class="ill21-outcome-sub" x="685" y="161">rung of the ladder.</text>

  <line class="ill21-divider" x1="25" y1="210" x2="775" y2="210" />
  <text class="ill21-caption" x="400" y="230">Four outcomes &mdash; only the last opens the method</text>
</svg>
</div>

## Encoding without colour

- **Equal cards** — same width, same border weight, same typography across all four. No card is visually privileged. This matches the book's claim that a method producing only *proceed* is not a method.
- **Small-caps labels** — *Abolish, Judge, Redirect, Proceed* rendered in the same letter-spacing and weight. Hierarchy is refused on purpose.
- **Horizontal rule under each label** — a quiet half-opacity line that separates the name from the description without introducing colour or shading.
- **Band strap** — top micro-label ("Outcomes after the Tier-0 gates") and bottom caption strip together frame the four cards without bracketing them in a heavier frame.

## Dark-mode test

Toggle the theme (top right). Borders, strokes, rules, labels, captions — all flip to white on black via `var(--md-default-fg-color)` and `var(--md-default-bg-color)`. No per-theme SVG, no asset duplication, no second export.

## Where SVG + monochrome shines

- Printable as-is. Zero render cost to PDF or paper.
- Accessible: `<text>` nodes searchable by Lunr; `<title>` gives screen-reader label.
- Reviewable in git: a line edit is a visual change, diffable.

## Where it pushes back

- Equal-weight cards give the reader no "look here first" cue. That is the whole point of the illustration — but if a reader skims the page, they may not feel the force of "all four are available". The chapter text around this illustration has to carry that weight.
