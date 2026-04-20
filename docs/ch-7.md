# Chapter 7 — G3 Route

A piece that leaves this gate carries four things: a destination, a substrate, a controls design, and a one-sentence justification. A piece that does not carry those four things has not left the gate.

G3 is the gate most engagements fail at. It is also the gate that holds the whole method's weight. The two Tier-0 checks upstream can only refuse. G1 and G2 only prepare. G4 and G5 only sequence and commit what G3 has already routed. The four non-refusal outcomes the book produces — *Human-operated*, *Non-AI automation*, *AI as assistant*, *Autonomous AI* — are all produced here, one per piece, and none are produced anywhere else.

## 7.1 Why "Route"

The gate is named after a verb. Every Tier-1 gate is named after a verb — *observe*, *decompose*, *sequence*, *commit*. The gates name actions; the artefacts name things. G3's action is *routing*, and G3's artefact is the *routing map*.

"Route" does three kinds of work at once.

It is **directional**. A route goes from somewhere to somewhere; the route-maker picks which of several candidate destinations the cargo reaches. Each piece from G2 has more than one plausible destination when it arrives at the gate, and the gate's job is to choose.

It is **network-idiomatic**. *Route this ticket to tier 2. Route this case to legal. Route this packet through the gateway.* The word is already in every operator's mouth in the sense the gate means it. No domain training is needed for the metaphor to land.

It is **non-default**. Routing presumes the existence of multiple candidate destinations; a thing that has only one place to go is *delivered*, not routed. The whole G3 stance is that no piece has a default destination. The technology in use elsewhere in the organisation is not a default; the team's tooling preference is not a default; the most recent conference talk is not a default. Each piece is sent somewhere by a decision that could have gone elsewhere.

The noun closest to competing is *placement*, and it lost on purpose. *Placement* is passive — things rest where they belong. *Routing* is active — somebody is choosing. That is the philosophical point the gate's name has to carry, and the passive noun carried it poorly. Inside this chapter, the vocabulary is routing, routed, route. When *placement* slips in, it is in an earlier chapter's colloquial sense, and the G3 map will not repeat it.

## 7.2 What arrives at G3

G2 hands G3 an issue tree — a set of sub-problems that are mutually exclusive and collectively exhaustive [1]. Each sub-problem is a *piece*: small enough to be routed as a unit, independent enough that its route does not depend on another piece's route.

What each piece does *not* carry is a destination. The stance the gate begins from is that no piece is automatable until its route is named and its controls are drawn.

The running example from [Chapter 5](ch-5.md) returns here. The freight-logistics situation statement pointed at inbound truck delay. G2's issue tree, at its simplest, splits the work into four pieces:

1. **Carrier ETA accuracy.** The arrival estimate the carrier's transport management system posts, measured against what the driver actually does.
2. **Yard scheduling.** How trailer slots are offered and accepted twenty-four hours ahead of the arrival window.
3. **Dock-door assignment.** How trucks on the yard are matched to dock doors once they are ready to unload.
4. **Late-arrival exception handling.** What happens when (1)–(3) break down and the truck misses its window.

At G3, these four pieces do not share a substrate by default. Each is routed on its own terms. Three may end up in the same column of outcomes and two may end up in entirely different ones. The issue tree is the input; the routing map is the output; the substrate is chosen per piece.

## 7.3 The four outcomes

G3 produces four outcomes, one per piece. Every piece leaves the gate with exactly one outcome assigned. No piece leaves with two outcomes, a ranked preference between outcomes, or an outcome to be determined later. See Illustration 7.1.

<div style="max-width: 900px; margin: 2rem auto;">
<svg viewBox="0 0 800 520" xmlns="http://www.w3.org/2000/svg" role="img" aria-labelledby="ch7r-title">
  <title id="ch7r-title">How a piece from G2 reaches one of four outcomes at G3</title>

  <style>
    .ch7r-rect-piece { fill: var(--md-default-bg-color, #fff); stroke: var(--md-default-fg-color, #000); stroke-width: 2; }
    .ch7r-rect-q { fill: var(--md-default-bg-color, #fff); stroke: var(--md-default-fg-color, #000); stroke-width: 1.5; }
    .ch7r-rect-out { fill: var(--md-default-bg-color, #fff); stroke: var(--md-default-fg-color, #000); stroke-width: 2.5; }
    .ch7r-arrow { stroke: var(--md-default-fg-color, #000); stroke-width: 1.5; fill: none; }
    .ch7r-head { fill: var(--md-default-fg-color, #000); }
    .ch7r-label-piece { font: 700 12px -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif; fill: var(--md-default-fg-color, #000); text-anchor: middle; }
    .ch7r-label-q { font: 600 11px -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif; fill: var(--md-default-fg-color, #000); text-anchor: middle; }
    .ch7r-label-out { font: 700 11px -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif; letter-spacing: 0.05em; fill: var(--md-default-fg-color, #000); text-anchor: middle; text-transform: uppercase; }
    .ch7r-sub { font: italic 10px -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif; fill: var(--md-default-fg-color, #000); text-anchor: middle; opacity: 0.85; }
    .ch7r-branch { font: 600 10px -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif; letter-spacing: 0.1em; fill: var(--md-default-fg-color, #000); text-anchor: middle; text-transform: uppercase; opacity: 0.75; }
    .ch7r-band { font: 500 10px -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif; letter-spacing: 0.18em; fill: var(--md-default-fg-color, #000); text-anchor: middle; text-transform: uppercase; opacity: 0.6; }
  </style>

  <text class="ch7r-band" x="400" y="18">Routing decision flow &mdash; one pass per piece</text>

  <rect class="ch7r-rect-piece" x="330" y="30" width="140" height="44" rx="4" />
  <text class="ch7r-label-piece" x="400" y="50">Piece from G2</text>
  <text class="ch7r-sub" x="400" y="66">no default destination</text>

  <line class="ch7r-arrow" x1="400" y1="74" x2="400" y2="96" />
  <polygon class="ch7r-head" points="393,96 407,96 400,108" />

  <rect class="ch7r-rect-q" x="285" y="112" width="230" height="52" rx="4" />
  <text class="ch7r-label-q" x="400" y="132">Does any automation</text>
  <text class="ch7r-label-q" x="400" y="150">earn its place?</text>

  <line class="ch7r-arrow" x1="515" y1="138" x2="625" y2="138" />
  <polygon class="ch7r-head" points="625,132 625,144 636,138" />
  <text class="ch7r-branch" x="570" y="130">No</text>

  <rect class="ch7r-rect-out" x="636" y="114" width="140" height="48" rx="4" />
  <text class="ch7r-label-out" x="706" y="134">Human-</text>
  <text class="ch7r-label-out" x="706" y="150">operated</text>

  <line class="ch7r-arrow" x1="400" y1="164" x2="400" y2="196" />
  <polygon class="ch7r-head" points="393,196 407,196 400,208" />
  <text class="ch7r-branch" x="420" y="184">Yes</text>

  <rect class="ch7r-rect-q" x="285" y="212" width="230" height="52" rx="4" />
  <text class="ch7r-label-q" x="400" y="241">Does a rule or script fit?</text>

  <line class="ch7r-arrow" x1="515" y1="238" x2="625" y2="238" />
  <polygon class="ch7r-head" points="625,232 625,244 636,238" />
  <text class="ch7r-branch" x="570" y="230">Yes</text>

  <rect class="ch7r-rect-out" x="636" y="214" width="140" height="48" rx="4" />
  <text class="ch7r-label-out" x="706" y="234">Non-AI</text>
  <text class="ch7r-label-out" x="706" y="250">automation</text>

  <line class="ch7r-arrow" x1="400" y1="264" x2="400" y2="296" />
  <polygon class="ch7r-head" points="393,296 407,296 400,308" />
  <text class="ch7r-branch" x="420" y="284">No</text>

  <rect class="ch7r-rect-q" x="285" y="312" width="230" height="52" rx="4" />
  <text class="ch7r-label-q" x="400" y="332">Can AI hold this decision</text>
  <text class="ch7r-label-q" x="400" y="350">under fitting controls?</text>

  <line class="ch7r-arrow" x1="285" y1="338" x2="175" y2="338" />
  <polygon class="ch7r-head" points="175,332 175,344 164,338" />
  <text class="ch7r-branch" x="230" y="330">No</text>

  <rect class="ch7r-rect-out" x="24" y="314" width="140" height="48" rx="4" />
  <text class="ch7r-label-out" x="94" y="334">AI as</text>
  <text class="ch7r-label-out" x="94" y="350">assistant</text>

  <line class="ch7r-arrow" x1="515" y1="338" x2="625" y2="338" />
  <polygon class="ch7r-head" points="625,332 625,344 636,338" />
  <text class="ch7r-branch" x="570" y="330">Yes</text>

  <rect class="ch7r-rect-out" x="636" y="314" width="140" height="48" rx="4" />
  <text class="ch7r-label-out" x="706" y="334">Autonomous</text>
  <text class="ch7r-label-out" x="706" y="350">AI</text>

  <text class="ch7r-band" x="400" y="410">Each outcome carries its own controls burden</text>

  <rect class="ch7r-rect-q" x="40" y="424" width="170" height="76" rx="4" />
  <text class="ch7r-sub" x="125" y="446">Human-operated:</text>
  <text class="ch7r-sub" x="125" y="462">operator training,</text>
  <text class="ch7r-sub" x="125" y="478">escalation template.</text>

  <rect class="ch7r-rect-q" x="230" y="424" width="170" height="76" rx="4" />
  <text class="ch7r-sub" x="315" y="446">Non-AI automation:</text>
  <text class="ch7r-sub" x="315" y="462">fitness review,</text>
  <text class="ch7r-sub" x="315" y="478">explicit audit path.</text>

  <rect class="ch7r-rect-q" x="420" y="424" width="170" height="76" rx="4" />
  <text class="ch7r-sub" x="505" y="446">AI as assistant:</text>
  <text class="ch7r-sub" x="505" y="462">draft review,</text>
  <text class="ch7r-sub" x="505" y="478">override always available.</text>

  <rect class="ch7r-rect-q" x="610" y="424" width="170" height="76" rx="4" />
  <text class="ch7r-sub" x="695" y="446">Autonomous AI:</text>
  <text class="ch7r-sub" x="695" y="462">audit, rollback,</text>
  <text class="ch7r-sub" x="695" y="478">review, sunset.</text>
</svg>
</div>

*Illustration 7.1 — How a piece from G2 reaches one of four outcomes at G3. Three questions, four outcomes, one pass per piece. The controls burden is not zero at any outcome; it rises with AI autonomy and with the stakes of the decision.*

**Human-operated.** The piece stays with a person. No automation earns its place here — not because automation is forbidden, but because the positive case for it has not been made. The person's workflow may get AI support at *build* time (training material, lookup aids, onboarding tools) without any of that appearing in the runtime substrate. In freight, an experienced yard manager negotiating with a driver after two missed windows fits here: the exception handling is improvised, relational, and depends on accumulated knowledge that is hard to specify. The route reads: *Human-operated. Substrate: yard manager. No system built at this point. Controls: operator training and escalation template. Justification: exception categories are open-ended; cost of an automated wrong call exceeds the cost of a human one.*

**Non-AI automation.** The piece is carried by a rule, a script, a constraint solver, or another deterministic substrate — nothing that learns from data. The behaviour is repeatable, the logic is inspectable, and the audit path is the code itself. In freight, dock-door assignment fits: it is a constrained-optimisation problem (door compatibility, current queue, cargo type) with well-defined inputs and a verifiable objective. The route reads: *Non-AI automation. Substrate: constraint solver against the door-compatibility matrix. Controls: daily queue-length report, monthly solver fitness review. Justification: deterministic reproducibility is required for audit, and the problem fits a classical solver.* Classical machine learning — gradient-boosted trees, logistic regression, support-vector machines — sits above the Non-AI / AI boundary, not here. A piece that fits classical ML is an AI candidate, routed through Q3 to *AI as assistant* or *Autonomous AI*.

**AI as assistant.** An AI level fits the piece, but no level is defensible as AI-held under the controls the decision needs. A human holds the decision; the AI supports with retrieval, drafts, summaries, or option generation. The interaction pattern is drawn from the Human-AI Interaction guidelines [5] — drafts presented, easy to dismiss, easy to correct, reasoning exposed on request. In freight, carrier-ETA exception triage fits here: a model surfaces the three late trailers whose risk profiles most resemble next week's likely bottleneck and drafts an outreach message for each, but the yard coordinator reads, adjusts, and sends. The route reads: *AI as assistant. Substrate: LLM with retrieval against the carrier-performance log. Controls: drafts always reviewed, send log, operator override one click away. Justification: the escalation decision is judgment-heavy, but model-suggested options reduce time-to-outreach measurably.*

**Autonomous AI.** An AI level fits the piece *and* can be operated under controls fitting the decision's reversibility, blast radius, and consequence time. The AI makes the call. In freight, yard-slot allocation twenty-four hours out is a candidate: a model predicts trailer volume per hour and reserves slots without a human in the loop, a named owner watches weekly accuracy, every allocation is logged with its features, allocations older than four hours can be swapped manually, and the system sunsets if accuracy drops below the published carrier baseline for two consecutive weeks. The route reads: *Autonomous AI. Substrate: gradient-boosted predictor with a thin LLM carrier-communication layer. Controls: weekly accuracy dashboard, override log, rollback to rules at eighty per cent of baseline, sunset at sixty per cent. Justification: decision is reversible within four hours, baseline is published, rollback substrate exists, owner is named.*

Two quiet rules on the four outcomes. The first: **every outcome carries a controls burden**, including the non-AI outcomes. Human-operated needs training and an escalation path. Non-AI automation needs a fitness review and an explicit audit trail. Assistant and autonomous need progressively more. The burden is not zero anywhere, and it rises with AI autonomy and with the decision's stakes. The second: **when in doubt, step back one outcome**. A piece whose case for *Autonomous AI* is half-drawn gets routed to *AI as assistant* until the case is whole; a piece whose case for *AI as assistant* is half-drawn gets routed to *Non-AI automation* or *Human-operated*. Conservative routing is the intended failure mode of the gate.

## 7.4 Tools at G3

Each question in the routing flow has a small toolkit — frames and artefacts the gatekeeper can point to when asked *why this outcome?*. None of the tools are invented here; they are borrowed from analytical traditions the gate inherits from. Naming them, and picking them deliberately, keeps the routing assessable rather than vibes-based. A routing map whose justifications cite specific tools by name — *"operator shadowing for Q1; DMN for Q2; Model Cards and SMACTR for controls"* — is a map the next engagement can challenge on its own terms. A map whose justifications read *"team judgement"* is a map that cannot be reviewed.

### Q1 — Does any automation earn its place?

This question is not *could we automate this?* — almost any step could, given enough investment. It is *is the work shaped such that automation pays back?*. A step done once a month, or done fifty times a day but with heavy judgement on each call, or sitting downstream of a bottleneck that would simply move one position after automation, does not earn automation. The question asks the gatekeeper to look at the shape of the work, not at the appeal of the technology.

Four tools answer this without any AI-specific apparatus. Use them in that order: shadowing first, because it produces the raw observations; time-and-motion records second, because they aggregate the observations into a distribution; VSM third, because it places the aggregate inside the end-to-end flow. SIPOC is the cheapest alternative to VSM when the flow is not yet stable enough to map end-to-end — a five-column scope sketch that draws the boundaries without committing to a full flow. Stop at the earliest one that settles the question.

??? note "Operator shadowing"
    Sit with the person doing the work for a full shift and write down what they actually do, minute by minute. Best tool when the stated process and the observed process diverge. Weakest when the work is already well-documented or when the observed shift is not representative.

    *Toolkit entry: Part 4 (pending).*

??? note "Time-and-motion records"
    The classical industrial-engineering artefact: count the distribution of activity across a representative week and surface the steps where repetition is genuine. Best when the work is high-volume and repetitive enough to aggregate meaningfully. Weakest for low-frequency or creative work.

    *Toolkit entry: Part 4 (pending).*

??? note "Value-stream mapping (VSM)"
    From Lean production: draw the end-to-end flow and mark where each step adds value, where it waits, where it is reworked. Best when the question is *would automation here actually reduce cycle time?*. Weakest when the flow is too unstable to map.

    *Toolkit entry: Part 4 (pending).*

??? note "SIPOC"
    Suppliers, Inputs, Process, Outputs, Customers — a five-column scope map from Lean / Six Sigma. Best as a cheap starter sketch before VSM when the flow's boundaries are clearer than its internal steps. Weakest when the value question is about flow efficiency; VSM is the better tool there.

    *Toolkit entry: Part 4 (pending).*

If the four together cannot name the automation case in a paragraph, the piece is routed to *Human-operated*. The gate does not use *"we could probably automate this"* as an input.

### Q2 — Does a rule or script fit?

This question asks whether the decision surface is *explicit and stable enough to write down*. Explicit means the conditions that determine the outcome can be enumerated; stable means they do not shift week to week as exceptions accumulate. Where both hold, a rule, script, or constraint solver carries the decision more cheaply, more auditably, and more reliably than anything that learns from data would. The question is not about sophistication; it is about whether the decision can be reduced to an enumerable set of conditions without learning from examples.

Two tools draw the surface. Draw the decision table first. If every row terminates cleanly in an outcome, the piece is a rule and the table is the specification. If the rows need an adjudicator — a classifier, a scorer, a learned weighting — to handle distributions the table cannot enumerate, the piece is not a rule; it is an AI candidate, and it moves to Q3 to be weighed against the controls question.

??? note "Decision tables"
    Rows of conditions, columns of outcomes, cells marked yes / no / —. The fastest way to draw the decision surface on paper. If every row terminates cleanly, the piece is a rule and the table is the specification.

    *Toolkit entry: Part 4 (pending).*

??? note "Decision Model and Notation (DMN)"
    The industrial version of the decision table, standardised by OMG [9]. Pairs a decision-requirements diagram with executable decision tables. Use when the rule surface has dependencies — decision A depends on decision B depends on decision C — and a flat table is no longer enough.

    *Toolkit entry: Part 4 (pending).*

Classical machine learning — gradient-boosted trees, logistic regression, support-vector machines — is an AI substrate, not a Q2 outcome. A piece that cannot be written as an enumerable decision surface but whose outcome space is small, well-labelled, and stable fits classical ML; the test then shifts to the AI-range precondition: is there a stable label set, a maintainable labelling pipeline, and a budget for both (see routing error 4 in section 7.7)? The label-budget calculation, listed under Q3's AI-range tools, is the right instrument.

### Q3 — Can AI hold this decision under fitting controls?

This is the most dangerous question in the gate, because it is two questions wearing one label. The first is *does AI work here?* — an empirical question about the model's performance on the real decision distribution, not on training data. The second is *can fitting controls be drawn?* — a design question about whether the audit, rollback, review, and sunset machinery can be sketched with enough specificity that a named owner can be handed responsibility. A *yes* to one is not a *yes* to both, and conflating the two is how *Autonomous AI* routes survive G3 and fail at G5.

Work the two parts in order. Establish empirical fitness first; if the model does not work, the controls discussion is moot. Then work controls. If controls cannot be drawn for the decision the model would make, the piece is routed to *AI as assistant* regardless of how well the model performs — the controls design is the gating condition, not the performance number.

**Does AI work here?** The question has two phases: paper first, empirical second. The paper phase decomposes the decision and triages whether AI even fits the problem shape. If it does, the empirical phase measures whether a specific AI substrate actually performs on the real data. Almost every failed route skipped the paper phase and went straight to a pilot; the routing errors in section 7.7 are the visible evidence.

On paper, five tools help. Run the AI Canvas first: it decomposes the decision into prediction, judgement, action, outcome, input, training, and feedback, and the decomposition alone often resolves whether AI belongs. Use the Machine Learning Canvas when the route looks classical-ML and the engineering plan needs drawing in more depth than the AI Canvas admits. Cynefin triages the problem domain — AI fits the *Complicated* domain (pattern-based, analysable) but not the *Complex* one (emergent, causation only visible in retrospect). Pre-mortem imagines the AI system has failed six months after launch and works backwards; each named reason is either a control to design or a precondition to verify. The PAIR *User Needs + AI Strengths* worksheet is the right tool for user-facing AI where the match between a stated user need and a claimable model capability is the load-bearing question.

??? note "AI Canvas"
    A single-page decomposition of the decision into seven cells — prediction, judgement, action, outcome, input, training, feedback [12]. Use as the first paper read. If the decision does not map cleanly onto a prediction sub-task with separable judgement, AI does not belong, regardless of how capable the candidate model is.

    *Toolkit entry: Part 4 (pending).*

??? note "Machine Learning Canvas"
    A ten-block template for an end-to-end ML project — value proposition, data sources, prediction task, features, decisions, making predictions, offline and live evaluation, model building, data collection [13]. Heavier than the AI Canvas. Best when the route looks classical-ML and the engineering plan needs drawing in depth.

    *Toolkit entry: Part 4 (pending).*

??? note "Cynefin"
    A five-domain triage frame for decision contexts — Clear, Complicated, Complex, Chaotic, and a central Confusion [14]. AI substrates fit the *Complicated* domain, where cause and effect can be discovered by analysis; the *Complex* domain, with emergent behaviour and retrospective causation, rewards a *probe–sense–respond* approach instead, not a model.

    *Toolkit entry: Part 4 (pending).*

??? note "Pre-mortem"
    Imagine that the AI system has failed six months after launch, then list the reasons [15]. The prospective-hindsight move surfaces failure modes before any deploy. Best run as a forty-five-minute workshop with the whole team; each named reason becomes either a control to design or a precondition to verify.

    *Toolkit entry: Part 4 (pending).*

??? note "PAIR User Needs + AI Strengths worksheet"
    A single-page worksheet from Google's People + AI Guidebook [16] that matches user-need statements to AI-strength statements, and forces the team to commit to explicit success criteria before the build. Best for user-facing AI where the user-need-to-model-capability match is load-bearing. Weakest for back-office decisions with no user-visible interface.

    *Toolkit entry: Part 4 (pending).*

Then the empirical phase. Pick by how the decision's blast radius constrains the experiment. Shadow deployment is the cheapest and safest, because the outputs are not actioned. Offline evaluation uses the richest data (historical operator decisions) but can only measure against past distributions. A controlled A/B is the only test that measures against the current substrate under live conditions, but a decision with a blast radius larger than a small cohort will not admit an A/B at all — a constraint that itself informs the routing.

??? note "Shadow deployment"
    The AI runs on live inputs but its outputs are not actioned; outputs are logged and compared to the substrate in production. Best as the first empirical read. Weakest on decisions where the AI's output would have changed the input distribution the next step sees.

    *Toolkit entry: Part 4 (pending).*

??? note "Offline evaluation"
    Run the AI over a held-out set of historical operator decisions and compare. Best when the historical distribution is representative. Weakest when the decision distribution drifts fast, or when the historical labels are themselves noisy (see routing error 2).

    *Toolkit entry: Part 4 (pending).*

??? note "Controlled A/B against the current substrate"
    Route a slice of live traffic to the AI substrate, the rest to the current one, compare outcomes over a pre-declared window. Best when the blast radius admits a small cohort. Not available for decisions with large or concentrated blast radius.

    *Toolkit entry: Part 4 (pending).*

**Can fitting controls be drawn?** The tools here are drawn from the governance and audit literature. Pick by the grain the decision needs. NIST and ISO 42001 set the vocabulary at the organisation level; SMACTR, Model Cards, and Datasheets for Datasets supply per-system and per-dataset artefacts; the HAX Workbook sits alongside Amershi's Human-AI Interaction guidelines for user-facing systems; Shneiderman's two-axis frame is a fast sanity check at the level-choice line.

??? note "NIST AI Risk Management Framework"
    Voluntary framework for risk identification, measurement, and management at the system level [4]. Use as the organisation-level vocabulary when drawing risk categories and management functions; it names the pieces a controls sketch must address.

    *Toolkit entry: Part 4 (pending).*

??? note "ISO/IEC 42001"
    International management-system standard for AI [3]. Use where the organisation is seeking third-party certification or has contractual obligations that reference ISO standards. Sets the process discipline around the controls design rather than the design itself.

    *Toolkit entry: Part 4 (pending).*

??? note "SMACTR internal-audit protocol"
    Scoping, Mapping, Artefact collection, Testing, Reflection [7]. A reproducible procedure for drawing the audit trail and the rollback trigger *before* the system is built. Use to turn *"we will have controls"* into a named set of artefacts with owners against them.

    *Toolkit entry: Part 4 (pending).*

??? note "Model Cards"
    A single-page document of a model's training provenance, performance slices, and intended-use boundary [8]. Use as the owner-facing artefact the controls set is anchored on; particularly strong for classical-ML and fine-tuned routes, where provenance and slice performance are load-bearing.

    *Toolkit entry: Part 4 (pending).*

??? note "Datasheets for Datasets"
    A template documenting a dataset's motivation, composition, collection process, preprocessing, uses, distribution, and maintenance [17]. The natural pair to Model Cards [8]: Model Cards document the model, Datasheets document the data. Particularly load-bearing for classical-ML and fine-tuned routes, where label provenance is the stability hinge.

    *Toolkit entry: Part 4 (pending).*

??? note "HAX Workbook"
    A planning worksheet from the Microsoft HAX Toolkit [18] for prioritising which of the Human-AI Interaction guidelines [5] apply to a specific user-facing system, and for assigning an owner to each. Use as the bridge between Amershi's guidelines and a concrete per-system plan.

    *Toolkit entry: Part 4 (pending).*

??? note "Shneiderman two-axis frame"
    Automation level on one axis, human control on the other [6]. Use as a sanity check that *Autonomous AI* is not being chosen where a higher-control, lower-automation configuration would be both safer and adequate. Quick to apply at the line between assistant and autonomous.

    *Toolkit entry: Part 4 (pending).*

### Picking a level within the AI range

Once the route is *AI as assistant* or *Autonomous AI*, a second, narrower choice follows: which of the AI capability levels? The levels themselves are in section 7.6; the question here is which tools help make the choice. Four tools do most of the work. Run them in order. The adaptation decision tree picks between prompt, retrieval, fine-tune, and agent. The precondition tests follow — a label budget if the tree arrives at fine-tune or classical ML, a retrievable-quality test if it arrives at RAG. The total-cost-of-ownership ladder then sanity-checks the choice against the cost the owning team can actually carry, indefinitely.

??? note "Adaptation decision tree"
    Chapter 11 overlay. Runs prompt → retrieval → fine-tune → agent, with stop rules at each step. Use as the top-of-tree choice between levels; each step past *prompt* must be earned by a case the previous step cannot carry (see heuristic 2 in Illustration 7.2).

    *Toolkit entry: Part 4 (pending).*

??? note "Label-budget calculation"
    Labeller-hours per month, plus the cost of resolving disagreements between labellers. Non-optional for classical-ML and fine-tuned routes. A route without a label budget is a wish, not a plan (see routing error 4 in section 7.7).

    *Toolkit entry: Part 4 (pending).*

??? note "Retrievable-quality test"
    Is the corpus chunked sensibly, current, and indexed against the questions actually asked? The RAG precondition. A corpus that fails the test is not a RAG substrate; it is a human-side reference (see routing error 5).

    *Toolkit entry: Part 4 (pending).*

??? note "Total-cost-of-ownership ladder"
    Chapter 11 overlay. Attaches a per-call cost band to each level, so the cost implication of climbing is visible at the routing table, not at deployment. Use to sanity-check whether the owning team can carry the cost the chosen level implies, indefinitely.

    *Toolkit entry: Part 4 (pending).*

None of these tools replaces the gatekeeper's judgement. Each is a lens that makes a specific facet of the decision examinable. Together they let G3 be defended in a way no single overall heuristic could — and, on the way back from a failed engagement, debugged in a way no post-hoc story could.

## 7.5 Controls for an AI route

The line between *AI as assistant* and *Autonomous AI* is the single most consequential decision inside the method. The two-part question the gate answers at this line is *does AI work reliably for this decision?* and *can the controls this decision needs be drawn?*

The second part deserves unpacking. Not every AI decision requires the same controls apparatus. A low-stakes, reversible decision with a short consequence time holds under a light audit log and a weekly review. An irreversible, high-blast-radius decision with a long consequence time needs the full set — detailed audit, rapid rollback, continuous review, an absolute sunset threshold. The controls are proportional to the decision, not uniform across AI routes. The test is not "has a fixed bar been cleared" but "have controls that fit this specific decision been drawn and owned".

Four canonical parts are available. A route may use all four or some subset, depending on what the decision calls for.

**Audit.** Every decision logged with its inputs, its features, and its chosen output — at a grain sufficient for a specific decision two months from now to be reconstructed. For high-stakes routes the audit trail extends to model version, retrieval context, and evaluation metadata; for low-stakes routes a decision log with inputs and outputs is enough.

**Rollback.** A substrate that takes over if the AI substrate fails or drifts — the previous workflow, a rule set, a classical model — triggered within the blast radius of a single bad call, before a wrong decision has become a wrong cohort. For reversible decisions the rollback can be slower; for irreversible decisions it must be fast enough to beat the irreversibility window.

**Review.** A cadence at which the system's calibration is checked, by a named owner. Short enough that drift is detected before it has produced a meaningful cohort of wrong outputs. Monthly is suspicious on its own; weekly is common; daily is needed where the decision has short consequence time.

**Sunset.** An absolute metric threshold at which the system shuts down — absolute, not relative to its own performance history. A system graded only against its own last quarter can drift indefinitely.

Three tests decide which parts a decision needs, and at what grain. *Reversibility* — can the decision be undone, and within what window? *Blast radius* — how many people, how much money, how much time is affected by one wrong call? *Consequence time* — how long until the wrongness of a wrong call is detectable? A decision that is reversible, low-blast-radius, and fast-to-detect needs a light set. A decision that is irreversible, high-blast-radius, or slow-to-detect needs more. Illustration 7.1 shows the four parts without grading them, because the grading is per-decision.

At G3, the controls are not yet *built*; they are *drawn*. A credible sketch on a named owner's desk is the condition for an *Autonomous AI* route; the build comes at G4 Sequence and lives at G5 Commit. The sketch is not a score and not a promise. It does not convert controls-quality into a number and threshold against it; and it does not require that the controls are in place on day one. It requires that the controls are plausibly buildable by the team that will own them, and that the team has written them down with enough specificity that a sceptical reader can tell whether they were built when the next review comes around.

When in doubt, the route steps back one outcome. A piece whose controls design is half-finished on the page is routed to *AI as assistant* until the design is whole. This is the conservative rule, and it means that some problems the technology could handle well are held at assistant-level longer than they need to be. That is the intended failure mode of the gate.

## 7.6 The AI capability levels — choosing a level

Once a piece is routed to *AI as assistant* or *Autonomous AI*, a second decision follows: *which AI level?* Seven levels, ordered from simplest to most capable (and from smallest to largest surface area). See Illustration 7.2.

<div style="max-width: 900px; margin: 2rem auto;">
<svg viewBox="0 0 800 340" xmlns="http://www.w3.org/2000/svg" role="img" aria-labelledby="ch7a-title">
  <title id="ch7a-title">The AI capability levels</title>

  <style>
    .ch7a-rect { fill: var(--md-default-bg-color, #fff); stroke: var(--md-default-fg-color, #000); }
    .ch7a-rect-1 { stroke-width: 1; }
    .ch7a-rect-2 { stroke-width: 1.3; }
    .ch7a-rect-3 { stroke-width: 1.6; }
    .ch7a-rect-4 { stroke-width: 2; }
    .ch7a-rect-5 { stroke-width: 2.4; }
    .ch7a-rect-6 { stroke-width: 2.8; }
    .ch7a-rect-7 { stroke-width: 3.2; }
    .ch7a-label { font: 700 11px -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif; fill: var(--md-default-fg-color, #000); text-anchor: middle; }
    .ch7a-sub { font: italic 9px -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif; fill: var(--md-default-fg-color, #000); text-anchor: middle; opacity: 0.85; }
    .ch7a-band { font: 500 10px -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif; letter-spacing: 0.18em; fill: var(--md-default-fg-color, #000); text-anchor: middle; text-transform: uppercase; opacity: 0.6; }
    .ch7a-axis { stroke: var(--md-default-fg-color, #000); stroke-width: 1; fill: none; opacity: 0.5; }
    .ch7a-head { fill: var(--md-default-fg-color, #000); opacity: 0.5; }
    .ch7a-axis-label { font: 500 9px -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif; letter-spacing: 0.12em; fill: var(--md-default-fg-color, #000); text-anchor: middle; text-transform: uppercase; opacity: 0.55; }
    .ch7a-divider { stroke: var(--md-default-fg-color, #000); stroke-width: 1; opacity: 0.3; stroke-dasharray: 4 4; }
    .ch7a-range-label { font: 600 10px -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif; letter-spacing: 0.15em; fill: var(--md-default-fg-color, #000); text-anchor: middle; text-transform: uppercase; opacity: 0.55; }
  </style>

  <text class="ch7a-band" x="400" y="18">The AI capability levels &mdash; seven levels, simpler to more capable</text>

  <text class="ch7a-range-label" x="65" y="44">Non-AI</text>
  <text class="ch7a-range-label" x="405" y="44">AI levels</text>

  <line class="ch7a-divider" x1="113" y1="54" x2="113" y2="230" />

  <rect class="ch7a-rect ch7a-rect-1" x="20" y="60" width="90" height="85" rx="3" />
  <text class="ch7a-label" x="65" y="92">Rule</text>
  <text class="ch7a-sub" x="65" y="112">if/then,</text>
  <text class="ch7a-sub" x="65" y="124">lookup</text>

  <rect class="ch7a-rect ch7a-rect-2" x="116" y="60" width="90" height="85" rx="3" />
  <text class="ch7a-label" x="161" y="88">Classical</text>
  <text class="ch7a-label" x="161" y="102">ML</text>
  <text class="ch7a-sub" x="161" y="120">GBT, LR,</text>
  <text class="ch7a-sub" x="161" y="131">SVM</text>

  <rect class="ch7a-rect ch7a-rect-3" x="220" y="60" width="90" height="85" rx="3" />
  <text class="ch7a-label" x="265" y="92">LLM</text>
  <text class="ch7a-sub" x="265" y="112">single call,</text>
  <text class="ch7a-sub" x="265" y="124">no tools</text>

  <rect class="ch7a-rect ch7a-rect-4" x="316" y="60" width="90" height="85" rx="3" />
  <text class="ch7a-label" x="361" y="92">RAG</text>
  <text class="ch7a-sub" x="361" y="112">LLM +</text>
  <text class="ch7a-sub" x="361" y="124">retriever</text>

  <rect class="ch7a-rect ch7a-rect-5" x="412" y="60" width="90" height="85" rx="3" />
  <text class="ch7a-label" x="457" y="88">Single</text>
  <text class="ch7a-label" x="457" y="102">agent</text>
  <text class="ch7a-sub" x="457" y="120">one task,</text>
  <text class="ch7a-sub" x="457" y="131">few steps</text>

  <rect class="ch7a-rect ch7a-rect-6" x="508" y="60" width="90" height="85" rx="3" />
  <text class="ch7a-label" x="553" y="88">Tool-using</text>
  <text class="ch7a-label" x="553" y="102">agent</text>
  <text class="ch7a-sub" x="553" y="120">many tools,</text>
  <text class="ch7a-sub" x="553" y="131">branching</text>

  <rect class="ch7a-rect ch7a-rect-7" x="604" y="60" width="90" height="85" rx="3" />
  <text class="ch7a-label" x="649" y="88">Multi-</text>
  <text class="ch7a-label" x="649" y="102">agent</text>
  <text class="ch7a-sub" x="649" y="120">coordinator</text>
  <text class="ch7a-sub" x="649" y="131">+ workers</text>

  <line class="ch7a-axis" x1="20" y1="170" x2="694" y2="170" />
  <polygon class="ch7a-head" points="690,165 690,175 702,170" />
  <text class="ch7a-axis-label" x="65" y="190">Simpler</text>
  <text class="ch7a-axis-label" x="65" y="203">cheaper</text>
  <text class="ch7a-axis-label" x="65" y="216">auditable</text>
  <text class="ch7a-axis-label" x="649" y="190">More capable</text>
  <text class="ch7a-axis-label" x="649" y="203">costlier</text>
  <text class="ch7a-axis-label" x="649" y="216">larger surface</text>

  <text class="ch7a-band" x="400" y="258">Three heuristics for climbing the levels</text>

  <text class="ch7a-sub" x="160" y="282">1. Prefer the simpler level.</text>
  <text class="ch7a-sub" x="160" y="298">Climbing must be earned by</text>
  <text class="ch7a-sub" x="160" y="314">a case the level below cannot carry.</text>

  <text class="ch7a-sub" x="400" y="282">2. Retrieve before you fine-tune;</text>
  <text class="ch7a-sub" x="400" y="298">fine-tune before you agent.</text>
  <text class="ch7a-sub" x="400" y="314">Stop rules at each step.</text>

  <text class="ch7a-sub" x="640" y="282">3. Agent only for branching.</text>
  <text class="ch7a-sub" x="640" y="298">One call with one schema</text>
  <text class="ch7a-sub" x="640" y="314">is not an agent.</text>
</svg>
</div>

*Illustration 7.2 — The AI capability levels. Seven levels from rule to multi-agent, ordered left-to-right by increasing capability and surface area. Stroke-weight carries the climb: a thicker border encodes larger operational surface, not more goodness. The Non-AI / AI boundary sits between rule and classical ML: the moment a substrate learns from data, it is AI.*

A note before the levels. At every level above *Rule*, the substrate has two layers: a *model* that produces predictions or generations, and a *wrapper* that decides what goes in, what comes out, how the model is called, how its outputs are measured, and what happens when the model fails. For classical machine learning, the team typically owns both layers — labels, features, training pipeline, scorer, monitoring. From LLM upward, the model is almost always rented from a provider (Anthropic, OpenAI, Google) or self-hosted from open weights; the team owns the wrapper — the prompt, the retriever, the tools, the orchestration, the evaluation harness, the logs, and the controls. For most AI routes today, the engineering cost and the failure surface live in the wrapper, not in the model. The levels below are shapes of system, not shapes of model; at each level, what the team owns is named.

**Rule.** A deterministic if/then, lookup, or constraint solver. No model; the rule surface itself is the substrate, and the code is its own audit path. Included at the edge because the AI range borders it; many pieces that look like AI candidates resolve to rules once their decision surface is drawn.

**Classical machine learning.** Gradient-boosted trees, logistic regression, random forests, support-vector machines. The simplest AI level: the team typically *owns the model* — labels, features, training pipeline, retraining cadence — wrapped by a thin scorer and a monitoring job. The audit path runs through the training notebook and the feature store. Claimable where the label set is stable, the features are explainable to a non-specialist, and the team has a labelling budget it can carry for the life of the system.

**LLM feature.** A single call to a large language model, prompt-engineered, no retrieval, no tools. The model is *rented* from a provider (Anthropic, OpenAI, Google) or self-hosted from open weights; the team owns the wrapper — the prompt, the input assembly, the output schema, the evaluation harness, the logs. Used where the work is language-shaped — summarisation, classification, drafting — and the context fits in the prompt window.

**Retrieval-augmented generation.** An LLM with a retriever over a knowledge base [2]. Rented model plus owned wrapper plus owned corpus. The corpus is the second thing the team owns at this level: chunking, currency, index, quality against the real questions. Requires the knowledge base to be retrievable-quality — chunked sensibly, kept current, indexed against the questions actually asked — so RAG pushes the engineering cost into corpus reform, not into model work.

**Single agent.** An LLM with tools, planning a single task over multiple steps. The canonical pattern — reasoning traces interleaved with tool-use actions, as in ReAct [10] — lets the model decide *check this; if X, do this; if Y, do that* within a bounded branching factor. Rented model plus owned wrapper; the wrapper now includes tool definitions, a trajectory logger, and a per-step evaluation surface.

**Tool-using agent.** An LLM with an extended toolset, planning longer or more branchy task trajectories. The step from single agent to tool-using agent is a step in cost and in surface area; approaches that teach the model to invoke tools from demonstration, such as Toolformer [11], make the larger toolkit tractable at training time but do not remove the trajectory variance at runtime. The wrapper carries that variance: tool dispatch, input and output validation, a rollback substrate, trajectory replay.

**Multi-agent system.** A coordinator and specialised workers, often with their own tool access. The step from tool-using agent to multi-agent is the last step up the levels and the costliest; published figures suggest per-task cost at roughly ten to twenty times a single LLM call (see the total-cost-of-ownership overlay in [Chapter 11](ch-11.md)). The wrapper here is itself a distributed system — a message bus, a coordination protocol, worker sandboxes, per-agent audit streams.

Three heuristics govern the choice of level.

**Prefer the simpler level.** The levels climb from rule to multi-agent in order of surface area — more code, more failure modes, more cost per call, more places to audit. Climbing must be earned. A route to a multi-agent system needs a case the tool-using-agent level cannot carry.

**Retrieve before you fine-tune; fine-tune before you agent.** The adaptation decision tree (Chapter 11's overlay) runs prompt → retrieval → fine-tune → agent, with stop rules at each step. Most teams reach for agents three steps too early.

**Agent only for branching.** A single LLM call that returns structured output is not an agent. If the task can be done by one call with one schema, it does not need a planner. The planner pays its cost in trajectory variance; the task must justify that cost.

## 7.7 Five routing errors

The most common routing errors are variants of the same mistake: choosing an AI level before the routing is clear, or choosing a level without its enabling conditions in place. Each of the five below has a characteristic symptom, a root cause, and a corrective. They are not the only errors the gate can make. They are the five that most frequently get caught at the next engagement rather than at this one, because each looks defensible until its specific enabling condition is examined.

**1. Promoting a rule-based piece to an LLM because LLMs are newer.** A dock-door assignment problem that resolves cleanly to a constraint solver gets re-routed to an LLM because the team has an LLM budget and the solver is ten years old. *Symptom:* intermittent unreasonable assignments that a rule would never make — one trailer sent to a door whose cargo type it does not handle, another to a door whose queue is already saturated. *Root cause:* the piece was routed by the substrate the team wanted to use, not by the substrate the work required. *Corrective:* if a rule fits and the rule is auditable, the rule wins. The fact that the rule is old is not a defect; it is a feature. A decision table or DMN [9] diagram of the rule surface, drawn before the LLM proposal landed, would have caught this.

**2. Demoting a judgment piece to a classifier because the classifier performs well on training data.** An exception-triage task that depends on accumulated operator judgment gets re-routed to a classifier because the F1 score on last year's data looks good. *Symptom:* ninety-four per cent accuracy in the training distribution, a month of escalating complaints from operators, a quiet reversion to the old workflow. *Root cause:* the labels the classifier was trained on were proxies — the outcome the operator happened to pick, not the judgment the operator was making — and the proxies held until they did not. *Corrective:* classifiers for well-bounded label sets; assistants for judgment; humans for contested judgment. A Model Card [8] documenting the label provenance and the known failure slices would have prevented the misroute.

**3. Reaching for an agent when a single function call would do.** A summarisation task with one input, one output, and a fixed schema gets routed to a tool-using agent because the team has read about agents. *Symptom:* a twelve-step trajectory producing the three-sentence summary that a single-call schema would have produced in one step, at fifteen times the latency and thirty times the cost. *Root cause:* "agent" became a destination instead of a substrate — a name to reach rather than a shape of problem. *Corrective:* the adaptation decision tree says one call first; an agent is earned only when the task branches.

**4. Routing to classical ML without a label budget.** A piece is routed to classical ML because the problem shape fits — it has features, it has an outcome — but nobody has asked how many labelled examples will be required, who will label them, at what rate, with what cost of disagreement. *Symptom:* a model that cannot be retrained because the original labelling pipeline is not reproducible; an inherited feature store the current team cannot explain; a quiet drift to "we will label this batch when we can". *Root cause:* the routing skipped the *can the labels be produced and maintained?* question entirely. *Corrective:* the routing justification must include a label budget in labeller-hours per month and an explicit disagreement-resolution policy. A classical ML route without those is not a route; it is a wish.

**5. Routing to retrieval-augmented generation when the knowledge base is not retrievable-quality.** A piece is routed to RAG because the team has a knowledge base, and RAG is the word for using a knowledge base with an LLM. *Symptom:* retrieval returns plausible fragments that cite decommissioned policies, pass current-looking text that contradicts the policy the organisation actually follows, and sometimes pull an internal memo that was never supposed to leave the author's team. *Root cause:* the corpus was written for human readers, not for chunk-based retrieval; it has inconsistent headings, buried cross-references, and stale sections alongside current ones. RAG presumes a retrievable corpus; the corpus was not one. *Corrective:* if the knowledge base is not retrievable-quality, route to *AI as assistant* with the knowledge base as a human-side reference, or invest in corpus reform before re-routing to RAG.

## 7.8 The routing map

The artefact G3 produces is a table. One row per piece. The columns are fixed: number, piece, outcome, level (if AI), controls sketch, justification.

For the freight example, the routing map reads:

| # | Piece | Outcome | Level (if AI) | Controls sketch | Justification |
|---|-------|---------|---------------|-------------------|---------------|
| 1 | Carrier ETA accuracy | AI as assistant | RAG over carrier-performance log | Drafts reviewed; send log; one-click operator override | Escalation is judgment-heavy; model surfaces candidates faster than the coordinator can scan |
| 2 | Yard scheduling (24h out) | Autonomous AI | Classical ML (gradient-boosted) | Weekly accuracy dashboard; rollback to rules at 80% of baseline; sunset at 60%; named owner | Decision reversible within 4 hours; published baseline; rollback substrate exists |
| 3 | Dock-door assignment | Non-AI automation | — | Daily queue-length report; monthly solver fitness review | Constraint problem; explicit objective; audit requires determinism |
| 4 | Late-arrival exception handling | Human-operated | — | Operator training; escalation template | Exception categories open-ended; cost of an automated wrong call exceeds cost of a human one |

Four rows, four outcomes, one justification per row, one controls sketch per row. The map is short because the issue tree is short; a more complex engagement would carry a longer one. The shape does not change.

The routing map is the input to G4 Sequence. G4 reads the map, draws the dependency graph across the routed pieces, and picks the order in which they are built. G5 Commit reads the map and names the owner for each piece, the rollback trigger, and the sunset criterion. G3 settles the *what*; G4 settles the *when*; G5 settles the *who*. Each gate trusts the previous gate's artefact. The map earns that trust by being specific. A row that reads *"mostly AI, to be determined per piece"* is not a row on a routing map; it is a declaration that G3 has not been run.

## 7.9 What G3 produces, and what it does not

G3 produces the routing map. It does not produce the build, the owner, or the implementation.

What the gate *does* settle is the question no later gate can reopen without cost: *what substrate carries this piece when the system is live?* A change to that answer after G4 or G5 is a loopback, and loopbacks from later gates are expensive. The method accepts G3→G2 loopbacks as cheap and expected (see Chapter 3); G4→G3 and G5→G3 loopbacks are neither.

The gate's conservatism is deliberate. A piece that could be *Autonomous AI* but arrives at G3 with a half-drawn controls design leaves the gate as *AI as assistant*. A piece that could be *AI as assistant* but arrives with an unclear label budget or a suspect corpus leaves as *Non-AI automation* or *Human-operated*. This is the gate under-reaching, on purpose. Over-reach is caught by the next engagement; under-reach is caught by the next refresh, and the cost difference between the two is the reason the method exists.

The next chapter, [Chapter 8](ch-8.md), picks up the routing map and runs it through G4 Sequence and G5 Commit.

## Sources

[1] Minto B. *The Pyramid Principle: Logic in Writing, Thinking and Problem Solving*. Pitman; 1987. **[verified]**

[2] Lewis P, Perez E, Piktus A, et al. Retrieval-Augmented Generation for Knowledge-Intensive NLP Tasks. In: *NeurIPS*; 2020. arXiv:2005.11401. **[verified]**

[3] ISO/IEC 42001:2023. *Information technology — Artificial intelligence — Management system*. International Organization for Standardization; 2023. **[verified]**

[4] NIST. *AI Risk Management Framework 1.0* (NIST AI 100-1). National Institute of Standards and Technology; 2023. **[verified]**

[5] Amershi S, Weld D, Vorvoreanu M, et al. Guidelines for Human-AI Interaction. In: *Proc. CHI 2019*. DOI:10.1145/3290605.3300233. **[verified]**

[6] Shneiderman B. *Human-Centered AI*. Oxford University Press; 2022. **[verified]**

[7] Raji ID, Smart A, White RN, et al. Closing the AI Accountability Gap: Defining an End-to-End Framework for Internal Algorithmic Auditing. In: *Proc. FAT\* 2020*. DOI:10.1145/3351095.3372873. **[verified]**

[8] Mitchell M, Wu S, Zaldivar A, et al. Model Cards for Model Reporting. In: *Proc. FAT\* 2019*. DOI:10.1145/3287560.3287596. **[verified]**

[9] Object Management Group. *Decision Model and Notation (DMN)*, version 1.4. OMG; 2022. **[verified]**

[10] Yao S, Zhao J, Yu D, et al. ReAct: Synergizing Reasoning and Acting in Language Models. In: *ICLR 2023*. arXiv:2210.03629. **[verified]**

[11] Schick T, Dwivedi-Yu J, Dessì R, et al. Toolformer: Language Models Can Teach Themselves to Use Tools. In: *NeurIPS 2023*. arXiv:2302.04761. **[verified]**

[12] Agrawal A, Gans J, Goldfarb A. A Simple Tool to Start Making Decisions with the Help of AI. *Harvard Business Review*; April 2018. **[verified]**

[13] Dorard L. *The Machine Learning Canvas: a template for developing and documenting ML systems*. OWNML; 2015–. **[secondary]**

[14] Snowden DJ, Boone ME. A Leader's Framework for Decision Making. *Harvard Business Review*; November 2007. **[verified]**

[15] Klein G. Performing a Project Premortem. *Harvard Business Review*; September 2007. **[verified]**

[16] Google People + AI Research. *People + AI Guidebook*. 2019–. Available at: pair.withgoogle.com/guidebook. **[verified]**

[17] Gebru T, Morgenstern J, Vecchione B, et al. Datasheets for Datasets. *Commun. ACM* 2021;64(12):86–92. (arXiv:1803.09010, 2018). **[verified]**

[18] Microsoft Research. *HAX Toolkit — Workbook*. Microsoft; 2021–. Available at: microsoft.com/en-us/haxtoolkit. **[verified]**
