# Toolkit — Sunset criteria worksheet

*Gate: G5 Commit. Category: commitment artefact.*

## What problem it solves

Pieces outlive their reason to exist. The world shifts, the substrate they replaced is gone, the assumption they ran on no longer holds — and the piece keeps running because nobody's job description includes *take it down.* The sunset criteria worksheet names the conditions under which the piece is retired, *before* those conditions are in play. Retirement becomes a pre-committed act, not a political one.

## How it is used

A **20-minute G5 conversation per piece**, produced at the same session as the triggers and cadence. The question is not *when will this retire?* but *what would have to be true for us to switch it off?* Answers are written as observable conditions, with a cadence for checking them and a named retirement action. The worksheet is attached to the commitment page and re-read at every review.

## Inputs

- The piece's original justification (what decisions depend on it; why it exists).
- The substrate the piece replaced — its residual state and the cost of re-activating it, if needed.
- The engagement's broader direction (planned replacements, architectural shifts).
- The piece's cost of running (compute, attention, risk capital).

## Outputs

- **Sunset conditions**: 2–5 pre-declared, observable situations that would retire the piece.
- A **retirement action** per condition: the executable path to take the piece down, including what replaces it (often the substrate it originally displaced, sometimes a successor piece).
- A **check cadence** (usually the review cadence) and a **monitoring scope** to watch for the conditions.
- A **sunset review** scheduled at a fixed point (commonly 6 or 12 months post-launch) regardless of conditions — a forced re-examination.

## Visualisation

<div style="max-width: 800px; margin: 2rem auto;">
<svg viewBox="0 0 800 280" xmlns="http://www.w3.org/2000/svg" role="img" aria-labelledby="sc-title">
  <title id="sc-title">Sunset criteria worksheet — three stacked condition rows, each with a trigger, a check cadence, and a retirement action</title>
  <style>
    .sc-rect { fill: var(--md-default-bg-color, #fff); stroke: var(--md-default-fg-color, #000); stroke-width: 1.4; }
    .sc-head { fill: var(--md-default-fg-color, #000); opacity: 0.1; stroke: var(--md-default-fg-color, #000); stroke-width: 1.4; }
    .sc-line { stroke: var(--md-default-fg-color, #000); stroke-width: 1.2; fill: none; }
    .sc-arrow { fill: var(--md-default-fg-color, #000); }
    .sc-label { font: 700 12px -apple-system, sans-serif; fill: var(--md-default-fg-color, #000); }
    .sc-sub { font: 400 11px -apple-system, sans-serif; fill: var(--md-default-fg-color, #000); }
    .sc-tag { font: italic 10px -apple-system, sans-serif; fill: var(--md-default-fg-color, #000); text-anchor: middle; opacity: 0.8; }
  </style>
  <defs><marker id="sc-a" markerWidth="9" markerHeight="9" refX="8" refY="4.5" orient="auto"><path d="M0,0 L8,4.5 L0,9 z" class="sc-arrow"/></marker></defs>
  <rect class="sc-head" x="40" y="30" width="220" height="36" />
  <text class="sc-label" x="150" y="53" text-anchor="middle">Sunset condition</text>
  <rect class="sc-head" x="270" y="30" width="220" height="36" />
  <text class="sc-label" x="380" y="53" text-anchor="middle">Check cadence + scope</text>
  <rect class="sc-head" x="500" y="30" width="260" height="36" />
  <text class="sc-label" x="630" y="53" text-anchor="middle">Retirement action</text>
  <rect class="sc-rect" x="40" y="76" width="220" height="55" />
  <text class="sc-sub" x="55" y="100">Baseline substrate restored</text>
  <text class="sc-sub" x="55" y="120">with &lt;5% deviation</text>
  <rect class="sc-rect" x="270" y="76" width="220" height="55" />
  <text class="sc-sub" x="285" y="100">Quarterly; baseline drift</text>
  <text class="sc-sub" x="285" y="120">vs. allocator output</text>
  <rect class="sc-rect" x="500" y="76" width="260" height="55" />
  <text class="sc-sub" x="515" y="100">Flip allocator flag off,</text>
  <text class="sc-sub" x="515" y="120">revert to rules baseline</text>
  <rect class="sc-rect" x="40" y="141" width="220" height="55" />
  <text class="sc-sub" x="55" y="165">Operator override rate</text>
  <text class="sc-sub" x="55" y="185">&gt; 35% sustained 4 weeks</text>
  <rect class="sc-rect" x="270" y="141" width="220" height="55" />
  <text class="sc-sub" x="285" y="165">Weekly during review,</text>
  <text class="sc-sub" x="285" y="185">by region</text>
  <rect class="sc-rect" x="500" y="141" width="260" height="55" />
  <text class="sc-sub" x="515" y="165">Post-mortem, then flag off</text>
  <text class="sc-sub" x="515" y="185">in affected regions</text>
  <rect class="sc-rect" x="40" y="206" width="220" height="55" />
  <text class="sc-sub" x="55" y="230">Planned replacement</text>
  <text class="sc-sub" x="55" y="250">ships to all regions</text>
  <rect class="sc-rect" x="270" y="206" width="220" height="55" />
  <text class="sc-sub" x="285" y="230">Quarterly;</text>
  <text class="sc-sub" x="285" y="250">release-plan check</text>
  <rect class="sc-rect" x="500" y="206" width="260" height="55" />
  <text class="sc-sub" x="515" y="230">Parallel-run for 4 weeks,</text>
  <text class="sc-sub" x="515" y="250">then decommission</text>
</svg>
</div>

*Three rows × three columns. Each row is a pre-committed retirement pathway — a condition, a way of detecting it, and the specific action that retires the piece when the condition holds.*

## Anatomy

**Conditions.** Observable, pre-declared states of the world. Not *"if the piece stops working well"* but *"if override rate exceeds 35% for four consecutive weeks,"* or *"if the baseline substrate re-converges on the piece's outputs within 5%."* The condition must be checkable without a new investigation.

**Retirement action.** The specific path to take the piece down. *Flip the flag,* *roll traffic back to the substrate,* *decommission after a 4-week parallel run.* If the retirement action needs inventing when the condition fires, the worksheet has not done its job.

**Check cadence + scope.** How the conditions are watched. Usually the review cadence carries this, but some sunset conditions need their own monitoring (input-distribution drift, competitor replacement shipping).

**Forced review.** A date — not condition-triggered — at which the engagement asks *is this piece still serving?* 6 or 12 months post-launch. Without the forced review, pieces with well-hidden assumptions stay running until the assumption breaks loudly, by which time the cost is already incurred.

**Successor path.** What replaces the piece. Sometimes the original substrate (rollback to rules). Sometimes a successor piece (planned replacement). Sometimes nothing — the piece retires because the need it served is gone. Naming the successor early prevents the piece from surviving on *we haven't built anything to replace it yet* grounds.

## Example

??? example "Paper trail — sunsetting the allocator"
    *G5 commitment session, 25 minutes. Priya (owner), Raj (ops), Ada (reviewer).*

    *T+0 — question framing.* Ada: *"under what conditions would we retire the allocator? Not *when will we retire it* — what would have to be true?"*

    *T+5 — condition 1: baseline reconvergence.* Priya: *"if the rules baseline we replaced catches up within 5%, we don't need the allocator. Carrier mix could shift back to the pattern the rules were tuned for."* Cadence: quarterly, scope = rerun the baseline on the current month's inputs, compare. Retirement action: flip the flag, revert to rules.

    *T+12 — condition 2: override rate.* Raj: *"if operators are overriding more than 35% of allocations for four weeks, the piece is no longer better than an operator with a map."* Cadence: weekly during review, by region. Retirement action: post-mortem, then flag-off in affected regions.

    *T+18 — condition 3: planned replacement.* Priya: *"the next-gen allocator design is in the roadmap for Q4 2027. If it ships, this piece retires via parallel-run."* Cadence: quarterly release-plan check. Retirement action: 4-week parallel run, then decommission.

    *T+22 — forced review.* Ada: *"regardless of conditions, a forced sunset review 12 months post-launch — 2027-05-14. Priya and Raj re-read the whole commitment page. If no conditions have fired, the question is not *can we keep it* but *is it still earning its keep*."*

    *T+25 — close.* Three conditions + forced review written on the commitment page. Successors named: rules baseline (conditions 1-2), next-gen allocator (condition 3), none (forced review).

    **One year later, 2027-05-14 — forced review.** Override rate steady at 12%, baseline drift 18% (allocator still clearly ahead), next-gen in design not yet ready. Piece continues. Cadence drops to monthly. Next forced review: 2028-05-14.

## Pitfalls

**Conditions without cadence.** The worksheet names conditions but not how they are checked. Six months pass; nobody has looked. The condition could be firing silently.

**Retirement action invented on the day.** The condition fires; the team realises they don't have the flag path, the parallel-run plan, or the successor ready. The piece keeps running because retiring it has become a project. The action must be pre-committed and testable.

**"We'll retire it when it's no longer useful."** Not a condition — a promise of future judgement. Every piece that survived past its usefulness started with this sentence in its worksheet.

**No forced review.** Without a calendar-triggered re-examination, pieces with slow-drift failure modes stay live. The forced review is the insurance against silent obsolescence.

**Sunk-cost argument at retirement.** The condition fires, the retirement action is ready, but someone argues *we spent six months building this.* The worksheet's job is to make retirement a pre-committed act so this argument is foreclosed. The commitment page's signature is acknowledgement that the sunset conditions are binding.

## When not to use

- One-shot pieces that run once and finish. Retirement is self-scheduled.
- Pieces with contractual or regulatory obligations that bound their lifetime externally — the contract *is* the sunset condition; the worksheet is thin.
- Pieces whose successor is already shipping in parallel and whose retirement is scheduled on the project plan. The worksheet is duplicative here, though a brief one-liner pointing to the plan preserves audit trail.

## Provenance

The discipline of pre-committing retirement conditions is standard in regulated-industry lifecycle management (pharmaceutical product lifecycle, aviation airworthiness directives). In software, the SRE book [1] documents production-systems retirement and deprecation practice. The broader management literature on sunset clauses in policy and programmes, reviewed in Eckenwiler [2], establishes the pattern that time-limited commitments get reviewed while indefinite commitments ossify.

## Related tools

- **Rollback-trigger design.** Triggers revert state; sunset retires the piece entirely.
- **Review-cadence matrix.** Carries the sunset-condition check.
- **Named-owner discipline.** The owner executes the retirement action.

## Verification

[1] Beyer B, Jones C, Petoff J, Murphy NR, editors. *Site Reliability Engineering: How Google Runs Production Systems*. O'Reilly; 2016. **[verified]** Deprecation and decommissioning chapter documents retirement discipline at production scale.

[2] Eckenwiler LA. Sunset provisions in legislation: a review of the literature. *Public Administration Review*. 2001;61(4):483–93. **[secondary]** Reviews the broader organisational evidence on time-limited commitments and their review dynamics.
