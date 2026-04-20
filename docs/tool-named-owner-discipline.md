# Toolkit — Named-owner discipline (DRI / single-threaded leader)

*Gate: G5 Commit. Category: commitment artefact.*

## What problem it solves

A commitment page with no named owner is read by everyone and acted on by no one. Rollback triggers fire into a void, review cadences slip, sunset criteria are polite fictions. The named-owner discipline forces the commitment to name exactly one person — with both the visibility into the piece's metrics and the authority to execute its rollback — before the piece ships.

## How it is used

A **short conversation**, often 10–20 minutes, at G5. The facilitator asks the owning team: *who is the person whose calendar moves when a trigger fires at 3 a.m.?* Answers that start with "the team" or "we" are rejected. The name is written on the commitment page, with a signature line. No page ships without a name.

## Inputs

- The draft commitment page (triggers, review cadence, sunset criteria).
- The organisation's roster — specifically, the set of people with authority to invoke the rollback substrate.
- The piece's blast-radius paragraph (some pieces cross organisational boundaries, which constrains who can own them).

## Outputs

- **One name** on the commitment page.
- A **signature** confirming acknowledgement of the four commitments (triggers, cadence, sunset, rollback authority).
- If the conversation reveals that no single person has both visibility and authority, a **flagged loopback**: fix the authority structure, or change the routing.

## Visualisation

<div style="max-width: 700px; margin: 2rem auto;">
<svg viewBox="0 0 700 320" xmlns="http://www.w3.org/2000/svg" role="img" aria-labelledby="no-title">
  <title id="no-title">Commitment page owner field — one name, one signature, with visibility and authority both required</title>
  <style>
    .no-rect { fill: var(--md-default-bg-color, #fff); stroke: var(--md-default-fg-color, #000); stroke-width: 1.6; }
    .no-thick { stroke-width: 2.4; }
    .no-line { stroke: var(--md-default-fg-color, #000); stroke-width: 1.2; fill: none; }
    .no-label { font: 700 13px -apple-system, sans-serif; fill: var(--md-default-fg-color, #000); }
    .no-sub { font: 400 11px -apple-system, sans-serif; fill: var(--md-default-fg-color, #000); }
    .no-tag { font: italic 10px -apple-system, sans-serif; fill: var(--md-default-fg-color, #000); opacity: 0.8; }
    .no-sig { font: italic 14px "Apple Chancery", "Brush Script MT", cursive; fill: var(--md-default-fg-color, #000); }
  </style>
  <rect class="no-rect no-thick" x="50" y="30" width="600" height="260" />
  <text class="no-label" x="80" y="65">Commitment — yard-slot allocator</text>
  <line class="no-line" x1="80" y1="80" x2="620" y2="80" />
  <text class="no-sub" x="80" y="105">Owner (one name, not a team):</text>
  <line class="no-line" x1="280" y1="110" x2="600" y2="110" />
  <text class="no-sig" x="300" y="107">Priya Chen</text>
  <text class="no-sub" x="80" y="145">Visibility — sees triggers on dashboard:</text>
  <text class="no-sub" x="380" y="145" text-anchor="end" font-weight="700">✓ confirmed</text>
  <text class="no-sub" x="80" y="170">Authority — can execute rollback alone:</text>
  <text class="no-sub" x="380" y="170" text-anchor="end" font-weight="700">✓ confirmed</text>
  <text class="no-sub" x="80" y="220">Signature:</text>
  <line class="no-line" x1="170" y1="225" x2="600" y2="225" />
  <text class="no-sig" x="200" y="222">P. Chen</text>
  <text class="no-sub" x="80" y="260">Date:</text>
  <text class="no-sub" x="170" y="260">2026-05-14</text>
  <text class="no-tag" x="350" y="285" text-anchor="middle">No page ships without a name + both boxes ticked.</text>
</svg>
</div>

*A single name, two confirmations (visibility and authority), one signature. The checkboxes are what distinguish the named owner from a nominal owner.*

## Anatomy

**One name.** Not a team, not a role, not a rotation. A specific person whose name is written on the page. Rotations can handle the on-call pager; they cannot own the commitment.

**Visibility.** The owner must see the piece's metrics on a dashboard they already look at during their normal work. A metric the owner has to go and fetch is a metric they are not watching.

**Authority.** The owner must be able to execute the rollback action without asking permission. If the rollback requires sign-off from another team, the named owner is not the owner — they are the coordinator; the real owner is whoever provides the sign-off.

**Signature.** Acknowledgement of the four commitments (triggers, cadence, sunset, rollback authority). The signature is the artefact's commit point; the page exists before it, but does not bind until it is signed.

## Example

??? example "Paper trail — naming the owner for the allocator"
    *G5 commitment session, 15 minutes.*

    *T+0.* Raj proposes: *"Allocator Product team owns this."* Ada: *"team-as-owner is not owner. One name."*

    *T+3.* Priya Chen is the obvious candidate — she is the Allocator Product lead. Ada runs the visibility check: *"Priya, do you see the accuracy metric, the P95 latency, and the override rate on your default dashboard?"* Priya: *"accuracy yes, latency yes, override rate no — that one is on Raj's dashboard."* Ada: *"either the override rate goes on Priya's dashboard, or Raj is the owner of the override-rate trigger. One or the other."* The dashboard is updated; Priya owns.

    *T+8 — authority check.* Ada: *"if trigger 3 fires at 3 a.m., can the on-call revert the region without escalating?"* Kai (on-call SRE): *"yes, the rollback script is in my runbook, no sign-off needed."* Confirmed.

    *T+12 — signature.* Priya signs the commitment page. Dated 2026-05-14. The page ships.

    **Three weeks later.** Priya is on leave for a month; the piece's rollback needs a covering owner. Ada insists the coverage is written in, not assumed: a second signature line is added with the covering owner's name. This is the difference between a named owner and a rotation — the coverage is named, not implicit.

## Pitfalls

**Team as owner.** The default failure. "The platform team owns it." The platform team is not a person; no one on the team feels singled out, and the trigger fires into the void.

**Owner without visibility.** Names are written on pages belonging to executives who never open the dashboard. The piece's metrics drift below the line without the owner noticing, which is the exact failure the named-owner discipline is meant to prevent.

**Owner without authority.** The owner sees the failure but cannot act. They escalate; the escalation takes hours; the blast window closes before the rollback fires. The fix is authority, not a different owner.

**Owner who has too many pieces.** One person named on twelve commitment pages is one person who is not watching any of them. Owner bandwidth is a constraint — the piece list is too long, or the pieces are wrongly routed.

**Silent coverage.** Named owner is on leave; the team is "sure someone is covering." When a trigger fires, nobody knows which someone. Coverage must be written, signed, and dated.

## When not to use

- Pieces with no rollback action (pure read-only analyses). The discipline still applies to whoever owns the output's correctness, but the authority check is different.
- One-shot pieces that run once. Owner is the person who owns the result, not the rollback (there is none).

## Provenance

Apple's DRI (Directly Responsible Individual) vocabulary is documented in Lashinsky's reporting on Apple's operational practice [1]. Amazon's single-threaded leader construct is documented by Bryar and Carr [2], both former Amazon executives. The two vocabularies name the same discipline. The literature on organisational accountability, from Drucker's *Effective Executive* [3] onward, recognises the same pattern under the label of *clear responsibility.*

## Related tools

- **Rollback-trigger design.** The triggers the owner executes.
- **Review-cadence matrix.** The cadence the owner keeps.
- **Sunset criteria worksheet.** The criteria the owner honours.
- **Commitment page.** The single-page artefact the owner signs.

## Verification

[1] Lashinsky A. *Inside Apple: How America's Most Admired — and Secretive — Company Really Works*. Business Plus; 2012. **[verified]** Describes the DRI practice at Apple in operational detail.

[2] Bryar C, Carr B. *Working Backwards: Insights, Stories, and Secrets from Inside Amazon*. St. Martin's Press; 2021. **[verified]** Documents the single-threaded-leader construct.

[3] Drucker PF. *The Effective Executive*. Harper & Row; 1967. **[verified]** The foundational treatment of clear responsibility in management practice.
