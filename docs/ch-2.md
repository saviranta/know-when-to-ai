# Chapter 2 — Five modes of AI use

Most of the noise about AI lumps every use into one pile. This book does not. There are five recognisable modes, and only one of them is what the rest of the book teaches. The other four are legitimate, mostly don't need this method, and are out of scope — but only up to a point. At G3 Route, where the method picks AI tools for a piece of a problem, the four come back as the capability palette the method draws from.

## 2.1 The five, briefly

**Generative work.** AI produces an artefact. Copy, image, audio, video, code snippet, slide, jingle. The output is the point. Someone with taste asks the AI to make the thing, reads or watches or listens, and keeps what is useful. Examples: marketing copy, a storyboard, product imagery, a draft blog post.

**Conversation and reflection.** AI as thinking partner. Learning, researching, challenging, steel-manning, talking a decision through. The output is not an artefact — it is a better-informed person. Examples: getting up to speed on an unfamiliar field, pressure-testing a draft argument, asking for the view from a different angle.

**Building.** AI as co-builder. Code, prototypes, drafts, small utilities. Faster, smoother, more ambitious than the builder alone — but the builder is still in charge of what gets built. Examples: pair-programming on a feature, drafting a spec with the AI in the room, prototyping a data transform you would never otherwise find time for.

**Augmentation.** AI enables a faculty that was limited. Real-time translation during a conversation, image description for a blind user, live captioning, voice for a non-verbal user. Not producing, not deciding — removing friction that was in the way. Examples: accessibility tools, real-time language support, situational awareness during a meeting.

**Problem-solving.** AI deployed inside an organisation to help carry or make a decision, where the person running the system and the person affected by its output are usually not the same. Examples: triaging a support queue, scoring a loan application, recommending a treatment path, routing an incident. This is the mode the rest of the book teaches. It is the only mode where the four answers of [Chapter 1](ch-1.md) — *Off-limits to AI*, *Not an AI problem*, *AI as assistant*, *Autonomous AI* — are the right question to ask.

See Illustration 2.1.

<div style="max-width: 900px; margin: 2rem auto;">
<svg viewBox="0 0 800 230" xmlns="http://www.w3.org/2000/svg" role="img" aria-labelledby="ch2m-ill21-title">
  <title id="ch2m-ill21-title">Five modes of AI use</title>

  <style>
    .ch2mod-rect { fill: var(--md-default-bg-color, #fff); stroke: var(--md-default-fg-color, #000); stroke-width: 1.5; }
    .ch2mod-rect-heavy { fill: var(--md-default-bg-color, #fff); stroke: var(--md-default-fg-color, #000); stroke-width: 3; }
    .ch2mod-rule { stroke: var(--md-default-fg-color, #000); stroke-width: 1; opacity: 0.5; }
    .ch2mod-label { font: 700 12px -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif; letter-spacing: 0.04em; fill: var(--md-default-fg-color, #000); text-anchor: middle; text-transform: uppercase; }
    .ch2mod-sub { font: 11px -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif; fill: var(--md-default-fg-color, #000); text-anchor: middle; }
    .ch2mod-ex { font: italic 10px -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif; fill: var(--md-default-fg-color, #000); text-anchor: middle; opacity: 0.65; }
    .ch2mod-marker { font: italic 10px -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif; font-weight: 600; fill: var(--md-default-fg-color, #000); text-anchor: middle; }
    .ch2mod-band { font: 500 10px -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif; letter-spacing: 0.18em; fill: var(--md-default-fg-color, #000); text-anchor: middle; text-transform: uppercase; opacity: 0.6; }
    .ch2mod-caption { font: 600 10px -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif; letter-spacing: 0.14em; fill: var(--md-default-fg-color, #000); text-anchor: middle; text-transform: uppercase; opacity: 0.75; }
  </style>

  <text class="ch2mod-band" x="400" y="18">Five modes of AI use</text>

  <rect class="ch2mod-rect" x="20" y="35" width="140" height="150" rx="4" />
  <text class="ch2mod-label" x="90" y="65">Generative</text>
  <text class="ch2mod-label" x="90" y="80">work</text>
  <line class="ch2mod-rule" x1="50" y1="95" x2="130" y2="95" />
  <text class="ch2mod-sub" x="90" y="120">AI makes</text>
  <text class="ch2mod-sub" x="90" y="138">the artefact.</text>
  <text class="ch2mod-ex" x="90" y="168">copy, image, audio</text>

  <rect class="ch2mod-rect" x="170" y="35" width="140" height="150" rx="4" />
  <text class="ch2mod-label" x="240" y="65">Conversation</text>
  <text class="ch2mod-label" x="240" y="80">&amp; reflection</text>
  <line class="ch2mod-rule" x1="200" y1="95" x2="280" y2="95" />
  <text class="ch2mod-sub" x="240" y="120">AI as</text>
  <text class="ch2mod-sub" x="240" y="138">thinking partner.</text>
  <text class="ch2mod-ex" x="240" y="168">learn, challenge</text>

  <rect class="ch2mod-rect" x="320" y="35" width="140" height="150" rx="4" />
  <text class="ch2mod-label" x="390" y="75">Building</text>
  <line class="ch2mod-rule" x1="350" y1="95" x2="430" y2="95" />
  <text class="ch2mod-sub" x="390" y="120">AI as</text>
  <text class="ch2mod-sub" x="390" y="138">co-builder.</text>
  <text class="ch2mod-ex" x="390" y="168">code, prototypes</text>

  <rect class="ch2mod-rect" x="470" y="35" width="140" height="150" rx="4" />
  <text class="ch2mod-label" x="540" y="75">Augmentation</text>
  <line class="ch2mod-rule" x1="500" y1="95" x2="580" y2="95" />
  <text class="ch2mod-sub" x="540" y="120">AI enables</text>
  <text class="ch2mod-sub" x="540" y="138">a faculty.</text>
  <text class="ch2mod-ex" x="540" y="168">translation, access</text>

  <rect class="ch2mod-rect-heavy" x="650" y="35" width="140" height="150" rx="4" />
  <text class="ch2mod-label" x="720" y="65">Problem-</text>
  <text class="ch2mod-label" x="720" y="80">solving</text>
  <line class="ch2mod-rule" x1="680" y1="95" x2="760" y2="95" />
  <text class="ch2mod-sub" x="720" y="120">AI deployed in</text>
  <text class="ch2mod-sub" x="720" y="138">an organisation.</text>
  <text class="ch2mod-marker" x="720" y="168">&larr; this book</text>

  <text class="ch2mod-caption" x="315" y="210">Four solo modes &mdash; user is also beneficiary</text>
  <text class="ch2mod-caption" x="720" y="210">Deployed use</text>
</svg>
</div>

*Illustration 2.1 — Five modes of AI use. The first four are solo: the person asking the AI is the person who lives with the answer. The fifth is different — a system deployed inside an organisation, where the operator and the affected person are usually not the same. The book's method is for the fifth.*

## 2.2 What sets problem-solving apart

The first four modes are voluntary. The user of the AI is also the beneficiary of the AI. If generated copy is bad, the copywriter throws it away. If the thinking partner gives bad advice, the thinker ignores it. If the co-builder produces broken code, the builder does not ship it. If the augmentation mis-translates a sentence, the speaker clarifies. The consequences of a bad output fall on the same person who asked for the output.

The fifth mode breaks that loop. A triage queue running on a model routes real calls from real customers; a loan-scoring system declines real applicants; a clinical-decision support tool nudges real treatments. The operator of the system is not the affected party. The operator can walk away from a bad output; the affected party cannot.

That asymmetry is why the book's scaffolding exists. The Tier 0 gates, the routing discipline, the controls overlay, the named owner at G5 — all of them are answers to the question *what has to be true for one person to use a machine to shape another person's day?* In the first four modes, that question barely arises; a prompt and a moment of taste will do. The book is written for the harder case.

## 2.3 When the four come back at G3

The four modes do not disappear when the method runs. They reappear at G3 Route as the capability palette the method picks from. When G3 places a sub-problem against an AI rung — an LLM feature, retrieval-augmented generation, a single agent, a tool-using agent — it is choosing *which of the four capabilities* the AI will perform inside the larger system:

- A drafting step in a legal workflow is a **generative** placement.
- A retrieval-and-summarisation step in a clinician's cockpit is a **conversation-and-reflection** placement — the clinician is doing the thinking, and the system is lowering the cost of asking good questions.
- A pair-programming step inside a development agent is a **building** placement.
- A live-transcription step in a call-centre product is an **augmentation** placement.

The capability is the same; the scaffolding around it is different. A generative placement inside a regulated decision (producing the loan denial letter) carries obligations a standalone generative use (drafting marketing copy) does not. The method is what tells you what those obligations are, where in the system they sit, and who owns them.

## 2.4 Why this chapter earns its space

Most AI books collapse the five modes and try to sell one framework for all of them. The result is an uncomfortable fit in both directions. A reader who wants better marketing copy gets dragged through governance theatre that does not apply to them. A reader who needs to deploy a triage model gets advice about prompt styling for creative use. Neither is served.

So the book draws the line here, in the second chapter, before the method runs. The first four modes are legitimate. They do not need this method, and this method is not written for them. The fifth mode — problem-solving inside an organisation, where the operator and the affected party are different people — is where every page from [Chapter 3](ch-3.md) onwards is aimed. If the problem in front of you is a mode-one-to-four problem, the book's second-best offering is this: enjoy the tool, skip to [the atlas](ch-8.md), pick what fits, and get on with it.

Next: the method.
