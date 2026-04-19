# Illustration 8.1 — Routing matrix

Referenced in Chapter 8. Four routing qualities (Fit / Acceptable / Poor / Do-not-route) are encoded by four **monochrome fill techniques**: solid fill, dot pattern, diagonal hatch, and diagonal strike. No colour.

<div class="matrix-legend">
  <span><span class="swatch cell-fit"></span>Fit</span>
  <span><span class="swatch cell-acceptable"></span>Acceptable</span>
  <span><span class="swatch cell-poor"></span>Poor</span>
  <span><span class="swatch cell-donot"></span>Do-not-route</span>
</div>

<table class="routing-matrix">
  <thead>
    <tr>
      <th></th>
      <th>0<br/>Human</th>
      <th>1<br/>Rules</th>
      <th>2<br/>Classical ML</th>
      <th>3<br/>LLM feature</th>
      <th>4<br/>RAG</th>
      <th>5<br/>Single agent</th>
      <th>6<br/>Tool-using agent</th>
      <th>7<br/>Multi-agent</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td class="row-label">Judgment call<small>who is accountable; what is fair</small></td>
      <td class="cell-fit">Fit</td>
      <td class="cell-donot"></td>
      <td class="cell-donot"></td>
      <td class="cell-donot"></td>
      <td class="cell-donot"></td>
      <td class="cell-donot"></td>
      <td class="cell-donot"></td>
      <td class="cell-donot"></td>
    </tr>
    <tr>
      <td class="row-label">Codified decision<small>stable rule, auditable</small></td>
      <td class="cell-acceptable">Acc</td>
      <td class="cell-fit">Fit</td>
      <td class="cell-poor">Poor</td>
      <td class="cell-poor">Poor</td>
      <td class="cell-poor">Poor</td>
      <td class="cell-poor">Poor</td>
      <td class="cell-poor">Poor</td>
      <td class="cell-poor">Poor</td>
    </tr>
    <tr>
      <td class="row-label">Prediction on tabular data<small>labels available</small></td>
      <td class="cell-poor">Poor</td>
      <td class="cell-acceptable">Acc</td>
      <td class="cell-fit">Fit</td>
      <td class="cell-poor">Poor</td>
      <td class="cell-poor">Poor</td>
      <td class="cell-poor">Poor</td>
      <td class="cell-poor">Poor</td>
      <td class="cell-poor">Poor</td>
    </tr>
    <tr>
      <td class="row-label">Open-ended text transformation<small>summary, rewrite, classify</small></td>
      <td class="cell-poor">Poor</td>
      <td class="cell-poor">Poor</td>
      <td class="cell-acceptable">Acc</td>
      <td class="cell-fit">Fit</td>
      <td class="cell-acceptable">Acc</td>
      <td class="cell-acceptable">Acc</td>
      <td class="cell-poor">Poor</td>
      <td class="cell-poor">Poor</td>
    </tr>
    <tr>
      <td class="row-label">Question over a proprietary corpus<small>fresh or niche knowledge</small></td>
      <td class="cell-poor">Poor</td>
      <td class="cell-poor">Poor</td>
      <td class="cell-poor">Poor</td>
      <td class="cell-acceptable">Acc</td>
      <td class="cell-fit">Fit</td>
      <td class="cell-acceptable">Acc</td>
      <td class="cell-acceptable">Acc</td>
      <td class="cell-poor">Poor</td>
    </tr>
    <tr>
      <td class="row-label">Bounded task with one external call<small>lookup, fetch, compute</small></td>
      <td class="cell-poor">Poor</td>
      <td class="cell-acceptable">Acc</td>
      <td class="cell-poor">Poor</td>
      <td class="cell-poor">Poor</td>
      <td class="cell-poor">Poor</td>
      <td class="cell-fit">Fit</td>
      <td class="cell-acceptable">Acc</td>
      <td class="cell-poor">Poor</td>
    </tr>
    <tr>
      <td class="row-label">Multi-step task with tools and side effects<small>book, refund, file</small></td>
      <td class="cell-poor">Poor</td>
      <td class="cell-poor">Poor</td>
      <td class="cell-poor">Poor</td>
      <td class="cell-poor">Poor</td>
      <td class="cell-poor">Poor</td>
      <td class="cell-acceptable">Acc</td>
      <td class="cell-fit">Fit</td>
      <td class="cell-acceptable">Acc</td>
    </tr>
    <tr>
      <td class="row-label">Coordination across specialists<small>parallel sub-tasks, handoffs</small></td>
      <td class="cell-poor">Poor</td>
      <td class="cell-poor">Poor</td>
      <td class="cell-poor">Poor</td>
      <td class="cell-poor">Poor</td>
      <td class="cell-poor">Poor</td>
      <td class="cell-poor">Poor</td>
      <td class="cell-acceptable">Acc</td>
      <td class="cell-fit">Fit</td>
    </tr>
  </tbody>
</table>

<p class="matrix-footnote">Fit: cheapest option that carries the job. Acceptable: works but pays a tax. Poor: try only with a stated reason. Do-not-route: the row must stay on its Fit column.</p>

## Four categories, four fill techniques

- **Fit** — solid fill in fg colour; label inverted (bg text on fg ground). Reads loudest. The diagonal from top-left to bottom-right traces the spine of the matrix.
- **Acceptable** — dotted pattern, 6-pixel grid. Reads as *present but not emphatic*.
- **Poor** — 45° hatch, light density. Reads as *visible but recessive*.
- **Do-not-route** — empty cell with a single diagonal strike. Reads as *crossed off*.

The four techniques are visually distinct at a glance, distinguishable when printed on a black-and-white office laser printer, and — critically — flip cleanly between light and dark mode because every stroke and fill references the theme's fg/bg variables.

## Dark-mode check

Toggle theme (top right). The Fit band inverts to solid-white-on-black; hatches and dots re-draw in white on black; the strike marks stay. Same diagram, no second asset.

## Three-technique cheat sheet (monochrome edition)

| Illustration shape | Technique | House-rule encoding |
|---|---|---|
| Flow, sequence, hierarchy | Mermaid | Border weight, dash, arrow thickness |
| Emphasis, strike, contrast | Inline SVG | Strike marks, frame weight, opacity tiers |
| Grid of categorical data | HTML + CSS | Solid fill, dots, hatches, strikes |

Every rendering agent for this book follows the same rule: two colours from theme variables, emphasis through technique rather than hue, third colour only with a written justification in the spec.
