# Chapter 1 — What this book is

Two acts keep needing a human.

The first is **framing**. Deciding what the problem actually is. Deciding who it is a problem for. Deciding what would count as having solved it. A model given a badly framed problem produces a confident, well-written, wrong answer faster than any human could. Framing is not a bottleneck that better tooling will widen — it is the act that decides what the tooling is pointed at.

The second is **deciding what a machine should and should not decide**. Some decisions should not be automated at all, regardless of how capable the model gets. For everything else, the question is whether adequate controls — audit trails, human review, rollback triggers, sunset criteria — can be built to make the machine's decision trustworthy enough to delegate. Neither question answers itself, and both need a named human doing the answering.

So the real question isn't *whether* to use AI. It is *is this an AI problem — and if so, where should a machine fit in the decision?* Most AI books answer a different question, *how do I build this*, and presume the first one is already settled. This one doesn't. The reader shows up with a brief. The brief contains a name — a chatbot, an agent, a copilot, a retrieval system, a classifier — and an expectation that the name is the answer. The first move is to refuse that shortcut and ask what the problem actually is.

The book is a method for doing that. Six stages, two gates above them, a toolbox of twenty-six entries below. The method produces one of four honest answers for any given problem. It does not pre-commit to "yes, use AI." It also does not pre-commit to "no." It tries to produce the right answer for the problem in front of it, and it shows its working.

## 1.2 What you get from reading it

A method for deciding whether — and how — to use AI on a specific problem.

The method is built for one kind of AI use — AI deployed inside an organisation, where the operator of the system and the person affected by its output are not the same. [Chapter 2](ch-2.md) names four other modes of AI use — generative work, conversation and reflection, building, augmentation — where this method is not needed. Everything from [Chapter 3](ch-3.md) onwards is aimed at the deployed case.

The method can produce four different answers for any engagement, each named and defensible, each reached at a specific point in the work:

- **Off-limits to AI.** Some problems arrive as decisions that should not be handed to AI at all, regardless of capability. Welfare-eligibility scoring, immigration-risk assessment, predictive policing, automated sentencing. For categories like these, the honest recommendation is to keep AI out, now and later — however tempting the capability curve gets. The method makes that recommendation available, not hidden.
- **Not an AI problem.** Some problems look technical but are not. Bad process, unclear ownership, a policy question dressed as a tooling question. The honest fix is policy, process, or people — not a model. The method makes that redirection available as a named answer, not an embarrassment.
- **AI as assistant.** Some problems pass the first two checks, but when the routing work is done, no AI placement can be made responsible enough for this specific decision. The decision stays with a human. AI can still support — retrieval, summarisation, option generation — but the decision and its consequences belong to a person.
- **Autonomous AI.** The rest are routable to AI that makes the call under controls built for it. The method says where in the system each piece belongs — from simple rules at one end through to autonomous agents at the other — and what would have to be true for each route to be trustworthy. That is where the rest of the book earns its space.

Four answers, produced at the places in the method where they are honestly answerable. No pre-commitment to any one of them.

See Illustration 1.1.

<div style="max-width: 860px; margin: 2rem auto;">
<svg viewBox="0 0 800 240" xmlns="http://www.w3.org/2000/svg" role="img" aria-labelledby="ch1-ill11-title">
  <title id="ch1-ill11-title">Four answers the book produces for any problem</title>

  <style>
    .ch1-outcome-rect { fill: var(--md-default-bg-color, #fff); stroke: var(--md-default-fg-color, #000); stroke-width: 1.5; }
    .ch1-outcome-rule { stroke: var(--md-default-fg-color, #000); stroke-width: 1; opacity: 0.5; }
    .ch1-outcome-label { font: 700 12px -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif; letter-spacing: 0.06em; fill: var(--md-default-fg-color, #000); text-anchor: middle; text-transform: uppercase; }
    .ch1-outcome-sub { font: 12px -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif; fill: var(--md-default-fg-color, #000); text-anchor: middle; }
    .ch1-caption { font: 600 11px -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif; letter-spacing: 0.12em; fill: var(--md-default-fg-color, #000); text-anchor: middle; text-transform: uppercase; }
    .ch1-divider { stroke: var(--md-default-fg-color, #000); stroke-width: 1; opacity: 0.35; }
    .ch1-band { font: 500 10px -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif; letter-spacing: 0.18em; fill: var(--md-default-fg-color, #000); text-anchor: middle; text-transform: uppercase; opacity: 0.6; }
  </style>

  <text class="ch1-band" x="400" y="18">Four answers the book produces for any problem</text>

  <rect class="ch1-outcome-rect" x="25" y="35" width="180" height="160" rx="4" />
  <text class="ch1-outcome-label" x="115" y="75">Off-limits to AI</text>
  <line class="ch1-outcome-rule" x1="55" y1="95" x2="175" y2="95" />
  <text class="ch1-outcome-sub" x="115" y="125">AI stays out</text>
  <text class="ch1-outcome-sub" x="115" y="143">of the category —</text>
  <text class="ch1-outcome-sub" x="115" y="161">now or later.</text>

  <rect class="ch1-outcome-rect" x="215" y="35" width="180" height="160" rx="4" />
  <text class="ch1-outcome-label" x="305" y="75">Not an AI problem</text>
  <line class="ch1-outcome-rule" x1="245" y1="95" x2="365" y2="95" />
  <text class="ch1-outcome-sub" x="305" y="125">The fix is policy,</text>
  <text class="ch1-outcome-sub" x="305" y="143">process, or people —</text>
  <text class="ch1-outcome-sub" x="305" y="161">not a model.</text>

  <rect class="ch1-outcome-rect" x="405" y="35" width="180" height="160" rx="4" />
  <text class="ch1-outcome-label" x="495" y="75">AI as assistant</text>
  <line class="ch1-outcome-rule" x1="435" y1="95" x2="555" y2="95" />
  <text class="ch1-outcome-sub" x="495" y="125">A human decides.</text>
  <text class="ch1-outcome-sub" x="495" y="143">AI supports —</text>
  <text class="ch1-outcome-sub" x="495" y="161">retrieval, drafts, options.</text>

  <rect class="ch1-outcome-rect" x="595" y="35" width="180" height="160" rx="4" />
  <text class="ch1-outcome-label" x="685" y="75">Autonomous AI</text>
  <line class="ch1-outcome-rule" x1="625" y1="95" x2="745" y2="95" />
  <text class="ch1-outcome-sub" x="685" y="125">AI decides</text>
  <text class="ch1-outcome-sub" x="685" y="143">under controls</text>
  <text class="ch1-outcome-sub" x="685" y="161">built for the decision.</text>

  <line class="ch1-divider" x1="25" y1="210" x2="775" y2="210" />
  <text class="ch1-caption" x="400" y="230">Four answers &mdash; each available, each defensible, none presumed</text>
</svg>
</div>

*Illustration 1.1 — Four answers the method can produce for any given problem. The first two are refusals, the second two are placements. None of them is the book's default; all four are on the table until the work of the method says which one applies to this problem.*

The second thing the book offers: a shape that ages in years, not months. The method sits above specific models and specific providers. When the leading names change — and they will, probably every eighteen months — the shape of the decision does not. The tool at a given place in the system may update; the decision about which place to use, for which piece, does not.

The third: two reading modes. First pass, cover to cover, in about half a day — enough to see the whole shape. Tenth pass, one stage at a time, ten minutes before a specific decision meeting — enough to refresh the one question that matters this afternoon. Both uses are intended. The book is structured to serve both without penalty.

## 1.3 What the book is built from

A curated collection of external sources, pulled into one method by the author.

Most of the method's pieces are not new. The refusal to treat a social problem as a technical one comes from Broussard [1]. The list of decision categories that should stay off-limits to AI comes from McQuillan [2]. The older claim that some decisions depend on a human bearing their outcome traces to Weizenbaum's 1976 argument [3], which the book keeps in part and modifies in part — explained where it matters, not summarised here. MECE, Five Whys, Ishikawa, Jobs-to-be-Done, the pyramid principle — each is a familiar piece of management consulting, credited to its actual origin where the popular attribution is wrong. The governance spine borrows from NIST and ISO. The interaction-design stack borrows from Amershi, PAIR, and Shneiderman. The book's contribution is not new pieces; it is the selection, the ordering, and the decisions about where each piece fits in a single, runnable method.

The author's own recommendations are distinguished from the sources'. Where this book says *do X because of Y*, the reader can follow Y back to the source that argues for it. Where the book says *don't do X because it usually fails at step Z*, the reader can check whether the claim is a widely held finding or the author's editorial judgement. Both are marked.

Every cited source carries a provenance tag in the reference list at the end of each chapter — verified, partial, secondary, vendor-origin, pre-canonical, single-author. The tag says how much weight the claim earns. Where an idea is commonly misattributed, the reference list says so. Small repairs, made visible.

A method that cannot be wrong about a specific engagement is not a method; it is a style. The one in this book can be wrong, at named gates, in named ways. The chapters that follow show where.

Next: the five modes of AI use, and which one this book is about.

## Sources

[1] Broussard M. *Artificial Unintelligence: How Computers Misunderstand the World*. MIT Press; 2018. **[verified]**

[2] McQuillan D. *Resisting AI: An Anti-fascist Approach to Artificial Intelligence*. Bristol University Press; 2022. **[verified]**

[3] Weizenbaum J. *Computer Power and Human Reason: From Judgment to Calculation*. W. H. Freeman; 1976. **[verified]**
