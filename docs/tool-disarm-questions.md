# Six questions to disarm an AI proposal in 15 minutes

*Gate: Tier 0. Category: conversation tool, not an engagement artefact.*

Someone in your organisation is insisting on an AI solution. The pilot is half-sold, the vendor deck is polished, and you have fifteen minutes before the meeting ends. This is a conversation tool, not a Tier 0 engagement. It gives you six questions, phrased for the hallway, a coffee queue, or the last ten minutes of a standup. The point is to find whether a real case for AI exists — or whether the proposal is technology looking for a problem, something that should never be automated at all, something with no apparatus around it, or something with no owner. It is inspired by the book's Tier 0 refusals and parts of G3 and G5, but it is not a substitute for the method. If the six questions reveal a case, run Tier 0 properly. If they don't, the conversation is already over, and the honest thing is to say so before the pilot calendar fills in. You are not being obstructive. You are saving six months.

## The questions

### 1. If AI were off the table tomorrow, what problem would we still be left with?

*What it probes.* Technochauvinism [Broussard, 2018] — the remove-AI rehearsal. Is this a technical problem, or is it a process, ownership, or measurement problem that has been renamed?

*What a good answer sounds like.* A specific problem remains, and the person can describe it without mentioning a model. "We'd still have 400 claims a day and no way to triage them." The AI is one candidate answer to a problem that exists without it.

*What a disarmed proposal sounds like.* A shrug, a pivot to the vendor demo, or a restatement that assumes AI. "Well, then we wouldn't be modern." The problem only exists because the tool exists.

*Budget: ~2 to 2.5 minutes.*

### 2. What exact decision are we asking AI to take, and who gets hurt when it's wrong?

*What it probes.* Specificity of the decision and blast radius. Forces a pinpoint — not "a product", a decision — and names the affected party.

*What a good answer sounds like.* A named decision, a named affected population, and a rough feel for what going wrong looks like. "The model approves or declines a claim under £500. The customer waits longer or is wrongly declined. Roughly 30 a day."

*What a disarmed proposal sounds like.* Abstractions. "It'll help the team." "It'll surface insights." No affected party, no failure mode, no number. The decision hasn't been located yet.

*Budget: ~2.5 minutes.*

### 3. If the system worked perfectly, would deploying it still be wrong?

*What it probes.* The abolition test [McQuillan, 2022]. Separates capability objections from categorical ones — dignitary harm, irreversibility, coercion, due process. Sometimes the honest answer is yes, even if the accuracy is flawless.

*What a good answer sounds like.* The person pauses, actually considers the axes, and can say why not. "No — the decision is reversible, the affected party has recourse, and we're not substituting machine judgement where a human owes an account."

*What a disarmed proposal sounds like.* The question is treated as nonsensical. "If it worked, why would it be wrong?" The categorical frame has never been tested, and the proposal is not ready for it.

*Budget: ~2 minutes.*

### 4. What audit, rollback, or review apparatus are we committing to before launch?

*What it probes.* G3 controls. If there is no answer, the controls haven't been drawn yet, and "we'll figure it out in production" is the real plan.

*What a good answer sounds like.* Concrete named mechanisms. "Weekly audit sample of 50 decisions, rollback trigger if error rate crosses 3%, quarterly review by the risk committee." Dates and owners are implied.

*What a disarmed proposal sounds like.* Generalities. "We'll monitor it." "There will be dashboards." No triggers, no cadence, no named apparatus. Controls are an afterthought, not a precondition.

*Budget: ~2.5 minutes.*

### 5. Who is named on the page that says "I own this system in production"?

*What it probes.* G5 named-owner discipline. If no person is named, the system has no one to call when it goes wrong at 2am, and G5 can't close.

*What a good answer sounds like.* A name. A real person, not a team. "Priya owns it. Escalation to the head of operations if she's out." The person has agreed, not been volunteered.

*What a disarmed proposal sounds like.* A team, a function, a vendor, or silence. "The data team will handle it." "The vendor supports it." Ownership dissolves on contact with failure.

*Budget: ~2 minutes.*

### 6. What would have to be true for us to switch this off?

*What it probes.* Sunset criterion. If there is no answer, retirement is not pre-committed, and the system will be kept alive by inertia long after it stops serving.

*What a good answer sounds like.* A threshold, a condition, or a review point the person can describe. "If approval accuracy drops below 92% for two consecutive quarters, or if the underlying policy changes, we sunset it." Switching off is a considered outcome, not a failure.

*What a disarmed proposal sounds like.* The question feels unfair. "Why would we switch it off?" Sunset has not been imagined, and the proposal is open-ended — which means it cannot be committed to, because committing requires knowing when to stop.

*Budget: ~2 minutes.*

## Reading the answers

Count the questions that have a plausible answer. Three signals emerge from the six.

**All six survive.** The proposal has a specific problem, a located decision, a categorical clearance, a control apparatus, a named owner, and a sunset. It is worth running Tier 0 properly, because the ground under it is stable. The method's chapters on Tier 0 and G3 pick up from here.

**One or two fail.** A specific repair is needed before the method proper. Missing controls can be drawn; a missing owner can be named; a missing sunset can be chosen. The proposal is not disarmed — it is underspecified. Send the sponsor back to those one or two questions with a week to answer them, and re-meet.

**Three or more fail.** The proposal is disarmed. The honest next step is to say so, calmly, in writing, with the failed questions listed. This is not a refusal of the sponsor; it is a refusal of the proposal in its current form. If the underlying problem is real — Question 1 survived — the sponsor can come back with a non-AI route, a scoped pilot, or a repaired brief. If Question 1 did not survive, there is no problem to solve with AI, and the fifteen minutes has done its job.

Escalate when the sponsor insists despite three failed questions. Walk when the proposal reappears unchanged a month later. Bring the book's full chapters in only once the proposal survives the six — the method is expensive, and it is not the tool for disarming something that should never have been on the calendar.
