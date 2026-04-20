# Toolkit — Blast-radius estimation

*Gate: G4 Sequence. Category: sequencing lens.*

## What problem it solves

Before picking a rollout substrate for each routed piece, the sequencing reviewer needs to know what a failure would actually affect — *who*, *for how long*, with *what undo-ability*. Without a written answer, rollout choices default to uniform caution (everything behind shadow + canary, slowing the engagement) or uniform optimism (everything ships direct, turning one bad call into a cohort). Blast-radius estimation makes the consequence of failure visible *before* the failure, on grounds the next reviewer can challenge.

## How it is used

A **20–40 minute working session per piece**, held in the G4 sequencing review. Around a whiteboard or shared doc with the piece's named owner plus one operations lead who knows the downstream systems. One paragraph is drafted per piece and attached to the sequencing sheet. For small-blast pieces, a single sentence replaces the paragraph — the tool scales to the piece. Re-visited if substrate or downstream dependencies change.

## Inputs

- One routed piece from the G3 routing map.
- Knowledge of the downstream systems the piece feeds (carriers, customers, schedulers, dashboards).
- A rough understanding of how fast the wrongness of a wrong call becomes *detectable*, not how fast the piece itself runs.
- The piece's reversibility class (from the paired G4 lens) — not required upfront, but the two lenses inform each other.

## Outputs

- A short paragraph per piece naming all three facets: population, time, irreversibility inside the blast.
- A sequencing signal: *small blast* → ship early under light substrate; *contained blast* → shorter staged rollout; *large blast* → full shadow → canary → progressive.
- A **window ceiling** for G5 rollback triggers: the time facet bounds the maximum window a trigger can wait before firing.

## Visualisation

<div style="max-width: 900px; margin: 2rem auto;">
<svg viewBox="0 0 800 320" xmlns="http://www.w3.org/2000/svg" role="img" aria-labelledby="br-title">
  <title id="br-title">Blast-radius three-facet decomposition: population, time, irreversibility inside the blast</title>
  <style>
    .br-rect { fill: var(--md-default-bg-color, #fff); stroke: var(--md-default-fg-color, #000); stroke-width: 1.4; }
    .br-top { fill: var(--md-default-bg-color, #fff); stroke: var(--md-default-fg-color, #000); stroke-width: 2.2; }
    .br-line { stroke: var(--md-default-fg-color, #000); stroke-width: 1.2; fill: none; }
    .br-label { font: 700 13px -apple-system, BlinkMacSystemFont, sans-serif; fill: var(--md-default-fg-color, #000); text-anchor: middle; }
    .br-sub { font: 400 11px -apple-system, sans-serif; fill: var(--md-default-fg-color, #000); text-anchor: middle; }
    .br-tag { font: italic 10px -apple-system, sans-serif; fill: var(--md-default-fg-color, #000); text-anchor: middle; opacity: 0.8; }
  </style>
  <rect class="br-top" x="300" y="20" width="200" height="50" />
  <text class="br-label" x="400" y="43">Routed piece</text>
  <text class="br-tag" x="400" y="60">from G3 routing map</text>
  <line class="br-line" x1="400" y1="70" x2="160" y2="130" />
  <line class="br-line" x1="400" y1="70" x2="400" y2="130" />
  <line class="br-line" x1="400" y1="70" x2="640" y2="130" />
  <rect class="br-rect" x="40" y="130" width="240" height="150" />
  <text class="br-label" x="160" y="160">Population</text>
  <text class="br-sub" x="160" y="186">Whose state shifts</text>
  <text class="br-sub" x="160" y="202">when this piece acts?</text>
  <text class="br-tag" x="160" y="234">Not everyone the piece</text>
  <text class="br-tag" x="160" y="250">reaches — those whose</text>
  <text class="br-tag" x="160" y="266">behaviour actually changes.</text>
  <rect class="br-rect" x="280" y="130" width="240" height="150" />
  <text class="br-label" x="400" y="160">Time</text>
  <text class="br-sub" x="400" y="186">How long until a wrong</text>
  <text class="br-sub" x="400" y="202">call is detectable?</text>
  <text class="br-tag" x="400" y="234">Not the piece's latency.</text>
  <text class="br-tag" x="400" y="250">Interval before the system</text>
  <text class="br-tag" x="400" y="266">itself knows it was wrong.</text>
  <rect class="br-rect" x="520" y="130" width="240" height="150" />
  <text class="br-label" x="640" y="160">Irreversibility</text>
  <text class="br-sub" x="640" y="186">Can the harm, once landed,</text>
  <text class="br-sub" x="640" y="202">be walked back?</text>
  <text class="br-tag" x="640" y="234">Of the harm, not the piece.</text>
  <text class="br-tag" x="640" y="250">A reversible piece can</text>
  <text class="br-tag" x="640" y="266">leave irreversible harm.</text>
</svg>
</div>

*Three facets estimated separately and written as a paragraph, not scored. Large on any one facet earns a heavier rollout substrate — a small-population / slow-time / hard-irreversible piece needs as much protection as a large-population / fast-time / fully-reversible one.*

## Anatomy

Three facets, estimated separately, written as a short paragraph per piece.

**Population.** The set of people, counterparties, or systems whose behaviour changes when this piece acts. Not the set *exposed* to the piece; the set whose state *shifts* because of it. A carrier-ETA triage system that drafts messages for an operator's review affects only operators until the operator hits *send*; the population is operators, not carriers, until the handoff. The distinction matters: it separates blast radius from reach.

**Time.** The window over which harm accumulates before it is detectable. A yard-slot allocator's wrong call on a 24-hour schedule accumulates harm for 24 hours before the downstream effect (a driver arrives at a blocked dock) makes it visible. A pricing engine's wrong call on a daily bulk-price refresh accumulates harm for a day. A recommender system's wrong call on a slow-feedback metric (purchase over ensuing weeks) accumulates harm over weeks. Time is not latency; it is the interval before the system itself knows the call was bad.

**Irreversibility inside the blast.** Whether the harm, once landed, can be walked back. A bad dock-door call is recoverable in minutes. A bad outbound message to a carrier is recoverable only with an apology and a relationship cost. A bad automated billing charge is recoverable through a refund, not through un-billing — the counterparty has seen the charge. The facet is *inside the blast*, not *about the piece*: a piece may itself be reversible while the harm it caused is not.

Write the three facets as a paragraph, not a score. A piece whose blast paragraph reads *"affects scheduling across one region for 24 hours; wrong calls cause driver rework but not direct counterparty harm; operations can re-schedule within the window"* is a piece that can ship behind a light rollout. A piece whose paragraph reads *"affects all carrier contracts for the region; harm accumulates over 14 days before visibility; once a carrier has been re-contracted, reversal requires another contract negotiation"* is a piece that must ship behind the full three-stage rollout.

## Example

??? example "Paper trail — blast-radius session in the G4 sequencing review"
    *Freight yard, [Chapter 8](ch-8.md). One 90-minute sequencing review; four routed pieces, four blast paragraphs. Present: Priya Chen (allocator owner); Raj Patel (operations); Ada Okonkwo (sequencing reviewer, chairing); Jin Wu (dock-door solver owner). Output: four paragraphs attached to the sequencing sheet, plus a window ceiling for each piece's future G5 triggers.*

    **Piece 1 — yard manager escalation workflow (8 minutes).** Ada asks for a one-sentence blast paragraph. Raj: *"operators at one yard; seconds-to-minutes detection; fully recoverable — the operator re-runs the conversation."* Ada marks it **small blast**, single sentence, no further analysis needed. This is the tool scaling to the piece.

    **Piece 2 — dock-door solver (12 minutes).** Jin drafts: *"one yard's dock scheduling; minutes to one shift; recoverable by reassigning the door and rerunning."* Ada challenges the population: *"does a bad solve affect anyone outside the yard?"* Jin: *"no — the dispatch system absorbs the solve before drivers see it."* Paragraph confirmed. **Small blast.**

    **Piece 3 — carrier-ETA triage (20 minutes).** Priya drafts a first pass: *"operators during drafting, carriers on sent messages; hours within a shift; recoverable for unsent drafts, relationship cost on sent."* Raj pushes back on the time facet: *"what's the interval before a wrong triage is *detectable*?"* Priya: *"when the operator sends it, the operator catches most of it."* Ada corrects: *"detection requires the wrongness to surface, not the operator to suspect. If a wrong draft is sent confidently, the carrier's response is the detection — that's 4-24 hours."* Paragraph rewritten with 4-24 hour time. **Contained blast while drafts reviewed; would be large if the review gate is removed** — flagged as a sequencing note, the review gate must not be removed in phase 1.

    **Piece 4 — yard-slot allocator (40 minutes).** Priya drafts a first-pass population: *"carriers whose slots the allocator assigns."* Raj pushes back: *"that's exposure, not shift — half of those carriers are just getting their expected slot. The population that shifts is the subset who receive a non-expected slot, which is roughly a third of assignments but 100% of the ones that matter."* Paragraph revised: *"carriers and drivers across all regions served by the allocator, concentrated on the ~30% receiving non-baseline slots."*

    *T+15 — time facet.* Priya: *"the allocator runs every hour."* Raj interrupts: *"that's cadence, not time. A wrong call feeds into a 24-hour schedule — the driver doesn't arrive at a blocked dock until 24 hours later. Time is 24 hours."* Priya accepts. Ada asks whether carrier behaviour changes are a second, longer time window. Priya: *"yes — if allocation patterns shift, carriers may re-contract, which shows up over weeks."* Two time scales recorded: 24h operational, weeks behavioural.

    *T+30 — irreversibility inside the blast.* The team walks through what happens after a wrong call lands:

    - Schedule swaps within the 24-hour window: recoverable.
    - Drivers physically dispatched: hard-irreversible (cannot un-dispatch).
    - Carriers notified of allocations: soft-irreversible (apology + relationship cost).
    - Carriers re-contracted on shifted allocation patterns: hard-irreversible at the contract level (another negotiation cycle).

    Ada: *"two of those are hard-irreversible. That's the one that sizes the substrate."*

    *T+40 — close.* Final paragraph reads: *"Affects carriers and drivers across all regions served by the allocator, concentrated on the ~30% receiving non-baseline slots. Harm accumulates over 24 hours per operational horizon, and over weeks for carrier-behaviour shifts. Hard-irreversible for dispatched drivers and re-contracted carriers; soft for schedule swaps within the window."* **Large blast.**

    **What the sequencing sheet says after the session.** Ada orders the pieces: *escalation workflow → dock-door solver → carrier-ETA triage → yard-slot allocator.* The allocator goes last, behind a full shadow → canary → progressive rollout. Each paragraph also carries a **window-ceiling note** for G5: escalation workflow → minutes; dock-door → hours; triage → day; allocator → hours (not days, because the 24-hour operational time is a ceiling on rollback triggers — no trigger can wait longer than a fraction of the time-to-detection without letting harm land multiple times over).

    **Follow-up at week 4.** A reviewer on a neighbouring team reads the allocator paragraph and asks whether the *re-contracted carriers* harm class should have been a separate hazard at G3 (bow-tie) rather than a facet of blast radius at G4. The question is escalated; the answer is that both are valid — blast radius sized the substrate, bow-tie should have added the specific hazard and barriers. A loopback is opened: allocator returns to G3 briefly to add one bow-tie barrier (*carrier-contract-shift monitor*), then re-enters G4 without further change to the paragraph.

## Pitfalls

**Counting exposure instead of shift.** A common error is estimating population as *everyone the piece can reach*. That is exposure, not blast. A pricing engine that serves a thousand customers has an exposure of a thousand; its blast population is the subset of customers whose prices actually move when the engine misbehaves. Mis-estimating here inflates the rollout substrate and depresses the pieces' sequencing priority.

**Compressing time to latency.** *The allocator runs every hour, so the time is one hour.* The correct answer is the interval before the wrong call is *detectable*, which is often much longer than the run cadence. A piece that runs every hour but whose outputs feed a 24-hour schedule has a 24-hour time facet, not a one-hour one.

**Treating irreversibility as a property of the piece.** The piece may be reversible (edit the rule, rerun) while the harm is not (the driver has already been dispatched). The facet is *harm inside the blast*, judged separately from the piece's own reversibility class.

**Scoring instead of describing.** A single blast-radius number (1–5, low/medium/high) is faster but hides the differences that matter. A piece with a small population but hard irreversibility often needs a larger rollout substrate than a piece with a large population and full recoverability. Scoring collapses the two into one cell. Paragraphs keep them separate.

**Over-paragraphing low-stakes pieces.** A rule change to a contained deterministic substrate does not need a three-facet paragraph. For fully reversible pieces with contained population, one sentence — *"small blast, recoverable in minutes"* — is the correct output. The tool scales to the piece.

## When not to use

- The piece is *Human-operated* and has no automation substrate at all. Blast radius is a sequencing tool for automated pieces; a human workflow's consequences are a training and escalation concern, not a rollout concern.
- The piece is fully reversible and contained to a single operator's workspace. The paragraph would say *"small blast, fully recoverable"* and add nothing. Use a single sentence instead.
- The engagement has only one piece, and the piece's sequencing is trivially *ship it*. Three-facet estimation buys nothing.

## Provenance

Google's Site Reliability Engineering practice formalised *blast radius* as the operational vocabulary for the scope of a failure's effect [1]. The three-facet decomposition — population, time, irreversibility inside the blast — is older, from aerospace safety analysis and nuclear probabilistic risk assessment. Leveson's *Engineering a Safer World* [2] treats the population and time dimensions under hazard analysis; the irreversibility dimension corresponds to the literature on *uncontained failures* in safety engineering. The SRE framing is what has travelled into software and AI engineering, and is the vocabulary this tool uses.

## Related tools

- **Reversibility classes.** Paired lens at G4. Reversibility asks *can we undo the piece?*; blast radius asks *what does the piece affect while it runs?*. A piece can be reversible with a large blast (a recommender refresh) or irreversible with a small blast (a configuration change visible only to one team).
- **Dependency graph (PERT / CPM).** The third G4 lens. Dependencies set the order floor; blast radius sets the rollout-substrate ceiling.
- **Three-stage rollout pattern.** The substrate that blast radius sizes. Large blast → full shadow → canary → progressive. Contained blast → shorter stages. Small blast → no staged rollout needed.
- **Pre-mortem.** [Chapter 7](ch-7.md) Q3 paper tool. The pre-mortem surfaces failure *modes*; blast-radius estimation sizes the *consequence* of each mode. Pair them to size the rollout substrate against specific failure modes rather than generic caution.

## Verification

[1] Beyer B, Jones C, Petoff J, Murphy NR, editors. *Site Reliability Engineering: How Google Runs Production Systems*. O'Reilly; 2016. **[verified]** Introduces *blast radius* as the SRE vocabulary.

[2] Leveson NG. *Engineering a Safer World: Systems Thinking Applied to Safety*. MIT Press; 2012. **[verified]** Treats hazard propagation, population, and time horizons in the context of STAMP (Systems-Theoretic Accident Model and Processes).
