# Toolkit — Time-and-motion records

*Gate: G3 Route (Q1 operational observation). Category: observation substrate.*

## What problem it solves

A piece that the engagement proposes to route to AI has to have a measurable *before* — how long each step takes today, how often each occurs, what the distribution of durations looks like. Without the records, any after-comparison is an aspiration, not a measurement. Time-and-motion records produce the baseline durations that later gates evaluate against, and often reveal that the step everyone thought was slow is not the one costing the time.

## How it is used

A **longitudinal trial in operations**, typically 1–3 weeks of stopwatch records across multiple operators and conditions. Not every step gets timed; the team agrees on which steps to sample based on the issue-tree leaves or fishbone top candidates. The record is produced as a CSV of timestamped events, with operator, shift, condition, and duration columns. A summary report follows with distributions and comparisons.

## Inputs

- The decomposition (issue tree or fishbone) — names which steps to time.
- Consent and scheduling with operators.
- A timing substrate — stopwatch, timestamped logs from existing systems, or (where already reliable) radio-log timestamps.
- A CSV template with columns agreed by the engagement team.

## Outputs

- **CSV records** — one row per timed event.
- **Duration distributions** per step, per operator class, per condition.
- A **comparison** where relevant: before vs. after a known change, or step X vs. step Y, or high-volume day vs. low-volume day.
- A **flagged surprise list**: steps that were expected to be slow but weren't, or vice versa.

## Visualisation

<div style="max-width: 900px; margin: 2rem auto;">
<svg viewBox="0 0 800 290" xmlns="http://www.w3.org/2000/svg" role="img" aria-labelledby="tm-title">
  <title id="tm-title">Time-and-motion records — duration distributions shown as stacked box plots per step</title>
  <style>
    .tm-rect { fill: var(--md-default-bg-color, #fff); stroke: var(--md-default-fg-color, #000); stroke-width: 1.4; }
    .tm-fill { fill: var(--md-default-fg-color, #000); opacity: 0.15; stroke: var(--md-default-fg-color, #000); stroke-width: 1.4; }
    .tm-line { stroke: var(--md-default-fg-color, #000); stroke-width: 1.4; fill: none; }
    .tm-thin { stroke: var(--md-default-fg-color, #000); stroke-width: 1; fill: none; }
    .tm-label { font: 700 12px -apple-system, sans-serif; fill: var(--md-default-fg-color, #000); }
    .tm-sub { font: 400 10px -apple-system, sans-serif; fill: var(--md-default-fg-color, #000); }
    .tm-ax { font: 700 11px -apple-system, sans-serif; fill: var(--md-default-fg-color, #000); }
    .tm-tag { font: italic 10px -apple-system, sans-serif; fill: var(--md-default-fg-color, #000); text-anchor: middle; opacity: 0.8; }
  </style>
  <line class="tm-line" x1="140" y1="30" x2="140" y2="240" />
  <line class="tm-line" x1="140" y1="240" x2="760" y2="240" />
  <text class="tm-ax" x="80" y="130">Step</text>
  <text class="tm-ax" x="400" y="270" text-anchor="middle">Duration (seconds) →</text>
  <text class="tm-sub" x="140" y="265">0</text>
  <text class="tm-sub" x="295" y="265">200</text>
  <text class="tm-sub" x="450" y="265">400</text>
  <text class="tm-sub" x="605" y="265">600</text>
  <text class="tm-sub" x="760" y="265">800</text>
  <text class="tm-sub" x="60" y="65">radio check-in</text>
  <line class="tm-thin" x1="150" y1="65" x2="200" y2="65" />
  <rect class="tm-fill" x="160" y="55" width="30" height="20" />
  <line class="tm-line" x1="175" y1="55" x2="175" y2="75" />
  <text class="tm-sub" x="60" y="110">slot assign</text>
  <line class="tm-thin" x1="150" y1="110" x2="290" y2="110" />
  <rect class="tm-fill" x="180" y="100" width="85" height="20" />
  <line class="tm-line" x1="220" y1="100" x2="220" y2="120" />
  <text class="tm-sub" x="60" y="155">reassignment</text>
  <line class="tm-thin" x1="150" y1="155" x2="550" y2="155" />
  <rect class="tm-fill" x="230" y="145" width="240" height="20" />
  <line class="tm-line" x1="330" y1="145" x2="330" y2="165" />
  <text class="tm-sub" x="60" y="200">priority arb.</text>
  <line class="tm-thin" x1="150" y1="200" x2="720" y2="200" />
  <rect class="tm-fill" x="270" y="190" width="340" height="20" />
  <line class="tm-line" x1="420" y1="190" x2="420" y2="210" />
  <text class="tm-tag" x="400" y="285">Box = IQR; inner line = median; whisker = range. Reassignment and priority arbitration carry the long tail.</text>
</svg>
</div>

*Four steps, box-and-whisker distributions side by side. The long tails — reassignment and priority arbitration — are where the engagement's time has gone, which was not necessarily the team's prior assumption.*

## Anatomy

**Sampling frame.** Which steps get timed, with what replication, over what window. Sampling is always partial — the frame names the intended coverage (operator classes, shifts, conditions) so the subsequent distribution claims carry weight.

**Records.** Timestamped rows: *step, start, end, operator, shift, condition, notes.* Plain-CSV form. Notes are rare and only for anomalies (*driver argued; step took 380s where median is 120s*).

**Distributions.** Median, IQR, range, plus the top 1–2 outliers with their notes. Means are reported only when the distribution is roughly symmetric; for skewed distributions (most operational step timings), medians and IQRs dominate.

**Comparisons.** *Step X on busy days vs. quiet days. Operator class A vs. class B. Before-change vs. after-change.* These are what the records exist to support at G3.

**Surprise list.** Steps whose timing diverged from the team's expectation. These are among the most valuable outputs of the exercise — they tell the engagement where its mental model is wrong.

## Example

??? example "Paper trail — two-week freight-yard time-and-motion"
    *G3 Q1 timing exercise, two weeks (W3–W4 of 2026-04). Observer: Priya. Sampling frame: four steps (radio check-in, slot assign, reassignment, priority arbitration) across 12 shifts, 4 operators.*

    *W3 day 1.* Priya sets up timestamped observations; 47 events captured. Radio check-ins cluster tightly (median 38s, IQR 32–45s). Slot-assign median 142s. Reassignment median 320s, IQR 180–520s. Priority arbitration median 420s, IQR 270–640s. Spread is high for reassignment and priority.

    *W3 day 4 — volume day.* Priya captures a busy Thursday. 68 events. Reassignments surge (median 360s, IQR 220–680s). The IQR stretches. Priority arbitration does not change much (different queue, same process).

    *W4 debrief with Raj.* Raj: *"I expected slot-assign to be the slow step."* Priya: *"the median is two and a half minutes; most of the time we're worried about is going to reassignment and priority."* Surprise recorded: *slot-assign was the team's assumed bottleneck; it is not. Reassignment and priority carry the tail.*

    *Comparison — by operator tenure.* The records include operator ID. Priya groups by tenure: >12 months median reassignment 260s; <6 months median 420s. Difference is in the tail, not the central mass. A training hypothesis is possible; not yet confirmed.

    *Summary report.* Two weeks, 430 timed events, four steps. Distributions shared with the G2 team. The fishbone's *training turnover* branch is strengthened by the tenure comparison; the *slot-assign* branch is weakened (the step is fast). The issue tree leaves are reordered; *reassignment churn* gains priority.

## Pitfalls

**Timing everything.** The records bloat, the operators tire of being watched, the distributions are noisy. Sample the steps that matter, per the decomposition.

**Treating means as summaries.** Operational timings are almost always right-skewed. A mean hides the tail; a median and IQR describe the distribution. Report both only when the engagement's audience insists on means.

**One-operator timing.** The operator's style colours the distribution. Minimum replication: two operators per step, spread across conditions.

**Observer effect.** Operators work differently when timed. First-day records are usually 10–20% slower than post-habituation. Discard the first day or explicitly note the effect.

**Timing without the step definitions.** *"Reassignment"* meant something slightly different to the three operators sampled. Agree on step boundaries before timing starts; record boundary conditions in the CSV.

**Stopping at central tendency.** The tail is where the engagement's value usually lives. Report the 90th and 99th percentiles and inspect the outliers individually.

## When not to use

- Pieces whose timing is not part of the engagement's question (pure correctness, pure judgement).
- Fully automated pipelines — use log-based timing from the pipeline's own instrumentation.
- Engagements where timing exercises would imply performance surveillance under union agreements that prohibit them. Check policy before starting.

## Provenance

Time-and-motion study has a long engineering tradition, documented in Taylor's *Principles of Scientific Management* [1] and Gilbreth's motion studies [2]. The technique's modern-industrial-engineering form is treated in Niebel [3]. Critical treatments of time-study as surveillance, and guidance on avoiding surveillance-as-measurement, are developed in Wright and Wu [4].

## Related tools

- **Operator shadowing.** The qualitative sibling; shadowing tells you what happened, time-and-motion records tell you how often and how long.
- **Value-stream mapping.** Uses time-and-motion data to quantify each step of the flow.
- **SIPOC.** Sometimes drawn after time-and-motion to name the gateways between steps.

## Verification

[1] Taylor FW. *The Principles of Scientific Management*. Harper & Brothers; 1911. **[verified]** The foundational treatment of time study in industrial engineering.

[2] Gilbreth FB, Gilbreth LM. *Applied Motion Study: A Collection of Papers on the Efficient Method to Industrial Preparedness*. Sturgis & Walton; 1917. **[verified]** The foundational motion-study treatment.

[3] Freivalds A, Niebel B. *Niebel's Methods, Standards, and Work Design*. 13th ed. McGraw-Hill; 2014. **[verified]** The modern industrial-engineering handbook treatment.

[4] Wright EO, Wu Y. Worker responses to workplace change: the role of work councils. *Industrial Relations*. 2003;42(2):250–82. **[secondary]** Critical treatment of time-study as workplace surveillance.
