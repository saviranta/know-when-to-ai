# Toolkit — Controlled A/B

*Gate: G3 Route (Q3a empirical reads). Category: empirical read substrate.*

## What problem it solves

Shadow deployment confirms the model agrees with the substrate. It does not confirm the model is *better*. Value — shorter cycle times, fewer errors, higher throughput — is measurable only when the model actually acts. Controlled A/B is the experimental substrate that isolates the model's effect on outcomes. A random slice of traffic is actioned by the model; the rest continues on the existing substrate; outcomes are compared. Done carefully, it produces the first real evidence that the piece is worth keeping. Done carelessly, it produces a number that cannot be trusted.

## How it is used

A **4–12 week experimental trial**, typically run as the canary stage of the three-stage rollout. Traffic is randomly split at a stable unit (yard, carrier, user, shift). Treatment gets the model's recommendation actioned; control continues on the existing substrate. Pre-declared primary and guardrail metrics are tracked. Statistical analysis at pre-declared checkpoints decides promote / hold / roll back. The trial ends at the pre-declared minimum runtime *or* the pre-declared early-stop condition, whichever comes first.

## Inputs

- A piece that has cleared offline evaluation and shadow deployment.
- A randomisation unit that is stable (same unit does not flip mid-experiment).
- Pre-declared primary metric, guardrail metrics, minimum detectable effect, and runtime.
- Pre-declared stopping rules (promotion threshold, rollback trigger, early-stop condition).
- Instrumentation to capture outcomes for both arms.

## Outputs

- An **experimental report**: treatment vs. control on primary and guardrail metrics, with confidence intervals.
- A **decision**: promote to full rollout, hold (keep running), or roll back.
- A **learning log**: what about the experimental conduct was surprising (selection bias, interference, sample-ratio mismatches).

## Visualisation

<div style="max-width: 900px; margin: 2rem auto;">
<svg viewBox="0 0 800 280" xmlns="http://www.w3.org/2000/svg" role="img" aria-labelledby="ab-title">
  <title id="ab-title">Controlled A/B — randomised split of traffic, treatment arm receives model actions, control receives substrate, outcomes compared</title>
  <style>
    .ab-rect { fill: var(--md-default-bg-color, #fff); stroke: var(--md-default-fg-color, #000); stroke-width: 1.4; }
    .ab-treat { fill: var(--md-default-fg-color, #000); opacity: 0.08; stroke: var(--md-default-fg-color, #000); stroke-width: 1.4; }
    .ab-line { stroke: var(--md-default-fg-color, #000); stroke-width: 1.2; fill: none; }
    .ab-thin { stroke: var(--md-default-fg-color, #000); stroke-width: 0.6; fill: none; stroke-dasharray: 3,2; }
    .ab-arrow { fill: var(--md-default-fg-color, #000); }
    .ab-label { font: 700 12px -apple-system, sans-serif; fill: var(--md-default-fg-color, #000); text-anchor: middle; }
    .ab-sub { font: 400 10px -apple-system, sans-serif; fill: var(--md-default-fg-color, #000); text-anchor: middle; }
    .ab-tag { font: italic 10px -apple-system, sans-serif; fill: var(--md-default-fg-color, #000); text-anchor: middle; opacity: 0.8; }
  </style>
  <defs><marker id="ab-a" markerWidth="9" markerHeight="9" refX="8" refY="4.5" orient="auto"><path d="M0,0 L8,4.5 L0,9 z" class="ab-arrow"/></marker></defs>
  <rect class="ab-rect" x="30" y="110" width="130" height="60" />
  <text class="ab-label" x="95" y="135">Traffic</text>
  <text class="ab-sub" x="95" y="155">stable unit</text>
  <rect class="ab-rect" x="200" y="110" width="110" height="60" />
  <text class="ab-label" x="255" y="135">Randomiser</text>
  <text class="ab-sub" x="255" y="155">50/50 split</text>
  <line class="ab-line" x1="160" y1="140" x2="200" y2="140" marker-end="url(#ab-a)" />
  <line class="ab-line" x1="310" y1="130" x2="380" y2="60" marker-end="url(#ab-a)" />
  <line class="ab-line" x1="310" y1="150" x2="380" y2="220" marker-end="url(#ab-a)" />
  <rect class="ab-treat" x="380" y="30" width="200" height="60" />
  <text class="ab-label" x="480" y="55">Treatment</text>
  <text class="ab-sub" x="480" y="75">model actioned</text>
  <rect class="ab-rect" x="380" y="190" width="200" height="60" />
  <text class="ab-label" x="480" y="215">Control</text>
  <text class="ab-sub" x="480" y="235">substrate actioned</text>
  <line class="ab-line" x1="580" y1="60" x2="650" y2="130" marker-end="url(#ab-a)" />
  <line class="ab-line" x1="580" y1="220" x2="650" y2="150" marker-end="url(#ab-a)" />
  <rect class="ab-rect" x="650" y="110" width="130" height="60" />
  <text class="ab-label" x="715" y="130">Outcome</text>
  <text class="ab-label" x="715" y="148">comparison</text>
  <text class="ab-sub" x="715" y="163">primary + guardrails</text>
  <line class="ab-thin" x1="255" y1="95" x2="255" y2="75" />
  <text class="ab-tag" x="255" y="70">random at stable unit</text>
  <text class="ab-tag" x="400" y="270">Both arms run simultaneously; outcomes compared with confidence intervals against pre-declared metrics.</text>
</svg>
</div>

*Traffic splits at a stable unit; treatment is actioned by the model, control by the substrate; outcomes are compared for primary and guardrail metrics.*

## Anatomy

**Randomisation unit.** The unit at which the split happens. User-level randomisation is common for consumer software; for operational systems, the unit is often an operational object (yard, shift, carrier). The unit must be stable — if units can flip arms mid-experiment, the causal inference breaks.

**Primary metric.** The outcome the piece is supposed to improve. Pre-declared. Usually one number: cycle time reduction, conversion rate, error rate.

**Guardrail metrics.** Things that must not get worse. Dispatcher override rate, safety events, complaint volume. Guardrails have pre-declared thresholds; breaching them triggers rollback even if the primary metric is positive.

**Minimum detectable effect.** The smallest effect size the experiment is powered to detect. Informs the runtime and sample size. A 2-week experiment cannot detect a 1% effect on a low-volume piece; admitting this up front prevents false negatives.

**Stopping rules.** Three pre-declared conditions: (1) the runtime has completed and the result is significant — promote or roll back by the result; (2) a guardrail breaches — immediate rollback regardless of primary; (3) the primary metric shows a large unambiguous effect early — promote or roll back before minimum runtime, using pre-declared early-stop statistical criterion.

**Sample-ratio mismatch check.** The first thing to check once the experiment launches is whether the actual arm sizes match the intended ratio. A 50/50 split that arrives as 48/52 may indicate a bug in the randomiser. Mismatches, once detected, invalidate the experiment until fixed.

## Example

??? example "Paper trail — A/B for the yard-slot allocator at pilot yard"
    *G3a canary stage (controlled A/B), W20–W23 of 2026. Alex (ML), Priya (owner), Chen (dispatcher lead), Raj (engineering). Pilot yard A.*

    *Setup.* Randomisation unit: carrier arrival (at yard A, with its stable carrier base). 50/50 split. Primary metric: mean cycle-time (unload + undock). Pre-declared floor for promotion: 6% reduction vs. control over 4 weeks. Guardrail metrics: (a) dispatcher override rate — must not increase by >20 percentage points; (b) safety events — must not increase; (c) carrier complaints — must not increase.

    *W20 day 1.* Launch. Sample-ratio check: 51.2 / 48.8 over first 400 arrivals. Within tolerance.

    *W20 day 4.* Randomiser bug surfaces — a subset of carriers was being routed to treatment preferentially due to a carrier-ID hash collision. 3% of traffic affected. Raj patches; team decides to exclude the affected 3% from the analysis rather than restart. Decision documented.

    *W21 checkpoint.* 2 weeks in. Treatment cycle-time 41.2 min; control 43.8 min. 5.9% reduction. Below the 6% floor, but within the minimum-detectable-effect range. Guardrails: override rate treatment 18%, control 14% — within tolerance. Safety events: 0 in both. Complaints: 2 treatment, 1 control — no signal.

    *W22 day 3 — early stop consideration.* Effect appears to be widening: cycle-time reduction now 8.2%. Pre-declared early-stop criterion: only if effect ≥ 10% with p < 0.01 on a Peeking-adjusted test. 8.2% does not meet the criterion; continue to full runtime.

    *W23 day 7 — final analysis.* 4 weeks complete. Treatment cycle-time 40.9 min; control 43.5 min. 6.0% reduction, 95% CI [4.1%, 7.9%]. Above the pre-declared floor with margin. Guardrails: override rate treatment 19%, control 14% — within tolerance. Safety events: 1 treatment (unrelated to model — confirmed by Chen), 0 control. Complaints: no difference.

    *W23 day 9 — decision.* Promote. The primary metric cleared the floor. Guardrails held. The pre-declared threshold was met.

    *Progressive rollout.* W24: all of yard A onto the model. W26: yard B enters shadow. Full rollout plan proceeds as per the three-stage rollout substrate.

## Pitfalls

**Metric fishing.** Running the experiment with no pre-declared primary, then reporting whichever metric looked best. This is how A/Bs become marketing exercises.

**Peeking without adjustment.** Checking the p-value every day and stopping when it crosses 0.05. Inflates false-positive rate dramatically. Use Peeking-adjusted tests (sequential probability ratio, group sequential) or commit to a fixed runtime.

**Interference between arms.** Treatment and control are supposed to be independent. If one arm's behaviour affects the other (shared resource pool, spillover effects), the causal inference is contaminated. Interference is the hardest pitfall to diagnose — often only surfaces post-hoc.

**Guardrail lip service.** Declaring guardrails then not acting on them when they trip. The entire point of guardrails is that the primary metric can look good and still the rollout is wrong. Acting is the commitment.

**Ignoring heterogeneity.** An aggregate 5% improvement can mask 10% improvement on 80% of users and 20% degradation on 20%. Subgroup analysis, pre-declared, catches this.

**Short runtime on cyclical systems.** A 4-day experiment on a system with weekly cycles captures one cycle and may mistake cycle variance for treatment effect. Runtime should cover multiple cycles of the piece's natural period.

**Novelty effect.** Users respond to the *change*, not the *model*. The effect fades. Running longer, or including a reverse cross-over, helps; committing to promote on the basis of novelty effect does not.

## When not to use

- Pieces where running two arms simultaneously is impossible (e.g., single-decision systems where the substrate and the model cannot both act on the same case without interference).
- Pieces with too little traffic to detect the effect size of interest in a reasonable runtime — shadow + longer canary with a different design (interrupted time series, switch-back) may work instead.
- Pieces whose effect is long-latency (e.g., 6-month retention). A/B takes longer than the engagement can wait; the engagement proceeds on shorter-latency proxies with explicit acknowledgement.

## Provenance

Controlled A/B experimentation in software engineering is documented extensively in Kohavi, Tang, and Xu's *Trustworthy Online Controlled Experiments* [1]. The statistical foundations trace back to Fisher's *The Design of Experiments* [2]. Production discipline around guardrails and sample-ratio mismatch is covered in Kohavi et al.'s earlier practitioner papers [3].

## Related tools

- **Three-stage rollout.** A/B is the canary stage of the broader rollout substrate.
- **Shadow deployment.** Prerequisite; A/B should not be the first live-action stage.
- **Rollback-trigger design (G5).** Guardrail thresholds from A/B translate into rollback triggers for ongoing operation.

## Verification

[1] Kohavi R, Tang D, Xu Y. *Trustworthy Online Controlled Experiments: A Practical Guide to A/B Testing*. Cambridge University Press; 2020. **[verified]** The canonical industry treatment.

[2] Fisher RA. *The Design of Experiments*. Oliver and Boyd; 1935. **[verified]** Statistical foundations of controlled experimentation.

[3] Kohavi R, Deng A, Frasca B, Walker T, Xu Y, Pohlmann N. Online controlled experiments at large scale. *KDD '13*. 2013. **[verified]** Industry discipline around experiment integrity, SRM, and guardrails.
