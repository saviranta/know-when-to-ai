# Chapter 2 — What this book is about

One question sits under the whole book. *Is this an AI problem?*

Most AI books answer a different question — *how do I build this* — and presume the first question is already settled. This one doesn't. The reader shows up with a brief. The brief contains a name — a chatbot, an agent, a copilot, a retrieval system, a classifier — and an expectation that the name is the answer. The first move is to refuse the shortcut and ask what the problem actually is.

## Match the problem to the rung

The honest first answer to *should we use AI here?* is *which rung, and is any rung the right move?*

The method's job is placement. The rungs include *not AI at all*, and they include *multi-agent* at the far end, and several others in between. Some problems are nails. Some are screws. Some are social problems wearing technical costumes. A few are accountability questions with no machine answer. The method has to produce each of those answers cleanly, and none of them is the presumption.

That discipline runs against most of the literature. A strategy deck is pre-committed to *yes*; its commercial logic requires it. A vendor-comparison guide assumes the decision to buy is already made; the question left is *which*. A manifesto, for or against, tells you what to feel about AI rather than what to decide about a specific problem on a specific Tuesday.

A wrongly accepted project costs a year and a reputation. A wrongly refused one costs an opportunity. A method that can only produce *yes* is a sales funnel; a method that can only produce *no* is a manifesto; a method that produces the right answer for the problem in front of it is a method. The one in this book is trying to be the third thing.

## Four answers, produced at three places

The book produces four recommendations, and the place where each one is produced matters as much as the answer itself. Two are Tier-0 outcomes, above the method: *Abolish* and *Redirect*. One is a routing outcome, inside the method at G3: *Judge*. The fourth is the default that opens the rest of the book: *Proceed*.

**Above the method** sit two gates — questions, not classifiers. The first is the Technochauvinism Check [1]: is this a technical problem at all, or a social problem wearing a technical costume? Fail it, and the answer is *Redirect* — policy, process, or people, not tools. The second is the **abolition check**, drawn from McQuillan [3]: is this one of the decision categories — predictive policing, automated welfare sanctioning, immigration risk scoring, automated sentencing — where no plausible set of controls could make AI delegation acceptable, regardless of future capability? Fail it, and the answer is *Abolish*.

A note on Weizenbaum [2]. Earlier drafts of this book placed a broader accountability test at Gate 2, descended from Weizenbaum's 1976 argument that some decisions are not the kind a machine should take. Weizenbaum mixed two claims — that machines *could not* compute judgment-heavy decisions, and that they *should not*, because accountability depends on a human bearing the outcome. The empirical half has not held up; modern models can produce judgment-shaped reasoning credibly. The normative half has held up, but it is too wide to sit above the method as a pre-gate: most problems need decomposition, routing, and controls design before anyone can honestly answer whether adequate safeguards can be built. Tier 0 keeps only the narrow categorical refusal — answerable from the brief alone. The broader controls question moves inside the method, to routing. The split is this book's modification of Weizenbaum, not his own claim. Without it, the gate would refuse problems that careful engineering genuinely does make routable.

**Inside the method**, at the routing stage (G3), sits the third outcome: *Judge*. For problems that clear both Tier-0 gates, the routing decision may still land on a human — not because the category is off-limits, but because, after decomposition and routing, no AI placement clears the controls bar for this particular problem. The method may still support the human — retrieval, summarisation, option generation — but the name on the decision is human.

**The default** is the fourth outcome: *Proceed*. The gates pass. Routing finds an AI placement whose controls are viable. The method opens fully, and the next question is *at which rung, and with which controls*.

- **Abolish** (Tier 0). The category of decision should not be made by machine, now or later. Welfare-eligibility scoring, immigration-risk assessment, predictive policing, automated sentencing. The method exposes abolition as an available recommendation, not as an outlier.
- **Redirect** (Tier 0). The problem is not technical. The right answer is a policy change, a process fix, a different conversation, or a better manager. Tools would make the wrong thing faster.
- **Judge** (at G3 Route). No AI rung clears the controls bar for this specific problem. A human holds the decision. AI may support, but not decide.
- **Proceed** (default). The method opens fully. Routing finds an AI rung whose controls are viable, and the engagement moves into Sequence and Commit.

A book that can produce only *proceed* is a manifesto. This one produces all four, in named ways, at named places.

See Illustration 2.1.

<div style="max-width: 860px; margin: 2rem auto;">
<svg viewBox="0 0 800 260" xmlns="http://www.w3.org/2000/svg" role="img" aria-labelledby="ch2-ill21-title">
  <title id="ch2-ill21-title">Four outcomes produced at three places</title>

  <style>
    .ch2-outcome-rect { fill: var(--md-default-bg-color, #fff); stroke: var(--md-default-fg-color, #000); stroke-width: 1.5; }
    .ch2-outcome-rule { stroke: var(--md-default-fg-color, #000); stroke-width: 1; opacity: 0.5; }
    .ch2-outcome-label { font: 700 15px -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif; letter-spacing: 0.16em; fill: var(--md-default-fg-color, #000); text-anchor: middle; text-transform: uppercase; }
    .ch2-outcome-origin { font: 500 9px -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif; letter-spacing: 0.14em; fill: var(--md-default-fg-color, #000); text-anchor: middle; text-transform: uppercase; opacity: 0.7; }
    .ch2-outcome-sub { font: 12px -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif; fill: var(--md-default-fg-color, #000); text-anchor: middle; }
    .ch2-caption { font: 600 11px -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif; letter-spacing: 0.12em; fill: var(--md-default-fg-color, #000); text-anchor: middle; text-transform: uppercase; }
    .ch2-divider { stroke: var(--md-default-fg-color, #000); stroke-width: 1; opacity: 0.35; }
    .ch2-band { font: 500 10px -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif; letter-spacing: 0.18em; fill: var(--md-default-fg-color, #000); text-anchor: middle; text-transform: uppercase; opacity: 0.6; }
  </style>

  <text class="ch2-band" x="400" y="18">Four outcomes produced at three places</text>

  <rect class="ch2-outcome-rect" x="25" y="35" width="180" height="180" rx="4" />
  <text class="ch2-outcome-label" x="115" y="72">Abolish</text>
  <text class="ch2-outcome-origin" x="115" y="89">Tier 0 &mdash; Gate 2</text>
  <line class="ch2-outcome-rule" x1="55" y1="105" x2="175" y2="105" />
  <text class="ch2-outcome-sub" x="115" y="135">Category stays</text>
  <text class="ch2-outcome-sub" x="115" y="153">un-automated —</text>
  <text class="ch2-outcome-sub" x="115" y="171">now or later.</text>

  <rect class="ch2-outcome-rect" x="215" y="35" width="180" height="180" rx="4" />
  <text class="ch2-outcome-label" x="305" y="72">Redirect</text>
  <text class="ch2-outcome-origin" x="305" y="89">Tier 0 &mdash; Gate 1</text>
  <line class="ch2-outcome-rule" x1="245" y1="105" x2="365" y2="105" />
  <text class="ch2-outcome-sub" x="305" y="135">Not a technical</text>
  <text class="ch2-outcome-sub" x="305" y="153">problem. Policy,</text>
  <text class="ch2-outcome-sub" x="305" y="171">process, or people.</text>

  <rect class="ch2-outcome-rect" x="405" y="35" width="180" height="180" rx="4" />
  <text class="ch2-outcome-label" x="495" y="72">Judge</text>
  <text class="ch2-outcome-origin" x="495" y="89">In method &mdash; G3 Route</text>
  <line class="ch2-outcome-rule" x1="435" y1="105" x2="555" y2="105" />
  <text class="ch2-outcome-sub" x="495" y="135">No AI rung clears</text>
  <text class="ch2-outcome-sub" x="495" y="153">the controls bar.</text>
  <text class="ch2-outcome-sub" x="495" y="171">A human decides.</text>

  <rect class="ch2-outcome-rect" x="595" y="35" width="180" height="180" rx="4" />
  <text class="ch2-outcome-label" x="685" y="72">Proceed</text>
  <text class="ch2-outcome-origin" x="685" y="89">Default</text>
  <line class="ch2-outcome-rule" x1="625" y1="105" x2="745" y2="105" />
  <text class="ch2-outcome-sub" x="685" y="135">Method opens.</text>
  <text class="ch2-outcome-sub" x="685" y="153">Routing finds a</text>
  <text class="ch2-outcome-sub" x="685" y="171">rung with viable controls.</text>

  <line class="ch2-divider" x1="25" y1="230" x2="775" y2="230" />
  <text class="ch2-caption" x="400" y="250">Two Tier-0 outcomes &mdash; one in-method &mdash; one default</text>
</svg>
</div>

*Illustration 2.1 — Four outcomes, three places. Abolish and Redirect are Tier-0 decisions, answerable from the brief. Judge is a routing decision inside the method, after controls for the specific problem have been considered. Proceed is the default when routing finds a viable placement.*

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
