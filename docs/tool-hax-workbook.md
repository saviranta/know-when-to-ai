# Toolkit — HAX Workbook (Microsoft Human-AI interaction guidelines)

*Gate: G3 Route (Q3b controls documentation). Category: routing substrate.*

## What problem it solves

AI pieces fail at the interaction layer more often than at the model layer. The model is accurate enough; the user doesn't know when to trust it, can't correct it without effort, misses a critical caveat, or is surprised by a behaviour the designer never thought to surface. Amershi and colleagues' 18 *Guidelines for Human-AI Interaction* [1] codify what good AI interaction looks like, empirically derived from a review of existing guidance and validated across real systems. The HAX Workbook [2] operationalises the guidelines as a design-review exercise: the engagement applies each guideline to the piece and records what it does, what it doesn't, and why. It is the interaction-design counterpart to the model card and datasheet.

## How it is used

A **2-3 hour G3 workshop**, typically with the engagement owner, ML practitioner, UX designer (where present), and domain-expert operator. The workbook lists the 18 guidelines grouped by stage: *initially, during interaction, when wrong, over time.* The team walks each guideline and records its status: *met / partial / not applicable / gap.* For gaps, either the design is revised or the gap is documented with reasoning. Output is a HAX-aligned design memo attached to the commitment page.

## Inputs

- A routed piece with an intended interaction design (UI mockups, operator workflow specification, integration plan).
- Representative users (the operators, dispatchers, end-users) available for consultation or walkthrough.
- The HAX Workbook template.

## Outputs

- A **HAX alignment table** — 18 rows, each with status and reasoning.
- **Design changes** for guidelines that surfaced as gaps — specific UI or workflow changes.
- **Justified exceptions** for guidelines not applicable.
- **Monitoring items** — guidelines that require ongoing verification (e.g., *learn from user behaviour*) going into the review-cadence matrix.

## Visualisation

<div style="max-width: 900px; margin: 2rem auto;">
<svg viewBox="0 0 800 340" xmlns="http://www.w3.org/2000/svg" role="img" aria-labelledby="hax-title">
  <title id="hax-title">HAX Workbook — 18 guidelines grouped by interaction stage: initially, during interaction, when wrong, over time</title>
  <style>
    .hax-rect { fill: var(--md-default-bg-color, #fff); stroke: var(--md-default-fg-color, #000); stroke-width: 1.4; }
    .hax-head { fill: var(--md-default-fg-color, #000); opacity: 0.1; stroke: var(--md-default-fg-color, #000); stroke-width: 1.4; }
    .hax-label { font: 700 12px -apple-system, sans-serif; fill: var(--md-default-fg-color, #000); text-anchor: middle; }
    .hax-sub { font: 400 10px -apple-system, sans-serif; fill: var(--md-default-fg-color, #000); }
    .hax-tag { font: italic 10px -apple-system, sans-serif; fill: var(--md-default-fg-color, #000); text-anchor: middle; opacity: 0.8; }
  </style>
  <rect class="hax-head" x="30" y="30" width="180" height="40" />
  <text class="hax-label" x="120" y="55">Initially (G1-G2)</text>
  <rect class="hax-head" x="220" y="30" width="180" height="40" />
  <text class="hax-label" x="310" y="55">During interaction (G3-G4)</text>
  <rect class="hax-head" x="410" y="30" width="180" height="40" />
  <text class="hax-label" x="500" y="55">When wrong (G5)</text>
  <rect class="hax-head" x="600" y="30" width="180" height="40" />
  <text class="hax-label" x="690" y="55">Over time (G8-G18)</text>
  <rect class="hax-rect" x="30" y="80" width="180" height="230" />
  <text class="hax-sub" x="40" y="100">G1 Make clear what the</text>
  <text class="hax-sub" x="40" y="115">system can do.</text>
  <text class="hax-sub" x="40" y="140">G2 Make clear how well</text>
  <text class="hax-sub" x="40" y="155">the system can do what</text>
  <text class="hax-sub" x="40" y="170">it can do.</text>
  <rect class="hax-rect" x="220" y="80" width="180" height="230" />
  <text class="hax-sub" x="230" y="100">G3 Time services based</text>
  <text class="hax-sub" x="230" y="115">on context.</text>
  <text class="hax-sub" x="230" y="140">G4 Show contextually</text>
  <text class="hax-sub" x="230" y="155">relevant information.</text>
  <text class="hax-sub" x="230" y="180">G5 Match relevant social</text>
  <text class="hax-sub" x="230" y="195">norms.</text>
  <text class="hax-sub" x="230" y="220">G6 Mitigate social biases.</text>
  <rect class="hax-rect" x="410" y="80" width="180" height="230" />
  <text class="hax-sub" x="420" y="100">G7 Support efficient</text>
  <text class="hax-sub" x="420" y="115">invocation.</text>
  <text class="hax-sub" x="420" y="140">G8 Support efficient</text>
  <text class="hax-sub" x="420" y="155">dismissal.</text>
  <text class="hax-sub" x="420" y="180">G9 Support efficient</text>
  <text class="hax-sub" x="420" y="195">correction.</text>
  <text class="hax-sub" x="420" y="220">G10 Scope services when</text>
  <text class="hax-sub" x="420" y="235">in doubt.</text>
  <text class="hax-sub" x="420" y="260">G11 Make clear why the</text>
  <text class="hax-sub" x="420" y="275">system did what it did.</text>
  <rect class="hax-rect" x="600" y="80" width="180" height="230" />
  <text class="hax-sub" x="610" y="100">G12 Remember recent</text>
  <text class="hax-sub" x="610" y="115">interactions.</text>
  <text class="hax-sub" x="610" y="140">G13 Learn from user</text>
  <text class="hax-sub" x="610" y="155">behaviour.</text>
  <text class="hax-sub" x="610" y="180">G14 Update and adapt</text>
  <text class="hax-sub" x="610" y="195">cautiously.</text>
  <text class="hax-sub" x="610" y="220">G15-18: encourage</text>
  <text class="hax-sub" x="610" y="235">feedback, convey</text>
  <text class="hax-sub" x="610" y="250">consequences, global</text>
  <text class="hax-sub" x="610" y="265">controls, notify of changes.</text>
  <text class="hax-tag" x="400" y="330">18 guidelines grouped by interaction stage. Each row of the workbook: status, evidence, change required.</text>
</svg>
</div>

*The 18 guidelines grouped by when they apply in the interaction lifecycle. The workbook walks each, one at a time.*

## Anatomy

**Initially (G1-G2).** What the system can do, and how well. For the engagement: the piece's affordances and its known limits must be legible to the user at first encounter. *"Recommends weekday slots at yard A. Cycle-time accuracy ±6 min on average."*

**During interaction (G3-G6).** Timing, context, social norms, bias mitigation. For the engagement: the recommendation arrives when the dispatcher needs it, shows the yard state it's reasoning from, and doesn't systematically favour one carrier cohort.

**When wrong (G7-G11).** Invocation, dismissal, correction, scoping, explanation. For the engagement: the dispatcher can dismiss the recommendation, correct it (choose a different slot), and see why the model recommended what it did. Scoping when in doubt — if the model's confidence is low, it offers a narrower answer or defers.

**Over time (G12-G18).** Memory, learning, cautious updates, feedback, consequences, global controls, change notification. For the engagement: the model learns from dispatcher overrides over time *cautiously*, notifies operators of model updates, and lets the operations team set global rules (e.g., *no model recommendations for yard B*).

**Status categories.** Each guideline gets one: *met* (with evidence), *partial* (with what's missing), *not applicable* (with reasoning), *gap* (with planned remediation).

**Walkthrough discipline.** The walk must involve a representative user. The engineer's understanding of *"the dispatcher can see why the model recommended X"* differs from the dispatcher's experience of the UI. Walkthroughs with actual operators surface gaps the design team misses.

## Example

??? example "Paper trail — HAX walkthrough for the allocator UI"
    *W18 of 2026. Priya (owner), Alex (ML), Rin (UX designer), Chen (dispatcher). 2.5 hours.*

    *G1 make clear what the system can do.* Chen walks the mockup. The dispatcher console has a new panel labelled *"suggested slot"* with the slot ID, expected cycle time, and confidence indicator. Chen: *"this is clear — I know it's suggesting a slot."* Status: **met**.

    *G2 how well.* The confidence indicator is a coloured bar (low / medium / high). Chen: *"I know it's confident, but what does 'high' mean — 90%, 70%?"* The bar's meaning is not specified. Status: **gap**. Fix: add a tooltip with the calibrated probability range per bar colour; add to the operator training.

    *G3 time services based on context.* The suggestion appears when the dispatcher opens the arrival; not before (avoids clutter), not after (avoids lag). Status: **met**.

    *G4 contextually relevant information.* The suggestion shows the three most-influencing features (current queue at that slot, priority class, weather). Chen: *"this is actually useful — I don't care about all features, but the top three help me verify."* Status: **met**.

    *G5 social norms.* Rin: *"the system doesn't address dispatchers by name or use first-person; suggestions are impersonal."* Chen nods. Status: **met**.

    *G6 mitigate social biases.* A/B audit showed no material differential recommendations across carrier cohorts. Status: **met (monitored)**.

    *G7 invocation.* The suggestion is always present; no invocation needed for normal workflow. Status: **met**.

    *G8 dismissal.* Chen: *"I hit Escape and it collapses. Good."* Status: **met**.

    *G9 correction.* Chen picks a different slot — does the system record this? Alex confirms: dispatcher overrides are logged, the reason field is optional. Status: **partial**. Chen suggests surfacing the top-2 alternatives so correction is quicker. Fix queued as a V1.1 improvement; not blocking.

    *G10 scope when in doubt.* When confidence is low, does the system say so? Currently, yes — low confidence means the coloured bar is short. But the suggestion is still given. Rin and Chen propose: at very low confidence, the suggestion is replaced with *"no clear preference, any of the following work: [list of 3]"*. Status: **gap**. Fix: implement the "no clear preference" fallback before launch.

    *G11 make clear why.* The top-three features are shown (G4). Chen tested a few cases; the explanations are legible. Status: **met**.

    *G12 remember recent.* Not applicable — the allocator is stateless per arrival. Status: **N/A**.

    *G13 learn from user behaviour.* The model retrains on overrides. Status: **met**.

    *G14 update cautiously.* Model updates go through the three-stage rollout. Status: **met**.

    *G15 encourage feedback.* The override reason field is optional. Status: **partial**. Chen suggests making specific reasons easier to select (picklist). Fix queued for V1.1.

    *G16 convey consequences.* When the dispatcher accepts a suggestion, they see the expected cycle time — making the consequence explicit. Status: **met**.

    *G17 global controls.* The operations team can disable the allocator globally with one switch. Status: **met**.

    *G18 notify of changes.* When the model is updated, dispatchers receive an in-app note with a one-line change summary. Status: **met**.

    *Summary.* 14 met, 2 partial, 1 N/A, 2 gap. Two gaps block launch (G2 confidence meaning, G10 no-clear-preference fallback). Two partial are V1.1 items.

    *Paper trail.* HAX table attached to the commitment page. G2 and G10 gaps become engineering tickets with a W20 deadline. The commitment page's launch condition includes "HAX gaps G2 and G10 closed".

## Pitfalls

**Walking without users.** The design team walks the guidelines alone, confirming their own design. Gaps go undetected. Include at least one representative end-user.

**All-green workbook.** 18 guidelines, 18 *met* statuses. Real pieces always have partials and gaps; an all-green workbook indicates the team hasn't looked hard enough.

**Treating N/A as a skip.** Each N/A needs a reason. *"Not applicable because we chose not to implement learning"* is different from *"Not applicable because the piece is single-turn stateless."*

**Gaps without owners.** A gap logged without a named owner and a deadline drifts. Gap entries must include who fixes it and when.

**Applying the workbook post-launch.** Running the walk after the piece is in production is too late to fix most gaps without rework. The walk belongs in G3 or G4, before commit.

**Guideline-by-the-letter vs. guideline-by-the-spirit.** Some teams satisfy G2 (*how well the system can do*) with a tiny info-tooltip nobody reads. The letter is met; the spirit — the user understanding performance — is not. The walkthrough with a user catches this.

## When not to use

- Pieces without a direct human interaction surface (background services, batch pipelines). HAX guidelines apply partially at best; other documentation (runbooks, on-call playbooks) covers the relevant surface.
- Very early prototypes where the interaction design is not yet specified. Run HAX once the interaction is stable enough to be walked.
- Pieces where the user is a highly-trained specialist operating in an established workflow — some guidelines are over-scoped for that user class. Document exceptions explicitly.

## Provenance

The 18 guidelines were published by Amershi, Weld, Vorvoreanu, and colleagues in 2019 [1]. Microsoft published the HAX Toolkit (including the Workbook and design patterns library) [2] as the operational companion. Related work includes Google's *People + AI Guidebook* [3], which overlaps in spirit and differs in organisation.

## Related tools

- **Model cards.** Complementary artefact; model card covers the model, HAX covers the interaction.
- **Pre-mortem.** Many pre-mortem findings translate into HAX-level interaction risks (trust erosion, alert fatigue).
- **Shneiderman two-axis framework.** Offers a different lens on human-AI control design; pairs well with HAX at the design stage.

## Verification

[1] Amershi S, Weld D, Vorvoreanu M, et al. Guidelines for human-AI interaction. *CHI '19*. 2019. **[verified]** The canonical 18 guidelines paper.

[2] Microsoft. HAX Toolkit. Microsoft Research. 2022. **[verified]** The Workbook, Design Patterns, and Playbook operationalising the guidelines.

[3] Google People + AI Research. *People + AI Guidebook*. Google. 2019. **[verified]** Related practitioner guidebook.
