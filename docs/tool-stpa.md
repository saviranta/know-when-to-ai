# Toolkit — STPA (Systems-Theoretic Process Analysis)

*Gate: G3 Route (Q3b). Category: controls-derivation lens.*

## What problem it solves

Some pieces produce their hazards through coordination between controllers — a model interacting with an operator interacting with a downstream system — not through a single failing part. Bow-tie or brainstorming misses these hazards because there is no single event to anchor on. STPA derives the controls from the system's *control structure*, so each control has a traceable provenance back to a specific unsafe control action.

## How it is used

**Two or three facilitated workshop sessions**, four to twelve hours in total, across a week or two. Not a single whiteboard meeting — the method has a real learning curve and benefits from a practitioner leading the room. Session 1: draw the control structure and list the losses the engagement must avoid. Session 2: enumerate unsafe control actions (UCAs) per control action. Session 3: derive loss scenarios and write safety constraints. For ongoing systems, the same structure is revisited longitudinally as operational data accumulates — STPA artefacts are living documents, not frozen deliverables.

## Inputs

- A routed piece and a draft of its control relationships — who issues what to whom, and what feedback returns.
- A list of **losses** the engagement must avoid, each stated as what must not happen (e.g., *a driver dispatched to a dock they cannot unload at*).
- An owner list for each controller in the structure.
- A practitioner-level facilitator with STPA experience (or allow extra sessions for the team to learn as they go).

## Outputs

- A one-page **control-structure diagram** (controllers, controlled processes, control actions, feedback).
- A **UCA table**: unsafe control actions per control action, each written with context.
- A list of **loss scenarios** explaining *why* each UCA could occur.
- A list of **safety constraints** — each one becomes a control on the commitment page, each traceable back through a loss scenario, UCA, and control action to a named loss.
- **Trigger-metric candidates** — the observable conditions that indicate a UCA has occurred — direct input to G5 trigger design.

## Visualisation

<div style="max-width: 700px; margin: 2rem auto;">
<svg viewBox="0 0 700 380" xmlns="http://www.w3.org/2000/svg" role="img" aria-labelledby="stpa-title">
  <title id="stpa-title">STPA control structure: controllers issue control actions downward; controlled processes return feedback upward; UCAs are enumerated at each control action</title>
  <style>
    .st-rect { fill: var(--md-default-bg-color, #fff); stroke: var(--md-default-fg-color, #000); stroke-width: 1.4; }
    .st-dash { fill: var(--md-default-bg-color, #fff); stroke: var(--md-default-fg-color, #000); stroke-width: 1.2; stroke-dasharray: 4,3; }
    .st-line { stroke: var(--md-default-fg-color, #000); stroke-width: 1.2; fill: none; }
    .st-arrow { fill: var(--md-default-fg-color, #000); }
    .st-label { font: 700 12px -apple-system, BlinkMacSystemFont, sans-serif; fill: var(--md-default-fg-color, #000); text-anchor: middle; }
    .st-sub { font: italic 10px -apple-system, sans-serif; fill: var(--md-default-fg-color, #000); text-anchor: middle; opacity: 0.85; }
    .st-tag { font: 600 10px -apple-system, sans-serif; fill: var(--md-default-fg-color, #000); text-anchor: middle; }
  </style>
  <defs>
    <marker id="sta-arrow" markerWidth="9" markerHeight="9" refX="8" refY="4.5" orient="auto">
      <path d="M0,0 L8,4.5 L0,9 z" class="st-arrow"/>
    </marker>
  </defs>
  <rect class="st-rect" x="180" y="20" width="280" height="50" />
  <text class="st-label" x="320" y="43">Controller A</text>
  <text class="st-sub" x="320" y="60">(e.g. operator, policy)</text>
  <rect class="st-rect" x="180" y="150" width="280" height="50" />
  <text class="st-label" x="320" y="173">Controller B</text>
  <text class="st-sub" x="320" y="190">(e.g. model, automation)</text>
  <rect class="st-rect" x="180" y="280" width="280" height="50" />
  <text class="st-label" x="320" y="303">Controlled Process</text>
  <text class="st-sub" x="320" y="320">(e.g. dispatch, yard)</text>
  <line class="st-line" x1="260" y1="70" x2="260" y2="146" marker-end="url(#sta-arrow)" />
  <text class="st-tag" x="220" y="105">control</text>
  <text class="st-tag" x="220" y="118">action</text>
  <line class="st-line" x1="380" y1="150" x2="380" y2="74" marker-end="url(#sta-arrow)" />
  <text class="st-tag" x="420" y="115">feedback</text>
  <line class="st-line" x1="260" y1="200" x2="260" y2="276" marker-end="url(#sta-arrow)" />
  <text class="st-tag" x="220" y="235">control</text>
  <text class="st-tag" x="220" y="248">action</text>
  <line class="st-line" x1="380" y1="280" x2="380" y2="204" marker-end="url(#sta-arrow)" />
  <text class="st-tag" x="420" y="245">feedback</text>
  <rect class="st-dash" x="490" y="150" width="190" height="120" />
  <text class="st-label" x="585" y="172">UCAs per action</text>
  <text class="st-sub" x="585" y="196">1. not provided</text>
  <text class="st-sub" x="585" y="214">2. provided when unsafe</text>
  <text class="st-sub" x="585" y="232">3. wrong timing / order</text>
  <text class="st-sub" x="585" y="250">4. wrong duration</text>
</svg>
</div>

*Controllers stack vertically. Each control-action arrow is a site where UCAs are enumerated; each UCA becomes a candidate trigger metric and — via its loss scenario — a safety constraint the controls sketch inherits.*

## Anatomy

Four steps, each producing an artefact that the next step consumes.

**Step 1 — Losses, hazards, and system-level constraints.** Name the losses the engagement must avoid (*"a driver is dispatched to a dock they cannot unload at"*). For each loss, name the system state that could lead to it — the *hazard*. For each hazard, write a system-level constraint: *the system shall not allow…*. This is the vocabulary the rest of the analysis uses.

**Step 2 — Control structure.** Draw the piece as a hierarchy of controllers and controlled processes. Each controller issues *control actions*; each controlled process provides *feedback*. Humans, models, and automation all appear as controllers. The diagram is coarse — usually one page — but it must name every control action the piece can emit. For a yard-slot allocator: the allocator (controller) issues an *assignment* action (control action) to the dispatch system (controlled process), which returns *actual arrival and dock-state* (feedback).

**Step 3 — Unsafe control actions (UCAs).** For each control action, enumerate the four UCA types:

1. *Not providing* the action when needed.
2. *Providing* the action when it is unsafe.
3. Providing the action at the *wrong time* (too early, too late, wrong order).
4. *Stopping* the action too soon, or *continuing* it too long.

Each UCA is written as: *controller + action + context + loss reference.* For the allocator: *"the allocator provides an assignment when the carrier's arrival feed is more than 15 minutes stale, leading to Loss-1."* UCAs are the catalogue of how the control structure can produce a hazard.

**Step 4 — Loss scenarios and safety constraints.** For each UCA, ask *why would this occur?* The answers are loss scenarios: the feedback is missing, the controller's mental model is wrong, a coordination pattern between controllers is broken. Each loss scenario becomes one or more safety constraints — sentences of the form *the [controller] shall not [action] when [context]* — and each constraint is a control on the commitment page.

The method's key move: it derives controls from the system's structure, not from brainstorming. A control STPA produces has a traceable provenance back through a loss scenario, a UCA, a control action, and a named hazard. That trace is what lets the reviewer defend the controls set.

## Example

??? example "Paper trail — three STPA workshops for the yard-slot allocator"
    *Freight yard, [Chapter 9](ch-9.md), yard-slot allocator piece. Three sessions over two weeks, 5.5 hours total. Facilitator: Dana Hill (external safety consultant, STPA-certified). Team: Priya Chen (owner); Raj Patel (operations); Alex Kim (ML); Sam Okafor (dispatch-system engineer); Mei Sato (safety); one product manager, one SRE. Output: a control-structure diagram, a UCA table, a loss-scenario list, and 12 safety constraints attached to the controls sketch.*

    **Session 1 — losses and control structure (90 minutes).**

    *T+0 — losses.* Dana asks the team to name what must not happen. The board collects three: **L1** *a driver is dispatched to a dock they cannot unload at*; **L2** *a carrier loses goods in an assignment mismatch*; **L3** *an operator stops trusting the allocator and manually overrides everything.* Priya questions whether L3 is a loss or a symptom; Dana holds firm — loss of trust is a genuine system loss because it invalidates the business case.

    *T+25 — control structure, first draft.* The team draws four boxes vertically: *operator* → *allocator* → *dispatch system* → *yard process.* Arrows going down are control actions; arrows going up are feedback.

    *T+45 — Sam corrects the model twice.* First correction: the dispatch system has a tacit override on the allocator's assignments that the allocator does not see — when dispatch reassigns a dock, the allocator learns about it from feedback, not through its own control loop. Second correction: the operator has two distinct control actions on the allocator — *override* and *approve* — not one. The diagram is redrawn.

    *T+85 — close.* Final structure has 4 controllers, 7 control actions, 5 feedback loops. Photograph taken. Dana assigns homework: each team member is to read the structure once per day for a week, looking for missing control actions.

    **Session 2 — UCAs (120 minutes).**

    *T+0.* Two additional control actions surfaced during the week — an auto-retry on allocator timeouts, and a fallback to rules-baseline when the allocator's confidence is below the floor. Both added.

    *T+15 — UCAs for "assign".* Dana walks the four UCA types for each control action. For *assign*, the team lists 8 UCAs. The ones that matter: **UCA1** *allocator assigns when dock-state feedback is >15 min stale → L1*; **UCA2** *allocator does not assign within horizon window, forcing operator manual assignment under pressure → L3*; **UCA3** *allocator assigns after the carrier notify window has closed → L1 via notify race.* Mei initially misses the *"continues assigning after an unsafe condition is detected"* type — Dana prompts, and the team adds **UCA4** *allocator continues assigning to a dock whose blocked-flag has been raised but not yet propagated → L1.*

    *T+90 — UCAs for the operator's *override* and *approve*.* Four more UCAs. The interesting one: *operator approves an allocator assignment without inspecting it (under time pressure)* links to L1. Dana notes the team has now located a hazard that bow-tie would have missed — it lives in a human control action, not in the model.

    *T+120 — close.* 18 UCAs on the board. Each tagged with a loss reference.

    **Session 3 — loss scenarios and safety constraints (90 minutes).**

    *T+0.* For each UCA, Dana asks *"why would this occur?"* Answers produce loss scenarios.

    *T+30 — from UCA1 (stale dock-state).* Two scenarios: **LS1a** *dock-state feedback loop is broken or throttled*; **LS1b** *model is operating outside its certified range and mis-reads fresh feedback as stale.* Two safety constraints follow: **SaC1** *allocator shall not assign when dock-state feedback age >15 min*; **SaC2** *allocator shall not assign when model confidence <certified floor.*

    *T+55 — from UCA3 (notify race).* Scenario: *the allocator's timing is coordinated with dispatch but not with the notify window.* **SaC3** *allocator shall not assign within N minutes of notify-window close.* The team notes this as a candidate **sunset criterion** too — if the coordination pattern fails systematically, the piece needs re-engineering, not patching.

    *T+80 — from UCA2 (no assignment under pressure).* **SaC4** *allocator shall emit an explicit "no-candidate" signal rather than silence, to prevent operator assumption of manual authority.* This is a constraint on the *lack* of action — a category the team had not previously recognised as a control.

    *T+90 — close.* 12 safety constraints written. Each traced back through a loss scenario, UCA, and control action to a specific loss. Dana's worksheet maps each safety constraint to:
    - a **control on the commitment page** (the mechanism that enforces the constraint);
    - a **trigger metric** at G5 (the observable condition that indicates a UCA is occurring);
    - optionally, a **sunset criterion** (for constraints about coordination patterns, whose systematic violation invalidates the piece).

    **What was on the final page.** 12 safety constraints → 12 controls-sketch entries with owners. 18 UCAs → 9 trigger metrics (after merging duplicates). 2 coordination-pattern loss scenarios → 2 sunset criteria. Every output has a named trace back through the control structure. Priya transcribes all of this into the G3 routing map row, the G5 commitment-page draft, and the sunset-criteria worksheet.

    **Follow-up at month 2.** A sev-2 incident reveals an unmodelled control action: the allocator emits a *retrain-request* signal to an upstream training pipeline, which the Session-1 diagram had omitted as "out of scope." The diagram is reopened, the missed control action added, and four additional UCAs surface. Two of them are real; one becomes an additional trigger metric. This is STPA's expected maintenance shape — the structure is a living document, not a frozen artefact.

## Pitfalls

**Over-modelling.** STPA is not an architecture document. The control structure must be coarse enough to fit on a page; the analytic work happens in Steps 3 and 4, not in drawing ever-finer diagrams. A team that spends a week on Step 2 and a day on Step 3 has inverted the method's cost-to-value shape.

**Missing control actions.** If Step 2 omits a control action, Step 3 produces no UCAs for it, and the hazards those UCAs would have caught go undiscovered. The fix is to review Step 2 specifically for control actions the system can *emit* under edge conditions — operator manual overrides, automatic retries, fallback triggers — that a happy-path diagram misses.

**UCAs without context.** *"The allocator provides an assignment when it should not"* is not a UCA; *"the allocator provides an assignment when the dock-state feedback is more than 15 minutes stale"* is. Without context, the UCA cannot be traced to a specific hazard and cannot become a specific control.

**Treating UCAs as exhaustive failure modes.** UCAs are one of four types per control action, not a full taxonomy of the system's failures. Component-level failures and software bugs still happen outside the UCA catalogue. STPA complements but does not replace FMEA for component-rich systems.

**Stopping at Step 3.** A team enumerates UCAs and stops, never reaching loss scenarios and safety constraints. Without Step 4, STPA has produced a failure catalogue but no controls — the output the downstream gates were promised is not there.

**Confusing a constraint with a control.** A safety constraint is the *statement* of what must not happen; the *control* is the mechanism that enforces it. The two are paired — every constraint must name a mechanism — but the analyst has to supply the mechanism; STPA does not write it automatically.

## When not to use

- The piece has one obvious named hazard and a simple control structure. Bow-tie is faster and produces the same artefact in less time.
- The piece is *Human-operated* with a short feedback loop and no automation substrate. STPA works on human workflows, but the cost-to-value ratio favours lighter tools (escalation templates, error-prevention checklists).
- The engagement is at G1 or G2 and the piece has not been routed. STPA is a G3-Q3b tool; it operates on a routed piece whose control structure can be drawn.
- The team has no facilitator with STPA experience. The method has a real learning curve; a first attempt without a practitioner typically produces a bad Step 2 that propagates into an uninformative Step 4. In that case, use bow-tie first.

## Provenance

STPA is the analytic method of STAMP (Systems-Theoretic Accident Model and Processes), developed by Nancy Leveson at MIT beginning in the early 2000s. The canonical reference is the Leveson & Thomas *STPA Handbook* [1], which codifies the four-step procedure, the UCA taxonomy, and the control-structure notation used here. STPA has been applied to aviation, defence, medical devices, automotive (including ISO 26262-adjacent work), and more recently to AI safety. Its distinguishing commitment — that hazards arise from inadequate control of *interactions* between components, not from component failure alone — is what makes it fit AI routes, where the hazard is often a coordination problem between the model, the operator, and downstream systems.

## Related tools

- **Bow-tie analysis.** The other G3-Q3b derivation tool. Bow-tie anchors on a single hazard and draws barriers around it; STPA starts from the control structure and derives safety constraints. Use bow-tie when the hazard is nameable as a single event; use STPA when the hazard is produced by feedback or coordination between controllers.
- **Pre-mortem.** [Chapter 7](ch-7.md) Q3 paper tool. A pre-mortem surfaces failure modes informally; STPA refines the most system-structural of those into UCAs and safety constraints. Pre-mortem first when time is short; STPA when the piece's control structure is non-trivial.
- **Rollback-trigger design.** G5 tool. STPA's UCAs feed directly into trigger metrics — each UCA names an observable context condition the trigger can watch.
- **Blast-radius estimation.** G4 tool. STPA's loss scenarios inform the consequence-time facet of blast radius: a loss scenario that takes 24 hours to manifest sets the blast radius time at 24 hours, which in turn bounds the trigger window at G5.

## Verification

[1] Leveson NG, Thomas JP. *STPA Handbook*. MIT Partnership for Systems Approaches to Safety and Security (PSASS); 2018. **[verified]** The canonical reference for the four-step STPA procedure, the UCA taxonomy, and the control-structure notation used here.
