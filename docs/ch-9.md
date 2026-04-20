# Chapter 9 — G5 Commit

G5 is the fifth Tier-1 gate and the last before implementation. It reads the dependency order from G4 and closes when a single one-page **commitment** exists, acknowledged by a named owner, binding four things to the engagement: who owns the outcome, what triggers a rollback, how often the owner reviews, and what criteria sunset the engagement. The gate is done when the page exists, the owner has signed it by name, and each trigger and criterion is numeric and time-bound enough to fire without a meeting.

Most engagements skip this gate. When the engagement misbehaves afterwards, a predictable pattern follows: no one has the authority to stop it, the decision to keep running drifts through a mailing list, the bad behaviour continues for months, and the post-mortem names *ambiguity of ownership* as the root cause. G5's artefact is narrow on purpose. Its job is to pre-empt that drift.

This chapter teaches the commitment page, the anti-patterns that erode it, and the tools that keep it honest. The freight-yard example from [Chapter 8](ch-8.md) runs through; by the end, each of the four ordered pieces has a commitment. Illustration 9.1 gives the gate's generic anatomy. Illustration 9.2 instantiates it on the freight yard's riskiest piece — the yard-slot allocator — where the commitment does the most work.

<div style="max-width: 880px; margin: 2rem auto;">
<svg viewBox="0 0 800 460" xmlns="http://www.w3.org/2000/svg" role="img" aria-labelledby="ch9-ill91-title">
  <title id="ch9-ill91-title">G5 Commit — generic anatomy</title>

  <style>
    .ch9c-node { fill: var(--md-default-bg-color, #fff); stroke: var(--md-default-fg-color, #000); stroke-width: 1.5; }
    .ch9c-node-top { fill: var(--md-default-bg-color, #fff); stroke: var(--md-default-fg-color, #000); stroke-width: 2.5; }
    .ch9c-node-heavy { fill: var(--md-default-bg-color, #fff); stroke: var(--md-default-fg-color, #000); stroke-width: 3; }
    .ch9c-label { font: 700 11px -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif; fill: var(--md-default-fg-color, #000); text-anchor: middle; }
    .ch9c-field { font: 700 10px -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif; fill: var(--md-default-fg-color, #000); text-anchor: start; }
    .ch9c-fill { font: italic 10px -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif; fill: var(--md-default-fg-color, #000); text-anchor: start; opacity: 0.8; }
    .ch9c-sub { font: italic 9px -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif; fill: var(--md-default-fg-color, #000); text-anchor: middle; opacity: 0.8; }
    .ch9c-tag { font: 500 9px -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif; letter-spacing: 0.08em; text-transform: uppercase; fill: var(--md-default-fg-color, #000); text-anchor: middle; opacity: 0.7; }
    .ch9c-arrow { stroke: var(--md-default-fg-color, #000); stroke-width: 1.5; fill: none; }
    .ch9c-head { fill: var(--md-default-fg-color, #000); }
    .ch9c-band { font: 500 10px -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif; letter-spacing: 0.18em; text-transform: uppercase; fill: var(--md-default-fg-color, #000); text-anchor: middle; opacity: 0.6; }
  </style>

  <text class="ch9c-band" x="400" y="22">G5 Commit &mdash; generic anatomy</text>

  <rect class="ch9c-node-top" x="250" y="40" width="300" height="55" rx="4" />
  <text class="ch9c-label" x="400" y="62">Dependency order (from G4)</text>
  <text class="ch9c-sub" x="400" y="80">Numbered sequence with reversibility and blast-radius tags.</text>

  <line class="ch9c-arrow" x1="400" y1="95" x2="400" y2="120" />

  <rect class="ch9c-node-heavy" x="100" y="120" width="600" height="270" rx="4" />
  <text class="ch9c-tag" x="400" y="140">The commitment &mdash; one page per piece</text>

  <line class="ch9c-arrow" x1="130" y1="155" x2="670" y2="155" />

  <text class="ch9c-field" x="135" y="185">Owner</text>
  <text class="ch9c-fill" x="200" y="185">One named person. Not a committee, not a role, not a rotating seat.</text>
  <line class="ch9c-arrow" x1="130" y1="195" x2="670" y2="195" />

  <text class="ch9c-field" x="135" y="225">Rollback triggers</text>
  <text class="ch9c-fill" x="250" y="225">Numeric and time-bound. Fire without a meeting.</text>
  <text class="ch9c-fill" x="250" y="240">Example: accuracy drops below X for two weeks &rarr; revert to rules.</text>
  <line class="ch9c-arrow" x1="130" y1="250" x2="670" y2="250" />

  <text class="ch9c-field" x="135" y="280">Review cadence</text>
  <text class="ch9c-fill" x="250" y="280">Matches the piece's consequence time.</text>
  <text class="ch9c-fill" x="250" y="295">Weekly for autonomous, monthly for assistant, quarterly for rules.</text>
  <line class="ch9c-arrow" x1="130" y1="305" x2="670" y2="305" />

  <text class="ch9c-field" x="135" y="335">Sunset criteria</text>
  <text class="ch9c-fill" x="250" y="335">Pre-committed conditions to stop running, written before launch.</text>
  <text class="ch9c-fill" x="250" y="350">Example: if adoption &lt; Y after six months, retire the piece.</text>
  <line class="ch9c-arrow" x1="130" y1="360" x2="670" y2="360" />

  <text class="ch9c-fill" x="135" y="380">Owner signature: ___________________</text>

  <line class="ch9c-arrow" x1="400" y1="390" x2="400" y2="415" />

  <rect class="ch9c-node-top" x="200" y="415" width="400" height="30" rx="4" />
  <text class="ch9c-label" x="400" y="434">Forward to implementation</text>
</svg>
</div>

*Illustration 9.1 — G5 Commit, generic anatomy. One page per piece in the dependency order. Four fields: owner, rollback triggers, review cadence, sunset criteria. The signature line is where a person accepts the outcome; without it, the page is a draft, and the method does not cross into implementation with a draft.*

## 9.1 What a commitment is

A commitment is a refusal to defer. The four fields on the page are each a small refusal: to let ownership diffuse, to let rollback depend on judgement under pressure, to let review depend on whoever happens to remember, to let the engagement outlive its usefulness because nobody wrote down when it should end.

Each refusal answers a failure mode the method has already encountered. Ambiguous ownership is the failure pattern that lets AI systems run past their usefulness — there is no one whose job description says *you decide when to stop*. Judgement-based rollback is the pattern where a team sits through a degradation and does not pull the lever because the lever was never a lever, it was a conversation. Ad hoc review is the pattern where no one reads the logs until an incident forces them to. No sunset is the pattern where a 2019 recommender system is still serving 2025 customers because the project that built it has been reorganised out of existence and no one owns the decision to retire it.

A commitment written well does not rely on anyone remembering to do anything. It fires on conditions that are watched by default, not on intentions that have to be acted on. This is what *numeric and time-bound* means. *We will review this quarterly* is an intention. *A week after accuracy reports below 85%, the owner reverts the piece to rules and convenes a review* is a commitment. The first fires when someone remembers. The second fires when a number crosses a line. The second is what G5 produces.

## 9.2 Owner: one named person

The owner is one named person.

Not a committee. A committee is an ownership structure that assigns responsibility to nobody and credit to everybody. When a committee owns a rollback, the rollback happens late or not at all — each member assumes another member is about to call it, and no one does. Drucker was direct about this in *The Effective Executive* [1]: responsibility that is shared is responsibility that is nobody's. The formulation is fifty years old and still operational.

Not a role. *The VP of Operations owns this* is an ownership assignment that survives one reorganisation. When the current VP moves and the role is vacant for three months, the commitment has no owner. The fix is to name the person — *Priya Chen owns this as of April 2026* — and require the transition of ownership to be an explicit act that updates the page. Role-ownership is an abstraction; person-ownership is the thing that actually binds.

Not a rotating seat. The rotating seat is the committee's clever cousin: the same diffusion with a calendar on it. *Ownership rotates quarterly among the five members of the AI governance council* means that any given failure mode is owned by someone who has been in the role for six weeks and will not be in the role when the consequence lands. Continuity of ownership matters especially for slow-burning failures — adoption drift, quality erosion, drift against baseline — which reveal themselves over timescales longer than a rotation.

The vocabulary that has travelled best here is Apple's **Directly Responsible Individual** (DRI), documented in various Apple internal-culture accounts and popularised externally through Lashinsky's *Inside Apple* [2], and Amazon's **single-threaded leader** / **single-threaded owner**, documented in Carr's *Working Backwards* [3]. Both formulations encode the same rule: one person, named, accountable, with the authority to change course. The method adopts the rule and leaves the vocabulary to the adopting organisation.

Two guardrails against the pattern collapsing back into diffusion. First, the owner must have the authority to change course without asking. If the owner has to seek approval to trigger a rollback, the owner is not the owner; the approver is. Second, the owner must have visibility into the triggers by default — dashboards, alerts, logs — not on request. An owner who has to ask for the numbers does not see them, and an owner who does not see them cannot act on them.

## 9.3 Rollback triggers that fire without a meeting

A rollback trigger is a pre-declared condition that, when met, causes the piece to revert to a prior substrate without negotiation. The test for a well-written trigger is whether a junior engineer, reading the trigger alone, could execute the rollback at 3 a.m. without calling anyone.

That test excludes three common non-triggers. It excludes *qualitative degradation* — *if the outputs look worse* — because *worse* is a judgement, and junior engineers at 3 a.m. are not paid to make that judgement. It excludes *performance feels off* — same failure mode. It excludes *customer complaints increase* — *increase* without a baseline and a threshold is another judgement call. Each of these is symptom, not trigger.

A well-formed trigger has three parts: a **metric** with a **threshold** held for a **window**. Accuracy below 85%, for two consecutive weeks. P95 latency above 4 seconds, for 48 hours. Override rate above 20%, for one shift. The metric is what the owner watches by default. The threshold is where the piece has been certified. The window filters noise from real drift.

A useful discipline while drafting triggers: for every trigger, describe the rollback action in one sentence. *Revert the yard-slot allocator to the rules baseline for the affected region, freeze autonomous allocations, and require manual review of outbound carrier communications.* If the sentence cannot be written — because the rollback substrate does not exist, or because the action depends on a decision the owner does not have the authority to make — the trigger is not a trigger. It is a wish.

The site reliability engineering tradition, especially Google's error-budget policies [4], is the canonical external source for trigger discipline. The ISO/IEC 42001 management-system standard [5] and the NIST AI Risk Management Framework [6] name triggers as part of governance but do not supply the engineering shape. SMACTR — the internal-audit protocol [7] — adds the testing vocabulary: a trigger that has never fired, even in staging, is a trigger that has never been tested, and an untested trigger is not more reliable than no trigger at all.

## 9.4 Review cadence matched to consequence time

Review cadence is how often the owner is required to look at the piece's behaviour, independent of whether a trigger has fired.

The cadence's only job is to catch slow drift — the degradation that happens below the trigger threshold but accumulates past the window the triggers watch. A piece whose triggers fire on two-week windows will not see a drift that takes four months. A review cadence matched to the piece's consequence time sees it.

The rule of thumb: **the cadence is the shorter of the consequence time and the replacement time**. A piece whose bad decisions land within hours (an allocator, a pricing engine) needs at least weekly review. A piece whose bad decisions land over months (a triage classifier whose re-training window is quarterly) needs monthly review at most, weekly if the operational stakes are high. A piece routed to *Non-AI automation* — a rule, a constraint solver — needs quarterly review in most cases; its failures tend to be discrete and visible, and a monthly cadence is expensive theatre.

Cadence is a commitment to *look*, not to *act*. The review produces one of three outcomes: *the piece is operating within bounds, no change*; *the piece has drifted below threshold but above trigger, owner investigates before the next cadence*; *the piece has hit a trigger, rollback has already fired, the review records the incident*. The review is how the owner stays honest between triggers. It is how *the piece is fine* becomes a claim with evidence behind it, not a default.

## 9.5 Sunset criteria

Sunset criteria are the conditions under which the piece stops running, written before launch and signed by the owner.

A sunset criterion is not the same as a rollback trigger. A trigger says *revert to the prior substrate, investigate*. A sunset says *the piece should no longer exist, retire it*. Triggers catch failures that are bad enough to reverse. Sunsets catch the larger failure of running a piece past its usefulness: adoption too low to justify the operational cost, baseline too close to a human doing the work manually, the problem the piece was built for has been abolished or moved elsewhere.

Three classes of sunset criterion carry most of the weight. The **adoption criterion**: *if fewer than Y operators use this after six months, retire it*. Adoption below the criterion is a sign that the piece is not actually helping the operators it was built for. The **baseline-relative criterion**: *if the piece is operating below the published non-AI baseline for three months, retire it*. A piece that has fallen below the substrate it was supposed to beat no longer has a positive case. The **drift criterion**: *if the distribution of inputs has shifted more than X on any of the following features, retire and re-scope*. A piece trained on one distribution, serving another, is no longer the piece that was committed to.

Each of these criteria is numeric, time-bound, and measurable by the owner's default dashboards. None of them fire from judgement. Like triggers, their purpose is to act on conditions, not on intentions.

Two anti-patterns are common enough to name. **The immortal project.** A piece is deployed, works, and persists for five years past its usefulness because nothing in writing said when to retire it. The fix is pre-declared sunset at launch. **The mission-creep workaround.** A piece's sunset criteria fire, and the response is to re-scope the piece rather than retire it. Sometimes re-scoping is correct; most of the time it is the organisation avoiding the admission that the piece is done. The protection against mission-creep is the same as against silent immortality: a written criterion and an owner whose job includes honouring it.

## 9.6 Tools at G5

Four tools carry most of G5. None replace the owner's judgement; each makes a specific part of the page harder to leave blank.

??? note "Named-owner discipline (DRI / single-threaded leader)"
    One person, named on the page, acknowledged by signature, with authority to change course [2] [3]. The vocabulary is Apple's (Directly Responsible Individual) or Amazon's (single-threaded leader); the rule is the same. Best as a hard constraint on the page's owner field — no page ships without a name. Weakest when the named person does not have either the visibility into the triggers or the authority to act on them; fix the authority or change the name.

    *Toolkit entry: Part 4 (pending).*

??? note "Rollback-trigger design"
    A metric with a threshold held for a window, paired with a one-sentence rollback action. Draws on Google's error-budget policies [4] for the metric-threshold-window shape and on SMACTR's [7] audit discipline for the *has this trigger ever fired in staging?* test. Best as a drafting discipline — every trigger is stated in the form *metric X below threshold T for window W; action is Z* — so that ambiguity cannot hide. Weakest when the action sentence cannot be written, in which case the trigger is not yet a trigger.

    *Toolkit entry: Part 4 (pending).*

??? note "Review-cadence matrix"
    A small table mapping each piece's consequence time to a minimum review frequency — weekly for autonomous under hours of consequence, monthly for assistant under days, quarterly for deterministic rules under weeks. Best as a default the owner can override with a written reason. Weakest as a rigid schedule; the rule of thumb is *shorter of consequence time and replacement time*, and the matrix is its first approximation.

    *Toolkit entry: Part 4 (pending).*

??? note "Sunset criteria worksheet"
    A three-row worksheet — adoption criterion, baseline-relative criterion, drift criterion — filled in before launch, with numeric thresholds and measurement windows. Best as the forcing function that makes pre-committed retirement a default rather than an ex-post conversation. Weakest when filled in as ritual; the criteria must be ones the owner would actually honour, or the worksheet is theatre.

    *Toolkit entry: Part 4 (pending).*

A note on what these tools are not. None of the four produces the commitment page; the owner does. The tools make the page harder to leave blank or vague, which is a different service. A commitment drafted with these tools still needs an owner willing to sign it. Without that, the page is a template.

## 9.7 Common failures

Five failures cost the gate more than any others.

**The unsigned page.** The commitment is drafted, circulated, and never signed. In practice the piece ships and the page sits in a shared folder. The remedy is procedural: *the engagement does not cross G5 without a signature on the page*. The gate is not metaphorical.

**The everyone-is-the-owner.** Four names on the owner line, separated by commas. This is a committee in disguise. The fix is to pick one and treat the others as consulted parties, noted elsewhere. If the four cannot agree on one, that disagreement is the real G5 problem, and it surfaces here rather than on the first trigger fire.

**The qualitative trigger.** *If the system seems to be misbehaving.* *If stakeholders report dissatisfaction.* *If the data quality looks off.* None of these fire. The test is whether a junior engineer at 3 a.m. could execute the rollback from the trigger alone; if not, the trigger is not a trigger.

**The absent rollback substrate.** A trigger fires and there is nothing to revert to. The piece was deployed, the prior substrate was retired, and now the trigger's *action* sentence cannot be executed. This is a G4 failure showing up at G5; the rollout substrate should have been sequenced before the piece went live. The remedy is to not cross G5 without the substrate in place and tested.

**The sunset-less commitment.** Four fields on the page, three filled in, the sunset field left blank or signed as *n/a — ongoing programme*. The piece will outlive its usefulness by exactly the length of time between *n/a* and the next reorganisation. The remedy is to require the sunset field; if the piece genuinely cannot have a sunset, the engagement's scope is broader than G5 is the right gate for.

## 9.8 The freight example, worked

The freight yard's four pieces arrive at G5 in the order set at G4. Each needs a commitment. The riskiest piece — the yard-slot allocator — shows the page at its most demanding.

*Piece 1: escalation workflow.* Owner: Priya Chen, yard operations lead. Rollback triggers: escalation-completion rate below 90% for two consecutive weeks → revert to the pre-existing escalation script and retrain. Review cadence: monthly, as part of the yard operations review. Sunset criteria: adoption below 60% of operator shifts after six months → retire and absorb into operator training; or: the workflow has been superseded by a later routed piece that changes the escalation path.

*Piece 2: dock-door solver.* Owner: Marcus Adeyemi, yard engineering lead. Rollback triggers: solver-fitness score below 0.85 for two weeks → revert to manual door-compatibility matrix and investigate. Review cadence: monthly solver-fitness review, reported in the yard operations review. Sunset criteria: published door-compatibility matrix has shifted by more than 20% → retire and rebuild with new matrix; or: the solver has been operating at or below the pre-existing manual baseline for three months.

*Piece 3: carrier-ETA triage.* Owner: Aisha Okonkwo, carrier operations lead. Rollback triggers: operator edit-rate on drafts above 60% for one week → revert to operator-composed outreach and investigate. Review cadence: weekly during shadow and canary, monthly once progressive. Sunset criteria: operator adoption below 40% after six months → retire; or: drafts have been edited so heavily that the operator is faster without them.

*Piece 4: yard-slot allocator.* Owner: Priya Chen, yard operations lead (same as Piece 1; concentrating ownership of the autonomous AI piece with the operations lead is deliberate, because operational authority to revert is load-bearing). Rollback triggers: allocation accuracy below 80% of published baseline for two weeks → revert to rules and freeze autonomous allocations; P95 allocation latency above 45 seconds for 48 hours → revert to rules; override rate above 20% for any single region-shift → investigate before progressive expansion. Review cadence: weekly during shadow and canary, weekly during progressive until adoption steady, then monthly. Sunset criteria: allocation accuracy below 60% of baseline for any two-week window at any time → retire; carrier-communication volume driven by the allocator falls below the baseline human volume for three months (a signal that the piece is no longer adding capacity beyond what a human would generate) → retire; any feature-distribution drift above 25% → retire and re-scope with new training data. See Illustration 9.2.

<div style="max-width: 880px; margin: 2rem auto;">
<svg viewBox="0 0 800 440" xmlns="http://www.w3.org/2000/svg" role="img" aria-labelledby="ch9-ill92-title">
  <title id="ch9-ill92-title">G5 Commit — yard-slot allocator, worked example</title>

  <style>
    .ch9f-node { fill: var(--md-default-bg-color, #fff); stroke: var(--md-default-fg-color, #000); stroke-width: 1.5; }
    .ch9f-node-heavy { fill: var(--md-default-bg-color, #fff); stroke: var(--md-default-fg-color, #000); stroke-width: 3; }
    .ch9f-label { font: 700 11px -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif; fill: var(--md-default-fg-color, #000); text-anchor: middle; }
    .ch9f-field { font: 700 10px -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif; fill: var(--md-default-fg-color, #000); text-anchor: start; }
    .ch9f-fill { font: 10px -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif; fill: var(--md-default-fg-color, #000); text-anchor: start; }
    .ch9f-fill-i { font: italic 10px -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif; fill: var(--md-default-fg-color, #000); text-anchor: start; opacity: 0.85; }
    .ch9f-tag { font: 500 9px -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif; letter-spacing: 0.08em; text-transform: uppercase; fill: var(--md-default-fg-color, #000); text-anchor: middle; opacity: 0.7; }
    .ch9f-arrow { stroke: var(--md-default-fg-color, #000); stroke-width: 1.5; fill: none; }
    .ch9f-band { font: 500 10px -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif; letter-spacing: 0.18em; text-transform: uppercase; fill: var(--md-default-fg-color, #000); text-anchor: middle; opacity: 0.6; }
  </style>

  <text class="ch9f-band" x="400" y="22">G5 Commit &mdash; yard-slot allocator</text>

  <rect class="ch9f-node-heavy" x="40" y="45" width="720" height="340" rx="4" />
  <text class="ch9f-tag" x="400" y="63">Commitment page &mdash; Piece 4 of 4</text>

  <line class="ch9f-arrow" x1="60" y1="75" x2="740" y2="75" />

  <text class="ch9f-field" x="70" y="100">Piece</text>
  <text class="ch9f-fill" x="180" y="100">Yard-slot allocator, 24-hour horizon</text>
  <text class="ch9f-fill-i" x="180" y="114">Gradient-boosted predictor + LLM carrier-comm layer; Autonomous AI.</text>

  <line class="ch9f-arrow" x1="60" y1="125" x2="740" y2="125" />

  <text class="ch9f-field" x="70" y="148">Owner</text>
  <text class="ch9f-fill" x="180" y="148">Priya Chen, yard operations lead</text>
  <text class="ch9f-fill-i" x="180" y="162">Authority to revert without approval; signatory on this page.</text>

  <line class="ch9f-arrow" x1="60" y1="175" x2="740" y2="175" />

  <text class="ch9f-field" x="70" y="198">Rollback triggers</text>
  <text class="ch9f-fill" x="210" y="198">Accuracy &lt; 80% of baseline for 2 weeks &rarr; revert to rules.</text>
  <text class="ch9f-fill" x="210" y="214">P95 latency &gt; 45 s for 48 h &rarr; revert to rules.</text>
  <text class="ch9f-fill" x="210" y="230">Override rate &gt; 20% / region-shift &rarr; investigate.</text>

  <line class="ch9f-arrow" x1="60" y1="244" x2="740" y2="244" />

  <text class="ch9f-field" x="70" y="267">Review cadence</text>
  <text class="ch9f-fill" x="210" y="267">Weekly during shadow, canary, and progressive.</text>
  <text class="ch9f-fill" x="210" y="283">Monthly thereafter, reported in yard operations review.</text>

  <line class="ch9f-arrow" x1="60" y1="295" x2="740" y2="295" />

  <text class="ch9f-field" x="70" y="318">Sunset criteria</text>
  <text class="ch9f-fill" x="210" y="318">Accuracy &lt; 60% of baseline for any 2-week window &rarr; retire.</text>
  <text class="ch9f-fill" x="210" y="334">Communication volume &lt; baseline for 3 months &rarr; retire.</text>
  <text class="ch9f-fill" x="210" y="350">Feature-drift &gt; 25% on any monitored feature &rarr; re-scope.</text>

  <line class="ch9f-arrow" x1="60" y1="362" x2="740" y2="362" />

  <text class="ch9f-fill-i" x="70" y="380">Signed: Priya Chen &mdash; 2026-05-14</text>

  <text class="ch9f-band" x="400" y="410">Every number, every window is observable on the owner&rsquo;s default dashboard.</text>
</svg>
</div>

*Illustration 9.2 — The freight example, hardest piece. Every trigger and every sunset criterion is numeric, time-bound, and observable on the default dashboard. A junior engineer at 3 a.m. reading this page could execute the rollback. An owner reading it monthly knows what drift to watch for. The page is one side of A4, and it is the entire content of G5 for this piece.*

Next: [Chapter 10](ch-10.md) describes the three access indices that help a problem arrive at G1 with its rough shape already named — task codifiability, weight class, and the starting points catalogue.

## Sources

[1] Drucker PF. *The Effective Executive*. Harper & Row; 1967. **[verified]** Drucker's direct treatment of responsibility and effective decision-making; the book's case against diffuse accountability is what the method's named-owner rule inherits from.

[2] Lashinsky A. *Inside Apple: How America's Most Admired — and Secretive — Company Really Works*. Business Plus; 2012. **[verified]** Documents the Directly Responsible Individual (DRI) practice at Apple; the external treatment of the vocabulary.

[3] Bryar C, Carr B. *Working Backwards: Insights, Stories, and Secrets from Inside Amazon*. St. Martin's Press; 2021. **[verified]** Documents the single-threaded leader / single-threaded owner practice at Amazon, written by two former Amazon executives.

[4] Beyer B, Jones C, Petoff J, Murphy NR, editors. *Site Reliability Engineering: How Google Runs Production Systems*. O'Reilly; 2016. **[verified]** Chapters on error-budget policies and on on-call/escalation are the closest external treatment of the trigger-threshold-window discipline G5 requires.

[5] International Organization for Standardization. *ISO/IEC 42001:2023 — Information technology — Artificial intelligence — Management system*. ISO; 2023. **[verified]** The management-system standard's clauses on operational controls and monitoring correspond to the review-cadence and trigger fields on the commitment page.

[6] National Institute of Standards and Technology. *Artificial Intelligence Risk Management Framework (AI RMF 1.0)*. NIST; 2023. **[verified]** The *Manage* function specifies risk response, monitoring, and change; the commitment page is one operational form of that specification.

[7] Raji ID, Smart A, White RN, Mitchell M, Gebru T, Hutchinson B, Smith-Loud J, Theron D, Barnes P. Closing the AI accountability gap: defining an end-to-end framework for internal algorithmic auditing. In: *Proceedings of the 2020 Conference on Fairness, Accountability, and Transparency*. ACM; 2020. p. 33–44. **[verified]** The SMACTR protocol — Scoping, Mapping, Artefact collection, Testing, Reflection — supplies the audit discipline behind the *has this trigger ever fired in staging?* test.
