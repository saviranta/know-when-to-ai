# Chapter 1 — The agentic shift

## 1.1 The question that ended

The question is not whether to use AI. That debate ended. The question is what job now needs a human in it.

Three jobs remain. Frame the problem. Decide when a machine should not be in the loop. Carry responsibility for the outcome. Everything else — summaries, first-pass analysis, meeting notes, boilerplate — has moved or is moving. This book is about the work that stayed.

It is organised around one claim: most of the value a person adds sits before any model is chosen. Problem framing, stakeholder routing, the decision about whether to automate at all — these are the places where judgment still earns its fee. The tools in the atlas support those decisions; they do not replace them.

A warning about the stance of this book. Two gates sit above every other decision in the method. The first asks whether we are reaching for a technical answer because the problem is technical, or because technical answers are what we know how to sell. The second is narrower — a categorical refusal check: is this one of the decisions that should not be automated at all, regardless of what controls we could build? The broader question, whether adequate controls *can* be built for a specific problem, is engineering work and belongs inside the method, not above it. Skip the two gates and the rest of the method still runs — in service of the wrong goal.

## 1.2 What actually changed

The middle dropped out. That is the shortest honest account of the last three years.

Tasks that used to absorb an afternoon — drafting a memo, summarising a deposition, writing a first-pass regression, producing a slide outline, triaging a support queue — now take minutes. Not because they became easier. Because a different actor does them. Anthropic's December 2024 work on agentic patterns [1] and its 2025 follow-ups on context engineering, long-running harnesses, and multi-agent research systems [2] describe the same trajectory from inside the tooling: more of the workflow now runs in machine-machine loops, with humans at the ends. Plan-and-execute, orchestrator-worker, evaluator-optimiser — these are the design patterns of the middle layer, and they are the middle layer that used to be someone's job.

What moved. Summary. Synthesis of long documents. Boilerplate generation. First-pass code. First-pass analysis. Translation. Routine drafting. Schedule arithmetic. Comparative research. The kind of work a junior person used to produce so a senior person could react to it. That loop is now mostly inside a model.

What did not move. Two things.

The first is **framing**. Deciding what the problem actually is. Deciding who it is a problem for. Deciding what would count as having solved it. A model given a badly framed problem produces a confident, well-written, wrong answer faster than any human could. Framing is not a bottleneck that better tooling will widen. It is the act that decides what the tooling is pointed at.

The second is **deciding what a machine should and should not decide**. Two questions sit under this, and they are answered at different places. The first is categorical: is this decision in a class where no plausible set of controls could make AI delegation acceptable — predictive policing, automated welfare sanctioning, immigration risk scoring? If yes, the answer is no, full stop, and that answer does not change with a better model. The second is case-by-case: for everything outside that categorical list, can we actually build the controls, audit trails, review steps, and rollback triggers that would make AI taking this specific decision acceptable? The first question sits above the method as a pre-gate. The second is engineering work at the routing stage. Neither question answers itself, and both need a named human doing the answering.

This is where Weizenbaum's 1976 line [3] shows up, modified. His original argument mixed two claims — that machines *could not* compute judgment-heavy decisions, and that they *should not*, because accountability depends on a human bearing the outcome. The capability half has not survived the last decade; a modern model can produce sentencing-style reasoning, therapy-style dialogue, custody-style weighing, and produce them well. The normative half has survived, but the book does not adopt it wholesale. Weizenbaum drew the line at the category of decision — some kinds simply should not be passed to a machine. This book keeps that line only for the categorical refusal list (Gate 2 below) and treats everything else as a controls question: not *can the machine compute it*, but *can we build the scaffolding around a machine that would make its decision auditable, reviewable, and reversible enough to delegate the call*. That reframing is a modification of Weizenbaum, not a restatement of him. He would likely have objected to the second move as conceding too much; the book makes it because without it the gate refuses problems that, with care, are routable.

A caveat about "what stayed". The two are not fixed job descriptions. They are two acts that keep recurring in every engagement, and they recur at higher density than they used to, because the work between them has collapsed. The framing conversation used to be the opening ten minutes of a three-month project. It is now most of week one. The delegation question used to happen at sign-off. It now has to happen at the routing stage, because by sign-off the system has already been running in production for a month.

Two footnotes to "what changed", because forecasting is not the business of this book.

No prediction here about which model or vendor wins. The method is model-agnostic. If the frontier names change in eighteen months — and they will — the routing decisions in later chapters do not. They sit above the tool.

No prediction about capability curves. The method is written for the present. The Tier-0 gates are written to survive capability shifts — the abolition check turns on whether a category should be automated at all, not on what a machine can compute, so a more capable model does not close it. The controls question at G3 Route does shift with capability: a more capable model widens the set of problems for which controls can plausibly be built. But the judgment of *whether the controls in front of us are adequate for this decision* is case-by-case, and stays human.

The shift, then, is not that machines got more capable. It is that the interesting work moved earlier in the chain. Framing, routing, and carrying the outcome — work that used to be bundled into the middle of an engagement — is now most of the engagement. Everything downstream of those three acts runs fast. Everything upstream of them is where the method lives.

## 1.3 Two gates above the method

Before any of that, two checks. Call them Tier 0. They sit above the method, not inside it. Either one can stop an engagement cold. [Chapter 4](ch-4.md) teaches them properly, with worked examples; this is the announcement.

**Gate one. The Technochauvinism Check.** Broussard's term, from *Artificial Unintelligence* [4]. The one-sentence test: is this a technical problem, or a social problem being renamed? Build the model anyway and the governance failure is automated at scale.

**Gate two. The abolition check.** A narrow categorical refusal, drawn from McQuillan's *Resisting AI* [5]. The one-sentence test: is this decision in a category where no plausible set of controls could make AI delegation acceptable — regardless of future model capability? Predictive policing, automated welfare sanctioning, immigration risk scoring, automated sentencing. For categories like these, the honest answer is that better governance is not the fix. The test is categorical, answerable from the brief alone; it does not require routing work, engineering assessment, or a specific system design.

A note on what Gate 2 is not. Earlier versions of this book placed a broader accountability test here, descended from Weizenbaum [3]. That version conflated two questions — *should this category be automated* and *can adequate controls be built for this particular problem*. The first stays above the method; the second is a routing decision and moves to G3 Route (see §1.4 and [Chapter 7](ch-7.md)), with its outcomes threaded through Sequence and Commit as a cross-cutting controls overlay. The split is the book's modification of Weizenbaum, not his argument. He would likely have kept both halves at the gate; this book does not, because the controls question has answers that only emerge after decomposition and routing, and a pre-gate is the wrong place to demand them.

For now: two gates, one modification made explicit. Nothing else in the method runs until the gates are answered. [Chapter 4](ch-4.md) carries the full treatment.

See Illustration 1.1.

```mermaid
flowchart TD
  subgraph TIER0["TIER 0 &mdash; before any tool is chosen"]
    direction LR
    G1["<b>Technochauvinism check</b><br/><i>Is this actually a technical problem?</i>"]
    G2["<b>Abolition check</b><br/><i>Is this categorically off-limits to automate?</i>"]
  end

  TIER0 ==> SPINE

  subgraph SPINE["TIER 1 &mdash; the method"]
    direction LR
    S1[Frame] --> S2[Diagnose] --> S3[Decompose] --> S4[Route] --> S5[Sequence] --> S6[Commit]
  end

  SPINE -.-> ATLAS[["Atlas &mdash; tools invoked at each stage"]]

  classDef tier0Gate stroke-width:3px,font-weight:bold;
  classDef tier1Stage stroke-width:1.5px;
  classDef atlasNote stroke-dasharray:4 4,stroke-width:1px,font-style:italic;
  class G1,G2 tier0Gate;
  class S1,S2,S3,S4,S5,S6 tier1Stage;
  class ATLAS atlasNote;
```

*Illustration 1.1 — Two gates above the six-stage method. Emphasis on Tier-0 carried by heavier border and bold type, not hue.*

## 1.4 What this book covers, in order

Six stages. They run in the order an engagement runs.

**Frame.** State what the work is, what success means, and who the success is for. Tier 0 lives here. If framing takes a day, that is a fast day. If it takes a week, that is a cheap week.

**Diagnose.** Observe before triage. Most briefs arrive pre-diagnosed by someone who wanted to skip the observing. The work is to un-diagnose them, look at what is actually happening, and write a short situation statement the rest of the method runs on.

**Decompose.** Break the problem into pieces that can be routed separately. The pieces matter more than the decomposition frame — but the frame decides what pieces you see. Pyramid, MECE, issue trees, JTBD, Ishikawa, 5 Whys, fault trees. The chapter walks the family.

**Route.** Place each piece. Human. Rules. Statistics. Classical ML. LLM feature. Retrieval-augmented. Single agent. Tool-using agent. Multi-agent. Most expensive mistake in the method is here. A piece routed one rung too high — a rule dressed up as a classifier, a classifier dressed up as an agent — carries its mismatch for the life of the system.

**Sequence.** Given the routing, decide the order. Dependencies. Reversibility. Blast radius if something fails. A pilot before a staged rollout before a full deployment, and triggers for rollback at each step.

**Commit.** Name an owner. A commitment without a named owner is a wish. Diffuse ownership is the most common governance failure this book will name.

After the six stages, the book adds three views on top. Three access indices — task codifiability, weight class, starting point — help decide how a given problem should enter the method. Ten cross-cutting overlays — data readiness, evals-as-code, rung-indexed total cost, three-stage rollout, the adaptation tree, the privacy ladder, the NIST plus ISO governance spine, the retirement protocol, HAX / PAIR / Shneiderman, data contracts — sit across all six stages. Five governance failure modes name how the method can be run cleanly and still produce harm.

Then the atlas. Twenty-six tools. Each entry is a single reference card: what the tool is, where it came from, what it is for, what it fails at, when not to use it. Tools are held back until [Chapter 8](ch-8.md) because routing errors swamp tool-choice errors. Choose the right rung, then choose the tool on that rung. Not the other way around. The common failure pattern is to start from a tool — a retrieval stack someone liked, a multi-agent framework someone demoed — and work backwards to a problem shaped like the tool. That is how a rules problem becomes a retrieval problem, how a retrieval problem becomes an agent problem, and how a perfectly good engagement ends up paying frontier-model prices to do what a decision table would have done for free.

That is the whole shape. Six stages. Three indices. Ten overlays. Five failure modes. Twenty-six tools. Two gates above all of it.

## 1.5 A word on discipline

Two disciplines hold the rest of the manuscript honest.

The first is reference. Every cited source is listed at the end of each chapter with a provenance tag — verified, partial, secondary, vendor-origin, pre-canonical, single-author. Inline citations are numeric. An author's name appears in the sentence only when the name is doing real work there. Where an idea is misattributed, the provenance is stated in-line: MECE is often attributed to Minto [6]; she traced the logic to Aristotle. Five Whys is attributed to Ohno [7]; he credited Sakichi Toyoda. Jobs-to-be-Done is attributed to Christensen; the operational form is Ulwick's [8]. Small repairs, made visible. The point is not pedantry. It is that a book that invites consequential decisions has to show its working.

The second is voice. Short paragraphs. One claim at a time. The work is named, not the worker — no "the consultant", no "the decision-maker", no "the practitioner". No role label is needed to know when the book is talking to you. Where the evidence supports a recommendation, I make it. Where it does not, I say so. You will not find the word *leverage* in what follows.

The door is open. Next, what the book is about.

## Sources

[1] Anthropic. *Building Effective Agents*. Anthropic; 2024. **[verified]**

[2] Anthropic. *Effective Context Engineering for AI Agents*. Anthropic; 2025. **[verified]**

[3] Weizenbaum J. *Computer Power and Human Reason: From Judgment to Calculation*. W. H. Freeman; 1976. **[verified]**

[4] Broussard M. *Artificial Unintelligence: How Computers Misunderstand the World*. MIT Press; 2018. **[verified]**

[5] McQuillan D. *Resisting AI: An Anti-fascist Approach to Artificial Intelligence*. Bristol University Press; 2022. **[verified]**

[6] Minto B. *The Pyramid Principle*. Pitman; 1987. **[secondary]**

[7] Ohno T. *Toyota Production System: Beyond Large-Scale Production*. Productivity Press; 1988. **[secondary]**

[8] Ulwick A. *What Customers Want*. McGraw-Hill; 2005. **[verified]**
