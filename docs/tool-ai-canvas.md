# Toolkit — AI canvas

*Gate: G3 Route (Q3 routing deliberation). Category: routing substrate.*

## What problem it solves

Routing a leaf to an AI capability level demands explicit answers to questions that are easy to leave implicit: *what is the prediction, what action follows, what outcome matters, who trains, who runs, who monitors?* The AI canvas — Agrawal–Gans–Goldfarb's seven-box grid — forces the routing team to fill in those answers on one page before committing. A leaf that cannot fill the canvas is a leaf not ready for AI routing; the unfillable cells name what the engagement still has to learn.

## How it is used

A **90-minute G3 workshop**, led by the G3 chair. The canvas is a 7-cell grid printed poster-sized or drawn on a whiteboard. The chair populates it in a fixed order: *outcome → judgement → action → prediction → input → training → feedback*. Gaps are noted aloud and recorded. The canvas is photographed, transcribed, and attached to the routing map.

## Inputs

- A decomposition leaf the chair believes AI-shaped.
- The JTBD job statements (the outcome cell's anchor).
- SIPOC or system description (the input cell's anchor).
- The decision tables (to confirm rules are insufficient before invoking AI).

## Outputs

- A **filled canvas** with all seven cells populated, or with specific cells flagged as *unknown, engagement open question*.
- **Routing recommendation** — the AI capability level that fits the canvas; often emerges from the prediction cell's granularity.
- **Empirical-read plan** — one of shadow deployment, offline evaluation, controlled A/B, matched to the leaf's current evidence.
- **Abandonment note** — canvases that cannot be filled on central cells are flagged; these leaves don't route to AI.

## Visualisation

<div style="max-width: 900px; margin: 2rem auto;">
<svg viewBox="0 0 800 320" xmlns="http://www.w3.org/2000/svg" role="img" aria-labelledby="ac-title">
  <title id="ac-title">AI canvas — seven cells in a 3x3 grid with prediction centre, surrounded by action, judgement, outcome, input, training, feedback</title>
  <style>
    .ac-rect { fill: var(--md-default-bg-color, #fff); stroke: var(--md-default-fg-color, #000); stroke-width: 1.4; }
    .ac-centre { fill: var(--md-default-fg-color, #000); opacity: 0.12; stroke: var(--md-default-fg-color, #000); stroke-width: 1.8; }
    .ac-label { font: 700 12px -apple-system, sans-serif; fill: var(--md-default-fg-color, #000); }
    .ac-sub { font: 400 10px -apple-system, sans-serif; fill: var(--md-default-fg-color, #000); }
    .ac-tag { font: italic 10px -apple-system, sans-serif; fill: var(--md-default-fg-color, #000); text-anchor: middle; opacity: 0.8; }
  </style>
  <rect class="ac-rect" x="40" y="40" width="230" height="80" />
  <text class="ac-label" x="55" y="62">Prediction</text>
  <text class="ac-sub" x="55" y="80">What we're forecasting</text>
  <text class="ac-sub" x="55" y="96">from the input data.</text>
  <rect class="ac-rect" x="285" y="40" width="230" height="80" />
  <text class="ac-label" x="300" y="62">Judgement</text>
  <text class="ac-sub" x="300" y="80">How we weigh the cost of</text>
  <text class="ac-sub" x="300" y="96">different mistakes.</text>
  <rect class="ac-rect" x="530" y="40" width="230" height="80" />
  <text class="ac-label" x="545" y="62">Action</text>
  <text class="ac-sub" x="545" y="80">What the prediction</text>
  <text class="ac-sub" x="545" y="96">causes us to do.</text>
  <rect class="ac-rect" x="40" y="130" width="230" height="80" />
  <text class="ac-label" x="55" y="152">Outcome</text>
  <text class="ac-sub" x="55" y="170">What counts as success,</text>
  <text class="ac-sub" x="55" y="186">in measurable terms.</text>
  <rect class="ac-centre" x="285" y="130" width="230" height="80" />
  <text class="ac-label" x="400" y="155" text-anchor="middle">The prediction</text>
  <text class="ac-sub" x="400" y="175" text-anchor="middle">is the core of the model;</text>
  <text class="ac-sub" x="400" y="190" text-anchor="middle">other cells explain why it matters.</text>
  <rect class="ac-rect" x="530" y="130" width="230" height="80" />
  <text class="ac-label" x="545" y="152">Input</text>
  <text class="ac-sub" x="545" y="170">Data the prediction reads.</text>
  <text class="ac-sub" x="545" y="186">Source, freshness, access.</text>
  <rect class="ac-rect" x="40" y="220" width="230" height="80" />
  <text class="ac-label" x="55" y="242">Training</text>
  <text class="ac-sub" x="55" y="260">Labelled history used to</text>
  <text class="ac-sub" x="55" y="276">fit the model.</text>
  <rect class="ac-rect" x="285" y="220" width="230" height="80" />
  <text class="ac-label" x="300" y="242">Feedback</text>
  <text class="ac-sub" x="300" y="260">How outcomes return to</text>
  <text class="ac-sub" x="300" y="276">improve the prediction.</text>
  <rect class="ac-rect" x="530" y="220" width="230" height="80" />
  <text class="ac-label" x="545" y="242">Boundary</text>
  <text class="ac-sub" x="545" y="260">What's out of scope —</text>
  <text class="ac-sub" x="545" y="276">and why.</text>
</svg>
</div>

*The prediction cell is the canvas's centre; outcome, judgement, and action define the decision context, while input, training, and feedback define the data loop. The boundary cell records what the engagement chooses not to do.*

## Anatomy

**Prediction.** What the AI forecasts from observable input. Named in one sentence, with the output form specified (*a probability between 0 and 1*, *a class label from K classes*, *a real-valued score*).

**Judgement.** How the business weighs different kinds of error. A false-positive costs X; a false-negative costs Y. Judgement is the ingredient that turns a prediction into an action.

**Action.** What the system does based on the prediction and the judgement. Named specifically. *"Reassign the slot automatically"*, *"flag for dispatcher review"*, *"escalate to supervisor."*

**Outcome.** What counts as success. Measurable. *Average unloading time*, *operator override rate*, *carrier retention*.

**Input.** Data the prediction reads. Sources, access, freshness, quality — the same variables SIPOC has already named for the process.

**Training.** Labelled history used to fit the model. Quantity (rows), representativeness (coverage of condition combinations), labels (what they mean, who produced them).

**Feedback.** How outcomes return to improve the prediction. Online learning? Periodic retraining? No feedback loop at all? The feedback cell names the answer.

**Boundary.** What's explicitly out of scope. Decisions the AI does not make; populations the AI does not see; error cases where the AI defers. Often the most important cell for governance.

## Example

??? example "Paper trail — filling the canvas for the yard-slot allocator"
    *G3 Q3 canvas session, 90 minutes. Priya (owner), Raj, Alex (ML engineer). Chair: Ada.*

    *T+0 — outcome.* Ada: *"start at the outcome cell — what counts as success?"* Priya: *"total unloading cycle time — drop the 16-minute growth, ideally more."* Secondary: operator override rate below 20% (if it goes higher, the operators aren't trusting it and it's not actually running).

    *T+15 — judgement.* Raj: *"a bad assignment that costs 10 minutes of unloading time is worse than a slow-to-respond recommender."* Recorded: *time-cost of a wrong assignment is ~10x the time-cost of a delayed recommendation.*

    *T+30 — action.* The piece outputs a slot recommendation. Ada: *"automatic or dispatcher-reviewed?"* Priya: *"dispatcher-reviewed — the piece recommends, the dispatcher confirms. Override is always available."* Recorded.

    *T+40 — prediction.* Alex: *"given current yard state, truck attributes, carrier priority, and historical unload-time at each slot, predict which slot minimises expected cycle time."* Output: a ranking over available slots.

    *T+55 — input.* Carrier feed, yard-map state (digital), truck attributes (manifested weight, unload type), historical unload times per slot. Known risk: digital yard-map lags (30-min weekend lag).

    *T+65 — training.* Alex: *"we have 18 months of historical slot assignments + unload times. About 450,000 rows. Labels are good — we logged everything. Distribution covers most condition combinations; underrepresented: weekend priority overrides."* Gap flagged — the training data has fewer weekend-priority cases than post-deployment reality might have.

    *T+75 — feedback.* Alex: *"retrain monthly on the rolling last 90 days. Online learning is out of scope — adds governance complexity without much gain in this domain."* Recorded.

    *T+85 — boundary.* Ada insists: *"what's out of scope?"* The team writes: *hazardous-material slot assignment (out of scope, routed to a rules table), cross-yard assignment (out of scope, assumes single-yard), driver-hours violation rescue (out of scope, goes to escalation)*.

    *T+90 — close.* Canvas filled; one training gap flagged. Routing recommendation: classical ML (gradient-boosted tree) with dispatcher-in-the-loop action — not an LLM, not a multi-agent system. The canvas made the prediction small and the action narrow; the architecture followed.

## Pitfalls

**Prediction cell left abstract.** *"Predict the best slot"* without an output form. The prediction's form (ranking, score, class) determines the model type; without it, the rest of the canvas drifts.

**Judgement cell skipped.** *"False positives and false negatives are both bad"* — the canvas is not filled. Every AI system makes mistakes; the canvas demands an explicit weighing.

**Outcome = accuracy.** Model accuracy is a metric, not an outcome. The outcome is what the business cares about — cycle time, retention, override rate. Accuracy is a diagnostic.

**Boundary cell empty.** The boundary is the cell that matters most for governance. If the team cannot name what's out of scope, they haven't thought about scope yet.

**Filling all cells regardless.** A canvas filled with *"TBD"* everywhere isn't filled — it's a form with words in it. Unknowns are flagged, not hidden.

**Treating the canvas as a plan.** The canvas summarises the routing decision at a leaf; it does not replace the empirical read at G3a or the commitment artefacts at G5.

## When not to use

- Leaves that have already failed earlier gates (Tier 0, G2). Don't fill a canvas for a refused engagement.
- Leaves where rules (decision table / DMN) already cover the decision. The AI canvas is for leaves that genuinely need a prediction.
- Very simple prediction tasks where the canvas is overkill (a single lookup table, a tiny classifier). Use the ML canvas's compressed form or skip to the pair worksheet.

## Provenance

Agrawal, Gans, and Goldfarb's *Prediction Machines* [1] introduced the AI canvas as a structured decision-support artefact for AI routing. The underlying decomposition — separating prediction from judgement — is the book's central analytical move and derives from the economics of information [2].

## Related tools

- **ML canvas.** A closely-related template focused on the model and its feedback loop.
- **Pair worksheet.** A deeper routing substrate when the canvas confirms AI; pairs algorithmic classes against the prediction.
- **Decision tables.** Run before the canvas — if they cover the leaf, the canvas is unneeded.

## Verification

[1] Agrawal A, Gans J, Goldfarb A. *Prediction Machines: The Simple Economics of Artificial Intelligence*. Harvard Business Review Press; 2018. **[verified]** Introduces the AI canvas and the prediction-vs-judgement decomposition.

[2] Stigler GJ. The economics of information. *Journal of Political Economy*. 1961;69(3):213–25. **[verified]** Foundational treatment of information economics underlying the canvas.
