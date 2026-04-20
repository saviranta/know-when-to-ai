# Toolkit — Rollback-trigger design

*Gate: G5 Commit. Category: controls artefact.*

## Purpose

Draft rollback triggers that fire without a meeting. A trigger is a pre-declared condition that, when met, causes a routed piece to revert to a prior substrate. The tool's job is to turn *we will roll back if it goes wrong* — a sentence that has never fired — into numeric, time-bound, testable conditions that a junior engineer can execute at 3 a.m. without calling anyone.

## Anatomy

Every trigger has four parts. Three are the *condition*; one is the *action*. All four are written on the commitment page.

**Metric.** The observable quantity the trigger watches. The metric must be on the owner's default dashboards, not reachable by a custom query. Common metrics: accuracy against a published baseline, P95 latency, override rate per shift, operator edit-rate on drafts, cost per call, error-budget burn. The metric must be one the owner has committed to watching, or the trigger is a spreadsheet artefact, not a control.

**Threshold.** The numeric value at which the metric leaves the certified operating range. The threshold is chosen before launch, not after; post-hoc thresholds encode rationalisation, not certification.

**Window.** The duration the metric must hold outside the threshold before the trigger fires. The window filters two failure modes at once: noise (a single-sample excursion) and recovery (a brief degradation that self-corrects). Window choice is informed by the piece's consequence time from blast-radius estimation: a piece whose harm accumulates for 24 hours cannot afford a 14-day window.

**Action.** One sentence describing what the rollback does — concretely enough that a junior engineer, reading it alone at 3 a.m., could execute it. *"Revert to rules"* is not an action; *"revert yard-slot allocation to the rules baseline for the affected region, freeze autonomous allocations, and notify the on-call"* is. If the action sentence cannot be written — because the rollback substrate does not exist, or because execution depends on a decision the owner does not have the authority to make — the trigger is not a trigger. It is a wish.

The trigger's written form on the commitment page is one line: *Metric M below threshold T for window W → action A*. A piece typically has three to five triggers, each one catching a distinct failure mode.

## Example

Freight yard, [Chapter 9](ch-9.md), yard-slot allocator piece. Three triggers on the commitment page.

**Trigger 1.** Metric: allocation accuracy against the published carrier-volume baseline. Threshold: below 80% of baseline. Window: two consecutive weeks. Action: *revert autonomous allocations to the rules baseline for all affected regions; freeze the allocator; on-call notified; post-mortem within one business week.*

**Trigger 2.** Metric: P95 allocation latency on the operator-facing queue. Threshold: above 45 seconds. Window: 48 hours. Action: *revert to rules baseline for the region experiencing the latency; investigation before progressive expansion resumes.*

**Trigger 3.** Metric: operator override rate on allocator outputs. Threshold: above 20% of a region's shift total. Window: one shift. Action: *pause progressive expansion for the affected region; investigate the override reason-codes before resuming.*

The three triggers catch three distinct failure modes: model drift (Trigger 1), infrastructure degradation (Trigger 2), and operator-visible quality loss that the accuracy metric misses because operator override corrects it before the comparison metric can see it (Trigger 3). The third trigger is the one most commonly missed — accuracy metrics look clean while operators are doing the allocator's job behind its back.

A useful diagnostic for each trigger: *has this trigger ever fired, even in staging?* A trigger that has never fired is untested. The SMACTR audit protocol [1] recommends simulating the trigger's failure mode and watching the action execute; the simulation is the only evidence the trigger is a control rather than a note.

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
