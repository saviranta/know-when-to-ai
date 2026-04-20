# Toolkit — Adaptation decision tree

*Gate: G3 Route (level-picking). Category: routing substrate.*

## What problem it solves

The pair worksheet settles the *what kind of AI* question — classical ML vs. LLM-family. Inside the LLM family, more choices remain: raw prompting, retrieval-augmented generation (RAG), fine-tuning, single agent, tool-using agent, multi-agent. Each level adds capability and cost; the wrong level means either failing on capability or paying multiples for capability not used. The adaptation decision tree walks the team through a sequence of questions that route a piece to the lowest capability level that is sufficient. It exists because capability-level creep — picking agents when RAG would do, picking RAG when prompting would do — is the most common misroute in 2025-2026.

## How it is used

A **30–45 minute G3 conversation** per piece, run after the pair worksheet has landed the piece in the LLM family. The chair walks the team down the tree, answering each question yes/no based on the piece's actual requirements. Each leaf of the tree corresponds to a capability level. The walk ends with the level and a paragraph explaining why lower levels were ruled out.

## Inputs

- A piece routed to the LLM family by the pair worksheet.
- A clear specification of what the piece must produce: input shape, output shape, knowledge sources, action requirements.
- The AI canvas and ML canvas (for comparison metrics and failure modes).

## Outputs

- A **routed capability level** — prompting / RAG / fine-tuning / single agent / tool-using agent / multi-agent.
- A **walk-through record**: for each question in the tree, the answer and the reasoning.
- **Flagged upgrades**: conditions under which the piece would need to move to a higher level; these become review-cadence items.

## Visualisation

<div style="max-width: 900px; margin: 2rem auto;">
<svg viewBox="0 0 800 340" xmlns="http://www.w3.org/2000/svg" role="img" aria-labelledby="adt-title">
  <title id="adt-title">Adaptation decision tree — sequence of yes/no questions routing piece to prompting, RAG, fine-tuning, single agent, tool-using agent, or multi-agent</title>
  <style>
    .adt-rect { fill: var(--md-default-bg-color, #fff); stroke: var(--md-default-fg-color, #000); stroke-width: 1.4; }
    .adt-leaf { fill: var(--md-default-fg-color, #000); opacity: 0.08; stroke: var(--md-default-fg-color, #000); stroke-width: 1.4; }
    .adt-line { stroke: var(--md-default-fg-color, #000); stroke-width: 1.2; fill: none; }
    .adt-arrow { fill: var(--md-default-fg-color, #000); }
    .adt-label { font: 700 11px -apple-system, sans-serif; fill: var(--md-default-fg-color, #000); text-anchor: middle; }
    .adt-sub { font: 400 10px -apple-system, sans-serif; fill: var(--md-default-fg-color, #000); text-anchor: middle; }
    .adt-edge { font: 700 10px -apple-system, sans-serif; fill: var(--md-default-fg-color, #000); text-anchor: middle; }
    .adt-tag { font: italic 10px -apple-system, sans-serif; fill: var(--md-default-fg-color, #000); text-anchor: middle; opacity: 0.8; }
  </style>
  <defs><marker id="adt-a" markerWidth="7" markerHeight="7" refX="6" refY="3.5" orient="auto"><path d="M0,0 L6,3.5 L0,7 z" class="adt-arrow"/></marker></defs>
  <rect class="adt-rect" x="310" y="20" width="180" height="40" />
  <text class="adt-label" x="400" y="37">Needs external knowledge</text>
  <text class="adt-label" x="400" y="52">beyond training?</text>
  <line class="adt-line" x1="360" y1="60" x2="200" y2="90" marker-end="url(#adt-a)" />
  <text class="adt-edge" x="260" y="72">no</text>
  <line class="adt-line" x1="440" y1="60" x2="570" y2="90" marker-end="url(#adt-a)" />
  <text class="adt-edge" x="520" y="72">yes</text>
  <rect class="adt-rect" x="110" y="90" width="180" height="40" />
  <text class="adt-label" x="200" y="107">Output stable across</text>
  <text class="adt-label" x="200" y="122">inputs?</text>
  <rect class="adt-rect" x="480" y="90" width="180" height="40" />
  <text class="adt-label" x="570" y="107">Must take multi-step</text>
  <text class="adt-label" x="570" y="122">actions?</text>
  <line class="adt-line" x1="155" y1="130" x2="75" y2="170" marker-end="url(#adt-a)" />
  <text class="adt-edge" x="105" y="146">yes</text>
  <line class="adt-line" x1="245" y1="130" x2="300" y2="170" marker-end="url(#adt-a)" />
  <text class="adt-edge" x="285" y="146">no</text>
  <line class="adt-line" x1="525" y1="130" x2="455" y2="170" marker-end="url(#adt-a)" />
  <text class="adt-edge" x="480" y="146">no</text>
  <line class="adt-line" x1="615" y1="130" x2="700" y2="170" marker-end="url(#adt-a)" />
  <text class="adt-edge" x="665" y="146">yes</text>
  <rect class="adt-leaf" x="10" y="170" width="130" height="50" />
  <text class="adt-label" x="75" y="192">Prompting</text>
  <text class="adt-sub" x="75" y="208">template + system prompt</text>
  <rect class="adt-rect" x="230" y="170" width="160" height="40" />
  <text class="adt-label" x="310" y="187">Accuracy plateau</text>
  <text class="adt-label" x="310" y="202">above prompt limits?</text>
  <rect class="adt-leaf" x="380" y="170" width="150" height="50" />
  <text class="adt-label" x="455" y="192">RAG</text>
  <text class="adt-sub" x="455" y="208">retrieve + generate</text>
  <rect class="adt-rect" x="620" y="170" width="160" height="40" />
  <text class="adt-label" x="700" y="187">Needs multiple</text>
  <text class="adt-label" x="700" y="202">coordinating agents?</text>
  <line class="adt-line" x1="275" y1="210" x2="220" y2="260" marker-end="url(#adt-a)" />
  <text class="adt-edge" x="240" y="232">no</text>
  <line class="adt-line" x1="345" y1="210" x2="380" y2="260" marker-end="url(#adt-a)" />
  <text class="adt-edge" x="375" y="232">yes</text>
  <line class="adt-line" x1="665" y1="210" x2="580" y2="260" marker-end="url(#adt-a)" />
  <text class="adt-edge" x="605" y="232">no</text>
  <line class="adt-line" x1="735" y1="210" x2="740" y2="260" marker-end="url(#adt-a)" />
  <text class="adt-edge" x="750" y="232">yes</text>
  <rect class="adt-leaf" x="130" y="260" width="180" height="50" />
  <text class="adt-label" x="220" y="282">Prompting + examples</text>
  <text class="adt-sub" x="220" y="298">few-shot</text>
  <rect class="adt-leaf" x="320" y="260" width="130" height="50" />
  <text class="adt-label" x="385" y="282">Fine-tuning</text>
  <text class="adt-sub" x="385" y="298">train on corpus</text>
  <rect class="adt-leaf" x="490" y="260" width="170" height="50" />
  <text class="adt-label" x="575" y="282">Tool-using agent</text>
  <text class="adt-sub" x="575" y="298">single loop + tools</text>
  <rect class="adt-leaf" x="670" y="260" width="120" height="50" />
  <text class="adt-label" x="730" y="282">Multi-agent</text>
  <text class="adt-sub" x="730" y="298">coordinated</text>
  <text class="adt-tag" x="400" y="332">Walk top-to-bottom; each "yes/no" narrows to the lowest level that meets requirements.</text>
</svg>
</div>

*A yes/no walk. Each node answers a specific capability question; the terminal leaves are the routed levels. Default bias is to the left (lower capability).*

## Anatomy

**Question 1 — external knowledge.** Does the piece need information that isn't in the LLM's training? Pricing, inventory, internal docs, anything time-sensitive — yes. General knowledge tasks that pre-2024 LLMs know — no. Yes routes to RAG-or-above; no routes to prompting-or-fine-tuning.

**Question 2 — stability across inputs.** For prompting-candidate pieces, does the same prompt shape work across the input distribution? If yes, prompting is sufficient. If no (outputs need strong adaptation to inputs), few-shot examples or fine-tuning.

**Question 3 — accuracy plateau.** For prompting + examples, does accuracy plateau below the required floor? If yes, fine-tuning is the upgrade. Fine-tuning is the most expensive prompting-family step; do not go there without evidence prompting has plateaued.

**Question 4 — multi-step actions.** For RAG-or-above pieces, must the piece take *actions* (not just produce text)? If no, plain RAG. If yes, agents.

**Question 5 — coordinating agents.** For agent pieces, can a single loop with tools handle the workload, or are genuinely independent sub-agents needed? Defaults should be single loop; multi-agent is over-engineered for most use cases in 2025-2026.

**Default bias left.** At every branch, the lower-capability leaf is preferred unless evidence shows it cannot meet requirements. "We haven't tried prompting" is not evidence; offline evaluation showing prompting plateaus is.

## Example

??? example "Paper trail — two pieces walked through the tree"
    *G3 level-picking sessions for two pieces at the freight operator, W12 of 2026. Chair: Ada. Team: Priya, Alex, Raj, Amira.*

    **Piece A: dispatcher shift-handover summariser.** Routed to LLM family by the pair worksheet (unstructured text summarisation, no structured features).

    - *Q1 external knowledge?* No. The handover notes are the input; the task is compressing them. No retrieval needed.
    - *Q2 stable across inputs?* Amira: *"shift notes follow a loose template; the summariser should work across all shifts with the same prompt."* Yes.
    - Routed leaf: **Prompting.** System prompt + template. No few-shot, no RAG, no agent.
    - Flagged upgrades: if dispatchers complain about specific missed items ("the truck-mechanical notes aren't carried forward"), add few-shot examples before jumping to fine-tuning.

    **Piece B: carrier-relationship assistant for account managers.** Routed to LLM family (free-text query, pulls from carrier history).

    - *Q1 external knowledge?* Yes — carrier history, contract terms, recent complaints. All internal and time-sensitive.
    - *Q2 [skipped, already routed past prompting by Q1].*
    - *Q4 multi-step actions?* Ada asks carefully: *"does the assistant need to do things, or just answer questions?"* Priya (with Amira): *"at launch, answer questions only. Drafting a reply email is phase 2."*
    - Routed leaf: **RAG.** Retrieve carrier records; generate a grounded answer.
    - Flagged upgrades: if phase 2 (draft replies) ships, re-walk the tree — that adds an action, which routes to a tool-using agent (with an email-draft tool, dispatcher-in-the-loop). Do not ship phase 2 on RAG alone.

    *Paper trail.* Two pieces, two walks. Prompting and RAG routed. No agents in this engagement. Each walk produced a reasoning paragraph filed with the ML canvas. The flagged upgrade conditions went into the review-cadence matrix at G5.

## Pitfalls

**Skipping to agents.** *"This is complicated, so it's an agent problem."* Most pieces that *feel* like agents are actually RAG + a small post-processing step. The tree forces the simpler routing to be ruled out first, with evidence.

**Running the tree without offline evidence.** Answering *"prompting plateaus"* without having tried it is unfounded. Each question that rules out a lower level needs a piece of evidence; otherwise the tree is self-justification for a pre-decided routing.

**Treating the tree as a checklist.** The walk should generate *argument*, not box-checking. If the walk took 8 minutes and produced no disagreement, the chair has probably not pushed hard enough on the default-bias-left discipline.

**Missing the stable-input question.** A piece that needs wildly different outputs across inputs can masquerade as prompting-candidate until it's in production and failing on edge cases. Sampling representative inputs before routing catches this.

**Confusing fine-tuning with RAG.** They solve different problems. Fine-tuning changes the model's default behaviour on seen patterns; RAG provides information the model didn't have. Teams who think they need fine-tuning often need RAG, and vice-versa.

**Locking the routing.** The tree output is a commitment for now, not forever. Explicit upgrade conditions (e.g., "if accuracy plateaus below 85% with few-shot, consider fine-tuning") go into the commitment artefact so re-routing is planned, not reactive.

## When not to use

- Pieces that haven't passed the pair worksheet. The tree presumes LLM-family routing; ML-routed pieces don't use this.
- Pieces where the requirements are genuinely unclear (walks produce *"maybe"* at most nodes). The upstream specification needs more work before the tree can resolve.
- Research or prototype work where the intent is to *explore* capability levels, not commit to one. The tree is for production-candidate routing.

## Provenance

The adaptation-decision-tree pattern as applied to LLM-family routing is an engineering-practice adaptation that consolidates guidance from Anthropic's and OpenAI's practitioner documentation [1], Lewis et al.'s RAG paper [2], and the emerging agent-engineering literature (Wooldridge's *Introduction to MultiAgent Systems* provides background framing [3]). The default-left bias — prefer the lowest capability level — is informed by OpenAI's *Practices for Governing Agentic AI Systems* [4].

## Related tools

- **Pair worksheet.** Upstream; lands the piece in the LLM family.
- **Retrievable-quality test.** Applied at the RAG-or-above branch; tests whether RAG's retrieval is useful before committing.
- **Total-cost-of-ownership ladder.** Used to confirm the level's cost is sustainable.

## Verification

[1] Anthropic. Building effective agents. Engineering blog. 2024. **[verified]** Practitioner guidance on when to use agents vs. simpler patterns.

[2] Lewis P, Perez E, Piktus A, et al. Retrieval-augmented generation for knowledge-intensive NLP tasks. *NeurIPS*. 2020. **[verified]** The foundational RAG paper.

[3] Wooldridge M. *An Introduction to MultiAgent Systems*. 2nd ed. Wiley; 2009. **[verified]** Academic background on multi-agent systems, preceding the LLM-agent wave.

[4] Shavit Y, Agarwal S, Brundage M, et al. Practices for governing agentic AI systems. OpenAI research paper. 2023. **[verified]** Governance discipline for agentic pieces; informs the default-left bias.
