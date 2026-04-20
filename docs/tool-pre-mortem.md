# Toolkit — Pre-mortem

*Gate: G3 Route (Q3 routing deliberation). Category: routing substrate.*

## What problem it solves

A routing decision made at G3 commits the engagement to a set of failure modes it doesn't yet know about. A post-mortem surfaces these after they happen; a pre-mortem surfaces them before. Klein's prospective-hindsight exercise [1] asks the team to imagine the engagement has failed, a year from now, and to write the story of how — specifically — it failed. The story exposes the assumptions the routing is sitting on and lets the engagement design controls, or reroute, in response.

## How it is used

A **60-minute G3 workshop**, typically after the AI canvas and ML canvas are filled but before the commitment page is signed. The chair opens with a specific prompt: *"It is 2027-05-01. This piece has been a failure. Take 10 minutes alone and write, in detail, how the failure unfolded."* Silent writing; then round-robin reading; then theme clustering. The output is a risk register and a routing re-read.

## Inputs

- A routing decision or candidate piece — far enough along that the team can imagine it running.
- 5–10 participants with skin in the engagement's success.
- A bank of stories the team has told themselves about why the engagement will work.

## Outputs

- A **failure story corpus** — the team's individual written stories, de-identified.
- A **risk register** — clustered themes from the stories, each with likelihood and impact rough-scored.
- **Control and reroute recommendations**: for each high-likelihood-high-impact risk, either a control to add to the commitment artefact (rollback trigger, review focus) or a routing reroute (the risk is unmanageable at this routing; route higher or not at all).

## Visualisation

<div style="max-width: 900px; margin: 2rem auto;">
<svg viewBox="0 0 800 280" xmlns="http://www.w3.org/2000/svg" role="img" aria-labelledby="pm-title">
  <title id="pm-title">Pre-mortem — participants write individual failure stories which cluster into themed risks on a likelihood-impact grid</title>
  <style>
    .pm-rect { fill: var(--md-default-bg-color, #fff); stroke: var(--md-default-fg-color, #000); stroke-width: 1.4; }
    .pm-line { stroke: var(--md-default-fg-color, #000); stroke-width: 1.2; fill: none; }
    .pm-thin { stroke: var(--md-default-fg-color, #000); stroke-width: 0.6; fill: none; stroke-dasharray: 2,2; }
    .pm-dot { fill: var(--md-default-fg-color, #000); }
    .pm-arrow { fill: var(--md-default-fg-color, #000); }
    .pm-label { font: 700 12px -apple-system, sans-serif; fill: var(--md-default-fg-color, #000); text-anchor: middle; }
    .pm-sub { font: 400 10px -apple-system, sans-serif; fill: var(--md-default-fg-color, #000); }
    .pm-tag { font: italic 10px -apple-system, sans-serif; fill: var(--md-default-fg-color, #000); text-anchor: middle; opacity: 0.8; }
  </style>
  <defs><marker id="pm-a" markerWidth="9" markerHeight="9" refX="8" refY="4.5" orient="auto"><path d="M0,0 L8,4.5 L0,9 z" class="pm-arrow"/></marker></defs>
  <rect class="pm-rect" x="30" y="40" width="180" height="180" />
  <text class="pm-label" x="120" y="60">Failure stories</text>
  <text class="pm-sub" x="45" y="85">"Operators overrode…"</text>
  <text class="pm-sub" x="45" y="105">"Carrier feed went stale…"</text>
  <text class="pm-sub" x="45" y="125">"Training data didn't…"</text>
  <text class="pm-sub" x="45" y="145">"One yard manager…"</text>
  <text class="pm-sub" x="45" y="165">"Priority conflict…"</text>
  <text class="pm-sub" x="45" y="185">"Alert fatigue…"</text>
  <line class="pm-line" x1="210" y1="130" x2="290" y2="130" marker-end="url(#pm-a)" />
  <text class="pm-tag" x="250" y="120">cluster</text>
  <line class="pm-line" x1="420" y1="230" x2="700" y2="230" />
  <line class="pm-line" x1="420" y1="230" x2="420" y2="40" />
  <text class="pm-sub" x="420" y="252" text-anchor="middle">low</text>
  <text class="pm-sub" x="700" y="252" text-anchor="middle">high</text>
  <text class="pm-sub" x="560" y="270" text-anchor="middle">Likelihood →</text>
  <text class="pm-sub" x="405" y="230" text-anchor="end">low</text>
  <text class="pm-sub" x="405" y="50" text-anchor="end">high</text>
  <text class="pm-sub" x="380" y="140" text-anchor="middle" transform="rotate(-90 380 140)">Impact →</text>
  <line class="pm-thin" x1="420" y1="135" x2="700" y2="135" />
  <line class="pm-thin" x1="560" y1="40" x2="560" y2="230" />
  <circle class="pm-dot" cx="610" cy="80" r="7" />
  <text class="pm-sub" x="620" y="85">Override</text>
  <circle class="pm-dot" cx="660" cy="105" r="6" />
  <text class="pm-sub" x="670" y="108">Stale feed</text>
  <circle class="pm-dot" cx="500" cy="160" r="5" />
  <text class="pm-sub" x="510" y="163">Training gap</text>
  <circle class="pm-dot" cx="450" cy="200" r="4" />
  <text class="pm-sub" x="460" y="203">Alert fatigue</text>
  <text class="pm-tag" x="560" y="25">High-likelihood + high-impact cluster — primary response targets</text>
</svg>
</div>

*Left: individual failure stories. Right: after clustering, each theme gets a likelihood × impact position. The top-right quadrant is where controls or reroutes go first.*

## Anatomy

**Silent writing.** The first 10 minutes are silent. Individual stories, not group conversation. Social dynamics suppress the most useful failure stories; silent writing allows them.

**Specific time anchor.** *"It is 2027-05-01"* — a concrete date a reasonable time after expected ship — makes the stories specific rather than abstract. *"The allocator has been running for 11 months"* places the writer inside a plausible failure window.

**Round-robin reading.** Each participant reads their story out loud, in full, without interruption. The chair notes recurring themes in real time.

**Clustering.** The chair maps stories into themes. Stories that share a mechanism cluster — *"operators overrode"*, *"operators stopped trusting the recommendations"*, *"dispatcher workaround escalated"* are one cluster about operator rejection.

**Likelihood × impact.** Each cluster is scored. The scoring is rough; the value is in the quadrant, not the number. High-likelihood-high-impact clusters go to the top of the response list.

**Controls and reroutes.** Each addressed cluster produces either a commitment-artefact update (a new rollback trigger, a review-cadence focus, a sunset condition) or a routing change (the risk is too severe; the routing must change).

## Example

??? example "Paper trail — pre-mortem for the yard-slot allocator"
    *G3 Q3 pre-mortem session, 70 minutes. Eight participants including Priya, Raj, Chen, Martinez, Alex, Amira, Pat, Ada.*

    *T+0 — prompt.* Ada: *"It is 2027-05-01. The allocator has been a failure. Take 10 minutes to write, in detail, how it failed."*

    *T+10 — silent writing.* Everyone writes.

    *T+20 — round-robin.* Eight stories read. Themes emerge:

    - Chen and Martinez both wrote stories where dispatchers lost trust after a string of bad recommendations and began working around the allocator entirely.
    - Pat's story: carrier-feed went stale for 6 hours during a data-platform incident; the allocator kept recommending with stale inputs.
    - Alex's story: training data was light on weekend-priority cases; live override rates on weekends ran 40%.
    - Priya's story: one yard manager refused to use the allocator on principle; the region's adoption lagged and the engagement's metrics fell short.
    - Amira's story: a large carrier complained to the CEO about an allocation; executives pressured the team to override the allocator's logic; the override became permanent policy.
    - Raj's story: alerts fired so often in the first month that the SRE team muted them, and a real drift event was missed.

    *T+40 — clustering.* Six themes: (a) operator trust erosion; (b) input-feed staleness; (c) weekend-distribution training gap; (d) single-manager adoption resistance; (e) executive override under carrier pressure; (f) alert fatigue.

    *T+50 — likelihood × impact.* (a) high × high — operators are the piece's decision-makers. (b) high × high — 30-min weekend lag is already known. (c) medium × high — specific and known. (d) high × medium — political, not technical. (e) medium × high — political, hard to control. (f) high × medium — known pattern.

    *T+60 — responses.* (a) → add a *sustained-override* trigger and pre-declared dispatcher feedback loop. (b) → add an input-freshness trigger; the allocator stops recommending if feed is >10 min stale. (c) → expand training data for weekend cases, or add a supervision gate for weekend priority. (d) → adoption is an ops problem, not an AI problem; Raj owns. (e) → escalation protocol pre-declared: executive override requires a written re-review at next cadence. (f) → tune alert thresholds in shadow stage before promoting.

    *T+70 — close.* Six risks addressed. Three go to the commitment artefact (triggers a, b; alert tuning f). One goes to training-data work (c). Two go to the engagement's governance substrate (d, e). Routing stays; controls tighten.

## Pitfalls

**Group-first conversation.** Starting with discussion rather than silent writing surfaces the loudest person's concerns, not the engagement's actual risks.

**Stories without mechanism.** *"The project failed because it didn't work"* is not a story. Push for *how* — what event started it, who did what, what got missed.

**Skipping the scoring.** A story corpus without likelihood-impact scoring becomes a worry-list the engagement cannot act on.

**Responses that aren't responses.** *"We'll monitor that"* without naming the monitor is the common non-response. A response is a change to a commitment artefact, to the training plan, or to the routing itself.

**Treating the pre-mortem as a formality.** If the exercise never changes the routing or the controls, it has functioned as ceremony. The chair's job is to insist that at least one response is meaningfully different from what the plan already said.

## When not to use

- Leaves that have been refused at Tier 0 or failed G2. No routing to pre-mortem.
- One-off pieces where the risk register would never be acted on (research prototypes, exploratory analyses).
- Teams who cannot afford honest failure stories — political environments where admitting likely failure is punished. In those cases, the exercise's quality collapses and the tool gives false reassurance.

## Provenance

Klein's *Streetlights and Shadows* [1] and the foundational paper on prospective hindsight [2] document the pre-mortem technique. The underlying psychological mechanism — imagining a specific future failure produces more and better reasoning about risks than asking *what could go wrong* — is empirically well-supported.

## Related tools

- **Cynefin.** Complex-domain leaves particularly benefit from pre-mortems.
- **AI canvas / ML canvas.** The artefacts against which the pre-mortem surfaces failure modes.
- **Rollback-trigger design (G5).** Many pre-mortem outputs become triggers.

## Verification

[1] Klein G. *Streetlights and Shadows: Searching for the Keys to Adaptive Decision Making*. MIT Press; 2009. **[verified]** Klein's treatment of pre-mortem as a decision-support technique.

[2] Mitchell DJ, Russo JE, Pennington N. Back to the future: temporal perspective in the explanation of events. *Journal of Behavioral Decision Making*. 1989;2(1):25–38. **[verified]** The prospective-hindsight finding underlying pre-mortem.
