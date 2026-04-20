# Toolkit — Dependency graph (PERT / CPM)

*Gate: G4 Sequence. Category: sequencing lens.*

## What problem it solves

Before picking a running order across routed pieces, the engagement needs to know which pieces depend on which — through data pipelines, operator workflows, shared services, or preconditions that are not pieces in their own right. Without a graph, the order is built on gut feel; hidden coupling surfaces at implementation time, when the cost of reordering is highest.

## How it is used

A 60–90 minute **whiteboard meeting**, one time at G4. Participants: the piece owners, one infrastructure-aware engineer, one operations lead. Facilitator draws a node per piece and one per explicit precondition (data pipeline, feature flag, operator training). Edges run from precondition to dependent. The graph is photographed, transcribed, and attached to the sequencing sheet. Re-drawn only if the routing map changes.

## Inputs

- The G3 routing map (pieces + outcomes).
- A list of shared substrates the pieces touch — data pipelines, services, operator workflows, dashboards.
- Owner input on what must be in place before each piece can begin.

## Outputs

- A directed acyclic graph of pieces and preconditions.
- A **partial order**: which pieces can run in parallel, which must wait.
- A **critical path**: the longest chain of preconditions — sets the sequencing floor.
- A flagged list of **hidden couplings** — shared nodes two pieces didn't realise they shared.

## Visualisation

<div style="max-width: 900px; margin: 2rem auto;">
<svg viewBox="0 0 800 260" xmlns="http://www.w3.org/2000/svg" role="img" aria-labelledby="dg-title">
  <title id="dg-title">Dependency graph — pieces as nodes, precondition edges between them, with a critical path and a hidden-coupling node</title>
  <style>
    .dg-rect { fill: var(--md-default-bg-color, #fff); stroke: var(--md-default-fg-color, #000); stroke-width: 1.4; }
    .dg-dash { fill: var(--md-default-bg-color, #fff); stroke: var(--md-default-fg-color, #000); stroke-width: 1.2; stroke-dasharray: 4,3; }
    .dg-line { stroke: var(--md-default-fg-color, #000); stroke-width: 1.2; fill: none; }
    .dg-crit { stroke: var(--md-default-fg-color, #000); stroke-width: 2.4; fill: none; }
    .dg-arrow { fill: var(--md-default-fg-color, #000); }
    .dg-label { font: 600 11px -apple-system, BlinkMacSystemFont, sans-serif; fill: var(--md-default-fg-color, #000); text-anchor: middle; }
    .dg-sub { font: italic 10px -apple-system, sans-serif; fill: var(--md-default-fg-color, #000); text-anchor: middle; opacity: 0.8; }
  </style>
  <defs>
    <marker id="dg-a" markerWidth="9" markerHeight="9" refX="8" refY="4.5" orient="auto"><path d="M0,0 L8,4.5 L0,9 z" class="dg-arrow"/></marker>
    <marker id="dg-ac" markerWidth="9" markerHeight="9" refX="8" refY="4.5" orient="auto"><path d="M0,0 L8,4.5 L0,9 z" class="dg-arrow"/></marker>
  </defs>
  <rect class="dg-rect" x="20" y="100" width="120" height="50" />
  <text class="dg-label" x="80" y="125">Piece A</text>
  <text class="dg-sub" x="80" y="140">escalation workflow</text>
  <rect class="dg-rect" x="220" y="30" width="120" height="50" />
  <text class="dg-label" x="280" y="55">Piece B</text>
  <text class="dg-sub" x="280" y="70">dock solver</text>
  <rect class="dg-rect" x="220" y="170" width="120" height="50" />
  <text class="dg-label" x="280" y="195">Piece C</text>
  <text class="dg-sub" x="280" y="210">ETA triage</text>
  <rect class="dg-dash" x="420" y="100" width="120" height="50" />
  <text class="dg-label" x="480" y="125">Shared</text>
  <text class="dg-sub" x="480" y="140">carrier feed</text>
  <rect class="dg-rect" x="620" y="100" width="160" height="50" />
  <text class="dg-label" x="700" y="125">Piece D</text>
  <text class="dg-sub" x="700" y="140">yard-slot allocator</text>
  <line class="dg-line" x1="140" y1="120" x2="220" y2="55" marker-end="url(#dg-a)" />
  <line class="dg-crit" x1="140" y1="130" x2="220" y2="195" marker-end="url(#dg-ac)" />
  <line class="dg-line" x1="340" y1="55" x2="420" y2="120" marker-end="url(#dg-a)" />
  <line class="dg-crit" x1="340" y1="195" x2="420" y2="130" marker-end="url(#dg-ac)" />
  <line class="dg-crit" x1="540" y1="125" x2="620" y2="125" marker-end="url(#dg-ac)" />
  <text class="dg-sub" x="400" y="248">bold path = critical path · dashed node = hidden coupling shared by B and C</text>
</svg>
</div>

*Nodes are pieces (solid) and shared preconditions (dashed). Edges run from precondition to dependent. The bold path is the critical path — the longest chain, which sets the sequencing floor.*

## Anatomy

Four parts. **Nodes**: each routed piece plus each explicit precondition artefact. **Edges**: precondition → dependent, no cycles. **Partial order**: the topological sort — pieces at the same depth can run in parallel. **Critical path**: the longest precondition chain, which bounds the shortest possible engagement duration.

The graph is an input, not a planning artefact. It does not carry durations, resources, or calendar dates; those belong on the sequencing sheet, not the graph.

## Example

??? example "Paper trail — drawing the freight-yard graph at G4"
    *Four routed pieces, one 70-minute whiteboard meeting. Present: Priya (allocator), Jin (dock solver), Raj (operations), Ada (sequencing reviewer, chair), Sam (dispatch engineer).*

    *T+0.* Ada writes four nodes across the board: escalation workflow (A), dock solver (B), ETA triage (C), allocator (D). Each owner states preconditions.

    *T+15.* Priya: *"the allocator needs a clean carrier feed."* Raj: *"so does C. We built it for C three months ago — same feed."* The carrier-feed node is drawn dashed between B/C and D. It is a **hidden coupling**: neither Priya nor the triage team had noted the shared dependency in their own plans.

    *T+35.* Jin: *"the dock solver needs operator training on the reassignment flow — that training is A's workflow output."* Edge drawn A → B. Priya: *"A also trains the override pattern C uses."* Edge A → C. Two edges from A.

    *T+50.* Ada traces the longest path: **A → C → carrier-feed → D**. Four hops. That is the critical path. B sits on a shorter branch (A → B).

    *T+60.* Partial order: A first (training gate); B and C can run in parallel (both depend only on A plus the shared feed for C); D last (needs the feed and, indirectly, operator patterns from C). Allocator's lateness is reinforced by the G4 blast-radius read.

    *T+70 — close.* Graph photographed. Ada notes the hidden-coupling risk on the sequencing sheet: if the carrier feed needs rework for D, C is also at risk.

## Pitfalls

**Gantt-chart drift.** The graph accumulates durations, owners, and dates, and starts to function as a project tracker. It should not. A separate sequencing sheet carries scheduling; the graph carries only structure.

**Missing shared substrates.** The most damaging dependencies are the ones nobody declared. The facilitator's job is to ask every owner: *what does this piece read from? what does it write to? what human workflow feeds it?* A shared-substrate node draws itself when two pieces point to the same answer.

**Forcing linearity.** Pieces that can run in parallel are drawn in series, inflating the critical path. Pieces at the same topological depth should be drawn side by side.

**Treating an edge as commitment.** Drawing *A → B* does not mean A must complete before B can *start*; it means B cannot *ship* until A is in place. Start-after-completion is a stronger assumption than the graph carries.

## When not to use

- One-piece engagement. The graph is a single node.
- All pieces are genuinely independent with no shared substrates (rare in practice; worth one pass to confirm).
- The routing map has not been produced at G3. Dependency graphs without routed pieces are speculation.

## Provenance

PERT (Program Evaluation and Review Technique) was developed by the US Navy's Special Projects Office for the Polaris programme in 1957–58 [1]. CPM (Critical Path Method) was developed in parallel at DuPont and Remington Rand for plant-maintenance scheduling [2]. The two techniques differ in whether durations are deterministic (CPM) or probabilistic (PERT); the graph-as-structure shape is common to both and is what G4 uses.

## Related tools

- **Reversibility classes.** Paired G4 lens. The graph sets the order floor; reversibility sets the cost-of-being-wrong ceiling.
- **Blast-radius estimation.** The third G4 lens. Graph says *can it ship*; blast radius says *how exposed is it if it fails.*
- **Three-stage rollout pattern.** The rollout substrate the sequence hands to G5.

## Verification

[1] Malcolm DG, Roseboom JH, Clark CE, Fazar W. Application of a technique for research and development program evaluation. *Operations Research* 1959;7(5):646–69. **[verified]** The original PERT paper from the Polaris programme.

[2] Kelley JE, Walker MR. Critical-path planning and scheduling. In: *Proceedings of the Eastern Joint Computer Conference*; 1959. p. 160–73. **[verified]** The original CPM paper.
