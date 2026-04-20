# Chapter 5 — G1 Observe

G1 is the first Tier-1 gate. It closes when the team shares a confident, tested understanding of the situation: what is actually happening, to whom, since when, and with what second-order effects. The **situation statement** is the artefact that records that understanding — a paragraph tight enough to be read, challenged, and carried into the next gate. The gate runs side by side with the Tier-0 checks, not after them: in most engagements, the three conversations — framing, Technochauvinism check, Abolition check — are woven into the same handful of hours with the sponsor, the operator, and a stakeholder with visibility on the affected party.

The gate contains two distinct disciplines, and this chapter keeps them visibly separate. **Framing** states the problem in the world, not the problem in the brief. **Diagnosis** finds the system the symptom lives in. They are different crafts — framing is reflective and stakeholder-facing; diagnosis is observational and operator-facing — and confusing them produces two characteristic failures. Skip framing and you diagnose the wrong system with great care. Skip diagnosis and you frame the right problem in words the operator would not recognise. The two converge on one shared understanding — recorded in one shared artefact, the situation statement — because the gate is one gate; splitting the understanding would produce two documents that have to be reconciled later. Part A of this chapter treats framing. Part B treats diagnosis. Section 5.7 is where the shared understanding is written down.

Most engagements fail G1 in one of two ways. Either the brief is accepted as written — its naming of the problem, its proposed solution, its bounded scope — and the rest of the method optimises an irrelevance. Or the gate is treated as procedural — a kick-off workshop, a stakeholder deck, a pre-mortem template — and the work never leaves the meeting room long enough to meet the operator, the customer, or the downstream team. In both failures, the artefact that eventually lands in G2 is not the situation statement; it is a restatement of the brief.

This chapter is the craft of avoiding that.

## Part A — Framing

Framing states what the work is, what success means, and who the success is for. It is done with the sponsor, the principal, and any party whose interests are load-bearing on the engagement. Part A builds a shared understanding of the frame and the stakeholder field; the framed-problem paragraph and the stakeholder map are the two artefacts that record it. Both feed directly into the situation statement and also into the Tier-0 checks running alongside.

### 5.1 Framing is what the work is

Framing is the act of stating three things out loud before any tool is reached for:

- What the work is.
- What success means.
- Who the success is for.

Each is harder than it sounds. *What the work is* drifts the moment a tool is mentioned — the work becomes *building the tool* rather than *solving the problem the tool was supposed to address*. *What success means* collapses into a metric, because metrics are measurable and judgments are not, and a measurable wrong answer beats an unmeasurable right one in most organisations. *Who the success is for* is almost always left implicit, because making it explicit exposes whose interests are not being served.

Schön called this *problem setting*: the reflection-in-action discipline that precedes any problem solving [1]. The received brief is almost never the problem. Framing is what turns the one into the other. It is the first design decision. It is the one most often skipped.

Framing is reflective rather than procedural. You talk to the problem. You try a framing; you watch what it makes visible and what it hides; you try another; you compare. The paragraph that ends up on the page is not the first one you wrote. If it is, the framing has not been tested against the situation — only asserted over it.

### 5.2 The stakeholder map

Framing names *who the success is for*. The stakeholder map is the artefact that makes the naming operational.

It is a one-page document with three columns, adapted from Freeman's foundational stakeholder frame [2].

*Who decides.* The parties whose sign-off is required for the engagement to proceed and whose goals define what counts as success. Usually the principal, the budget holder, and any regulator with prior jurisdiction.

*Who is affected.* The parties whose lives, work, or experiences change as a result of the engagement. Frontline workers whose tasks are restructured. Customers whose interactions are mediated differently. Third parties who are categorised, scored, or routed by any new system.

*Who is absent.* The parties who *should* be in one of the first two columns and are not. Workers whose union has not been consulted. Customer segments not represented on the steering committee. Communities downstream of the supply chain whose data is used but whose consent was not asked.

The third column is the useful one. It is the one most framings omit. Its omission is diagnostic — the parties who are absent from the map are almost always the parties who will pay the highest cost if the engagement goes wrong.

A retail-pricing example makes the columns concrete. A pricing team proposes a dynamic-pricing model for grocery staples. *Who decides:* pricing leadership, the commercial director, the legal function, the regulator for consumer protection. *Who is affected:* customers across income brackets whose weekly bill varies with the model's outputs; store managers who lose local discretion; competitors whose pricing is shaped by the model's public signals. *Who is absent:* low-income customers whose purchasing is most sensitive to price volatility; frontline staff whose jobs include explaining price changes to customers; consumer advocacy groups who will be the first to notice distributional effects. The framing can proceed without consulting the third column. The engagement will then be surprised by the third column's response later, at a cost that was predictable at framing time and was not predicted.

The stakeholder map is also an input to the Tier-0 checks. When the *affected* column surfaces a category — a benefits-eligibility decision, an immigration-risk use, an automated-sanction path — the Abolition check in [Chapter 4](ch-4.md) fires categorically. When the *absent* column surfaces non-technical alternatives that were never considered, the Technochauvinism check fires. G1's framing conversation and Tier 0 share this artefact.

By the end of Part A, the framing conversation has produced a shared understanding of the problem in the world and the stakeholder field it touches — captured in two artefacts, the framed-problem paragraph (Section 5.1) and the stakeholder map (Section 5.2). Neither is the situation statement yet. Both feed into Part B, where the frame is tested against what the system actually does.

## Part B — Diagnosis

Diagnosis tests the frame against the system the symptom lives in. It is done with operators, customers, and the work itself — not with decks. Part B builds a tested understanding of that system — precise enough that the framed problem can be located inside it, or found to have been misplaced — and records it in a system description.

### 5.3 Symptom versus system

A brief describes a symptom. The work is to see the system the symptom lives in.

Hammer's 1990 dictum — *don't automate, obliterate* [3] — is the cleanest formulation of the trap. Wrap a tool around a broken process and you lock the brokenness in; the tool now depends on the brokenness being there. What Hammer warned about with automation repeats with added force when the tool is a model, because models also hide the process inside an opaque trace. The symptom-diagnosis — *we need the system to do X faster* — describes a step. The system-diagnosis describes why the step exists at all, what it is compensating for upstream, and what collapses if the compensation is removed.

Four symptom patterns recur. First, a bottleneck that is not in cognition: the real constraint is machine capacity, a regulatory sign-off, or a single human gatekeeper with authority. Second, symptoms that come back after each fix: a feedback loop no one has drawn. Third, pain that is felt by someone who does not appear in the brief — the customer, the downstream team, the affected party. Fourth, multiple processes failing in similar ways at once: a signature of organisational misalignment, not of any individual process.

None of these are diagnoses. They are starting pattern-recognitions that force a second look before the brief is accepted as written.

An airline boarding example makes the split visible. The brief reads: *boarding takes too long; build a model that reorders the queue*. Observed end-to-end, the delay is upstream — a late catering truck twice a week and a gate-change pattern nobody has logged. Ordering the queue optimises a step whose timing is set elsewhere. The system-diagnosis names the late truck and the gate-change pattern. The symptom-diagnosis names the queue. Different diagnoses route to different methods; only one of them produces fewer late flights.

### 5.4 The Critical Decision Method

To see the system, you need to hear how its best operator decides. The mature technique for this is the Critical Decision Method.

Hoffman, Crandall, and Shadbolt's 1998 paper in *Human Factors* [4] is the reference account — a case study that turned CDM from aviation and emergency-response practice into a documented methodology for cognitive task analysis. The method is simple and strict. You do not interview an expert about the job in general. You pick one specific, recent, non-routine case — one the expert remembers because something about it was hard — and you walk through it four times. Each pass asks different probes of the same incident.

The first pass reconstructs the timeline: what happened, in what order, who was present, what the instruments and the room looked like. The second pass identifies decision points — the moments where the expert could have gone a different way — and deepens them. What cues were picked up? What were you expecting? What would a less-experienced operator have missed? The third pass runs counterfactuals. What would have changed if a specific cue had been absent? What if a junior had made the call? The fourth pass steps back: what made this case hard, how does it differ from routine cases, what would you want a replacement to know?

What the method surfaces is not knowledge the expert would have volunteered in a briefing. Kahneman and Klein's "failure to disagree" paper [5] settled one point that matters here: intuitive expertise is real, but only in domains regular enough for pattern recognition to have something to latch onto, and only where the operator has had extended practice with prompt, reliable feedback. CDM is designed for those domains. It gives access to the cues the expert is using without the expert having to articulate them in the abstract — the abstraction is what they cannot do, because the knowledge is tacit. Collins, in *Tacit and Explicit Knowledge* [6], separates three kinds of tacit knowledge: relational (tacit because nobody bothered to write it down), somatic (bound to the body), and collective (constituted by participation in a form of life). CDM is at its best on relational tacit knowledge — the knowledge a good case reconstruction can bring to the surface.

Two disciplines. Pick the hard case, not the illustrative case; the illustrative case is the one the expert has already told a thousand times, and it has been smoothed into a story that hides the decision. And walk all four passes; the counterfactual pass is where the cues that were *not* taken become visible, and cues-not-taken are often where the real expertise lives.

### 5.5 ShadowBox

CDM assumes the expert is in the room. ShadowBox assumes you want to know what a non-expert would do in the same seat, and what the gap tells you.

Klein and Borders published the ShadowBox approach in the *Journal of Cognitive Engineering and Decision Making* in 2016 [7]. The design is deceptively plain. Construct a realistic scenario — a case with branching points, written to be ambiguous without being unfair. Put a non-expert through it and have them rank the available actions or identify the relevant cues at each branch, with a short rationale. Then have a panel of experts do the same scenario. The elicitation is in the delta: where did the two groups diverge, and why. The expert panel's rationale on the divergent items becomes both training material and a map of what the non-expert is systematically not seeing.

Reach for ShadowBox when the expert population is small, busy, or geographically distributed, and you need to capture their pattern-recognition at scale rather than in one long interview. Reach for it when the diagnostic question is not *what did the expert do* but *what does the expert see that the novice does not* — the gap is the content. And reach for it when you suspect that the expertise in the brief is in fact spread across multiple people, none of whom holds it alone; the ranked scenario is a cheap way to find out whose divergences agree with each other.

The method has two traps. First, if the scenario is too easy, the novice and the expert give the same answer and nothing is learned. Write the case hard. Second, if the scoring is individual rather than comparative, the output is a test, not a diagnosis. The point is not whether the non-expert got it right. The point is where the experts, as a group, see something the non-expert does not — and whether that something can be named.

### 5.6 Observing a mixed system

Most real systems are not one expert in one seat. They are humans, software, processes, and third parties, interleaved. One lens will miss most of what matters.

The Dreyfus skill model is the cheapest first screen. The 1980 technical report [8] and the 1986 book *Mind over Machine* [9] describe a ladder — novice, advanced beginner, competent, proficient, expert — whose usefulness here is not developmental but diagnostic. For each role in the system, ask where the current operator sits on the ladder, and where the work actually demands they sit. A role being run at novice level in a seat that demands proficient performance is a different problem from a role whose design makes proficiency impossible. The model is a descriptive ladder, not a literal stage theory — Gobet and Chassy have argued there is no clean evidence for discrete stages [10] — but as a screening tool it sorts seats into classes of diagnosis before expensive methods are deployed.

The ladder also bounds what observation can do alone. At novice-through-competent, the work is largely rule-bound; documents and interviews cover most of it. At proficient and above, the work is pattern-based and the operator cannot fully articulate their own cues. This is where CDM and ShadowBox earn their place — and where interview-only studies systematically under-price the expertise.

The second lens is observation of the distributed system. Cognition is not in the head of any one operator; it is spread across people, artefacts, and talk. When a brief says *we need to automate what this person does*, the honest first question is what role that person plays in a distributed cognitive system, and what collapses when the role is taken over. Offloading a node can break redundancy, silence backchannel cues, or disrupt the standardised talk that lets the rest of the system work. Bainbridge's 1983 paper on the ironies of automation [11] formalised the pattern; the same pattern shows up wherever an agent is slotted into a human workflow without anyone mapping the distributed cognition first.

The third lens is observation as a discipline, not an event. Go-and-see is not a one-off. The work is observed at different times of day, with different operators, on a bad day as well as a good one. What is documented on the first pass will be revised on the third. That is the whole point. Observation runs as a loop.

See Illustration 5.1.

<div style="max-width: 880px; margin: 2rem auto;">
<svg viewBox="0 0 800 240" xmlns="http://www.w3.org/2000/svg" role="img" aria-labelledby="ch5-ill51-title">
  <title id="ch5-ill51-title">The G1 observation loop</title>

  <style>
    .ch5o-node { fill: var(--md-default-bg-color, #fff); stroke: var(--md-default-fg-color, #000); stroke-width: 1.5; }
    .ch5o-node-final { fill: var(--md-default-bg-color, #fff); stroke: var(--md-default-fg-color, #000); stroke-width: 2.5; }
    .ch5o-label { font: 700 11px -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif; fill: var(--md-default-fg-color, #000); text-anchor: middle; }
    .ch5o-sub { font: italic 9px -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif; fill: var(--md-default-fg-color, #000); text-anchor: middle; opacity: 0.8; }
    .ch5o-arrow { stroke: var(--md-default-fg-color, #000); stroke-width: 1.5; fill: none; }
    .ch5o-arrow-loop { stroke: var(--md-default-fg-color, #000); stroke-width: 2; fill: none; }
    .ch5o-head { fill: var(--md-default-fg-color, #000); }
    .ch5o-band { font: 500 10px -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif; letter-spacing: 0.18em; text-transform: uppercase; fill: var(--md-default-fg-color, #000); text-anchor: middle; opacity: 0.6; }
    .ch5o-loop-label { font: italic 10px -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif; fill: var(--md-default-fg-color, #000); text-anchor: middle; opacity: 0.8; }
  </style>

  <text class="ch5o-band" x="400" y="18">G1 Observe &mdash; run until the statement survives one more look</text>

  <circle class="ch5o-node" cx="100" cy="95" r="50" />
  <text class="ch5o-label" x="100" y="88">Observe</text>
  <text class="ch5o-sub" x="100" y="106">Go to the work.</text>
  <text class="ch5o-sub" x="100" y="119">Watch it run.</text>

  <circle class="ch5o-node" cx="300" cy="95" r="50" />
  <text class="ch5o-label" x="300" y="88">Note gap</text>
  <text class="ch5o-sub" x="300" y="106">The brief said X.</text>
  <text class="ch5o-sub" x="300" y="119">The work shows Y.</text>

  <circle class="ch5o-node" cx="500" cy="95" r="50" />
  <text class="ch5o-label" x="500" y="88">Re-observe</text>
  <text class="ch5o-sub" x="500" y="106">Different time,</text>
  <text class="ch5o-sub" x="500" y="119">operator, day.</text>

  <circle class="ch5o-node-final" cx="700" cy="95" r="50" />
  <text class="ch5o-label" x="700" y="85">Confirm</text>
  <text class="ch5o-label" x="700" y="99">or revise</text>
  <text class="ch5o-sub" x="700" y="116">Situation</text>
  <text class="ch5o-sub" x="700" y="128">statement.</text>

  <line class="ch5o-arrow" x1="150" y1="95" x2="246" y2="95" />
  <polygon class="ch5o-head" points="246,90 246,100 250,95" />
  <line class="ch5o-arrow" x1="350" y1="95" x2="446" y2="95" />
  <polygon class="ch5o-head" points="446,90 446,100 450,95" />
  <line class="ch5o-arrow" x1="550" y1="95" x2="646" y2="95" />
  <polygon class="ch5o-head" points="646,90 646,100 650,95" />

  <path class="ch5o-arrow-loop" d="M 700 145 C 700 220, 100 220, 100 145" />
  <polygon class="ch5o-head" points="95,149 105,149 100,139" />
  <text class="ch5o-loop-label" x="400" y="215">Loop until the statement survives one more look.</text>
</svg>
</div>

*Illustration 5.1 — The G1 observation loop. The gate does not close on the first pass; the return arrow is the work.*

Observation that does not loop is note-taking. The loop is what turns notes into a diagnosis.

By the end of Part B, the team has a tested understanding of the system the symptom lives in — the symptom located inside the system that generates it, with the cues, operators, and distributed arrangements that keep it running named — recorded in a system description. The frame from Part A is now tested against that description. Where the two agree, the situation statement writes itself. Where they disagree, one of them has to give — and the looped observation in Section 5.6 is what forces the disagreement to the surface before the gate closes.

## 5.7 The situation statement

G1 closes on a shared understanding of the situation — confident enough to act on, falsifiable enough to be tested, named in language the operator recognises. The situation statement is the artefact that captures that understanding. A paragraph. Not a deck, not a matrix, not a hypothesis register. A paragraph, because a paragraph forces the coherence that longer forms hide — and because framing and diagnosis converging on one paragraph is how the gate resolves whatever disagreement survived the observation loop. If the paragraph cannot be written, the frame and the system description have not yet been reconciled, and the gate is not yet closed.

Five things belong in it, in this order:

- What is happening, named without the brief's vocabulary.
- To whom — operator, customer, affected party, third party.
- Since when, and what changed around that time.
- The second-order effects already visible, even if nobody has attributed them yet.
- What is *not* happening that would show up if the brief's diagnosis were correct.

The last item is the one most often skipped. A good situation statement is falsifiable; it names what would have to be true for it to be wrong. If the diagnosis is *the boarding delay is upstream of the queue*, the statement says so, and names the measurement that would refute it — on-time catering on two consecutive weeks would settle the question in twelve days.

A worked example, freight logistics. The brief that arrived and the situation statement that G1 produced are shown side by side in Illustration 5.2; the close read follows below.

See Illustration 5.2.

<div style="max-width: 900px; margin: 2rem auto;">
<svg viewBox="0 0 900 490" xmlns="http://www.w3.org/2000/svg" role="img" aria-labelledby="ch5-ill52-title">
  <title id="ch5-ill52-title">The brief vs the situation statement &mdash; a freight-logistics case</title>

  <style>
    .ch5s-rect { fill: var(--md-default-bg-color, #fff); stroke: var(--md-default-fg-color, #000); stroke-width: 1.5; }
    .ch5s-rect-heavy { fill: var(--md-default-bg-color, #fff); stroke: var(--md-default-fg-color, #000); stroke-width: 2.5; }
    .ch5s-label { font: 700 11px -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif; letter-spacing: 0.14em; text-transform: uppercase; fill: var(--md-default-fg-color, #000); text-anchor: middle; }
    .ch5s-rule { stroke: var(--md-default-fg-color, #000); stroke-width: 1; opacity: 0.5; }
    .ch5s-quote { font: italic 14px -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif; fill: var(--md-default-fg-color, #000); }
    .ch5s-source { font: 10px -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif; fill: var(--md-default-fg-color, #000); opacity: 0.7; }
    .ch5s-para { font: 11px -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif; fill: var(--md-default-fg-color, #000); }
    .ch5s-arrow { stroke: var(--md-default-fg-color, #000); stroke-width: 2; fill: none; }
    .ch5s-head { fill: var(--md-default-fg-color, #000); }
    .ch5s-arrow-label { font: 700 11px -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif; letter-spacing: 0.06em; fill: var(--md-default-fg-color, #000); text-anchor: middle; }
    .ch5s-arrow-sub { font: italic 10px -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif; fill: var(--md-default-fg-color, #000); text-anchor: middle; opacity: 0.8; }
    .ch5s-band { font: 500 10px -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif; letter-spacing: 0.18em; text-transform: uppercase; fill: var(--md-default-fg-color, #000); text-anchor: middle; opacity: 0.6; }
    .ch5s-divider { stroke: var(--md-default-fg-color, #000); stroke-width: 1; opacity: 0.35; }
    .ch5s-tick { font: 11px -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif; fill: var(--md-default-fg-color, #000); }
    .ch5s-tick-band { font: 500 10px -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif; letter-spacing: 0.22em; text-transform: uppercase; fill: var(--md-default-fg-color, #000); text-anchor: middle; opacity: 0.55; }
  </style>

  <text class="ch5s-band" x="450" y="22">G1 Observe &mdash; the brief vs the situation statement</text>

  <rect class="ch5s-rect" x="30" y="45" width="230" height="360" rx="4" />
  <text class="ch5s-label" x="145" y="78">The brief</text>
  <line class="ch5s-rule" x1="60" y1="92" x2="230" y2="92" />
  <text class="ch5s-quote" x="48" y="165">&ldquo;Build a dispatch-</text>
  <text class="ch5s-quote" x="48" y="187">priority model</text>
  <text class="ch5s-quote" x="48" y="209">to cut inbound</text>
  <text class="ch5s-quote" x="48" y="231">truck delay.&rdquo;</text>
  <text class="ch5s-source" x="48" y="275">&mdash; sponsor, March</text>

  <text class="ch5s-arrow-label" x="320" y="200">G1 Observe</text>
  <text class="ch5s-arrow-sub" x="320" y="220">framing + diagnosis</text>
  <line class="ch5s-arrow" x1="275" y1="240" x2="360" y2="240" />
  <polygon class="ch5s-head" points="355,232 355,248 368,240" />
  <text class="ch5s-arrow-sub" x="320" y="270">&mdash; observation loop &mdash;</text>

  <rect class="ch5s-rect-heavy" x="380" y="45" width="490" height="360" rx="4" />
  <text class="ch5s-label" x="625" y="78">The situation statement</text>
  <line class="ch5s-rule" x1="410" y1="92" x2="840" y2="92" />

  <text class="ch5s-para" x="400" y="122">Since the March peak, inbound trucks at the central hub</text>
  <text class="ch5s-para" x="400" y="140">are being released from the dock forty minutes later</text>
  <text class="ch5s-para" x="400" y="158">than the scheduled window, on average, on days when</text>
  <text class="ch5s-para" x="400" y="176">more than one customs hold is active.</text>

  <text class="ch5s-para" x="400" y="208">The delay lands on the carrier, not on the hub, because</text>
  <text class="ch5s-para" x="400" y="226">the hold is counted as &ldquo;not yet released&rdquo; rather than</text>
  <text class="ch5s-para" x="400" y="244">&ldquo;released-and-waiting&rdquo;.</text>

  <text class="ch5s-para" x="400" y="276">Second-order: three carriers have begun re-routing</text>
  <text class="ch5s-para" x="400" y="294">through the secondary hub, which the central hub&rsquo;s</text>
  <text class="ch5s-para" x="400" y="312">cost model does not yet see.</text>

  <text class="ch5s-para" x="400" y="344">The brief&rsquo;s dispatch-priority framing would show value</text>
  <text class="ch5s-para" x="400" y="362">if dispatch order were the constraint; the data shows</text>
  <text class="ch5s-para" x="400" y="380">it is not.</text>

  <line class="ch5s-divider" x1="30" y1="420" x2="870" y2="420" />
  <text class="ch5s-tick-band" x="450" y="438">What G1 Observe added</text>

  <text class="ch5s-tick" x="40" y="462">&#10003;&nbsp; named the event</text>
  <text class="ch5s-tick" x="215" y="462">&#10003;&nbsp; named who wears the cost</text>
  <text class="ch5s-tick" x="440" y="462">&#10003;&nbsp; named a second-order effect</text>

  <text class="ch5s-tick" x="120" y="482">&#10003;&nbsp; named a falsifiable refutation</text>
  <text class="ch5s-tick" x="490" y="482">&#10003;&nbsp; refused the brief&rsquo;s framing</text>
</svg>
</div>

*Illustration 5.2 — The brief names a tool; the situation statement names the event, the party who wears the cost, a second-order effect, and the condition under which the brief's framing would have held. The left panel is thin because briefs are thin; the right panel carries weight because the work of G1 is in what it adds.*

> Since the March peak, inbound trucks at the central hub are being released from the dock forty minutes later than the scheduled window, on average, on days when more than one customs hold is active. The delay lands on the carrier, not on the hub, because the hold is counted as "not yet released" rather than "released-and-waiting". Second-order: three carriers have begun re-routing through the secondary hub, which the central hub's cost model does not yet see. The brief's framing — *build a dispatch-priority model* — would show value if the constraint were dispatch order; dispatch order is stable, and the data shows the queue is moving as fast as it can given when trucks enter it.

That paragraph does four things the brief does not. It names the actual event (release delay on dual-hold days). It names who wears the cost (the carrier). It names a second-order effect (re-routing) the brief did not see. And it names what would have to be true for the brief's diagnosis to survive — dispatch order as the constraint — and shows the data does not support it. Whatever is routed next, it will not be routed against a fiction.

The statement is not the end of diagnosis. It is how the gate records what the team now knows. Decomposition and routing both read from it; if they read something else, they are solving a different problem.

## 5.8 Common failures

Four patterns turn up often enough to name. Two are framing failures; two are diagnostic failures. Their shape is different enough that the countermeasures do not transfer.

*The interview that confirms the brief (framing failure).* The sponsor tells you the problem. You interview the people the sponsor sent. They describe the problem the sponsor sent them to describe. You write it up. This is not framing; it is stenography. The countermeasure is the person the sponsor did not send — the downstream team, the affected party, the new operator who has not yet learned what not to say. One such interview will either confirm the brief independently, which is useful, or break it, which is more useful. The brief that survives a hostile witness is a different object than the brief that was never tested.

*The stakeholder map with only two columns (framing failure).* *Who decides* and *who is affected* are filled in; *who is absent* is left blank, or filled with generic categories that nobody will be asked to speak for. The map is now a sign-off aid, not a framing tool. The countermeasure is to require a named person in every *absent* cell — not a category — and to require a note on who, in the next two weeks, will actually talk to them.

*The premature root cause (diagnostic failure).* 5 Whys is cheap and useful, but stopped early it substitutes a plausible ancestor for the actual one, and stopped late it keeps asking why until the answer is *gravity*. Applied on a genuinely complex system, a single-root-cause tool gives a false sense that a single root cause exists; often three causes interact and all three must move. The countermeasure is triangulation — 5 Whys paired with an Ishikawa across categories, plus one dependency or feedback diagram, before any cause is promoted to the statement.

*The lone-expert trap (diagnostic failure).* One interview with the one person who *knows how it really works* produces a diagnosis that matches that person's seat. It misses the second-order effects, the affected parties, and — often — the workarounds that keep the system running despite the lone expert's model. The Dreyfus ladder is a tell here: if the lone expert is the only proficient-or-above operator in a system that runs day-to-day, most of the work is being done by a distributed cognitive system the lone expert does not see from their seat. The countermeasure is at minimum one CDM interview plus one second-seat interview plus direct observation; ideally, a ShadowBox-scale scenario across the full population of operators.

A fifth failure cuts across both parts: *observation without a return pass*. Whatever was seen first becomes the diagnosis, because nothing was seen second. The loop in Illustration 5.1 exists to prevent exactly that.

Next: G2 Decompose takes the situation statement and breaks it into pieces that can be routed separately.

## Sources

[1] Schön DA. *The Reflective Practitioner: How Professionals Think in Action*. Basic Books; 1983. **[verified]**

[2] Freeman RE. *Strategic Management: A Stakeholder Approach*. Pitman; 1984. **[verified]**

[3] Hammer M. Reengineering Work: Don't Automate, Obliterate. *Harvard Business Review*. 1990 Jul–Aug:104–12. **[verified]**

[4] Hoffman RR, Crandall B, Shadbolt N. Use of the Critical Decision Method to Elicit Expert Knowledge: A Case Study in the Methodology of Cognitive Task Analysis. *Human Factors*. 1998;40(2):254–76. **[verified]**

[5] Kahneman D, Klein G. Conditions for Intuitive Expertise: A Failure to Disagree. *American Psychologist*. 2009;64(6):515–26. **[verified]**

[6] Collins H. *Tacit and Explicit Knowledge*. University of Chicago Press; 2010. **[verified]**

[7] Klein G, Borders J. The ShadowBox Approach to Cognitive Skills Training. *Journal of Cognitive Engineering and Decision Making*. 2016;10(3):268–80. **[verified]**

[8] Dreyfus SE, Dreyfus HL. *A Five-Stage Model of the Mental Activities Involved in Directed Skill Acquisition*. Berkeley: Operations Research Center; 1980. USAF Office of Scientific Research technical report. **[verified]**

[9] Dreyfus HL, Dreyfus SE. *Mind over Machine: The Power of Human Intuition and Expertise in the Era of the Computer*. Free Press; 1986. **[verified]**

[10] Gobet F, Chassy P. Towards an Alternative to Dreyfus and Dreyfus's Five-Stage Model of Expert Intuition. *Minds and Machines*. 2008;18(2):151–80. **[verified]**

[11] Bainbridge L. Ironies of Automation. *Automatica*. 1983;19(6):775–9. **[verified]**
