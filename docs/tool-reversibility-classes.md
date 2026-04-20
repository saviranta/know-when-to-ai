# Toolkit — Reversibility classes

*Gate: G4 Sequence. Category: sequencing lens.*

## What problem it solves

Treating every piece as if reversing it were equally easy hides the decisions that will haunt the engagement later. A piece that can be undone in minutes tolerates a faster launch substrate than one whose rollback takes weeks or can never be completed. Reversibility classes tag each piece with the cost of being wrong, so the sequencing review can weight the pieces accordingly.

## How it is used

A **20-minute tagging exercise per piece** at the G4 sequencing review. The reviewer reads each piece with its owner and asks two questions: *can the piece's effect be undone?* and *how long does undoing take, and at what cost?* The answer picks a class. The tag is written on the routing map next to the piece and carried into G5.

## Inputs

- The G3 routing map.
- Owner's description of the piece's effect (what state it changes).
- Knowledge of the rollback substrate — the prior state the piece would revert to.

## Outputs

- One of three tags per piece: **fully reversible**, **soft-irreversible**, **hard-irreversible**.
- A **time-to-restore** estimate and **cost-in-window** note attached to the tag.
- For pieces at class boundaries, the specific threshold that would move the piece one class up or down.

## Visualisation

<div style="max-width: 900px; margin: 2rem auto;">
<svg viewBox="0 0 800 260" xmlns="http://www.w3.org/2000/svg" role="img" aria-labelledby="rc-title">
  <title id="rc-title">Three reversibility classes — fully reversible, soft-irreversible, hard-irreversible — with time-to-restore scale</title>
  <style>
    .rc-rect { fill: var(--md-default-bg-color, #fff); stroke: var(--md-default-fg-color, #000); }
    .rc-thin { stroke-width: 1; }
    .rc-mid { stroke-width: 1.8; }
    .rc-thick { stroke-width: 2.8; }
    .rc-line { stroke: var(--md-default-fg-color, #000); stroke-width: 1.2; fill: none; }
    .rc-label { font: 700 12px -apple-system, BlinkMacSystemFont, sans-serif; fill: var(--md-default-fg-color, #000); text-anchor: middle; }
    .rc-sub { font: 400 11px -apple-system, sans-serif; fill: var(--md-default-fg-color, #000); text-anchor: middle; }
    .rc-tag { font: italic 10px -apple-system, sans-serif; fill: var(--md-default-fg-color, #000); text-anchor: middle; opacity: 0.8; }
  </style>
  <rect class="rc-rect rc-thin" x="40" y="50" width="220" height="120" />
  <text class="rc-label" x="150" y="82">Fully reversible</text>
  <text class="rc-sub" x="150" y="108">Undo in minutes,</text>
  <text class="rc-sub" x="150" y="124">no lasting trace.</text>
  <text class="rc-tag" x="150" y="152">e.g. draft a message</text>
  <text class="rc-tag" x="150" y="166">not yet sent</text>
  <rect class="rc-rect rc-mid" x="290" y="50" width="220" height="120" />
  <text class="rc-label" x="400" y="82">Soft-irreversible</text>
  <text class="rc-sub" x="400" y="108">Undo is possible but</text>
  <text class="rc-sub" x="400" y="124">costs time or trust.</text>
  <text class="rc-tag" x="400" y="152">e.g. sent message with</text>
  <text class="rc-tag" x="400" y="166">retract + apology</text>
  <rect class="rc-rect rc-thick" x="540" y="50" width="220" height="120" />
  <text class="rc-label" x="650" y="82">Hard-irreversible</text>
  <text class="rc-sub" x="650" y="108">Undo requires a new</text>
  <text class="rc-sub" x="650" y="124">action, not a reversal.</text>
  <text class="rc-tag" x="650" y="152">e.g. dispatched driver,</text>
  <text class="rc-tag" x="650" y="166">billed customer</text>
  <line class="rc-line" x1="40" y1="210" x2="760" y2="210" />
  <text class="rc-tag" x="150" y="232">minutes</text>
  <text class="rc-tag" x="400" y="232">hours to days, at a cost</text>
  <text class="rc-tag" x="650" y="232">cannot fully restore</text>
</svg>
</div>

*Three classes, not a score. Stroke weight signals the commitment each class carries; hard-irreversible pieces need the heaviest rollout substrate.*

## Anatomy

**Fully reversible.** The piece's effect can be undone within a short window (minutes), at zero cost, leaving no trace. A change to a rules substrate that has not yet executed, a draft message, a dashboard filter. Two-way doors in Bezos's phrasing [1].

**Soft-irreversible.** The effect can be walked back, but only with time, money, or relationship cost. A sent message retractable with an apology. A billing charge reversible through a refund. A feature flag flipped for a cohort whose experience was visibly different. The rollback is *an action*, not a reversal.

**Hard-irreversible.** The effect cannot be undone in any meaningful sense — a driver physically dispatched, a contract signed, a customer notified of a decision. The only "rollback" is a forward-moving corrective action that does not restore the prior state.

**Class boundary.** A piece that sits between classes is tagged with the specific threshold that would move it. *"Soft-irreversible while the apology pathway is staffed; hard-irreversible if the team disbands."* The threshold is the more useful fact than the class.

## Example

??? example "Paper trail — tagging the freight pieces"
    *G4 sequencing review, 25 minutes of the session. Ada (reviewer), Priya, Raj, Jin.*

    *Piece A — escalation workflow.* Priya: *"fully reversible. The operator re-runs the conversation."* Ada: *"time-to-restore?"* *"Seconds to minutes, zero cost."* **Fully reversible.**

    *Piece B — dock-door solver.* Jin: *"the solver assigns; dispatch actions on it. If dispatch has already moved a truck based on a bad solve, that action is hard to undo."* Ada: *"tag the piece by what its own effect is. The solver's effect is a recommendation dispatch acts on — that's reversible. What dispatch does with it is a separate piece."* **Fully reversible at the piece boundary.**

    *Piece C — carrier-ETA triage.* Priya: *"depends. Drafts are fully reversible; sent messages are soft-irreversible — apology and correction."* Ada: *"tag it by the rollout configuration. Phase 1 is draft-only; that's fully reversible. Removing the review gate moves it to soft-irreversible."* Class boundary recorded: *fully reversible while drafts reviewed; soft-irreversible if review gate removed.*

    *Piece D — yard-slot allocator.* Priya: *"dispatched drivers are hard-irreversible. Schedule swaps within the window are soft. Notified carriers are soft."* Ada: *"the dominant class is hard-irreversible."* **Hard-irreversible.**

    *Close.* Four tags on the routing map. Piece D's tag directly drives the full shadow → canary → progressive rollout at G5.

## Pitfalls

**Tagging the piece by its best-case rollback.** A piece that is reversible on most days but irreversible on the days that matter is tagged by the worst case, not the average.

**Conflating reversibility of the piece with reversibility of the harm.** The piece may be fully reversible (switch the flag off) while the harm it caused is not (customers already saw the price). This is the paired distinction blast-radius estimation makes explicit.

**Ignoring class boundaries.** Some pieces sit genuinely between classes. The better output is not picking one but naming the threshold that would move the piece.

**Treating the tag as a score.** The three classes are not a 1-2-3 scale. A hard-irreversible piece with a small blast can still ship early; a fully reversible piece with a concentrated-in-regulators blast may need to ship late.

## When not to use

- The piece is a pure read-only analysis with no effect on downstream state. Reversibility is vacuous.
- The engagement has one piece and one substrate; tagging adds no sequencing signal.

## Provenance

The three-class vocabulary is adapted from Bezos's two-way-doors framing in Amazon's 1997 / 2015 shareholder letters [1], which distinguishes reversible (two-way) from irreversible (one-way) decisions. The third class — *soft-irreversible* — is the engineering refinement: decisions reversible in principle but costly in practice are the most numerous case and hide inside the binary. The engineering literature on rollback and deployment safety assumes the three-class view even when it uses other names.

## Related tools

- **Dependency graph.** The order floor; reversibility is the cost-of-being-wrong ceiling.
- **Blast-radius estimation.** The third G4 lens. Reversibility asks *can we undo the piece?*; blast radius asks *what does the piece affect while it runs?*.
- **Three-stage rollout pattern.** The substrate the reversibility tag sizes.

## Verification

[1] Bezos J. Letter to Shareholders (1997; reprinted in 2015 Annual Report). Amazon.com, Inc.; 1997, 2015. **[verified]** The two-way-doors framing, which the three-class vocabulary refines.
