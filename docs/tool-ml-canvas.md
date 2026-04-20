# Toolkit — ML canvas

*Gate: G3 Route (Q3 routing deliberation). Category: routing substrate.*

## What problem it solves

The AI canvas frames the business decision; the ML canvas — Dorard's 10-box template — fills in the technical substrate that has to be operational for the decision to work: labels, features, serving, evaluation, learning, monitoring. A routing decision made without the ML canvas is a routing decision that will meet reality at implementation time, where half the cells are still empty. The ML canvas catches the *operational* holes at G3, before G4 has to sequence work around them.

## How it is used

A **90-minute workshop**, usually the day after the AI canvas, with an ML engineer in the room. The chair draws the 10-box grid and the team populates each box together. Cells are filled concretely (*not "offline eval"* but *"offline eval on hold-out months Oct-Dec 2025"*). Gaps in cells are noted as work items that have to close before G5 commitment.

## Inputs

- A completed AI canvas (the ML canvas is downstream of it).
- An ML engineer or data scientist who will own the implementation.
- Access to data-platform documentation (serving latency, feature freshness, data-lake schemas).

## Outputs

- A **filled ML canvas**.
- A **work-item list**: open gaps in cells that must close before G5 — often labelled data, monitoring infrastructure, or a serving path.
- A **feasibility verdict**: ML-feasible within engagement horizon, ML-feasible but requiring substantial data work, or not ML-feasible with current substrates.

## Visualisation

<div style="max-width: 900px; margin: 2rem auto;">
<svg viewBox="0 0 800 320" xmlns="http://www.w3.org/2000/svg" role="img" aria-labelledby="ml-title">
  <title id="ml-title">ML canvas — ten cells covering value proposition through monitoring</title>
  <style>
    .ml-rect { fill: var(--md-default-bg-color, #fff); stroke: var(--md-default-fg-color, #000); stroke-width: 1.4; }
    .ml-head { fill: var(--md-default-fg-color, #000); opacity: 0.08; stroke: var(--md-default-fg-color, #000); stroke-width: 1.4; }
    .ml-label { font: 700 11px -apple-system, sans-serif; fill: var(--md-default-fg-color, #000); }
    .ml-sub { font: 400 10px -apple-system, sans-serif; fill: var(--md-default-fg-color, #000); }
    .ml-tag { font: italic 10px -apple-system, sans-serif; fill: var(--md-default-fg-color, #000); text-anchor: middle; opacity: 0.8; }
  </style>
  <rect class="ml-head" x="40" y="30" width="220" height="40" />
  <text class="ml-label" x="55" y="55">Value proposition</text>
  <rect class="ml-rect" x="40" y="70" width="220" height="130" />
  <text class="ml-sub" x="55" y="95">Who benefits, what</text>
  <text class="ml-sub" x="55" y="115">problem is solved,</text>
  <text class="ml-sub" x="55" y="135">how much it matters</text>
  <rect class="ml-head" x="280" y="30" width="220" height="40" />
  <text class="ml-label" x="295" y="55">ML task + decisions</text>
  <rect class="ml-rect" x="280" y="70" width="220" height="130" />
  <text class="ml-sub" x="295" y="95">Classification /</text>
  <text class="ml-sub" x="295" y="115">regression / ranking;</text>
  <text class="ml-sub" x="295" y="135">what decisions follow</text>
  <rect class="ml-head" x="520" y="30" width="220" height="40" />
  <text class="ml-label" x="535" y="55">Predictions</text>
  <rect class="ml-rect" x="520" y="70" width="220" height="130" />
  <text class="ml-sub" x="535" y="95">Output form;</text>
  <text class="ml-sub" x="535" y="115">granularity;</text>
  <text class="ml-sub" x="535" y="135">latency budget</text>
  <rect class="ml-head" x="40" y="210" width="220" height="36" />
  <text class="ml-label" x="55" y="232">Data sources</text>
  <rect class="ml-rect" x="40" y="246" width="220" height="50" />
  <text class="ml-sub" x="55" y="270">Feeds, schemas,</text>
  <text class="ml-sub" x="55" y="286">freshness</text>
  <rect class="ml-head" x="280" y="210" width="220" height="36" />
  <text class="ml-label" x="295" y="232">Features</text>
  <rect class="ml-rect" x="280" y="246" width="220" height="50" />
  <text class="ml-sub" x="295" y="270">Transforms,</text>
  <text class="ml-sub" x="295" y="286">feature store</text>
  <rect class="ml-head" x="520" y="210" width="220" height="36" />
  <text class="ml-label" x="535" y="232">Serving</text>
  <rect class="ml-rect" x="520" y="246" width="220" height="50" />
  <text class="ml-sub" x="535" y="270">Runtime path,</text>
  <text class="ml-sub" x="535" y="286">SLA</text>
</svg>
</div>

*Six of the ten boxes shown; the ML canvas stacks value proposition, ML task, and predictions above data sources, features, and serving, with offline evaluation, live monitoring, decisions, and labels on the back page.*

## Anatomy

**Value proposition.** Who benefits and what problem is solved. The anchor cell — the rest of the canvas fails if the value is not named.

**ML task and decisions.** The classification/regression/ranking form and what decisions follow the output. *"Binary classification: truck needs priority reassignment (yes/no) → auto-queue for reassignment."*

**Predictions.** Output form, granularity, latency. *"Probability score ∈ [0,1] per truck per slot-state change event; emitted within 500ms of yard-map update."*

**Data sources.** Where features come from. Feeds, tables, schemas, update frequency. A missing source is an engagement show-stopper.

**Features.** The transforms from raw data to model input. Named, with an indication of where they live (feature store, inline).

**Serving.** The runtime path. API call, batch scoring, embedded. Latency SLA and availability.

**Offline evaluation.** The measurement substrate for training. Hold-out set, validation windows, metrics.

**Live monitoring.** Post-deployment metrics: input drift, prediction drift, performance drift. Alerts wired to whom?

**Decisions.** Who uses the prediction and how. Automatic? Human-in-the-loop? Escalate on low-confidence?

**Labels.** How ground-truth is generated. Produced by operators? Derived from outcomes? Absent?

## Example

??? example "Paper trail — ML canvas for the yard-slot allocator"
    *G3 Q3 ML canvas session, 95 minutes. Alex (ML engineer), Priya, Raj, Pat (platform architect). Chair: Ada.*

    *T+0 — value proposition.* Already on the AI canvas. Copied: *reduce unloading cycle time by targeting the 16-minute growth; benefit to drivers, carriers, operators.*

    *T+10 — ML task.* Alex: *"given yard state + truck + history, predict per-slot expected cycle time; action is rank-and-recommend."* ML task: *regression-then-ranking*. Decisions: *rank-top-3 presented to dispatcher for review.*

    *T+20 — predictions.* Prediction form: a score per candidate slot. Granularity: per truck, per slot. Latency: recommended within 15 seconds of check-in (matched to radio-handoff timing).

    *T+35 — data sources.* Alex lists: carrier feed (1-min updates), yard-map state (real-time from dispatcher radio log + 30-min digital), truck manifest (at gate), historical unload times (batch daily). Pat: *"the radio log isn't structured — we'd have to parse."* Recorded: *radio-log structured parsing is an open work item.*

    *T+50 — features.* Transforms: slot occupancy state, carrier tier, truck weight, historical unload-time-median-at-slot, time-of-day, day-of-week. Alex: *"about 40 features; most in existing feature store; three new ones — slot-history aggregations — to be added."* Work item: *three new features.*

    *T+65 — serving.* Pat: *"API call from dispatcher app, 500ms SLA, existing serving infra."* Acceptable.

    *T+75 — offline evaluation.* Alex: *"hold-out October-December 2025, 3 months, ~80,000 events. Metric: MAE on predicted cycle time vs. actual, plus top-1 accuracy of ranking vs. what an ideal assignment would have been (determined retrospectively)."* Ada: *"the retrospective ideal assumes we can reconstruct it. How?"* Alex: *"from aggregated outcomes — slot with lowest actual unload time."* Accepted with caveat: the retrospective ideal is approximate.

    *T+85 — live monitoring.* Prediction drift, operator override rate, input-feed freshness alerts. Alerts route to Priya (dashboard) and on-call SRE (wake-up). Work item: *monitoring dashboards to build.*

    *T+90 — decisions + labels.* Decision: dispatcher-reviewed ranking. Labels: outcome-derived (the actual unload time is the ground truth for the predicted cycle time). No explicit operator labels; good — nothing to manage.

    *T+95 — close.* Canvas filled. Three work items: radio-log parsing, three new features, monitoring dashboards. Feasibility verdict: ML-feasible within engagement horizon, with ~6 engineer-weeks of data work before shadow stage can begin.

## Pitfalls

**Canvas as a plan.** The ML canvas describes the system, not the schedule. The work-item list is the bridge.

**Serving cell left vague.** *"An API"* is not a serving description. Runtime, SLA, availability, fallback — all need specifics.

**Monitoring cell empty.** The most common omission. A model with no monitoring is a model that will silently drift. An empty monitoring cell is a G5 deferral that will bite at rollback.

**Labels cell as wishful thinking.** *"We'll get labels from the operators"* — without naming how and how often — is the premier cause of ML projects that ship a model and a promise. Labels are the canvas's most expensive cell.

**Offline-only evaluation.** A canvas with no live monitoring cell is a canvas that believes offline performance predicts live performance. It usually does not — operator behaviour, workarounds, and input drift are invisible offline.

**Overfitting the canvas to the hypothesised model.** The canvas is a feasibility check, not a model design. A wrong model can still have a completable canvas; a right model can still have an uncompletable one.

## When not to use

- Leaves whose routing is to rules (DMN) or to a fully-specified LLM with no learning loop. The canvas's cells are largely inapplicable.
- Leaves where the AI canvas is still incomplete. Fill the AI canvas first.
- Pure research engagements with no deployment horizon. The canvas's work-item list is premature.

## Provenance

Dorard's *ML Canvas* [1] is the canonical treatment; the template is widely taught in ML-engineering courses and used at the intersection of data science and product management. The underlying separation of value-proposition from operational feasibility is a contribution of the canvas literature more broadly, rooted in the Business Model Canvas [2].

## Related tools

- **AI canvas.** The upstream artefact; the ML canvas is its technical continuation.
- **Pair worksheet.** Used when the ML canvas surfaces multiple candidate algorithmic approaches that need direct comparison.
- **SIPOC.** Feeds the data-sources cell.

## Verification

[1] Dorard L. *Machine Learning Canvas v1.1*. louisdorard.com; 2019. **[verified]** The canonical ML canvas template and its cells.

[2] Osterwalder A, Pigneur Y. *Business Model Generation*. Wiley; 2010. **[verified]** The Business Model Canvas, from which the ML canvas form is adapted.
