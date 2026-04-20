# Toolkit — Operator shadowing

*Gate: G3 Route (Q1 operational observation). Category: observation substrate.*

## What problem it solves

The system description records *what the process does*; operator shadowing records *what an operator actually does while doing it.* The two diverge: the documented process misses the workarounds, the micro-decisions, the radio chatter that carries the actual judgement. A routing decision based only on the documented process routes the wrong leaf. Shadowing puts the engagement's observer alongside the practitioner for a full shift, so the work-as-done substrate is visible before routing.

## How it is used

A **multi-shift longitudinal trial in operations** — typically 2–4 shifts across different days, shifts, and conditions. The observer arrives with a structured notepad and three prompts: *what did the operator do? what decision did it encode? what did the operator not do that the documented process says they should?* Notes are written during the shift; a 30-minute debrief follows each shift with the operator.

## Inputs

- Consent from the operator and their supervisor; this is not covert observation.
- The system description and a list of the decision points it names (the observer watches for these).
- A structured notepad template.

## Outputs

- A **shift log** per shadowed shift: one row per notable action or decision.
- A **decisions-as-performed list**: the decision points the operator made, how, on what information.
- A **workaround catalogue**: actions the documented process does not describe, with the apparent purpose of each.
- A **rate estimate**: how often the key decisions are made (per hour, per truck, per event).

## Visualisation

<div style="max-width: 900px; margin: 2rem auto;">
<svg viewBox="0 0 800 260" xmlns="http://www.w3.org/2000/svg" role="img" aria-labelledby="os-title">
  <title id="os-title">Operator shadowing — timeline of a shift with notable events marked at their occurrence times</title>
  <style>
    .os-rect { fill: var(--md-default-bg-color, #fff); stroke: var(--md-default-fg-color, #000); stroke-width: 1.4; }
    .os-line { stroke: var(--md-default-fg-color, #000); stroke-width: 1.2; fill: none; }
    .os-spine { stroke: var(--md-default-fg-color, #000); stroke-width: 2.4; fill: none; }
    .os-dot { fill: var(--md-default-fg-color, #000); }
    .os-hollow { fill: var(--md-default-bg-color, #fff); stroke: var(--md-default-fg-color, #000); stroke-width: 1.4; }
    .os-label { font: 700 12px -apple-system, sans-serif; fill: var(--md-default-fg-color, #000); }
    .os-sub { font: 400 10px -apple-system, sans-serif; fill: var(--md-default-fg-color, #000); }
    .os-tag { font: italic 10px -apple-system, sans-serif; fill: var(--md-default-fg-color, #000); text-anchor: middle; opacity: 0.8; }
  </style>
  <line class="os-spine" x1="40" y1="170" x2="760" y2="170" />
  <text class="os-sub" x="40" y="200">06:00</text>
  <text class="os-sub" x="220" y="200">09:00</text>
  <text class="os-sub" x="400" y="200">12:00</text>
  <text class="os-sub" x="580" y="200">15:00</text>
  <text class="os-sub" x="745" y="200">18:00</text>
  <circle class="os-dot" cx="120" cy="170" r="6" />
  <text class="os-sub" x="120" y="150" text-anchor="middle">slot call</text>
  <circle class="os-dot" cx="200" cy="170" r="6" />
  <text class="os-sub" x="200" y="150" text-anchor="middle">reassign</text>
  <circle class="os-hollow" cx="310" cy="170" r="6" />
  <text class="os-sub" x="310" y="150" text-anchor="middle">off-map</text>
  <text class="os-tag" x="310" y="138">workaround</text>
  <circle class="os-dot" cx="420" cy="170" r="6" />
  <text class="os-sub" x="420" y="150" text-anchor="middle">slot call</text>
  <circle class="os-hollow" cx="500" cy="170" r="6" />
  <text class="os-sub" x="500" y="150" text-anchor="middle">priority</text>
  <text class="os-tag" x="500" y="138">workaround</text>
  <circle class="os-dot" cx="620" cy="170" r="6" />
  <text class="os-sub" x="620" y="150" text-anchor="middle">reassign</text>
  <circle class="os-dot" cx="710" cy="170" r="6" />
  <text class="os-sub" x="710" y="150" text-anchor="middle">slot call</text>
  <text class="os-tag" x="400" y="240">Filled dots — documented steps. Hollow dots — workarounds not in the documented process.</text>
</svg>
</div>

*A one-shift timeline with events at their occurrence times. Workarounds (hollow) are drawn alongside documented actions (filled).*

## Anatomy

**Observer notepad.** Time-stamped, action-stamped rows. *"07:42 — call from carrier X, dispatcher immediately overrides the yard-map assignment for bay 4, reassigns to bay 2, no written note."* Plain-language, specific.

**Decisions-as-performed.** For each notable action, what decision is it encoding? *Decided: reassign bay 4 → bay 2. On the basis of: carrier priority, dispatcher's personal knowledge of the carrier lane.* The engagement later routes this kind of decision at G3.

**Workaround catalogue.** Actions the documented process doesn't describe. Each catalogued with apparent purpose. Workarounds that are common enough to catalogue are substrates in their own right; a routing decision must account for them.

**Rate estimate.** How often each key decision is made. Quieter decisions (priority override) may be rare per shift but important; frequent ones (slot call) give baseline rates for subsequent data pulls.

**Debrief.** The 30-minute conversation after the shift. The observer reads back what they saw; the operator corrects interpretation, names motivations. This is where the *why* gets recorded.

## Example

??? example "Paper trail — shadowing two freight-yard shifts"
    *G3 Q1 shadowing, two shifts. Observer: Priya (engagement team). Day 1: Tuesday morning shift with Chen. Day 2: Saturday evening shift with Martinez.*

    *Day 1, T+0 (06:15).* Priya arrives; introduces herself; confirms consent with Chen. Notepad set up with time column, action column, decision column, notes column.

    *Day 1, 07:42.* Chen receives a radio call. *"Carrier calling priority."* Chen immediately moves a magnet on the paper yard map — bay 4 to bay 2, overriding the digital assignment made 20 minutes earlier. No note typed into the system. Priya's entry: *07:42 — carrier priority call. Action: reassign bay 4 → bay 2. Basis: carrier lane importance. Not logged digitally.* Flagged as workaround.

    *Day 1, 10:15.* Priya asks Chen how often this happens. Chen: *"maybe 4–6 times a shift on busy days. Quiet days, once."* Rate estimate recorded.

    *Day 1, T+debrief (14:45).* Priya reads back: *"I counted 5 priority reassignments, 3 paperwork-delay holds, and 2 off-map moves not tied to priority."* Chen: *"the two off-map moves — those were me rearranging for a driver hours-of-service issue. If I'd held them in the assigned slot, the driver would have timed out."* Priya records: *hours-of-service accommodation — a workaround not in the documented process, purpose: avoid driver hour violation.*

    *Day 2 (Saturday evening).* Different operator, different shift rhythm. Martinez handles fewer trucks but more complex priority work — weekend carriers fight harder for slots. One event recorded: Martinez holds a truck at the gate for 22 minutes, trying three different slot reassignments before settling. The documented process has no *iterate-until-fits* step; Martinez's workaround is exactly that.

    *Debrief day 2.* Martinez: *"on weekends, the yard map's digital version is stale by 30 minutes because the week-shift manager leaves early. I rely on radio."* Staleness recorded; a known-uncovered issue for the engagement.

    *Aggregate output.* Two shift logs, 11 decisions documented, 7 workarounds catalogued. Key finding: *off-map moves for driver-hours and paperwork accommodation are recurring workarounds not in the documented system description.* The G3 routing for the allocator must decide how the piece handles these two classes of workaround — the piece's recommendations will otherwise conflict with the workarounds, and the dispatcher will override, consistently.

## Pitfalls

**Observer interprets instead of records.** *"Operator seemed stressed"* is interpretation. *"Operator radioed three times in two minutes; voice audibly raised"* is observation. Interpretation happens at the debrief.

**One shift only.** A single shift reflects the day's conditions and the operator's quirks. The engagement needs at least two shifts, ideally with different operators and on different days, before conclusions are drawn.

**Covert shadowing.** Observing without consent is a method failure, not a shortcut. Observation changes behaviour in the first hour and settles; this is cheaper than the trust cost of covert work.

**Treating workarounds as deviance.** Workarounds are where the documented process has fallen out of alignment with reality. The shadowing exercise makes them visible so the engagement can decide whether to honour them (design the piece around them) or surface them (challenge the documented process). *Eliminating* them is rarely the right choice.

**Shadowing as data collection without debrief.** Without the debrief, the observer's interpretations are uncorrected. The debrief is half the method.

## When not to use

- Engagements where the documented process is demonstrably followed and workarounds are absent. Rare in practice.
- Fully automated pipelines with no operator in the loop. The analogue is system observability and log pulls.

## Provenance

The shadowing method is grounded in ethnographic workplace studies, with Suchman's *Plans and Situated Actions* [1] as the canonical treatment. Within industrial engineering, the method underpins the *work-as-done* analyses reviewed by Hollnagel [2]. Service design and HCI practice use the same pattern under the label of *contextual inquiry* [3].

## Related tools

- **System description (G1).** The documented process against which workarounds are identified.
- **Time-and-motion records.** Quantifies what shadowing observes.
- **SIPOC.** A compressed view often drawn alongside the shift log for the same process.

## Verification

[1] Suchman L. *Plans and Situated Actions: The Problem of Human-Machine Communication*. Cambridge University Press; 1987. **[verified]** The canonical ethnographic treatment of situated work.

[2] Hollnagel E. *Safety-I and Safety-II: The Past and Future of Safety Management*. Ashgate; 2014. **[verified]** Reviews work-as-done methods including shadowing.

[3] Beyer H, Holtzblatt K. *Contextual Design: Defining Customer-Centered Systems*. Morgan Kaufmann; 1998. **[verified]** The contextual-inquiry method in HCI practice.
