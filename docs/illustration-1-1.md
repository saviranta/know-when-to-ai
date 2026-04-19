# Illustration 1.1 — Two gates above the method

Referenced in Chapter 1. Monochrome: black lines on white in light mode, inverted in dark mode. Emphasis on Tier-0 comes from heavier borders and double-weight rules, not colour.

```mermaid
flowchart TD
  subgraph TIER0["TIER 0 &mdash; before any tool is chosen"]
    direction LR
    G1["<b>Technochauvinism check</b><br/><i>Is this actually a technical problem?</i>"]
    G2["<b>Abolition check</b><br/><i>Is this categorically off-limits to automate?</i>"]
  end

  TIER0 ==> SPINE

  subgraph SPINE["TIER 1 &mdash; the method"]
    direction LR
    S1[Frame] --> S2[Diagnose] --> S3[Decompose] --> S4[Route] --> S5[Sequence] --> S6[Commit]
  end

  SPINE -.-> ATLAS[["Atlas &mdash; tools invoked at each stage"]]

  classDef tier0Gate stroke-width:3px,font-weight:bold;
  classDef tier1Stage stroke-width:1.5px;
  classDef atlasNote stroke-dasharray:4 4,stroke-width:1px,font-style:italic;
  class G1,G2 tier0Gate;
  class S1,S2,S3,S4,S5,S6 tier1Stage;
  class ATLAS atlasNote;
```

Encoding:

- Tier-0 gates — **3-pixel border** and bold type. Heavier border reads as gating.
- Tier-1 stages — standard border, standard weight. A sequence without visual drama.
- Atlas strip — dashed border, italic, reads as *ancillary*.
- Band arrow (Tier 0 → Tier 1) — thick (`==>`). Stage-to-stage arrows (within the spine) — normal. The band-to-band transition is the one emphasis in the diagram; everything else recedes.

## What the house rule buys

Switch dark mode on (top right). The whole diagram inverts to white-on-black without a second asset. The emphasis reads the same in both modes because it lives in weight and stroke, not hue.

## Where monochrome pushes back

Mermaid's default theme uses pale blues; we override via `themeVariables` to force fg/bg to pure fg/bg. If a future illustration needs a third visual layer (e.g. a deprecated vs current distinction that affects half the nodes), the spec will say so and justify adding one accent colour.

## Tradeoff summary

| Dimension | Notes |
|---|---|
| Editing cost | Very low — one Mermaid fence |
| Visual control | Weight, stroke, dash — no colour |
| Theme swap | Automatic (CSS variables + `MutationObserver` re-render) |
| Print / PDF | Yes — pure monochrome is print-ideal |
| Third colour | Only with written justification in the spec |
