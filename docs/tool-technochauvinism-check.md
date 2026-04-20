# Toolkit — Technochauvinism check

*Gate: Tier 0. Category: refusal artefact.*

## What problem it solves

A proposal arrives with AI already in its first sentence. The question *should a computer decide this at all?* never gets asked, because the proposal has skipped straight to *which model should decide this?* The technochauvinism check forces one pass at the prior question, before any of the gates open. Most engagements that should refuse do so here — long before anyone has spent a week on data.

## How it is used

A **30-minute conversation at Tier 0**, one time per engagement, before G1. Participants: the sponsor, one domain practitioner, one person who did *not* originate the proposal. The chair walks through four prompts and lets the group's answers settle. If no good non-computational answer surfaces, the engagement proceeds to G1. If a non-computational answer is available and dominant, the engagement is refused at Tier 0.

## Inputs

- The engagement brief or problem statement as written by the sponsor.
- A practitioner who has done the relevant work manually or with a non-computational substrate.
- The four prompts (below).

## Outputs

- A one-page **Tier 0 refusal memo** (if refused): what was proposed, what substrate serves better, why.
- Or a **Tier 0 clearance note** (if cleared): the four prompts answered, the computational framing preserved, with the refusal reasoning logged against.
- A pointer forward: *which gate picks up the next decision* (usually G1).

## Visualisation

<div style="max-width: 800px; margin: 2rem auto;">
<svg viewBox="0 0 800 280" xmlns="http://www.w3.org/2000/svg" role="img" aria-labelledby="tc-title">
  <title id="tc-title">Technochauvinism check — four prompts funneling to a refuse/clear decision</title>
  <style>
    .tc-rect { fill: var(--md-default-bg-color, #fff); stroke: var(--md-default-fg-color, #000); stroke-width: 1.4; }
    .tc-dash { fill: var(--md-default-bg-color, #fff); stroke: var(--md-default-fg-color, #000); stroke-width: 1.2; stroke-dasharray: 4,3; }
    .tc-line { stroke: var(--md-default-fg-color, #000); stroke-width: 1.2; fill: none; }
    .tc-arrow { fill: var(--md-default-fg-color, #000); }
    .tc-label { font: 700 12px -apple-system, sans-serif; fill: var(--md-default-fg-color, #000); text-anchor: middle; }
    .tc-sub { font: 400 11px -apple-system, sans-serif; fill: var(--md-default-fg-color, #000); text-anchor: middle; }
    .tc-tag { font: italic 10px -apple-system, sans-serif; fill: var(--md-default-fg-color, #000); text-anchor: middle; opacity: 0.8; }
  </style>
  <defs><marker id="tc-a" markerWidth="9" markerHeight="9" refX="8" refY="4.5" orient="auto"><path d="M0,0 L8,4.5 L0,9 z" class="tc-arrow"/></marker></defs>
  <rect class="tc-rect" x="30" y="30" width="160" height="50" />
  <text class="tc-label" x="110" y="52">Prompt 1</text>
  <text class="tc-sub" x="110" y="70">What were we doing before?</text>
  <rect class="tc-rect" x="30" y="100" width="160" height="50" />
  <text class="tc-label" x="110" y="122">Prompt 2</text>
  <text class="tc-sub" x="110" y="140">Is the problem scarce?</text>
  <rect class="tc-rect" x="30" y="170" width="160" height="50" />
  <text class="tc-label" x="110" y="192">Prompt 3</text>
  <text class="tc-sub" x="110" y="210">Is compute the bottleneck?</text>
  <rect class="tc-rect" x="30" y="240" width="160" height="30" />
  <text class="tc-label" x="110" y="260">Prompt 4 — refuse-or-clear</text>
  <line class="tc-line" x1="190" y1="55" x2="330" y2="140" marker-end="url(#tc-a)" />
  <line class="tc-line" x1="190" y1="125" x2="330" y2="145" marker-end="url(#tc-a)" />
  <line class="tc-line" x1="190" y1="195" x2="330" y2="150" marker-end="url(#tc-a)" />
  <line class="tc-line" x1="190" y1="255" x2="330" y2="155" marker-end="url(#tc-a)" />
  <rect class="tc-rect" x="330" y="120" width="160" height="60" />
  <text class="tc-label" x="410" y="145">Chair's read</text>
  <text class="tc-sub" x="410" y="165">Does a non-computational</text>
  <text class="tc-sub" x="410" y="178">answer dominate?</text>
  <line class="tc-line" x1="490" y1="135" x2="600" y2="70" marker-end="url(#tc-a)" />
  <line class="tc-line" x1="490" y1="165" x2="600" y2="225" marker-end="url(#tc-a)" />
  <rect class="tc-dash" x="600" y="40" width="170" height="60" />
  <text class="tc-label" x="685" y="65">REFUSE</text>
  <text class="tc-sub" x="685" y="85">One-page Tier 0 memo.</text>
  <rect class="tc-rect" x="600" y="200" width="170" height="60" />
  <text class="tc-label" x="685" y="225">CLEAR to G1</text>
  <text class="tc-sub" x="685" y="245">Clearance note logged.</text>
  <text class="tc-tag" x="555" y="115">yes</text>
  <text class="tc-tag" x="555" y="200">no</text>
</svg>
</div>

*Four prompts compress into one chair's read, which routes the engagement to one of two outputs.*

## Anatomy

**Prompt 1 — What were we doing before?** The description of the current substrate. If nothing was being done (the problem is newly visible), that itself is informative; if something was being done well, the burden shifts to showing compute improves on it.

**Prompt 2 — Is the problem actually scarce?** Broccoli's technochauvinism diagnosis [1]: the problem may be one of distribution, attention, or will, not of computational capacity. A food-bank routing problem is not a routing problem if the food is not there.

**Prompt 3 — Is compute the bottleneck?** Even when the problem is real, the constraint might be elsewhere. Clerical throughput is almost never compute-bound; it is attention-bound, policy-bound, or training-bound.

**Prompt 4 — Refuse or clear.** The chair's read. Not a vote. If a credible non-computational answer dominates the room, the engagement is refused. If the four prompts leave computation plausibly in the mix, the engagement proceeds to G1, where the framing of the problem gets its first real test.

## Example

??? example "Paper trail — refusing an AI-for-triage engagement"
    *Tier 0 session, 35 minutes. Sponsor: a regional public-health office. Practitioner: a senior community-outreach worker. Chair: Ada.*

    *T+0 — proposal.* Sponsor: *"We want an AI to triage community-outreach visits. We have 40,000 households and 12 workers; the AI would prioritise high-need visits."*

    *T+5 — Prompt 1.* Ada: *"what are you doing now?"* Sponsor: *"A Tuesday meeting where the workers hand-sort the week's list based on what they know about each household."* Practitioner: *"most of us can do that in 20 minutes. It's not the bottleneck."*

    *T+10 — Prompt 2.* Ada: *"what *is* the bottleneck?"* Practitioner: *"we have 12 workers for 40,000 households. We can visit maybe 150 a week. Triage isn't the problem. Worker-hours are the problem."*

    *T+15 — Prompt 3.* Sponsor: *"the AI would also help us identify households we're missing."* Practitioner: *"we know which households we're missing. They're the ones who moved, or who don't answer the door. The AI can't knock."*

    *T+22 — Prompt 4.* Ada: *"is there a non-computational answer that dominates?"* The room's answer — practitioner loudest — is *hire more workers, or reduce the case load per worker.* The AI proposal does not serve the bottleneck.

    *T+30 — memo drafted.* One page: *proposal refused at Tier 0. The problem is worker-hours, not triage. An AI triage system would optimise the 20-minute part of the problem; the 40-hour part remains unaddressed. Recommended next step: workforce review, not AI engagement.* Sponsor signs acknowledgement, not agreement — the refusal is documented even where the sponsor still wants to pursue the AI path through another channel.

    *T+35 — close.* The engagement does not enter G1. The Tier 0 memo is attached to the sponsor's decision record.

## Pitfalls

**Accepting the proposal's framing.** If the chair takes the sponsor's framing as given, the four prompts narrow to *which AI?* The prompts only work if *whether AI* is genuinely on the table.

**No practitioner in the room.** The check without someone who has done the manual work produces a theoretical refuse-or-clear. The practitioner's account of the current substrate is the check's empirical anchor.

**Refusal as judgement.** The output is a memo about the *problem*, not about the *sponsor*. Sponsors who hear refusal as personal rejection are less likely to seek Tier 0 checks on future engagements. The memo's language matters.

**Missing the weak-positive.** Occasionally the four prompts yield *computation helps a small part of the problem, not the main part.* The answer is not always full refusal; sometimes it is *scope the engagement to the part compute actually addresses.* The chair should note this explicitly.

## When not to use

- Engagements where the computational framing has already survived a prior Tier 0 check within the past 12 months.
- Engagements that are not AI-forward in their proposal (pure operations improvement, policy change, workforce change). Tier 0 is about the AI-first premise.

## Provenance

Broccoli's *Artificial Unintelligence* [1] names technochauvinism as the assumption that computational solutions are preferable even when a non-computational solution serves better, and surveys the empirical pattern of public-sector AI engagements that refused too late. The literature on inappropriate technology transfer in development studies [2] documents the same pattern outside the AI domain.

## Related tools

- **Abolition check.** The paired Tier 0 artefact — not *should a computer decide* but *should this decision be made at all?*
- **Framed problem paragraph (G1).** The engagement that clears Tier 0 produces this next.

## Verification

[1] Broussard M. *Artificial Unintelligence: How Computers Misunderstand the World*. MIT Press; 2018. **[verified]** Names and diagnoses technochauvinism, with case studies of public-sector and educational AI.

[2] Schumacher EF. *Small Is Beautiful: A Study of Economics as if People Mattered*. Blond & Briggs; 1973. **[verified]** The foundational critique of inappropriate technology transfer that the technochauvinism framing generalises.
