# Toolkit — Issue tree

*Gate: G2 Decompose. Category: structure substrate.*

## What problem it solves

The pyramid organises *answers*; many engagements arrive with only a *question* and need a tree whose top is the question being pursued. An issue tree is the pyramid's question-shaped cousin: it decomposes a top-level question into sub-questions, each of which is answered by branches of data, analysis, or judgement. Without the tree, the engagement tries to answer the top-level question directly and runs out of fidelity; with it, each branch is tractable on its own.

## How it is used

A **90-minute G2 workshop**, usually after the pyramid's top sentence has been provisionally written. The chair draws the top-level question and asks: *to answer this, what do we have to answer first?* Each child is a sub-question; the tree stops recursing when a question is answerable by the existing substrate (data, interview, document) or by one routable leaf. The tree is drawn on one sheet and attached to the G2 output.

## Inputs

- Framed problem paragraph.
- The top-level question the engagement exists to answer — if the pyramid is already drafted, the question form of its top sentence.
- The team's initial list of sub-questions.

## Outputs

- A **question tree**: top question, sub-questions, sub-sub-questions, each recursively until answerable.
- A **source column** per leaf: where the answer will come from (data pull, interview, literature, analysis, decision).
- A flagged list of **unanswerable questions** — leaves whose sources are not available within the engagement. These get a *what would we need to answer this* note and a decision on whether to pursue the source or close the leaf as *unknown*.

## Visualisation

<div style="max-width: 900px; margin: 2rem auto;">
<svg viewBox="0 0 800 280" xmlns="http://www.w3.org/2000/svg" role="img" aria-labelledby="it-title">
  <title id="it-title">Issue tree — top-level question decomposed into sub-questions down to answerable leaves, each marked with a source</title>
  <style>
    .it-rect { fill: var(--md-default-bg-color, #fff); stroke: var(--md-default-fg-color, #000); stroke-width: 1.4; }
    .it-leaf { fill: var(--md-default-bg-color, #fff); stroke: var(--md-default-fg-color, #000); stroke-width: 1.2; stroke-dasharray: 2,2; }
    .it-line { stroke: var(--md-default-fg-color, #000); stroke-width: 1.2; fill: none; }
    .it-label { font: 700 12px -apple-system, sans-serif; fill: var(--md-default-fg-color, #000); text-anchor: middle; }
    .it-sub { font: 400 11px -apple-system, sans-serif; fill: var(--md-default-fg-color, #000); text-anchor: middle; }
    .it-tag { font: italic 10px -apple-system, sans-serif; fill: var(--md-default-fg-color, #000); text-anchor: middle; opacity: 0.8; }
  </style>
  <rect class="it-rect" x="20" y="110" width="180" height="60" />
  <text class="it-label" x="110" y="135">Top question?</text>
  <text class="it-sub" x="110" y="155">what the engagement asks</text>
  <rect class="it-rect" x="260" y="30" width="180" height="50" />
  <text class="it-sub" x="350" y="55">Sub-question 1?</text>
  <rect class="it-rect" x="260" y="110" width="180" height="50" />
  <text class="it-sub" x="350" y="135">Sub-question 2?</text>
  <rect class="it-rect" x="260" y="195" width="180" height="50" />
  <text class="it-sub" x="350" y="220">Sub-question 3?</text>
  <rect class="it-leaf" x="500" y="15" width="140" height="40" />
  <text class="it-sub" x="570" y="35">Leaf 1.1</text>
  <text class="it-tag" x="570" y="50">data pull</text>
  <rect class="it-leaf" x="500" y="60" width="140" height="40" />
  <text class="it-sub" x="570" y="80">Leaf 1.2</text>
  <text class="it-tag" x="570" y="95">interview</text>
  <rect class="it-leaf" x="500" y="115" width="140" height="40" />
  <text class="it-sub" x="570" y="135">Leaf 2.1</text>
  <text class="it-tag" x="570" y="150">analysis</text>
  <rect class="it-leaf" x="500" y="180" width="140" height="40" />
  <text class="it-sub" x="570" y="200">Leaf 3.1</text>
  <text class="it-tag" x="570" y="215">decision</text>
  <rect class="it-leaf" x="500" y="225" width="140" height="40" />
  <text class="it-sub" x="570" y="245">Leaf 3.2</text>
  <text class="it-tag" x="570" y="260">unanswerable</text>
  <line class="it-line" x1="200" y1="140" x2="260" y2="55" />
  <line class="it-line" x1="200" y1="140" x2="260" y2="135" />
  <line class="it-line" x1="200" y1="140" x2="260" y2="220" />
  <line class="it-line" x1="440" y1="55" x2="500" y2="35" />
  <line class="it-line" x1="440" y1="55" x2="500" y2="80" />
  <line class="it-line" x1="440" y1="135" x2="500" y2="135" />
  <line class="it-line" x1="440" y1="220" x2="500" y2="200" />
  <line class="it-line" x1="440" y1="220" x2="500" y2="245" />
  <text class="it-tag" x="400" y="285">Every leaf has a source (or is flagged unanswerable).</text>
</svg>
</div>

*Each node is a question. Each leaf (dashed) has a source — the substrate the answer will come from.*

## Anatomy

**Top-level question.** The question the engagement exists to answer. Written in its full form, not a shorthand. *"What is driving the 16-minute growth in unloading times?"*, not *"unloading."*

**Sub-questions.** The questions that have to be answered to answer the parent. Each sub-question must, when answered, contribute to the parent's answer — otherwise it belongs on a different tree.

**Leaves.** Questions that are answerable by one identifiable substrate — a data pull, a single interview, a piece of analysis, a policy decision. A leaf with no identified source is not a leaf; it is a branch waiting for its children.

**Source column.** Per leaf: *where the answer comes from*. The engagement team uses this to parallelise work (leaves by source type), to estimate effort, and — critically — to identify which leaves are blocked on unobtainable sources.

**Unanswerable leaves.** Sometimes the answer is not within reach. Flag, name the unobtainable source, decide whether to pursue it (expand engagement scope), proxy it (use a weaker substrate), or close the leaf as *unknown* (and carry the unknown into G3 as a routing constraint).

## Example

??? example "Paper trail — the freight-yard issue tree"
    *G2 workshop following the pyramid, 80 minutes. Same team as the pyramid session.*

    *T+0 — top question.* From the pyramid's top sentence: *"where did the 16 minutes go?"* Ada draws the root.

    *T+10 — first-level sub-questions.* The pyramid's three groups, reformulated as questions: *How much time is in slot allocation? In dock-door coordination? In carrier-ETA misalignment?* Three branches.

    *T+25 — second level.* Under *slot allocation*, three sub-questions: *What is the assignment-delay distribution? How often do reassignments happen? How often do dispatchers override the allocator's recommendation (when the allocator exists)?* Each becomes a leaf.

    *T+45 — sources.* Priya lists sources: assignment-delay is a data pull from the dispatcher's radio log; reassignment is a data pull; override is not measurable today because there is no allocator to override. Ada: *"the override leaf is unanswerable ex-ante. Flag and carry forward — we learn it from the shadow stage of the rollout."* Recorded.

    *T+60 — carrier-ETA branch.* Leaves include *ETA accuracy* (data pull from carrier feed), *paperwork-arrival delay* (interview dispatchers), and *priority-conflict rate* (cross-cut with slot allocation; measured once, read twice).

    *T+75 — unanswerables.* Three leaves are unanswerable within the engagement horizon: override rate (needs shadow stage), driver-side delays (driver data is not accessible, carriers will not share), third-party carrier rating of yard experience (no consent mechanism). Each flagged with *what would we need* and a routing note.

    *T+80 — close.* Nine answerable leaves + three unanswerables, each with a source or a flagged-absence note. The tree and the sources feed G3 routing.

## Pitfalls

**Questions that are not questions.** *"Slot allocation"* is a topic. The tree needs *"how much time does slot allocation take?"* — with a question mark and an answerable form.

**Overlapping sub-questions.** Two sub-questions whose answers would be the same data. The tree stops branching before that point.

**Sources invented, not named.** *"We'll figure it out from ops"* is not a source. *"Radio log pull, dates W3–W5 2026, by shift"* is.

**Skipping the unanswerable flag.** A leaf that isn't really answerable, presented as if it were, produces a confident wrong answer later. Flagging is more valuable than pretending.

**Trees built by the team alone.** A tree drawn only by the engagement team reproduces the team's blind spots. An outside reader (same as for the pyramid) is the trees' cheap insurance.

## When not to use

- Engagements where the pyramid form fits better (answer-shaped rather than question-shaped).
- One-leaf engagements (single data pull, no decomposition).
- Research-first engagements where the sub-questions are genuinely emergent and forcing a tree prematurely constrains what gets investigated.

## Provenance

The issue-tree form is documented in Rasiel's *The McKinsey Way* [1] as the standard problem-decomposition substrate for consulting engagements. It is the question-shaped sibling of Minto's pyramid [2]. In the academic operations-research literature the same structure appears as *goal decomposition* in systems-engineering practice [3].

## Related tools

- **Minto pyramid.** The answer-shaped cousin.
- **MECE.** Same check; applied to sub-question groups.
- **Pair worksheet (G3).** Unanswerable leaves with a candidate ML approach get recorded here.

## Verification

[1] Rasiel EM. *The McKinsey Way*. McGraw-Hill; 1999. **[verified]** Documents the issue-tree as the standard consulting decomposition substrate.

[2] Minto B. *The Pyramid Principle: Logic in Writing and Thinking*. 3rd ed. Pearson; 2009. **[verified]** The pyramid's question-shaped sibling.

[3] NASA Systems Engineering Handbook. NASA SP-2007-6105 Rev 1. NASA; 2007. **[verified]** Goal decomposition in systems-engineering practice.
