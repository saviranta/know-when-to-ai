# Toolkit — SMACTR internal audit framework

*Gate: G3 Route (Q3b controls documentation). Category: routing substrate.*

## What problem it solves

Risk frameworks (NIST AI RMF) and management-system standards (ISO 42001) describe what an engagement should do. They do not, by themselves, tell an organisation how to *audit* that work — end-to-end, with evidence, before the piece ships. Raji and colleagues' SMACTR framework [1] fills that gap: a structured internal audit that walks the engagement from Scoping through Mapping, Artefact collection, Testing, and Reflection. Unlike external certification audits, SMACTR is designed for internal teams to run on themselves (or for second-party teams to run on engagement teams) before deployment. It is the pre-launch substrate that converts scattered artefacts into a coherent audit record and a deployment go / no-go.

## How it is used

A **structured audit exercise, 3-8 days** depending on piece scope, conducted by an internal audit team separate from the engagement team. The audit team works through the five SMACTR phases in order, producing phase-specific artefacts (scoping document, mapping report, artefact catalogue, test plan, reflection memo). The final output is an audit report with a documented deployment recommendation, traceable from recommendation back to evidence.

## Inputs

- A piece approaching launch — canvases, RMF memo, 42001 mapping (where applicable), training documentation, evaluation results.
- An internal audit team with read access to the engagement's artefacts and interview access to the engagement team.
- Organisational audit policies (if any).
- The SMACTR framework document as reference.

## Outputs

- A **scoping document** — audit scope, methodology, success criteria.
- A **mapping report** — stakeholders, use contexts, failure modes, ethical considerations.
- An **artefact catalogue** — every artefact the engagement has produced, organised and cross-referenced.
- A **test plan** and results — adversarial tests, fairness tests, bias audits.
- A **reflection memo** — residual risks, deployment recommendation, post-launch monitoring handoff.

## Visualisation

<div style="max-width: 900px; margin: 2rem auto;">
<svg viewBox="0 0 800 260" xmlns="http://www.w3.org/2000/svg" role="img" aria-labelledby="smactr-title">
  <title id="smactr-title">SMACTR phases — Scoping, Mapping, Artefact collection, Testing, Reflection in sequence</title>
  <style>
    .sm-rect { fill: var(--md-default-bg-color, #fff); stroke: var(--md-default-fg-color, #000); stroke-width: 1.4; }
    .sm-final { fill: var(--md-default-fg-color, #000); opacity: 0.1; stroke: var(--md-default-fg-color, #000); stroke-width: 1.4; }
    .sm-line { stroke: var(--md-default-fg-color, #000); stroke-width: 1.2; fill: none; }
    .sm-arrow { fill: var(--md-default-fg-color, #000); }
    .sm-label { font: 700 12px -apple-system, sans-serif; fill: var(--md-default-fg-color, #000); text-anchor: middle; }
    .sm-sub { font: 400 10px -apple-system, sans-serif; fill: var(--md-default-fg-color, #000); text-anchor: middle; }
    .sm-tag { font: italic 10px -apple-system, sans-serif; fill: var(--md-default-fg-color, #000); text-anchor: middle; opacity: 0.8; }
  </style>
  <defs><marker id="sm-a" markerWidth="9" markerHeight="9" refX="8" refY="4.5" orient="auto"><path d="M0,0 L8,4.5 L0,9 z" class="sm-arrow"/></marker></defs>
  <rect class="sm-rect" x="20" y="90" width="130" height="80" />
  <text class="sm-label" x="85" y="115">Scoping</text>
  <text class="sm-sub" x="85" y="135">audit scope,</text>
  <text class="sm-sub" x="85" y="150">success criteria</text>
  <rect class="sm-rect" x="170" y="90" width="130" height="80" />
  <text class="sm-label" x="235" y="115">Mapping</text>
  <text class="sm-sub" x="235" y="135">stakeholders,</text>
  <text class="sm-sub" x="235" y="150">use contexts</text>
  <rect class="sm-rect" x="320" y="90" width="130" height="80" />
  <text class="sm-label" x="385" y="115">Artefact</text>
  <text class="sm-sub" x="385" y="135">catalogue engagement</text>
  <text class="sm-sub" x="385" y="150">artefacts</text>
  <rect class="sm-rect" x="470" y="90" width="130" height="80" />
  <text class="sm-label" x="535" y="115">Testing</text>
  <text class="sm-sub" x="535" y="135">adversarial,</text>
  <text class="sm-sub" x="535" y="150">fairness, bias</text>
  <rect class="sm-final" x="620" y="90" width="160" height="80" />
  <text class="sm-label" x="700" y="115">Reflection</text>
  <text class="sm-sub" x="700" y="135">residual risks,</text>
  <text class="sm-sub" x="700" y="150">deploy recommendation</text>
  <line class="sm-line" x1="150" y1="130" x2="170" y2="130" marker-end="url(#sm-a)" />
  <line class="sm-line" x1="300" y1="130" x2="320" y2="130" marker-end="url(#sm-a)" />
  <line class="sm-line" x1="450" y1="130" x2="470" y2="130" marker-end="url(#sm-a)" />
  <line class="sm-line" x1="600" y1="130" x2="620" y2="130" marker-end="url(#sm-a)" />
  <text class="sm-tag" x="400" y="210">Sequential audit phases; each produces a documented artefact; reflection informs the deployment decision.</text>
</svg>
</div>

*The five SMACTR phases in sequence. Each phase has specific deliverables; reflection is the phase where the pre-launch go / no-go is justified.*

## Anatomy

**Scoping.** What is being audited, why, how, and what the success criteria are. For an engagement, the scope is usually the piece routing + the piece's intended operation + its monitoring plan. Scoping includes: the audit team's independence relative to the engagement team, the artefacts in scope, the testing methodology, the audit timeline.

**Mapping.** The landscape of stakeholders, use contexts, regulatory environment, ethical considerations. Reuses the engagement's stakeholder map and RMF Map function, but reviewed with audit rigour — what might the engagement have missed.

**Artefact collection.** Every artefact the engagement has produced — canvases, training documentation, evaluation reports, model cards, datasheets, commitment pages. Catalogued with consistent metadata. Gaps surface naturally: the auditor asks *where is the datasheet for this training corpus*, and if it doesn't exist, that is a finding.

**Testing.** Adversarial tests of the piece: red-team prompts for generative pieces, bias audits for classification/ranking pieces, input-robustness tests, subgroup performance re-evaluation independent of the engagement's own evaluation. The goal is to find what the engagement's own evaluation missed.

**Reflection.** The final phase where findings are integrated: residual risks, unresolved gaps, alignment with the organisation's AI principles, and the recommendation. The recommendation is not binary (*ship / don't ship*) — it can be *ship with conditions*, *hold pending fix*, *reroute*, or *escalate*. The reflection memo is the deliverable that travels with the commitment page.

## Example

??? example "Paper trail — SMACTR audit of the allocator, pre-launch"
    *W17-W18 of 2026. Audit team: Mariana (lead auditor, second-party from internal AI audit function), Jamal (ML auditor), Anita (ethics reviewer). Engagement team: Priya, Alex, Raj, Chen — interviewed, not auditing.*

    *Scoping (2 days, W17).* Mariana drafts the audit scope: the yard-slot allocator, weekday-only launch at yard A, reviewed against company AI principles + NIST RMF + ISO 42001 clauses 8-9. Audit team is second-party independent of the engagement. Artefacts in scope: canvases, RMF memo, 42001 mapping, training documentation, offline evaluation report, shadow report, A/B results, commitment page. Success: a documented recommendation by W18 day 10.

    *Mapping (1 day, W17).* Stakeholder map reviewed. One absent stakeholder — the downstream unloading crew — was flagged in the engagement's own pre-mortem but not added to the review cadence. Mariana logs this as a minor finding.

    *Artefact collection (2 days, W18).* Twenty-one artefacts catalogued. Gaps:

    - Training data datasheet exists but the consent provenance for dispatcher-override labels is incomplete. Major finding.
    - Model card exists but the intended-use section is vague about weekend operation (which is out of scope); risk of scope creep post-launch. Minor finding.
    - Rollback trigger descriptions are specific; commitments page is clean. No finding.

    *Testing (2 days, W18).* Jamal runs independent tests:

    - Subgroup re-evaluation on the held-out set: reproduces the engagement's numbers within rounding. Pass.
    - Adversarial inputs: injects 50 synthetic edge-case inputs (carrier names with unusual characters, out-of-range weights, duplicate slot requests). The allocator handles 48/50 gracefully; two cause a soft failure (returns no recommendation rather than an error, which is the intended safe default). Pass.
    - Bias audit on carrier size class (P1-P4): slight recommendation-latency bias toward P1 carriers (they get answers 0.3s faster than P4). Not statistically material but noted.

    *Reflection (1 day, W18).* Mariana's memo:

    - Residual risks: (a) consent provenance for override labels (major); (b) weekend scope creep risk (minor); (c) absent downstream stakeholder (minor); (d) recommendation latency bias (noted, monitor).
    - Unresolved gaps: (a) must close before launch. Engagement team agrees; Raj and Parvati re-collect consent documentation in W19.
    - Recommendation: *ship with conditions.* Conditions: (a) closed before launch; (b) weekend operation explicitly excluded from launch and from any auto-scaling until a separate review; (c) unloading crew representative added to the month-3 review; (d) logged, monitored quarterly.

    *Paper trail.* Audit report — 18 pages — attached to commitment page. Conditions tracked on the commitment page. Launch goes ahead in W20 after (a) closes in W19.

## Pitfalls

**Audit team inside the engagement.** The audit must be independent. When audited by the engagement team itself, the finding rate collapses toward zero.

**Testing as replication.** Re-running the engagement's own evaluation reproduces the engagement's numbers but finds nothing new. Independent test design — adversarial inputs, different subgroup cuts, different metrics — is the value.

**Scoping too narrow.** Scoping only the model excludes the wrapper, the operator interaction, and the deployment. The audit should scope the *system*, not the model.

**Reflection as summary.** Reflection is where the recommendation is justified. A reflection memo that lists findings without taking a position is incomplete; the recommendation is the deliverable.

**Findings without conditions.** Audits that find issues but do not make those issues into gating conditions for launch defeat the purpose. Findings need to close *before* launch (gating), or move to *monitoring* (tracked post-launch), or be *accepted* (documented trade-off). Findings without status are noise.

**One-time audit.** Running SMACTR only once, at launch, means post-launch drift accumulates unchecked. The framework was designed for pre-launch, but a lighter re-run at major changes (model update, scope expansion) is good discipline.

## When not to use

- Prototypes and research pieces not going to production. SMACTR overhead is disproportionate.
- Organisations without audit capacity to staff an independent audit team. A self-audit is lower value but still better than nothing; SMACTR-lite (scoping + reflection, no independent testing) can substitute.
- Non-AI pieces. Standard internal audit practices apply; SMACTR's AI-specific structure is overkill.

## Provenance

SMACTR was introduced by Raji and colleagues in *Closing the AI Accountability Gap: Defining an End-to-End Framework for Internal Algorithmic Auditing* [1]. The framework draws on audit methodology from financial and safety-critical domains, adapted for AI systems where the artefacts and failure modes differ.

## Related tools

- **NIST AI RMF.** Provides many of the input artefacts SMACTR audits against.
- **ISO/IEC 42001.** Organisations pursuing 42001 certification can use SMACTR as the internal-audit mechanism required by clause 9.2.
- **Model cards and datasheets.** Key artefacts the audit team catalogues.

## Verification

[1] Raji ID, Smart A, White RN, et al. Closing the AI accountability gap: defining an end-to-end framework for internal algorithmic auditing. *FAT\* '20*. 2020. **[verified]** The canonical SMACTR framework paper.
