# Toolkit — NIST AI Risk Management Framework

*Gate: G3 Route (Q3b controls documentation). Category: routing substrate.*

## What problem it solves

A piece routed to AI at G3 arrives with risks that are not obvious and not evenly distributed across the lifecycle. Ad-hoc risk conversations produce gaps — some risks get attention, others are assumed-away. The NIST AI Risk Management Framework (AI RMF 1.0) [1] is the substrate that forces a complete risk conversation organised around four functions: *govern, map, measure, manage.* For engagements in regulated or consequential settings, the RMF is the reference that the piece's controls are demonstrably aligned to. Absent that alignment, the engagement carries invisible risks and invisible accountability gaps.

## How it is used

A **series of G3 sessions** — typically 3-5 hours total, distributed across the engagement's G3 work — that map the piece against the RMF's four functions. The chair uses the RMF playbook sections as a prompt-list; the team answers each relevant section with specific, piece-referenced notes. Output is a risk-alignment memo attached to the piece's commitment artefact, and a set of explicit control items that flow into G4 sequencing and G5 commitments.

## Inputs

- The routed piece with its AI canvas / ML canvas filled.
- The stakeholder map (G1) and pre-mortem output (G3).
- The NIST AI RMF 1.0 core document and the AI RMF Playbook.
- The sector-specific profile, if one applies (healthcare, hiring, finance, generative AI).

## Outputs

- A **risk-alignment memo** — each of the RMF's four functions covered with piece-specific entries.
- A **control register** — concrete controls the engagement commits to, cross-referenced to RMF categories.
- **Flagged gaps** — areas where the RMF expects a control and the engagement does not yet have one. These become work items.

## Visualisation

<div style="max-width: 900px; margin: 2rem auto;">
<svg viewBox="0 0 800 300" xmlns="http://www.w3.org/2000/svg" role="img" aria-labelledby="rmf-title">
  <title id="rmf-title">NIST AI RMF — four functions (govern, map, measure, manage) with govern as the enclosing function</title>
  <style>
    .rmf-rect { fill: var(--md-default-bg-color, #fff); stroke: var(--md-default-fg-color, #000); stroke-width: 1.4; }
    .rmf-govern { fill: var(--md-default-fg-color, #000); opacity: 0.06; stroke: var(--md-default-fg-color, #000); stroke-width: 1.6; }
    .rmf-line { stroke: var(--md-default-fg-color, #000); stroke-width: 1.2; fill: none; }
    .rmf-arrow { fill: var(--md-default-fg-color, #000); }
    .rmf-label { font: 700 12px -apple-system, sans-serif; fill: var(--md-default-fg-color, #000); text-anchor: middle; }
    .rmf-sub { font: 400 10px -apple-system, sans-serif; fill: var(--md-default-fg-color, #000); text-anchor: middle; }
    .rmf-tag { font: italic 10px -apple-system, sans-serif; fill: var(--md-default-fg-color, #000); text-anchor: middle; opacity: 0.8; }
  </style>
  <defs><marker id="rmf-a" markerWidth="9" markerHeight="9" refX="8" refY="4.5" orient="auto"><path d="M0,0 L8,4.5 L0,9 z" class="rmf-arrow"/></marker></defs>
  <rect class="rmf-govern" x="30" y="30" width="740" height="240" />
  <text class="rmf-label" x="400" y="55">Govern — policies, roles, accountability, culture</text>
  <rect class="rmf-rect" x="70" y="90" width="210" height="150" />
  <text class="rmf-label" x="175" y="115">Map</text>
  <text class="rmf-sub" x="175" y="135">context, scope,</text>
  <text class="rmf-sub" x="175" y="150">affected people,</text>
  <text class="rmf-sub" x="175" y="165">expected failure modes</text>
  <rect class="rmf-rect" x="300" y="90" width="210" height="150" />
  <text class="rmf-label" x="405" y="115">Measure</text>
  <text class="rmf-sub" x="405" y="135">metrics, evaluation,</text>
  <text class="rmf-sub" x="405" y="150">monitoring, subgroups,</text>
  <text class="rmf-sub" x="405" y="165">empirical reads</text>
  <rect class="rmf-rect" x="530" y="90" width="210" height="150" />
  <text class="rmf-label" x="635" y="115">Manage</text>
  <text class="rmf-sub" x="635" y="135">responses, rollbacks,</text>
  <text class="rmf-sub" x="635" y="150">incident handling,</text>
  <text class="rmf-sub" x="635" y="165">lifecycle updates</text>
  <line class="rmf-line" x1="280" y1="165" x2="300" y2="165" marker-end="url(#rmf-a)" />
  <line class="rmf-line" x1="510" y1="165" x2="530" y2="165" marker-end="url(#rmf-a)" />
  <text class="rmf-tag" x="400" y="290">Govern frames the other three. Map → Measure → Manage is the working loop.</text>
</svg>
</div>

*The four functions of the AI RMF. Govern enclosing the others; Map → Measure → Manage is the operating loop the engagement repeats.*

## Anatomy

**Govern.** Who is accountable, what policies apply, what culture the piece operates in. For the engagement, this includes named ownership (G5), escalation paths, sign-off procedures, and the mandate the piece has to operate.

**Map.** The piece in its context. Who does it affect, what benefits and harms are possible, what the failure modes are. The stakeholder map and pre-mortem are the substrates for this.

**Measure.** How the piece's behaviour is evaluated — metrics, offline evaluation, shadow, A/B, subgroup disaggregation, ongoing monitoring. Connects to the empirical-read tools (offline evaluation, shadow deployment, controlled A/B) and the G5 review-cadence matrix.

**Manage.** What the engagement does when something goes wrong — rollback triggers, incident response, sunset criteria, upgrade decisions. Connects to G5 rollback-trigger design and sunset criteria.

**Playbook granularity.** The Playbook breaks each function into categories (e.g., Map 1.1 *context of use*, Measure 2.3 *AI system performance*). Engagements don't need to cover every category — selecting the ones relevant to the piece. Sector profiles (generative AI, healthcare) suggest the relevant subset.

**Risk-alignment memo.** For each selected category, a paragraph: what the piece does here, what controls are in place, what gaps remain. Not a checklist; the memo is the artefact that outside reviewers (compliance, audit, regulators) can read.

## Example

??? example "Paper trail — AI RMF alignment for the yard-slot allocator"
    *G3 Q3b, W15-W16 of 2026. Ada (chair), Priya (owner), Alex (ML), Raj, with Parvati (compliance) joining for Govern and Manage sessions.*

    *Govern (90 min, W15).* Parvati walks the team through the governance substrate.

    - Govern 1.1 *policies and standards*: the piece falls under the company's internal ML operations policy (version 3.2). Logged.
    - Govern 3.1 *oversight roles*: Priya is named owner; Alex is ML-technical owner; Chen is dispatcher-floor review authority. Logged.
    - Govern 4.1 *culture and values*: the piece does not remove dispatcher decision authority — this is a stated value of the engagement. Logged.
    - Gap: the engagement has no documented *incident response* role yet. Work item created; Raj assigned.

    *Map (60 min, W15).* The stakeholder map and pre-mortem are the inputs.

    - Map 1.1 *context*: covered by the framed problem paragraph and system description.
    - Map 3.1 *benefits and costs*: covered by the TCO ladder and expected value estimate.
    - Map 5.1 *impact assessment*: dispatchers, carriers, yard managers named; affected-but-not-present stakeholder (downstream unloading crew) flagged for inclusion in pre-mortem review.
    - Gap: environmental impact (compute) not estimated. Deprioritised for this engagement given scale.

    *Measure (120 min, W15-W16).*

    - Measure 2.3 *performance*: MAE floor declared; subgroup disaggregation (weekday/weekend, priority class) declared.
    - Measure 2.7 *security*: feature pipeline integrity monitored; anomaly detection on input feed.
    - Measure 2.11 *fairness*: override rates tracked by carrier class; flagged if any class's override rate doubles.
    - Measure 3.1 *feedback from affected*: dispatcher review cadence (weekly for 3 months, then monthly) covers this.
    - Gap: no monitoring for concept drift beyond weekly check; added as work item.

    *Manage (90 min, W16).*

    - Manage 1.3 *rollback plans*: the three-stage rollout and rollback triggers from G5 cover this.
    - Manage 2.2 *incident response*: the gap from Govern is addressed here; Raj's on-call rota covers weekday; weekend gap flagged.
    - Manage 3.1 *ongoing monitoring and update*: covered by review-cadence matrix.
    - Manage 4.1 *decommissioning*: sunset criteria from G5 apply.

    *Close.* Risk-alignment memo drafted, 4 pages. Four explicit gaps: (a) incident response role; (b) concept-drift monitoring; (c) environmental impact estimation; (d) weekend incident-response gap. (a) and (b) become G5 commitment items. (c) deferred. (d) escalated to engagement sponsor.

    The memo is attached to the piece's commitment page and flagged for annual re-review alongside the ML RMF's expected cadence.

## Pitfalls

**Treating the RMF as a checkbox.** Walking every category with a one-line yes/no defeats the purpose. The RMF is a *conversation framework*, not a certification checklist; the memo entries are expected to have reasoning, not just *"compliant"*.

**Scoping to just the model.** The RMF is about the *system* — model + wrapper + operators + deployment — not the model alone. Engagements that scope to the model miss most of the risks.

**Skipping Govern.** Govern is often treated as background; it's the most important function. A piece with no named owner, no escalation path, and no sign-off discipline is high-risk regardless of how well the other three functions are documented.

**Measure as evaluation-only.** Measure includes *ongoing* monitoring, not just pre-launch evaluation. Pieces that have offline evaluation but no production monitoring fail the Measure function post-launch.

**No gap register.** The memo that records only what is in place, and omits what is missing, is incomplete. Honest gap registers are what the RMF is ultimately for.

**Applying the RMF too late.** Filling the RMF memo after the piece ships converts it into paperwork. The RMF is a G3 substrate; gaps it surfaces should change the piece's design, not just document it.

## When not to use

- Pieces refused at Tier 0. The RMF does not apply to pieces that should not exist.
- Non-AI pieces (rules, scripts). Other risk frameworks apply; the AI RMF does not.
- Very small pilot engagements where the formality overhead exceeds the piece's risk surface. A scaled-down version (just Map + Measure) can substitute.

## Provenance

The NIST AI Risk Management Framework was published by the US National Institute of Standards and Technology in January 2023 [1]. The accompanying Playbook provides operational guidance [2]. A generative-AI profile was released in 2024 [3].

## Related tools

- **Stakeholder map.** Primary input for the Map function.
- **Pre-mortem.** Primary input for Map and Manage.
- **Review-cadence matrix.** The Measure-and-Manage cadence mechanism.
- **ISO/IEC 42001.** The formal AI management system standard; RMF alignment is often how engagements prepare for 42001 conformance.

## Verification

[1] National Institute of Standards and Technology. *Artificial Intelligence Risk Management Framework (AI RMF 1.0)*. NIST AI 100-1. 2023. **[verified]** The canonical framework document.

[2] National Institute of Standards and Technology. *AI RMF Playbook*. 2023. **[verified]** Operational guidance mapping RMF to concrete practices.

[3] National Institute of Standards and Technology. *AI RMF Generative AI Profile*. NIST AI 600-1. 2024. **[verified]** Generative-AI-specific extension of the RMF.
