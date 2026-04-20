# Toolkit — Offline evaluation

*Gate: G3 Route (Q3a empirical reads). Category: empirical read substrate.*

## What problem it solves

A routing decision made at G3 assumes the model or system will perform acceptably. Before live traffic touches it, that assumption must be tested against the data the team already has. Offline evaluation scores the candidate on held-out historical data — the cheapest, fastest empirical read available. It cannot tell the team how users will react, but it can tell the team whether the model is even in the right neighbourhood. A model that fails offline evaluation never gets to shadow, let alone canary.

## How it is used

A **2–10 day analytical exercise** depending on dataset size and complexity. The ML practitioner holds out a representative slice of historical data, scores the model against it using the pre-declared metric from the ML canvas, and compares the score against a pre-declared floor. Results go to the engagement in a written report: aggregate score, per-subgroup breakdown, error analysis of the worst cases. The output determines whether the piece proceeds to shadow.

## Inputs

- A trained model or fully-specified system.
- A held-out evaluation set — data the model has not seen, representative of the production input distribution.
- A pre-declared metric (from the ML canvas) and a pre-declared passing floor.
- Subgroup definitions: the conditions under which performance must be inspected separately (e.g., weekday vs. weekend, region, carrier class).

## Outputs

- An **aggregate score** on the evaluation set against the pre-declared metric.
- A **per-subgroup breakdown** — score disaggregated across the subgroups declared in advance.
- An **error analysis** — 20–50 hand-inspected failure cases with patterns tagged.
- A **go/no-go decision** for shadow deployment, with the pre-declared floor as the arbiter.

## Visualisation

<div style="max-width: 900px; margin: 2rem auto;">
<svg viewBox="0 0 800 300" xmlns="http://www.w3.org/2000/svg" role="img" aria-labelledby="oe-title">
  <title id="oe-title">Offline evaluation — held-out data scored by model, produces aggregate, per-subgroup, and error-analysis outputs</title>
  <style>
    .oe-rect { fill: var(--md-default-bg-color, #fff); stroke: var(--md-default-fg-color, #000); stroke-width: 1.4; }
    .oe-line { stroke: var(--md-default-fg-color, #000); stroke-width: 1.2; fill: none; }
    .oe-thin { stroke: var(--md-default-fg-color, #000); stroke-width: 0.6; fill: none; }
    .oe-arrow { fill: var(--md-default-fg-color, #000); }
    .oe-bar { fill: var(--md-default-fg-color, #000); opacity: 0.3; }
    .oe-label { font: 700 12px -apple-system, sans-serif; fill: var(--md-default-fg-color, #000); text-anchor: middle; }
    .oe-sub { font: 400 10px -apple-system, sans-serif; fill: var(--md-default-fg-color, #000); text-anchor: middle; }
    .oe-tag { font: italic 10px -apple-system, sans-serif; fill: var(--md-default-fg-color, #000); text-anchor: middle; opacity: 0.8; }
  </style>
  <defs><marker id="oe-a" markerWidth="9" markerHeight="9" refX="8" refY="4.5" orient="auto"><path d="M0,0 L8,4.5 L0,9 z" class="oe-arrow"/></marker></defs>
  <rect class="oe-rect" x="30" y="110" width="130" height="60" />
  <text class="oe-label" x="95" y="135">Held-out data</text>
  <text class="oe-sub" x="95" y="155">representative slice</text>
  <rect class="oe-rect" x="200" y="110" width="130" height="60" />
  <text class="oe-label" x="265" y="135">Model</text>
  <text class="oe-sub" x="265" y="155">candidate</text>
  <line class="oe-line" x1="160" y1="140" x2="200" y2="140" marker-end="url(#oe-a)" />
  <line class="oe-line" x1="330" y1="140" x2="380" y2="60" marker-end="url(#oe-a)" />
  <line class="oe-line" x1="330" y1="140" x2="380" y2="140" marker-end="url(#oe-a)" />
  <line class="oe-line" x1="330" y1="140" x2="380" y2="230" marker-end="url(#oe-a)" />
  <rect class="oe-rect" x="380" y="30" width="390" height="60" />
  <text class="oe-label" x="575" y="55">Aggregate score</text>
  <rect class="oe-bar" x="400" y="65" width="200" height="12" />
  <line class="oe-thin" x1="620" y1="60" x2="620" y2="82" />
  <text class="oe-sub" x="620" y="55">floor</text>
  <rect class="oe-rect" x="380" y="110" width="390" height="60" />
  <text class="oe-label" x="575" y="130">Per-subgroup breakdown</text>
  <rect class="oe-bar" x="400" y="145" width="60" height="10" />
  <text class="oe-sub" x="430" y="165">weekday</text>
  <rect class="oe-bar" x="475" y="145" width="40" height="10" />
  <text class="oe-sub" x="495" y="165">weekend</text>
  <rect class="oe-bar" x="530" y="145" width="55" height="10" />
  <text class="oe-sub" x="557" y="165">region A</text>
  <rect class="oe-bar" x="600" y="145" width="45" height="10" />
  <text class="oe-sub" x="622" y="165">region B</text>
  <rect class="oe-rect" x="380" y="190" width="390" height="60" />
  <text class="oe-label" x="575" y="210">Error analysis</text>
  <text class="oe-sub" x="575" y="230">20-50 hand-inspected cases, patterns tagged</text>
  <text class="oe-tag" x="400" y="280">Aggregate must clear the pre-declared floor; subgroup breakdown surfaces hidden failure patterns.</text>
</svg>
</div>

*The same held-out data produces three reports: an aggregate score against the floor, a subgroup breakdown, and a hand-inspected error-case set. Any one of the three can stop a promotion.*

## Anatomy

**Representative held-out slice.** The data the model has not seen, drawn to reflect the production input distribution. If the production distribution will differ materially from training (new region, new season, new carrier), the evaluation set must reflect the *production* distribution, not the *training* distribution.

**Pre-declared metric.** Set at the ML canvas stage. MAE for regression, precision/recall or top-k for classification/ranking, groupwise fairness metrics where relevant. Not chosen after seeing results.

**Pre-declared floor.** The minimum score that permits promoting to shadow. Informed by the cost of being wrong and the substrate the model is replacing (must beat a rules-based baseline, typically).

**Subgroup discipline.** Aggregate scores hide subgroup failures. Weekend cases, new-region cases, minority-class cases, high-stakes cases — each gets a separate breakdown. The pre-declared subgroups come from the stakeholder map and the pre-mortem.

**Error analysis.** A hand-inspection of 20–50 failure cases. Patterns that emerge — *"fails on carriers we haven't seen in 90 days"*, *"fails when weather = rain"* — are specific enough to repair. Aggregate error without this analysis is uninformative for improvement.

**Baseline comparison.** The candidate must beat what exists. If the current substrate is a rules engine, the model's score against the same evaluation set must be meaningfully higher. A model that matches rules offers no value for the added complexity.

## Example

??? example "Paper trail — offline evaluation for the yard-slot allocator"
    *G3a offline evaluation, W14 of 2026. Alex (ML) reports to the team.*

    *Setup.* Held-out slice: last 4 weeks of assignments at the two pilot yards, 47,000 cases. Pre-declared metric from the ML canvas: MAE in predicted cycle-time, with a floor of "beat rules baseline by ≥15%". Pre-declared subgroups: weekday/weekend, carrier priority class (P1-P4), yard (A/B).

    *Aggregate.* Rules baseline MAE: 8.2 minutes. Model MAE: 5.9 minutes. Improvement: 28%. Clears the 15% floor.

    *Subgroup breakdown.*

    - Weekday cases: model MAE 5.1 min; rules 7.9 min. 35% better. Clears floor.
    - Weekend cases: model MAE 8.8 min; rules 9.1 min. 3% better. *Does not clear floor.*
    - P1 priority: model 4.2 min; rules 6.8 min. 38% better.
    - P4 priority: model 7.3 min; rules 7.5 min. Statistically indistinguishable.
    - Yard A: 29% better. Yard B: 26% better. Similar.

    Two subgroup failures surface: weekend cases and P4 priority. The aggregate score is misleading without these.

    *Error analysis.* Alex hand-inspects 40 of the worst cases (MAE > 20 min).

    - 18 are weekend cases with priority shuffle patterns the training data under-represents. Mechanism: training set has 2 weekends per month; model has not seen enough weekend variance.
    - 9 are carriers that last appeared >120 days ago. Mechanism: carrier-specific features are stale.
    - 7 are hazardous-material shipments, where dispatcher override rate is near 100% anyway. Mechanism: safety-event pathway; AI should not be recommending here (already flagged as chaotic in Cynefin tagging).
    - 6 are genuine model errors with no clear pattern — the noise floor.

    *Decision.* Aggregate passes, but subgroup failures require action before shadow:

    1. Add a supervision gate for weekend cases during shadow — compare model to dispatcher more carefully on those.
    2. Add a carrier-staleness feature and retrain; or, add a fallback-to-rules path when carrier last-seen > 90 days.
    3. Route hazardous-material cases out of the allocator's scope entirely.

    *Paper trail.* Report filed. Pre-declared floor met on aggregate; two subgroup repairs completed before shadow kicks off. Shadow stage starts W16.

## Pitfalls

**Evaluation on training-distribution data when production will differ.** A model that scores 0.92 on the training distribution can score 0.65 on a production distribution that includes a new region. The evaluation set must look like production, not training.

**Aggregate-only reporting.** A 0.85 aggregate score with a 0.50 subgroup score for a minority population is a different story than 0.85 uniform. Subgroup failures are how real-world harms enter.

**Changing the metric after seeing results.** *"MAE isn't the best metric for this anyway; let's use median error."* This is how floors quietly move. The metric is fixed at the ML canvas; changes require re-approval and re-declaration.

**Skipping error analysis.** A number without cases is uninformative for repair. Looking at 40 cases takes an afternoon and surfaces patterns aggregate stats miss.

**Beating a weak baseline.** The rules baseline is often the *written* policy; the *practised* substrate (including operator judgement) may outperform it. Evaluating against the written baseline alone overstates the model's advantage.

**Treating offline as sufficient.** A passed offline evaluation is necessary, not sufficient. The piece still needs shadow and canary before progressive rollout.

## When not to use

- Pieces with no historical data (truly greenfield). Offline evaluation cannot simulate what has never happened; shadow becomes the first empirical read.
- Pieces whose value is inherently about live user interaction (recommendation acceptance, conversation quality); offline metrics capture a proxy at best.
- Rule-based systems where the evaluation is deterministic and consists of checking rule coverage — a different exercise documented under the decision-tables tool.

## Provenance

Offline evaluation is a foundational ML engineering practice documented in Hastie, Tibshirani, and Friedman's *The Elements of Statistical Learning* [1] and applied in practice literature like Huyen's *Designing Machine Learning Systems* [2]. The subgroup-breakdown discipline draws from fairness-aware ML literature, particularly Barocas, Hardt, and Narayanan's *Fairness and Machine Learning* [3].

## Related tools

- **ML canvas.** Declares the metric and floor that offline evaluation tests against.
- **Shadow deployment.** The next stage after offline evaluation passes.
- **Controlled A/B.** Comes after shadow; offline evaluation alone does not permit it.

## Verification

[1] Hastie T, Tibshirani R, Friedman J. *The Elements of Statistical Learning: Data Mining, Inference, and Prediction*. 2nd ed. Springer; 2009. **[verified]** Foundational treatment of held-out evaluation.

[2] Huyen C. *Designing Machine Learning Systems*. O'Reilly; 2022. **[verified]** Practical discipline for offline evaluation in ML pipelines.

[3] Barocas S, Hardt M, Narayanan A. *Fairness and Machine Learning: Limitations and Opportunities*. MIT Press; 2023. **[verified]** Subgroup disaggregation as a fairness-aware evaluation discipline.
