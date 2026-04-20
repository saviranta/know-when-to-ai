# Toolkit — Shneiderman two-axis framework

*Gate: G3 Route (Q3b controls documentation). Category: routing substrate.*

## What problem it solves

Human-AI design often collapses into a false dichotomy: *either* full human control *or* full automation. Shneiderman's two-axis framework [1] rejects that collapse. He observes that *human control* and *computer automation* are independent axes, not opposite ends of one axis. The most consequential pieces — surgical robots, commercial aviation autopilots, search engines — sit in the *high-human-control, high-automation* corner, not along a diagonal. For an engagement, the framework is a G3 control-design substrate: it positions the piece on the two axes explicitly, exposes the placement choice, and forces the engagement to design for the chosen corner rather than sliding into defaults.

## How it is used

A **45-minute G3 exercise**, typically late in Q3b after the other controls are drafted. The team draws the 2×2 grid on the whiteboard: human control (low-high) on one axis, computer automation (low-high) on the other. The piece is placed on the grid based on its intended design. The placement is then interrogated: *what does it take to actually be in the upper-right quadrant? What would push the piece to the lower-right (full automation, no control)?* Output is a design-position memo and a list of controls specific to the chosen quadrant.

## Inputs

- The routed piece with its intended interaction design.
- The HAX workbook output (the two are complementary).
- The stakeholder map (affects what *human control* means — whose control).
- The AI canvas and Cynefin tag (inform where automation is appropriate).

## Outputs

- A **position memo** — where the piece sits on the grid, with 2-3 sentences of reasoning.
- **Quadrant-specific design requirements** — controls the engagement commits to that keep the piece in the intended quadrant under operational pressure.
- **Flagged drift vectors** — forces that, if unchecked, would push the piece out of the intended quadrant. These become review-cadence items.

## Visualisation

<div style="max-width: 900px; margin: 2rem auto;">
<svg viewBox="0 0 800 420" xmlns="http://www.w3.org/2000/svg" role="img" aria-labelledby="shn-title">
  <title id="shn-title">Shneiderman two-axis framework — human control × computer automation, four quadrants, upper-right is the target for reliable, safe, trustworthy AI</title>
  <style>
    .shn-rect { fill: var(--md-default-bg-color, #fff); stroke: var(--md-default-fg-color, #000); stroke-width: 1.4; }
    .shn-target { fill: var(--md-default-fg-color, #000); opacity: 0.08; stroke: var(--md-default-fg-color, #000); stroke-width: 1.8; }
    .shn-line { stroke: var(--md-default-fg-color, #000); stroke-width: 1.4; fill: none; }
    .shn-thin { stroke: var(--md-default-fg-color, #000); stroke-width: 0.6; fill: none; stroke-dasharray: 3,2; }
    .shn-dot { fill: var(--md-default-fg-color, #000); }
    .shn-label { font: 700 12px -apple-system, sans-serif; fill: var(--md-default-fg-color, #000); text-anchor: middle; }
    .shn-sub { font: 400 10px -apple-system, sans-serif; fill: var(--md-default-fg-color, #000); text-anchor: middle; }
    .shn-axis { font: 700 11px -apple-system, sans-serif; fill: var(--md-default-fg-color, #000); text-anchor: middle; }
    .shn-tag { font: italic 10px -apple-system, sans-serif; fill: var(--md-default-fg-color, #000); text-anchor: middle; opacity: 0.8; }
  </style>
  <line class="shn-line" x1="120" y1="340" x2="720" y2="340" />
  <line class="shn-line" x1="120" y1="340" x2="120" y2="40" />
  <text class="shn-sub" x="120" y="360" text-anchor="middle">low</text>
  <text class="shn-sub" x="720" y="360" text-anchor="middle">high</text>
  <text class="shn-axis" x="420" y="395">Computer automation →</text>
  <text class="shn-sub" x="100" y="340" text-anchor="end">low</text>
  <text class="shn-sub" x="100" y="50" text-anchor="end">high</text>
  <text class="shn-axis" x="60" y="190" text-anchor="middle" transform="rotate(-90 60 190)">Human control →</text>
  <line class="shn-thin" x1="420" y1="340" x2="420" y2="40" />
  <line class="shn-thin" x1="120" y1="190" x2="720" y2="190" />
  <rect class="shn-rect" x="140" y="60" width="260" height="115" />
  <text class="shn-label" x="270" y="90">High human control</text>
  <text class="shn-label" x="270" y="108">Low automation</text>
  <text class="shn-sub" x="270" y="135">tools that amplify</text>
  <text class="shn-sub" x="270" y="150">human effort</text>
  <text class="shn-sub" x="270" y="165">(calculator, drafting SW)</text>
  <rect class="shn-target" x="440" y="60" width="260" height="115" />
  <text class="shn-label" x="570" y="90">High human control</text>
  <text class="shn-label" x="570" y="108">High automation</text>
  <text class="shn-sub" x="570" y="135">reliable, safe, trustworthy</text>
  <text class="shn-sub" x="570" y="150">(autopilot, surgical robot,</text>
  <text class="shn-sub" x="570" y="165">dispatcher-reviewed allocator)</text>
  <rect class="shn-rect" x="140" y="205" width="260" height="115" />
  <text class="shn-label" x="270" y="235">Low human control</text>
  <text class="shn-label" x="270" y="253">Low automation</text>
  <text class="shn-sub" x="270" y="280">manual work,</text>
  <text class="shn-sub" x="270" y="295">no AI</text>
  <rect class="shn-rect" x="440" y="205" width="260" height="115" />
  <text class="shn-label" x="570" y="235">Low human control</text>
  <text class="shn-label" x="570" y="253">High automation</text>
  <text class="shn-sub" x="570" y="280">full automation</text>
  <text class="shn-sub" x="570" y="295">(runaway agents,</text>
  <text class="shn-sub" x="570" y="310">unsupervised classifiers)</text>
  <circle class="shn-dot" cx="600" cy="115" r="6" />
  <text class="shn-tag" x="620" y="50">Target: allocator sits here</text>
  <text class="shn-tag" x="420" y="410">Human control and computer automation are independent axes. Upper-right is the target; lower-right is the common drift.</text>
</svg>
</div>

*The 2×2. High human control + high automation is the target corner for consequential pieces. Lower-right is where unsupervised automation drifts without explicit control-design.*

## Anatomy

**Human control — what it means.** Multiple dimensions: (a) ability to *override* individual outputs; (b) ability to *inspect* reasoning; (c) ability to *tune* behaviour globally; (d) ability to *withdraw* the system entirely. High human control means users have practical access to all four.

**Computer automation — what it means.** The extent to which the system acts without human intervention. High automation means most cases proceed without human touch; the human steps in only on exceptions.

**Upper-right quadrant.** The target for most consequential AI pieces. High automation handles the volume; high human control handles the exceptions and provides the safety net. Requires deliberate design: override mechanisms, inspection tools, global controls, logging for audit.

**Lower-right quadrant.** Full automation without control. Runaway agents, unsupervised classifiers deciding high-stakes matters. Not where consequential pieces belong.

**Upper-left quadrant.** Human-operated tools with minimal automation. Calculators, drafting software. Appropriate for tasks where the human is doing the work and the AI is a tool.

**Lower-left quadrant.** No automation, no amplification. Manual work. Not an AI routing.

**The diagonal myth.** The dangerous default is to assume *automate more means human-control-less*. The framework breaks this assumption: both axes move independently. Engagements that buy into the diagonal accidentally design lower-right pieces when they meant upper-right.

**Drift vectors.** Once in production, upper-right pieces drift toward lower-right under cost pressure (*"why do we still need the dispatcher to review?"*), ease-of-use pressure (*"users just auto-accept anyway"*), and scale pressure (*"reviewing is the bottleneck"*). Explicitly naming these vectors lets the engagement defend against them.

## Example

??? example "Paper trail — Shneiderman positioning for the allocator"
    *W18 of 2026. Priya (owner), Alex, Rin, Chen, Mariana (SMACTR auditor). 50 minutes.*

    *Place the piece.* Priya: *"we're targeting the upper right — dispatcher-in-the-loop, high automation (the model recommends on ~95% of arrivals), high human control (dispatcher can override any recommendation, see why it was made, tune the allocator off globally)."*

    *Human control — interrogation.*

    - *Override.* Dispatcher can pick any slot, not just the recommended one. ✓
    - *Inspect.* Top-three features shown per recommendation; explanation is legible (HAX G11 confirmed). ✓
    - *Tune.* Operations team can disable allocator globally (HAX G17). Can they tune the model's weights? No — the dispatcher's tuning capability is restricted to disable / enable. Mariana flags: *"if the dispatcher thinks the model is systematically wrong on a condition, what's the path to change it?"* The path is: file a ticket, training team investigates, model retrains. That's slow. A faster tuning path (e.g., dispatcher-submitted training examples with review) is worth considering — flagged as V1.2 improvement.
    - *Withdraw.* Operations team can disable. ✓

    *Computer automation — interrogation.*

    - The model provides a recommendation on effectively 100% of arrivals (some will be low-confidence "no clear preference" but those are still outputs).
    - Dispatcher accepts the recommendation on ~80% of cases (per shadow data). 20% override rate.
    - The system *acts* (assigns the slot) only after dispatcher confirmation. So in one sense, automation is low (the model doesn't auto-act); in another sense, automation is high (the volume of case-by-case model involvement is 100%).
    - Rin: *"automation here isn't 'the model acts'; it's 'the model participates.' The human acts. That's the upper-right."*

    *Drift vectors named.*

    - *Bulk acceptance.* If dispatchers start hitting Accept without reviewing (alert fatigue), the piece has drifted to lower-right even though the UI hasn't changed. Monitoring: sample dispatcher attention via a periodic "verify the top-three features" prompt. Tracked quarterly.
    - *Cost-pressure reduction of review.* If management proposes removing dispatcher review to cut cost, the piece falls out of upper-right. Escalation: the commitment page names dispatcher review as load-bearing; removing it requires re-routing the piece (new G3).
    - *Scale-pressure expansion.* If yard B is added to the allocator without re-training, the piece operates in an input regime it wasn't designed for. Safe-default: yard B adoption requires a new shadow + A/B. Named in commitment.

    *Position memo.*

    > *The yard-slot allocator is intentionally positioned in the upper-right quadrant: high human control (override, inspect, withdraw), high computer automation (recommendation on 100% of cases). Drift toward the lower-right is the primary governance concern; three drift vectors are identified (bulk acceptance, cost-pressure reduction, scale-pressure expansion) with explicit controls per vector.*

    *Paper trail.* Memo attached to the commitment page. Drift monitoring items added to the quarterly review. Mariana's audit picked this up as a strong control-design point.

## Pitfalls

**Treating the axes as one.** The diagonal fallacy — believing more automation means less control. Once accepted, it leads to lower-right designs presented as inevitable. The framework exists to break this.

**Position without interrogation.** Plotting the piece on the grid without asking *does it actually have high human control?* produces false reassurance. The interrogation (override, inspect, tune, withdraw) is the substance.

**No drift vectors.** Upper-right placement at launch is not upper-right placement in year three. Drift vectors name the forces that will pull the piece away; without them, the placement is aspirational.

**Confusing participation with automation.** A model that participates in every case but doesn't act is high-automation in volume but low-automation in action. The framework accommodates both; specifying which the engagement means prevents confusion.

**Placing by aspiration.** The placement must reflect the piece as actually designed, not as the team wishes it were. A piece with no global-disable control cannot honestly claim upper-right; either fix the control or place it elsewhere.

**Defensive lower-right.** Engagements sometimes place a piece in lower-right *"because it's efficient"* — full automation, no control — and then document the rationale. For high-stakes pieces, lower-right is a routing failure, not a design choice.

## When not to use

- Pieces with trivial stakes where automation-vs-control trade-off is not material. The framework's overhead doesn't pay.
- Pieces refused at Tier 0 (no AI, no positioning).
- Pieces at the model-internal level (feature engineering choices, training-loop decisions). The framework is for user-facing interaction, not model internals.

## Provenance

The two-axis framework is developed in Shneiderman's *Human-Centered AI* [1] and related papers on reliable, safe, and trustworthy AI [2]. It builds on a long tradition of human-factors research critiquing the *ladder-of-automation* view, including Parasuraman, Sheridan, and Wickens [3].

## Related tools

- **HAX Workbook.** Complementary at the interaction-design level.
- **Pre-mortem.** Drift vectors are often surfaced in pre-mortem stories.
- **Review-cadence matrix (G5).** Drift-vector monitoring items land here.

## Verification

[1] Shneiderman B. *Human-Centered AI*. Oxford University Press; 2022. **[verified]** The canonical treatment of the two-axis framework.

[2] Shneiderman B. Bridging the gap between ethics and practice: guidelines for reliable, safe, and trustworthy human-centered AI systems. *ACM Transactions on Interactive Intelligent Systems*. 2020;10(4):26. **[verified]** Earlier articulation of the framework and its implications.

[3] Parasuraman R, Sheridan TB, Wickens CD. A model for types and levels of human interaction with automation. *IEEE Transactions on Systems, Man, and Cybernetics*. 2000;30(3):286-297. **[verified]** Foundational human-factors critique of one-axis automation thinking.
