# Toolkit — Review-cadence matrix

*Gate: G5 Commit. Category: commitment artefact.*

## What problem it solves

A piece that shipped without a review date has no scheduled moment to ask *is this still doing what we thought?* Drift accumulates silently; the piece keeps running on the original assumptions long after those assumptions stopped holding. The review-cadence matrix assigns each piece a pre-declared review interval and a pre-declared review scope, so the *is-this-still-correct* question is on someone's calendar, not in someone's hope.

## How it is used

A **15-minute G5 conversation per piece**, following the rollback-trigger and named-owner work. The matrix is a two-column worksheet — *interval* × *scope* — with the piece's characteristics (blast, reversibility, drift susceptibility) picking the cell. The cadence is written on the commitment page with the next review date filled in; the matrix lives as the reference for how cadences get chosen across the engagement.

## Inputs

- The piece's blast-radius paragraph and reversibility class (both from G4).
- The triggers and their windows (drift-susceptible triggers need more frequent review).
- The owner's existing review rituals (weekly ops review, monthly business review) — the cadence should usually piggyback on something the owner already runs.

## Outputs

- A **cadence** per piece: the interval between reviews (e.g., weekly, monthly, quarterly).
- A **scope** per piece: what is checked at each review (drift against triggers, input-distribution shift, override rate, user complaints, sunset criteria).
- The **next review date**, written on the commitment page, populated in the owner's calendar.

## Visualisation

<div style="max-width: 700px; margin: 2rem auto;">
<svg viewBox="0 0 700 340" xmlns="http://www.w3.org/2000/svg" role="img" aria-labelledby="rcm-title">
  <title id="rcm-title">Review-cadence matrix — interval axis by scope axis, with cells indicating which cadence fits which piece class</title>
  <style>
    .rcm-rect { fill: var(--md-default-bg-color, #fff); stroke: var(--md-default-fg-color, #000); stroke-width: 1.4; }
    .rcm-fill { fill: var(--md-default-fg-color, #000); opacity: 0.1; stroke: var(--md-default-fg-color, #000); stroke-width: 1.4; }
    .rcm-line { stroke: var(--md-default-fg-color, #000); stroke-width: 1.2; fill: none; }
    .rcm-label { font: 700 12px -apple-system, sans-serif; fill: var(--md-default-fg-color, #000); text-anchor: middle; }
    .rcm-ax { font: 700 13px -apple-system, sans-serif; fill: var(--md-default-fg-color, #000); }
    .rcm-sub { font: 400 11px -apple-system, sans-serif; fill: var(--md-default-fg-color, #000); text-anchor: middle; }
    .rcm-tag { font: italic 10px -apple-system, sans-serif; fill: var(--md-default-fg-color, #000); text-anchor: middle; opacity: 0.8; }
  </style>
  <text class="rcm-ax" x="80" y="40">Scope →</text>
  <text class="rcm-ax" x="20" y="90" transform="rotate(-90 20 90)">Interval ↓</text>
  <text class="rcm-label" x="230" y="70">Triggers + drift</text>
  <text class="rcm-label" x="380" y="70">+ input shift</text>
  <text class="rcm-label" x="540" y="70">+ sunset criteria</text>
  <text class="rcm-label" x="60" y="125" text-anchor="start">Weekly</text>
  <text class="rcm-label" x="60" y="195" text-anchor="start">Monthly</text>
  <text class="rcm-label" x="60" y="265" text-anchor="start">Quarterly</text>
  <rect class="rcm-fill" x="160" y="95" width="140" height="50" />
  <text class="rcm-sub" x="230" y="120">high-blast,</text>
  <text class="rcm-sub" x="230" y="134">hard-irreversible</text>
  <rect class="rcm-rect" x="310" y="95" width="140" height="50" />
  <text class="rcm-sub" x="380" y="124">—</text>
  <rect class="rcm-rect" x="460" y="95" width="140" height="50" />
  <text class="rcm-sub" x="540" y="124">—</text>
  <rect class="rcm-rect" x="160" y="165" width="140" height="50" />
  <text class="rcm-sub" x="230" y="194">—</text>
  <rect class="rcm-fill" x="310" y="165" width="140" height="50" />
  <text class="rcm-sub" x="380" y="190">mid-blast,</text>
  <text class="rcm-sub" x="380" y="204">soft-irreversible</text>
  <rect class="rcm-rect" x="460" y="165" width="140" height="50" />
  <text class="rcm-sub" x="540" y="194">—</text>
  <rect class="rcm-rect" x="160" y="235" width="140" height="50" />
  <text class="rcm-sub" x="230" y="264">—</text>
  <rect class="rcm-rect" x="310" y="235" width="140" height="50" />
  <text class="rcm-sub" x="380" y="264">—</text>
  <rect class="rcm-fill" x="460" y="235" width="140" height="50" />
  <text class="rcm-sub" x="540" y="260">low-blast,</text>
  <text class="rcm-sub" x="540" y="274">reversible</text>
  <text class="rcm-tag" x="380" y="315">The piece's class picks the cell; the cell picks the cadence + scope.</text>
</svg>
</div>

*Interval axis (rows) × scope axis (columns). Each piece sits in exactly one cell; the cell names the review's frequency and what it covers.*

## Anatomy

**Interval.** How often the review happens. Typical values: weekly (high blast or fast-drifting), monthly (standard), quarterly (stable, low-blast). The interval ties to the expected rate of change, not the calendar's convenience.

**Scope.** What the review covers. Minimum: check the triggers have not fired silently and the piece's metrics are in range. Standard: add input-distribution shift and override-rate review. Full: add sunset-criteria check — is the piece's reason-to-exist still there?

**Next review date.** A specific date, not a cadence promise. *"Monthly"* without a date is not a review; it is an intention. The commitment page carries the date; the owner's calendar carries the invite.

**Piggyback.** A review on a standalone calendar slot is a review that gets skipped the first busy week. The matrix prefers cadences that ride existing rituals — the team's weekly ops review, the monthly business review, the quarterly planning cycle. Review-as-adjunct-to-existing-ritual survives; review-as-standalone-meeting does not.

**Review record.** Each review produces a one-line note: date, who attended, what was checked, what changed (if anything). The record is the audit trail — three months later, the question *"was this reviewed in June?"* has a yes/no answer.

## Example

??? example "Paper trail — cadences for the four freight pieces"
    *G5 commitment session, 20 minutes across all four pieces.*

    **Piece A — escalation workflow** (low-blast, fully reversible). Ada: *"quarterly, scope limited to trigger firing and operator complaint rate. Piggyback on the quarterly ops review."* Priya agrees. Next review: 2026-08-14.

    **Piece C — ETA triage** (mid-blast, soft-irreversible, carrier-feed dependent). Ada: *"monthly, scope includes input-shift on the carrier feed — that's the thing most likely to drift. Piggyback on the monthly dispatch review."* Next review: 2026-06-14.

    **Piece D — allocator** (high-blast, hard-irreversible). Ada: *"weekly for the first quarter post-launch, while the empirical read is still thin. After 12 weeks of stable triggers, drop to monthly."* Priya: *"weekly is heavy."* Ada: *"the piece is hard-irreversible. The cost of missing drift for three weeks is the cost the piece was allowed to incur by existing."* Priya accepts. Next review: 2026-05-21; cadence re-evaluation date: 2026-08-14.

    **Piece B — dock solver** (mid-blast, fully reversible). Ada: *"monthly, scope triggers + override rate. Piggyback on the monthly yard review."* Next review: 2026-06-14.

    **Close.** Four cadences on four commitment pages, four calendar invites sent before the session ends. Ada flags the allocator's cadence step-down date on the engagement-level sequencing sheet so it is not forgotten.

    *Week 7 post-launch.* Piece D's weekly review catches an override-rate drift on one region two weeks before it would have crossed the trigger threshold. The drift is traced to a carrier-mix shift. Investigated, patched, closed — without a rollback firing.

## Pitfalls

**Cadence without scope.** *"Monthly review"* that doesn't say what is reviewed drifts into a status meeting. Scope is as important as interval.

**Intervals that don't match the drift.** A piece whose input distribution shifts weekly cannot be reviewed quarterly. The cadence should reflect how fast the piece's *world* changes, not how fast the team can schedule a meeting.

**Standalone review meetings.** *"Let's set up a monthly slot to review the allocator."* The first slot is well-attended; the third is cancelled. Reviews must ride existing rituals.

**Review without record.** The review happened, but there's no written trace. Six months later nobody remembers whether the override-rate anomaly was discussed. The one-line record is the difference between a review and a recollection.

**Cadence that never steps down or up.** Weekly reviews for a piece that has been stable for a year waste attention. Quarterly reviews for a piece that has started drifting are negligent. Cadences are re-evaluated at pre-declared points, not when someone notices.

## When not to use

- One-shot pieces that run once. No cadence — the review is either before the run (a go/no-go) or after (a post-mortem).
- Pieces where the rollback trigger windows already span the review interval. The trigger is the review; adding a meeting is duplication.

## Provenance

Deming's Plan-Do-Study-Act cycle [1] establishes the general discipline of scheduled re-examination as a feature of running operations, not an exception. The Google SRE book [2] documents production-systems cadence discipline at operating scale. Toyota's kata practice [3] is the reference treatment of cadence-plus-scope as the shape of reviews that survive.

## Related tools

- **Rollback-trigger design.** Triggers run continuously; cadence reviews check whether the triggers are still the right triggers.
- **Named-owner discipline.** The review is in the owner's calendar.
- **Sunset criteria worksheet.** The review checks whether sunset has arrived.

## Verification

[1] Deming WE. *The New Economics for Industry, Government, Education*. 2nd ed. MIT Press; 1994. **[verified]** PDSA cycle as the foundation of scheduled operational re-examination.

[2] Beyer B, Jones C, Petoff J, Murphy NR, editors. *Site Reliability Engineering: How Google Runs Production Systems*. O'Reilly; 2016. **[verified]** Production-review cadence discipline.

[3] Rother M. *Toyota Kata: Managing People for Improvement, Adaptiveness, and Superior Results*. McGraw-Hill; 2010. **[verified]** Cadence-plus-scope as the shape of improvement reviews.
