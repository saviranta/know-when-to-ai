# Toolkit — Label budget calculation

*Gate: G3 Route (level-picking). Category: routing substrate.*

## What problem it solves

Classical ML and fine-tuning both require labelled data. How much is enough is not a question anyone can answer in the abstract; it depends on the piece's difficulty, its noise floor, and the cost of being wrong. Pieces that demand more labels than the engagement can afford to produce have been misrouted — the team will either ship with too few labels and fail, or spend months collecting labels the engagement never budgeted for. The label budget calculation is the arithmetic that forces that decision to be explicit before training starts. It answers a specific question: *at the required performance level, how many labels does this piece need, and can we produce them?*

## How it is used

A **60-minute G3 exercise** run before finalising the routing for any classical ML or fine-tuning piece. The ML practitioner estimates labels needed per the piece's expected complexity (rule of thumb, learning curve from literature, pilot labelling). The engagement owner estimates labels the team can produce per week (domain-expert time × per-label time). If the production rate would take longer than the engagement can wait, the piece is either rerouted or rescoped.

## Inputs

- A routing candidate that requires labels (classical ML, fine-tuning).
- Performance floor from the ML canvas.
- Access to domain experts who can label.
- A rough estimate of per-label labelling time (e.g., 40 seconds for binary classification; 8 minutes for structured extraction).
- A reference dataset or learning-curve evidence for pieces of similar difficulty.

## Outputs

- A **label requirement** — estimated number of labels needed to meet the performance floor.
- A **production rate** — labels per week the team can realistically produce.
- A **time-to-sufficiency** — label requirement ÷ production rate.
- A **decision**: proceed, rescope (lower the floor, narrow the distribution), or reroute (to a lower-label approach like rules, or to prompting / RAG).

## Visualisation

<div style="max-width: 900px; margin: 2rem auto;">
<svg viewBox="0 0 800 300" xmlns="http://www.w3.org/2000/svg" role="img" aria-labelledby="lb-title">
  <title id="lb-title">Label budget calculation — need, rate, and time-to-sufficiency with decision gate</title>
  <style>
    .lb-rect { fill: var(--md-default-bg-color, #fff); stroke: var(--md-default-fg-color, #000); stroke-width: 1.4; }
    .lb-bar { fill: var(--md-default-fg-color, #000); opacity: 0.25; stroke: var(--md-default-fg-color, #000); stroke-width: 1.2; }
    .lb-rate { fill: var(--md-default-fg-color, #000); opacity: 0.12; stroke: var(--md-default-fg-color, #000); stroke-width: 1.2; }
    .lb-line { stroke: var(--md-default-fg-color, #000); stroke-width: 1.2; fill: none; }
    .lb-thin { stroke: var(--md-default-fg-color, #000); stroke-width: 0.6; fill: none; stroke-dasharray: 3,2; }
    .lb-arrow { fill: var(--md-default-fg-color, #000); }
    .lb-label { font: 700 12px -apple-system, sans-serif; fill: var(--md-default-fg-color, #000); text-anchor: middle; }
    .lb-sub { font: 400 10px -apple-system, sans-serif; fill: var(--md-default-fg-color, #000); text-anchor: middle; }
    .lb-num { font: 700 14px -apple-system, sans-serif; fill: var(--md-default-fg-color, #000); text-anchor: middle; }
    .lb-tag { font: italic 10px -apple-system, sans-serif; fill: var(--md-default-fg-color, #000); text-anchor: middle; opacity: 0.8; }
  </style>
  <rect class="lb-rect" x="30" y="30" width="230" height="80" />
  <text class="lb-label" x="145" y="52">Label requirement</text>
  <text class="lb-num" x="145" y="82">15,000</text>
  <text class="lb-sub" x="145" y="100">labels needed to meet floor</text>
  <rect class="lb-rect" x="30" y="140" width="230" height="80" />
  <text class="lb-label" x="145" y="162">Production rate</text>
  <text class="lb-num" x="145" y="192">300 / week</text>
  <text class="lb-sub" x="145" y="210">2 experts × 150 labels/week</text>
  <rect class="lb-rect" x="300" y="85" width="230" height="80" />
  <text class="lb-label" x="415" y="107">Time-to-sufficiency</text>
  <text class="lb-num" x="415" y="137">50 weeks</text>
  <text class="lb-sub" x="415" y="155">requirement ÷ rate</text>
  <line class="lb-line" x1="260" y1="70" x2="300" y2="110" marker-end="url(#lb-a)" />
  <line class="lb-line" x1="260" y1="180" x2="300" y2="140" marker-end="url(#lb-a)" />
  <defs><marker id="lb-a" markerWidth="9" markerHeight="9" refX="8" refY="4.5" orient="auto"><path d="M0,0 L8,4.5 L0,9 z" class="lb-arrow"/></marker></defs>
  <rect class="lb-rect" x="570" y="85" width="200" height="80" />
  <text class="lb-label" x="670" y="107">Decision gate</text>
  <text class="lb-sub" x="670" y="127">engagement horizon:</text>
  <text class="lb-sub" x="670" y="142">12 weeks</text>
  <text class="lb-label" x="670" y="160">→ reroute or rescope</text>
  <line class="lb-line" x1="530" y1="125" x2="570" y2="125" marker-end="url(#lb-a)" />
  <line class="lb-thin" x1="260" y1="250" x2="770" y2="250" />
  <text class="lb-tag" x="515" y="275">If time-to-sufficiency &gt; engagement horizon: reroute (rules, RAG) or rescope (lower floor, narrow scope).</text>
</svg>
</div>

*Label requirement ÷ production rate = time-to-sufficiency. Compare to engagement horizon; if exceeded, reroute or rescope.*

## Anatomy

**Label requirement — estimation methods.** Three approaches, in order of preference:

1. *Pilot labelling.* Label a small set (100-500), train, measure performance. Extrapolate the learning curve.
2. *Literature reference.* For common piece shapes (image classification, text classification, structured extraction), published learning curves give order-of-magnitude estimates.
3. *Heuristic rule of thumb.* Deep learning: 1,000-10,000 per class for reasonable performance. Tabular classical ML with engineered features: 100-1,000 per class. These are for calibration, not commitment.

**Production rate.** Experts available × weekly hours × labels per hour. Adjust downward for label quality review (10-30% time), inter-annotator disagreement resolution, and expert fatigue. Production rates measured in week-two of labelling are more realistic than week-one peak rates.

**Time-to-sufficiency.** The ratio. Compare to engagement horizon (typically 3-6 months). If ratio exceeds horizon, the piece as specified cannot ship.

**Decision branches.** Exceed-horizon cases have four responses: (a) reroute to a lower-label approach — rules, zero/few-shot prompting, RAG; (b) rescope — lower the performance floor or narrow the input distribution to reduce label need; (c) buy labels — external annotation services; (d) defer — add label collection to the backlog and revisit in a later engagement. Option (a) is the default; (c) and (d) are expensive and slow.

**Active learning as a multiplier.** Active labelling (prioritise the labels the model is most uncertain about) typically cuts requirement by 2-10x over random labelling. This is a real multiplier but requires the model's training loop to be fast enough to be iterative. Active learning cannot be assumed; it must be implemented.

## Example

??? example "Paper trail — label budget for two pieces"
    *G3 level-picking, W10 of 2026. Alex (ML), Priya, and domain expert Chen. Two classical-ML candidates from the decomposition.*

    **Piece A: slot-assignment cycle-time prediction.**

    - *Required performance:* MAE ≤ 6 minutes (from ML canvas).
    - *Pilot labelling:* Alex trained on 1k, 2k, 5k samples of historical assignments (already labelled by outcome: actual cycle time). Learning curve suggests 4-8k samples reach MAE 6 min.
    - *Label requirement:* ~6,000 historical assignments with outcomes.
    - *Production rate:* Not applicable — labels are *passively* collected from outcomes in the existing data platform. No human labelling needed.
    - *Time-to-sufficiency:* 0 weeks — the engagement already has 47,000 historical records with cycle-time outcomes.
    - *Decision:* proceed. Label supply is not a constraint.

    **Piece B: dispatcher intent classifier for override reasons.**

    - *Required performance:* F1 ≥ 0.80 on the five override-reason classes (from ML canvas).
    - *Pilot labelling:* 250 overrides hand-labelled by Chen. Learning curve plus literature reference suggests 3-5k labels per class for F1 0.80. Five classes × 4,000 = 20,000 labels.
    - *Label requirement:* 20,000 labels.
    - *Production rate:* Chen (the only dispatcher available to label) can produce ~200 labels/week. Chen has 20% labelling time available.
    - *Time-to-sufficiency:* 100 weeks (~2 years). Engagement horizon is 5 months.
    - *Decision:* Cannot proceed as routed.
      - Option A: *Rescope*. Drop to two classes (*"carrier-related"* vs. *"yard-related"*) — requires ~5k labels, 25 weeks. Still exceeds horizon.
      - Option B: *Reroute to zero-shot LLM classification*. The pair worksheet is revisited; given the label constraint, LLM-zero-shot might be the right routing even at higher per-prediction cost.
      - Option C: *Defer to phase 2*. The override classifier is nice-to-have, not load-bearing. Defer.
    - *Chosen:* Option C. Piece B is dropped from this engagement's scope and re-considered in a later engagement after more labelling infrastructure exists.

    *Paper trail.* The two budget calculations produced one "proceed" and one "drop from scope". Without the calculation, piece B would have been a hidden 2-year project.

## Pitfalls

**Assuming passive labels cover the piece.** Outcome-based labels cover the piece's output (cycle time), not the piece's causes (why this cycle time). Pieces that need *reason* labels require active labelling even when *outcome* labels are abundant.

**Ignoring inter-annotator disagreement.** If Chen and Pat disagree on 25% of labels, the ground-truth ceiling for the model is bounded by that disagreement. Labelling more does not help past that point; cleaner label definitions do.

**Using optimistic rates.** Week-one labelling is 2x week-five labelling. Early rates are optimistic; plan on week-five rates.

**Skipping pilot labelling.** *"Deep learning usually needs thousands of labels"* is a heuristic, not a number. Pilot labelling is cheap; skipping it risks a 5x miscalculation.

**Treating active learning as free.** Active learning requires infrastructure (uncertainty sampling, rapid retraining, label queue). If that infrastructure doesn't exist, the 3x multiplier doesn't either.

**Forgetting evaluation labels.** The evaluation set also needs labels — typically 500-5,000 more, held out from training. Label requirement must include these.

## When not to use

- Zero-shot / few-shot LLM pieces where the labelling requirement is in-example, not dataset-level. Label budget calculation does not apply; retrievable-quality test and TCO ladder do.
- Rule-based pieces (no labels needed).
- Pieces whose label source is the model itself (self-supervision). Different budget logic applies.

## Provenance

Learning-curve estimation and label-budget reasoning are documented in Hestness et al.'s *Deep Learning Scaling is Predictable, Empirically* [1]. Active learning as a label multiplier is documented in Settles' survey [2]. Inter-annotator discipline and gold-set construction practices are covered in Ratner et al.'s work on weak supervision and labelling [3].

## Related tools

- **ML canvas.** Declares the performance floor the budget is calculated against.
- **Adaptation decision tree.** Alternative route if labels are infeasible (RAG / prompting).
- **Total-cost-of-ownership ladder.** The labelling cost becomes a line item on the TCO ladder.

## Verification

[1] Hestness J, Narang S, Ardalani N, et al. Deep learning scaling is predictable, empirically. *arXiv:1712.00409*. 2017. **[verified]** Learning-curve evidence for label-requirement estimation.

[2] Settles B. *Active Learning*. Morgan & Claypool; 2012. **[verified]** Canonical treatment of active labelling.

[3] Ratner A, Bach SH, Ehrenberg H, et al. Snorkel: rapid training data creation with weak supervision. *VLDB Journal*. 2020. **[verified]** Labelling discipline at scale.
