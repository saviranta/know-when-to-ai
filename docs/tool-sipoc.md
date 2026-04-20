# Toolkit — SIPOC (Suppliers, Inputs, Process, Outputs, Customers)

*Gate: G3 Route (Q1 operational observation). Category: observation substrate.*

## What problem it solves

A full system description and a full value-stream map are heavy artefacts; often the engagement needs a one-page view of a process's gateways — what comes in, what goes out, and who is on each end — so that the routing conversation can proceed without the heavier substrates in the room. SIPOC provides a 60-minute one-page view of the flow's upstream and downstream, compact enough to fit on a slide and complete enough to anchor a G3 routing discussion.

## How it is used

A **60-minute G3 workshop**, led by the G3 chair. The group fills in a five-column table on a whiteboard: *Suppliers* (who provides inputs), *Inputs* (what they provide), *Process* (4–7 high-level steps), *Outputs* (what is produced), *Customers* (who receives). Each column has 3–7 rows. The SIPOC is produced as a text table and a one-page diagram, both attached to the routing map.

## Inputs

- Framed problem paragraph (names the unit and stakes).
- Stakeholder map (names the upstream and downstream parties).
- System description or value-stream map, if available.

## Outputs

- A **SIPOC table** with the five columns populated.
- **Input-quality notes** and **output-quality notes**: what the process assumes about its inputs and what its customers assume about its outputs.
- Flagged **input risks**: inputs whose quality is upstream-dependent, where the process has limited control.

## Visualisation

<div style="max-width: 900px; margin: 2rem auto;">
<svg viewBox="0 0 800 300" xmlns="http://www.w3.org/2000/svg" role="img" aria-labelledby="sp-title">
  <title id="sp-title">SIPOC table — five columns (Suppliers, Inputs, Process, Outputs, Customers) with populated rows</title>
  <style>
    .sp-rect { fill: var(--md-default-bg-color, #fff); stroke: var(--md-default-fg-color, #000); stroke-width: 1.4; }
    .sp-head { fill: var(--md-default-fg-color, #000); opacity: 0.1; stroke: var(--md-default-fg-color, #000); stroke-width: 1.4; }
    .sp-line { stroke: var(--md-default-fg-color, #000); stroke-width: 0.8; fill: none; }
    .sp-label { font: 700 12px -apple-system, sans-serif; fill: var(--md-default-fg-color, #000); text-anchor: middle; }
    .sp-sub { font: 400 10px -apple-system, sans-serif; fill: var(--md-default-fg-color, #000); }
    .sp-tag { font: italic 10px -apple-system, sans-serif; fill: var(--md-default-fg-color, #000); text-anchor: middle; opacity: 0.8; }
  </style>
  <rect class="sp-head" x="40" y="30" width="140" height="36" />
  <text class="sp-label" x="110" y="53">Suppliers</text>
  <rect class="sp-head" x="180" y="30" width="140" height="36" />
  <text class="sp-label" x="250" y="53">Inputs</text>
  <rect class="sp-head" x="320" y="30" width="170" height="36" />
  <text class="sp-label" x="405" y="53">Process</text>
  <rect class="sp-head" x="490" y="30" width="140" height="36" />
  <text class="sp-label" x="560" y="53">Outputs</text>
  <rect class="sp-head" x="630" y="30" width="140" height="36" />
  <text class="sp-label" x="700" y="53">Customers</text>
  <rect class="sp-rect" x="40" y="66" width="140" height="200" />
  <text class="sp-sub" x="50" y="95">Carriers</text>
  <text class="sp-sub" x="50" y="130">Gate system</text>
  <text class="sp-sub" x="50" y="165">Dispatcher</text>
  <text class="sp-sub" x="50" y="200">Yard-management sys</text>
  <text class="sp-sub" x="50" y="235">Driver</text>
  <rect class="sp-rect" x="180" y="66" width="140" height="200" />
  <text class="sp-sub" x="190" y="95">ETA feed</text>
  <text class="sp-sub" x="190" y="130">Truck arrival</text>
  <text class="sp-sub" x="190" y="165">Yard-map state</text>
  <text class="sp-sub" x="190" y="200">Paperwork</text>
  <text class="sp-sub" x="190" y="235">Radio check-in</text>
  <rect class="sp-rect" x="320" y="66" width="170" height="200" />
  <text class="sp-sub" x="330" y="95">1. Receive ETA</text>
  <text class="sp-sub" x="330" y="125">2. Truck arrives</text>
  <text class="sp-sub" x="330" y="155">3. Radio check-in</text>
  <text class="sp-sub" x="330" y="185">4. Slot assign</text>
  <text class="sp-sub" x="330" y="215">5. Reassign (cond.)</text>
  <text class="sp-sub" x="330" y="245">6. Dock-door coord.</text>
  <rect class="sp-rect" x="490" y="66" width="140" height="200" />
  <text class="sp-sub" x="500" y="95">Slot assignment</text>
  <text class="sp-sub" x="500" y="130">Dock-door pair</text>
  <text class="sp-sub" x="500" y="165">Radio confirmation</text>
  <text class="sp-sub" x="500" y="200">Unload record</text>
  <text class="sp-sub" x="500" y="235">Paperwork receipt</text>
  <rect class="sp-rect" x="630" y="66" width="140" height="200" />
  <text class="sp-sub" x="640" y="95">Driver</text>
  <text class="sp-sub" x="640" y="130">Dock operator</text>
  <text class="sp-sub" x="640" y="165">Carrier</text>
  <text class="sp-sub" x="640" y="200">Warehouse sys</text>
  <text class="sp-sub" x="640" y="235">Audit</text>
  <text class="sp-tag" x="400" y="290">Five columns, 3–7 rows per column — a one-page gateway view of the process.</text>
</svg>
</div>

*A SIPOC table fills in left to right: each column populated with 3–7 rows. Inputs and outputs bracket the process; suppliers and customers name the upstream and downstream parties.*

## Anatomy

**Suppliers.** Who or what provides each input. Not always a person — systems, databases, and physical arrivals are suppliers too. Each input has at least one supplier.

**Inputs.** What the process consumes. Data feeds, physical arrivals, documents, signals. *"ETA feed"* — with a quality note about its freshness — is more useful than *"ETA data."*

**Process.** 4–7 high-level steps. Not the full system description — the step-list is deliberately coarse. SIPOC's value is the *gateways*, not the internal steps.

**Outputs.** What the process produces. Named in the form the customers receive them, not the form the process creates them in.

**Customers.** Who receives each output. Audits and regulators are customers. Internal consumers (the warehouse system, the compliance desk) are customers.

**Quality notes.** Input quality notes describe what the process assumes about each input; output quality notes describe what customers expect. The notes are the substrate the engagement uses to identify *input risk* — the class of failure modes where an upstream supplier's output quality breaks the process.

## Example

??? example "Paper trail — SIPOC for the freight-yard flow"
    *G3 Q1 SIPOC session, 55 minutes. Ada (chair) + the engagement team.*

    *T+0 — populate Customers first.* Ada: *"start on the right — who consumes this process's outputs?"* Amira: *"drivers — they get the slot. Dock operators — they get the dock-door pair. Carriers — they get the confirmation."* Three customers named; audits and warehouse-system added.

    *T+10 — Outputs.* For each customer, what do they receive. Driver: slot assignment. Dock operator: dock-door pair. Carrier: radio confirmation. Warehouse: unload record. Audit: paperwork receipt. Five outputs.

    *T+20 — Process.* Ada: *"six high-level steps, no more."* The team writes: receive ETA, truck arrives, radio check-in, slot assign, reassign (conditional), dock-door coordination. Six steps.

    *T+30 — Inputs.* What does each step consume? ETA feed, truck arrival, yard-map state, paperwork, radio check-in. Five inputs.

    *T+40 — Suppliers.* Carriers (send ETA), gate system (registers arrival), dispatcher (maintains yard-map state), yard-management system (holds state digitally), driver (radios). Five suppliers.

    *T+45 — input-quality notes.* Ada: *"what quality does the process assume about each input?"* Team: ETA feed assumed accurate to within 30 min (often wrong in practice — flagged). Truck arrival assumed to match the ETA (flagged — carrier no-shows and early arrivals). Yard-map state assumed current (flagged — 30-minute digital lag on weekends). Three input-risk flags.

    *T+55 — close.* One-page SIPOC photographed. Three input risks written on the G3 routing map. The ETA-feed input risk is central to the carrier-ETA branch of the pyramid; the yard-map-state risk is central to the slot-allocation branch.

## Pitfalls

**Too many steps.** The process column bloats to 15 rows. The SIPOC is not the value-stream map; keep the process at 4–7 steps. If more steps are needed, the SIPOC is the wrong tool.

**Suppliers = entire company.** Naming *"the company"* as a supplier is the sign of a vague SIPOC. Every input has a specific supplier; name it.

**Ignoring the input-quality note.** The notes are the main output, not the columns themselves. A SIPOC without quality notes is a cosmetic artefact.

**Outputs as internal artefacts.** Naming internal things (log files, system events) as outputs while forgetting what the actual customer receives. Re-read the outputs column aloud and ask, *is this what the customer sees?*

**Customers-as-role-only.** *"The warehouse"* is a role; which warehouse system, which audit function, which regulator. Specificity carries into the stakeholder map and the commitment page.

## When not to use

- Engagements with full value-stream maps already produced. The SIPOC is a compression of that; redrawing it is duplication.
- Processes too short or too long for SIPOC's granularity — a 2-step process fits on a half-page of prose; a 40-step end-to-end flow needs full VSM.

## Provenance

SIPOC was formalised in Six Sigma practice, documented in Pyzdek's *Six Sigma Handbook* [1]. The underlying structure — naming upstream and downstream parties explicitly — has roots in supply-chain management and quality engineering [2]. The variant PIPOC (Process at the start) and COPIS (reversed order, Customers first) are the same tool with different filling-in conventions.

## Related tools

- **Value-stream mapping.** SIPOC is VSM's compressed sibling.
- **System description.** The detailed internal view; SIPOC is the gateway view.
- **Stakeholder map.** Suppliers and Customers often correspond to entries on the map.

## Verification

[1] Pyzdek T, Keller PA. *The Six Sigma Handbook*. 5th ed. McGraw-Hill; 2018. **[verified]** SIPOC's canonical Six Sigma treatment.

[2] Chopra S, Meindl P. *Supply Chain Management: Strategy, Planning, and Operation*. 7th ed. Pearson; 2019. **[verified]** The supplier-customer analytic frame that underpins SIPOC.
