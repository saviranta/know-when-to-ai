# Toolkit — ISO/IEC 42001

*Gate: G3 Route (Q3b controls documentation). Category: routing substrate.*

## What problem it solves

Where the NIST AI RMF is a voluntary risk-conversation framework, ISO/IEC 42001 is a *management-system standard* — the same shape as ISO 9001 for quality or ISO 27001 for information security. It specifies what an organisation must do, continually, to manage AI systems: a policy, defined roles, risk assessments, documented controls, internal audits, management review. An engagement routing a piece to AI in an organisation that operates under ISO 42001 must produce artefacts that slot into the existing management system. An engagement in an organisation *considering* 42001 conformance uses the piece as a pilot for the management system itself. Either way, the standard imposes a structured, auditable substrate the engagement must satisfy.

## How it is used

A **G3 alignment exercise** run alongside the RMF exercise, taking an additional **2-4 hours**. The engagement maps the piece's evidence (canvases, risk memo, control register, monitoring plans) against the 42001 clauses (particularly clauses 4 *context*, 6 *planning and risk*, 8 *operation*, and 9 *performance evaluation*). Output is a conformance mapping memo attached to the commitment artefact. In organisations pursuing 42001 certification, this is part of the audit trail; in organisations that don't certify but adopt 42001 as reference, it's a structured management-system hygiene check.

## Inputs

- The piece routed to AI.
- The NIST AI RMF memo (if completed — the two standards are complementary).
- The organisation's existing management systems (ISO 9001, ISO 27001) — 42001 integrates with them.
- The ISO/IEC 42001:2023 standard document and, where available, guidance on Annex A controls.

## Outputs

- A **conformance mapping** — each relevant 42001 clause paired with the engagement's artefact that satisfies it.
- A **statement of applicability** — for the standard's Annex A controls (38 controls across 9 categories), a decision per control: applicable / not applicable / with justification.
- **Flagged clauses** where no artefact currently satisfies — work items for the engagement or the organisation's broader AI management system.

## Visualisation

<div style="max-width: 900px; margin: 2rem auto;">
<svg viewBox="0 0 800 340" xmlns="http://www.w3.org/2000/svg" role="img" aria-labelledby="iso-title">
  <title id="iso-title">ISO/IEC 42001 — Plan-Do-Check-Act cycle with AI-specific clauses mapped to each phase</title>
  <style>
    .iso-rect { fill: var(--md-default-bg-color, #fff); stroke: var(--md-default-fg-color, #000); stroke-width: 1.4; }
    .iso-phase { fill: var(--md-default-fg-color, #000); opacity: 0.08; stroke: var(--md-default-fg-color, #000); stroke-width: 1.4; }
    .iso-line { stroke: var(--md-default-fg-color, #000); stroke-width: 1.2; fill: none; }
    .iso-arrow { fill: var(--md-default-fg-color, #000); }
    .iso-label { font: 700 12px -apple-system, sans-serif; fill: var(--md-default-fg-color, #000); text-anchor: middle; }
    .iso-sub { font: 400 10px -apple-system, sans-serif; fill: var(--md-default-fg-color, #000); text-anchor: middle; }
    .iso-clause { font: 700 11px -apple-system, sans-serif; fill: var(--md-default-fg-color, #000); text-anchor: middle; }
    .iso-tag { font: italic 10px -apple-system, sans-serif; fill: var(--md-default-fg-color, #000); text-anchor: middle; opacity: 0.8; }
  </style>
  <defs><marker id="iso-a" markerWidth="9" markerHeight="9" refX="8" refY="4.5" orient="auto"><path d="M0,0 L8,4.5 L0,9 z" class="iso-arrow"/></marker></defs>
  <rect class="iso-phase" x="70" y="40" width="280" height="120" />
  <text class="iso-clause" x="210" y="62">Plan</text>
  <text class="iso-label" x="210" y="90">Clauses 4-7</text>
  <text class="iso-sub" x="210" y="110">context, leadership,</text>
  <text class="iso-sub" x="210" y="125">planning, risk, support</text>
  <rect class="iso-phase" x="450" y="40" width="280" height="120" />
  <text class="iso-clause" x="590" y="62">Do</text>
  <text class="iso-label" x="590" y="90">Clause 8</text>
  <text class="iso-sub" x="590" y="110">operation —</text>
  <text class="iso-sub" x="590" y="125">controls, change mgmt</text>
  <rect class="iso-phase" x="450" y="180" width="280" height="120" />
  <text class="iso-clause" x="590" y="202">Check</text>
  <text class="iso-label" x="590" y="230">Clause 9</text>
  <text class="iso-sub" x="590" y="250">performance evaluation,</text>
  <text class="iso-sub" x="590" y="265">internal audit, mgmt review</text>
  <rect class="iso-phase" x="70" y="180" width="280" height="120" />
  <text class="iso-clause" x="210" y="202">Act</text>
  <text class="iso-label" x="210" y="230">Clause 10</text>
  <text class="iso-sub" x="210" y="250">improvement,</text>
  <text class="iso-sub" x="210" y="265">nonconformity handling</text>
  <line class="iso-line" x1="350" y1="100" x2="450" y2="100" marker-end="url(#iso-a)" />
  <line class="iso-line" x1="590" y1="160" x2="590" y2="180" marker-end="url(#iso-a)" />
  <line class="iso-line" x1="450" y1="240" x2="350" y2="240" marker-end="url(#iso-a)" />
  <line class="iso-line" x1="210" y1="180" x2="210" y2="160" marker-end="url(#iso-a)" />
  <text class="iso-tag" x="400" y="325">Standard 42001 structures an AI management system around Plan-Do-Check-Act with clauses 4-10.</text>
</svg>
</div>

*The 42001 structure mapped to PDCA. Plan and Act are strategic; Do and Check are where the engagement's artefacts live.*

## Anatomy

**Clauses 4-7 — Plan.** Context of the organisation, leadership commitment, planning (risk, opportunities, AI objectives), support (resources, competence, awareness, communication, documented information). For an engagement, the piece's canvases, risk memo, and named-owner declaration sit here.

**Clause 8 — Do.** Operational planning and control. The engagement's three-stage rollout, commitment artefacts, and control register sit here. Impact assessment (clause 8.4), data quality requirements (8.3), design and development (8.2) are prominent.

**Clause 9 — Check.** Monitoring, measurement, analysis, evaluation; internal audit; management review. The engagement's review-cadence matrix, performance reporting, and periodic management review of the piece live here.

**Clause 10 — Act.** Continual improvement; nonconformity and corrective action. When the piece fails a check, the corrective-action process lives here.

**Annex A controls.** 38 controls across 9 categories: data, documentation, third-party relationships, impact assessment, etc. Not all applicable to every piece. The statement of applicability (SoA) declares which apply, which don't, and why.

**Integration with existing management systems.** 42001 uses the same high-level structure (Annex SL) as 9001 and 27001, so if the organisation has those, the leadership, documentation control, internal audit, and management review clauses can be shared.

**Certifiable vs. referenced.** Some organisations pursue formal 42001 certification (external audit, certificate). Others use it as a reference standard without certifying. The engagement's conformance mapping has value in both cases.

## Example

??? example "Paper trail — ISO 42001 conformance mapping for the allocator"
    *G3 Q3b, W17 of 2026. Parvati (compliance), Priya (owner), Alex (ML). The company is ISO 9001 + ISO 27001 certified and is piloting 42001 readiness with the allocator as the first piece.*

    *Clause 4 — context.* The existing 9001 context-of-the-organisation document covers the company's general context. An AI-specific supplement is drafted by Parvati: AI is material to operations, internal stakeholders include dispatchers and operators, external stakeholders include carriers and regulators, the company chooses to adopt 42001 voluntarily ahead of expected mandatory regulation. Attached.

    *Clause 5 — leadership.* The engagement sponsor (VP Operations) has signed the allocator's commitment page. AI policy (draft) is circulating for approval. Leadership commitment is met; AI policy is a gap — approval expected W20.

    *Clause 6 — planning.* AI risk assessment is the RMF memo (previously completed). AI objectives are declared on the commitment page (cycle-time improvement, override-rate stability, incident absence). Clause 6 satisfied by existing artefacts.

    *Clause 7 — support.* Resources: named owner + oversight time are costed in the TCO ladder. Competence: Priya, Alex, Chen documented. Awareness: dispatcher training scheduled before canary. Communication: dispatcher weekly briefings, carrier quarterly summary. Documented information: canvases, risk memo, rollout plan, commitment page.

    *Clause 8 — operation.*

    - 8.1 operational planning: three-stage rollout is the planning artefact.
    - 8.2 design and development: ML canvas, training data provenance, offline evaluation report.
    - 8.3 AI system data: datasheet for the training data (separate tool).
    - 8.4 impact assessment: stakeholder map + RMF Map function.
    - Gap flagged: 8.5 AI system operation — the piece is not yet in operation; this clause activates post-launch with operational logs, monitoring dashboards.

    *Clause 9 — performance evaluation.*

    - 9.1 monitoring and measurement: review-cadence matrix.
    - 9.2 internal audit: an internal audit of the allocator is scheduled at month 6 post-launch.
    - 9.3 management review: the allocator review is added to the quarterly operations management review.

    *Clause 10 — improvement.* 10.2 nonconformity and corrective action: rollback triggers + sunset criteria serve as the nonconformity response process.

    *Statement of applicability (Annex A).* 38 controls assessed. 34 applicable. 4 not applicable: two concerning third-party model providers (the piece uses an internally-trained model), two concerning generative-AI-specific outputs (the piece is not generative). For each applicable control, the conformance entry points to the artefact that satisfies it.

    *Paper trail.* Conformance mapping memo — 12 pages — attached to the commitment page. Three gaps: AI policy pending approval (W20), operational evidence pending (activates post-launch), internal audit scheduled (month 6). The company's 42001 certification scope expands once the allocator is operational and the evidence accumulates.

## Pitfalls

**Paperwork-only conformance.** Producing the memo without changing the engagement's practices is hollow. The standard exists to shape the management system; if practices don't change, the memo is audit theatre.

**Confusing 42001 with RMF.** They complement each other: RMF is the risk conversation; 42001 is the management-system shape. Engagements do both; they do not substitute for each other.

**Over-scoping to the piece.** Some 42001 clauses (policy, leadership, organisational competence) are organisation-level, not piece-level. The engagement's mapping should note where clauses are satisfied by existing corporate artefacts and not duplicate them.

**Under-scoping on operation (clause 8).** Clause 8 has the most AI-specific content. Rushing it to save time misses the controls the standard is primarily for.

**Ignoring Annex A.** The SoA is not optional if the engagement is working toward certification. Even non-certifying engagements benefit from the SoA's control-by-control review.

**No internal audit plan.** 42001 requires internal audit of the AI management system. Engagements that don't schedule one are setting up a gap that surfaces at the first external audit.

## When not to use

- Non-AI pieces. ISO 9001 or 27001 may apply; 42001 does not.
- Pieces in organisations with no management-system maturity — 42001 assumes a baseline (typically 9001 or 27001 existing). Starting from nothing, the standard's overhead is disproportionate to the piece.
- Engagements where the decision to adopt 42001 has not been made. In those cases, RMF alone is adequate.

## Provenance

ISO/IEC 42001:2023 is the first international management-system standard for AI [1]. It follows the Annex SL high-level structure shared by ISO 9001 (quality) [2] and ISO 27001 (information security) [3], enabling integration with existing management systems.

## Related tools

- **NIST AI RMF.** Complementary; RMF is the risk framework, 42001 is the management-system shape.
- **Model cards.** Contribute to 42001 clause 8 (design and development documentation).
- **Datasheets for datasets.** Contribute to 42001 clause 8.3 (AI system data).
- **Review-cadence matrix (G5).** The clause 9 monitoring cadence.

## Verification

[1] International Organization for Standardization. *ISO/IEC 42001:2023 — Information technology — Artificial intelligence — Management system*. ISO; 2023. **[verified]** The canonical standard.

[2] International Organization for Standardization. *ISO 9001:2015 — Quality management systems — Requirements*. ISO; 2015. **[verified]** Annex SL shared high-level structure.

[3] International Organization for Standardization. *ISO/IEC 27001:2022 — Information security, cybersecurity and privacy protection — Information security management systems — Requirements*. ISO; 2022. **[verified]** Precedent management-system standard with which 42001 integrates.
