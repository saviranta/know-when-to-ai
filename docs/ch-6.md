# Chapter 6 — G2 Decompose

G2 is the second Tier-1 gate. It reads the situation statement from G1 and closes when the team shares a confident, tested understanding of where the problem cuts — into pieces that can be placed separately at G3. The **piece list** is the artefact that records that understanding: a short, ordered enumeration of independent pieces, each tagged with a hint about the destination it is heading for. The gate is done when the piece list exists, every piece is genuinely independent, and no piece still hides a structure that would re-tangle the work at the next gate.

Most problems that arrive as tangled are not tangled. They are badly cut. The wrong frame generates fake complexity and the work then churns against the frame instead of the problem. Decomposition is the discipline of choosing the frame deliberately.

This chapter teaches the frames and the failures. It runs them on one problem — a retail pricing team that arrives at G1 with the sentence *our pricing is broken, we need an AI pricing engine* — and lets the frames cut it into shapes the next gate can use. The pricing example runs through the chapter; by the end, it has a piece list.

Illustration 6.1 gives the gate's generic anatomy. Illustration 6.2, at the end of the chapter, instantiates the same anatomy on the pricing example.

<div style="max-width: 880px; margin: 2rem auto;">
<svg viewBox="0 0 800 460" xmlns="http://www.w3.org/2000/svg" role="img" aria-labelledby="ch6-ill61-title">
  <title id="ch6-ill61-title">G2 Decompose — generic anatomy</title>

  <style>
    .ch6d-node { fill: var(--md-default-bg-color, #fff); stroke: var(--md-default-fg-color, #000); stroke-width: 1.5; }
    .ch6d-node-top { fill: var(--md-default-bg-color, #fff); stroke: var(--md-default-fg-color, #000); stroke-width: 2.5; }
    .ch6d-node-dashed { fill: var(--md-default-bg-color, #fff); stroke: var(--md-default-fg-color, #000); stroke-width: 1.5; stroke-dasharray: 4 3; }
    .ch6d-label { font: 700 11px -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif; fill: var(--md-default-fg-color, #000); text-anchor: middle; }
    .ch6d-sub { font: italic 9px -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif; fill: var(--md-default-fg-color, #000); text-anchor: middle; opacity: 0.8; }
    .ch6d-tag { font: 500 9px -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif; letter-spacing: 0.08em; text-transform: uppercase; fill: var(--md-default-fg-color, #000); text-anchor: middle; opacity: 0.7; }
    .ch6d-arrow { stroke: var(--md-default-fg-color, #000); stroke-width: 1.5; fill: none; }
    .ch6d-arrow-back { stroke: var(--md-default-fg-color, #000); stroke-width: 1.5; fill: none; stroke-dasharray: 4 3; }
    .ch6d-head { fill: var(--md-default-fg-color, #000); }
    .ch6d-band { font: 500 10px -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif; letter-spacing: 0.18em; text-transform: uppercase; fill: var(--md-default-fg-color, #000); text-anchor: middle; opacity: 0.6; }
  </style>

  <text class="ch6d-band" x="400" y="22">G2 Decompose &mdash; generic anatomy</text>

  <rect class="ch6d-node-top" x="270" y="40" width="260" height="60" rx="4" />
  <text class="ch6d-label" x="400" y="65">Situation statement</text>
  <text class="ch6d-sub" x="400" y="82">One noun in the statement</text>
  <text class="ch6d-sub" x="400" y="94">hides a structure.</text>

  <line class="ch6d-arrow" x1="400" y1="100" x2="400" y2="125" />

  <rect class="ch6d-node-dashed" x="180" y="125" width="440" height="38" rx="4" />
  <text class="ch6d-tag" x="400" y="142">Apply a decomposition frame</text>
  <text class="ch6d-sub" x="400" y="157">Pyramid / Issue Tree / JTBD / Ishikawa / 5 Whys / fault tree</text>

  <line class="ch6d-arrow" x1="400" y1="163" x2="400" y2="195" />
  <line class="ch6d-arrow" x1="95" y1="195" x2="705" y2="195" />

  <line class="ch6d-arrow" x1="95" y1="195" x2="95" y2="228" />
  <polygon class="ch6d-head" points="90,223 100,223 95,233" />
  <line class="ch6d-arrow" x1="245" y1="195" x2="245" y2="228" />
  <polygon class="ch6d-head" points="240,223 250,223 245,233" />
  <line class="ch6d-arrow" x1="400" y1="195" x2="400" y2="228" />
  <polygon class="ch6d-head" points="395,223 405,223 400,233" />
  <line class="ch6d-arrow" x1="555" y1="195" x2="555" y2="228" />
  <polygon class="ch6d-head" points="550,223 560,223 555,233" />
  <line class="ch6d-arrow" x1="705" y1="195" x2="705" y2="228" />
  <polygon class="ch6d-head" points="700,223 710,223 705,233" />

  <rect class="ch6d-node" x="25" y="233" width="140" height="85" rx="4" />
  <text class="ch6d-tag" x="95" y="252">Placeable</text>
  <text class="ch6d-label" x="95" y="275">Independent</text>
  <text class="ch6d-label" x="95" y="289">piece</text>
  <text class="ch6d-sub" x="95" y="307">Goes to one substrate.</text>

  <rect class="ch6d-node" x="175" y="233" width="140" height="85" rx="4" />
  <text class="ch6d-tag" x="245" y="252">Placeable</text>
  <text class="ch6d-label" x="245" y="275">Independent</text>
  <text class="ch6d-label" x="245" y="289">piece</text>
  <text class="ch6d-sub" x="245" y="307">Goes to one substrate.</text>

  <rect class="ch6d-node" x="330" y="233" width="140" height="85" rx="4" />
  <text class="ch6d-tag" x="400" y="252">Placeable</text>
  <text class="ch6d-label" x="400" y="275">Independent</text>
  <text class="ch6d-label" x="400" y="289">piece</text>
  <text class="ch6d-sub" x="400" y="307">Goes to one substrate.</text>

  <rect class="ch6d-node" x="485" y="233" width="140" height="85" rx="4" />
  <text class="ch6d-tag" x="555" y="252">Declared</text>
  <text class="ch6d-label" x="555" y="275">Wicked /</text>
  <text class="ch6d-label" x="555" y="289">non-linear</text>
  <text class="ch6d-sub" x="555" y="307">Forward with a tag.</text>

  <rect class="ch6d-node" x="635" y="233" width="140" height="85" rx="4" />
  <text class="ch6d-tag" x="705" y="252">Redirect</text>
  <text class="ch6d-label" x="705" y="275">Belongs</text>
  <text class="ch6d-label" x="705" y="289">upstream</text>
  <text class="ch6d-sub" x="705" y="307">Not a placement.</text>

  <line class="ch6d-arrow" x1="95" y1="318" x2="95" y2="370" />
  <polygon class="ch6d-head" points="90,365 100,365 95,375" />
  <line class="ch6d-arrow" x1="245" y1="318" x2="245" y2="370" />
  <polygon class="ch6d-head" points="240,365 250,365 245,375" />
  <line class="ch6d-arrow" x1="400" y1="318" x2="400" y2="370" />
  <polygon class="ch6d-head" points="395,365 405,365 400,375" />
  <line class="ch6d-arrow" x1="555" y1="318" x2="555" y2="370" />
  <polygon class="ch6d-head" points="550,365 560,365 555,375" />

  <path class="ch6d-arrow-back" d="M 705 318 C 790 318, 790 70, 540 70" />
  <polygon class="ch6d-head" points="550,65 550,75 540,70" />
  <text class="ch6d-sub" x="750" y="210">Redirect</text>
  <text class="ch6d-sub" x="750" y="222">upstream</text>

  <rect class="ch6d-node-top" x="30" y="375" width="600" height="60" rx="4" />
  <text class="ch6d-label" x="330" y="400">Piece list &mdash; forward to G3</text>
  <text class="ch6d-sub" x="330" y="420">Placeable and declared pieces carry forward. Redirects do not.</text>

  <text class="ch6d-band" x="400" y="452">Three kinds of valid output: placed, declared, redirected.</text>
</svg>
</div>

*Illustration 6.1 — G2 Decompose, generic anatomy. The gate reads a situation statement, applies a decomposition frame, and produces a piece list. Pieces come in three kinds: **placeable** — most of them, carried forward to G3; **declared** — wicked or non-linearly composing, carried forward with a tag; **redirect** — not a placement, a signal that the piece belongs upstream.*

## 6.1 What decomposition is for

Decomposition produces independent pieces. That is its only job.

Independent in the sense that matters at G3 means three things. The pieces do not overlap in what they claim to cover. The union of the pieces covers the problem without gaps. And the pieces can each be placed against a different substrate — one to a human, one to a rule, one to a model, one to an agent — without the placement of one piece becoming a constraint on the placement of another. Only then can the method's spine carry the work.

This is why decomposition sits between Observe and Route. G1 produces a situation statement: what is happening, to whom, since when, what changed. That statement is almost always one paragraph long and contains one noun that hides a structure. Decompose is the work of opening that noun and laying its parts flat.

Pricing is broken. *Broken* is the hiding noun. Opened, it might contain a margin problem, a competitive-visibility problem, an inventory-turns problem, a promotions-cannibalisation problem, a channel-conflict problem, and a governance problem about who has authority to approve price changes above a threshold. Six pieces, possibly more. Some are data problems. Some are model problems. One is not a technical problem at all. Each wants a different destination.

Route without decomposing and you will send the whole tangle to one place. Decompose with the wrong frame and you will send the wrong pieces to the wrong places. The gate here is boring and load-bearing. It deserves craft.

A note on what *the right frame* means. The right frame for a problem is not the one that is most intellectually satisfying; it is the one that produces pieces the next gate can actually place. A frame that generates beautiful branches but no placeable pieces has not done its work. This chapter teaches the frames through the pieces they produce, not through the trees they draw.

## 6.2 The decomposition backbone — Pyramid, MECE, Issue Tree

Three siblings sit at the top of the family tree. They come from one place — Barbara Minto's work inside McKinsey in the late 1960s, commercialised in *The Pyramid Principle* in 1987 [1]. They are not variants of each other. They work at different layers of the same piece of craft.

**Pyramid.** An argument structure. Answer first, then the reasons, then the evidence under each reason. Pyramid is the discipline that forces a recommendation to fit on one page before any of its sub-arguments are built out. For decomposition it does one specific thing: it names the answer the problem is pointing at, which in turn names the sub-questions that have to be true for the answer to hold.

The pricing team's Pyramid might read: *Pricing should move to a margin-protection stance this quarter.* That is the tentative top. Beneath it, three reasons that would have to be true — margins have compressed faster than volume has grown; competitive visibility is sufficient for price matching to be a live threat; the organisation can change a price in under two weeks. Each reason becomes a sub-problem. If any reason fails, the top answer changes. That is the mechanism.

**MECE.** Mutually exclusive, collectively exhaustive. A discipline on the branches of any tree you draw. Overlap between branches is a sign that the cut is wrong. Missing coverage is a sign that the cut is wrong in a different way. MECE is not a check you run at the end — it is the test you keep running while drawing the tree. Minto herself traced MECE's logic to Aristotle's non-contradiction and excluded middle [1]; that matters only because it pre-empts a specific mistake: treating MECE as a proprietary McKinsey invention rather than a pedagogical shorthand for an old logical requirement.

**Issue Tree.** A question decomposed into sub-questions, each of which can be answered independently. An Issue Tree is MECE applied to a Pyramid in progress. If the Pyramid is the argument, the Issue Tree is the plan for building it.

For the pricing team, the top question becomes: *Should pricing change its posture this quarter?* The MECE branches beneath it are: *have margins actually moved?* (an analytics question), *is the competitive landscape actionable?* (a market-observation question), *can the organisation execute a change?* (an operations question). Each branch is answerable without waiting for the others. That is what "independent pieces" means in practice.

The three frames run together. Pyramid points at the answer. Issue Tree plans the sub-answers. MECE polices the cut. A decomposition that fails MECE fails as a Pyramid, because the reasons under the top leak into each other and the argument cannot be defended. These are one piece of craft in three views.

One note before moving on. The Pyramid wants an answer on top; you often do not have one yet. That is fine. An early Pyramid carries a working hypothesis, labelled as such, and the Issue Tree tests it. When the hypothesis is wrong the tree's evidence breaks the top and a better top reassembles. That is the loop.

A useful diagnostic, while drawing the tree: ask whether each sub-question is answerable with evidence that does not already assume the top. If the evidence required to answer a sub-question is the same evidence required to confirm the top answer, the tree is circular and you have built a proof rather than a test. Redraw until the sub-questions could genuinely return unfavourable answers.

??? note "Minto Pyramid"
    An answer-first argument structure — recommendation on top, reasons beneath, evidence under each — from Minto's *Pyramid Principle* [1]. Best as the *what are we actually claiming* check before a decomposition is drawn. Weakest when forced onto a problem whose recommendation is not yet known; carry a working hypothesis on top and let the Issue Tree break it.

    *Toolkit entry: [Minto pyramid](tool-minto-pyramid.md).*

??? note "MECE check"
    Mutually exclusive, collectively exhaustive — a running discipline on the branches of any tree, not a post-hoc audit. Best when redrawing a cut that has produced overlapping or gap-leaving branches. Weakest when treated as the decomposition itself; MECE polices the cut, it does not produce one.

    *Toolkit entry: [MECE check](tool-mece.md).*

??? note "Issue tree"
    A question decomposed into independently-answerable sub-questions — MECE applied to a Pyramid in progress. Best when the argument for a recommendation is the unclear thing, not the symptom itself. Weakest when the sub-questions can only be answered by assuming the top; redraw until the evidence required can genuinely return unfavourable answers.

    *Toolkit entry: [Issue tree](tool-issue-tree.md).*

## 6.3 Specialist frames

The backbone carries most business problems. Four specialist frames handle the shapes the backbone mishandles.

**Jobs to be Done.** When the problem is about what an offering is *for*, not what it *is*, reach for Jobs to be Done. The question becomes: what outcome is someone hiring this thing to achieve? *Hiring* is JTBD's vocabulary and is not necessarily a purchase — a reader hires a briefing, a patient hires a clinic, a team hires a dashboard. Money may or may not change hands. The frame asks who is using the thing, and what outcome they are reaching for when they do. Tony Ulwick published the operational form — Outcome-Driven Innovation — in *What Customers Want* [2]. Christensen later popularised a looser narrative form; the operational toolkit is Ulwick's, and the 150-desired-outcome interview protocol is the part a decomposition can actually use.

For the pricing team, a JTBD cut changes the frame: *what job is the person at the shelf hiring this price for?* Signalling value relative to a competitor. Qualifying an item for a basket. Resolving an information gap between list and promotional price. Three jobs, three different pricing behaviours. This reveals that *promotion cannibalisation* is not a promotions problem; it is two jobs fighting each other on the same stock-keeping unit.

??? note "Jobs-to-be-done"
    An outcome-driven decomposition — what is someone *hiring* this offering to achieve? — in Ulwick's operational form, with a structured 150-outcome interview protocol [2]. Best when the shape of the right answer is unclear and the symptom is defined in product language rather than user language. Weakest when forced onto a symptom that is genuinely about cause, not purpose.

    *Toolkit entry: [Jobs-to-be-done](tool-jtbd.md).*

**Ishikawa.** The fishbone diagram. Cause-and-effect decomposition across categories — typically Man, Machine, Material, Method, Measurement, Milieu. Kaoru Ishikawa wrote the canonical *Guide to Quality Control* [3], published in English in 1968; the diagram itself dates to his work at Kawasaki Steel in 1943, the book is the pedagogical codification.

Ishikawa is the right frame when the situation statement names a symptom and the cause is unknown. It works less well when the relevant causes are not category-shaped — when the cause is a single chain of decisions rather than a family of possibilities.

??? note "Ishikawa (fishbone)"
    A cause-and-effect fan across categories — typically Man, Machine, Material, Method, Measurement, Milieu — from Ishikawa's canonical *Guide to Quality Control* [3]. Best when the cause of a symptom is unknown and plural causes are plausible. Weakest when the causal structure is a single chain rather than a family; pair with 5 Whys if the chain turns out to be the shape.

    *Toolkit entry: [Ishikawa (fishbone)](tool-ishikawa.md).*

**5 Whys.** A linear chain of causal questions. Each answer becomes the next question. Taiichi Ohno documented the technique in *Toyota Production System* [4] and was explicit that the practice came from Sakichi Toyoda, the founder's father, not from Ohno himself.

5 Whys is terse and cheap. It works when the causal structure is a chain, not a tree. Its failure mode is confident-sounding: the fifth why often names whatever was already believed at the start, because no one is forced to enumerate alternatives at each step. Use it as a probe, not a proof. Pair it with Ishikawa when the chain might actually be a tree.

**Fault tree.** A formal probabilistic method for safety-critical decomposition, with Boolean logic under the branches and failure probabilities attached. Developed at Bell Labs for the Minuteman launch control in 1961 [5] and codified later in IEC 61025. When the failure of the system can kill someone or wipe a company, the decomposition must quantify, not narrate. Its near-cousin, Goldratt's Current Reality Tree from the Theory of Constraints [6], handles the systemic case where undesirable effects propagate through a web of constraints rather than fanning out from a single top event. Both sit in the safety-critical and systemic annexes; the backbone covers most other cases.

## 6.4 Choosing the right frame

Decomposition frames are not interchangeable. A short decision question selects the right one without ceremony.

*Is the shape of the right answer unclear?* Reach for JTBD. The frame opens up what outcome is actually being sought — by the person using the thing, whether money changes hands or not — which is almost always the question that the situation statement leaves implicit.

*Is the cause of the symptom unclear?* Reach for Ishikawa if the categories are likely to be plural, or 5 Whys if a single chain seems plausible. Run both if the first feels thin after ten minutes.

*Is the argument for a recommendation unclear?* Reach for Pyramid plus Issue Tree. This is the commonest case in consulting. The symptom is not unknown; the rationale for acting is.

*Is the consequence of failure life, limb, or the franchise?* Reach for fault tree. If the method is boring, keep going.

*Does nothing fit?* The problem may not be decomposable by these frames — which is the subject of the next section.

The frame is not the work. The frame is the jig that holds the work. Keeping them separate protects against tool-affection, which is the error of loving the frame enough to force the problem into it.

Two habits help. Draw the first tree fast — fifteen minutes, rough branches, no polish — and throw it away. The first tree encodes the pre-existing belief about the problem; burning it clears that belief out of the way. Then draw the second tree with someone who was not in the first room. Disagreement at this stage is cheap and diagnostic; disagreement at G4 is neither.

## 6.5 When a problem resists decomposition

Three patterns cannot be decomposed cleanly. Naming them is part of G2's job, because sending them onward as if they were decomposable is how the method fails with a straight face.

**The governance question hiding as technical.** The pricing team's *can we approve price changes above a threshold without the pricing committee?* is not a technical problem; it is a decision-rights problem. It will decompose into Ishikawa branches if pushed, but the branches will be fictions. The correct action is to name it — *this is a governance question, not a modelling question* — and route it back to the decision-rights work that belongs upstream. The frame here is not JTBD or Issue Tree; the frame is *this belongs in a different conversation*.

**The wicked problem.** Rittel and Webber's term, from *Dilemmas in a General Theory of Planning* [7]. A wicked problem has no definitive formulation, no stopping rule, and no enumerable set of solutions; every intervention is a one-shot because the system learns from the intervention. Climate adaptation is wicked. Merger integration is wicked. Tax-code design is wicked. So, in smaller form, is *what is a fair price for this item across three channels with different tax treatments and a history of promotional patterns we invented ourselves?*

The response to wickedness is not to force decomposition but to declare the wickedness and adopt a different posture: short reversible steps, instrumentation of what the step did to the system, and an explicit refusal to treat the problem as complete when the step succeeds. Wicked problems can be *worked*; they cannot be *solved* in the sense the decomposition frames imply. G4 Sequence and G5 Commit carry most of the discipline; G2's job is to tag the piece as wicked so the later gates know what they are carrying.

**The problem that decomposes into pieces that recombine non-linearly.** Sometimes the pieces separate cleanly but their behaviour together is not the sum of their behaviours apart. A pricing engine, a promotions engine, and an inventory-allocation engine each work. Together they oscillate. Decomposition was correct; the composition was the problem. The handling is operational, not analytic: treat the composition as its own piece and route it to a control-theoretic discipline, or accept that the pieces will need coupling rules at G4.

Each of these three is a valid entry on the piece list. *This is wicked, declared* is a piece. *This is governance, redirected* is a piece. The frame is not required to produce branches; it is required to produce pieces the next gate can use, and *declare and redirect* is a piece the next gate can use.

## 6.6 Common failures

Five failures cost the gate more than any others.

**False MECE.** Branches that overlap. A pricing tree with a branch for *competitor matching* and a separate branch for *promotional pricing* overlaps where competitors themselves run promotions. Evidence collected under each branch will double-count. The fix is not to add a rule about the overlap; it is to redraw the cut so the overlap vanishes.

**Root-cause tunnel vision.** The first plausible cause in a 5 Whys chain becomes the declared cause, because stopping felt earned. The countermeasure is cheap: run the chain twice from the same symptom starting with a different second question, and compare the endpoints. If they diverge, neither is yet the cause.

**The "one more why" that never stops.** The opposite failure. Every answer prompts a deeper question and the chain ends at the heat death of the universe. The stopping rule is empirical, not philosophical — stop at the level where an intervention is available and plausibly accountable. Past that level, you are practising metaphysics, not causal analysis.

**Treating the frame as the answer.** A beautifully complete Issue Tree is not a decomposition result. The result is the piece list the next gate receives. Producing a decorated tree and moving on without the piece list is the craft equivalent of writing a menu and forgetting to cook.

**The borrowed decomposition.** A prior engagement's tree is imported and filled in with the new problem's specifics. The branches are structurally sound because they worked last time; the cut is wrong because this is a different problem. The symptom is a tree that reads as professional but produces pieces nobody on the current team can place. Throw it out and draw a new one. An analogy is not a decomposition.

Back to the pricing team. After the frames have run, the tangled sentence has opened into: an analytics question (did margins move, controlling for mix), an observation question (what is competitive visibility now, and who is matching whom), a JTBD question (which jobs are colliding on which stock-keeping units), an operations question (can a price change reach shelves in under two weeks), and a governance question (who approves changes above a threshold). Five pieces. Four head to G3. One will be sent back, because governance is not a routing target; it is an upstream repair. The decomposition is done. See Illustration 6.2.

<div style="max-width: 880px; margin: 2rem auto;">
<svg viewBox="0 0 800 440" xmlns="http://www.w3.org/2000/svg" role="img" aria-labelledby="ch6-ill62-title">
  <title id="ch6-ill62-title">G2 Decompose — retail pricing, worked example</title>

  <style>
    .ch6p-node { fill: var(--md-default-bg-color, #fff); stroke: var(--md-default-fg-color, #000); stroke-width: 1.5; }
    .ch6p-node-top { fill: var(--md-default-bg-color, #fff); stroke: var(--md-default-fg-color, #000); stroke-width: 2.5; }
    .ch6p-label { font: 700 11px -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif; fill: var(--md-default-fg-color, #000); text-anchor: middle; }
    .ch6p-sub { font: italic 9px -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif; fill: var(--md-default-fg-color, #000); text-anchor: middle; opacity: 0.8; }
    .ch6p-tag { font: 500 9px -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif; letter-spacing: 0.08em; text-transform: uppercase; fill: var(--md-default-fg-color, #000); text-anchor: middle; opacity: 0.7; }
    .ch6p-arrow { stroke: var(--md-default-fg-color, #000); stroke-width: 1.5; fill: none; }
    .ch6p-arrow-back { stroke: var(--md-default-fg-color, #000); stroke-width: 1.5; fill: none; stroke-dasharray: 4 3; }
    .ch6p-head { fill: var(--md-default-fg-color, #000); }
    .ch6p-band { font: 500 10px -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif; letter-spacing: 0.18em; text-transform: uppercase; fill: var(--md-default-fg-color, #000); text-anchor: middle; opacity: 0.6; }
  </style>

  <text class="ch6p-band" x="400" y="22">G2 Decompose &mdash; retail pricing, worked</text>

  <rect class="ch6p-node-top" x="270" y="40" width="260" height="60" rx="4" />
  <text class="ch6p-label" x="400" y="65">Situation statement</text>
  <text class="ch6p-sub" x="400" y="82">Pricing is broken; margins</text>
  <text class="ch6p-sub" x="400" y="94">have compressed since March.</text>

  <line class="ch6p-arrow" x1="400" y1="100" x2="400" y2="130" />
  <line class="ch6p-arrow" x1="95" y1="130" x2="705" y2="130" />

  <line class="ch6p-arrow" x1="95" y1="130" x2="95" y2="165" />
  <polygon class="ch6p-head" points="90,160 100,160 95,170" />
  <line class="ch6p-arrow" x1="245" y1="130" x2="245" y2="165" />
  <polygon class="ch6p-head" points="240,160 250,160 245,170" />
  <line class="ch6p-arrow" x1="400" y1="130" x2="400" y2="165" />
  <polygon class="ch6p-head" points="395,160 405,160 400,170" />
  <line class="ch6p-arrow" x1="555" y1="130" x2="555" y2="165" />
  <polygon class="ch6p-head" points="550,160 560,160 555,170" />
  <line class="ch6p-arrow" x1="705" y1="130" x2="705" y2="165" />
  <polygon class="ch6p-head" points="700,160 710,160 705,170" />

  <rect class="ch6p-node" x="25" y="170" width="140" height="85" rx="4" />
  <text class="ch6p-tag" x="95" y="189">Analytics</text>
  <text class="ch6p-label" x="95" y="212">Did margins</text>
  <text class="ch6p-label" x="95" y="226">move?</text>
  <text class="ch6p-sub" x="95" y="244">Controlling for mix.</text>

  <rect class="ch6p-node" x="175" y="170" width="140" height="85" rx="4" />
  <text class="ch6p-tag" x="245" y="189">Observation</text>
  <text class="ch6p-label" x="245" y="212">Competitive</text>
  <text class="ch6p-label" x="245" y="226">visibility?</text>
  <text class="ch6p-sub" x="245" y="244">Who matches whom.</text>

  <rect class="ch6p-node" x="330" y="170" width="140" height="85" rx="4" />
  <text class="ch6p-tag" x="400" y="189">JTBD</text>
  <text class="ch6p-label" x="400" y="212">Which jobs</text>
  <text class="ch6p-label" x="400" y="226">collide?</text>
  <text class="ch6p-sub" x="400" y="244">On which SKUs.</text>

  <rect class="ch6p-node" x="485" y="170" width="140" height="85" rx="4" />
  <text class="ch6p-tag" x="555" y="189">Operations</text>
  <text class="ch6p-label" x="555" y="212">Cycle time</text>
  <text class="ch6p-label" x="555" y="226">to shelf?</text>
  <text class="ch6p-sub" x="555" y="244">Two weeks or more.</text>

  <rect class="ch6p-node" x="635" y="170" width="140" height="85" rx="4" />
  <text class="ch6p-tag" x="705" y="189">Governance</text>
  <text class="ch6p-label" x="705" y="212">Approval</text>
  <text class="ch6p-label" x="705" y="226">authority?</text>
  <text class="ch6p-sub" x="705" y="244">Above threshold.</text>

  <line class="ch6p-arrow" x1="95" y1="255" x2="95" y2="310" />
  <polygon class="ch6p-head" points="90,305 100,305 95,315" />
  <line class="ch6p-arrow" x1="245" y1="255" x2="245" y2="310" />
  <polygon class="ch6p-head" points="240,305 250,305 245,315" />
  <line class="ch6p-arrow" x1="400" y1="255" x2="400" y2="310" />
  <polygon class="ch6p-head" points="395,305 405,305 400,315" />
  <line class="ch6p-arrow" x1="555" y1="255" x2="555" y2="310" />
  <polygon class="ch6p-head" points="550,305 560,305 555,315" />

  <path class="ch6p-arrow-back" d="M 705 255 C 790 255, 790 70, 540 70" />
  <polygon class="ch6p-head" points="550,65 550,75 540,70" />
  <text class="ch6p-sub" x="750" y="160">Redirect</text>
  <text class="ch6p-sub" x="750" y="173">upstream</text>

  <rect class="ch6p-node-top" x="30" y="315" width="600" height="60" rx="4" />
  <text class="ch6p-label" x="330" y="340">Piece list &mdash; four pieces forward to G3</text>
  <text class="ch6p-sub" x="330" y="360">Each piece carries a cut-kind tag; routing happens in the next chapter.</text>

  <text class="ch6p-band" x="400" y="415">One worked example of the anatomy in Illustration 6.1.</text>
</svg>
</div>

*Illustration 6.2 — The pricing example. One situation statement, five candidate pieces, four forward to G3, one returned upstream as a governance question. The same anatomy as Illustration 6.1, instantiated on a single case.*

Notice what the decomposition did not produce: an *AI pricing engine*. The frame that opened the tangle happened to reveal that three of the pieces are ordinary analytics work, one is an operations question about cycle time, and one is a governance decision that the original sentence was quietly assuming away. None of the five pieces is obviously best served by a new machine-learning system. Some may land there after G3, but that is G3's call, not G2's. Decomposition's job ends when the pieces are placeable; pretending to know the placement is how the method collapses into its opposite.

Next: [Chapter 7](ch-7.md) G3 Route takes the piece list and sends each piece to a destination — human, rule, model, tool-using agent, or back upstream.

## Sources

[1] Minto B. *The Pyramid Principle: Logic in Writing and Thinking*. Pitman; 1987. **[verified]**

[2] Ulwick A. *What Customers Want: Using Outcome-Driven Innovation to Create Breakthrough Products and Services*. McGraw-Hill; 2005. **[verified]**

[3] Ishikawa K. *Guide to Quality Control*. Asian Productivity Organization; 1968. **[verified]** The cause-and-effect diagram itself dates to Ishikawa's work at Kawasaki Steel in 1943; the 1968 book is the pedagogical codification.

[4] Ohno T. *Toyota Production System: Beyond Large-Scale Production*. Productivity Press; 1988. **[verified]** Ohno credits Sakichi Toyoda for the 5 Whys practice in the text.

[5] Watson HA. *Launch Control Safety Study*. Bell Telephone Laboratories; 1961. **[secondary]** Original document is restricted; fault tree analysis origin is cited in the IEC 61025 standard and subsequent fault-tree textbooks.

[6] Goldratt EM. *It's Not Luck*. North River Press; 1994. **[verified]** Current Reality Tree introduced as part of the Theory of Constraints thinking processes.

[7] Rittel HWJ, Webber MM. Dilemmas in a General Theory of Planning. *Policy Sciences*. 1973;4(2):155–69. **[verified]**
