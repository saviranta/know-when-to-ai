# Toolkit — Total-cost-of-ownership ladder

*Gate: G3 Route (level-picking). Category: routing substrate.*

## What problem it solves

Each step up the AI capability ladder (rules → classical ML → LLM → RAG → agent) multiplies cost — not just compute, but labelling, oversight, infrastructure, incident response. Teams often consider only the compute line and discover the other costs after the piece ships. The total-cost-of-ownership (TCO) ladder forces the full cost stack to be estimated before routing commits. It answers: *at each capability level, what is the annual cost of owning this piece, and can the engagement sustain it?* It is how engagements avoid the pattern of building a sophisticated system, celebrating the launch, and then abandoning it 18 months later because no one budgeted for the ongoing care.

## How it is used

A **45-minute G3 exercise** for each routing candidate that has cleared the pair worksheet and, for LLM-family candidates, the adaptation decision tree. The ML practitioner and engagement owner build a table: rows are cost lines (compute, labelling, oversight, infrastructure, incident, audit, retraining), columns are the candidate levels. Each cell is an order-of-magnitude estimate. The total row at the bottom reveals how the levels compare at a whole-cost level. The decision is often not about cell-by-cell precision but about the order-of-magnitude gaps.

## Inputs

- Routing candidates — typically two or three (e.g., rules, classical ML, RAG).
- Expected production volume — queries per day, cases per month, etc.
- Team capacity for ongoing maintenance (oversight, labelling, retraining, incident response).
- Vendor pricing for compute / API if third-party.

## Outputs

- A **TCO table** — cost lines × candidate levels, in annual figures, with order-of-magnitude estimates.
- A **total row** showing annual TCO per candidate level.
- A **sensitivity note** — which assumptions drive the total; where order-of-magnitude changes would flip the decision.
- A **routing confirmation or redirect**: if a higher level's TCO is unsustainable given the engagement's value estimate, routing redirects to a lower level.

## Visualisation

<div style="max-width: 900px; margin: 2rem auto;">
<svg viewBox="0 0 800 380" xmlns="http://www.w3.org/2000/svg" role="img" aria-labelledby="tco-title">
  <title id="tco-title">TCO ladder — cost lines by capability level, totals at bottom</title>
  <style>
    .tco-rect { fill: var(--md-default-bg-color, #fff); stroke: var(--md-default-fg-color, #000); stroke-width: 1.4; }
    .tco-head { fill: var(--md-default-fg-color, #000); opacity: 0.1; stroke: var(--md-default-fg-color, #000); stroke-width: 1.4; }
    .tco-total { fill: var(--md-default-fg-color, #000); opacity: 0.15; stroke: var(--md-default-fg-color, #000); stroke-width: 1.6; }
    .tco-label { font: 700 12px -apple-system, sans-serif; fill: var(--md-default-fg-color, #000); }
    .tco-head-lbl { font: 700 12px -apple-system, sans-serif; fill: var(--md-default-fg-color, #000); text-anchor: middle; }
    .tco-val { font: 400 11px -apple-system, sans-serif; fill: var(--md-default-fg-color, #000); text-anchor: middle; }
    .tco-tag { font: italic 10px -apple-system, sans-serif; fill: var(--md-default-fg-color, #000); text-anchor: middle; opacity: 0.8; }
  </style>
  <rect class="tco-rect" x="30" y="30" width="180" height="36" />
  <text class="tco-label" x="45" y="52">Cost line</text>
  <rect class="tco-head" x="210" y="30" width="180" height="36" />
  <text class="tco-head-lbl" x="300" y="52">Rules</text>
  <rect class="tco-head" x="390" y="30" width="180" height="36" />
  <text class="tco-head-lbl" x="480" y="52">Classical ML</text>
  <rect class="tco-head" x="570" y="30" width="180" height="36" />
  <text class="tco-head-lbl" x="660" y="52">RAG (LLM)</text>
  <rect class="tco-rect" x="30" y="66" width="180" height="34" />
  <text class="tco-label" x="45" y="87">Compute / API</text>
  <rect class="tco-rect" x="210" y="66" width="180" height="34" />
  <text class="tco-val" x="300" y="87">~$1k</text>
  <rect class="tco-rect" x="390" y="66" width="180" height="34" />
  <text class="tco-val" x="480" y="87">~$5k</text>
  <rect class="tco-rect" x="570" y="66" width="180" height="34" />
  <text class="tco-val" x="660" y="87">~$60k</text>
  <rect class="tco-rect" x="30" y="100" width="180" height="34" />
  <text class="tco-label" x="45" y="121">Labelling</text>
  <rect class="tco-rect" x="210" y="100" width="180" height="34" />
  <text class="tco-val" x="300" y="121">—</text>
  <rect class="tco-rect" x="390" y="100" width="180" height="34" />
  <text class="tco-val" x="480" y="121">~$30k</text>
  <rect class="tco-rect" x="570" y="100" width="180" height="34" />
  <text class="tco-val" x="660" y="121">~$10k (eval only)</text>
  <rect class="tco-rect" x="30" y="134" width="180" height="34" />
  <text class="tco-label" x="45" y="155">Oversight</text>
  <rect class="tco-rect" x="210" y="134" width="180" height="34" />
  <text class="tco-val" x="300" y="155">~$5k</text>
  <rect class="tco-rect" x="390" y="134" width="180" height="34" />
  <text class="tco-val" x="480" y="155">~$25k</text>
  <rect class="tco-rect" x="570" y="134" width="180" height="34" />
  <text class="tco-val" x="660" y="155">~$50k</text>
  <rect class="tco-rect" x="30" y="168" width="180" height="34" />
  <text class="tco-label" x="45" y="189">Infrastructure</text>
  <rect class="tco-rect" x="210" y="168" width="180" height="34" />
  <text class="tco-val" x="300" y="189">~$2k</text>
  <rect class="tco-rect" x="390" y="168" width="180" height="34" />
  <text class="tco-val" x="480" y="189">~$15k</text>
  <rect class="tco-rect" x="570" y="168" width="180" height="34" />
  <text class="tco-val" x="660" y="189">~$40k</text>
  <rect class="tco-rect" x="30" y="202" width="180" height="34" />
  <text class="tco-label" x="45" y="223">Incident response</text>
  <rect class="tco-rect" x="210" y="202" width="180" height="34" />
  <text class="tco-val" x="300" y="223">~$2k</text>
  <rect class="tco-rect" x="390" y="202" width="180" height="34" />
  <text class="tco-val" x="480" y="223">~$10k</text>
  <rect class="tco-rect" x="570" y="202" width="180" height="34" />
  <text class="tco-val" x="660" y="223">~$30k</text>
  <rect class="tco-rect" x="30" y="236" width="180" height="34" />
  <text class="tco-label" x="45" y="257">Audit / compliance</text>
  <rect class="tco-rect" x="210" y="236" width="180" height="34" />
  <text class="tco-val" x="300" y="257">~$2k</text>
  <rect class="tco-rect" x="390" y="236" width="180" height="34" />
  <text class="tco-val" x="480" y="257">~$10k</text>
  <rect class="tco-rect" x="570" y="236" width="180" height="34" />
  <text class="tco-val" x="660" y="257">~$25k</text>
  <rect class="tco-rect" x="30" y="270" width="180" height="34" />
  <text class="tco-label" x="45" y="291">Retraining / refresh</text>
  <rect class="tco-rect" x="210" y="270" width="180" height="34" />
  <text class="tco-val" x="300" y="291">—</text>
  <rect class="tco-rect" x="390" y="270" width="180" height="34" />
  <text class="tco-val" x="480" y="291">~$20k</text>
  <rect class="tco-rect" x="570" y="270" width="180" height="34" />
  <text class="tco-val" x="660" y="291">~$20k</text>
  <rect class="tco-total" x="30" y="306" width="180" height="40" />
  <text class="tco-label" x="45" y="330">Annual TCO</text>
  <rect class="tco-total" x="210" y="306" width="180" height="40" />
  <text class="tco-val" x="300" y="330" font-weight="700">~$12k</text>
  <rect class="tco-total" x="390" y="306" width="180" height="40" />
  <text class="tco-val" x="480" y="330" font-weight="700">~$115k</text>
  <rect class="tco-total" x="570" y="306" width="180" height="40" />
  <text class="tco-val" x="660" y="330" font-weight="700">~$235k</text>
  <text class="tco-tag" x="400" y="370">Order-of-magnitude estimates. Each step up the ladder multiplies TCO; compare to expected value before committing.</text>
</svg>
</div>

*Seven cost lines × three candidate levels. The total row is the number the engagement owner must look at; compare to expected annual value before committing to the routing.*

## Anatomy

**Compute / API.** Inference costs at expected production volume. For LLMs, this is the most visible line — API spend per token × volume. For classical ML, serving infrastructure costs. For rules, near-zero.

**Labelling.** Human annotation cost — initial + ongoing. Classical ML is typically the heaviest; LLM pieces often need only evaluation-set labels; RAG pieces may need corpus curation labels.

**Oversight.** Human-in-the-loop review time, sample-based QA, incident triage time that's *expected* (not exceptional). An LLM piece with 2% of outputs flagged for review consumes real hours per week.

**Infrastructure.** Vector DBs, feature stores, monitoring pipelines, retraining orchestration. Scales with level: rules need almost nothing; agents need substantial pipelines.

**Incident response.** Budget for the unexpected — debugging, rollbacks, post-mortems. Proportional to the piece's blast radius and failure visibility.

**Audit / compliance.** Model cards, datasheets, explainability reporting, regulator-facing documentation. Minimal for rules; substantial for AI pieces, especially in regulated sectors.

**Retraining / refresh.** Classical ML retrains quarterly or on drift. LLM pieces may refresh prompts or fine-tunes. Both require paid human time plus compute.

**Order-of-magnitude estimation.** The ladder is not a budget request; it is a decision aid. Cell precision of ±50% is adequate; the value is in the *ratios* across columns. A $115k vs. $235k difference is load-bearing; a $115k vs. $130k difference is not.

**Sensitivity.** Name the one or two assumptions that drive each total. For RAG, typically API pricing and production volume. If API pricing drops 5x (has happened before), RAG's line changes dramatically. The ladder includes the assumption, not just the number.

## Example

??? example "Paper trail — TCO ladder for the yard-slot allocator"
    *G3 level-picking, W15 of 2026. Priya (owner), Alex (ML), Raj (engineering), Chen (dispatcher, consulting). Three candidate levels: rules, classical ML, LLM + RAG.*

    *Expected value of the piece.* From the framed problem paragraph and operational baseline: the allocator is expected to save ~$400k/year in cycle time at the two pilot yards, scaling linearly at rollout. So annual TCO under ~$100k is comfortably accretive; above ~$200k requires stronger proof.

    *Production volume assumption.* ~50k assignments/month at full rollout.

    *Rules.*

    - Compute: $1k (small service).
    - Labelling: $0.
    - Oversight: $5k (Chen reviews failures weekly, 1hr).
    - Infrastructure: $2k.
    - Incident: $2k.
    - Audit: $2k (rules are self-documenting).
    - Retraining: $0.
    - **Total: ~$12k/year.**

    *Classical ML.*

    - Compute: $5k (model serving).
    - Labelling: $30k (historical outcomes repurposed; small amount of active labelling for error modes).
    - Oversight: $25k (Chen + backup reviewing a 2% sample, 3hr/week × 50 weeks × 2 people).
    - Infrastructure: $15k (feature store, monitoring, retraining pipeline).
    - Incident: $10k.
    - Audit: $10k (model card, per-region compliance).
    - Retraining: $20k (quarterly retrain + engineering hours).
    - **Total: ~$115k/year.**

    *LLM + RAG.*

    - Compute: $60k (API calls at 50k assignments/month).
    - Labelling: $10k (RAG evaluation set only).
    - Oversight: $50k (Chen + backup reviewing 5% sample, generations harder to spot-check; 6hr/week × 50 × 2).
    - Infrastructure: $40k (vector DB, orchestration, observability for LLMs).
    - Incident: $30k (LLM failures are harder to diagnose).
    - Audit: $25k (more artefacts: model cards, datasheet, retrieval-quality tracking, hallucination monitoring).
    - Retraining: $20k (prompt refresh, retrieval corpus refresh).
    - **Total: ~$235k/year.**

    *Sensitivity.* The LLM line is driven by compute (50%) and oversight (20%). If API pricing drops 3x: LLM TCO drops to ~$195k — still above rules, still above classical ML. If volume triples: LLM TCO rises to ~$390k.

    *Decision.* Given expected value of ~$400k/year:

    - Rules at $12k: 97% margin. But rules cannot handle the piece (established earlier — yard state is too variable).
    - Classical ML at $115k: 71% margin. Comfortable.
    - LLM + RAG at $235k: 41% margin. Thin given uncertainty.

    The TCO ladder confirms what the pair worksheet suggested: classical ML routing. The RAG's flexibility advantages don't justify 2x the TCO for this piece's structured-input shape.

    *Paper trail.* TCO ladder filed with the pair worksheet. The 41% margin on LLM + RAG is the number that swung the decision — not the 20x compute gap on its own (which might have been dismissed as "we have budget") but the 2x total-TCO gap, shown explicitly.

## Pitfalls

**Compute-only accounting.** The most common version of this failure. Teams compare API costs and miss the oversight, incident, and audit lines — typically half of the total. The explicit row-by-row format prevents this.

**Zero-labelling assumption for LLM pieces.** LLM pieces still need evaluation labels, prompt-refinement labels, and (for RAG) retrieval-quality ground truth. Pretending otherwise is how LLM TCO gets understated.

**Rules' maintenance underestimated.** Rules seem to have zero ongoing cost until a policy changes and the rule base must be re-audited. In volatile policy environments, rules can be more expensive to maintain than ML.

**Treating TCO as static.** The ladder is for year 1; year 3 looks different as the piece accrues volume, edge cases, and staff churn. A 5-year projection is worth sketching where the piece is material.

**Confusing TCO with price-per-query.** API price-per-query is a compute-line input, not the TCO. A piece with $0.001 per query and 50k queries/month has a $60k compute line — often more than the API-per-query comparisons suggest at a glance.

**Skipping audit / compliance.** In regulated sectors, the audit line is often the largest. Ignoring it is how compliance cost blindsides the engagement six months after launch.

## When not to use

- Research or prototype pieces without a production commitment. TCO applies to things that will live; prototypes don't need a five-year view.
- Pieces where the capability-level difference is settled by other constraints (regulatory, contractual). TCO ladder informs; it doesn't override.
- Very small engagements where the 45-minute cost of the exercise exceeds the decision's stakes.

## Provenance

Total-cost-of-ownership accounting is a standard management-accounting practice, documented in Kaplan and Cooper's *Cost and Effect* [1]. Applied to software systems, TCO thinking is documented in Cusumano's *The Business of Software* [2]. The ML-specific adaptation — recognising that oversight and retraining are first-class cost lines — is emphasised in Sculley et al.'s *Hidden Technical Debt in Machine Learning Systems* [3].

## Related tools

- **Pair worksheet.** Upstream; TCO is a follow-up check on the winner of the pair worksheet.
- **Label budget calculation.** Feeds the labelling line of the TCO ladder.
- **Named-owner discipline (G5).** The oversight line on the TCO ladder becomes the named owner's work; the line's size shapes the owner's allocation.

## Verification

[1] Kaplan RS, Cooper R. *Cost and Effect: Using Integrated Cost Systems to Drive Profitability and Performance*. Harvard Business Review Press; 1998. **[verified]** Management-accounting discipline for activity-based cost attribution.

[2] Cusumano MA. *The Business of Software: What Every Manager, Programmer, and Entrepreneur Must Know to Thrive and Survive in Good Times and Bad*. Free Press; 2004. **[verified]** TCO applied to software businesses.

[3] Sculley D, Holt G, Golovin D, et al. Hidden technical debt in machine learning systems. *NeurIPS*. 2015. **[verified]** The canonical treatment of ML-specific hidden costs.
