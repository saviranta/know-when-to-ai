# Toolkit — Shadow deployment

*Gate: G3 Route (Q3a empirical reads). Category: empirical read substrate.*

## What problem it solves

Offline evaluation scores the model on historical data. Users and operators behave in ways that historical data doesn't capture — they override, they work around, they react to the model's outputs in ways that shift the input distribution. Shadow deployment runs the model on real live inputs without actioning its outputs, so the engagement gets an empirical read of the model *in situ* before any user consequence. It is the first stage of the three-stage rollout substrate.

## How it is used

A **longitudinal trial in operations**, typically 2–6 weeks depending on volume and variance. The piece is deployed to the live input feed; its outputs are logged but not actioned. In parallel, the current substrate (rules, dispatcher, operator judgement) makes the actual decisions. The logs are compared at fixed intervals against the substrate's decisions — agreement rate, disagreement patterns, latency distribution.

## Inputs

- A production-ready model, feature pipeline, and serving substrate.
- Live input access (carrier feed, yard state, whatever the piece consumes).
- A comparator — the current substrate's outputs, captured in a structured form.
- A pre-declared promotion threshold (what agreement rate permits moving to canary).

## Outputs

- A **shadow run log** — every model output, timestamped, with input snapshot.
- A **comparison report** — agreement rate, disagreement distribution, per-condition performance.
- **Flagged divergences** — specific input classes where the model and the substrate disagree substantially. These are the primary learning.
- A **go/no-go decision** for the canary stage, with the pre-declared threshold as the arbiter.

## Visualisation

<div style="max-width: 900px; margin: 2rem auto;">
<svg viewBox="0 0 800 260" xmlns="http://www.w3.org/2000/svg" role="img" aria-labelledby="sd-title">
  <title id="sd-title">Shadow deployment — live input feeds both the model (shadow) and the substrate (actioned), outputs compared offline</title>
  <style>
    .sd-rect { fill: var(--md-default-bg-color, #fff); stroke: var(--md-default-fg-color, #000); stroke-width: 1.4; }
    .sd-shadow { fill: var(--md-default-bg-color, #fff); stroke: var(--md-default-fg-color, #000); stroke-width: 1.2; stroke-dasharray: 4,3; }
    .sd-line { stroke: var(--md-default-fg-color, #000); stroke-width: 1.2; fill: none; }
    .sd-arrow { fill: var(--md-default-fg-color, #000); }
    .sd-label { font: 700 12px -apple-system, sans-serif; fill: var(--md-default-fg-color, #000); text-anchor: middle; }
    .sd-sub { font: 400 10px -apple-system, sans-serif; fill: var(--md-default-fg-color, #000); text-anchor: middle; }
    .sd-tag { font: italic 10px -apple-system, sans-serif; fill: var(--md-default-fg-color, #000); text-anchor: middle; opacity: 0.8; }
  </style>
  <defs><marker id="sd-a" markerWidth="9" markerHeight="9" refX="8" refY="4.5" orient="auto"><path d="M0,0 L8,4.5 L0,9 z" class="sd-arrow"/></marker></defs>
  <rect class="sd-rect" x="40" y="100" width="140" height="60" />
  <text class="sd-label" x="110" y="125">Live input feed</text>
  <text class="sd-sub" x="110" y="145">carrier + yard state</text>
  <line class="sd-line" x1="180" y1="115" x2="300" y2="60" marker-end="url(#sd-a)" />
  <line class="sd-line" x1="180" y1="145" x2="300" y2="200" marker-end="url(#sd-a)" />
  <rect class="sd-shadow" x="300" y="30" width="180" height="60" />
  <text class="sd-label" x="390" y="55">Model (shadow)</text>
  <text class="sd-sub" x="390" y="75">logged, not actioned</text>
  <rect class="sd-rect" x="300" y="170" width="180" height="60" />
  <text class="sd-label" x="390" y="195">Substrate</text>
  <text class="sd-sub" x="390" y="215">actioned by operator</text>
  <line class="sd-line" x1="480" y1="60" x2="620" y2="120" marker-end="url(#sd-a)" />
  <line class="sd-line" x1="480" y1="200" x2="620" y2="140" marker-end="url(#sd-a)" />
  <rect class="sd-rect" x="620" y="100" width="140" height="60" />
  <text class="sd-label" x="690" y="125">Comparator</text>
  <text class="sd-sub" x="690" y="145">agreement rate</text>
  <text class="sd-tag" x="400" y="250">The shadow output is compared to the actioned substrate output; disagreement is the learning signal.</text>
</svg>
</div>

*Live input feeds both paths. The shadow model's outputs are logged only; the substrate's outputs are actioned. Comparison happens offline, later.*

## Anatomy

**Shadow piece.** The model deployed in full production infrastructure — same data access, same serving path — with a gate that suppresses the output from downstream action.

**Comparator substrate.** What is actually doing the work today (rules, dispatcher). The comparator must produce outputs in a form the model's outputs can be compared to; this often requires instrumenting the substrate to log its decisions structurally.

**Agreement metric.** Depends on the prediction form. For ranking tasks: top-k overlap. For regression: MAE. For classification: accuracy. The metric must have been pre-declared at the ML canvas stage.

**Disagreement distribution.** Not just the aggregate agreement rate but the *where* of disagreement. A model that disagrees 15% of the time but only on a specific condition (weekend priority) is a different story from one that disagrees 15% uniformly.

**Promotion threshold.** Pre-declared at G3. *"Promote to canary if agreement ≥ 85% over 3 consecutive weeks across a representative input distribution."* Changing the threshold after the fact defeats the empirical read.

**Shadow duration.** Long enough to cover the leaf's natural cycle. For freight-yard: 3 weeks covers weekday/weekend variation and some seasonal spread. For billing cycles: at least one full cycle.

## Example

??? example "Paper trail — shadowing the allocator for 3 weeks"
    *G3a shadow stage, weeks W16-W18 of 2026. Alex (ML), Priya, Raj, Chen.*

    *W16 day 1.* Shadow piece goes live. Model predictions logged to a parallel store; dispatcher continues to use the rules substrate for actual slot assignments.

    *W16 day 7.* First weekly comparison. Aggregate agreement (top-1 slot match between model recommendation and dispatcher's actual assignment): 87%. Above threshold. But: disagreement clusters on weekend priority cases — 62% agreement there. Training-data gap from the ML canvas is confirmed by live data.

    *W17 day 4.* Alex investigates a specific disagreement event. Carrier called priority; dispatcher assigned to bay 7. Model recommended bay 3 (nominally closer, but in a bay reassignment pattern the model's training data under-represents). Dispatcher's choice was right; model's was feasible-but-worse. The failure mode is *model blind spot on a known training gap*, not novel.

    *W17 day 10.* Priya meets with Chen and Martinez. Shows them a sample of the model's recommendations side-by-side with their decisions. Chen: *"most of these would be fine. The priority ones would make us fight — the model doesn't know carrier relationship history."* Documented: model cannot encode relationship history; this is the piece's boundary. Acceptable if the dispatcher-in-the-loop action catches it.

    *W18 day 7.* Final weekly comparison. Aggregate agreement over 3 weeks: 85% (weekday 91%, weekend 71%). Above threshold on aggregate; below on weekend. Team discusses: the canary stage is limited to weekday operations, so the weekend gap does not block canary. A separate, longer shadow is scheduled for weekend cases.

    *W18 day 10 — go/no-go.* Pre-declared threshold (≥85%) met on aggregate. Decision: promote to canary, weekday-only, one region. Weekend expansion deferred.

## Pitfalls

**Shadow that isn't shadow.** The model's output leaks into some downstream decision — used for a training signal, shown to an operator, logged in a system that feeds back. Once leakage happens, the input distribution is no longer *what the substrate would produce alone*; the shadow comparison is contaminated.

**Comparator unreachable.** The substrate makes its decisions without logging them structurally. Comparison becomes impossible; the shadow stage produces no read.

**Threshold moved at the last minute.** *"Well, 83% is basically 85%."* The pre-declared threshold is the commitment; moving it is how shadow becomes ceremony.

**Aggregate without distribution.** 85% agreement aggregated looks fine; 91% weekday and 71% weekend is a different picture. Aggregate-only reporting is how subpopulation failures go undetected.

**Too short a shadow window.** Three days is not a shadow; it's a smoke test. The window has to cover the input's natural cycles.

**Promoting on agreement alone.** Agreement with the substrate means the model matches today's behaviour. It doesn't mean the model is better; improvement is measurable only post-canary when the model is actioned. Shadow is a safety gate, not a value demonstration.

## When not to use

- Substrates that cannot be instrumented to produce comparable outputs. No comparator, no shadow.
- Pieces with no current substrate at all (greenfield) — shadow has nothing to compare against; direct canary with tight controls replaces it.
- Pieces with so little traffic that a month of shadow provides < 100 comparisons. Statistical power too low.

## Provenance

Shadow deployment is standard large-scale continuous-delivery practice, documented in Humble and Farley's *Continuous Delivery* [1] and in Google's SRE book [2]. The specific discipline for ML systems — sometimes called *shadow mode* or *champion-challenger* — is treated in Huyen's *Designing Machine Learning Systems* [3].

## Related tools

- **Three-stage rollout.** The broader rollout substrate shadow is the first stage of.
- **Offline evaluation.** Runs before shadow; shadow reveals what offline didn't.
- **Controlled A/B.** Often runs after shadow, at the canary stage.

## Verification

[1] Humble J, Farley D. *Continuous Delivery: Reliable Software Releases through Build, Test, and Deployment Automation*. Addison-Wesley; 2010. **[verified]** Documents shadow mode as a canonical rollout stage.

[2] Beyer B, Jones C, Petoff J, Murphy NR, editors. *Site Reliability Engineering: How Google Runs Production Systems*. O'Reilly; 2016. **[verified]** Operational discipline around shadow, canary, and progressive rollout.

[3] Huyen C. *Designing Machine Learning Systems*. O'Reilly; 2022. **[verified]** ML-specific treatment of shadow and champion-challenger patterns.
