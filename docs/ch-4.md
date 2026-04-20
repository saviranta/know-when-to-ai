# Chapter 4 — Tier 0: the two checks before the gates

Two questions have to be answered before the method reaches G1. Both are about whether the engagement belongs to this method at all. Both are answerable from the brief, in a single framing conversation, without decomposition or routing. Both are binary — pass or fail — and a failure on either produces one of the book's two refusals: *Off-limits to AI* or *Not a tech problem*. The other four answers — *Human-operated*, *Non-AI automation*, *AI as assistant*, *Autonomous AI* — are only reachable if both checks pass and the engagement opens into Tier 1.

Tier 0 is where this happens.

These are not refinements of the method; they decide whether the method runs. A problem that fails the first check is not an AI problem, and any tool picked for it will miss. A problem that fails the second check is off-limits to AI, and the controls engineering the rest of the book teaches cannot fix it. Either way, the engagement stops short of Tier 1 — sometimes for good, sometimes until a different person answers a different question about the same situation.

See Illustration 4.1.

<div style="max-width: 880px; margin: 2rem auto;">
<svg viewBox="0 0 800 320" xmlns="http://www.w3.org/2000/svg" role="img" aria-labelledby="ch4-ill41-title">
  <title id="ch4-ill41-title">The two Tier-0 checks and their outcomes</title>

  <style>
    .ch4t-rect { fill: var(--md-default-bg-color, #fff); stroke: var(--md-default-fg-color, #000); stroke-width: 2.5; }
    .ch4t-rect-out { fill: var(--md-default-bg-color, #fff); stroke: var(--md-default-fg-color, #000); stroke-width: 1.5; stroke-dasharray: 4 4; }
    .ch4t-rect-pass { fill: var(--md-default-bg-color, #fff); stroke: var(--md-default-fg-color, #000); stroke-width: 1.5; }
    .ch4t-label { font: 700 13px -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif; fill: var(--md-default-fg-color, #000); text-anchor: middle; }
    .ch4t-label-sm { font: 700 11px -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif; letter-spacing: 0.06em; text-transform: uppercase; fill: var(--md-default-fg-color, #000); text-anchor: middle; }
    .ch4t-sub { font: italic 11px -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif; fill: var(--md-default-fg-color, #000); text-anchor: middle; opacity: 0.85; }
    .ch4t-sub-sm { font: 11px -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif; fill: var(--md-default-fg-color, #000); text-anchor: middle; opacity: 0.85; }
    .ch4t-band { font: 500 10px -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif; letter-spacing: 0.18em; text-transform: uppercase; fill: var(--md-default-fg-color, #000); text-anchor: middle; opacity: 0.6; }
    .ch4t-arrow { stroke: var(--md-default-fg-color, #000); stroke-width: 1.5; fill: none; }
    .ch4t-arrow-pass { stroke: var(--md-default-fg-color, #000); stroke-width: 2; fill: none; }
    .ch4t-head { fill: var(--md-default-fg-color, #000); }
    .ch4t-mini { font: 600 9px -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif; letter-spacing: 0.15em; text-transform: uppercase; fill: var(--md-default-fg-color, #000); text-anchor: middle; opacity: 0.75; }
  </style>

  <text class="ch4t-band" x="400" y="16">Tier 0 &mdash; before any tool is chosen</text>

  <rect class="ch4t-rect" x="60" y="30" width="320" height="90" rx="4" />
  <text class="ch4t-label" x="220" y="62">Technochauvinism check</text>
  <text class="ch4t-sub" x="220" y="88">Is this actually a technical problem,</text>
  <text class="ch4t-sub" x="220" y="104">or a social problem renamed?</text>

  <rect class="ch4t-rect" x="420" y="30" width="320" height="90" rx="4" />
  <text class="ch4t-label" x="580" y="62">Abolition check</text>
  <text class="ch4t-sub" x="580" y="88">Is this categorically off-limits to AI,</text>
  <text class="ch4t-sub" x="580" y="104">regardless of future model capability?</text>

  <text class="ch4t-mini" x="135" y="138">If it fires</text>
  <line class="ch4t-arrow" x1="135" y1="145" x2="135" y2="178" />
  <polygon class="ch4t-head" points="128,178 142,178 135,188" />

  <text class="ch4t-mini" x="665" y="138">If it fires</text>
  <line class="ch4t-arrow" x1="665" y1="145" x2="665" y2="178" />
  <polygon class="ch4t-head" points="658,178 672,178 665,188" />

  <rect class="ch4t-rect-out" x="60" y="195" width="280" height="70" rx="4" />
  <text class="ch4t-label-sm" x="200" y="220">Not a tech problem</text>
  <text class="ch4t-sub-sm" x="200" y="245">Fix is process, ownership, policy, or measurement.</text>

  <rect class="ch4t-rect-out" x="460" y="195" width="280" height="70" rx="4" />
  <text class="ch4t-label-sm" x="600" y="220">Off-limits to AI</text>
  <text class="ch4t-sub-sm" x="600" y="245">No controls design makes this acceptable.</text>

  <text class="ch4t-mini" x="400" y="140">If both pass</text>
  <line class="ch4t-arrow-pass" x1="400" y1="148" x2="400" y2="282" />
  <polygon class="ch4t-head" points="393,282 407,282 400,292" />

  <rect class="ch4t-rect-pass" x="330" y="292" width="140" height="20" rx="4" />
  <text class="ch4t-label-sm" x="400" y="307">G1 Observe opens</text>
</svg>
</div>

*Illustration 4.1 — Two Tier-0 checks; two refusals. Either check can fire from the brief alone. If both pass, the engagement opens at G1 Observe and the five Tier-1 gates run.*

## 4.1 What a check is (and isn't)

A check is not a gate, and the two work differently. A Tier-1 gate is productive — you clear it by producing a named artefact (a situation statement, an issue tree, a routing map). A Tier-0 check is a filter — you clear it by not triggering a refusal, and the only artefact is the refusal determination itself if it fires.

A check is also not a risk assessment. It does not ask *how bad could this go*. It asks a categorical question: *is this the kind of problem this method is for, at all?* A project that is borderline dangerous but technically feasible does not fail Tier 0 — it passes Tier 0 and meets the controls discipline at G3, G4, and G5. A project that is not a technical problem, or that is categorically off-limits, fails Tier 0 and never reaches the controls discussion.

Both checks are cheap. Both can be run in the first hour of an engagement, alongside the framing conversation. Both produce a short written determination — a paragraph, not a report. The point of the discipline is not extensive analysis; it is refusing the shortcut that says *of course it's an AI problem, they hired me to build an AI thing*.

## 4.2 The Technochauvinism check

**Question.** *Is this actually a technical problem, or a social problem renamed?* If AI were removed from the scope tomorrow, what would the problem become?

The check is named for Broussard's frame in *Artificial Unintelligence* [1]: the recurring claim that technology can solve problems that are fundamentally about people, process, or policy. The check does not deny that technical fixes exist for many problems. It denies the reverse — that every problem presented as technical has a technical solution.

**Four patterns.** Most problems that fail this check fit one of four shapes.

- **Bad process, wearing tech clothing.** The ticket queue is slow because the triage rules are inconsistent, escalation paths are undefined, and the same question is handled differently in two offices. No model routes around inconsistent rules; the fix is a shared rule.
- **Unclear ownership, dressed as a dashboard.** Nobody is responsible for the outcome, so a dashboard is commissioned to *show* the outcome. The model, or the dashboard, or the alerting system, does not change who decides when the outcome slips.
- **Policy disguised as tooling.** A tool is requested so that an unpopular policy can be applied automatically, and the policy debate can be avoided. The tool does not resolve the policy; it hides it, badly.
- **Measurement as accountability.** Nobody can be blamed for a bad outcome, so a metric is introduced to make blame possible. The metric makes accountability *seem* local — that person missed their number — but the underlying system that produces the outcome is untouched.

None of these are technical problems. A model at any substrate will produce confident, well-evaluated answers to the wrong question.

**Tools for running the check.**

*The remove-AI-from-scope rehearsal.* Imagine the engagement with the AI scope removed. What remains? If the remainder is a recognisable process problem, ownership problem, policy problem, or measurement problem, the check fires. The fix is the remainder, not a model.

*The stakeholder cut for who is calling this technical and what do they gain.* Who in the brief is framing the problem as technical, and what outcome benefits them if the framing holds? A procurement leader whose budget is tied to a tool purchase. A technology vendor whose product is a tool. A management consultancy whose engagement is priced for tool implementation. None of these stakeholders are wrong to exist, but their framing is load-bearing for their interests. A check that looks only at the sponsor's brief and not at the incentives surrounding it is not a check.

*The Broussard single-question test.* From the original work [1]: *does this problem arise because of the absence of a tool, or despite the presence of one?* A problem that arises because the tool is absent is a candidate for a tool. A problem that arises despite the tool is not tooling's problem to solve.

**The artefact.** A one-paragraph written determination: *Not a tech problem, because [process / ownership / policy / measurement]. The fix is [specific change]. The remaining AI scope, if any, is [residual problem or none].* This determination is not the engagement's end; it is the engagement's real brief.

**Common failures of the check itself.**

- *Running the check on the sponsor's framing alone.* The sponsor is rarely the stakeholder whose day the problem actually ruins. The framing conversation at G1 is the correction, and it feeds back to this check.
- *Deciding a problem is "partly technical, partly process" and keeping both halves of the brief.* The check's refusal is specific: *this problem, as framed*. A different sub-problem may survive the check; the sponsor's brief usually does not survive intact.
- *Confusing technochauvinism with capability scepticism.* A problem can be plainly solvable with AI and still fail this check if the thing being solved is not the thing the sponsor said.

??? note "Technochauvinism check"
    A one-paragraph refusal check run from the brief alone: if AI were removed from the scope tomorrow, would the problem become a recognisable process, ownership, policy, or measurement problem? Best as the very first screen at Tier 0, before any tool is picked. Weakest when it is run on the sponsor's framing alone rather than against the stakeholder field.

    *Toolkit entry: [Technochauvinism check](tool-technochauvinism-check.md).*

## 4.3 The Abolition check

**Question.** *Is this decision in a category where no plausible set of controls could make AI delegation acceptable, regardless of future model capability?*

The check is drawn from McQuillan's *Resisting AI* [2]: a named list of decision types that should remain off-limits to automation, not because today's models are inadequate, but because the *form* of delegation is wrong regardless of the model. Predictive policing. Automated welfare sanctioning. Immigration risk scoring. Automated sentencing. Eligibility decisions about benefits and care. The argument is that these categories fail not on capability but on the structure of the decision: what happens to the affected person when the system is wrong, and whether the system is of a kind that can be right at all.

Unlike the Technochauvinism check, this one is categorical. It does not turn on the brief's specifics. A decision in an off-limits category is off-limits whether the request is framed conservatively or ambitiously, whether the model is tiny or large, whether the team asking is well-intentioned or not.

**Four axes.** A decision faces the check along four dimensions. Any one of them, sufficiently strong, is enough.

- **Dignitary harm.** The system's output communicates something about the affected person's standing as a person — their credibility, their honesty, their parenting, their risk to others. Automation changes the form of that communication in ways that matter independently of whether the output is correct.
- **Irreversibility.** When the system is wrong, the damage cannot be undone — deportation, imprisonment, sanction, removal from a care system, a child removed from a home. Review machinery after the fact does not undo the wrong call.
- **Coercion.** The affected person did not consent to the automated decision, cannot practically opt out, and often does not know the decision was automated. Asymmetry between the operator's freedom to walk away and the affected person's is the point, and no interface design softens it.
- **Due process.** The decision cannot be meaningfully contested because the reasoning is not intelligible, not preserved, not subject to the same review as the human decision it replaces. A black-box decision is not a decision that can be appealed.

**Tools for running the check.**

*The categorical-list check.* Compare the decision against McQuillan's list [2] and adjacent redlines in the research and policy literature. The list is not exhaustive and will expand; it is a starting reference, not a ceiling.

*The if-it-worked-perfectly rehearsal.* Suppose the model is accurate, calibrated, and reliable. Is deploying it still wrong? If yes — because the dignitary axis, or the coercion axis, or the due-process axis fails — the check fires and the abolition answer is categorical. This rehearsal separates capability objections (which belong at G3) from categorical objections (which belong here).

*The jurisdictional redline flag.* Some categories are off-limits to AI by statute or regulation in some jurisdictions — the EU AI Act [3] lists several; national laws add others. The check flags these without enumerating them, because the specifics move year to year. A live jurisdictional review is part of the engagement, not part of the book.

**The artefact.** A one-paragraph written determination: *Off-limits to AI, because [category / dignitary / irreversibility / coercion / due-process]. This finding does not depend on future model capability.* The determination does not require a literature review to produce — the axes are fast to apply from the brief.

**The Weizenbaum split.** A recurring temptation is to widen this check to cover Weizenbaum's 1976 line [4] — the broader claim that judgment-heavy decisions should not be handed to machines regardless of capability. [Chapter 3](ch-3.md) explains why this book does not. In short, Weizenbaum's normative line is kept but split: the categorical refusal sits here at the Abolition check; the case-by-case refusal, which depends on whether adequate controls can be engineered for a specific decision, runs across G3, G4, and G5 as the controls discipline. The pre-gate stays narrow so it can be run quickly and from the brief alone.

**Common failures of the check itself.**

- *Waiting for case evidence.* The check is categorical. A request for case studies of a category failing badly before refusing is a category error; the axes are the case.
- *Conflating with the Technochauvinism check.* A predictive-policing project is not technochauvinist — there is a plausible technical implementation. It is off-limits. The two checks are independent refusals on different grounds.
- *Treating the list as a moving target.* Capability improvements do not unlock new categories. The axes do not weaken as models improve.

??? note "Abolition check"
    A categorical refusal check against four axes — dignitary harm, irreversibility, coercion, due process — drawing on McQuillan's redline categories and adjacent statutory lists. Best when the brief touches decisions about persons' standing, liberty, benefits, or enforcement. Weakest if mistaken for a capability objection — the *if it worked perfectly* rehearsal is what separates the two.

    *Toolkit entry: [Abolition check](tool-abolition-check.md).*

## 4.4 How the two checks interact

The checks are independent. Either can fire without the other. In rare cases both fire; when they do, the Abolition outcome wins — *Off-limits to AI* is categorical, and naming the category is more useful to the engagement than also noting the technochauvinist framing.

Neither check is one-shot. Routing work at G3 can surface a category the framing conversation missed — a piece routed to a classifier turns out to decide benefits eligibility, a piece routed to an agent turns out to trigger immigration enforcement — in which case the piece is sent back to Tier 0. This loopback is cheap if the check's determination is a one-paragraph artefact; it is expensive if the check was skipped or hand-waved.

The checks run in a conversation, not a process. A single hour with the sponsor, an operator at the receiving end, and a stakeholder with a view of the affected-party experience is usually enough. The point is not to stall the engagement; the point is that these three stakeholders produce different briefs, and Tier 0 is where those briefs are reconciled before a tool is picked.

## 4.5 When Tier 0 is not decisive

Most engagements pass both checks and move to G1. Passing Tier 0 is not an endorsement; it is just the statement that the book's method applies. The other four outcomes — *Human-operated*, *Non-AI automation*, *AI as assistant*, *Autonomous AI* — are still live. Any of them can be reached at G3, and two of them (*Human-operated* and *Non-AI automation*) are quiet refusals of their own kind — they decline to place AI against a specific sub-problem on controls grounds, not categorical grounds. Tier 0's refusals are categorical; G3's refusals are controls-based. A book with only the first kind would refuse too much. A book with only the second kind would refuse too little.

Next: G1 Observe, where framing and diagnosis fold into one iterative pass and the situation statement is written.

## Sources

[1] Broussard M. *Artificial Unintelligence: How Computers Misunderstand the World*. MIT Press; 2018. **[verified]**

[2] McQuillan D. *Resisting AI: An Anti-fascist Approach to Artificial Intelligence*. Bristol University Press; 2022. **[verified]**

[3] European Union. *Regulation (EU) 2024/1689 laying down harmonised rules on artificial intelligence (Artificial Intelligence Act)*. Official Journal of the European Union; 2024. **[verified]**

[4] Weizenbaum J. *Computer Power and Human Reason: From Judgment to Calculation*. W. H. Freeman; 1976. **[verified]**
