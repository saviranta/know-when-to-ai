# Toolkit — Jobs-to-be-done (JTBD)

*Gate: G2 Decompose. Category: structure substrate.*

## What problem it solves

Problem decompositions drawn from the organisation's internal view can miss what the *user* or *customer* is trying to accomplish. A feature or process that the organisation classifies as one category may be, from the user's perspective, the substrate for a completely different *job* — and the job, not the category, is what the engagement should serve. Jobs-to-be-done reframes the decomposition around the user's goal: *when the user is in this situation, they are trying to get this outcome — which is the job*.

## How it is used

A **60-minute G2 workshop**, typically run after (or alongside) the pyramid or issue tree. The chair interviews a practitioner or user in the room — *what were you doing when you last reached for this process? What were you trying to accomplish? What counted as success?* Answers are written in the JTBD form and matched against the decomposition tree. Where a job does not map to a branch, the tree is expanded or reframed.

## Inputs

- At least one practitioner or user who can describe usage situations concretely.
- The in-progress pyramid or issue tree.
- A willingness to reshape the tree if the jobs do not match it.

## Outputs

- A **set of job statements** in the canonical form: *"When [situation], I want to [motivation], so I can [outcome]."*
- A **mapping** from each job to one or more branches of the decomposition tree.
- A **reshape note** where the tree was changed to accommodate a job — or where a job was determined out-of-scope.

## Visualisation

<div style="max-width: 900px; margin: 2rem auto;">
<svg viewBox="0 0 800 280" xmlns="http://www.w3.org/2000/svg" role="img" aria-labelledby="jt-title">
  <title id="jt-title">JTBD — three situation-motivation-outcome cards mapped onto decomposition-tree branches</title>
  <style>
    .jt-rect { fill: var(--md-default-bg-color, #fff); stroke: var(--md-default-fg-color, #000); stroke-width: 1.4; }
    .jt-line { stroke: var(--md-default-fg-color, #000); stroke-width: 1.2; fill: none; }
    .jt-arrow { fill: var(--md-default-fg-color, #000); }
    .jt-label { font: 700 12px -apple-system, sans-serif; fill: var(--md-default-fg-color, #000); }
    .jt-sub { font: 400 10px -apple-system, sans-serif; fill: var(--md-default-fg-color, #000); }
    .jt-tag { font: italic 10px -apple-system, sans-serif; fill: var(--md-default-fg-color, #000); text-anchor: middle; opacity: 0.8; }
  </style>
  <defs><marker id="jt-a" markerWidth="9" markerHeight="9" refX="8" refY="4.5" orient="auto"><path d="M0,0 L8,4.5 L0,9 z" class="jt-arrow"/></marker></defs>
  <rect class="jt-rect" x="20" y="20" width="220" height="80" />
  <text class="jt-label" x="32" y="40">Job 1</text>
  <text class="jt-sub" x="32" y="55">When a carrier calls priority,</text>
  <text class="jt-sub" x="32" y="70">I want to reassign a slot fast,</text>
  <text class="jt-sub" x="32" y="85">so I can keep the lane.</text>
  <rect class="jt-rect" x="20" y="110" width="220" height="80" />
  <text class="jt-label" x="32" y="130">Job 2</text>
  <text class="jt-sub" x="32" y="145">When paperwork arrives late,</text>
  <text class="jt-sub" x="32" y="160">I want to know ETA for docs,</text>
  <text class="jt-sub" x="32" y="175">so I can sequence trucks.</text>
  <rect class="jt-rect" x="20" y="200" width="220" height="60" />
  <text class="jt-label" x="32" y="220">Job 3</text>
  <text class="jt-sub" x="32" y="235">When two carriers want the same slot,</text>
  <text class="jt-sub" x="32" y="250">I want a defensible call.</text>
  <rect class="jt-rect" x="500" y="40" width="240" height="40" />
  <text class="jt-label" x="620" y="65" text-anchor="middle">Branch — slot allocation</text>
  <rect class="jt-rect" x="500" y="105" width="240" height="40" />
  <text class="jt-label" x="620" y="130" text-anchor="middle">Branch — carrier-ETA</text>
  <rect class="jt-rect" x="500" y="175" width="240" height="40" />
  <text class="jt-label" x="620" y="200" text-anchor="middle">Branch — priority arbitration (new)</text>
  <line class="jt-line" x1="240" y1="60" x2="500" y2="60" marker-end="url(#jt-a)" />
  <line class="jt-line" x1="240" y1="150" x2="500" y2="125" marker-end="url(#jt-a)" />
  <line class="jt-line" x1="240" y1="230" x2="500" y2="195" marker-end="url(#jt-a)" />
  <text class="jt-tag" x="400" y="245">Job 3 required a new branch — the tree reshaped to match.</text>
</svg>
</div>

*Three jobs mapped onto three branches; the bottom branch had to be added because no existing branch covered the job.*

## Anatomy

**Situation.** When the job arises. Specific enough to be observed in practice. *"A carrier calls priority on an already-assigned slot"* is a situation; *"busy days"* is not.

**Motivation.** What the user is trying to do in that situation. The motivation is often not the observed action but the aim of the action — *"to reassign fast"* is the motivation; *"to radio the dispatcher"* is the action.

**Outcome.** What success looks like, from the user's perspective. Often measurable, sometimes relational (*keep the carrier lane*, *maintain team trust*, *not escalate to the supervisor*). The outcome is the test — if the engagement serves the job, it serves this outcome.

**Mapping.** Each job is mapped to one or more branches of the decomposition tree. A job that doesn't map cleanly is the tree's signal to reshape.

**Reshape record.** When the tree changes because of a job, record what changed and why. This is how JTBD keeps the tree honest against user reality rather than internal tidiness.

## Example

??? example "Paper trail — jobs at the freight yard"
    *G2 JTBD session, 55 minutes. Chair: Ada. In the room: Raj, two senior dispatchers (Chen, Martinez). Tree in progress from the pyramid session.*

    *T+0 — situation-led interview.* Ada: *"Chen — think of the last time you had a bad slot-allocation day. What was the first thing that happened?"* Chen: *"a carrier called for priority. Their truck was already en route, they'd lost a lane. They wanted priority or they'd leave us."*

    *T+10 — job form.* Ada writes: *When a carrier calls priority, I want to reassign a slot fast, so I can keep the lane.* Motivation (fast reassignment); outcome (kept lane). Maps to slot-allocation branch, specifically the reassignment-churn leaf.

    *T+20 — second job.* Martinez: *"paperwork. A truck shows up without its paperwork — driver is at a rest stop, documents are coming via email. I have to either hold the truck or sequence it around."* Job: *When paperwork arrives late, I want to know ETA for docs, so I can sequence trucks.* Maps to carrier-ETA branch.

    *T+35 — third job.* Chen: *"when two carriers are fighting over the same slot, I need a call I can defend. Both have valid arguments. I need the call to not be *I said so*."* Job: *When two carriers want the same slot, I want a defensible call.*

    *T+40 — mapping check.* Ada: *"where does the defensible-call job map on our tree?"* Silence. Raj: *"we don't have a branch for arbitration. We treat priority-conflict as a cross-cut, but arbitration itself — the defensibility of the call — isn't a branch."* Ada: *"the tree has to reshape. Add a branch: *priority arbitration*. It's the defensibility question Chen named."* New branch added. MECE re-run at the level. Pass.

    *T+55 — close.* Three jobs, three branches, one reshape. The reshape note: *"Priority arbitration added as a distinct branch, prompted by JTBD #3. Previously treated only as a cross-cut; now recognised as its own scope."*

## Pitfalls

**Features as jobs.** *"I want a faster allocator"* is a feature request, not a job. The job behind it is *"I want to reassign fast, so I can keep the lane."* The chair re-elicits until the *so I can* clause is present.

**Job form without evidence.** A job statement that nobody can name a specific recent instance of is a hypothesis, not a job. The interview must anchor on real situations.

**Too few practitioners.** One practitioner's jobs are one perspective. Two or three produces a job *set*. Ada interviewed both Chen and Martinez for exactly this reason.

**Refusing to reshape.** The tree is reshape-able. A team that treats the tree as fixed and forces the jobs into existing branches loses the JTBD check's main value — the ability to see a gap the internal view missed.

**Jobs at the wrong grain.** A job at a whole-function level (*"I want operations to go well"*) is not usable. A job at a single-minute level (*"I want the radio to connect"*) is too fine. The right grain is one work-situation.

## When not to use

- Engagements where the user is the engagement team itself (internal tooling with no external job). JTBD collapses to the pyramid.
- Very mature products where the job map has been built and validated externally. Re-read the existing map rather than redoing the exercise.

## Provenance

The jobs-to-be-done framework is documented in Christensen et al. [1] as a reframing of product work from features to customer purposes. Ulwick's *outcome-driven innovation* [2] formalises the canonical *When-I want-so I can* form that the card uses. The practice has a long tradition in service design and requirements engineering.

## Related tools

- **Framed problem paragraph.** Slot 3 names stakes; JTBD names the user's reasons.
- **Stakeholder map.** The users whose jobs are elicited come from the map.
- **AI canvas (G3).** Canvas's value proposition is tightened by having the job statements in hand.

## Verification

[1] Christensen CM, Hall T, Dillon K, Duncan DS. *Competing Against Luck: The Story of Innovation and Customer Choice*. HarperBusiness; 2016. **[verified]** The canonical JTBD treatment in business strategy.

[2] Ulwick AW. *Jobs to Be Done: Theory to Practice*. Idea Bite Press; 2016. **[verified]** Formalises the outcome-driven innovation framing and the job-statement form.
