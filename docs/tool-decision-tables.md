# Toolkit — Decision tables

*Gate: G3 Route (Q2 rules). Category: rules substrate.*

## What problem it solves

Many engagement leaves are rules a human currently applies inconsistently. The routing question is *can these rules be written down as a table, and can the table cover every input the system sees?* A decision table answers both — exhaustively. Often the engagement can be closed at this point: if the table works, no AI is needed. The decision table's most common output is a cleanly-written ruleset that retires a candidate AI routing.

## How it is used

A **2–3 hour workshop** with the practitioners who today apply the rules. The group enumerates *conditions* (the inputs to the decision) and *actions* (the outputs), then fills in every combination of condition values with the action that should apply. The practitioners argue about the cells where disagreement exists — these are the rules' actual uncertainty, made visible. The output is a table that either works (routing: rules, not AI) or fails (routing: something higher, because the rules are not decidable).

## Inputs

- Practitioners who today make the decision.
- Time-and-motion records or shadowing notes for the decision's current state (useful for grounding).
- A decomposition leaf that the G3 chair has identified as possibly-rule-shaped.

## Outputs

- A **decision table**: rows of condition combinations, each with an action.
- A **disagreement log**: cells where practitioners initially disagreed, with the resolution (or an explicit *rule is not decidable; routing higher*).
- A **completeness check**: every combination of condition values covered, or a documented *default catch-all* rule for the uncovered space.
- A **routing recommendation**: rules (the leaf is covered), rules with escalation (most covered; escalation for edge cases), or higher-level routing (rules insufficient).

## Visualisation

<div style="max-width: 900px; margin: 2rem auto;">
<svg viewBox="0 0 800 290" xmlns="http://www.w3.org/2000/svg" role="img" aria-labelledby="dt-title">
  <title id="dt-title">Decision table — condition columns on the left, action column on the right, one row per rule</title>
  <style>
    .dt-rect { fill: var(--md-default-bg-color, #fff); stroke: var(--md-default-fg-color, #000); stroke-width: 1.4; }
    .dt-head { fill: var(--md-default-fg-color, #000); opacity: 0.1; stroke: var(--md-default-fg-color, #000); stroke-width: 1.4; }
    .dt-action { fill: var(--md-default-fg-color, #000); opacity: 0.05; stroke: var(--md-default-fg-color, #000); stroke-width: 1.4; }
    .dt-line { stroke: var(--md-default-fg-color, #000); stroke-width: 0.8; fill: none; }
    .dt-label { font: 700 12px -apple-system, sans-serif; fill: var(--md-default-fg-color, #000); text-anchor: middle; }
    .dt-sub { font: 400 11px -apple-system, sans-serif; fill: var(--md-default-fg-color, #000); text-anchor: middle; }
    .dt-ax { font: 700 12px -apple-system, sans-serif; fill: var(--md-default-fg-color, #000); }
    .dt-tag { font: italic 10px -apple-system, sans-serif; fill: var(--md-default-fg-color, #000); text-anchor: middle; opacity: 0.8; }
  </style>
  <text class="dt-ax" x="40" y="25">Conditions</text>
  <text class="dt-ax" x="620" y="25">Action</text>
  <rect class="dt-head" x="40" y="40" width="170" height="36" />
  <text class="dt-label" x="125" y="63">Carrier priority?</text>
  <rect class="dt-head" x="210" y="40" width="170" height="36" />
  <text class="dt-label" x="295" y="63">Slot free?</text>
  <rect class="dt-head" x="380" y="40" width="170" height="36" />
  <text class="dt-label" x="465" y="63">Within hours?</text>
  <rect class="dt-action" x="550" y="40" width="210" height="36" />
  <text class="dt-label" x="655" y="63">Action</text>
  <rect class="dt-rect" x="40" y="76" width="170" height="36" />
  <text class="dt-sub" x="125" y="99">Yes</text>
  <rect class="dt-rect" x="210" y="76" width="170" height="36" />
  <text class="dt-sub" x="295" y="99">Yes</text>
  <rect class="dt-rect" x="380" y="76" width="170" height="36" />
  <text class="dt-sub" x="465" y="99">Yes</text>
  <rect class="dt-action" x="550" y="76" width="210" height="36" />
  <text class="dt-sub" x="655" y="99">Assign immediately</text>
  <rect class="dt-rect" x="40" y="112" width="170" height="36" />
  <text class="dt-sub" x="125" y="135">Yes</text>
  <rect class="dt-rect" x="210" y="112" width="170" height="36" />
  <text class="dt-sub" x="295" y="135">No</text>
  <rect class="dt-rect" x="380" y="112" width="170" height="36" />
  <text class="dt-sub" x="465" y="135">Yes</text>
  <rect class="dt-action" x="550" y="112" width="210" height="36" />
  <text class="dt-sub" x="655" y="135">Reassign held slot</text>
  <rect class="dt-rect" x="40" y="148" width="170" height="36" />
  <text class="dt-sub" x="125" y="171">No</text>
  <rect class="dt-rect" x="210" y="148" width="170" height="36" />
  <text class="dt-sub" x="295" y="171">Yes</text>
  <rect class="dt-rect" x="380" y="148" width="170" height="36" />
  <text class="dt-sub" x="465" y="171">Yes</text>
  <rect class="dt-action" x="550" y="148" width="210" height="36" />
  <text class="dt-sub" x="655" y="171">Assign immediately</text>
  <rect class="dt-rect" x="40" y="184" width="170" height="36" />
  <text class="dt-sub" x="125" y="207">No</text>
  <rect class="dt-rect" x="210" y="184" width="170" height="36" />
  <text class="dt-sub" x="295" y="207">No</text>
  <rect class="dt-rect" x="380" y="184" width="170" height="36" />
  <text class="dt-sub" x="465" y="207">Yes</text>
  <rect class="dt-action" x="550" y="184" width="210" height="36" />
  <text class="dt-sub" x="655" y="207">Queue — defer 15 min</text>
  <rect class="dt-rect" x="40" y="220" width="170" height="36" />
  <text class="dt-sub" x="125" y="243">Any</text>
  <rect class="dt-rect" x="210" y="220" width="170" height="36" />
  <text class="dt-sub" x="295" y="243">Any</text>
  <rect class="dt-rect" x="380" y="220" width="170" height="36" />
  <text class="dt-sub" x="465" y="243">No</text>
  <rect class="dt-action" x="550" y="220" width="210" height="36" />
  <text class="dt-sub" x="655" y="243">Escalate to supervisor</text>
  <text class="dt-tag" x="400" y="280">Rows exhaust the condition space; the action column is the rule output.</text>
</svg>
</div>

*Three condition columns, one action column, five rows — the action is determined by the combination of conditions. Row five is a default catch-all.*

## Anatomy

**Conditions.** Input variables the decision depends on. Named precisely, with enumerated values. *"Carrier priority: yes/no"* is clean; *"carrier status"* is not.

**Actions.** Output outcomes. Also enumerated — *"assign immediately, reassign held slot, queue, escalate"*. Actions can be compound (*assign + notify*).

**Rows.** Each row is one rule: a specific combination of condition values → an action. For $n$ boolean conditions, the maximum is $2^n$ rows; practical tables are much smaller because many combinations share an action.

**Completeness.** Every combination of condition values is covered, either by a specific row or by a default catch-all. Uncovered combinations become undefined behaviour — the table is not yet valid.

**Disagreement log.** When practitioners fill a row differently, the disagreement is recorded rather than papered over. Common outcomes: *both actions are valid; choose one with a tiebreak rule*; *the combination is rare and escalation is safer*; *the rule is not decidable at this input grain; conditions are underspecified*.

## Example

??? example "Paper trail — rule table for priority slot assignment"
    *G3 Q2 decision-table session. Practitioners: Chen, Martinez, Amira. Chair: Ada.*

    *T+0 — conditions.* Ada: *"what does the priority slot-assignment decision depend on?"* Chen and Martinez converge on three conditions: carrier priority flag (from booking), slot-free status, truck's hours-of-service remaining. Three boolean conditions → 8 combinations.

    *T+15 — actions.* Enumerate: *assign immediately, reassign held slot, queue, escalate*. Four actions.

    *T+30 — fill cells.* The team fills row by row. Agreement on most; disagreement on the *priority + slot-not-free + within-hours* case. Chen: *reassign.* Martinez: *queue with reassignment pending — don't move someone mid-dock.*

    *T+55 — disagreement surfaces the unsaid.* Amira: *"the policy is reassign; Martinez, you're applying an operational rule — *don't interrupt an active dock*. That's real but it's not in the written policy."* Ada: *"that is an additional condition the table needs. Add: *dock action in progress?* Four conditions now."* Table expands to 16 rows.

    *T+90 — re-fill with the fourth condition.* The new condition resolves the disagreement. *Priority + not-free + within-hours + dock-in-progress → queue*. *Priority + not-free + within-hours + no-dock-in-progress → reassign*. Both practitioners sign off.

    *T+120 — default + completeness.* Ada: *"out-of-hours cases — what if the driver is timed out?"* Team agrees: *escalate to supervisor, regardless of other conditions*. Added as a default catch-all.

    *T+150 — routing recommendation.* Ada: *"the rule set is decidable. The table handles every combination the practitioners could name. Routing: rules, no AI. The allocator piece's scope for priority arbitration narrows — the table runs; AI supports only where the conditions themselves are not observable (e.g., when carrier priority is ambiguous)."*

    *T+165 — close.* Table handed to IT; implementation is a simple if/else. Engagement's AI footprint at this leaf: zero. This is a valid and common outcome.

## Pitfalls

**Condition names in natural language.** *"Usually"* is not a condition value. *"Frequency > 3 per shift"* is.

**Action compression.** Collapsing *"assign immediately (and notify carrier)"* with *"assign immediately"* loses the notify-carrier part of the action. Compound actions are explicit.

**Hidden conditions.** The most common pitfall: practitioners applying an unstated condition. The disagreement log forces the hidden condition into the open.

**Incomplete tables.** *"We covered the main cases."* The rest is undefined behaviour. For $n$ conditions with $k$ values each, $k^n$ rows are possible; the table must cover every one, even if many collapse into a default row.

**Rules that look decidable but aren't.** The condition *"carrier is trustworthy"* is subjective; it cannot be read from the input. If an AI is needed to produce the condition (trustworthiness score), the rule is not decidable without AI — the routing question shifts to *which AI produces the condition?*

**Skipping the disagreement log.** A table where the practitioners never disagreed is a table that was written by one person with the others nodding. The argument is the method's source of truth.

## When not to use

- Decisions whose conditions cannot be enumerated (free-text inputs, perceptual judgements).
- Decisions where the condition space is too large for a table — DMN (next tool) is the follow-on.
- Research-first engagements whose answer is not yet ready for codification.

## Provenance

Decision tables are documented in Pollack's *Decision Tables: Theory and Practice* [1] and predate this reference in operations-research use. The systematic treatment of completeness and consistency checks is developed in Hurley [2]. The method's contemporary form in business-rule management is covered separately in the DMN tool card.

## Related tools

- **DMN (Decision Model and Notation).** The standardised graphical form of decision tables and decision requirements.
- **Pair worksheet (G3 Q3).** Used when the table fails and AI is needed for one or more conditions.
- **Ishikawa (G2).** Often surfaces the conditions that the table will need.

## Verification

[1] Pollack SL. Conversion of limited-entry decision tables to computer programs. *Communications of the ACM*. 1965;8(11):677–82. **[verified]** Early systematic treatment of decision tables.

[2] Hurley RB. *Decision Tables in Software Engineering*. Van Nostrand Reinhold; 1983. **[verified]** Completeness and consistency checks for decision tables.
