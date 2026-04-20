# Toolkit — Bow-tie analysis

*Gate: G3 Route (Q3b). Category: controls-derivation lens.*

## What problem it solves

For a routed piece with a nameable failure hazard, *"we will need controls"* is a sentence that names none. Bow-tie analysis converts that sentence into a concrete set of barriers with owners — the specific controls the commitment page will later document. Without this step, G3 produces the sketch of a sketch.

## How it is used

A single 60–90 minute **whiteboard meeting**. Participants: the piece's named owner, a safety- or risk-lead, one engineer who knows the substrate, one operations representative who knows how harm propagates. Facilitator draws the hazard at the centre, leads the room through threats on the left and consequences on the right, then through barriers on each path. A barrier is written only once its owner is named out loud. The board is photographed and transcribed into the controls sketch; a second session is called if threats or consequences were clearly missed.

## Inputs

- One routed piece from the G3 routing map.
- A nameable central hazard (the single event whose harm the controls must prevent or mitigate).
- The owner list — people with authority to commit to barriers.
- A brief description of the piece's upstream feeds and downstream consequences.

## Outputs

- A one-page bow-tie diagram: central hazard, 2–4 threats, 2–4 consequences, one prevention barrier per threat, one mitigation barrier per consequence.
- Each barrier carries four attributes: name, owner, defeat-mode, effectiveness claim.
- A candidate list of rollback triggers, derived from the mitigation barriers' defeat-modes — direct input to G5 trigger design.

## Visualisation

<div style="max-width: 900px; margin: 2rem auto;">
<svg viewBox="0 0 800 320" xmlns="http://www.w3.org/2000/svg" role="img" aria-labelledby="bt-title">
  <title id="bt-title">Bow-tie anatomy: threats and consequences flanking a central hazard, with prevention and mitigation barriers on each path</title>
  <style>
    .bt-rect { fill: var(--md-default-bg-color, #fff); stroke: var(--md-default-fg-color, #000); stroke-width: 1.2; }
    .bt-hazard { fill: var(--md-default-bg-color, #fff); stroke: var(--md-default-fg-color, #000); stroke-width: 2.4; }
    .bt-barrier { fill: var(--md-default-fg-color, #000); }
    .bt-line { stroke: var(--md-default-fg-color, #000); stroke-width: 1.2; fill: none; }
    .bt-label { font: 600 11px -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif; fill: var(--md-default-fg-color, #000); text-anchor: middle; }
    .bt-hlabel { font: 700 13px -apple-system, sans-serif; fill: var(--md-default-fg-color, #000); text-anchor: middle; }
    .bt-sub { font: italic 10px -apple-system, sans-serif; fill: var(--md-default-fg-color, #000); text-anchor: middle; opacity: 0.8; }
  </style>
  <line class="bt-line" x1="120" y1="50" x2="340" y2="150" />
  <line class="bt-line" x1="120" y1="150" x2="340" y2="150" />
  <line class="bt-line" x1="120" y1="250" x2="340" y2="150" />
  <line class="bt-line" x1="460" y1="150" x2="680" y2="50" />
  <line class="bt-line" x1="460" y1="150" x2="680" y2="150" />
  <line class="bt-line" x1="460" y1="150" x2="680" y2="250" />
  <rect class="bt-rect" x="20" y="30" width="100" height="40" />
  <text class="bt-label" x="70" y="55">Threat 1</text>
  <rect class="bt-rect" x="20" y="130" width="100" height="40" />
  <text class="bt-label" x="70" y="155">Threat 2</text>
  <rect class="bt-rect" x="20" y="230" width="100" height="40" />
  <text class="bt-label" x="70" y="255">Threat 3</text>
  <rect class="bt-rect" x="680" y="30" width="100" height="40" />
  <text class="bt-label" x="730" y="55">Cons. A</text>
  <rect class="bt-rect" x="680" y="130" width="100" height="40" />
  <text class="bt-label" x="730" y="155">Cons. B</text>
  <rect class="bt-rect" x="680" y="230" width="100" height="40" />
  <text class="bt-label" x="730" y="255">Cons. C</text>
  <rect class="bt-barrier" x="216" y="83" width="6" height="24" />
  <rect class="bt-barrier" x="216" y="138" width="6" height="24" />
  <rect class="bt-barrier" x="216" y="193" width="6" height="24" />
  <rect class="bt-barrier" x="578" y="83" width="6" height="24" />
  <rect class="bt-barrier" x="578" y="138" width="6" height="24" />
  <rect class="bt-barrier" x="578" y="193" width="6" height="24" />
  <rect class="bt-hazard" x="340" y="115" width="120" height="70" />
  <text class="bt-hlabel" x="400" y="148">HAZARD</text>
  <text class="bt-sub" x="400" y="168">one named event</text>
  <text class="bt-sub" x="219" y="300">Prevention barriers</text>
  <text class="bt-sub" x="400" y="300">central hazard</text>
  <text class="bt-sub" x="581" y="300">Mitigation barriers</text>
</svg>
</div>

*Left: threats → prevention barriers → hazard. Right: hazard → mitigation barriers → consequences. Each vertical bar is a named control with an owner and a defeat-mode. Prevention barriers feed the audit and review side of the controls sketch; mitigation barriers feed the rollback side.*

## Anatomy

Five parts, drawn left-to-right on a single page.

**Hazard.** The centre node. One sentence. Specific enough that a reviewer can imagine it occurring. *"The allocator assigns a driver to a blocked dock"* is a hazard; *"the system fails"* is not. A piece may need more than one bow-tie — one per distinct hazard — but each bow-tie has exactly one centre.

**Threats.** Left of the hazard. The paths by which the hazard could occur. *Model drift past the certified operating range.* *Upstream schedule corruption.* *Operator misconfiguration.* One node per distinct causal path; threats that collapse to the same prevention barrier are merged.

**Prevention barriers.** Between each threat and the hazard. A barrier is a control that, if present and functioning, stops that threat from reaching the hazard. Each barrier has a name, an owner, a defeat-mode (*"this barrier fails if the drift monitor has not been refreshed since the last carrier onboarded"*), and an effectiveness claim (*"catches 90% of excursions within one hour"*). Prevention barriers are the *audit* and *review* side of the controls sketch.

**Consequences.** Right of the hazard. The ways the hazard's harm can propagate. *Driver dispatched to a blocked dock.* *Schedule cascades over the next 24 hours.* *Carrier notified of a slot that no longer exists.* One node per distinct propagation path.

**Mitigation barriers.** Between the hazard and each consequence. Controls that, if present and functioning, limit the harm once the hazard has occurred. Each has the same four attributes as a prevention barrier. Mitigation barriers are the *rollback* side of the controls sketch; their defeat-modes become candidate rollback triggers at G5.

The diagram reads left-to-right: threat → prevention barrier → hazard → mitigation barrier → consequence. A barrier with no owner is not a barrier; a barrier with no defeat-mode is unverifiable.

## Example

??? example "Paper trail — a bow-tie session for the yard-slot allocator"
    *Freight yard, [Chapter 9](ch-9.md), yard-slot allocator piece. Meeting: 75 minutes, one whiteboard. Present: Priya Chen (Allocator Product lead, piece owner, facilitating); Raj Patel (Yard Operations lead); Mei Sato (Safety & Risk); Alex Kim (ML engineer). Output: photographed board + transcribed barrier list.*

    **T+0 — Hazard on the board.** Priya writes the central hazard: *"the allocator assigns a driver to a blocked dock."* Alex asks whether "assigns a slot that then becomes blocked" is the same thing or a different hazard; the group agrees it is the same and moves on.

    **T+10 — Threats on the left.** Raj opens with *upstream schedule corruption from a delayed carrier feed* — he names the Tuesday-before-last outage where a 40-minute feed lag slipped past the monitors. Alex adds *model drift past the certified operating range*. Priya adds *a region onboarded without being included in the retrain set* — from a near-miss last quarter. Three threats on the board. Mei asks whether operator misconfiguration belongs; Raj: "operators don't configure the allocator, they only override it." Cut.

    **T+25 — Prevention barriers, left side.** Priya writes a barrier between each threat and the hazard. For T1 (feed lag): *staleness check on the carrier feed, owner: Data Ingestion lead, defeat-mode: "fails if the feed's health check is itself stale", effectiveness: "fails loud within 60 seconds of a lag >15 min."* For T2 (drift): *drift monitor vs. carrier-volume baseline, owner: Ops Data lead, defeat-mode: "fails if not refreshed since the last carrier onboarded", effectiveness: "catches 90% of excursions within 4 hours."* For T3 (onboarding): *onboarding gate, owner: Priya, defeat-mode: "fails if retrain schedule slips", effectiveness: "blocks all go-lives for unretrain-ed regions."* Mei challenges the effectiveness claim on the drift monitor; the figure stays but with the word "estimated" added.

    **T+35 — Raj proposes a fourth prevention barrier.** *"Double-verification from a second operator."* Priya vetos on latency grounds — it would make the allocator unusable. Raj concedes; the double-verification idea goes on a separate list of candidate review-cadence controls, not on the bow-tie.

    **T+45 — Consequences, right side.** Two: *(C1) driver physically dispatched to a blocked dock* and *(C2) carrier notified of a slot that no longer exists.*

    **T+55 — Mitigation barriers.** For C1: *pre-dispatch sanity check, owner: Raj, defeat-mode: "blocked-dock flag >30 minutes stale", effectiveness: "catches all blocked-dock assignments within 30-minute flag window."* For C2: *hold-on-notify rule — 10-minute delay between allocation and carrier notify — owner: Priya, defeat-mode: "delay disabled for priority carriers", effectiveness: "gives 10 minutes for rollback-before-notify."*

    **T+68 — Defeat-modes → trigger candidates.** Mei reads the board and reads the mitigation defeat-modes aloud again, marking each as a candidate G5 rollback trigger. Three candidates emerge: *blocked-dock flag age >30 min → revert*; *notify-delay override rate >0 → freeze*; *drift-monitor refresh age >24 hours → freeze + on-call.*

    **T+75 — Close.** Photograph taken. Alex opens six tickets, one per barrier, each with owner, defeat-mode, and effectiveness claim attached. Priya transcribes the barrier list into the controls sketch on the G3 routing map row for the allocator.

    **Follow-up, two weeks later.** A near-miss in staging shows threat T3 (onboarded region) had been under-specified — a region was *partially* included in the retrain set, which the onboarding gate did not catch. The bow-tie is reopened for 20 minutes; the onboarding-gate barrier gains a second defeat-mode *"fails if region is only partially retrained"*, and a corresponding G5 trigger is added. This is the diagnostic asked for in the card: a barrier that has never been tested in staging is unverified.

## Pitfalls

**Brainstorming instead of deriving.** A team gathers barrier ideas by brainstorming without anchoring to a hazard. The result is a list of plausible-sounding controls with no claim that they collectively close the paths a hazard could take. The fix is to draw the hazard first, draw the threats, and only then name barriers that stand between the two.

**Barriers without owners.** A barrier on the diagram with no named owner is decoration. The commitment page will not inherit it, because there is no one to assign it to. The discipline is that no barrier is accepted onto the diagram without an owner name.

**Defeat-modes omitted.** Each barrier needs the sentence *"this barrier fails if…"*. Without it, the barrier is an assertion of perpetual effectiveness, which is false. The defeat-modes are what feed the rollback-trigger list at G5; omitting them cuts the tool off from the downstream gate.

**Hazards that compress.** *"The system misbehaves"* is not a hazard. It collapses into one node what is actually several distinct failure paths, each needing its own barriers. The fix is to split until each hazard is a single imaginable event, drawn separately.

**Confusing a bow-tie with a risk register.** A risk register is a catalogue; a bow-tie is a causal diagram. The register lists; the bow-tie shows *between which nodes the barrier sits*. A team that produces a register and calls it a bow-tie has skipped the analytic step that derives the barriers.

## When not to use

- The piece has no identifiable central hazard — e.g., a retrieval-only assistant where the failure mode is a nuanced loss-of-quality rather than a nameable event. STPA fits better.
- The piece is *Human-operated* with fully reversible low-blast-radius decisions. A bow-tie for an operator workflow with one-sentence blast radius is over-engineering.
- The engagement is at G1 or G2 and the piece has not been routed. Bow-tie is a G3-Q3b tool; it operates on a *routed* piece whose controls must now be drawn.

## Provenance

The bow-tie technique originates in process-safety engineering — specifically, the Royal Dutch Shell group in the 1970s — and became standard in high-hazard industries (oil and gas, chemicals, aviation). The CCPS concept book [1] is the current consolidated reference and supplies the four-attribute barrier (name, owner, defeat-mode, effectiveness) used here. Its application to AI risk is more recent and less codified, but the shape transfers: the central-hazard decomposition works for any system where a single imaginable event causes harm through identifiable paths.

## Related tools

- **STPA.** The other G3-Q3b derivation tool. STPA models the system as a control hierarchy and derives safety constraints from unsafe control actions; bow-tie anchors on a single hazard and derives barriers around it. Use STPA when the hazard is produced by feedback or coordination; use bow-tie when the hazard is nameable as a single event.
- **Pre-mortem.** [Chapter 7](ch-7.md) Q3 paper tool. A pre-mortem surfaces failure *modes*; the bow-tie takes the most consequential mode and draws its prevention-and-mitigation anatomy. Pre-mortem first, bow-tie on the top two or three modes.
- **Rollback-trigger design.** G5 tool. The bow-tie's mitigation barriers — specifically their defeat-modes — are the input to trigger design. Do the bow-tie at G3, and the trigger drafting at G5 becomes transcription rather than invention.
- **FMEA (Failure Mode and Effects Analysis).** A cousin from reliability engineering. FMEA enumerates component failure modes and scores them; bow-tie traces causal paths around a single hazard. FMEA is better for component-rich hardware systems; bow-tie is better for sociotechnical pieces where the hazard is a configuration or decision, not a component failure.

## Verification

[1] Center for Chemical Process Safety (CCPS). *Bow Ties in Risk Management: A Concept Book for Process Safety*. Wiley / AIChE; 2018. **[verified]** The consolidated reference for the bow-tie shape used here, including the four-attribute barrier and the link to defeat-modes as trigger candidates.
