# Toolkit — Model cards

*Gate: G3 Route (Q3b controls documentation). Category: routing substrate.*

## What problem it solves

A trained model is an object with non-trivial properties: what it was trained on, what it should and should not be used for, how it performs on different subgroups, known failure modes. Without a standard artefact for these properties, teams reconstruct them ad hoc — usually imperfectly, usually after the piece has already shipped. Mitchell and colleagues' model card [1] is the standard form: a one-document summary of a model's provenance, intended use, performance, and limitations, written in plain language and produced as part of the model's release. For the engagement, the model card is how the piece's evidence is communicated to downstream users and reviewers without requiring them to re-derive it.

## How it is used

A **2-4 hour G3 exercise**, typically by the ML practitioner with input from the engagement owner. The card is drafted from the ML canvas, offline evaluation report, and subgroup breakdowns — the evidence already exists, the card organises it. Templates exist (the original Mitchell et al. template, Hugging Face's simplified form, the Google Model Cards Toolkit). The card is attached to the model artefact in the model registry and to the commitment page; it is reviewed in the SMACTR audit and updated whenever the model is retrained or repurposed.

## Inputs

- A trained model that is a deployment candidate.
- The ML canvas, offline evaluation report, subgroup performance breakdown.
- The training dataset's datasheet (separate tool), for provenance.
- The piece's intended-use specification.

## Outputs

- A **model card** — typically 2-6 pages covering: model details (version, training date, owner), intended use (in-scope, out-of-scope), factors (relevant subgroups), metrics, evaluation data, training data summary, quantitative analyses (subgroup performance), ethical considerations, caveats and recommendations.
- **Flagged unknowns** — sections where data is insufficient; these become work items.
- A **registry entry** — the card attached to the model artefact with a stable reference.

## Visualisation

<div style="max-width: 900px; margin: 2rem auto;">
<svg viewBox="0 0 800 340" xmlns="http://www.w3.org/2000/svg" role="img" aria-labelledby="mc-title">
  <title id="mc-title">Model card — 9 standard sections covering details, use, performance, limitations</title>
  <style>
    .mc-rect { fill: var(--md-default-bg-color, #fff); stroke: var(--md-default-fg-color, #000); stroke-width: 1.4; }
    .mc-head { fill: var(--md-default-fg-color, #000); opacity: 0.08; stroke: var(--md-default-fg-color, #000); stroke-width: 1.4; }
    .mc-label { font: 700 12px -apple-system, sans-serif; fill: var(--md-default-fg-color, #000); }
    .mc-sub { font: 400 10px -apple-system, sans-serif; fill: var(--md-default-fg-color, #000); }
    .mc-tag { font: italic 10px -apple-system, sans-serif; fill: var(--md-default-fg-color, #000); text-anchor: middle; opacity: 0.8; }
  </style>
  <rect class="mc-head" x="30" y="30" width="740" height="40" />
  <text class="mc-label" x="50" y="55">Model card — yard-slot allocator v1.2</text>
  <rect class="mc-rect" x="30" y="80" width="360" height="56" />
  <text class="mc-label" x="40" y="100">1. Model details</text>
  <text class="mc-sub" x="40" y="118">GBT regression, trained 2026-04-12, owner Alex Kim.</text>
  <rect class="mc-rect" x="410" y="80" width="360" height="56" />
  <text class="mc-label" x="420" y="100">2. Intended use</text>
  <text class="mc-sub" x="420" y="118">Weekday yard-A allocations. Not for weekends or yard B.</text>
  <rect class="mc-rect" x="30" y="146" width="360" height="56" />
  <text class="mc-label" x="40" y="166">3. Factors</text>
  <text class="mc-sub" x="40" y="184">Weekday/weekend, priority class, carrier cohort.</text>
  <rect class="mc-rect" x="410" y="146" width="360" height="56" />
  <text class="mc-label" x="420" y="166">4. Metrics</text>
  <text class="mc-sub" x="420" y="184">MAE (minutes); top-1 slot match rate.</text>
  <rect class="mc-rect" x="30" y="212" width="360" height="56" />
  <text class="mc-label" x="40" y="232">5. Evaluation data</text>
  <text class="mc-sub" x="40" y="250">Held-out 4 wks; 47k cases; weekday-weighted.</text>
  <rect class="mc-rect" x="410" y="212" width="360" height="56" />
  <text class="mc-label" x="420" y="232">6. Training data</text>
  <text class="mc-sub" x="420" y="250">18 mo dispatcher logs; see datasheet v1.0.</text>
  <rect class="mc-rect" x="30" y="278" width="360" height="56" />
  <text class="mc-label" x="40" y="298">7. Quantitative analyses</text>
  <text class="mc-sub" x="40" y="316">MAE 5.9 min; weekday 5.1, weekend 8.8.</text>
  <rect class="mc-rect" x="410" y="278" width="360" height="56" />
  <text class="mc-label" x="420" y="298">8. Ethical considerations &amp; 9. Caveats</text>
  <text class="mc-sub" x="420" y="316">See sections 8-9 in full card.</text>
</svg>
</div>

*Nine standard sections. Each section is short; the card fits on a handful of pages. The structure is what makes model cards auditable and comparable across pieces.*

## Anatomy

**Model details.** Version, training date, owner, type of model, citation or reference, licence.

**Intended use.** Primary intended uses; primary intended users; out-of-scope use cases. The out-of-scope section is particularly important — it is where the engagement says what the piece is *not* for, forestalling misuse.

**Factors.** Relevant groups, instrumentation, environments. The factors declared here drive the subgroup analysis in section 7 and the ongoing monitoring.

**Metrics.** What is measured and why, including decision thresholds. Pre-declared at the ML canvas; the card records them.

**Evaluation data.** What the model was evaluated on; motivation for choosing it; preprocessing. Without this section, the reported metrics are uninterpretable.

**Training data.** Summary of training data; pointer to the full datasheet. Provenance.

**Quantitative analyses.** Results broken down by the factors declared in section 3. Aggregate + subgroup. Intersectional if relevant.

**Ethical considerations.** Known risks, affected groups, sensitive data handling. The questions the pre-mortem and RMF Map function surfaced.

**Caveats and recommendations.** Known weaknesses, recommended use patterns, upgrade paths, known unknowns. This section is where the card stays honest — engagements that leave it empty are signalling polish over accuracy.

## Example

??? example "Paper trail — model card for the yard-slot allocator v1.2"
    *W18 of 2026. Alex drafts the card; Priya and Mariana (SMACTR auditor) review.*

    **Model details.** Yard-slot allocator v1.2. Gradient-boosted tree regression. Trained 2026-04-12 on data through 2026-03-31. Owner: Alex Kim (ML). Deployment owner: Priya Chen (operations).

    **Intended use.**

    - *Primary.* Recommend unload slot for arriving carriers at yard A during weekday operations (Mon-Fri, 06:00-22:00). Dispatcher-in-the-loop — dispatcher makes the final assignment.
    - *Out of scope.* Weekend operations (training data insufficient). Yard B (not yet evaluated). Hazardous-material shipments (routed to safety pathway). Any use without dispatcher review.
    - *Users.* Dispatchers at yard A.

    **Factors.** Weekday vs. weekend (weekend = OOS); priority class P1-P4; carrier cohort (large / medium / small); season (winter ≠ summer).

    **Metrics.** MAE in predicted cycle-time (primary). Top-1 slot match with dispatcher's actual choice (agreement proxy).

    **Evaluation data.** Held-out 4-week slice, 47,000 cases, weekday-weighted. Representative of production distribution at yard A post-launch.

    **Training data.** 18 months of dispatcher logs at yard A. Full provenance in *Yard-A dispatcher log datasheet v1.0* (attached).

    **Quantitative analyses.**

    - Aggregate MAE: 5.9 min. Floor was 6 min; passes.
    - Weekday subgroup: 5.1 min. Weekend subgroup: 8.8 min *(out of scope)*.
    - Priority class P1: 4.2 min. P4: 7.3 min. Some degradation for low-priority; within tolerance.
    - Carrier cohort: large 5.1; medium 6.0; small 7.2. Small carrier cohort has fewer training examples; monitor.

    **Ethical considerations.**

    - Dispatchers retain final decision authority. The model is a recommender.
    - Carriers are not directly informed of model-driven recommendations; the dispatcher delivers the assignment.
    - No personal data in training features (carrier-level, not driver-level).
    - A/B analysis confirmed no material differential impact across carrier size cohorts.

    **Caveats and recommendations.**

    - The model's training data under-represents weekend operations and small carriers. Weekend is out of scope; small-carrier performance is acceptable but monitor.
    - A new yard (e.g., yard B) requires re-training, not just re-deployment. Shadow before promote.
    - The model cannot encode carrier-relationship history known to dispatchers. This is a known boundary.
    - Retrain cadence: quarterly, on drift alerts or calendar, whichever first.

    *Paper trail.* Card attached to the model artefact v1.2 in the registry. Attached to the commitment page as Appendix B. Reviewed in SMACTR; no new findings. Card owner (Alex) re-reviews when the model retrains.

## Pitfalls

**Marketing card.** A card that reads like product copy — *"state-of-the-art performance"* without subgroup breakdowns — defeats the purpose. The card must include the numbers the team doesn't want to highlight, especially the subgroup gaps.

**Empty caveats section.** Every model has caveats. A caveats-and-recommendations section that reads *"no known limitations"* is a red flag; it means the team has not looked hard enough.

**Stale card.** When the model is retrained and the card is not updated, the downstream users are looking at old numbers. Card updates should be coupled to the model-release process.

**Intended-use lip service.** If the out-of-scope section is vague (*"not for other use cases"*), it cannot prevent misuse. Specific out-of-scope items — weekends, yard B, hazardous materials — are the whole point.

**Skipping the subgroup analyses.** Aggregate-only analyses hide subgroup failures. Sections 3 and 7 are where subgroups are named and reported; skipping either is a major failure.

**Treating the card as documentation only.** The card is an artefact that shapes decisions — SMACTR audits against it, downstream teams deploy against it, regulators review it. Producing the card as a one-time documentation exercise misses this.

## When not to use

- Pieces that aren't models (rules, decision tables). Model cards don't apply; the rules' specification is the documentation.
- Research prototypes explicitly not shipping. A full card is overkill; a minimal internal summary suffices.
- LLM pieces where the underlying model is an external API. In this case, the *system card* covers the piece's use of the API (including its RAG layer and prompt); the API provider's card covers the model.

## Provenance

The model-card format was introduced by Mitchell, Wu, Zaldivar, and colleagues in 2019 [1]. Google's Model Cards Toolkit [2] and Hugging Face's model card templates [3] operationalise it. Related frameworks like the FactSheets from IBM [4] and the use of system cards by OpenAI and Anthropic adapt the pattern for different scopes.

## Related tools

- **Datasheets for datasets.** Complementary artefact; model card points to datasheet.
- **ML canvas.** Most of the card's content comes from the ML canvas plus evaluation.
- **SMACTR internal audit.** Model cards are primary audit artefacts.
- **Review-cadence matrix (G5).** Card update schedule lives here.

## Verification

[1] Mitchell M, Wu S, Zaldivar A, et al. Model cards for model reporting. *FAT\* '19*. 2019. **[verified]** The canonical model-cards paper.

[2] Google. Model Cards Toolkit. GitHub. 2020. **[verified]** Reference implementation.

[3] Hugging Face. Model card template. Hugging Face documentation. 2022. **[verified]** Practitioner adaptation.

[4] Arnold M, Bellamy RKE, Hind M, et al. FactSheets: Increasing trust in AI services through supplier's declarations of conformity. *IBM Journal of Research and Development*. 2019;63(4/5):6:1-6:13. **[verified]** Related documentation framework from IBM.
