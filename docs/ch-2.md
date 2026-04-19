# Chapter 2 — What this book is about

One question sits under the whole book. *Is this an AI problem?*

Most AI books answer a different question — *how do I build this* — and presume the first question is already settled. This one doesn't. The reader shows up with a brief. The brief contains a name — a chatbot, an agent, a copilot, a retrieval system, a classifier — and an expectation that the name is the answer. The first move is to refuse the shortcut and ask what the problem actually is.

## Match the problem to the rung

The honest first answer to *should we use AI here?* is *which rung, and is any rung the right move?*

The method's job is placement. The rungs include *not AI at all*, and they include *multi-agent* at the far end, and several others in between. Some problems are nails. Some are screws. Some are social problems wearing technical costumes. A few are accountability questions with no machine answer. The method has to produce each of those answers cleanly, and none of them is the presumption.

That discipline runs against most of the literature. A strategy deck is pre-committed to *yes*; its commercial logic requires it. A vendor-comparison guide assumes the decision to buy is already made; the question left is *which*. A manifesto, for or against, tells you what to feel about AI rather than what to decide about a specific problem on a specific Tuesday.

A wrongly accepted project costs a year and a reputation. A wrongly refused one costs an opportunity. A method that can only produce *yes* is a sales funnel; a method that can only produce *no* is a manifesto; a method that produces the right answer for the problem in front of it is a method. The one in this book is trying to be the third thing.

## Four answers, not one

Above the method sit two gates — questions, not classifiers. The first is the Technochauvinism Check [1]: is this a technical problem at all, or a social problem wearing a technical costume? The second is **Who Signs** — a signature test descended from Weizenbaum [2]: can a named human actually carry the outcome of this decision, or does the signature dissolve into a vendor, a committee, or a model? Weizenbaum's 1976 argument mixed two claims — that machines *could not* compute certain decisions, and that they *should not*. The empirical half has not survived the last decade. The moral half has, and the gate rests on that half only. [Chapter 4](ch-4.md) teaches them in full.

Together, the two gates produce four outcomes:

- **Abolish.** The category of decision should not be made by machine, now or later. Welfare-eligibility scoring, immigration-risk assessment, predictive policing, automated sentencing — McQuillan [3] names this list. The method exposes abolition as an available recommendation, not as an outlier.
- **Judge.** The decision belongs to a human because the signature has to stay with one — with a person whose career moves with the outcome. The method can still *support* the human — retrieval, summarisation, option generation — but the name on the decision is human. The test is not what the model can compute; it is what happens to accountability if the model decides.
- **Redirect.** The problem is not technical. The right answer is a policy change, a process fix, a different conversation, or a better manager. Tools would make the wrong thing faster.
- **Proceed.** The gates pass. The method opens. Then the next question is *at which rung*.

A book that can produce only *proceed* is a manifesto. This one produces all four, in named ways, at named gates.

See Illustration 2.1.

<div style="max-width: 860px; margin: 2rem auto;">
<svg viewBox="0 0 800 240" xmlns="http://www.w3.org/2000/svg" role="img" aria-labelledby="ch2-ill21-title">
  <title id="ch2-ill21-title">Four outcomes of the Tier-0 gates</title>

  <style>
    .ch2-outcome-rect { fill: var(--md-default-bg-color, #fff); stroke: var(--md-default-fg-color, #000); stroke-width: 1.5; }
    .ch2-outcome-rule { stroke: var(--md-default-fg-color, #000); stroke-width: 1; opacity: 0.5; }
    .ch2-outcome-label { font: 700 15px -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif; letter-spacing: 0.16em; fill: var(--md-default-fg-color, #000); text-anchor: middle; text-transform: uppercase; }
    .ch2-outcome-sub { font: 12px -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif; fill: var(--md-default-fg-color, #000); text-anchor: middle; }
    .ch2-caption { font: 600 11px -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif; letter-spacing: 0.12em; fill: var(--md-default-fg-color, #000); text-anchor: middle; text-transform: uppercase; }
    .ch2-divider { stroke: var(--md-default-fg-color, #000); stroke-width: 1; opacity: 0.35; }
    .ch2-band { font: 500 10px -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif; letter-spacing: 0.18em; fill: var(--md-default-fg-color, #000); text-anchor: middle; text-transform: uppercase; opacity: 0.6; }
  </style>

  <text class="ch2-band" x="400" y="18">Outcomes after the Tier-0 gates</text>

  <rect class="ch2-outcome-rect" x="25" y="35" width="180" height="160" rx="4" />
  <text class="ch2-outcome-label" x="115" y="75">Abolish</text>
  <line class="ch2-outcome-rule" x1="55" y1="95" x2="175" y2="95" />
  <text class="ch2-outcome-sub" x="115" y="125">Category stays</text>
  <text class="ch2-outcome-sub" x="115" y="143">un-automated —</text>
  <text class="ch2-outcome-sub" x="115" y="161">now or later.</text>

  <rect class="ch2-outcome-rect" x="215" y="35" width="180" height="160" rx="4" />
  <text class="ch2-outcome-label" x="305" y="75">Judge</text>
  <line class="ch2-outcome-rule" x1="245" y1="95" x2="365" y2="95" />
  <text class="ch2-outcome-sub" x="305" y="125">A human signs.</text>
  <text class="ch2-outcome-sub" x="305" y="143">AI may support,</text>
  <text class="ch2-outcome-sub" x="305" y="161">but not decide.</text>

  <rect class="ch2-outcome-rect" x="405" y="35" width="180" height="160" rx="4" />
  <text class="ch2-outcome-label" x="495" y="75">Redirect</text>
  <line class="ch2-outcome-rule" x1="435" y1="95" x2="555" y2="95" />
  <text class="ch2-outcome-sub" x="495" y="125">Not a technical</text>
  <text class="ch2-outcome-sub" x="495" y="143">problem. Policy,</text>
  <text class="ch2-outcome-sub" x="495" y="161">process, or people.</text>

  <rect class="ch2-outcome-rect" x="595" y="35" width="180" height="160" rx="4" />
  <text class="ch2-outcome-label" x="685" y="75">Proceed</text>
  <line class="ch2-outcome-rule" x1="625" y1="95" x2="745" y2="95" />
  <text class="ch2-outcome-sub" x="685" y="125">Method opens.</text>
  <text class="ch2-outcome-sub" x="685" y="143">Next: which</text>
  <text class="ch2-outcome-sub" x="685" y="161">rung of the ladder.</text>

  <line class="ch2-divider" x1="25" y1="210" x2="775" y2="210" />
  <text class="ch2-caption" x="400" y="230">Four outcomes &mdash; only the last opens the method</text>
</svg>
</div>

*Illustration 2.1 — The four outcomes of the Tier-0 gates. Equal weight: the book produces all four, not just the last.*

## What the book gives you

A method, with a toolbox.

The method is six stages — frame, diagnose, decompose, route, sequence, commit — plus two gates above them. Each stage has one question and produces one artefact. The order is the order an engagement runs.

The toolbox is the atlas — twenty-six tools, each as a single reference card: what the tool is, where it came from, what it is for, what it fails at, when not to use it. The atlas enters the method at one specific gate — routing — and nowhere else. Routing errors swamp tool-choice errors; pick the rung first, then the tool on that rung.

Around the method stand three access indices (how a problem enters) and ten overlays (the disciplines that cut across every engagement — data readiness, evals, rollout, governance, privacy, retirement). Part 3 picks them up. Part 2 teaches the stages. Part 4 is the atlas.

The book is written for two uses. First pass, cover to cover — half a day, to see the shape. Tenth pass, a single stage before a decision meeting — ten minutes, to refresh the one question that matters this afternoon. Both uses are intended.

## Why it ages in years, not months

No model is named as the winner. No capability threshold is predicted. No timeline is set.

The method is model-agnostic for a concrete reason. The gates sit above the model. The routing matrix names *rungs* — rules, statistics, classical machine learning, language-model feature, retrieval-augmented generation, single agent, tool-using agent, multi-agent — not vendors of rungs. When the frontier shifts, the rung does not. The tool at the rung may update; the atlas entry still reads correctly. That is what a method earns by refusing to forecast: it ages in years rather than months.

*Not a forecast* is not the same as *not an opinion*. Where the evidence supports a recommendation, the book makes one. Where it does not, the book says so.

## The test

A method benefits the work.

That line is the test of the whole book. If the method is good, the work gets better. If the method is bad, the work gets worse in a way the method makes visible. A method that cannot be wrong about a specific engagement is not a method — it is a style. The one in this book can be wrong, at named gates, in named ways. The chapters that follow show where.

On to the shape.

## Sources

[1] Broussard M. *Artificial Unintelligence: How Computers Misunderstand the World*. MIT Press; 2018. **[verified]**

[2] Weizenbaum J. *Computer Power and Human Reason: From Judgment to Calculation*. W. H. Freeman; 1976. **[verified]**

[3] McQuillan D. *Resisting AI: An Anti-fascist Approach to Artificial Intelligence*. Bristol University Press; 2022. **[verified]**
