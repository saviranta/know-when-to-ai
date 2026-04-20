# Toolkit — Value-stream mapping (VSM)

*Gate: G3 Route (Q1 operational observation). Category: observation substrate.*

## What problem it solves

Operational processes are composed of value-adding steps, necessary non-value-adding steps (transport, inspection, handoff), and waste. A routing decision that targets a value-adding step with AI may accelerate work that adds value; a routing decision that targets waste eliminates work that should not exist in the first place. Value-stream mapping classifies every step along the flow into value, necessary-non-value, or waste, so the engagement routes against the correct class.

## How it is used

A **half-day workshop** (4 hours) with a cross-functional team that has collectively done the work. The group walks the entire flow from the customer's trigger (order placed, truck arrives, claim filed) to the customer's outcome (goods delivered, truck released, claim settled), writing every step on a sticky note. Each step is annotated with: *duration, wait time after, who does it, what substrate it uses, and — critically — its class*: value, necessary-non-value, waste. The map is photographed and attached to the G3 output.

## Inputs

- System description.
- Time-and-motion records for the most-sampled steps.
- A team with end-to-end coverage — usually impossible with fewer than 4 functions in the room.
- A large wall with tape for the map.

## Outputs

- A **value-stream map**: a horizontal flow of steps with durations, waits, and class tags.
- **Ratio statistics**: value time / total time (the *process cycle efficiency*), waste time / total time, and equivalent cuts per step class.
- **Routing candidates**: steps that are waste (for elimination), steps that are necessary-non-value with high duration (for automation), and steps that are value but slow (for AI augmentation).
- **Elimination notes**: waste steps whose removal does not require AI at all — often the most impactful G3 output.

## Visualisation

<div style="max-width: 900px; margin: 2rem auto;">
<svg viewBox="0 0 800 280" xmlns="http://www.w3.org/2000/svg" role="img" aria-labelledby="vs-title">
  <title id="vs-title">Value-stream map — horizontal flow of boxes and waits with value/non-value/waste classifications</title>
  <style>
    .vs-rect { fill: var(--md-default-bg-color, #fff); stroke: var(--md-default-fg-color, #000); stroke-width: 1.4; }
    .vs-fill { fill: var(--md-default-fg-color, #000); opacity: 0.15; stroke: var(--md-default-fg-color, #000); stroke-width: 1.4; }
    .vs-dash { fill: var(--md-default-bg-color, #fff); stroke: var(--md-default-fg-color, #000); stroke-width: 1.2; stroke-dasharray: 3,3; }
    .vs-line { stroke: var(--md-default-fg-color, #000); stroke-width: 1.2; fill: none; }
    .vs-label { font: 700 11px -apple-system, sans-serif; fill: var(--md-default-fg-color, #000); text-anchor: middle; }
    .vs-sub { font: 400 10px -apple-system, sans-serif; fill: var(--md-default-fg-color, #000); text-anchor: middle; }
    .vs-tag { font: italic 10px -apple-system, sans-serif; fill: var(--md-default-fg-color, #000); text-anchor: middle; opacity: 0.8; }
  </style>
  <rect class="vs-rect" x="20" y="80" width="100" height="50" />
  <text class="vs-label" x="70" y="100">Check-in</text>
  <text class="vs-sub" x="70" y="115">V 40s</text>
  <rect class="vs-dash" x="140" y="90" width="60" height="30" />
  <text class="vs-sub" x="170" y="109">wait 5m</text>
  <rect class="vs-rect" x="220" y="80" width="100" height="50" />
  <text class="vs-label" x="270" y="100">Slot assign</text>
  <text class="vs-sub" x="270" y="115">V 140s</text>
  <rect class="vs-dash" x="340" y="90" width="60" height="30" />
  <text class="vs-sub" x="370" y="109">wait 8m</text>
  <rect class="vs-fill" x="420" y="80" width="100" height="50" />
  <text class="vs-label" x="470" y="100">Reassign</text>
  <text class="vs-sub" x="470" y="115">W 320s</text>
  <rect class="vs-dash" x="540" y="90" width="60" height="30" />
  <text class="vs-sub" x="570" y="109">wait 3m</text>
  <rect class="vs-rect" x="590" y="80" width="100" height="50" />
  <text class="vs-label" x="640" y="100">Dock-door</text>
  <text class="vs-sub" x="640" y="115">NV 120s</text>
  <rect class="vs-rect" x="710" y="80" width="80" height="50" />
  <text class="vs-label" x="750" y="100">Unload</text>
  <text class="vs-sub" x="750" y="115">V 25m</text>
  <line class="vs-line" x1="120" y1="105" x2="140" y2="105" />
  <line class="vs-line" x1="200" y1="105" x2="220" y2="105" />
  <line class="vs-line" x1="320" y1="105" x2="340" y2="105" />
  <line class="vs-line" x1="400" y1="105" x2="420" y2="105" />
  <line class="vs-line" x1="520" y1="105" x2="540" y2="105" />
  <line class="vs-line" x1="600" y1="105" x2="590" y2="105" />
  <line class="vs-line" x1="690" y1="105" x2="710" y2="105" />
  <text class="vs-sub" x="400" y="180">V = value · NV = necessary non-value · W = waste</text>
  <text class="vs-sub" x="400" y="200">Process cycle efficiency: value-time ÷ total-time</text>
  <text class="vs-tag" x="400" y="230">The reassign step — shaded as waste — is the routing candidate for elimination, not automation.</text>
</svg>
</div>

*A value-stream map flows left to right: step boxes alternate with dashed *wait* boxes. Shaded boxes are classified as waste; the two adjacent dashed boxes are wait time.*

## Anatomy

**Steps.** Each step is one sticky note with a duration, a step name, and a class tag. *V* (value — customer pays for it), *NV* (necessary non-value — required but not customer-valued, like handoffs and inspections), *W* (waste — fixable).

**Waits.** Between steps. Often dominate the total cycle time. The eight classical wastes (TIM WOODS: transport, inventory, motion, waiting, over-production, over-processing, defects, skills underused) cover most of what waits represent.

**Classes.** The classification is the argumentative part. The team argues whether *reassignment* is waste (it shouldn't happen if the initial assignment were right) or NV (it's response to new information). The argument itself is valuable — it surfaces assumptions about the process.

**Process cycle efficiency.** Value time divided by total time. In freight-yard operations it is often <10%; in design work it is often <3%. The number's absolute value matters less than the direction it points: most of the cycle is not value.

**Routing candidates.** Waste steps → eliminate (G3 often routes these away from AI entirely — they are non-AI cuts). NV steps → automate (rules, scripts, classical ML may fit). V steps → augment (AI in support of the human judgement).

## Example

??? example "Paper trail — freight-yard value-stream map"
    *G3 Q1 half-day workshop. Attendees: Priya (allocator), Raj (ops), Chen (dispatcher), Lee (dock operator), Amira (carrier relations), Jin (dock solver lead). Chair: Ada.*

    *T+0 — customer triggers.* Ada: *"what triggers the flow?"* Amira: *"carrier sends us a booking; truck arrives at our gate."* Two possible starts; team chooses *truck arrives at gate* as the stream's start.

    *T+25 — first pass at steps.* Stickies go up: check-in (40s), wait (5m), slot assign (142s), wait (8m), reassignment event (320s, not every truck), wait (3m), dock-door coordination (120s), wait (zero or substantial), unload (25m), paperwork sign-off (90s), gate-out (20s). Total cycle time: variable; busy-day median 62 min, quiet-day 44 min.

    *T+90 — classify.* Check-in: V. Slot assign: V (locates the truck). Reassignment: argument — Chen says NV (priority changes happen, need to respond), Jin says W (if the initial assign had priority embedded, reassignment wouldn't happen). Compromise: tagged W with a note, *"waste in an ideal flow; NV in current substrate."* Dock-door coordination: NV. Unload: V. Paperwork sign-off: V (regulatory requirement). Gate-out: NV.

    *T+140 — waits.* The 8-minute wait between slot assign and reassignment is consistent across shifts. Lee: *"drivers are sitting in the yard without knowing where to go."* Ada: *"that wait is the observation from the framed paragraph. Half of the 16-minute growth is in this one wait."*

    *T+180 — process cycle efficiency.* Total cycle: 62 min. Value time: ~28 min (unload, check-in, slot assign, paperwork). PCE: 45%. Raj: *"high for freight. The unload is most of it."* Ada: *"right — exclude unload, because it's not where the engagement's question lives. Of the orchestration steps — check-in through dock-door — PCE is about 22%."*

    *T+210 — routing candidates.* Three candidates surface: (1) reassignment-as-waste — remove by improving initial assignment (this is where the allocator piece lives); (2) the 8-minute wait — remove by faster assignment handoff (largely non-AI, a radio-protocol change); (3) priority arbitration — augment with AI support (the defensible-call JTBD job).

    *T+240 — close.* Map photographed. Three routing candidates written on the G3 routing map. Key finding: half of the engagement's observed delay is in a single wait, whose fix is partly non-AI.

## Pitfalls

**Mapping what should happen.** Under pressure to move fast, the team maps the documented flow. The value-stream map only works when it maps the observed flow — waits and workarounds included.

**No customer trigger.** A map that starts with *"planning"* or *"intake"* without naming the customer action that triggered planning loses the thread. Start from the customer's observable trigger.

**Class consensus too easily.** If every step is classified in 30 seconds, the team isn't arguing. The classification is the discipline; forcing the argument is the chair's job.

**Routing every step to automation.** Not every NV step should be automated. Some should be eliminated (the step shouldn't exist). Some should be left alone (they are cheap in absolute terms). The map informs, not prescribes.

**Single-session mapping as complete.** A map drawn in one afternoon captures the team's view; a two-week shadowing observation is needed to verify it against what actually happens. The map is a hypothesis until verified.

## When not to use

- Processes with no meaningful flow (pure batch analysis, one-step decisions). The map is trivial.
- Engagements targeting a specific algorithmic improvement where the flow context is already well understood.

## Provenance

Value-stream mapping was formalised at Toyota and introduced to Western engineering in Rother and Shook's *Learning to See* [1]. The eight wastes are documented in Ohno's *Toyota Production System* [2]. The service-industry adaptation is covered in Womack and Jones [3].

## Related tools

- **System description.** Names the steps; VSM classifies and times them.
- **Time-and-motion records.** Provides the durations that fill in the map.
- **SIPOC.** Compressed sibling — gateways rather than step-by-step.

## Verification

[1] Rother M, Shook J. *Learning to See: Value-Stream Mapping to Create Value and Eliminate Muda*. Lean Enterprise Institute; 1999. **[verified]** The canonical treatment of VSM in the English literature.

[2] Ohno T. *Toyota Production System: Beyond Large-Scale Production*. Productivity Press; 1988 (orig. 1978, Japanese). **[verified]** The foundational treatment of the eight wastes.

[3] Womack JP, Jones DT. *Lean Thinking: Banish Waste and Create Wealth in Your Corporation*. 2nd ed. Free Press; 2003. **[verified]** The service-industry adaptation.
