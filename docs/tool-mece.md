# Toolkit — MECE check (Mutually Exclusive, Collectively Exhaustive)

*Gate: G2 Decompose. Category: structure substrate.*

## What problem it solves

A decomposition tree can look orderly and still contain overlaps (the same content in two branches) or gaps (some content in no branch). Overlaps double-count; gaps leave problems unaddressed. The MECE check is a 15-minute discipline run at every level of a pyramid or issue tree: *are the children of this parent mutually exclusive, and do they together cover everything the parent covers?* The engagement cannot route what it has not decomposed cleanly.

## How it is used

A **10–20 minute check per level** of the tree, interleaved with the G2 decomposition workshop. The chair reads the parent's summary and the children's summaries aloud, then asks two questions: *is any content in two children?* (exclusivity check) and *is any content in the parent that's in no child?* (exhaustivity check). Overlaps and gaps are recorded in a single log and addressed either by re-splitting the children or by recording an explicit cross-cut.

## Inputs

- The decomposition tree (pyramid or issue tree) under construction.
- The summary sentences at each level.
- One critical reader who will push back on the grouping.

## Outputs

- A **MECE log** per level: *checked, exclusive, exhaustive* with a pass/fail note and — for failures — what was corrected.
- For unavoidable overlaps: a **cross-cut record** naming the overlapping content and deciding where it is primarily owned, where it is secondarily reviewed, and how double-counting is avoided.
- For unavoidable gaps: a **scope decision** — either the parent's summary is narrowed or a new child is added.

## Visualisation

<div style="max-width: 900px; margin: 2rem auto;">
<svg viewBox="0 0 800 280" xmlns="http://www.w3.org/2000/svg" role="img" aria-labelledby="me-title">
  <title id="me-title">MECE check — a parent circle with three child circles; one pair overlaps (fail), one region outside all three is a gap</title>
  <style>
    .me-rect { fill: var(--md-default-bg-color, #fff); stroke: var(--md-default-fg-color, #000); stroke-width: 1.4; }
    .me-circ { fill: none; stroke: var(--md-default-fg-color, #000); stroke-width: 1.4; }
    .me-parent { fill: none; stroke: var(--md-default-fg-color, #000); stroke-width: 2.4; }
    .me-overlap { fill: var(--md-default-fg-color, #000); opacity: 0.25; }
    .me-gap { fill: var(--md-default-fg-color, #000); opacity: 0.08; }
    .me-line { stroke: var(--md-default-fg-color, #000); stroke-width: 1.2; fill: none; }
    .me-label { font: 700 12px -apple-system, sans-serif; fill: var(--md-default-fg-color, #000); text-anchor: middle; }
    .me-sub { font: 400 11px -apple-system, sans-serif; fill: var(--md-default-fg-color, #000); text-anchor: middle; }
    .me-tag { font: italic 10px -apple-system, sans-serif; fill: var(--md-default-fg-color, #000); text-anchor: middle; opacity: 0.8; }
  </style>
  <text class="me-label" x="200" y="30">Fail — overlap + gap</text>
  <rect class="me-parent" x="40" y="55" width="320" height="180" />
  <text class="me-sub" x="80" y="75">parent</text>
  <path class="me-gap" d="M40,55 L360,55 L360,85 L220,85 L220,125 L150,125 L150,180 L40,180 Z" />
  <circle class="me-circ" cx="130" cy="140" r="50" />
  <text class="me-sub" x="130" y="143">A</text>
  <circle class="me-circ" cx="230" cy="140" r="50" />
  <text class="me-sub" x="230" y="143">B</text>
  <path class="me-overlap" d="M180,140 m-25,0 a25,25 0 1,0 50,0 a25,25 0 1,0 -50,0" />
  <text class="me-sub" x="180" y="143">A∩B</text>
  <circle class="me-circ" cx="300" cy="190" r="30" />
  <text class="me-sub" x="300" y="193">C</text>
  <text class="me-tag" x="350" y="220">gap outside A+B+C</text>
  <text class="me-label" x="600" y="30">Pass — MECE</text>
  <rect class="me-parent" x="440" y="55" width="320" height="180" />
  <text class="me-sub" x="480" y="75">parent</text>
  <circle class="me-circ" cx="520" cy="155" r="55" />
  <text class="me-sub" x="520" y="158">A</text>
  <circle class="me-circ" cx="640" cy="100" r="40" />
  <text class="me-sub" x="640" y="103">B</text>
  <circle class="me-circ" cx="680" cy="185" r="45" />
  <text class="me-sub" x="680" y="188">C</text>
  <text class="me-tag" x="600" y="260">no overlap, no content outside A+B+C within parent</text>
</svg>
</div>

*Left: an overlap between A and B (fail on exclusivity), plus content inside the parent outside all children (fail on exhaustivity). Right: a clean partition.*

## Anatomy

**Exclusivity.** No content belongs to two children. If a sub-question shows up in two branches, either one branch should absorb it or the two branches should merge. Exclusivity is about not double-counting the work, not about physical separation — overlapping real-world concerns are often a feature of the problem, and the chair's job is to name them rather than pretend they are clean.

**Exhaustivity.** The children, together, cover the parent's full scope. Gaps are more common than overlaps and more damaging — they are the content the engagement silently agrees not to look at. The exhaustivity check produces the single question *what isn't in any of these branches?* and insists on an answer.

**Cross-cuts.** Some overlaps cannot be cleanly resolved — they are real features of the problem. The cross-cut record names the content, picks a primary owner branch, and writes a one-sentence rule for how the secondary branch reviews without re-counting.

**Scope decision.** Gaps are sometimes legitimately out of scope. The MECE log records the scope decision explicitly: *the parent is narrowed to exclude X,* or *a new branch Y is added to cover the gap,* or *the gap is accepted as known-uncovered with a G3 flag.*

## Example

??? example "Paper trail — MECE-checking the freight-yard pyramid"
    *Run during the G2 pyramid workshop, three 12-minute passes (one per level). Chair: Ada.*

    *Level 2 (top's children: slot allocation, dock coordination, carrier-ETA).*

    Ada: *"exclusivity — is any content in two of these?"* Raj: *"priority conflicts cause both reassignment churn (slot allocation) and ETA noise (carrier-ETA)."* Ada: *"overlap. Options: merge the two branches, or name a cross-cut."* The team chooses cross-cut. Primary owner: carrier-ETA (source of the conflict). Secondary review: slot-allocation branch reads *priority-conflict reassignment rate* without re-counting it.

    Ada: *"exhaustivity — is anything in 'unloading-time growth' outside these three?"* Jin: *"weather events — ice storms double unloading time."* Discussion: within engagement horizon, weather is a rare event and not the driver of the 16-minute trend. Decision: scope narrowed to exclude weather; documented in the MECE log with *if the trend changes to include weather, revisit.*

    *Level 3 (slot-allocation's children: assignment delay, reassignment churn, override handling).*

    Ada: *"exclusivity?"* Priya: *"override happens inside reassignment."* Ada: *"is override a sub-case of reassignment, or a distinct phenomenon?"* Priya: *"distinct — override is when the dispatcher rejects the allocator's suggestion. Reassignment is when a previously-assigned slot has to move because of other changes."* Clean. Both branches kept.

    Ada: *"exhaustivity?"* Raj: *"what about delays from the allocator itself being slow to respond — a compute latency issue?"* Ada: *"new leaf: *allocator-response latency*, added under slot allocation."* Gap closed.

    *Level 3 (carrier-ETA's children: ETA accuracy, paperwork arrival, priority conflicts).*

    Ada: *"exclusivity?"* Priya: *"ETA accuracy and paperwork are about different inputs — one is time, one is documents. Clean."* Ada: *"priority conflicts is already a cross-cut; noted."*

    Ada: *"exhaustivity?"* Raj: *"carrier no-shows — rare but a full-branch disruption."* Team: within engagement horizon, no-shows are <0.5% and not the trend's driver. Decision: noted in the log as known-uncovered; referenced at G3.

    *Close.* Three level checks, two cross-cuts, one closed gap, two documented scope decisions. MECE log fills half a page. The pyramid's credibility now rests on something explicit.

## Pitfalls

**Performative MECE.** The check is run and the answer is always *yes* — no overlaps, no gaps. A check that never finds anything is a check that isn't running.

**Hiding overlaps instead of naming them.** Real-world overlaps are common. Pretending they are not there produces a clean-looking tree that later gates route against, to their confusion. The cross-cut record is the right response.

**Gap closure by declaration.** *"We'll assume there are no other causes"* — said at level 2, never revisited — is how the engagement quietly narrows to whatever the team could think of in the workshop. The exhaustivity check must include an outside reader.

**Checking only the top level.** The MECE logic applies at every level of the tree. A level-4 overlap routes into the engagement just as surely as a level-2 one.

**MECE as a decoration.** The log has no entries; the tree still has overlaps. If the log is empty at every level, either the tree is flawless (rare) or the check has become ceremony. In the latter case, the chair's work is to run the check against real resistance, not with the team's automatic agreement.

## When not to use

- One-branch decompositions (the check is trivially passed).
- Engagements with a trusted pre-existing decomposition — rerun the check on any node that has been materially changed since the prior run.

## Provenance

The MECE discipline is explicit in Minto [1] and is part of the McKinsey problem-solving vocabulary documented in Rasiel [2]. The underlying set-theoretic logic — partition of a set into non-overlapping, covering subsets — predates the management application [3].

## Related tools

- **Minto pyramid.** MECE is the pyramid's level-by-level check.
- **Issue tree.** Same check; applied to sub-question groups.
- **Ishikawa.** Cross-cut identification carries into cause-and-effect branching.

## Verification

[1] Minto B. *The Pyramid Principle: Logic in Writing and Thinking*. 3rd ed. Pearson; 2009. **[verified]** Names and documents the MECE discipline.

[2] Rasiel EM. *The McKinsey Way*. McGraw-Hill; 1999. **[verified]** MECE as a consulting practice vocabulary.

[3] Halmos PR. *Naive Set Theory*. Van Nostrand; 1960. **[verified]** The set-theoretic foundation (partition of a set).
