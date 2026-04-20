# Toolkit — Framed problem paragraph

*Gate: G1 Observe. Category: framing artefact.*

## What problem it solves

The sponsor's first description of the problem is almost never the one that survives G2. It names the wrong unit, confuses symptoms with causes, or packages a solution as a problem (*"we need an AI for X"* is a solution disguised as a problem). The framed problem paragraph forces the engagement to produce one disciplined 5–8 sentence description before any decomposition starts — so later gates have something to decompose.

## How it is used

A **one-hour workshop**, chaired by the G1 lead, with the sponsor, one domain practitioner, and one observer. The group drafts the paragraph live, against a fixed structure. The paragraph is re-read at G2 (to anchor the tree), at G3 (to check routing does not drift from the frame), and at G5 (to check the piece still serves the problem as framed).

## Inputs

- The sponsor's original brief or problem statement.
- The Tier 0 clearance note (and dissenting view, if any).
- The domain practitioner's working language for the problem — the terms used by people doing the work.

## Outputs

- A **5–8 sentence paragraph** in the fixed structure (below).
- A list of **terms defined in the paragraph** — so every reader uses the terms the same way.
- A **rejected-framings log** — descriptions considered and set aside, with the reason each was set aside.

## Visualisation

<div style="max-width: 800px; margin: 2rem auto;">
<svg viewBox="0 0 800 320" xmlns="http://www.w3.org/2000/svg" role="img" aria-labelledby="fp-title">
  <title id="fp-title">Framed problem paragraph — five slots arranged as a page, each with a one-line prompt</title>
  <style>
    .fp-rect { fill: var(--md-default-bg-color, #fff); stroke: var(--md-default-fg-color, #000); stroke-width: 1.4; }
    .fp-line { stroke: var(--md-default-fg-color, #000); stroke-width: 0.8; fill: none; }
    .fp-label { font: 700 12px -apple-system, sans-serif; fill: var(--md-default-fg-color, #000); }
    .fp-sub { font: 400 11px -apple-system, sans-serif; fill: var(--md-default-fg-color, #000); }
    .fp-tag { font: italic 10px -apple-system, sans-serif; fill: var(--md-default-fg-color, #000); text-anchor: middle; opacity: 0.8; }
  </style>
  <rect class="fp-rect" x="60" y="30" width="680" height="260" />
  <text class="fp-label" x="80" y="60">Slot 1 — Unit:</text>
  <text class="fp-sub" x="190" y="60">what object or event the problem is about</text>
  <line class="fp-line" x1="80" y1="70" x2="720" y2="70" />
  <text class="fp-label" x="80" y="100">Slot 2 — Observation:</text>
  <text class="fp-sub" x="225" y="100">what is happening that wasn't, or isn't happening that should</text>
  <line class="fp-line" x1="80" y1="110" x2="720" y2="110" />
  <text class="fp-label" x="80" y="140">Slot 3 — Stakes:</text>
  <text class="fp-sub" x="185" y="140">who bears the cost, by how much, over what horizon</text>
  <line class="fp-line" x1="80" y1="150" x2="720" y2="150" />
  <text class="fp-label" x="80" y="180">Slot 4 — Constraints:</text>
  <text class="fp-sub" x="215" y="180">what cannot be changed (regulatory, budgetary, structural)</text>
  <line class="fp-line" x1="80" y1="190" x2="720" y2="190" />
  <text class="fp-label" x="80" y="220">Slot 5 — What we do not know:</text>
  <text class="fp-sub" x="275" y="220">the questions the engagement exists to answer</text>
  <line class="fp-line" x1="80" y1="230" x2="720" y2="230" />
  <text class="fp-tag" x="400" y="270">Five slots, one paragraph — 5 to 8 sentences when written through.</text>
</svg>
</div>

*The five slots are written as sentences, joined into a paragraph. The structure is fixed; the content is the engagement's.*

## Anatomy

**Unit.** The object or event the problem is about. *"Container unloading at bay 7"* is a unit; *"operations"* is not. A problem without a unit cannot be decomposed.

**Observation.** What is happening that wasn't, or what isn't happening that should. An observation, not an interpretation. *"Unloading times have grown from 28 to 44 minutes"* — not *"unloading is slow."*

**Stakes.** Who bears the cost, by how much, over what horizon. *"Drivers wait an additional 16 minutes per trip; 200 trips per day; 3,200 driver-minutes per day"* makes the stakes legible to any later gate.

**Constraints.** What cannot be changed for the engagement's horizon. Regulatory, union, budget, architectural. The frame is honest about what is off-limits; later gates do not have to re-litigate these.

**What we do not know.** The open questions the engagement exists to answer. If the paragraph can be written with no open questions, the engagement is not needed — the answer is already known.

**Rejected-framings log.** The paragraph's provenance. *"Considered framing as 'driver satisfaction'; rejected because driver satisfaction is downstream of unloading time and not directly measurable in the engagement's horizon."* The log prevents rejected framings from silently returning at G3.

## Example

??? example "Paper trail — the freight-yard framed paragraph"
    *G1 workshop, 70 minutes. Sponsor: VP of Operations. Practitioner: Raj (operations lead). Observer: Priya (later the allocator owner). Chair: Ada.*

    *T+0 — sponsor's opener.* VP: *"We need to use AI to improve yard operations."* Ada: *"that's a solution, not a problem. What is happening at the yard that you want to change?"*

    *T+15 — Slot 1 (Unit).* After probing: *the unit is yard-slot allocation for inbound trucks.* Not *"the yard."*

    *T+25 — Slot 2 (Observation).* Raj: *"slot allocation on busy days is taking 8–12 minutes per truck; on quiet days it's 2."* Observation recorded with the numbers.

    *T+35 — Slot 3 (Stakes).* Raj: *"drivers wait. Carriers complain. We've lost two carriers in the last year to slot-time problems, and the second one took our most-profitable lane with them."* Stakes recorded as driver-minutes, carrier retention, and one specific lost account.

    *T+45 — Slot 4 (Constraints).* VP: *"union agreement on dispatcher roles — we can't eliminate dispatcher judgement. And we're not replacing the yard-management system this year."* Two hard constraints recorded.

    *T+55 — Slot 5 (What we do not know).* Ada: *"what do you not know that the engagement would answer?"* Raj: *"we don't know why busy-day allocation takes so much longer per truck than quiet-day. We assume it's coordination, but we haven't measured."* Open questions recorded.

    *T+65 — paragraph written.* Seven sentences stitched from the five slots. The paragraph is re-read aloud. VP: *"we would have said 'AI for yard ops.' This is a different thing."* Ada: *"yes. That's why we wrote it."*

    *T+70 — rejected-framings log.* Two framings rejected: *driver satisfaction* (downstream), *carrier retention* (a stake, not the unit). Both recorded with the reason.

## Pitfalls

**Solution smuggled into the frame.** *"The problem is that we don't have an AI for X."* Ada rewrites: the problem is what X fails to do, not the absence of an AI.

**Unit too broad.** *"Yard operations."* A whole function is not a unit; nothing decomposes into it cleanly. The chair insists on a specific object or event.

**Observation as interpretation.** *"Drivers are frustrated"* is an interpretation. The observation is *drivers leave the carrier within 3 months at rates above industry benchmark;* frustration is one possible cause.

**Stakes without magnitude.** *"Operators are unhappy"* is not stakes. Stakes have numbers, populations, or time horizons.

**Open questions left out.** A frame with no open questions is a frame that has already answered the engagement. The engagement exists because some questions are open; naming them is the frame's most important slot.

## When not to use

- Engagements resuming a prior frame within the same year. Read the prior frame; do not re-draft it unless the situation has materially changed.
- One-page operational tweaks that do not warrant the method. The framed paragraph is overkill for *"change this label on the dashboard."*

## Provenance

The discipline of forcing a framed problem statement before decomposition traces to McKinsey's problem-definition protocols [1] and the Minto Pyramid tradition of structured prose [2]. Within product engineering, Rumelt's *Good Strategy / Bad Strategy* [3] names the *diagnosis* as the first act of strategy and argues that bad strategy skips this act and substitutes goals for diagnoses.

## Related tools

- **Stakeholder map (G1).** Names who is in the frame.
- **System description (G1).** Names what the frame touches.
- **Minto pyramid (G2).** The decomposition substrate the frame feeds.

## Verification

[1] Rasiel EM. *The McKinsey Way*. McGraw-Hill; 1999. **[verified]** Documents the structured problem-definition protocol.

[2] Minto B. *The Pyramid Principle: Logic in Writing and Thinking*. 3rd ed. Pearson; 2009. **[verified]** The canonical treatment of structured prose.

[3] Rumelt RP. *Good Strategy / Bad Strategy: The Difference and Why It Matters*. Crown Business; 2011. **[verified]** Names diagnosis as the first act of strategy and critiques goal-substitution.
