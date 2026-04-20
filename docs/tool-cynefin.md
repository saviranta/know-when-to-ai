# Toolkit — Cynefin framework

*Gate: G3 Route (Q3 routing deliberation). Category: routing substrate.*

## What problem it solves

Different problems demand different decision substrates. A problem where cause and effect are obvious can be solved with categorisation and best practice; a problem where cause and effect are knowable only retrospectively needs experimentation. Treating every leaf the same — as a known problem or a research problem — misroutes half the engagement. Cynefin, Snowden's sense-making framework [1], places each leaf into one of five domains (clear, complicated, complex, chaotic, confused) so that the routing substrate matches the problem's actual epistemology.

## How it is used

A **30-minute G3 conversation per leaf or per problem cluster.** The chair asks three questions: *is the cause-effect relationship knowable in advance? is it knowable only retrospectively? is it knowable at all?* The answers route the leaf to one of the five domains. The routing recommendation follows from the domain: clear → rules; complicated → expert analysis (ML fits here); complex → empirical experimentation (AI with controls, shadow stages); chaotic → act-first, sense-later (not an AI domain); confused → decompose until individual sub-problems can be placed.

## Inputs

- The decomposition leaf or cluster.
- The issue-tree / pyramid framing (so the leaf is well-defined).
- Domain practitioners to judge whether cause-effect is knowable.

## Outputs

- A **Cynefin domain tag** per leaf: *clear / complicated / complex / chaotic / confused.*
- A **routing implication** per domain, linked to the AI capability levels and the other G3 tools.
- Flagged **confused leaves** for further decomposition (don't route the leaf as-is).

## Visualisation

<div style="max-width: 900px; margin: 2rem auto;">
<svg viewBox="0 0 800 320" xmlns="http://www.w3.org/2000/svg" role="img" aria-labelledby="cy-title">
  <title id="cy-title">Cynefin framework — four quadrants plus a central confused region; clear, complicated, complex, chaotic, and confused in the middle</title>
  <style>
    .cy-rect { fill: var(--md-default-bg-color, #fff); stroke: var(--md-default-fg-color, #000); stroke-width: 1.6; }
    .cy-centre { fill: var(--md-default-fg-color, #000); opacity: 0.1; stroke: var(--md-default-fg-color, #000); stroke-width: 1.8; }
    .cy-line { stroke: var(--md-default-fg-color, #000); stroke-width: 1.2; fill: none; }
    .cy-label { font: 700 13px -apple-system, sans-serif; fill: var(--md-default-fg-color, #000); text-anchor: middle; }
    .cy-sub { font: 400 11px -apple-system, sans-serif; fill: var(--md-default-fg-color, #000); text-anchor: middle; }
    .cy-tag { font: italic 10px -apple-system, sans-serif; fill: var(--md-default-fg-color, #000); text-anchor: middle; opacity: 0.8; }
  </style>
  <rect class="cy-rect" x="40" y="40" width="330" height="120" />
  <text class="cy-label" x="205" y="70">Complicated</text>
  <text class="cy-sub" x="205" y="90">cause-effect knowable</text>
  <text class="cy-sub" x="205" y="106">with analysis</text>
  <text class="cy-sub" x="205" y="135">sense → analyse → respond</text>
  <text class="cy-tag" x="205" y="152">good practice; expert + ML fits</text>
  <rect class="cy-rect" x="430" y="40" width="330" height="120" />
  <text class="cy-label" x="595" y="70">Complex</text>
  <text class="cy-sub" x="595" y="90">cause-effect only</text>
  <text class="cy-sub" x="595" y="106">knowable afterwards</text>
  <text class="cy-sub" x="595" y="135">probe → sense → respond</text>
  <text class="cy-tag" x="595" y="152">emergent; empirical reads required</text>
  <rect class="cy-rect" x="40" y="180" width="330" height="120" />
  <text class="cy-label" x="205" y="210">Clear</text>
  <text class="cy-sub" x="205" y="230">cause-effect obvious;</text>
  <text class="cy-sub" x="205" y="246">known answers</text>
  <text class="cy-sub" x="205" y="275">sense → categorise → respond</text>
  <text class="cy-tag" x="205" y="292">best practice; rules / DMN fits</text>
  <rect class="cy-rect" x="430" y="180" width="330" height="120" />
  <text class="cy-label" x="595" y="210">Chaotic</text>
  <text class="cy-sub" x="595" y="230">no knowable relationship;</text>
  <text class="cy-sub" x="595" y="246">crisis mode</text>
  <text class="cy-sub" x="595" y="275">act → sense → respond</text>
  <text class="cy-tag" x="595" y="292">not an AI domain</text>
  <rect class="cy-centre" x="320" y="130" width="160" height="80" />
  <text class="cy-label" x="400" y="160">Confused</text>
  <text class="cy-sub" x="400" y="180">domain unknown;</text>
  <text class="cy-sub" x="400" y="196">decompose further</text>
</svg>
</div>

*Four domains around a confused centre. Clockwise from top-left: Complicated, Complex, Chaotic, Clear. The confused centre is where the framing itself is unresolved.*

## Anatomy

**Clear.** Cause and effect are obvious; the problem has known answers. Routing: rules, decision tables, DMN. A leaf in this domain does not need AI.

**Complicated.** Cause and effect are knowable — but require analysis, sometimes by experts. Routing: classical ML fits naturally; the prediction is learnable from history because history contains a stable mapping.

**Complex.** Cause and effect are knowable only in retrospect. Patterns emerge; they do not hold reliably. Routing: empirical reads (shadow → canary → progressive) are required because offline evaluation cannot predict live behaviour. AI is useful only with substantial controls.

**Chaotic.** No knowable relationship; the system is in crisis. Routing: act-first; AI is not the substrate. The engagement's role is to get out of this domain, not to model within it.

**Confused.** The domain itself is unclear — practitioners disagree on which of the four above applies. Routing implication: decompose further; each sub-leaf may land in a different domain.

## Example

??? example "Paper trail — Cynefin tagging for the freight-yard leaves"
    *G3 Q3 Cynefin session, 45 minutes covering five leaves. Chair: Ada. Team: Priya, Raj, Alex.*

    *Leaf 1 — slot assignment under normal conditions.* Ada: *"is cause-effect obvious, analysable, only-retrospective, or unknown?"* Raj: *"we have 18 months of data. Assignments produce unload outcomes. The relationship between assignment and outcome is analysable."* **Complicated.** Routing: ML fits. Alex: *"a regression model on historical cycle-time-at-slot is the right shape."*

    *Leaf 2 — priority arbitration.* Ada: *"same question."* Chen (dispatcher, joining): *"the rules exist in policy, but practitioners encode extra rules (like *don't interrupt active docks*) that the policy doesn't cover."* The decision-tables work done earlier surfaced this. **Clear**, once the hidden conditions are extracted. Routing: DMN.

    *Leaf 3 — operator-override rate at new yard.* Priya: *"we're opening a new yard. We have no historical override data for it. Predictions don't hold — we'd need to observe live."* Alex: *"classical ML trained on other yards would transfer poorly; override rate is yard-specific."* **Complex.** Routing: the allocator at the new yard starts in shadow, and the override-rate leaf waits for live data. No AI to ship at launch.

    *Leaf 4 — safety event response (hazardous-material spill in yard).* Ada: *"is this a predictable-and-analysable event, or a crisis?"* Raj: *"crisis. Rare, immediate, every one is different."* **Chaotic.** Routing: not an AI domain; the engagement's role is to make sure hazardous-material events escalate out of the allocator's scope.

    *Leaf 5 — weather-adjusted unloading.* Team disagrees. Alex: *"the effect of weather on unloading is knowable in principle, but we have few events."* Raj: *"it's a known effect; we just don't have data."* Priya: *"it's not predictable in the next quarter; we haven't measured."* **Confused.** Decompose further: *rare-event operations adjustment* (arguably complex, needs more data) vs. *known-weather categories* (arguably complicated, fits rules). Split the leaf; re-tag the pieces individually.

    *Close.* Five leaves tagged; three clean routings (ML, DMN, drop-from-scope), one complex leaf (empirical read required; no AI at launch), one confused leaf (decomposed further). Ada: *"half the value here is the 'confused' tag. That leaf was going to be routed to ML; it shouldn't be until the decomposition is redone."*

## Pitfalls

**Everything is complicated.** The default answer for engineering teams. Ada's job is to push — is the historical data representative of the future? If not, the domain is complex, not complicated.

**Complex treated as complicated.** The most expensive mistake. Complex leaves get classical ML, which trains on historical patterns that don't hold. The production model is wrong; the team blames the data.

**Chaos as a domain to model.** Crisis conditions are not learnable. Building an AI for a crisis is building a system that won't run when it's needed and will be a liability when it's not.

**Confused as procrastination.** Tagging a leaf *confused* is valuable only if followed by decomposition. If it stays confused, the tag has done no work.

**Cynefin as a category system.** The framework is a sense-making aid, not a taxonomy. Good use allows domains to shift as learning happens (a complex leaf becomes complicated once data accumulates).

## When not to use

- Leaves whose routing is already decided by an earlier gate (Tier 0 refusal, DMN-covered rules).
- Engagements too small to warrant the conversation — one-leaf engagements don't need the domain tagging.

## Provenance

Cynefin was introduced by Snowden and Boone in their *Harvard Business Review* article [1] and expanded in Snowden's *Cynefin* compendium [2]. The five-domain structure has variations (the terms *simple* and *clear* are both used); the underlying epistemological distinctions are what matter, not the labels.

## Related tools

- **AI canvas.** Applied to complicated and complex leaves; Cynefin tag is the canvas's first parameter.
- **Pre-mortem.** Run on complex leaves to surface the modes of empirical read needed.
- **Shadow deployment (G3a).** The primary mode for complex leaves.

## Verification

[1] Snowden DJ, Boone ME. A leader's framework for decision making. *Harvard Business Review*. 2007;85(11):68–76. **[verified]** The canonical treatment.

[2] Snowden DJ, Greenberg R, editors. *Cynefin: Weaving Sense-Making into the Fabric of Our World*. Cognitive Edge; 2020. **[verified]** Extended treatment and later developments.
