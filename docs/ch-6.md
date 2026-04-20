# Chapter 6 — G2 Decompose

G2 is the second Tier-1 gate. It reads the situation statement from G1 and closes when the team shares a confident, tested understanding of where the problem cuts — into pieces that can be placed separately at G3. The **piece list** is the artefact that records that understanding: a short, ordered enumeration of independent pieces, each tagged with a hint about the destination it is heading for. The gate is done when the piece list exists, every piece is genuinely independent, and no piece still hides a structure that would re-tangle the work at the next gate.

Most problems that arrive as tangled are not tangled. They are badly cut. The wrong frame generates fake complexity and the work then churns against the frame instead of the problem. Decomposition is the discipline of choosing the frame deliberately.

This chapter teaches the frames and the failures. It runs them on one problem — a retail pricing team that arrives at G1 with the sentence *our pricing is broken, we need an AI pricing engine* — and lets the frames cut it into shapes the next gate can use. The pricing example runs through the chapter; by the end, it has a piece list.

See Illustration 6.1.

<div style="max-width: 880px; margin: 2rem auto;">
<svg viewBox="0 0 800 420" xmlns="http://www.w3.org/2000/svg" role="img" aria-labelledby="ch6-ill61-title">
  <title id="ch6-ill61-title">G2 Decompose — situation statement to piece list</title>

  <style>
    .ch6d-node { fill: var(--md-default-bg-color, #fff); stroke: var(--md-default-fg-color, #000); stroke-width: 1.5; }
    .ch6d-node-top { fill: var(--md-default-bg-color, #fff); stroke: var(--md-default-fg-color, #000); stroke-width: 2.5; }
    .ch6d-label { font: 700 11px -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif; fill: var(--md-default-fg-color, #000); text-anchor: middle; }
    .ch6d-sub { font: italic 9px -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif; fill: var(--md-default-fg-color, #000); text-anchor: middle; opacity: 0.8; }
    .ch6d-tag { font: 500 9px -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif; letter-spacing: 0.08em; text-transform: uppercase; fill: var(--md-default-fg-color, #000); text-anchor: middle; opacity: 0.7; }
    .ch6d-arrow { stroke: var(--md-default-fg-color, #000); stroke-width: 1.5; fill: none; }
    .ch6d-arrow-back { stroke: var(--md-default-fg-color, #000); stroke-width: 1.5; fill: none; stroke-dasharray: 4 3; }
    .ch6d-head { fill: var(--md-default-fg-color, #000); }
    .ch6d-band { font: 500 10px -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif; letter-spacing: 0.18em; text-transform: uppercase; fill: var(--md-default-fg-color, #000); text-anchor: middle; opacity: 0.6; }
  </style>

  <text class="ch6d-band" x="400" y="20">G2 Decompose — one situation, five placeable pieces</text>

  <rect class="ch6d-node-top" x="290" y="50" width="220" height="56" rx="4" />
  <text class="ch6d-label" x="400" y="72">Situation statement</text>
  <text class="ch6d-sub" x="400" y="88">Pricing is broken; margins</text>
  <text class="ch6d-sub" x="400" y="99">compressed since March.</text>

  <line class="ch6d-arrow" x1="120" y1="180" x2="120" y2="142" />
  <polygon class="ch6d-head" points="115,146 125,146 120,136" transform="rotate(180 120 141)" />
  <line class="ch6d-arrow" x1="260" y1="180" x2="320" y2="112" />
  <polygon class="ch6d-head" points="315,116 325,116 320,106" transform="rotate(140 320 111)" />
  <line class="ch6d-arrow" x1="400" y1="180" x2="400" y2="112" />
  <polygon class="ch6d-head" points="395,116 405,116 400,106" transform="rotate(180 400 111)" />
  <line class="ch6d-arrow" x1="540" y1="180" x2="480" y2="112" />
  <polygon class="ch6d-head" points="475,116 485,116 480,106" transform="rotate(220 480 111)" />
  <line class="ch6d-arrow" x1="680" y1="180" x2="680" y2="142" />
  <polygon class="ch6d-head" points="675,146 685,146 680,136" transform="rotate(180 680 141)" />

  <rect class="ch6d-node" x="50" y="185" width="140" height="70" rx="4" />
  <text class="ch6d-tag" x="120" y="203">Analytics</text>
  <text class="ch6d-label" x="120" y="222">Did margins move?</text>
  <text class="ch6d-sub" x="120" y="239">Controlling for mix.</text>

  <rect class="ch6d-node" x="200" y="185" width="140" height="70" rx="4" />
  <text class="ch6d-tag" x="270" y="203">Observation</text>
  <text class="ch6d-label" x="270" y="222">Competitive</text>
  <text class="ch6d-label" x="270" y="236">visibility?</text>

  <rect class="ch6d-node" x="330" y="185" width="140" height="70" rx="4" />
  <text class="ch6d-tag" x="400" y="203">JTBD</text>
  <text class="ch6d-label" x="400" y="222">Which jobs</text>
  <text class="ch6d-label" x="400" y="236">collide on SKUs?</text>

  <rect class="ch6d-node" x="470" y="185" width="140" height="70" rx="4" />
  <text class="ch6d-tag" x="540" y="203">Operations</text>
  <text class="ch6d-label" x="540" y="222">Cycle time to</text>
  <text class="ch6d-label" x="540" y="236">shelf?</text>

  <rect class="ch6d-node" x="610" y="185" width="140" height="70" rx="4" />
  <text class="ch6d-tag" x="680" y="203">Governance</text>
  <text class="ch6d-label" x="680" y="222">Approval</text>
  <text class="ch6d-label" x="680" y="236">authority?</text>

  <line class="ch6d-arrow" x1="120" y1="260" x2="120" y2="310" />
  <polygon class="ch6d-head" points="115,305 125,305 120,315" />
  <line class="ch6d-arrow" x1="270" y1="260" x2="270" y2="310" />
  <polygon class="ch6d-head" points="265,305 275,305 270,315" />
  <line class="ch6d-arrow" x1="400" y1="260" x2="400" y2="310" />
  <polygon class="ch6d-head" points="395,305 405,305 400,315" />
  <line class="ch6d-arrow" x1="540" y1="260" x2="540" y2="310" />
  <polygon class="ch6d-head" points="535,305 545,305 540,315" />

  <path class="ch6d-arrow-back" d="M 680 260 C 680 300, 760 330, 760 80 C 760 50, 600 50, 510 50" />
  <polygon class="ch6d-head" points="515,45 515,55 505,50" />

  <rect class="ch6d-node" x="30" y="315" width="580" height="56" rx="4" />
  <text class="ch6d-label" x="320" y="340">Piece list — four pieces route forward to G3</text>
  <text class="ch6d-sub" x="320" y="357">Each piece carries a cut-kind tag; routing happens in the next chapter.</text>

  <text class="ch6d-tag" x="680" y="302">Redirected</text>
  <text class="ch6d-sub" x="680" y="317">Not a cut —</text>
  <text class="ch6d-sub" x="680" y="330">a decision-rights</text>
  <text class="ch6d-sub" x="680" y="343">repair upstream.</text>

  <text class="ch6d-band" x="400" y="400">Decomposition produces placeable pieces. A piece may be a placement; a piece may be a redirect.</text>
</svg>
</div>

*Illustration 6.1 — G2 Decompose. One situation statement, five candidate pieces, four carried forward to G3, one returned upstream as a governance question.*

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

## 6.3 Specialist frames

The backbone carries most business problems. Four specialist frames handle the shapes the backbone mishandles.

**Jobs to be Done.** When the problem is about what an offering is *for*, not what it *is*, reach for Jobs to be Done. The question becomes: what outcome is the buyer hiring this thing to achieve? Tony Ulwick published the operational form — Outcome-Driven Innovation — in *What Customers Want* [2]. Christensen later popularised a looser narrative form; the operational toolkit is Ulwick's and the 150-desired-outcome interview protocol is the part a decomposition can actually use.

For the pricing team, a JTBD cut changes the frame: *what job is a shopper hiring a price for?* Signalling value relative to a competitor. Qualifying an item for a basket. Resolving an information gap between list and promotional price. Three jobs, three different pricing behaviours. This reveals that *promotion cannibalisation* is not a promotions problem; it is two jobs fighting each other on the same stock-keeping unit.

**Ishikawa.** The fishbone diagram. Cause-and-effect decomposition across categories — typically Man, Machine, Material, Method, Measurement, Milieu. Kaoru Ishikawa wrote the canonical *Guide to Quality Control* [3], published in English in 1968; the diagram itself dates to his work at Kawasaki Steel in 1943, the book is the pedagogical codification.

Ishikawa is the right frame when the situation statement names a symptom and the cause is unknown. It works less well when the relevant causes are not category-shaped — when the cause is a single chain of decisions rather than a family of possibilities.

**5 Whys.** A linear chain of causal questions. Each answer becomes the next question. Taiichi Ohno documented the technique in *Toyota Production System* [4] and was explicit that the practice came from Sakichi Toyoda, the founder's father, not from Ohno himself.

5 Whys is terse and cheap. It works when the causal structure is a chain, not a tree. Its failure mode is confident-sounding: the fifth why often names whatever was already believed at the start, because no one is forced to enumerate alternatives at each step. Use it as a probe, not a proof. Pair it with Ishikawa when the chain might actually be a tree.

**Fault tree.** A formal probabilistic method for safety-critical decomposition, with Boolean logic under the branches and failure probabilities attached. Developed at Bell Labs for the Minuteman launch control in 1961 [5] and codified later in IEC 61025. When the failure of the system can kill someone or wipe a company, the decomposition must quantify, not narrate. Its near-cousin, Goldratt's Current Reality Tree from the Theory of Constraints [6], handles the systemic case where undesirable effects propagate through a web of constraints rather than fanning out from a single top event. Both sit in the safety-critical and systemic annexes; the backbone covers most other cases.

## 6.4 Choosing the right frame

Decomposition frames are not interchangeable. A short decision question selects the right one without ceremony.

*Is the shape of the right answer unclear?* Reach for JTBD. The frame opens up what outcome is actually being bought, which is almost always the question that the situation statement leaves implicit.

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

Back to the pricing team. After the frames have run, the tangled sentence has opened into: an analytics question (did margins move, controlling for mix), an observation question (what is competitive visibility now, and who is matching whom), a JTBD question (which jobs are colliding on which stock-keeping units), an operations question (can a price change reach shelves in under two weeks), and a governance question (who approves changes above a threshold). Five pieces. Four head to G3. One will be sent back, because governance is not a routing target; it is an upstream repair. The decomposition is done.

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
