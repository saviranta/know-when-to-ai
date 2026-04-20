# Toolkit — Rollback-trigger design

*Gate: G5 Commit. Category: controls artefact.*

## What problem it solves

*"We will roll back if it goes wrong"* is a sentence that has never fired. At G5, the commitment page needs rollback conditions a junior engineer can execute alone at 3 a.m. — not judgement calls that assume a senior is reachable. Rollback-trigger design converts an intent into numeric, time-bound, testable conditions attached to observable metrics, each with a pre-written action.

## How it is used

A **30–60 minute drafting session** with the named owner plus one on-call engineer. Each trigger is written as a single line on the commitment page. **Every trigger is then tested at least once in staging** before the piece ships — the simulation is the only evidence the trigger is a control rather than a note. In operations, triggers are re-examined at each review cadence; post-launch threshold adjustments require a loopback, not a silent edit.

## Inputs

- The piece's blast-radius paragraph (bounds the **window** — a trigger cannot wait longer than the piece's consequence time).
- The owner's default metrics dashboard (bounds the **metric** — a trigger must watch something the owner already sees).
- The rollback substrate the action reverts *to* (a prior rules baseline, a classical model, a human-operated workflow).
- The piece's baseline performance — pre-launch, not post-hoc — against which thresholds are chosen.
- Candidate failure modes from bow-tie mitigation-barrier defeat-modes, or STPA unsafe control actions (if those tools were used at G3).

## Outputs

- **Three to five one-line triggers** on the commitment page, each of the shape *metric M below threshold T for window W → action A*.
- For each trigger: a named metric, a numeric threshold, a duration window, and a one-sentence action executable by the on-call.
- A **staging verification log** showing each trigger has fired once in simulation and the action pathway ran to completion.

## Visualisation

<div style="max-width: 900px; margin: 2rem auto;">
<svg viewBox="0 0 800 320" xmlns="http://www.w3.org/2000/svg" role="img" aria-labelledby="rt-title">
  <title id="rt-title">Rollback trigger timeline: metric crosses threshold, holds out for window, fires action</title>
  <style>
    .rt-axis { stroke: var(--md-default-fg-color, #000); stroke-width: 1.2; fill: none; }
    .rt-threshold { stroke: var(--md-default-fg-color, #000); stroke-width: 1.2; fill: none; stroke-dasharray: 6,3; }
    .rt-metric { stroke: var(--md-default-fg-color, #000); stroke-width: 2.2; fill: none; }
    .rt-window { fill: var(--md-default-fg-color, #000); opacity: 0.08; stroke: var(--md-default-fg-color, #000); stroke-width: 1; stroke-dasharray: 3,2; }
    .rt-fire-line { stroke: var(--md-default-fg-color, #000); stroke-width: 1.8; fill: none; }
    .rt-arrow { fill: var(--md-default-fg-color, #000); }
    .rt-label { font: 700 12px -apple-system, BlinkMacSystemFont, sans-serif; fill: var(--md-default-fg-color, #000); }
    .rt-sub { font: 400 11px -apple-system, sans-serif; fill: var(--md-default-fg-color, #000); }
    .rt-tag { font: italic 10px -apple-system, sans-serif; fill: var(--md-default-fg-color, #000); opacity: 0.85; }
  </style>
  <defs>
    <marker id="rt-arrow-head" markerWidth="10" markerHeight="10" refX="9" refY="5" orient="auto">
      <path d="M0,0 L9,5 L0,10 z" class="rt-arrow"/>
    </marker>
  </defs>
  <line class="rt-axis" x1="60" y1="250" x2="750" y2="250" marker-end="url(#rt-arrow-head)" />
  <line class="rt-axis" x1="60" y1="250" x2="60" y2="40" marker-end="url(#rt-arrow-head)" />
  <text class="rt-sub" x="720" y="268">time</text>
  <text class="rt-sub" x="10" y="50">metric M</text>
  <line class="rt-threshold" x1="60" y1="160" x2="740" y2="160" />
  <text class="rt-tag" x="670" y="154">threshold T</text>
  <rect class="rt-window" x="290" y="40" width="230" height="210" />
  <text class="rt-tag" x="405" y="62" text-anchor="middle">window W</text>
  <text class="rt-tag" x="405" y="78" text-anchor="middle">metric must hold below T</text>
  <path class="rt-metric" d="M 60,110 L 200,100 L 260,130 L 300,195 L 500,210 L 560,200 L 620,175" />
  <line class="rt-fire-line" x1="520" y1="40" x2="520" y2="250" marker-end="url(#rt-arrow-head)" />
  <text class="rt-label" x="528" y="100">FIRE</text>
  <text class="rt-sub" x="528" y="118">action A</text>
  <text class="rt-tag" x="528" y="134">executable at 3 a.m.</text>
  <text class="rt-tag" x="528" y="148">by on-call alone</text>
  <text class="rt-label" x="400" y="298" text-anchor="middle">Metric M below threshold T for window W → action A</text>
</svg>
</div>

*The window filters two failure modes at once: noise (a single-sample excursion above the line) and recovery (a brief dip that self-corrects). The action fires only when the metric has held out of range for the full window — long enough to be real, short enough to beat the piece's consequence time.*

## Anatomy

Every trigger has four parts. Three are the *condition*; one is the *action*. All four are written on the commitment page.

**Metric.** The observable quantity the trigger watches. The metric must be on the owner's default dashboards, not reachable by a custom query. Common metrics: accuracy against a published baseline, P95 latency, override rate per shift, operator edit-rate on drafts, cost per call, error-budget burn. The metric must be one the owner has committed to watching, or the trigger is a spreadsheet artefact, not a control.

**Threshold.** The numeric value at which the metric leaves the certified operating range. The threshold is chosen before launch, not after; post-hoc thresholds encode rationalisation, not certification.

**Window.** The duration the metric must hold outside the threshold before the trigger fires. The window filters two failure modes at once: noise (a single-sample excursion) and recovery (a brief degradation that self-corrects). Window choice is informed by the piece's consequence time from blast-radius estimation: a piece whose harm accumulates for 24 hours cannot afford a 14-day window.

**Action.** One sentence describing what the rollback does — concretely enough that a junior engineer, reading it alone at 3 a.m., could execute it. *"Revert to rules"* is not an action; *"revert yard-slot allocation to the rules baseline for the affected region, freeze autonomous allocations, and notify the on-call"* is. If the action sentence cannot be written — because the rollback substrate does not exist, or because execution depends on a decision the owner does not have the authority to make — the trigger is not a trigger. It is a wish.

The trigger's written form on the commitment page is one line: *Metric M below threshold T for window W → action A*. A piece typically has three to five triggers, each one catching a distinct failure mode.

## Example

??? example "Paper trail — drafting and testing the allocator's rollback triggers"
    *Freight yard, [Chapter 9](ch-9.md), yard-slot allocator piece. Two sessions: a 55-minute drafting session, followed a week later by a 3-hour staging-verification session. Drafting participants: Priya Chen (owner); Kai Alvarez (on-call SRE); Mei Sato (safety). Staging-verification: Kai plus one junior SRE (Jordan Ng) who will inherit the on-call rotation. Output: three triggers on the commitment page, each with a staging-fired timestamp.*

    **Drafting session (55 minutes).**

    *T+0 — read the blast-radius paragraph first.* Priya reads the paragraph aloud: *"large blast, 24-hour operational time, hard-irreversible for dispatched drivers."* Kai: *"so no trigger window longer than, say, half the operational time — 12 hours, maybe less. Except drift triggers, which can afford weeks because they catch a different failure mode."*

    *T+10 — trigger 1 draft.* Priya: *"metric: allocation accuracy vs. the published carrier-volume baseline. Threshold: below 80% of baseline. Window: two consecutive weeks. Action: revert autonomous allocations to the rules baseline for all affected regions, freeze the allocator, on-call notified, post-mortem within one business week."* Mei: *"two weeks is too long for the 24-hour blast time."* Priya: *"this trigger is for drift, not acute failure. Drift at 80% over 2 weeks is real and actionable; acute failures need triggers 2 and 3."* Agreed — kept.

    *T+25 — trigger 2 draft.* Kai: *"metric: P95 allocation latency on the operator-facing queue. Threshold: above 45 seconds. Window: 48 hours. Action: revert to rules baseline for the region experiencing the latency; investigation before progressive expansion resumes."* Priya: *"48 hours is still long."* Kai: *"latency above 45s for 48h is either a real infrastructure problem or a deploy that broke caching. Either way, 48h of degraded latency at operator scale is painful but not driver-harmful — the allocator is still issuing valid assignments, just slowly. We can afford to observe."* Kept.

    *T+38 — trigger 3 draft.* Mei introduces the operator-override trigger from the bow-tie session: *"metric: operator override rate. Threshold: above 20% per region per shift. Window: one shift. Action: pause progressive expansion for the affected region; investigate the override reason-codes before resuming."* Priya: *"this is the one we would have missed. Accuracy metrics look clean while operators are doing the allocator's job behind its back — the override rate is the only metric that sees that."* Mei: *"short window because the shift is the natural unit — an operator shift is 8 hours, which is shorter than the 24-hour blast time, so the trigger fires before harm lands for a full horizon."* Kept.

    *T+50 — sanity pass.* Mei reads each trigger aloud with the junior-engineer test: *"could Jordan execute this action at 3 a.m. alone?"* Trigger 1 action is fine — there is a documented rollback script. Trigger 2 action passes. Trigger 3 action passes (it is a pause, not a revert). Three triggers on the commitment page. Draft handed to Kai for staging verification.

    **Staging-verification session, one week later (3 hours).**

    *T+0 — trigger 1.* Kai writes a staging script that drives the accuracy metric down to 75% for 14 consecutive simulated days. The trigger fires. The action script runs. The rollback to rules-baseline completes. The on-call page reaches Jordan's phone. **Pass.**

    *T+45 — trigger 2.* Kai simulates P95 latency at 60s for 48h. The trigger fires. The action script runs. And **fails**: the rollback command references a rules-baseline service path that was deprecated and renamed six months ago during an infrastructure consolidation. Jordan pages himself with the error. Kai writes a ticket and a fix. The commitment page does not ship until the fix is verified. Mei writes a note on the commitment page: *"trigger 2 staging-verified only after rollback-path fix 2026-03-29."*

    *T+120 — trigger 3.* Kai simulates operator override rate at 25% across one shift. The trigger fires. The action — pause progressive expansion — runs. The region's rollout flag flips to "paused". Jordan is notified. **Pass.**

    *T+160 — re-verify trigger 2 after fix.* Same script. This time the action completes correctly. **Pass.**

    *T+180 — close.* All three triggers have fired in staging. Each has a staging-timestamp on the commitment page. Jordan signs off as the junior engineer capable of executing the actions at 3 a.m. without escalation. The piece is cleared for its canary stage.

    **What the commitment page looks like at launch.** Three one-line triggers at the top of the page, followed by the staging-verification log entries and owner names. This is the audit trail a future reviewer can defend: each trigger has been tested once and the action pathway is verified to work. The fourth failure mode — *"trigger fires, action does not run"* — is the one that the first live firing usually finds. The staging session is the only defence.

    **Follow-up at month 3.** A minor threshold adjustment is proposed: accuracy threshold from 80% to 78%, because the baseline has been re-computed after a data correction. The team treats this as a loopback — the adjustment requires a fresh staging verification, not a silent edit. A new staging timestamp is written to the commitment page.

## Pitfalls

**Qualitative triggers.** *If the system seems to be misbehaving.* *If stakeholders report dissatisfaction.* *If data quality looks off.* None of these fire at 3 a.m. The junior-engineer test excludes them: a trigger is junior-engineer-executable, or it is not a trigger.

**Metrics that require a custom query.** A metric the owner has to go and compute is a metric the owner is not watching. Triggers built on metrics not on the default dashboard fire late or not at all. The fix is to require every trigger's metric to be one the owner would see during the review cadence.

**Thresholds set after launch.** The engagement goes live without thresholds; a month in, the team sets thresholds based on the data so far. The thresholds now certify the current behaviour as acceptable — whatever that behaviour is. Pre-launch thresholds are the only thresholds that carry certification weight; post-hoc thresholds encode whatever the system is already doing.

**Windows too long for the blast radius.** A 14-day window on a metric for a piece whose harm accumulates over 24 hours is a trigger that will fire only after the harm has landed seven times over. Window choice has to match blast radius, which is the paired sequencing lens at G4.

**The actionless trigger.** The condition fires; the action sentence is not executable. *"Revert to the prior substrate"* when the prior substrate has been retired; *"escalate to the governance council"* when the council meets monthly. A trigger with an unexecutable action is a log entry that predicts a failure and accompanies the failure to production.

**Composite triggers that hide their parts.** *If overall system health degrades* compresses three unrelated metrics into one judgement call. The fix is to write three triggers, one per metric, and let them fire independently. Composite health scores are dashboards, not triggers.

**Triggers that have never been tested.** A trigger that has never fired, not even in a simulation, is a trigger whose action pathway is unverified. The likely failure mode, when it fires for the first time in production, is that the action does not work — the playbook references a system that has moved, the on-call escalation goes to a retired role, the rollback script has not been updated since a substrate change. Test every trigger at least once in staging before the piece ships.

## When not to use

- The piece is *Human-operated* and has no automated substrate to revert. G5 still needs triggers — operator-volume thresholds, escalation-time limits — but the rollback vocabulary is *retrain, rewrite the playbook*, not *revert to substrate*.
- The piece is fully reversible within seconds by an operator-visible control (a single toggle in the operator's interface). In this case the trigger is still drafted, but the action is the toggle — a one-line action that does not need a junior-engineer test because the operator already has the control.
- The engagement is at Q-1 and has not reached G3. Triggers without a routed piece and a substrate are speculative; the piece must exist before its triggers can be drafted.

## Provenance

Google's Site Reliability Engineering practice formalised the trigger-threshold-window shape through error-budget policies and on-call playbooks [2]. The *junior engineer at 3 a.m.* test is the SRE on-call runbook discipline rendered into a drafting rule. The ISO/IEC 42001 management-system standard [3] and the NIST AI Risk Management Framework [4] both require rollback triggers as part of operational controls but do not supply the engineering shape; the shape comes from SRE. SMACTR [1] adds the audit discipline: a trigger that has never fired in staging is not yet a control.

## Related tools

- **Named-owner discipline (DRI / single-threaded leader).** Paired G5 tool. A trigger without an owner fires into a void. The owner is the person with both the visibility into the metric and the authority to execute the action.
- **Review-cadence matrix.** The other half of operational surveillance. Triggers catch conditions that cross a line; the cadence catches drift that stays below the line. The two together bound the owner's surveillance cost.
- **Sunset criteria worksheet.** A sunset is a trigger at a longer horizon: *over months or quarters, has the piece earned its continued existence?*. Triggers act on operational failure; sunsets act on strategic failure. The drafting discipline is the same.
- **Blast-radius estimation.** Sets the window ceiling. A trigger's window cannot exceed the piece's consequence time without letting harm land before the trigger fires.
- **Three-stage rollout pattern.** The substrate the trigger actions revert *to*. Without the shadow or canary stage still live, the action sentence may have nothing to name.

## Verification

[1] Raji ID, Smart A, White RN, Mitchell M, Gebru T, Hutchinson B, Smith-Loud J, Theron D, Barnes P. Closing the AI accountability gap: defining an end-to-end framework for internal algorithmic auditing. In: *Proceedings of the 2020 Conference on Fairness, Accountability, and Transparency*. ACM; 2020. p. 33–44. **[verified]** The SMACTR protocol's *Testing* phase supplies the audit discipline behind the *has this trigger ever fired?* rule.

[2] Beyer B, Jones C, Petoff J, Murphy NR, editors. *Site Reliability Engineering: How Google Runs Production Systems*. O'Reilly; 2016. **[verified]** The error-budget-policy and on-call chapters formalise the metric-threshold-window shape and the junior-engineer playbook test.

[3] International Organization for Standardization. *ISO/IEC 42001:2023 — Information technology — Artificial intelligence — Management system*. ISO; 2023. **[verified]** Management-system clauses on operational controls and monitoring reference triggers without supplying the engineering shape.

[4] National Institute of Standards and Technology. *Artificial Intelligence Risk Management Framework (AI RMF 1.0)*. NIST; 2023. **[verified]** The *Manage* function requires rollback triggers as part of risk response and monitoring.
