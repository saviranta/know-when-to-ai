# Toolkit — System description

*Gate: G1 Observe. Category: framing artefact.*

## What problem it solves

A framed problem names *what* is wrong; a stakeholder map names *who* is touched. Neither says *how the thing actually works right now.* Without a system description, G2's decomposition invents its own picture of the system, and G3 routes pieces against that invented picture. The description forces one accurate diagram of the current state — inputs, flows, decision points, hand-offs, substrates — before anyone proposes to change it.

## How it is used

A **60–90 minute G1 walk-through**, with one practitioner narrating the current process while the chair draws. The output is a single-page diagram and a one-page written companion. The description is *as-is*, not *to-be*. Revisited at G3 to identify the decision points that routing will assign to, and at G4 to identify the substrates the piece's rollback path reverts to.

## Inputs

- Framed problem paragraph and stakeholder map.
- A practitioner who performs the process end-to-end (or two who together cover it).
- Access to the systems, dashboards, and artefacts the process touches.

## Outputs

- A **single-page diagram** of the current process: inputs, steps, decision points, hand-offs, outputs.
- A **written companion** naming each decision point, who makes it, and on what information.
- A **substrate inventory**: the rule-sets, dashboards, spreadsheets, and scripts the process depends on today. These become candidate rollback substrates at G4.
- Flagged items where the practitioner's description and the documented process disagree — the *work-as-done* versus *work-as-imagined* gap.

## Visualisation

<div style="max-width: 900px; margin: 2rem auto;">
<svg viewBox="0 0 800 260" xmlns="http://www.w3.org/2000/svg" role="img" aria-labelledby="sy-title">
  <title id="sy-title">System description — inputs flowing through steps and a decision diamond to outputs, with substrate callouts beneath</title>
  <style>
    .sy-rect { fill: var(--md-default-bg-color, #fff); stroke: var(--md-default-fg-color, #000); stroke-width: 1.4; }
    .sy-dash { fill: var(--md-default-bg-color, #fff); stroke: var(--md-default-fg-color, #000); stroke-width: 1.2; stroke-dasharray: 4,3; }
    .sy-diamond { fill: var(--md-default-bg-color, #fff); stroke: var(--md-default-fg-color, #000); stroke-width: 1.4; }
    .sy-line { stroke: var(--md-default-fg-color, #000); stroke-width: 1.2; fill: none; }
    .sy-arrow { fill: var(--md-default-fg-color, #000); }
    .sy-label { font: 700 12px -apple-system, sans-serif; fill: var(--md-default-fg-color, #000); text-anchor: middle; }
    .sy-sub { font: 400 10px -apple-system, sans-serif; fill: var(--md-default-fg-color, #000); text-anchor: middle; }
    .sy-tag { font: italic 10px -apple-system, sans-serif; fill: var(--md-default-fg-color, #000); text-anchor: middle; opacity: 0.8; }
  </style>
  <defs><marker id="sy-a" markerWidth="9" markerHeight="9" refX="8" refY="4.5" orient="auto"><path d="M0,0 L8,4.5 L0,9 z" class="sy-arrow"/></marker></defs>
  <rect class="sy-rect" x="20" y="70" width="100" height="45" />
  <text class="sy-label" x="70" y="92">Input</text>
  <text class="sy-sub" x="70" y="107">truck arrives</text>
  <rect class="sy-rect" x="160" y="70" width="100" height="45" />
  <text class="sy-label" x="210" y="92">Step</text>
  <text class="sy-sub" x="210" y="107">radio check-in</text>
  <polygon class="sy-diamond" points="360,92 420,55 480,92 420,129" />
  <text class="sy-label" x="420" y="90">Decision</text>
  <text class="sy-sub" x="420" y="105">slot free?</text>
  <rect class="sy-rect" x="520" y="30" width="100" height="45" />
  <text class="sy-label" x="570" y="52">Step</text>
  <text class="sy-sub" x="570" y="67">assign slot</text>
  <rect class="sy-rect" x="520" y="110" width="100" height="45" />
  <text class="sy-label" x="570" y="132">Step</text>
  <text class="sy-sub" x="570" y="147">hold + radio</text>
  <rect class="sy-rect" x="680" y="70" width="100" height="45" />
  <text class="sy-label" x="730" y="92">Output</text>
  <text class="sy-sub" x="730" y="107">truck to bay</text>
  <line class="sy-line" x1="120" y1="92" x2="160" y2="92" marker-end="url(#sy-a)" />
  <line class="sy-line" x1="260" y1="92" x2="360" y2="92" marker-end="url(#sy-a)" />
  <line class="sy-line" x1="480" y1="88" x2="520" y2="55" marker-end="url(#sy-a)" />
  <line class="sy-line" x1="480" y1="96" x2="520" y2="132" marker-end="url(#sy-a)" />
  <line class="sy-line" x1="620" y1="52" x2="680" y2="85" marker-end="url(#sy-a)" />
  <line class="sy-line" x1="620" y1="132" x2="680" y2="99" marker-end="url(#sy-a)" />
  <rect class="sy-dash" x="160" y="175" width="100" height="40" />
  <text class="sy-sub" x="210" y="195">carrier feed</text>
  <text class="sy-tag" x="210" y="210">substrate</text>
  <rect class="sy-dash" x="360" y="175" width="120" height="40" />
  <text class="sy-sub" x="420" y="195">yard map (paper)</text>
  <text class="sy-tag" x="420" y="210">substrate</text>
  <rect class="sy-dash" x="520" y="175" width="100" height="40" />
  <text class="sy-sub" x="570" y="195">radio log</text>
  <text class="sy-tag" x="570" y="210">substrate</text>
  <line class="sy-line" x1="210" y1="115" x2="210" y2="175" />
  <line class="sy-line" x1="420" y1="130" x2="420" y2="175" />
  <line class="sy-line" x1="570" y1="155" x2="570" y2="175" />
</svg>
</div>

*Solid boxes: steps and decisions in the current process. Dashed boxes: substrates each step depends on. The lines trace material flow; the verticals trace substrate dependencies.*

## Anatomy

**Inputs and outputs.** What enters the process (a truck, a carrier feed, an operator request) and what leaves it (a slot assignment, a dispatched allocation). Named in the substrate's own language.

**Steps.** Atomic actions, each performed by a named role or system. *"Dispatcher checks the yard map and radios the driver"* is a step; *"truck arrives"* is an input event.

**Decision points.** Places where the process branches based on the input's state. Drawn as diamonds. *"Is the slot free?"* *"Does the carrier have priority status?"* Each decision point is a candidate for routing at G3.

**Hand-offs.** Transitions from one role or system to another. Hand-offs are where information is lost, re-formatted, or delayed; they are the reliable residence of slowness and error.

**Substrates.** The artefacts the process depends on: rule-sets, spreadsheets, scripts, dashboards, paper forms. Inventoried because they will appear at G4 as candidate rollback substrates. *"The slot-assignment step uses a paper yard map; the map is updated on the fly by the dispatcher."*

**Work-as-done vs. work-as-imagined.** Practitioners describing the process often name steps that are not in the documented procedure, and skip steps that are. The gap is flagged; it is not a bug — it is evidence of where the documented process has already fallen out of alignment.

## Example

??? example "Paper trail — describing the freight-yard system"
    *G1 walk-through, 75 minutes. Practitioner: Raj. Chair: Ada. Observer: Priya.*

    *T+0 — inputs and outputs.* Ada: *"what comes into this process?"* Raj: *"trucks. The carrier feed tells us roughly when each truck will arrive."* Ada draws *carrier feed* + *truck arrival* as inputs. Outputs: *truck to bay* + *radio confirmation*.

    *T+15 — steps.* Raj walks through a typical truck: radio check-in → dispatcher looks at yard map → dispatcher decides slot → radio back the assignment. Ada draws four steps and one decision diamond.

    *T+30 — the paper yard map.* Raj: *"the yard map is a paper board with magnets. The dispatcher moves magnets as trucks come and go."* Ada: *"that is a substrate. Is the map authoritative, or is there a digital copy?"* Raj: *"the paper is authoritative. There is a digital copy in the yard management system, but it lags."* Ada notes the substrate; flags the lag as a potential rollback issue.

    *T+45 — work-as-done gap.* Ada: *"how often do dispatchers go off-map?"* Raj: *"all the time. A carrier calls for priority, a driver is short on hours, someone negotiates a swap. The map shows the plan; the radio carries the reality."* Ada flags the gap: *work-as-imagined is the map; work-as-done is the radio.* The allocator piece, if it relies on the map alone, will be out of step with the radio-level reality.

    *T+60 — substrate inventory.* Three substrates: carrier feed, yard map (paper), radio log. Each annotated with who owns it, how often it updates, and whether it is a candidate rollback substrate (paper map: candidate; radio log: not — no structured read).

    *T+75 — close.* Diagram photographed, written companion drafted. The dispatcher-radio workaround becomes a G3 note about routing: the allocator cannot assume the yard map alone is ground truth.

## Pitfalls

**As-is drifts to to-be.** The practitioner describes the process *as it should be*. The chair has to keep asking *is that what actually happens on a Tuesday?* The value of the description is its fidelity to current state.

**Missing substrates.** The most load-bearing substrates are the ones nobody mentions — the paper form at the end of the shift, the spreadsheet on one person's laptop, the Slack channel where decisions get confirmed. Ask *what does this step write to? what does the next step read from?* and the substrate appears.

**Box-and-arrow illusion.** A clean diagram suggests a clean process. If the practitioner's narration is messier than the diagram, the diagram is lying. Annotate the messy parts.

**Decision points as implementation details.** Decision points are the engagement's most valuable features — they are candidates for routing at G3. Skipping them because they seem like internal mechanics is the routing's loss.

**Diagrams without the written companion.** The diagram compresses; the companion names who makes each decision, on what. Without the companion, later readers reinterpret the diagram to match their own mental model.

## When not to use

- Engagements where the process is already well-documented in a current, trusted source. Read the document; confirm its accuracy with one practitioner; do not redraw.
- Pure greenfield engagements where no current process exists. The system description is thin; the engagement's first output *is* the system.

## Provenance

The discipline of *as-is* mapping before *to-be* design is foundational in process engineering, documented in the IDEF0 standard [1] for functional modelling. The distinction between work-as-done and work-as-imagined is Hollnagel's contribution to resilience engineering [2]. SIPOC, covered separately in this toolkit, is a reduced form of the system description used at G3 when the G1 walk-through has already been done.

## Related tools

- **Framed problem paragraph.** Names what the system is failing to do.
- **Stakeholder map.** Names who touches which step of the system.
- **SIPOC (G3).** A compressed as-is view when a routing-stage description is needed.
- **Value-stream mapping (G3).** The G3 analogue for pieces whose routing is operational.

## Verification

[1] Integration DEFinition (IDEF) 0 Function Modeling. FIPS Publication 183. National Institute of Standards and Technology; 1993. **[verified]** The IDEF0 standard for as-is and to-be functional modelling.

[2] Hollnagel E. *Safety-I and Safety-II: The Past and Future of Safety Management*. Ashgate; 2014. **[verified]** Names the work-as-done / work-as-imagined distinction and its consequences for system design.
