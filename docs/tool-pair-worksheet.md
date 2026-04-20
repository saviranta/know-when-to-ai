# Toolkit — Pair worksheet

*Gate: G3 Route (Q3 routing deliberation). Category: routing substrate.*

## What problem it solves

A decomposition leaf that is routing-candidate for AI often has *multiple* AI capability levels that could plausibly handle it — a classical ML model could work, an LLM-with-RAG could work, an agent framework could work. Picking one without comparing is how engagements end up at the wrong level. The pair worksheet forces a head-to-head comparison: two routing candidates evaluated against the same five criteria, on one page, before the decision is made. It is the last-chance check before the canvas commits to a level.

## How it is used

A **60-minute G3 workshop**, run after the AI canvas and the Cynefin tag are done. The chair draws a two-column worksheet: *candidate A on the left, candidate B on the right*, five rows for the criteria (fit, cost, control, change-rate, failure mode). The team fills both columns concurrently, with domain and ML practitioners in the room. At the bottom, a single-sentence routing recommendation. Not a scorecard — a comparison that prompts argument.

## Inputs

- A completed AI canvas.
- A Cynefin tag.
- A proposed routing to an AI capability level (the candidate), plus one meaningfully different alternative the chair proposes.

## Outputs

- A **filled worksheet** — two columns, five rows, a routing recommendation.
- A **reasoning paragraph** — 3–5 sentences on why candidate A is preferred over B (or vice versa).
- Flagged **unknown cells**: where neither column can be filled without additional information; these become work items that must close before routing commits.

## Visualisation

<div style="max-width: 900px; margin: 2rem auto;">
<svg viewBox="0 0 800 320" xmlns="http://www.w3.org/2000/svg" role="img" aria-labelledby="pw-title">
  <title id="pw-title">Pair worksheet — two columns (candidate A, candidate B) and five rows (fit, cost, control, change-rate, failure mode)</title>
  <style>
    .pw-rect { fill: var(--md-default-bg-color, #fff); stroke: var(--md-default-fg-color, #000); stroke-width: 1.4; }
    .pw-head { fill: var(--md-default-fg-color, #000); opacity: 0.1; stroke: var(--md-default-fg-color, #000); stroke-width: 1.4; }
    .pw-select { fill: var(--md-default-fg-color, #000); opacity: 0.06; stroke: var(--md-default-fg-color, #000); stroke-width: 1.4; }
    .pw-label { font: 700 12px -apple-system, sans-serif; fill: var(--md-default-fg-color, #000); text-anchor: middle; }
    .pw-sub { font: 400 10px -apple-system, sans-serif; fill: var(--md-default-fg-color, #000); }
    .pw-lbl { font: 700 11px -apple-system, sans-serif; fill: var(--md-default-fg-color, #000); }
    .pw-tag { font: italic 10px -apple-system, sans-serif; fill: var(--md-default-fg-color, #000); text-anchor: middle; opacity: 0.8; }
  </style>
  <rect class="pw-rect" x="40" y="30" width="140" height="36" />
  <text class="pw-lbl" x="60" y="53">Criterion</text>
  <rect class="pw-head" x="190" y="30" width="280" height="36" />
  <text class="pw-label" x="330" y="53">Candidate A — classical ML</text>
  <rect class="pw-head" x="480" y="30" width="280" height="36" />
  <text class="pw-label" x="620" y="53">Candidate B — LLM + RAG</text>
  <rect class="pw-rect" x="40" y="66" width="140" height="40" />
  <text class="pw-lbl" x="60" y="91">Fit</text>
  <rect class="pw-select" x="190" y="66" width="280" height="40" />
  <text class="pw-sub" x="200" y="91">structured tabular input</text>
  <rect class="pw-rect" x="480" y="66" width="280" height="40" />
  <text class="pw-sub" x="490" y="91">overkill for tabular</text>
  <rect class="pw-rect" x="40" y="106" width="140" height="40" />
  <text class="pw-lbl" x="60" y="131">Cost</text>
  <rect class="pw-select" x="190" y="106" width="280" height="40" />
  <text class="pw-sub" x="200" y="131">~$400/mo serving</text>
  <rect class="pw-rect" x="480" y="106" width="280" height="40" />
  <text class="pw-sub" x="490" y="131">~$8k/mo serving</text>
  <rect class="pw-rect" x="40" y="146" width="140" height="40" />
  <text class="pw-lbl" x="60" y="171">Control</text>
  <rect class="pw-select" x="190" y="146" width="280" height="40" />
  <text class="pw-sub" x="200" y="171">inspectable; auditable</text>
  <rect class="pw-rect" x="480" y="146" width="280" height="40" />
  <text class="pw-sub" x="490" y="171">harder to audit</text>
  <rect class="pw-rect" x="40" y="186" width="140" height="40" />
  <text class="pw-lbl" x="60" y="211">Change-rate</text>
  <rect class="pw-rect" x="190" y="186" width="280" height="40" />
  <text class="pw-sub" x="200" y="211">retrain monthly</text>
  <rect class="pw-select" x="480" y="186" width="280" height="40" />
  <text class="pw-sub" x="490" y="211">zero retraining</text>
  <rect class="pw-rect" x="40" y="226" width="140" height="40" />
  <text class="pw-lbl" x="60" y="251">Failure mode</text>
  <rect class="pw-select" x="190" y="226" width="280" height="40" />
  <text class="pw-sub" x="200" y="251">clear — metric drift</text>
  <rect class="pw-rect" x="480" y="226" width="280" height="40" />
  <text class="pw-sub" x="490" y="251">opaque — hallucination</text>
  <text class="pw-tag" x="400" y="290">Shaded: wins. Classical ML selected on 4/5 criteria for this leaf.</text>
</svg>
</div>

*Five criteria × two candidates. Shaded cells indicate the winning candidate for that criterion. The routing recommendation falls out of the balance of shaded cells, not a sum.*

## Anatomy

**Fit.** Does the candidate handle the leaf's problem shape? Structured tabular input favours classical ML; unstructured text + knowledge-base queries favour LLM + RAG; multi-step actions with tool use favour tool-using agents. Fit is the most diagnostic criterion.

**Cost.** Total cost of ownership. Compute, licensing, engineering time, ongoing maintenance. Order-of-magnitude differences matter; 20% differences usually don't.

**Control.** How inspectable and auditable is the candidate? Decision tables are fully inspectable. Classical ML is inspectable at the feature and prediction level. LLMs are opaque. Agents are opaque *and* composite. Control falls as capability rises.

**Change-rate.** How often the candidate needs retraining, re-tuning, or re-prompting. Classical ML: monthly retraining on drift. LLM: prompts can be tuned continuously; weights are not retrained in the engagement. Domain drift behaves differently for each.

**Failure mode.** What does failure look like? Classical ML: metric drift — observable and monitorable. LLM: hallucination or silent quality collapse — harder to detect. Agents: multi-step path failures — hardest. The failure mode determines how monitoring is set up.

## Example

??? example "Paper trail — classical ML vs. LLM + RAG for the allocator"
    *G3 Q3 pair worksheet, 55 minutes. Priya, Alex, Raj. Chair: Ada. Candidates: classical ML (gradient-boosted tree) vs. LLM + RAG (retrieve historical assignments, generate recommendation).*

    *T+0 — why both.* Ada: *"the AI canvas routes this to prediction + ranking. Alex proposes classical ML. But the team's also exploring LLM patterns elsewhere. Comparing them here costs us 45 minutes and might prevent a wrong routing."*

    *T+5 — fit.* Alex: *"input is tabular — yard state, truck, carrier features. Classical ML is natively fit. LLM would need to serialise features into text; unnecessary translation."* Winner: A.

    *T+15 — cost.* Alex: *"classical ML: serving ~$400/mo at the expected volume. LLM + RAG: serving ~$8k/mo, 20x more."* Raj: *"we have budget for either, but the 20x makes a difference for re-running counterfactuals."* Winner: A.

    *T+25 — control.* Ada: *"how inspectable?"* Alex: *"classical ML: feature importance, per-prediction explanation (SHAP). LLM: the generation path is not inspectable; we can log the retrieval step but not the model's reasoning."* For a piece that's dispatcher-reviewed, classical ML's inspectability matters — dispatchers can understand why a slot was recommended. Winner: A.

    *T+35 — change-rate.* Alex: *"classical ML retrains monthly. LLM prompt can be tuned any time."* Priya: *"the allocator's inputs drift at a rate of months, not days. Monthly retraining matches."* Prompt tuning's advantage doesn't matter at this drift speed. Winner: A (or neutral — the change-rate isn't a constraint here).

    Actually, reconsidering: *tuning the LLM prompt is zero-retraining-cost*, which is a real advantage in a domain where the team wants to iterate. Winner (for this criterion): B.

    *T+45 — failure mode.* Alex: *"classical ML: MAE drift is observable via monitoring. LLM: hallucinated slot recommendations (suggesting a non-existent slot) or silent quality collapse."* For a piece that's dispatcher-reviewed, hallucination is visible (dispatcher catches it); but *silent* collapse — recommendations that look plausible but are subtly worse — is the LLM failure mode to worry about. Monitoring for it requires outcome comparison, which is slower. Winner: A.

    *T+50 — recommendation.* Four of five criteria favour A. Reasoning paragraph: *"Classical ML fits the leaf's structured-input, auditable-recommendation shape; the LLM's generation flexibility buys nothing we need, at 20x cost and materially worse failure visibility. Routing: classical ML. Re-examine if the input shape becomes unstructured (e.g., free-text carrier instructions) or if regulatory audit demands change."*

    *T+55 — close.* Worksheet filed with the routing map. Reasoning paragraph signed by Priya (owner), Alex (ML), Ada (chair). The allocator piece routes to classical ML.

## Pitfalls

**Scorecard illusion.** Turning the worksheet into a scorecard (points per criterion) suggests a precision that isn't there. The value is the argument per row, not the total.

**Choosing a weak second candidate.** The pair worksheet works only if the alternative is plausible. Pairing classical ML against *no AI* is a different exercise; the pair worksheet is for comparing candidate routings that both pass the AI-is-needed threshold.

**Filling cells without evidence.** *"Classical ML is cheaper"* — without an order-of-magnitude estimate — is not filling the cost cell. Numbers, even rough ones, beat adjectives.

**Ignoring control.** Engineering teams often discount control and over-weight fit/cost. Control falls hardest on the teams that later have to explain the system's decisions to operators, customers, or regulators.

**Running the worksheet only for the preferred candidate.** The chair picks a straw-man alternative to knock down. If the alternative loses every criterion, the worksheet wasn't run in good faith.

## When not to use

- Leaves where only one candidate is plausible (a rule-based decision table, for example). No pair to compare.
- Leaves at the level-picking stage — the pair worksheet is for routing, the adaptation-decision-tree is for picking among LLM / RAG / agents specifically.
- Very small engagements where a 60-minute comparison is overhead. But note: the cost of a wrong routing usually dwarfs the comparison cost.

## Provenance

The head-to-head comparison pattern is a standard technique in decision analysis, documented in Keeney and Raiffa's *Decisions with Multiple Objectives* [1]. The specific five-criterion form used here is an engineering-practice adaptation common in ML routing decisions; it draws on architectural-review literature more broadly [2].

## Related tools

- **AI canvas.** Upstream; its outputs feed the worksheet.
- **Adaptation decision tree.** Downstream for leaves already routed to the LLM / agent space; picks among them.
- **ML canvas.** Fills in the winning candidate once the pair worksheet decides.

## Verification

[1] Keeney RL, Raiffa H. *Decisions with Multiple Objectives: Preferences and Value Trade-offs*. Cambridge University Press; 1976. **[verified]** The canonical treatment of multi-criteria decision analysis.

[2] Bass L, Clements P, Kazman R. *Software Architecture in Practice*. 4th ed. Addison-Wesley; 2021. **[verified]** Architectural-decision review practices.
