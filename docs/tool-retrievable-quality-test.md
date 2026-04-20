# Toolkit — Retrievable quality test

*Gate: G3 Route (level-picking). Category: routing substrate.*

## What problem it solves

RAG pieces can fail in two independent ways: the retrieval returns the wrong documents, or the generation produces a bad answer from good documents. The retrieval failure is the one teams consistently under-test. A RAG piece that retrieves noise and generates plausibly from that noise looks like it's working — the answers are fluent, the format is right, and the failure mode is *subtle wrongness*. The retrievable-quality test is the discipline that forces the retrieval layer to be evaluated separately from generation, before either is committed to. It answers: *given this corpus and this query distribution, does retrieval surface the information the answer needs?*

## How it is used

A **2–5 day analytical exercise** during G3 level-picking, after the adaptation decision tree has routed a piece to RAG or RAG-or-above. A sample of realistic queries (50-200) is hand-annotated with *which documents in the corpus contain the answer*. The retrieval layer is then run against these queries and its output is scored — recall@k, precision@k — against the hand-annotated ground truth. A floor is set: retrieval must clear it before the piece proceeds.

## Inputs

- A corpus the piece will retrieve from.
- A chosen retrieval mechanism (embedding + vector DB, BM25, hybrid, reranker).
- A sample of realistic queries — ideally from the piece's actual expected query distribution.
- Domain experts to annotate which corpus documents contain each query's answer.

## Outputs

- A **retrieval quality score** — recall@k, precision@k, NDCG — against hand-annotated ground truth.
- A **failure-mode catalogue** — queries where retrieval failed, and what the failure was (lexical mismatch, semantic drift, missing documents, stale content).
- A **go/no-go for RAG routing**: if retrieval clears the floor, RAG proceeds; if not, the piece must either change its corpus / retrieval approach or reroute (e.g., rules with lookup tables for structured queries).

## Visualisation

<div style="max-width: 900px; margin: 2rem auto;">
<svg viewBox="0 0 800 280" xmlns="http://www.w3.org/2000/svg" role="img" aria-labelledby="rq-title">
  <title id="rq-title">Retrievable quality test — query set annotated with ground truth, retrieval scored, generation only if retrieval passes</title>
  <style>
    .rq-rect { fill: var(--md-default-bg-color, #fff); stroke: var(--md-default-fg-color, #000); stroke-width: 1.4; }
    .rq-pass { fill: var(--md-default-fg-color, #000); opacity: 0.08; stroke: var(--md-default-fg-color, #000); stroke-width: 1.4; }
    .rq-line { stroke: var(--md-default-fg-color, #000); stroke-width: 1.2; fill: none; }
    .rq-thin { stroke: var(--md-default-fg-color, #000); stroke-width: 0.6; fill: none; stroke-dasharray: 3,2; }
    .rq-arrow { fill: var(--md-default-fg-color, #000); }
    .rq-label { font: 700 12px -apple-system, sans-serif; fill: var(--md-default-fg-color, #000); text-anchor: middle; }
    .rq-sub { font: 400 10px -apple-system, sans-serif; fill: var(--md-default-fg-color, #000); text-anchor: middle; }
    .rq-tag { font: italic 10px -apple-system, sans-serif; fill: var(--md-default-fg-color, #000); text-anchor: middle; opacity: 0.8; }
  </style>
  <defs><marker id="rq-a" markerWidth="9" markerHeight="9" refX="8" refY="4.5" orient="auto"><path d="M0,0 L8,4.5 L0,9 z" class="rq-arrow"/></marker></defs>
  <rect class="rq-rect" x="30" y="90" width="140" height="60" />
  <text class="rq-label" x="100" y="115">Query set</text>
  <text class="rq-sub" x="100" y="135">100 realistic queries</text>
  <rect class="rq-rect" x="30" y="170" width="140" height="60" />
  <text class="rq-label" x="100" y="195">Ground truth</text>
  <text class="rq-sub" x="100" y="215">hand-annotated docs</text>
  <rect class="rq-rect" x="210" y="130" width="140" height="60" />
  <text class="rq-label" x="280" y="155">Retriever</text>
  <text class="rq-sub" x="280" y="175">BM25 / embedding / hybrid</text>
  <line class="rq-line" x1="170" y1="120" x2="210" y2="150" marker-end="url(#rq-a)" />
  <line class="rq-line" x1="170" y1="200" x2="210" y2="170" marker-end="url(#rq-a)" />
  <rect class="rq-rect" x="390" y="130" width="160" height="60" />
  <text class="rq-label" x="470" y="155">Scoring</text>
  <text class="rq-sub" x="470" y="175">recall@k, precision@k</text>
  <line class="rq-line" x1="350" y1="160" x2="390" y2="160" marker-end="url(#rq-a)" />
  <rect class="rq-pass" x="590" y="60" width="180" height="60" />
  <text class="rq-label" x="680" y="85">Pass floor</text>
  <text class="rq-sub" x="680" y="105">→ proceed to generation test</text>
  <rect class="rq-rect" x="590" y="200" width="180" height="60" />
  <text class="rq-label" x="680" y="225">Fail floor</text>
  <text class="rq-sub" x="680" y="245">→ fix retrieval or reroute</text>
  <line class="rq-line" x1="550" y1="150" x2="590" y2="95" marker-end="url(#rq-a)" />
  <line class="rq-line" x1="550" y1="170" x2="590" y2="225" marker-end="url(#rq-a)" />
  <text class="rq-tag" x="400" y="270">Retrieval is evaluated in isolation. Generation is only worth testing once retrieval has cleared its floor.</text>
</svg>
</div>

*The retrieval layer is evaluated separately from generation. Only after retrieval clears its pre-declared floor does the piece advance to RAG integration testing.*

## Anatomy

**Query sample.** 50-200 queries drawn from the expected production distribution. Sources: historical support tickets (if the piece is a support assistant), operator log samples, interviewed end-users. A mixed query sample includes short lookups, multi-hop questions, ambiguous queries, and out-of-scope queries.

**Ground truth annotation.** A domain expert marks, per query, which documents in the corpus contain the answer. This is expensive — 3-10 minutes per query — which is why the sample is kept at 100-200, not 10,000. Each query can have zero, one, or multiple ground-truth documents.

**Retrieval metrics.** Recall@k — of the ground-truth documents, what fraction appear in the top-k retrieved. Precision@k — of the top-k retrieved, what fraction are ground-truth. NDCG for rank-sensitive cases. Recall@10 at ≥ 0.90 is a typical floor for knowledge-base RAG; precision varies by use case.

**Failure-mode catalogue.** Categorise the failures. *Lexical mismatch* — query and doc use different terms (solution: synonyms, hybrid retrieval). *Semantic drift* — embedding pulls semantically-related but factually wrong docs (solution: reranker, hybrid). *Missing documents* — the answer isn't in the corpus (solution: expand the corpus). *Stale content* — the corpus has old answers (solution: index-freshness pipeline).

**Generation quality is separate.** This test does *not* test the LLM's generation; that's a separate test once retrieval clears the floor. Passing retrieval but failing generation is a different problem (prompt engineering, model choice, context-window management).

## Example

??? example "Paper trail — retrievable-quality test for the carrier-relationship assistant"
    *G3 level-picking, W14 of 2026. Alex (ML), Amira (account manager, domain expert), Raj (engineering). Piece: carrier-relationship assistant routed to RAG by the adaptation decision tree.*

    *Query sample.* Amira collected 120 real queries she and fellow account managers had asked over the prior six months, covering contract questions (40), history lookups (35), complaint tracking (25), and pricing questions (20).

    *Ground truth.* Amira and another account manager independently annotated each query with corpus documents containing the answer. Disagreement on 18 queries; resolved by discussion. Final: 94 queries with ≥ 1 ground-truth doc; 26 queries with *no* ground-truth doc (out-of-scope queries used to test rejection).

    *Retrieval — first pass.* Pure embedding retrieval against a contract+notes+complaints corpus of ~8k documents.

    - Recall@10 overall: 0.76.
    - Recall@10 on contract questions: 0.91.
    - Recall@10 on history lookups: 0.82.
    - Recall@10 on complaint tracking: 0.58.
    - Recall@10 on pricing questions: 0.61.

    Floor was 0.90 recall@10 overall. Miss by 14 points. Two subgroups (complaints, pricing) particularly bad.

    *Failure-mode catalogue.* Alex hand-inspected the 29 failed queries.

    - 14 are lexical-mismatch: queries use customer nicknames or abbreviations ("ABC") and docs use legal names ("ABC Logistics Co.") — embedding did not bridge.
    - 8 are stale content: the answer was in a doc that had been superseded; the corpus didn't remove the old one.
    - 5 are missing documents: the answer simply isn't in the corpus (call notes that were never written up).
    - 2 are semantic drift: embedding returned semantically-close-but-factually-wrong contracts.

    *Responses.*

    1. Add a BM25 lexical retriever and combine with embedding (hybrid). Fixes the lexical-mismatch class.
    2. Add a doc-superseded flag in the index so stale docs are suppressed.
    3. Accept the missing-document cases — the assistant will respond *"I don't have this information"* to these (generation-side behaviour). Log these cases so account managers know what to escalate.

    *Retrieval — second pass.* Hybrid retrieval + superseded-doc filter. Recall@10 overall: 0.93. Complaint tracking: 0.84. Pricing: 0.91. Passes overall; complaints still below floor.

    *Response.* For complaints specifically, add the complaint ticket-ID metadata as a retrieval filter (pre-filter by ticket-ID where query mentions one). Recall@10 on complaints: 0.93. Passes.

    *Decision.* Retrieval floor cleared. Proceed to generation quality testing. Generation test is a separate exercise (not documented here) using the retrieved documents as context.

    *Paper trail.* The first-pass pure-embedding retrieval would have shipped silently-wrong. Hand-annotated retrieval evaluation caught it before generation was tested, which would have masked the retrieval failure.

## Pitfalls

**Testing retrieval through generation.** Running the full RAG pipeline and judging answer quality confounds retrieval and generation failures. A bad answer might come from good documents + bad generation, or bad documents + good generation. The two must be tested separately first.

**Synthetic queries.** Queries written by engineers to test their own system are too close to the corpus's language. Real user queries are messier — wrong terms, fragments, context the engineer wouldn't have written. Use real queries.

**Skipping out-of-scope queries.** The retriever must not confidently return something when nothing applicable exists. Including 10-20% out-of-scope queries in the test forces this behaviour to be measured.

**Using aggregate scores only.** Like offline evaluation, a 0.85 aggregate with a 0.50 subgroup is a failure mode the aggregate hides. Subgroup recall@k is required.

**Inter-annotator disagreement swept under.** If domain experts disagree on ground truth, the retriever's ceiling is bounded by that disagreement. Measuring and declaring it up front prevents disputes later.

**Not rechecking after corpus changes.** Corpus changes — new documents, removed documents, reorganisation — invalidate the test. Retrieval quality must be re-measured after meaningful corpus churn; this goes into the review-cadence matrix.

## When not to use

- Pieces not routed to RAG-or-above (classical ML, rules, prompting-only). No retrieval layer to test.
- Pieces where the corpus is tiny (< 50 documents) and retrieval is trivial; pass all relevant docs into context. The test exists to distinguish signal from noise, which isn't the problem at small scale.
- Pieces using fully structured lookup (SQL, knowledge-graph query) rather than semantic retrieval. A different discipline applies — query-coverage testing.

## Provenance

Information-retrieval evaluation methodology is documented in Manning, Raghavan, and Schütze's *Introduction to Information Retrieval* [1]. Retrieval-quality evaluation specific to RAG is treated in Lewis et al.'s foundational RAG paper [2] and in emerging practitioner literature such as Asai et al.'s *Retrieval-based Language Models* tutorial [3].

## Related tools

- **Adaptation decision tree.** Upstream; routes pieces to RAG where this test applies.
- **Offline evaluation.** The generation-side counterpart; follows retrieval-quality test.
- **Review-cadence matrix (G5).** Re-runs of retrieval-quality test are scheduled here when the corpus churns.

## Verification

[1] Manning CD, Raghavan P, Schütze H. *Introduction to Information Retrieval*. Cambridge University Press; 2008. **[verified]** Standard IR evaluation methodology.

[2] Lewis P, Perez E, Piktus A, et al. Retrieval-augmented generation for knowledge-intensive NLP tasks. *NeurIPS*. 2020. **[verified]** Foundational RAG paper, treats retrieval quality separately.

[3] Asai A, Min S, Zhong Z, Chen D. ACL 2023 tutorial on retrieval-based language models and applications. 2023. **[verified]** Practitioner treatment of RAG evaluation.
