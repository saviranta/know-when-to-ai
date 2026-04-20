# Toolkit — Three-stage rollout pattern

*Gate: G4 Sequence. Category: rollout substrate.*

## What problem it solves

Shipping a piece directly to full production converts a single bad call into a cohort-wide incident. Three-stage rollout interposes two earlier stages — **shadow** and **canary** — before the piece reaches its full user population, so that the piece's first empirical reads happen on a cohort small enough to roll back from. The pattern sizes the protection to the blast radius: hard-irreversible, large-blast pieces get all three stages; small-blast pieces get fewer.

## How it is used

A **rollout plan written at G4**, attached to the sequencing sheet and inherited by G5. For each routed piece: name the stages, the cohort each stage touches, the metrics watched at each stage, the thresholds that promote from one stage to the next, and the rollback path at each stage. The plan is executed operationally — it is not a planning exercise but a running configuration.

## Inputs

- Reversibility class (from the paired G4 lens) — drives how many stages are needed.
- Blast-radius paragraph — drives the size of each cohort.
- A rollback substrate per stage (the thing the piece reverts to if a stage fails).
- Metrics on the owner's default dashboard to watch at each stage.

## Outputs

- A **staged rollout configuration** per piece: shadow → canary → progressive, or a subset appropriate to the blast.
- **Promotion criteria** between stages: pre-declared thresholds, not judgement calls.
- **Per-stage rollback paths**, each executable without escalation.

## Visualisation

<div style="max-width: 900px; margin: 2rem auto;">
<svg viewBox="0 0 800 280" xmlns="http://www.w3.org/2000/svg" role="img" aria-labelledby="rs-title">
  <title id="rs-title">Three-stage rollout — shadow, canary, progressive — with cohorts widening left to right</title>
  <style>
    .rs-rect { fill: var(--md-default-bg-color, #fff); stroke: var(--md-default-fg-color, #000); stroke-width: 1.6; }
    .rs-line { stroke: var(--md-default-fg-color, #000); stroke-width: 1.2; fill: none; }
    .rs-arrow { fill: var(--md-default-fg-color, #000); }
    .rs-label { font: 700 13px -apple-system, sans-serif; fill: var(--md-default-fg-color, #000); text-anchor: middle; }
    .rs-sub { font: 400 11px -apple-system, sans-serif; fill: var(--md-default-fg-color, #000); text-anchor: middle; }
    .rs-tag { font: italic 10px -apple-system, sans-serif; fill: var(--md-default-fg-color, #000); text-anchor: middle; opacity: 0.8; }
  </style>
  <defs><marker id="rs-a" markerWidth="9" markerHeight="9" refX="8" refY="4.5" orient="auto"><path d="M0,0 L8,4.5 L0,9 z" class="rs-arrow"/></marker></defs>
  <circle class="rs-rect" cx="120" cy="120" r="40" />
  <text class="rs-label" x="120" y="115">Shadow</text>
  <text class="rs-tag" x="120" y="132">no users</text>
  <circle class="rs-rect" cx="340" cy="120" r="60" />
  <text class="rs-label" x="340" y="115">Canary</text>
  <text class="rs-tag" x="340" y="132">small cohort</text>
  <circle class="rs-rect" cx="620" cy="120" r="90" />
  <text class="rs-label" x="620" y="115">Progressive</text>
  <text class="rs-tag" x="620" y="132">widening rings</text>
  <line class="rs-line" x1="165" y1="120" x2="275" y2="120" marker-end="url(#rs-a)" />
  <line class="rs-line" x1="405" y1="120" x2="525" y2="120" marker-end="url(#rs-a)" />
  <text class="rs-tag" x="220" y="110">promote</text>
  <text class="rs-tag" x="220" y="140">on threshold</text>
  <text class="rs-tag" x="465" y="110">promote</text>
  <text class="rs-tag" x="465" y="140">on threshold</text>
  <text class="rs-sub" x="120" y="215">Outputs logged, not actioned.</text>
  <text class="rs-sub" x="120" y="230">Compared to current substrate.</text>
  <text class="rs-sub" x="340" y="215">Small live cohort actioned.</text>
  <text class="rs-sub" x="340" y="230">Rollback within minutes.</text>
  <text class="rs-sub" x="620" y="215">Cohort widens in steps,</text>
  <text class="rs-sub" x="620" y="230">each step gated by metrics.</text>
</svg>
</div>

*Each circle represents a cohort; size conveys share of the population. Arrows are gated promotions — the piece moves right only when pre-declared thresholds have held for a pre-declared window.*

## Anatomy

**Shadow.** The piece runs on real inputs, but its outputs are not actioned. Outputs are logged and compared to the current substrate's. First empirical read without user exposure. Typical duration: days to weeks. Promotion criterion: output agreement with substrate above a pre-declared floor, across a representative input distribution.

**Canary.** The piece's outputs are actioned for a small, pre-declared cohort — one region, a percentage of traffic, or a named user set. Rollback from canary must complete in minutes. Typical duration: days. Promotion criterion: the canary cohort's outcome metrics match or beat the substrate's on the same cohort over the window.

**Progressive.** The piece ships to widening cohorts in pre-declared steps (e.g., 10% → 25% → 50% → 100%), each step gated by metric thresholds. A failure at any step reverts to the previous cohort size, not to zero; the failure is investigated on the cohort that exhibited it.

**Rollback paths.** Per stage, the piece must be able to revert without cross-team escalation. Shadow rollback: stop logging. Canary rollback: revert the cohort's traffic to the substrate. Progressive rollback: revert the most-recently-added cohort ring. Each rollback path is tested before the stage it protects goes live.

## Example

??? example "Paper trail — allocator rollout plan"
    *Yard-slot allocator piece. G4 sequencing output: shadow (3 weeks), canary (one region, 2 weeks), progressive (4 rings over 6 weeks).*

    **Shadow.** Allocator runs on live carrier feeds. Outputs logged; dispatch continues to use the rules baseline. Priya compares allocator outputs to rules outputs daily. Promotion criterion: agreement above 85% across 3 representative weeks, and no unexplained large disagreements.

    **Canary.** One region (the smallest, lowest-stakes) is routed to the allocator. Two weeks. Metrics: accuracy vs. baseline, operator override rate, P95 latency. Rollback path: flip the region's feature flag back to rules; staging-tested to complete in under 4 minutes.

    **Progressive.** Four rings over six weeks: 10% of remaining regions, then 25%, then 50%, then 100%. Each ring is gated on the same metrics as canary, with the windows extended to match the cumulative blast.

    **A failure at ring 2.** Operator override rate crosses threshold on one of the added regions. The ring reverts — those regions go back to the prior (canary-only) configuration. The failure is investigated on the specific region. Three weeks later, with the issue fixed, ring 2 reshipped to the remaining regions without further incident.

## Pitfalls

**Shadow that is not shadow.** Shadow outputs that influence any downstream state (retraining data, operator suggestions) are not shadow — they are unlogged canary. The agreement metric the team trusted for promotion is contaminated.

**Canary too small or too homogeneous.** A canary that is a friendly region or a specific customer segment does not exercise the piece's input distribution. When the piece ships progressive, the first new ring is the real first empirical read.

**Progressive without per-step rollback.** *"We'll roll back if needed"* at 50% is not a plan. Per-step rollback is executable only if the prior ring's configuration is still warm, and only if the rollback path has been tested. Otherwise the promotion is not reversible.

**Skipping stages because the piece feels safe.** The sequencing tags are the decision, not a reviewer's intuition. A piece tagged hard-irreversible with a large blast that ships direct because it seems fine is the classic incident pattern.

## When not to use

- Small-blast, fully-reversible pieces. One stage may be enough.
- Pieces whose substrate cannot run in parallel (pure substrate replacements). For these, a different rollout shape is needed.
- One-shot pieces that run once and finish. Staged rollout is a pattern for pieces that run continuously.

## Provenance

Shadow, canary, and progressive rollout are standard in large-scale continuous-delivery practice. Humble & Farley's *Continuous Delivery* [1] formalises the pattern and names the three stages; the SRE book [2] documents Google's operational discipline around each stage, including per-stage rollback and promotion thresholds.

## Related tools

- **Reversibility classes.** The class sets whether all three stages are needed.
- **Blast-radius estimation.** Sizes the cohort at each stage.
- **Rollback-trigger design.** The triggers at G5 are what fire within a stage; the stages themselves are the outer shell.

## Verification

[1] Humble J, Farley D. *Continuous Delivery: Reliable Software Releases through Build, Test, and Deployment Automation*. Addison-Wesley; 2010. **[verified]** Formalises shadow / canary / progressive and the promotion discipline.

[2] Beyer B, Jones C, Petoff J, Murphy NR, editors. *Site Reliability Engineering: How Google Runs Production Systems*. O'Reilly; 2016. **[verified]** Rollout-operations chapter documents the per-stage rollback discipline.
