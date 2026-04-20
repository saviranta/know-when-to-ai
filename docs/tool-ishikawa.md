# Toolkit — Ishikawa (fishbone) diagram

*Gate: G2 Decompose. Category: structure substrate.*

## What problem it solves

Some decomposition problems are not about the scope of a question but about the *causes* of an observed effect. The Ishikawa diagram forces the group to enumerate candidate causes across a fixed set of categories (typically six: methods, machines, materials, measurements, environment, people) so that likely causes are considered exhaustively before any single one is investigated. Without the discipline, the engagement pursues the first plausible cause and confirms it; with it, the space of causes is made visible first.

## How it is used

A **60-minute G2 workshop**, usually called when the problem is naming an *effect* and the team needs to organise causal hypotheses before routing. The chair draws the spine (the effect at the head), six bone-categories branching off, and the group populates each category with candidate causes. The output is a fishbone diagram, which is then ranked for testing priority and handed to the issue tree or pyramid for decomposition into questions.

## Inputs

- A clearly named effect — usually from the framed problem paragraph's slot 2 (observation).
- Practitioners covering the six categories (or an equivalent set).
- A willingness to include causes that are uncomfortable (people, measurements) — the most common omission.

## Outputs

- A **fishbone diagram** with the effect at the head and candidate causes along branches.
- A **ranked list** of causes-to-test, prioritised by *likelihood × investigability*.
- **Category-coverage notes**: which of the six categories returned empty, and why.

## Visualisation

<div style="max-width: 900px; margin: 2rem auto;">
<svg viewBox="0 0 800 300" xmlns="http://www.w3.org/2000/svg" role="img" aria-labelledby="is-title">
  <title id="is-title">Ishikawa fishbone diagram — effect at the head with six diagonal category bones each branching into causes</title>
  <style>
    .is-rect { fill: var(--md-default-bg-color, #fff); stroke: var(--md-default-fg-color, #000); stroke-width: 1.6; }
    .is-line { stroke: var(--md-default-fg-color, #000); stroke-width: 1.2; fill: none; }
    .is-spine { stroke: var(--md-default-fg-color, #000); stroke-width: 2.2; fill: none; }
    .is-arrow { fill: var(--md-default-fg-color, #000); }
    .is-label { font: 700 12px -apple-system, sans-serif; fill: var(--md-default-fg-color, #000); }
    .is-sub { font: 400 10px -apple-system, sans-serif; fill: var(--md-default-fg-color, #000); }
    .is-tag { font: italic 10px -apple-system, sans-serif; fill: var(--md-default-fg-color, #000); text-anchor: middle; opacity: 0.8; }
  </style>
  <defs><marker id="is-a" markerWidth="9" markerHeight="9" refX="8" refY="4.5" orient="auto"><path d="M0,0 L8,4.5 L0,9 z" class="is-arrow"/></marker></defs>
  <line class="is-spine" x1="60" y1="150" x2="600" y2="150" marker-end="url(#is-a)" />
  <rect class="is-rect" x="610" y="120" width="170" height="60" />
  <text class="is-label" x="695" y="145" text-anchor="middle">Effect</text>
  <text class="is-sub" x="695" y="162" text-anchor="middle">unloading time +16 min</text>
  <line class="is-line" x1="150" y1="40" x2="200" y2="150" />
  <text class="is-label" x="150" y="32">Methods</text>
  <text class="is-sub" x="170" y="65">→ radio-handoff gaps</text>
  <text class="is-sub" x="170" y="85">→ dispatcher off-map</text>
  <line class="is-line" x1="300" y1="40" x2="350" y2="150" />
  <text class="is-label" x="300" y="32">Machines</text>
  <text class="is-sub" x="320" y="65">→ yard-map out of sync</text>
  <text class="is-sub" x="320" y="85">→ radio dead-zones</text>
  <line class="is-line" x1="450" y1="40" x2="500" y2="150" />
  <text class="is-label" x="450" y="32">Materials</text>
  <text class="is-sub" x="470" y="65">→ carrier feed stale</text>
  <text class="is-sub" x="470" y="85">→ paperwork late</text>
  <line class="is-line" x1="150" y1="260" x2="200" y2="150" />
  <text class="is-label" x="150" y="275">Measurements</text>
  <text class="is-sub" x="170" y="245">→ ETA feed accuracy</text>
  <text class="is-sub" x="170" y="225">→ override not logged</text>
  <line class="is-line" x1="300" y1="260" x2="350" y2="150" />
  <text class="is-label" x="300" y="275">Environment</text>
  <text class="is-sub" x="320" y="245">→ weather rare</text>
  <text class="is-sub" x="320" y="225">→ yard layout</text>
  <line class="is-line" x1="450" y1="260" x2="500" y2="150" />
  <text class="is-label" x="450" y="275">People</text>
  <text class="is-sub" x="470" y="245">→ training gaps</text>
  <text class="is-sub" x="470" y="225">→ staffing ratios</text>
</svg>
</div>

*The spine points at the effect. Six diagonal bones carry cause categories; each bone carries the specific causes nominated in that category.*

## Anatomy

**Effect.** The single effect the diagram explains. Named precisely, with the observation's numeric form. *"Unloading time has grown by 16 minutes"* — not *"operations are slow."*

**Spine.** The horizontal arrow. It is a visual device, not a claim; the spine does not imply *the* cause is somewhere along it.

**Six categories.** Methods, machines, materials, measurements, environment, people. The categories are a prompt — they prevent the team from converging too quickly on one category and missing the others. Some domains use four categories (the *4M* version) or eight; the discipline is the same.

**Causes per bone.** Specific, testable causes. A cause like *"staff motivation"* is too vague; *"training turnover — 6 of 12 dispatchers have less than 6 months' tenure"* is testable.

**Ranking.** After enumeration, the team ranks causes by *likelihood* (how much they would contribute to the effect if true) and *investigability* (how quickly the team can determine truth). The top candidates become G2's issue-tree leaves; low-ranked causes are logged for later if the top candidates don't explain the effect.

**Category-coverage notes.** If a category returned no causes, record why. *"Environment — weather not a driver in the trend window."* Empty categories are evidence of scope, not laziness, only if the emptiness is explicit.

## Example

??? example "Paper trail — the unloading-time fishbone"
    *G2 Ishikawa workshop, 70 minutes. Chair: Ada. Team: Raj, Priya, Jin, Amira, two dispatchers (Chen, Martinez), one dock operator (Lee).*

    *T+0 — effect.* Ada writes the head: *unloading time has grown by 16 minutes, from 28 to 44 min.*

    *T+10 — methods.* Chen: *"dispatcher radio-handoff gaps — we have 30-second lags between steps."* Martinez: *"dispatchers go off-map — the yard map is the plan; the radio is the reality."* Two causes.

    *T+20 — machines.* Priya: *"the digital yard-map system is out of sync with the paper board."* Jin: *"the dock-door radios have dead-zones in bays 4–6."* Two causes.

    *T+30 — materials.* Raj: *"carrier-feed staleness — the feed updates every 15 minutes but trucks move faster."* Chen: *"paperwork arrives late on about 12% of trucks."* Two causes.

    *T+40 — measurements.* Ada: *"how do we measure ETA accuracy today?"* Priya: *"we don't — the feed sends a number; we never compare it to arrival."* Martinez: *"overrides aren't logged structurally."* Two causes; both named as *measurements the engagement will have to build to investigate the others*.

    *T+50 — environment.* Lee: *"weather — but rare, maybe 4 days a year that actually affect unloading."* Raj: *"yard layout — bay 7 is on the far side, cold and poorly lit at night."* Two causes; weather noted as a known-uncovered scope decision.

    *T+55 — people.* Chen: *"six of twelve dispatchers have less than six months' tenure."* Lee: *"dock operator staffing ratios — we're down two from last year."* Two causes, both named without defensiveness.

    *T+65 — ranking.* The team ranks. Top: dispatcher radio-handoff gaps, yard-map out of sync, carrier-feed staleness, training turnover. Bottom: weather (low likelihood), yard layout (low investigability in the engagement horizon).

    *T+70 — close.* Twelve causes, four top-ranked, two coverage notes. The top four become issue-tree leaves. The training-turnover cause maps to a G3 observation — it is not an AI-shaped leaf, but it *is* a leaf the engagement's recommendation has to address.

## Pitfalls

**Vague causes.** *"Bad communication"*, *"low morale"*. Push for one observable, testable form. The fishbone is not a place for abstractions.

**Missing categories.** The team fills three of six and moves on. Run all six, record empties. The most common omission is *measurements* — because teams often have not thought about what they are and aren't measuring.

**Categories as buckets for solutions.** *"Training"* as a cause can slip into *"run more training"* as an item in the same branch. The diagram is of causes, not remedies.

**Branch-length bias.** The team assumes whichever branch has the most causes is the main one. Branch length is a function of fluency, not truth. The ranking step is what separates them.

**Stopping at the first confirmed cause.** Ishikawa is resistance to this. A cause that fits the effect is a hypothesis, not a conclusion. The engagement investigates, and the fishbone records the others so they are not lost.

## When not to use

- Effects that are definitional (*"users are dissatisfied because their job-to-be-done is not served"* — the mapping is the analysis, not the causes).
- Engagements where the cause is already known and the engagement's question is about the remedy. The fishbone is diagnostic, not prescriptive.

## Provenance

Kaoru Ishikawa developed the diagram at Kawasaki Steel in the 1960s; the canonical treatment is his *Guide to Quality Control* [1]. It is one of the seven basic tools of quality (the Q7), established by the Japanese Union of Scientists and Engineers. The 6M category set is the most widely used; variations (4M, 8M, the service-oriented 4P) serve different domains.

## Related tools

- **Issue tree.** Top-ranked fishbone causes become issue-tree leaves.
- **Pre-mortem (G3).** Ishikawa is diagnostic-retrospective; pre-mortem is diagnostic-prospective.
- **Systems-Theoretic Process Analysis (STPA).** When the effect is a safety-relevant accident, STPA replaces the fishbone as the decomposition of cause.

## Verification

[1] Ishikawa K. *Guide to Quality Control*. Asian Productivity Organization; 1976 (orig. 1968, Japanese). **[verified]** The canonical treatment of the fishbone diagram and the 6M categories.
