# Toolkit — Blast-radius estimation

*Gate: G4 Sequence. Category: sequencing lens.*

## Purpose

Estimate, per routed piece, the extent of what a failure affects — *population*, *time*, and *irreversibility of harm inside the blast*. Used at G4 to decide which pieces can ship early under light rollout substrates and which ones must ship late behind staged rollout. The tool's job is to make the consequence of failure visible before the failure, on grounds the next reviewer can challenge.

## Anatomy

Three facets, estimated separately, written as a short paragraph per piece.

**Population.** The set of people, counterparties, or systems whose behaviour changes when this piece acts. Not the set *exposed* to the piece; the set whose state *shifts* because of it. A carrier-ETA triage system that drafts messages for an operator's review affects only operators until the operator hits *send*; the population is operators, not carriers, until the handoff. The distinction matters: it separates blast radius from reach.

**Time.** The window over which harm accumulates before it is detectable. A yard-slot allocator's wrong call on a 24-hour schedule accumulates harm for 24 hours before the downstream effect (a driver arrives at a blocked dock) makes it visible. A pricing engine's wrong call on a daily bulk-price refresh accumulates harm for a day. A recommender system's wrong call on a slow-feedback metric (purchase over ensuing weeks) accumulates harm over weeks. Time is not latency; it is the interval before the system itself knows the call was bad.

**Irreversibility inside the blast.** Whether the harm, once landed, can be walked back. A bad dock-door call is recoverable in minutes. A bad outbound message to a carrier is recoverable only with an apology and a relationship cost. A bad automated billing charge is recoverable through a refund, not through un-billing — the counterparty has seen the charge. The facet is *inside the blast*, not *about the piece*: a piece may itself be reversible while the harm it caused is not.

Write the three facets as a paragraph, not a score. A piece whose blast paragraph reads *"affects scheduling across one region for 24 hours; wrong calls cause driver rework but not direct counterparty harm; operations can re-schedule within the window"* is a piece that can ship behind a light rollout. A piece whose paragraph reads *"affects all carrier contracts for the region; harm accumulates over 14 days before visibility; once a carrier has been re-contracted, reversal requires another contract negotiation"* is a piece that must ship behind the full three-stage rollout.

## Example

Freight yard, [Chapter 8](ch-8.md). Four routed pieces, four blast paragraphs.

*Yard manager escalation workflow.* Population: operators at one yard. Time: seconds to minutes — an escalation handled badly is immediately visible to the operator and the driver. Harm inside the blast: fully recoverable; the operator re-runs the conversation. **Small blast.**

*Dock-door solver.* Population: one yard's dock scheduling. Time: minutes to one shift. Harm: recoverable — reassign the door, re-run the solver with a corrected matrix. **Small blast.**

*Carrier-ETA triage.* Population: operators during drafting; carriers on sent messages. Time: hours within a shift. Harm: recoverable for unsent drafts; costly for sent messages (re-contact with correction, relationship cost). **Contained blast while drafts reviewed; wider if the review gate is removed.**

*Yard-slot allocator.* Population: carriers and drivers across all regions served by the allocator. Time: 24 hours per horizon; longer if allocation patterns shift carrier behaviour. Harm: hard-irreversible for dispatched drivers; soft for schedule swaps within the window; carriers notified of allocations are not un-notifiable. **Large blast.**

The four paragraphs rank the pieces directly: large-blast pieces go last, contained-blast pieces go earlier, and the rollout substrate on the large-blast piece is proportional to the blast it would have if it shipped unprotected.

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
