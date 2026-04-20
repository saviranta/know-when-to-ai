# Toolkit — Stakeholder map

*Gate: G1 Observe. Category: framing artefact.*

## What problem it solves

A framed problem with no named stakeholders has no one to be accountable to and no one whose voice must be heard. The map forces the engagement to list — concretely — who is affected, who has authority, and who sees the consequences. Without the list, later gates quietly narrow the stakeholder set to whoever happens to be in the room; the people left off the map pay the cost of decisions they never knew were being made.

## How it is used

A **45-minute G1 workshop** alongside or immediately after the framed problem paragraph. The chair draws a two-axis grid (*power* × *affected-by*) or a three-ring diagram (*in the process* / *served by the process* / *bystanders*) and lets the group populate it with specific names or roles. Revisited at G3 (routing) and G5 (rollback triggers must be reviewable by the named stakeholders).

## Inputs

- The framed problem paragraph (slot 1 names the unit; the map names who touches it).
- Organisational roster for the relevant functions.
- Practitioner accounts of *who actually shows up when this process runs* — often different from the org chart.

## Outputs

- A **map** with specific entries: roles or people, position on the axes.
- A **voice-column note** for each entry: how their view enters the engagement (workshop attendee, interview subject, written input, not-consulted-by-design).
- A **flagged absence list**: stakeholders identified as affected but not represented in the engagement, with the explicit reason.

## Visualisation

<div style="max-width: 800px; margin: 2rem auto;">
<svg viewBox="0 0 800 320" xmlns="http://www.w3.org/2000/svg" role="img" aria-labelledby="sm-title">
  <title id="sm-title">Stakeholder map — two-axis grid with power and affected-by, stakeholder dots positioned with role labels</title>
  <style>
    .sm-rect { fill: var(--md-default-bg-color, #fff); stroke: var(--md-default-fg-color, #000); stroke-width: 1.2; }
    .sm-line { stroke: var(--md-default-fg-color, #000); stroke-width: 1.4; fill: none; }
    .sm-thin { stroke: var(--md-default-fg-color, #000); stroke-width: 0.6; fill: none; stroke-dasharray: 2,2; }
    .sm-dot { fill: var(--md-default-fg-color, #000); }
    .sm-hollow { fill: var(--md-default-bg-color, #fff); stroke: var(--md-default-fg-color, #000); stroke-width: 1.4; }
    .sm-label { font: 700 12px -apple-system, sans-serif; fill: var(--md-default-fg-color, #000); }
    .sm-sub { font: 400 11px -apple-system, sans-serif; fill: var(--md-default-fg-color, #000); }
    .sm-tag { font: italic 10px -apple-system, sans-serif; fill: var(--md-default-fg-color, #000); text-anchor: middle; opacity: 0.8; }
  </style>
  <line class="sm-line" x1="100" y1="270" x2="720" y2="270" />
  <line class="sm-line" x1="100" y1="40" x2="100" y2="270" />
  <text class="sm-label" x="50" y="150" transform="rotate(-90 50 150)">Power →</text>
  <text class="sm-label" x="400" y="300" text-anchor="middle">Affected by the process →</text>
  <line class="sm-thin" x1="410" y1="40" x2="410" y2="270" />
  <line class="sm-thin" x1="100" y1="155" x2="720" y2="155" />
  <text class="sm-sub" x="250" y="30" text-anchor="middle">low-affected · high-power</text>
  <text class="sm-sub" x="570" y="30" text-anchor="middle">high-affected · high-power</text>
  <text class="sm-sub" x="250" y="293" text-anchor="middle">low-affected · low-power</text>
  <text class="sm-sub" x="570" y="293" text-anchor="middle">high-affected · low-power</text>
  <circle class="sm-dot" cx="260" cy="80" r="7" />
  <text class="sm-sub" x="275" y="84">VP Ops (sponsor)</text>
  <circle class="sm-dot" cx="560" cy="100" r="7" />
  <text class="sm-sub" x="575" y="104">Carrier-relations lead</text>
  <circle class="sm-dot" cx="610" cy="210" r="7" />
  <text class="sm-sub" x="625" y="214">Dock operators</text>
  <circle class="sm-hollow" cx="660" cy="240" r="7" />
  <text class="sm-sub" x="620" y="258">Drivers (not in room)</text>
  <circle class="sm-dot" cx="470" cy="180" r="7" />
  <text class="sm-sub" x="485" y="184">Dispatcher</text>
  <circle class="sm-dot" cx="200" cy="220" r="7" />
  <text class="sm-sub" x="215" y="224">IT ops</text>
</svg>
</div>

*Dots are represented stakeholders; hollow circles are flagged absences — stakeholders identified but not consulted, each with a recorded reason.*

## Anatomy

**Axes.** *Power* is the authority to change the process or veto changes. *Affected-by* is the degree to which the process's outputs land on them. The two axes together produce four quadrants; the top-right (high-power, high-affected) is the engagement's natural governance set, and the bottom-right (low-power, high-affected) is the group most often missed.

**Entries.** Specific roles or people, not functions. *"The night-shift dispatcher team (12 people)"* is better than *"dispatch."* Specificity matters because the voice column has to say *how we hear this person.*

**Voice column.** How each entry's view enters the engagement. Options: *in the workshop, via interview, via written submission, via representative, not consulted — because [reason].* The not-consulted-by-design category is where the map earns its keep; it forces an explicit justification.

**Flagged absences.** Stakeholders named but not represented. Drawn as hollow circles. The absence is recorded *with the reason* (*drivers work for third-party carriers; consultation not possible within engagement timeline*) and carried into G3 so routing decisions account for the unheard voice.

## Example

??? example "Paper trail — mapping the freight-yard stakeholders"
    *G1 workshop, 50 minutes, following the framed paragraph. Chair: Ada. Sponsor: VP Ops. Practitioners: Raj, Priya.*

    *T+0 — populate.* Ada draws the axes. The sponsor populates high-power: VP Ops (himself), carrier-relations lead, IT ops director. Raj adds dispatcher (mid-power, high-affected), dock operators (low-power, high-affected).

    *T+15 — the drivers.* Ada: *"drivers are the highest-affected group on the map. Who speaks for them?"* Raj: *"drivers work for third-party carriers. We don't employ them."* Ada: *"so they are high-affected and we have no voice for them in the engagement."* Hollow circle drawn. Reason recorded: *drivers are third-party; carrier-relations lead carries a partial proxy, but the driver perspective is formally absent.*

    *T+25 — voice column.* Ada walks the map entry by entry. VP Ops: workshop. Carrier-relations lead: workshop + represents carrier perspective. Dispatcher: interview (two of the 12; scheduled week 2). Dock operators: shadowing (four shifts; scheduled week 3). IT ops: written input. Drivers: flagged absent.

    *T+40 — the dispatcher's quadrant moves.* After the workshop, Ada reads back: *"you've placed dispatchers at mid-power. Raj, is that right, or can dispatchers block the allocator?"* Raj: *"they can route around it by calling slots on radio. So — more power than mid."* Dispatcher dot moves up. The engagement's routing must account for dispatcher workaround capacity; this becomes a G3 note.

    *T+50 — close.* Map photographed. Voice column written. Two flagged absences (drivers, smaller regional carriers not represented by the carrier-relations lead). The map is attached to the framed paragraph and carried forward.

    **At G5.** The commitment page's review cadence has to include dispatcher input (they can route around the piece) and must produce a written summary readable by carrier-relations (who speaks for the carriers). The stakeholder map is the index the cadence is built against.

## Pitfalls

**Org-chart laziness.** The map mirrors the reporting hierarchy. Some of the most important stakeholders don't appear on the org chart (customers, regulators, frontline staff in functions reporting elsewhere).

**Role without name.** *"Dispatcher"* is enough as a label on the map but not enough as voice. The voice column needs *which dispatchers,* *on what shifts,* *scheduled when.*

**Filing absences quietly.** The hollow circles are the map's most important entries. A hollow circle without a reason is a map that has pretended to consider the absence. The reason is the audit artefact.

**Treating the map as done.** The map is re-read at G3 and G5. A stakeholder whose affected-by status has grown during the engagement (because of a routing choice) needs to be re-mapped, not assumed stable.

**Power-as-authority only.** Power is also *power to refuse, to work around, to sabotage.* Dock operators on strike are high-power in the blast window, whatever the org chart says. The map has to account for operational power, not just decisional.

## When not to use

- One-person engagements where the framed paragraph involves only the practitioner. The map is a single entry.
- Repeat engagements where the stakeholder map from the prior engagement is still current. Re-read; do not re-draw.

## Provenance

Freeman's *Strategic Management: A Stakeholder Approach* [1] is the canonical treatment of stakeholder analysis in strategy. The participation ladder of Arnstein [2] classifies stakeholder consultation quality from tokenism to full partnership and is the source of the voice-column discipline. Within requirements engineering, Glinz and Wieringa [3] document stakeholder mapping as a requirements-elicitation practice.

## Related tools

- **Framed problem paragraph.** Slot 1 names the unit; the map names who touches it.
- **System description.** Names what the stakeholders touch.
- **Bow-tie analysis.** Barriers are owned by stakeholders from the map.

## Verification

[1] Freeman RE. *Strategic Management: A Stakeholder Approach*. Pitman; 1984. **[verified]** The canonical treatment of stakeholder theory in strategy.

[2] Arnstein SR. A ladder of citizen participation. *Journal of the American Institute of Planners*. 1969;35(4):216–24. **[verified]** The participation-quality ladder that the voice column generalises.

[3] Glinz M, Wieringa RJ. Stakeholders in requirements engineering. *IEEE Software*. 2007;24(2):18–20. **[verified]** Documents stakeholder mapping within requirements elicitation.
