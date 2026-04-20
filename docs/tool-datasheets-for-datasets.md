# Toolkit — Datasheets for datasets

*Gate: G3 Route (Q3b controls documentation). Category: routing substrate.*

## What problem it solves

A model is only as auditable as the data it was trained on. The data's provenance — who collected it, why, when, under what consent, with what preprocessing — is rarely documented by default, which is how training sets accumulate invisible properties (demographic skew, consent ambiguity, stale labels) that later surface as model failures or legal exposure. Gebru and colleagues' datasheets for datasets [1] is the documentation substrate that forces this provenance to be surfaced at dataset creation or adoption. For an engagement, the datasheet is how the training data's properties are communicated alongside the model card — without the datasheet, the card's claims are unverifiable.

## How it is used

A **1-3 day drafting exercise** led by the data engineer or ML practitioner, with input from the original data collector where possible. The datasheet follows a prescribed question set organised into seven sections: motivation, composition, collection, preprocessing, uses, distribution, maintenance. Each question is answered specifically; *"unknown"* is a valid answer, but the engagement is then on notice that the gap exists.

## Inputs

- The dataset being documented — training or evaluation set for the piece.
- Original collection documentation, if any.
- Data pipeline logs for preprocessing steps.
- The original collector's notes or an interview where the collector is reachable.
- The datasheet template from the original paper or adaptations (e.g., Hugging Face dataset cards).

## Outputs

- A **datasheet** — typically 4-10 pages answering the standard questions.
- **Flagged gaps** where the dataset's properties are unknown; these become explicit risks the model card inherits.
- A **registry entry** pointing from the dataset artefact to the datasheet.

## Visualisation

<div style="max-width: 900px; margin: 2rem auto;">
<svg viewBox="0 0 800 340" xmlns="http://www.w3.org/2000/svg" role="img" aria-labelledby="ds-title">
  <title id="ds-title">Datasheet for a dataset — seven-section structure covering motivation, composition, collection, preprocessing, uses, distribution, maintenance</title>
  <style>
    .ds-rect { fill: var(--md-default-bg-color, #fff); stroke: var(--md-default-fg-color, #000); stroke-width: 1.4; }
    .ds-head { fill: var(--md-default-fg-color, #000); opacity: 0.08; stroke: var(--md-default-fg-color, #000); stroke-width: 1.4; }
    .ds-label { font: 700 12px -apple-system, sans-serif; fill: var(--md-default-fg-color, #000); }
    .ds-sub { font: 400 10px -apple-system, sans-serif; fill: var(--md-default-fg-color, #000); }
    .ds-tag { font: italic 10px -apple-system, sans-serif; fill: var(--md-default-fg-color, #000); text-anchor: middle; opacity: 0.8; }
  </style>
  <rect class="ds-head" x="30" y="30" width="740" height="40" />
  <text class="ds-label" x="50" y="55">Datasheet — yard-A dispatcher log corpus v1.0</text>
  <rect class="ds-rect" x="30" y="80" width="360" height="60" />
  <text class="ds-label" x="40" y="100">1. Motivation</text>
  <text class="ds-sub" x="40" y="118">Why created, by whom, funded by.</text>
  <text class="ds-sub" x="40" y="132">Purpose: allocator training + retrospective analytics.</text>
  <rect class="ds-rect" x="410" y="80" width="360" height="60" />
  <text class="ds-label" x="420" y="100">2. Composition</text>
  <text class="ds-sub" x="420" y="118">Instances, features, labels, distributions,</text>
  <text class="ds-sub" x="420" y="132">sensitive attributes, missing data.</text>
  <rect class="ds-rect" x="30" y="150" width="360" height="60" />
  <text class="ds-label" x="40" y="170">3. Collection</text>
  <text class="ds-sub" x="40" y="188">How collected, when, by whom,</text>
  <text class="ds-sub" x="40" y="202">consent / notice, completeness.</text>
  <rect class="ds-rect" x="410" y="150" width="360" height="60" />
  <text class="ds-label" x="420" y="170">4. Preprocessing</text>
  <text class="ds-sub" x="420" y="188">Cleaning, filtering, labelling, transformations,</text>
  <text class="ds-sub" x="420" y="202">raw-data availability.</text>
  <rect class="ds-rect" x="30" y="220" width="360" height="60" />
  <text class="ds-label" x="40" y="240">5. Uses</text>
  <text class="ds-sub" x="40" y="258">Intended uses, tasks benefitted,</text>
  <text class="ds-sub" x="40" y="272">tasks the dataset should not be used for.</text>
  <rect class="ds-rect" x="410" y="220" width="360" height="60" />
  <text class="ds-label" x="420" y="240">6. Distribution</text>
  <text class="ds-sub" x="420" y="258">Internal-only / third-party distribution,</text>
  <text class="ds-sub" x="420" y="272">licences, embargo, export controls.</text>
  <rect class="ds-rect" x="30" y="290" width="740" height="40" />
  <text class="ds-label" x="40" y="314">7. Maintenance</text>
  <text class="ds-sub" x="175" y="314">Owner, update cadence, versioning, deprecation, contact for errata.</text>
</svg>
</div>

*Seven sections. The maintenance section is the thread that keeps the dataset and its downstream models in sync over time.*

## Anatomy

**Motivation.** Why was the dataset created, by whom, for what purpose, with what funding? Surfaces original intent — often at odds with later reuse.

**Composition.** What's in the dataset. Instances, features, labels, distributions, sensitive attributes, missing data. Subpopulation sizes. What makes an instance distinct.

**Collection.** How the data was gathered. Mechanism (logs, surveys, crawled, purchased). Time window. Consent or notice status. Compliance with data protection law (GDPR, HIPAA, sector-specific). Completeness — what's missing and why.

**Preprocessing.** Cleaning, filtering, labelling, transformations between raw and published form. Whether the raw data is still available. Whether the published form can be reconstructed.

**Uses.** Intended uses the dataset was created for. Uses the dataset has been used for. Uses the dataset should *not* be used for (out-of-scope). Known bias risks when used for non-intended tasks.

**Distribution.** Who has access. Licences. Restrictions. Third-party redistribution terms.

**Maintenance.** Ongoing ownership. Update cadence. Deprecation policy. Contact for errata. Versioning scheme. The section that forces a living relationship with the dataset rather than a one-shot release.

**Questions count, not sections.** The Gebru et al. template contains roughly 60 questions across the seven sections. Answering 60 questions is deliberate — it surfaces what short-form documentation would miss. Engagements can shorten the question list for low-stakes datasets but shouldn't collapse to "summary only".

## Example

??? example "Paper trail — datasheet for the yard-A dispatcher log corpus v1.0"
    *W16 of 2026. Alex (ML) drafts; Priya reviews; Parvati (compliance) signs off on consent and distribution sections.*

    **Motivation.**

    - *Purpose.* Created to support operational analytics at yard A. Being reused (post-hoc) for training the allocator model.
    - *Creator.* Yard A IT operations team, 2024-2026. Original creator team still in place.
    - *Funding.* Internal.

    **Composition.**

    - *Instances.* One row per slot assignment decision, 2024-10-01 through 2026-03-31. 847,000 instances.
    - *Features.* Carrier ID, expected arrival time, priority class, yard state snapshot (docks occupied, queue length, weather, time of day/week), dispatcher assignment, carrier features (size class, last-seen date), resulting cycle time.
    - *Labels.* Implicit — the dispatcher's chosen slot and the resulting cycle time are outcomes, not explicit labels. For the override-reason classifier (separate piece), a subset of 250 cases has hand-applied reason labels.
    - *Sensitive attributes.* Carrier identity. No personal data of drivers. No financial data beyond carrier-level billing class.
    - *Missing data.* Weekend cases under-represented (roughly 15% of instances despite being ~30% of operations — older weekend logs were not ingested until 2025-06).

    **Collection.**

    - *Mechanism.* Automated extraction from the dispatcher console logs + yard-state sensors.
    - *Time window.* 18 months. Pre-2024-10 logs exist but in a different schema, not included.
    - *Consent / notice.* Carriers are notified in the yard-access terms that operational data is collected. No personal data collected. Dispatchers are informed of data collection as part of standard employment disclosures. Parvati has signed off on this.
    - *Completeness.* A 2-week outage in 2025-11 is missing from the logs due to a platform incident.

    **Preprocessing.**

    - *Cleaning.* Invalid slot IDs (caused by a 2024-12 data entry bug) flagged and excluded. ~1,200 instances dropped.
    - *Filtering.* Hazardous-material shipments excluded from the training corpus (different pathway).
    - *Labelling.* Cycle-time labels derived from logged arrival / unload / departure timestamps. 3% of instances have ambiguous unload timestamps — excluded from training.
    - *Raw availability.* Raw dispatcher logs retained; preprocessing is replayable.

    **Uses.**

    - *Intended.* Training the yard-A allocator model. Operational analytics.
    - *Out-of-scope.* Training a model for another yard (distribution differs). Training a model for weekend operation (under-represented). Any personal-data inference (no personal data in corpus). Any billing or contract decisions.
    - *Known use.* Allocator v1.0, v1.1, v1.2 trained on versions of this dataset.

    **Distribution.**

    - *Access.* Internal only. Not distributed to third parties.
    - *Licence.* Internal use only. No external redistribution.

    **Maintenance.**

    - *Owner.* Alex Kim.
    - *Update.* New data ingested weekly. Full dataset version increments quarterly (v1.0 → v1.1) or on schema change.
    - *Deprecation.* Older dataset versions retained for reproducibility; deprecated versions marked but not deleted.
    - *Errata.* Contact Alex Kim; a GitHub issue in the internal data-engineering repo.

    *Paper trail.* Datasheet attached to the dataset's registry entry. Referenced from model card section 6. SMACTR audit flagged one gap: pre-2025-06 weekend data ingestion gap is documented but the engagement acknowledged that weekend generalisation is degraded — directly motivating the "weekend out of scope" decision in the model card.

## Pitfalls

**Datasheet as afterthought.** Drafted at launch from memory, with missing provenance that the original collector could have supplied if asked earlier. The datasheet should be drafted at data-preparation time, not at model-launch time.

**Consent handwave.** The consent section reads *"standard terms apply"* without specifics. Regulatory exposure concentrates here. Specific consent mechanism, date, legal basis — or an explicit acknowledgement that no meaningful consent exists.

**Out-of-scope vague.** *"Not for all uses"* doesn't prevent misuse. Specific out-of-scope cases (other yards, weekends, personal-data inference) are the whole point.

**Missing maintenance.** The maintenance section is often skipped. Without it, the dataset becomes orphaned; nobody knows who updates it, nobody updates it, downstream models drift.

**No version coupling.** A dataset at v1.1 is a different object from v1.0. Model cards must reference the specific dataset version; otherwise, reproducibility is lost.

**Questions answered in aggregate.** *"Composition: operational logs"* is not an answer. The 60 questions exist to force specificity; answering them at the paragraph level rather than the question level loses the structure's value.

## When not to use

- Small one-off datasets for research prototypes. A minimal internal summary suffices.
- Third-party models (API-only) where the training data is not known. The engagement's datasheet covers its retrieval corpus (for RAG) or fine-tuning set (for fine-tuned models); the base model's training data is documented by the provider.
- Purely synthetic datasets produced by controlled generation. The datasheet applies but its form collapses — the composition and collection sections become generation-specification sections.

## Provenance

Datasheets for datasets were introduced by Gebru, Morgenstern, Vecchione, and colleagues in 2018 [1]. Holland et al.'s *Dataset Nutrition Labels* [2] is an adjacent framework. The Hugging Face dataset card format [3] is a widely-deployed operationalisation.

## Related tools

- **Model cards.** Partner artefact; model card's training-data section points to datasheet.
- **ISO/IEC 42001.** Clause 8.3 *AI system data* is satisfied by datasheets.
- **SMACTR.** Datasheets are primary audit artefacts.

## Verification

[1] Gebru T, Morgenstern J, Vecchione B, et al. Datasheets for datasets. *Communications of the ACM*. 2021;64(12):86-92. **[verified]** The canonical datasheets paper.

[2] Holland S, Hosny A, Newman S, Joseph J, Chmielinski K. The dataset nutrition label: a framework to drive higher data quality standards. *arXiv:1805.03677*. 2018. **[verified]** Adjacent framework.

[3] Hugging Face. Dataset cards documentation. Hugging Face. 2022. **[verified]** Operational adaptation.
