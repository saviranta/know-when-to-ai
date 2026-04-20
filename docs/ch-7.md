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
  <text class="ch7r-label-q" x="400" y="232">Does a rule, script, or</text>
  <text class="ch7r-label-q" x="400" y="250">classical ML fit?</text>

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
  <text class="ch7r-label-q" x="400" y="332">Does an AI level clear</text>
  <text class="ch7r-label-q" x="400" y="350">the controls bar?</text>

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

*Illustration 7.1 — How a piece from G2 reaches one of four outcomes at G3. Three questions, four outcomes, one pass per piece. The controls burden is not zero at any outcome; it rises with machine autonomy.*

**Human-operated.** The piece stays with a person. No automation earns its place here — not because automation is forbidden, but because the positive case for it has not been made. The person's workflow may get AI support at *build* time (training material, lookup aids, onboarding tools) without any of that appearing in the runtime substrate. In freight, an experienced yard manager negotiating with a driver after two missed windows fits here: the exception handling is improvised, relational, and depends on accumulated knowledge that is hard to specify. The route reads: *Human-operated. Substrate: yard manager. No system built at this point. Controls: operator training and escalation template. Justification: exception categories are open-ended; cost of an automated wrong call exceeds the cost of a human one.*

**Non-AI automation.** The piece is carried by a rule, a script, or a classical machine-learning model — a fixed substrate with a simple audit trail. Classical ML is included here because a trained gradient-boosted tree or a logistic regression is fixed once deployed: the same input produces the same output, the feature set is explicit, and the audit path runs through the training notebook. In freight, dock-door assignment fits: it is a constrained-optimisation problem (door compatibility, current queue, cargo type) with well-defined inputs and a verifiable objective. The route reads: *Non-AI automation. Substrate: constraint solver against the door-compatibility matrix. Controls: daily queue-length report, monthly solver fitness review. Justification: deterministic reproducibility is required for audit, and the problem fits a classical solver.*

**AI as assistant.** An AI level fits the piece, but no level clears the controls bar for machine-held responsibility. A human holds the decision; the AI supports with retrieval, drafts, summaries, or option generation. In freight, carrier-ETA exception triage fits here: a model surfaces the three late trailers whose risk profiles most resemble next week's likely bottleneck and drafts an outreach message for each, but the yard coordinator reads, adjusts, and sends. The route reads: *AI as assistant. Substrate: LLM with retrieval against the carrier-performance log. Controls: drafts always reviewed, send log, operator override one click away. Justification: the escalation decision is judgment-heavy, but model-suggested options reduce time-to-outreach measurably.*

**Autonomous AI.** An AI level fits the piece *and* clears the controls bar. Audit trail, rollback trigger, human review cadence, sunset criteria — all drawn up, all plausibly operable, all owned. The machine makes the call. In freight, yard-slot allocation twenty-four hours out is a candidate: a model predicts trailer volume per hour and reserves slots without a human in the loop, a named owner watches weekly accuracy, every allocation is logged with its features, allocations older than four hours can be swapped manually, and the system sunsets if accuracy drops below the published carrier baseline for two consecutive weeks. The route reads: *Autonomous AI. Substrate: gradient-boosted predictor with a thin LLM carrier-communication layer. Controls: weekly accuracy dashboard, override log, rollback to rules at eighty per cent of baseline, sunset at sixty per cent. Justification: decision is reversible within four hours, baseline is published, rollback substrate exists, owner is named.*

Two quiet rules on the four outcomes. The first: **every outcome carries a controls burden**, including the non-AI outcomes. Human-operated needs training and an escalation path. Non-AI automation needs a fitness review and an explicit audit trail. Assistant and autonomous need progressively more. The burden is not zero anywhere, and it rises with machine autonomy. The second: **when in doubt, drop a column**. A piece whose case for *Autonomous AI* is half-drawn gets routed to *AI as assistant* until the case is whole; a piece whose case for *AI as assistant* is half-drawn gets routed to *Non-AI automation* or *Human-operated*. Conservative routing is the intended failure mode of the gate.

## 7.4 The controls bar

The controls bar is the line between *AI as assistant* and *Autonomous AI*. It is the single most consequential decision inside the method.

To clear the bar, a proposed AI route must answer four questions with concrete artefacts, not intentions:

**Audit.** Is every decision logged with its inputs, its features, and its chosen output? Can a specific decision, two months from now, be reconstructed from the logs well enough to explain it to the operator, the auditor, or the person the decision was made about?

**Rollback.** What substrate takes over if the AI substrate fails or drifts? Is it the previous human workflow, a rule set, a classical model? Can the rollback be triggered within the blast radius of one bad decision — that is, before a wrong call has become a wrong cohort?

**Review.** At what cadence, and by whom, is the system's calibration checked? The cadence must be short enough that drift is detected before it has produced a meaningful cohort of wrong outputs. Weekly is common; daily is needed where the decision has short consequence-time; monthly is suspicious on its own.

**Sunset.** What metric, at what absolute threshold, shuts the system down? The threshold is absolute, not relative to the system's own performance history. A system that grades itself against its own last quarter can drift indefinitely.

Each of these is drawn from the controls discipline outlined at Ch 3 §3.5 and detailed in [Chapter 10](ch-10.md)'s overlays. At G3, they are not yet *built*; they are *drawn*. A credible sketch on a named owner's desk is the condition for an *Autonomous AI* route. The build comes at G4 Sequence and lives at G5 Commit.

Two things the bar is not. It is not a score, and it is not a promise. It does not convert controls-quality into a number and threshold against it; and it does not require that the controls are already in place on day one. It requires that the controls are plausibly buildable by the team that will own them, and that the team has written them down with enough specificity that a sceptical reader can tell whether they were built when the next review comes around.

## 7.5 The AI capability atlas — choosing a level within the AI column

Once a piece is routed to *AI as assistant* or *Autonomous AI*, a second decision follows: *which AI level?* The AI capability atlas names seven levels, ordered from simplest to most capable (and from smallest to largest surface area). See Illustration 7.2.

<div style="max-width: 900px; margin: 2rem auto;">
<svg viewBox="0 0 800 340" xmlns="http://www.w3.org/2000/svg" role="img" aria-labelledby="ch7a-title">
  <title id="ch7a-title">The AI capability atlas</title>

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
    .ch7a-column-label { font: 600 10px -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif; letter-spacing: 0.15em; fill: var(--md-default-fg-color, #000); text-anchor: middle; text-transform: uppercase; opacity: 0.55; }
  </style>

  <text class="ch7a-band" x="400" y="18">The AI capability atlas &mdash; seven levels, simpler to more capable</text>

  <text class="ch7a-column-label" x="135" y="44">Non-AI column</text>
  <text class="ch7a-column-label" x="520" y="44">AI column</text>

  <line class="ch7a-divider" x1="213" y1="54" x2="213" y2="230" />

  <rect class="ch7a-rect ch7a-rect-1" x="20" y="60" width="90" height="70" rx="3" />
  <text class="ch7a-label" x="65" y="92">Rule</text>
  <text class="ch7a-sub" x="65" y="112">if/then,</text>
  <text class="ch7a-sub" x="65" y="124">lookup</text>

  <rect class="ch7a-rect ch7a-rect-2" x="116" y="60" width="90" height="70" rx="3" />
  <text class="ch7a-label" x="161" y="88">Classical</text>
  <text class="ch7a-label" x="161" y="102">ML</text>
  <text class="ch7a-sub" x="161" y="120">GBT, LR,</text>
  <text class="ch7a-sub" x="161" y="131">SVM</text>

  <rect class="ch7a-rect ch7a-rect-3" x="220" y="60" width="90" height="70" rx="3" />
  <text class="ch7a-label" x="265" y="92">LLM</text>
  <text class="ch7a-sub" x="265" y="112">single call,</text>
  <text class="ch7a-sub" x="265" y="124">no tools</text>

  <rect class="ch7a-rect ch7a-rect-4" x="316" y="60" width="90" height="70" rx="3" />
  <text class="ch7a-label" x="361" y="92">RAG</text>
  <text class="ch7a-sub" x="361" y="112">LLM +</text>
  <text class="ch7a-sub" x="361" y="124">retriever</text>

  <rect class="ch7a-rect ch7a-rect-5" x="412" y="60" width="90" height="70" rx="3" />
  <text class="ch7a-label" x="457" y="88">Single</text>
  <text class="ch7a-label" x="457" y="102">agent</text>
  <text class="ch7a-sub" x="457" y="120">one task,</text>
  <text class="ch7a-sub" x="457" y="131">few steps</text>

  <rect class="ch7a-rect ch7a-rect-6" x="508" y="60" width="90" height="70" rx="3" />
  <text class="ch7a-label" x="553" y="88">Tool-using</text>
  <text class="ch7a-label" x="553" y="102">agent</text>
  <text class="ch7a-sub" x="553" y="120">many tools,</text>
  <text class="ch7a-sub" x="553" y="131">branching</text>

  <rect class="ch7a-rect ch7a-rect-7" x="604" y="60" width="90" height="70" rx="3" />
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

  <text class="ch7a-band" x="400" y="258">Three heuristics for climbing the atlas</text>

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

*Illustration 7.2 — The AI capability atlas. Seven levels from rule to multi-agent, ordered left-to-right by increasing capability and surface area. Stroke-weight carries the climb: a thicker border encodes larger operational surface, not more goodness. The Non-AI/AI column break sits between classical ML and the LLM.*

**Rule.** A deterministic if/then or lookup. Included at the edge of the atlas because the AI column borders it; many pieces that look like AI candidates resolve to rules once their decision surface is drawn.

**Classical machine learning.** Gradient-boosted trees, logistic regression, random forests, support-vector machines. Fixed after training; explicit feature set; audit path runs through the training notebook. Claimable where the label set is stable and the features are explainable to a non-specialist.

**LLM feature.** A single call to a large language model, prompt-engineered, no retrieval, no tools. Used where the work is language-shaped — summarisation, classification, drafting — and the context fits in the prompt window.

**Retrieval-augmented generation.** An LLM with a retriever over a knowledge base [2]. Used where the LLM needs grounding in a specific, refreshable corpus. Requires the knowledge base to be retrievable-quality: chunked sensibly, kept current, indexed against the questions actually asked.

**Single agent.** An LLM with tools, planning a single task over multiple steps. Used where the work requires a short sequence of decisions — *check this; if X, do this; if Y, do that* — and the branching factor is bounded.

**Tool-using agent.** An LLM with an extended toolset, planning longer or more branchy task trajectories. The step from single agent to tool-using agent is a step in cost and in surface area; it buys capability and sells predictability.

**Multi-agent system.** A coordinator and specialised workers, often with their own tool access. The step from tool-using agent to multi-agent is the last step on the atlas and the costliest; published figures suggest per-task cost at roughly ten to twenty times a single LLM call (see Ch 3 §3.5, Ch 10's total-cost-of-ownership overlay).

Three heuristics govern the choice of level.

**Prefer the simpler level.** The atlas climbs from rule to multi-agent in order of surface area — more code, more failure modes, more cost per call, more places to audit. Climbing must be earned. A route to a multi-agent system needs a case the tool-using-agent level cannot carry.

**Retrieve before you fine-tune; fine-tune before you agent.** The adaptation decision tree — Ch 10's overlay — runs prompt → retrieval → fine-tune → agent, with stop rules at each step. Most teams reach for agents three steps too early.

**Agent only for branching.** A single LLM call that returns structured output is not an agent. If the task can be done by one call with one schema, it does not need a planner. The planner pays its cost in trajectory variance; the task must justify that cost.

## 7.6 Five routing errors

The most common routing errors are variants of the same mistake: choosing an AI level before the routing is clear, or choosing a level without its enabling conditions in place. Each of the five below has a characteristic symptom, a root cause, and a corrective. They are not the only errors the gate can make. They are the five that most frequently get caught at the next engagement rather than at this one, because each looks defensible until its specific enabling condition is examined.

**1. Promoting a rule-based piece to an LLM because LLMs are newer.** A dock-door assignment problem that resolves cleanly to a constraint solver gets re-routed to an LLM because the team has an LLM budget and the solver is ten years old. *Symptom:* intermittent unreasonable assignments that a rule would never make — one trailer sent to a door whose cargo type it does not handle, another to a door whose queue is already saturated. *Root cause:* the piece was routed by the substrate the team wanted to use, not by the substrate the work required. *Corrective:* if a rule fits and the rule is auditable, the rule wins. The fact that the rule is old is not a defect; it is a feature.

**2. Demoting a judgment piece to a classifier because the classifier performs well on training data.** An exception-triage task that depends on accumulated operator judgment gets re-routed to a classifier because the F1 score on last year's data looks good. *Symptom:* ninety-four per cent accuracy in the training distribution, a month of escalating complaints from operators, a quiet reversion to the old workflow. *Root cause:* the labels the classifier was trained on were proxies — the outcome the operator happened to pick, not the judgment the operator was making — and the proxies held until they did not. *Corrective:* classifiers for well-bounded label sets; assistants for judgment; humans for contested judgment. If the label set is contested, the route is not a classifier.

**3. Reaching for an agent when a single function call would do.** A summarisation task with one input, one output, and a fixed schema gets routed to a tool-using agent because the team has read about agents. *Symptom:* a twelve-step trajectory producing the three-sentence summary that a single-call schema would have produced in one step, at fifteen times the latency and thirty times the cost. *Root cause:* "agent" became a destination instead of a substrate — a name to reach rather than a shape of problem. *Corrective:* the adaptation decision tree says one call first; an agent is earned only when the task branches.

**4. Routing to classical ML without a label budget.** A piece is routed to classical ML because the problem shape fits — it has features, it has an outcome — but nobody has asked how many labelled examples will be required, who will label them, at what rate, with what cost of disagreement. *Symptom:* a model that cannot be retrained because the original labelling pipeline is not reproducible; an inherited feature store the current team cannot explain; a quiet drift to "we will label this batch when we can". *Root cause:* the routing skipped the *can the labels be produced and maintained?* question entirely. *Corrective:* the routing justification must include a label budget in labeller-hours per month and an explicit disagreement-resolution policy. A classical ML route without those is not a route; it is a wish.

**5. Routing to retrieval-augmented generation when the knowledge base is not retrievable-quality.** A piece is routed to RAG because the team has a knowledge base, and RAG is the word for using a knowledge base with an LLM. *Symptom:* retrieval returns plausible fragments that cite decommissioned policies, pass current-looking text that contradicts the policy the organisation actually follows, and sometimes pull an internal memo that was never supposed to leave the author's team. *Root cause:* the corpus was written for human readers, not for chunk-based retrieval; it has inconsistent headings, buried cross-references, and stale sections alongside current ones. RAG presumes a retrievable corpus; the corpus was not one. *Corrective:* if the knowledge base is not retrievable-quality, route to *AI as assistant* with the knowledge base as a human-side reference, or invest in corpus reform before re-routing to RAG.

## 7.7 The routing map

The artefact G3 produces is a table. One row per piece. The columns are fixed: number, piece, outcome, level (if AI), controls sketch, justification.

For the freight example, the routing map reads:

| # | Piece | Outcome | Level (if AI) | Controls sketch | Justification |
|---|-------|---------|---------------|-----------------|---------------|
| 1 | Carrier ETA accuracy | AI as assistant | RAG over carrier-performance log | Drafts reviewed; send log; one-click operator override | Escalation is judgment-heavy; model surfaces candidates faster than the coordinator can scan |
| 2 | Yard scheduling (24h out) | Autonomous AI | Classical ML (gradient-boosted) | Weekly accuracy dashboard; rollback to rules at 80% of baseline; sunset at 60%; named owner | Decision reversible within 4 hours; published baseline; rollback substrate exists |
| 3 | Dock-door assignment | Non-AI automation | — | Daily queue-length report; monthly solver fitness review | Constraint problem; explicit objective; audit requires determinism |
| 4 | Late-arrival exception handling | Human-operated | — | Operator training; escalation template | Exception categories open-ended; cost of an automated wrong call exceeds cost of a human one |

Four rows, four outcomes, one justification per row, one controls sketch per row. The map is short because the issue tree is short; a more complex engagement would carry a longer one. The shape does not change.

The routing map is the input to G4 Sequence. G4 reads the map, draws the dependency graph across the routed pieces, and picks the order in which they are built. G5 Commit reads the map and names the owner for each piece, the rollback trigger, and the sunset criterion. G3 settles the *what*; G4 settles the *when*; G5 settles the *who*. Each gate trusts the previous gate's artefact. The map earns that trust by being specific. A row that reads *"mostly AI, to be determined per piece"* is not a row on a routing map; it is a declaration that G3 has not been run.

## 7.8 What G3 produces, and what it does not

G3 produces the routing map. It does not produce the build, the owner, or the implementation.

What the gate *does* settle is the question no later gate can reopen without cost: *what substrate carries this piece when the system is live?* A change to that answer after G4 or G5 is a loopback, and loopbacks from later gates are expensive. The method accepts G3→G2 loopbacks as cheap and expected (see Ch 3 §3.3); G4→G3 and G5→G3 loopbacks are neither.

The gate's conservatism is deliberate. A piece that could be *Autonomous AI* but arrives at G3 with a half-drawn controls design leaves the gate as *AI as assistant*. A piece that could be *AI as assistant* but arrives with an unclear label budget or a suspect corpus leaves as *Non-AI automation* or *Human-operated*. This is the gate under-reaching, on purpose. Over-reach is caught by the next engagement; under-reach is caught by the next refresh, and the cost difference between the two is the reason the method exists.

The next chapter, [Chapter 8](ch-8.md), picks up the routing map and runs it through G4 Sequence and G5 Commit.

## Sources

[1] Minto B. *The Pyramid Principle: Logic in Writing, Thinking and Problem Solving*. Pitman; 1987. **[verified]**

[2] Lewis P, Perez E, Piktus A, et al. Retrieval-Augmented Generation for Knowledge-Intensive NLP Tasks. In: *NeurIPS*; 2020. arXiv:2005.11401. **[verified]**
