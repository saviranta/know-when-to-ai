# Chapter 8 — G4 Sequence

G4 is the fourth Tier-1 gate. It reads the piece list from G2 and the routing map from G3, and closes when a defensible running order exists: which piece runs first, which piece runs last, which pieces can run in parallel, and which depend on which. The artefact is a **dependency order** — a numbered sequence with reversibility and blast-radius notes attached to each step. The gate is done when the order is defended against three failure modes: running an irreversible piece ahead of a step that could have disconfirmed it, running a high-blast-radius piece without a staged rollout substrate, and running dependent pieces in an order that forces rework of the earlier one.

Most engagements sequence badly not because the team cannot draw a Gantt chart, but because the Gantt chart is the wrong artefact. A calendar shows *when* things start. G4 asks *what has to be true* before a piece starts, and *what breaks* if the piece fails. Those are two different questions, and only the second one protects the engagement.

This chapter runs G4 on the freight-yard example from [Chapter 7](ch-7.md) — four routed pieces across the four G3 outcomes — and produces a dependency order for them. Illustration 8.1 gives the gate's generic anatomy. Illustration 8.2 at the end instantiates it on freight.

<div style="max-width: 880px; margin: 2rem auto;">
<svg viewBox="0 0 800 460" xmlns="http://www.w3.org/2000/svg" role="img" aria-labelledby="ch8-ill81-title">
  <title id="ch8-ill81-title">G4 Sequence — generic anatomy</title>

  <style>
    .ch8s-node { fill: var(--md-default-bg-color, #fff); stroke: var(--md-default-fg-color, #000); stroke-width: 1.5; }
    .ch8s-node-top { fill: var(--md-default-bg-color, #fff); stroke: var(--md-default-fg-color, #000); stroke-width: 2.5; }
    .ch8s-node-dashed { fill: var(--md-default-bg-color, #fff); stroke: var(--md-default-fg-color, #000); stroke-width: 1.5; stroke-dasharray: 4 3; }
    .ch8s-label { font: 700 11px -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif; fill: var(--md-default-fg-color, #000); text-anchor: middle; }
    .ch8s-sub { font: italic 9px -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif; fill: var(--md-default-fg-color, #000); text-anchor: middle; opacity: 0.8; }
    .ch8s-tag { font: 500 9px -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif; letter-spacing: 0.08em; text-transform: uppercase; fill: var(--md-default-fg-color, #000); text-anchor: middle; opacity: 0.7; }
    .ch8s-arrow { stroke: var(--md-default-fg-color, #000); stroke-width: 1.5; fill: none; }
    .ch8s-head { fill: var(--md-default-fg-color, #000); }
    .ch8s-band { font: 500 10px -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif; letter-spacing: 0.18em; text-transform: uppercase; fill: var(--md-default-fg-color, #000); text-anchor: middle; opacity: 0.6; }
  </style>

  <text class="ch8s-band" x="400" y="22">G4 Sequence &mdash; generic anatomy</text>

  <rect class="ch8s-node-top" x="270" y="40" width="260" height="60" rx="4" />
  <text class="ch8s-label" x="400" y="65">Routing map (from G3)</text>
  <text class="ch8s-sub" x="400" y="82">Each piece: substrate, controls sketch,</text>
  <text class="ch8s-sub" x="400" y="94">justification.</text>

  <line class="ch8s-arrow" x1="400" y1="100" x2="400" y2="125" />

  <rect class="ch8s-node-dashed" x="100" y="125" width="600" height="42" rx="4" />
  <text class="ch8s-tag" x="400" y="142">Apply three lenses</text>
  <text class="ch8s-sub" x="400" y="158">Dependency graph &mdash; reversibility class &mdash; blast radius</text>

  <line class="ch8s-arrow" x1="400" y1="167" x2="400" y2="195" />
  <line class="ch8s-arrow" x1="160" y1="195" x2="640" y2="195" />

  <line class="ch8s-arrow" x1="160" y1="195" x2="160" y2="228" />
  <polygon class="ch8s-head" points="155,223 165,223 160,233" />
  <line class="ch8s-arrow" x1="320" y1="195" x2="320" y2="228" />
  <polygon class="ch8s-head" points="315,223 325,223 320,233" />
  <line class="ch8s-arrow" x1="480" y1="195" x2="480" y2="228" />
  <polygon class="ch8s-head" points="475,223 485,223 480,233" />
  <line class="ch8s-arrow" x1="640" y1="195" x2="640" y2="228" />
  <polygon class="ch8s-head" points="635,223 645,223 640,233" />

  <rect class="ch8s-node" x="85" y="233" width="150" height="95" rx="4" />
  <text class="ch8s-tag" x="160" y="252">Step 1</text>
  <text class="ch8s-label" x="160" y="275">Reversible &amp;</text>
  <text class="ch8s-label" x="160" y="289">contained</text>
  <text class="ch8s-sub" x="160" y="307">Ships first.</text>
  <text class="ch8s-sub" x="160" y="319">Feeds downstream steps.</text>

  <rect class="ch8s-node" x="245" y="233" width="150" height="95" rx="4" />
  <text class="ch8s-tag" x="320" y="252">Step 2</text>
  <text class="ch8s-label" x="320" y="275">Reversible,</text>
  <text class="ch8s-label" x="320" y="289">wider blast</text>
  <text class="ch8s-sub" x="320" y="307">Behind a small</text>
  <text class="ch8s-sub" x="320" y="319">canary cohort.</text>

  <rect class="ch8s-node" x="405" y="233" width="150" height="95" rx="4" />
  <text class="ch8s-tag" x="480" y="252">Step 3</text>
  <text class="ch8s-label" x="480" y="275">Irreversible,</text>
  <text class="ch8s-label" x="480" y="289">contained</text>
  <text class="ch8s-sub" x="480" y="307">Behind a shadow</text>
  <text class="ch8s-sub" x="480" y="319">mode first.</text>

  <rect class="ch8s-node" x="565" y="233" width="150" height="95" rx="4" />
  <text class="ch8s-tag" x="640" y="252">Step 4</text>
  <text class="ch8s-label" x="640" y="275">Irreversible &amp;</text>
  <text class="ch8s-label" x="640" y="289">high blast</text>
  <text class="ch8s-sub" x="640" y="307">Shadow &rarr; canary</text>
  <text class="ch8s-sub" x="640" y="319">&rarr; progressive.</text>

  <line class="ch8s-arrow" x1="160" y1="328" x2="160" y2="375" />
  <polygon class="ch8s-head" points="155,370 165,370 160,380" />
  <line class="ch8s-arrow" x1="320" y1="328" x2="320" y2="375" />
  <polygon class="ch8s-head" points="315,370 325,370 320,380" />
  <line class="ch8s-arrow" x1="480" y1="328" x2="480" y2="375" />
  <polygon class="ch8s-head" points="475,370 485,370 480,380" />
  <line class="ch8s-arrow" x1="640" y1="328" x2="640" y2="375" />
  <polygon class="ch8s-head" points="635,370 645,370 640,380" />

  <rect class="ch8s-node-top" x="30" y="380" width="740" height="55" rx="4" />
  <text class="ch8s-label" x="400" y="405">Dependency order &mdash; forward to G5</text>
  <text class="ch8s-sub" x="400" y="423">Numbered sequence with reversibility and blast-radius tags per step.</text>

  <text class="ch8s-band" x="400" y="452">The rule: irreversible and high-blast goes last, behind a rollout substrate.</text>
</svg>
</div>

*Illustration 8.1 — G4 Sequence, generic anatomy. The gate reads the routing map, applies three lenses — dependencies, reversibility class, blast radius — and produces a numbered order. Steps with higher consequence sit later in the order, behind a rollout substrate that would catch them before they catch the organisation.*

## 8.1 What sequencing is for

Sequencing turns a routing map into an *ordered* routing map. That is its only job.

A routing map without an order says: *these four pieces exist, these are their substrates, these are their controls*. A dependency order adds: *this one runs first because nothing depends on it being right; this one runs last because its blast radius is larger than we can survive if we run it first*. The second claim is what the gate owes the engagement. Without it, the order becomes whichever piece the loudest stakeholder wants fastest, which is almost always the wrong one.

Three questions sit under the order. *What has to be true before this piece runs?* — the dependency question. *What does it cost to undo this piece once it runs?* — the reversibility question. *What does it affect when it fails?* — the blast-radius question. A piece can be answered on all three without reference to the others, and each answer informs a different sequencing move. The three together bound the order.

G4 does not choose the pieces and does not choose their substrates; G2 and G3 did. G4 also does not commit resources or name an owner; G5 will. The gate in the middle does one thing: it says *in what order, given what breaks*.

The freight-yard example from [Chapter 7](ch-7.md) brings four pieces to G4. The yard manager's exception workflow with its escalation template — routed to *Human-operated*. The dock-door assignment as a constraint solver — routed to *Non-AI automation*. The carrier-ETA exception triage as an LLM with retrieval — routed to *AI as assistant*. The yard-slot allocation twenty-four hours out as a gradient-boosted predictor with a thin LLM layer — routed to *Autonomous AI*. Four routes, four substrates, four controls sketches. G4's task is to put them in an order that survives the first time one of them misbehaves.

## 8.2 The three lenses

**Dependency graph.** What must exist before each piece can run. Pieces have data dependencies (the yard-slot allocator needs a month of trailer-volume history), pipeline dependencies (the carrier-ETA triage needs the carrier-performance log to be refreshed daily), and substrate dependencies (a piece routed to *AI as assistant* needs a drafting surface and a review queue before it can take a shift). Draw the graph once. A dependency that crosses from one piece to another is a constraint on the order; a dependency that sits inside a piece is a precondition the piece owner manages, not a sequencing concern.

The graph is directed. If piece B needs piece A's output to exist, A runs before B. If two pieces can be run independently and neither feeds the other, they can be parallel. If two pieces *claim* to be independent but share a data pipeline or a shared operator workflow, the graph will surface the hidden coupling; running them in parallel without fixing the coupling is how one piece's deployment corrupts the other's.

The classical frames here are PERT [1] and the Critical Path Method [2], both from 1957–1958 — the Polaris programme and DuPont, respectively. The specific dependency-and-slack technology is older than the software industry and is still the right vocabulary: a *path* through the graph is an ordered sequence; the *critical path* is the longest path, and its length bounds how fast the engagement can run at all.

**Reversibility class.** The cost to undo a piece once it has run. Jeff Bezos's *two-way doors* formulation, from the 2015 Amazon shareholder letter [3], is the operational vocabulary most teams reach for: a two-way door is a decision that can be walked back cheaply; a one-way door cannot. The distinction is a heuristic, not a taxonomy — most pieces sit somewhere between — but the shape is correct. A rule change to the dock-door solver is a two-way door: the rule is edited, the solver is rerun, the decisions propagate forward, and the cost of reversal is measured in hours. A change to the yard-slot allocator's policy that has already been applied to twenty-four hours of future schedule is a one-and-a-half-way door: the schedule can be manually swapped, but the carriers have already been notified and the drivers have already dispatched; reversal is expensive and visible.

A sharper frame, for pieces where the heuristic is not enough, classifies reversibility by *time to restore prior state* and *cost in that window*. A piece is **fully reversible** if prior state can be restored in minutes, at no external cost. A piece is **soft-irreversible** if restoration takes hours to days and the costs are internal — training to redo, a week of data to re-score. A piece is **hard-irreversible** if the cost lands outside the organisation — a carrier has been told, a regulator has been filed with, a user has been billed — and the counterparty cannot be un-notified. The sequencing consequence of a hard-irreversible piece is that it never runs first. Never without a shadow substrate running for long enough to have detected the failure mode that would have forced the reversal.

**Blast radius.** The extent of what a piece affects when it fails. Google's Site Reliability Engineering practice formalised the term [4]; the idea is older, from aerospace and nuclear engineering, but the SRE vocabulary is the one that has travelled. Estimate three facets: the *population* affected (a yard, a region, the whole carrier network), the *time* over which the harm accumulates (seconds of bad routing versus weeks of bad carrier contracts), and the *irreversibility of the harm inside the blast* (a bad dock-door call is recoverable; a contract renegotiated on bad data is not).

A piece with a small blast radius can be learned from cheaply: run it, watch for the failure mode, catch it early, reverse. A piece with a large blast radius cannot; the failure mode, when it fires, has already reached too far. Blast radius is what the rollout pattern is *for*. A shadow-mode stage catches failures before the blast begins. A canary cohort keeps the blast inside a small subset. A progressive rollout expands the cohort only after the blast stays contained. Without blast radius as a lens, rollout patterns get applied everywhere or nowhere, and both are wrong.

## 8.3 The sequencing rule

The three lenses compose into one rule: **irreversible and high-blast goes last, behind a rollout substrate that would have caught its failure mode in a smaller cohort.**

The rule's three parts each correspond to one of the lenses. *Last* pays the dependency lens: if a later piece depends on something the earlier piece produces, the later piece cannot reorder in front of it. *Behind a rollout substrate* pays the reversibility lens: the piece's own irreversibility is fenced by a prior reversible stage in which the failure would have surfaced. *That would have caught its failure mode* pays the blast radius: the rollout stage's cohort is big enough to exercise the failure mode, small enough that the mode's firing does not propagate.

Two corollaries follow. First, **a piece with low reversibility but no plausible rollout substrate does not run**. It is handed back to G3 for re-routing. If there is no shadow environment where an autonomous yard-slot allocator's failures would be visible, the piece cannot be routed to *Autonomous AI* under any order; G4 has discovered a G3 error and sends it back. Second, **a piece runs earlier if running it teaches the organisation something it needs to know before a later piece**. Shadow-deploying the carrier-ETA triage teaches how well retrieval against the carrier-performance log generalises — information that the yard-slot allocator's controls design depends on, because both systems share the log. Running the triage first is not just sequencing convenience; it is a learning sequence.

The rule is not a calendar. A calendar says *piece A ships in week 3, piece B ships in week 5*. The rule says *piece A ships first; piece B ships only after piece A has produced two weeks of clean logs and one worked incident*. The second is a precondition that the calendar interprets, not replaces.

## 8.4 Tools at G4

Four tools carry most of G4. Use them in the order the gate needs them.

??? note "Dependency graph (PERT / CPM)"
    Directed graph of preconditions across all routed pieces [1] [2]. Nodes are pieces or preconditions; edges run from precondition to dependent. Best for surfacing hidden coupling — two pieces that share a data pipeline or an operator workflow look independent until the graph is drawn. Weakest when the graph becomes a planning artefact in its own right; the graph is a sequencing input, not a Gantt chart.

    *Toolkit entry: [Dependency graph (PERT/CPM)](tool-dependency-graph.md).*

??? note "Reversibility classes"
    A three-class taxonomy — fully reversible, soft-irreversible, hard-irreversible — tagged per piece, with the time-to-restore and cost-in-window noted next to the tag [3]. Best as a lightweight artefact on the routing map; the tag is what the sequencing rule acts on. Weakest when forced onto pieces that sit genuinely between classes; in those cases, name the specific threshold that would push the piece from one class to the next, rather than picking a class.

    *Toolkit entry: [Reversibility classes](tool-reversibility-classes.md).*

??? note "Blast-radius estimation"
    Estimate, per piece: the population affected by a failure, the time over which harm accumulates, and whether the harm inside the blast is recoverable [4]. Best as a paragraph, not a number; the three facets matter more than a single score. Weakest when used to compare pieces across different populations — a small blast inside a regulated function can be worse than a large blast inside an advertising feature.

    *Toolkit entry: [Blast-radius estimation](tool-blast-radius-estimation.md).*

??? note "Three-stage rollout pattern"
    Shadow → canary → progressive [5]. Shadow runs the piece on live inputs without actioning its outputs; canary actions its outputs on a small pre-agreed cohort; progressive expands the cohort on pre-declared gate metrics. Best as the rollout substrate for any hard-irreversible or high-blast piece; the substrate is what makes the sequencing rule buyable. Weakest when compressed — a shadow stage of three days teaches less than one of three weeks, and compressing the stages to fit a calendar defeats the rollout's purpose.

    *Toolkit entry: [Three-stage rollout](tool-three-stage-rollout.md).*

None of the four replace the gatekeeper's judgement. Each makes a specific property of a piece assessable; together they let the order be defended on grounds the next engagement can re-examine. An order whose justifications cite the tools — *"piece 4 runs last because hard-irreversible under the reversibility classes and large population under blast-radius estimation; its rollout is the three-stage pattern with a two-week shadow"* — is an order a future reviewer can challenge on its own terms. An order whose justification reads *"team consensus"* is not.

## 8.5 Common failures

Five failures cost the gate more than any others.

**The largest piece first.** *The yard-slot allocator is the biggest win, so ship it first.* It is also the piece with the largest blast radius and the least-reversible rollback. Shipping the biggest win first is a shareholder-letter sentence, not a sequencing one; it inverts the rule. The sequencing counterargument is one sentence long: *the largest piece is the one we can least afford to deploy without having learned from something smaller first.*

**Hidden coupling through a shared pipeline.** Two pieces routed independently at G3 share a data pipeline — a carrier log, a pricing feed, a shipment schedule. Running them in parallel deploys the pipeline twice, under two controls regimes, and one deployment corrupts the other's assumptions. The dependency graph catches this when it is drawn. The graph needs to be drawn.

**Running irreversible ahead of its disconfirmer.** A piece with low reversibility runs before a smaller, reversible piece whose failure would have revealed the same underlying flaw. The order forecloses the disconfirmation. The remedy is to sequence by *what the earlier piece teaches*, not by *which piece is highest priority*.

**Rollout as a separate phase.** The team ships the piece, then talks about rollout afterwards. By then the piece is already in production and the shadow substrate has been rebadged as *monitoring*. Rollout is a sequencing constraint, not a later phase; a piece whose rollout substrate is not specified before it ships has not cleared G4.

**Gantt-chart fatalism.** The order becomes whatever calendar the project management office can defend to the steering committee. Dates harden, dependencies stay implicit, and sequencing errors surface during rollback instead of during planning. The remedy is to keep the dependency order as the artefact and treat the calendar as a derivative of it — *dates follow the order, the order does not follow the dates*.

## 8.6 The freight example, worked

The freight yard arrives at G4 with four routed pieces. Against the three lenses, each piece separates cleanly.

*Yard manager's escalation workflow.* Fully reversible (retrain, adjust the template). Small blast radius (one yard, operator's own workflow). No upstream dependency — the template can be written from the situation statement alone. Ships first. Teaches the team the vocabulary of escalation categories that both AI-routed pieces will need to label.

*Dock-door assignment as a constraint solver.* Fully reversible (edit the compatibility matrix, rerun). Small blast radius (one yard, contained to door scheduling). Depends on the door-compatibility matrix being complete and verified — a data precondition the piece owner handles. Ships second. Teaches the organisation what *deterministic substrate* means in operational terms; the monthly solver-fitness review is the first controls artefact the method produces under this engagement.

*Carrier-ETA exception triage as an LLM with retrieval.* Soft-irreversible (drafts presented to the operator are reviewed; outgoing communications, once sent, cannot be un-sent, but are bounded to a small cohort per shift). Contained blast radius (the operator is the reviewer of record; wrong drafts cost a re-draft, not a miscommunication). Depends on the carrier-performance log being at retrievable quality. Ships third, behind a four-week shadow stage: drafts are generated but not shown, the operator continues to compose from scratch, and the team compares draft quality against sent messages. Expands to the operator's view when the shadow metrics clear the pre-declared threshold.

*Yard-slot allocation as a gradient-boosted predictor with a thin LLM carrier-communication layer.* Hard-irreversible inside the twenty-four-hour window (carriers notified, drivers dispatched). Large blast radius (the full carrier network for the regions the yard covers). Depends on the trailer-volume baseline being published — the sunset criterion the controls sketch anchors on — and on the carrier-communication layer having been exercised through the triage piece. Ships last, behind the three-stage rollout: an eight-week shadow, a two-week canary on one region with manual override available at every call, and a progressive expansion by region on pre-declared accuracy thresholds.

The dependency order is *escalation workflow → dock-door solver → carrier-ETA triage → yard-slot allocator*, with explicit controls tags on each step. See Illustration 8.2.

<div style="max-width: 880px; margin: 2rem auto;">
<svg viewBox="0 0 800 440" xmlns="http://www.w3.org/2000/svg" role="img" aria-labelledby="ch8-ill82-title">
  <title id="ch8-ill82-title">G4 Sequence — freight yard, worked example</title>

  <style>
    .ch8f-node { fill: var(--md-default-bg-color, #fff); stroke: var(--md-default-fg-color, #000); stroke-width: 1.5; }
    .ch8f-node-top { fill: var(--md-default-bg-color, #fff); stroke: var(--md-default-fg-color, #000); stroke-width: 2.5; }
    .ch8f-node-heavy { fill: var(--md-default-bg-color, #fff); stroke: var(--md-default-fg-color, #000); stroke-width: 3; }
    .ch8f-label { font: 700 11px -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif; fill: var(--md-default-fg-color, #000); text-anchor: middle; }
    .ch8f-sub { font: italic 9px -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif; fill: var(--md-default-fg-color, #000); text-anchor: middle; opacity: 0.85; }
    .ch8f-tag { font: 500 9px -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif; letter-spacing: 0.08em; text-transform: uppercase; fill: var(--md-default-fg-color, #000); text-anchor: middle; opacity: 0.7; }
    .ch8f-arrow { stroke: var(--md-default-fg-color, #000); stroke-width: 1.5; fill: none; }
    .ch8f-head { fill: var(--md-default-fg-color, #000); }
    .ch8f-band { font: 500 10px -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif; letter-spacing: 0.18em; text-transform: uppercase; fill: var(--md-default-fg-color, #000); text-anchor: middle; opacity: 0.6; }
  </style>

  <text class="ch8f-band" x="400" y="22">G4 Sequence &mdash; freight yard, worked</text>

  <rect class="ch8f-node-top" x="270" y="40" width="260" height="55" rx="4" />
  <text class="ch8f-label" x="400" y="62">Routing map from G3</text>
  <text class="ch8f-sub" x="400" y="80">Four routed pieces, four controls sketches.</text>

  <line class="ch8f-arrow" x1="400" y1="95" x2="400" y2="125" />
  <line class="ch8f-arrow" x1="95" y1="125" x2="705" y2="125" />

  <line class="ch8f-arrow" x1="95" y1="125" x2="95" y2="155" />
  <polygon class="ch8f-head" points="90,150 100,150 95,160" />
  <line class="ch8f-arrow" x1="295" y1="125" x2="295" y2="155" />
  <polygon class="ch8f-head" points="290,150 300,150 295,160" />
  <line class="ch8f-arrow" x1="505" y1="125" x2="505" y2="155" />
  <polygon class="ch8f-head" points="500,150 510,150 505,160" />
  <line class="ch8f-arrow" x1="705" y1="125" x2="705" y2="155" />
  <polygon class="ch8f-head" points="700,150 710,150 705,160" />

  <rect class="ch8f-node" x="25" y="160" width="140" height="125" rx="4" />
  <text class="ch8f-tag" x="95" y="178">Step 1</text>
  <text class="ch8f-label" x="95" y="200">Escalation</text>
  <text class="ch8f-label" x="95" y="214">workflow</text>
  <text class="ch8f-sub" x="95" y="234">Human-operated.</text>
  <text class="ch8f-sub" x="95" y="246">Fully reversible.</text>
  <text class="ch8f-sub" x="95" y="258">Small blast.</text>
  <text class="ch8f-sub" x="95" y="274">Ships first.</text>

  <rect class="ch8f-node" x="225" y="160" width="140" height="125" rx="4" />
  <text class="ch8f-tag" x="295" y="178">Step 2</text>
  <text class="ch8f-label" x="295" y="200">Dock-door</text>
  <text class="ch8f-label" x="295" y="214">solver</text>
  <text class="ch8f-sub" x="295" y="234">Non-AI automation.</text>
  <text class="ch8f-sub" x="295" y="246">Fully reversible.</text>
  <text class="ch8f-sub" x="295" y="258">Small blast.</text>
  <text class="ch8f-sub" x="295" y="274">Monthly review.</text>

  <rect class="ch8f-node-top" x="435" y="160" width="140" height="125" rx="4" />
  <text class="ch8f-tag" x="505" y="178">Step 3</text>
  <text class="ch8f-label" x="505" y="200">Carrier-ETA</text>
  <text class="ch8f-label" x="505" y="214">triage</text>
  <text class="ch8f-sub" x="505" y="234">AI as assistant.</text>
  <text class="ch8f-sub" x="505" y="246">Soft-irreversible.</text>
  <text class="ch8f-sub" x="505" y="258">Contained blast.</text>
  <text class="ch8f-sub" x="505" y="274">4-week shadow.</text>

  <rect class="ch8f-node-heavy" x="635" y="160" width="140" height="125" rx="4" />
  <text class="ch8f-tag" x="705" y="178">Step 4</text>
  <text class="ch8f-label" x="705" y="200">Yard-slot</text>
  <text class="ch8f-label" x="705" y="214">allocator</text>
  <text class="ch8f-sub" x="705" y="234">Autonomous AI.</text>
  <text class="ch8f-sub" x="705" y="246">Hard-irreversible.</text>
  <text class="ch8f-sub" x="705" y="258">Large blast.</text>
  <text class="ch8f-sub" x="705" y="274">Shadow-canary-prog.</text>

  <line class="ch8f-arrow" x1="95" y1="285" x2="95" y2="320" />
  <polygon class="ch8f-head" points="90,315 100,315 95,325" />
  <line class="ch8f-arrow" x1="295" y1="285" x2="295" y2="320" />
  <polygon class="ch8f-head" points="290,315 300,315 295,325" />
  <line class="ch8f-arrow" x1="505" y1="285" x2="505" y2="320" />
  <polygon class="ch8f-head" points="500,315 510,315 505,325" />
  <line class="ch8f-arrow" x1="705" y1="285" x2="705" y2="320" />
  <polygon class="ch8f-head" points="700,315 710,315 705,325" />

  <rect class="ch8f-node-top" x="30" y="325" width="740" height="55" rx="4" />
  <text class="ch8f-label" x="400" y="348">Dependency order &mdash; forward to G5</text>
  <text class="ch8f-sub" x="400" y="368">Escalation &rarr; solver &rarr; triage &rarr; allocator. Stroke-weight encodes blast radius.</text>

  <text class="ch8f-band" x="400" y="412">Controls tag per step; the order is the artefact, the calendar is downstream.</text>
</svg>
</div>

*Illustration 8.2 — The freight example. Four routed pieces, ordered by reversibility and blast radius. Border-weight carries the blast radius: thin for small, thick for large. The yard-slot allocator runs last, behind the three-stage rollout; the escalation workflow runs first, because it is fully reversible, small in blast radius, and teaches the team what categories the later pieces will need. The order is the artefact G5 will commit to.*

Next: [Chapter 9](ch-9.md) G5 Commit takes the dependency order and binds it to a named owner, rollback triggers, a review cadence, and sunset criteria.

## Sources

[1] Malcolm DG, Roseboom JH, Clark CE, Fazar W. Application of a technique for research and development program evaluation. *Operations Research*. 1959;7(5):646–69. **[verified]** The PERT paper, written after the Polaris missile programme.

[2] Kelley JE, Walker MR. Critical-path planning and scheduling. In: *Proceedings of the Eastern Joint Computer Conference*. ACM; 1959. p. 160–73. **[verified]** The CPM paper, from Kelley's work at Remington Rand and Walker's at DuPont.

[3] Bezos J. 2015 Letter to Shareholders. Amazon.com; 2016. **[verified]** The *two-way doors* framing: *"Some decisions are consequential and irreversible or nearly irreversible — one-way doors... if you walk through and don't like what you see on the other side, you can't get back to where you were before."*

[4] Beyer B, Jones C, Petoff J, Murphy NR, editors. *Site Reliability Engineering: How Google Runs Production Systems*. O'Reilly; 2016. **[verified]** Introduces *blast radius* as the SRE vocabulary for the scope of a failure's effect.

[5] Humble J, Farley D. *Continuous Delivery: Reliable Software Releases through Build, Test, and Deployment Automation*. Addison-Wesley; 2010. **[verified]** The canonical treatment of shadow, canary, and progressive rollout as the operational vocabulary for staged deployment.
