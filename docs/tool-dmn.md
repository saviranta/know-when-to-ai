# Toolkit — DMN (Decision Model and Notation)

*Gate: G3 Route (Q2 rules). Category: rules substrate.*

## What problem it solves

A single decision table covers one rule; a real engagement often has a *network* of decisions, each feeding the next. The second decision's inputs include the first decision's output. Drawing each table separately loses the dependency; without the dependency the engagement cannot reason about the rule-network's overall behaviour. DMN — Decision Model and Notation — is the OMG standard for drawing the dependency graph of decisions alongside the tables, producing a navigable, implementable model of the whole ruleset.

## How it is used

A **half-day workshop** (4 hours), typically after multiple decision tables have been drafted separately. The chair draws a Decision Requirements Diagram (DRD): rectangular nodes for *decisions*, oval nodes for *input data*, and document-shaped nodes for *knowledge sources* (policies, regulations). Edges encode dependencies. Each decision node has one table beneath it. The DRD is produced as an image and, for implementation, as a DMN XML file that a DMN-compliant engine can execute.

## Inputs

- Multiple decision tables (from the decision-tables tool).
- The input-data catalogue (from SIPOC or system description).
- A named *knowledge source* per decision — the policy, regulation, or operational rule the decision implements.

## Outputs

- A **Decision Requirements Diagram** (DRD) — the graph.
- An **executable model** — DMN XML or its equivalent, runnable by a DMN engine.
- **Test vectors** — sample input-data records with expected decision outputs, used to validate the model.
- **Coverage gaps** — decisions named in the DRD but not yet tabled (work items for follow-up).

## Visualisation

<div style="max-width: 900px; margin: 2rem auto;">
<svg viewBox="0 0 800 280" xmlns="http://www.w3.org/2000/svg" role="img" aria-labelledby="dm-title">
  <title id="dm-title">DMN DRD — three decision rectangles fed by input-data ovals and one knowledge-source document</title>
  <style>
    .dm-rect { fill: var(--md-default-bg-color, #fff); stroke: var(--md-default-fg-color, #000); stroke-width: 1.6; }
    .dm-oval { fill: var(--md-default-bg-color, #fff); stroke: var(--md-default-fg-color, #000); stroke-width: 1.4; }
    .dm-doc { fill: var(--md-default-bg-color, #fff); stroke: var(--md-default-fg-color, #000); stroke-width: 1.2; }
    .dm-line { stroke: var(--md-default-fg-color, #000); stroke-width: 1.2; fill: none; }
    .dm-arrow { fill: var(--md-default-fg-color, #000); }
    .dm-label { font: 700 12px -apple-system, sans-serif; fill: var(--md-default-fg-color, #000); text-anchor: middle; }
    .dm-sub { font: 400 10px -apple-system, sans-serif; fill: var(--md-default-fg-color, #000); text-anchor: middle; }
    .dm-tag { font: italic 10px -apple-system, sans-serif; fill: var(--md-default-fg-color, #000); text-anchor: middle; opacity: 0.8; }
  </style>
  <defs><marker id="dm-a" markerWidth="9" markerHeight="9" refX="8" refY="4.5" orient="auto"><path d="M0,0 L8,4.5 L0,9 z" class="dm-arrow"/></marker></defs>
  <rect class="dm-rect" x="300" y="30" width="200" height="50" />
  <text class="dm-label" x="400" y="55">Slot assignment</text>
  <text class="dm-sub" x="400" y="70">top decision</text>
  <rect class="dm-rect" x="80" y="120" width="180" height="50" />
  <text class="dm-label" x="170" y="145">Priority classification</text>
  <text class="dm-sub" x="170" y="160">intermediate decision</text>
  <rect class="dm-rect" x="540" y="120" width="180" height="50" />
  <text class="dm-label" x="630" y="145">Reassignment choice</text>
  <text class="dm-sub" x="630" y="160">intermediate decision</text>
  <ellipse class="dm-oval" cx="100" cy="220" rx="70" ry="24" />
  <text class="dm-sub" x="100" y="224">Carrier record</text>
  <ellipse class="dm-oval" cx="280" cy="220" rx="70" ry="24" />
  <text class="dm-sub" x="280" y="224">ETA feed</text>
  <ellipse class="dm-oval" cx="460" cy="220" rx="70" ry="24" />
  <text class="dm-sub" x="460" y="224">Yard-map state</text>
  <ellipse class="dm-oval" cx="640" cy="220" rx="70" ry="24" />
  <text class="dm-sub" x="640" y="224">Hours-of-service</text>
  <rect class="dm-doc" x="330" y="100" width="140" height="36" rx="0" />
  <path class="dm-line" d="M330,136 q20,-10 40,0 t40,0 t40,0 t20,0" />
  <text class="dm-sub" x="400" y="123">Priority policy v4.2</text>
  <line class="dm-line" x1="170" y1="120" x2="340" y2="80" marker-end="url(#dm-a)" />
  <line class="dm-line" x1="630" y1="120" x2="460" y2="80" marker-end="url(#dm-a)" />
  <line class="dm-line" x1="100" y1="196" x2="140" y2="170" marker-end="url(#dm-a)" />
  <line class="dm-line" x1="280" y1="196" x2="200" y2="170" marker-end="url(#dm-a)" />
  <line class="dm-line" x1="460" y1="196" x2="570" y2="170" marker-end="url(#dm-a)" />
  <line class="dm-line" x1="640" y1="196" x2="630" y2="170" marker-end="url(#dm-a)" />
  <line class="dm-line" x1="400" y1="100" x2="400" y2="80" marker-end="url(#dm-a)" stroke-dasharray="3,3" />
  <text class="dm-tag" x="400" y="265">Rectangles: decisions. Ovals: input data. Document: knowledge source (dashed edge).</text>
</svg>
</div>

*The DRD shows three decisions, four input-data ovals, and one knowledge-source document. Solid arrows: information flow. Dashed arrow: knowledge reference.*

## Anatomy

**Decision.** A rectangle, one DMN decision table beneath it. Has a name, an expression language (FEEL, the DMN-native language, or S-FEEL, the simplified form), and an expected output type.

**Input data.** An oval. Represents an external data source — a carrier record, an ETA feed, a yard-map state. Input data has a type and an origin.

**Knowledge source.** A document-shaped icon. Represents the policy or regulation a decision implements — *Priority policy v4.2*, *EU Regulation 561/2006 on driver hours-of-service*. The knowledge source is metadata, not computation.

**DRD edges.** Solid arrows between decisions and input data carry actual information flow. Dashed arrows from knowledge sources to decisions carry provenance only.

**Decision tables.** Beneath each decision, a DMN-compliant decision table. DMN standardises the table format: *hit policy* (which rules apply — unique, first, priority, collect, etc.), expression language, and output types.

**Test vectors.** Example input records with expected outputs. Runnable against a DMN engine to verify behaviour before deployment.

## Example

??? example "Paper trail — DMN model for freight-yard slot assignment"
    *G3 Q2 DMN workshop, 4 hours. Three decision tables already drafted. Team: Priya, Chen, Martinez, Amira, plus an IT architect (Pat) joining for the executable-model work. Chair: Ada.*

    *T+0 — DRD scaffold.* Ada draws three rectangles: *Priority classification*, *Reassignment choice*, *Slot assignment*. Arrows run upward: the two intermediate decisions feed the top decision. Four input data ovals added: carrier record, ETA feed, yard-map state, hours-of-service. One knowledge source: *Priority policy v4.2*.

    *T+60 — edges.* *Priority classification* reads carrier record, ETA feed. *Reassignment choice* reads yard-map state, hours-of-service. *Slot assignment* reads both upstream decisions. Knowledge source (dashed) points at slot assignment and priority classification — the policy governs both.

    *T+90 — fill the decision tables.* Each rectangle gets a DMN table. Hit policy for *Priority classification*: *unique* — one row applies per input. Hit policy for *Slot assignment*: *first* — rows are ordered, the first matching row wins (encodes the priority-policy hierarchy).

    *T+150 — expression language.* The team writes condition cells in FEEL. Chen's rule *"if carrier tier is platinum or the carrier has had <3 slot reassignments in the last 30 days"* becomes FEEL: `carrier.tier = "platinum" or carrier.recentReassignmentCount < 3`.

    *T+180 — test vectors.* Pat writes 12 test vectors covering the 8 boolean combinations from the earlier decision table plus 4 edge cases (missing ETA, hours-of-service below threshold, carrier unknown). Each test is run through a DMN engine; all pass.

    *T+210 — coverage gap.* One question not covered: *what if the carrier record is missing?* Pat flags. Team agrees: add a fallback rule at the top of the priority-classification table — *if carrier record is missing, treat as tier = standard, route to escalation table*. Gap closed.

    *T+240 — close.* DRD photographed; DMN XML exported. The executable model runs every truck arrival through the rule network. Routing decision: the engagement's priority-arbitration piece is covered by DMN; no AI needed. The allocator piece (remaining on the routing map) is narrower — it handles slot *optimisation* under the rules, not the priority decisions themselves.

## Pitfalls

**DRD without the tables.** A beautifully-drawn DRD with empty tables beneath. The diagram is not the model; the tables are.

**Implicit knowledge source.** Decisions that encode policy without naming which policy. The knowledge-source document is metadata, but it is load-bearing metadata: when policy changes, the table that references it needs updating. Unreferenced tables get out of date silently.

**Hit-policy confusion.** *First* and *priority* differ: *first* depends on row order, *priority* depends on output-cell priority. Mixing them produces ambiguous runtime behaviour.

**FEEL as natural language.** FEEL is a small, precise expression language — not a text box. *"When the carrier is trusted"* is not a FEEL expression; `carrier.trustLevel >= 4` is.

**No test vectors.** A DMN model without tests is a specification, not a verified artefact. The tests are the assurance that the model does what the team thinks it does.

**Treating DMN as AI.** DMN is rules. A DMN model is deterministic, inspectable, and auditable — none of which generative AI or ML systems are by default. Some engagements whose leaves are routed to DMN were routed prematurely to AI; DMN is frequently the right answer.

## When not to use

- Single-decision leaves — a decision table alone is enough.
- Decisions whose conditions are not machine-readable (*"the carrier seems trustworthy"*) — DMN cannot compute what cannot be read.
- Decisions whose policy changes faster than the engineering cycle can keep up; at that rate, DMN becomes a maintenance burden.

## Provenance

DMN is an OMG standard, with version 1.5 the current release [1]. Its design draws on the decision-table tradition [2] and on business-rules management systems [3]. DMN's signature contribution is the combination of the DRD (for network structure), FEEL (for expressions), and standardised hit policies in a single interoperable specification.

## Related tools

- **Decision tables.** DMN's per-node table form.
- **SIPOC.** Provides the input-data catalogue for the DRD's ovals.
- **Knowledge-source documents.** The policies and regulations referenced as metadata.

## Verification

[1] Decision Model and Notation (DMN). Version 1.5. Object Management Group; 2024. **[verified]** The OMG standard for DMN.

[2] Pollack SL. Conversion of limited-entry decision tables to computer programs. *Communications of the ACM*. 1965;8(11):677–82. **[verified]** Early decision-table theory.

[3] von Halle B, Goldberg L. *The Decision Model: A Business Logic Framework Linking Business and Technology*. CRC Press; 2010. **[verified]** Business-rules management foundations.
