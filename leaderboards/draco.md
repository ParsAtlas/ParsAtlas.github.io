# DRACO

DRACO leaderboard for deep research systems on Perplexity's benchmark: 100 expert-graded research tasks across 10 domains, with sourced scores and notes on the grading judge.

Canonical URL: https://leaderboard.steel.dev/leaderboards/draco/
Category: Research/search
Scope: mixed
Last updated: 2026-06-23

About:
- DRACO (Deep Research Accuracy, Completeness, and Objectivity) is Perplexity's benchmark for deep research systems: 100 open-ended tasks across 10 domains, sourced from real Perplexity Deep Research traffic and graded against expert rubrics on accuracy, completeness, presentation, and citation.
- Unlike short-answer benchmarks such as BrowseComp, DRACO grades full research reports, so it rewards synthesis, citation quality, and presentation, not just finding the answer. It is the closest public measure of how well a system writes a real research report.
- Read each row as a whole system: the agent or harness, the base model, and the grading judge all shape the number. Here the judge matters most, so the methodology is part of the ranking, not a footnote.

Methodology:
- The headline metric is the normalized score (0–100%): each rubric criterion gets a binary MET/UNMET verdict from an LLM judge, aggregated by weight into a per-task score and averaged across 100 tasks. An unweighted pass rate is a secondary metric.
- The judge is the dominant variable. The paper used Gemini-3-Pro (now unavailable); Anthropic finds that swapping judges shifts absolute scores 10–25 points while preserving order. Three judges appear here: Claude Opus 4.6 (Anthropic, MiniMax), Gemini 3.1 Pro Preview (OpenRouter's Fable 5 row), and Gemini-3-Pro (the paper). Compare only within the same judge.
- Rows are vendor self-evaluations under a shared judge. Anthropic grades its own models at max effort with a ~1M-token budget, compaction, and five grading runs of the final report; MiniMax grades M3 through its internal harness. Treat each as self-reported.
- Each judge is a separate ladder, so don't compare rank gaps across them. The same model shows it: Opus 4.8 scores 80.4% under Anthropic's Opus 4.6 judge and 58.8% under OpenRouter's Gemini 3.1 Pro Preview judge.

Example evaluation tasks:
- "In 2008, Longwood Gardens opened "Nature's Castles: The Treehouse Reimagined" featuring three treehouse structures. Can you find the name of the architectural firm or designer who created these treehouses, and locate a contemporaneous source (2008 or earlier) that describes the design concept and construction process?" (citation: DRACO paper, augmented task example, https://arxiv.org/abs/2602.11685)
- "Define an independent director under the NASDAQ listing standards. List the eligibility criteria (who qualifies) and disqualification criteria (who cannot serve). Which types of companies are required to have independent directors on their board?" (citation: DRACO paper, augmented task example, https://arxiv.org/abs/2602.11685)
- "Document the global expansion and local resistance to industrial agriculture mega-farms, comparing case studies from Ukraine's massive grain operations, Brazilian cerrado soy plantations, Saudi Arabia's desert farming investments in Arizona and California, and Chinese pork production facilities." (citation: DRACO paper, augmented task example, https://arxiv.org/abs/2602.11685)

Interpretation notes:
- Three judges, one table. Rows are graded by Claude Opus 4.6 (Anthropic, MiniMax), Gemini 3.1 Pro Preview (OpenRouter), or Gemini-3-Pro (the paper). Judge methodology varies, and judge choice shifts absolute scores 10–25 points, so read each row's note before comparing.
- Vendor self-reported under a common judge. The top rows are Anthropic models graded by an Anthropic judge, and DRACO was authored by Perplexity, so each regime favors its originator. Expect levels to move as more evaluators adopt the Opus 4.6 judge.
- Mixed scope: rows mix full deep-research agents (Perplexity, MiniMax) with standard models plus tools (Claude Opus 4.6 and 4.5 in the paper). Compare within a setup class before reading a rank gap as capability.

Canonical links:
- DRACO paper: https://arxiv.org/abs/2602.11685
- DRACO dataset (Hugging Face): https://hf.co/datasets/perplexity-ai/draco
- Perplexity DRACO research article: https://research.perplexity.ai/articles/evaluating-deep-research-performance-in-the-wild-with-the-draco-benchmark
- Claude Opus 4.8 System Card (DRACO section): https://www-cdn.anthropic.com/0f0c97ad20d8005706296bd92aa1c27c6b2f4f61/Claude%20Opus%204.8%20System%20Card.pdf
- Claude Opus 4.7 System Card (DRACO section): https://www-cdn.anthropic.com/037f06850df7fbe871e206dad004c3db5fd50340/Claude%20Opus%204.7%20System%20Card.pdf
- MiniMax M3 launch post: https://www.minimax.io/blog/minimax-m3
- OpenRouter Fusion DRACO evaluation: https://openrouter.ai/blog/announcements/fusion-beats-frontier/

| Rank | System | Score | Organization | Notes | Source | Repo |
|------|--------|-------|--------------|-------|--------|------|
| 1 | Claude Mythos 5 | 86.4% | Anthropic | Opus 4.6 judge; Anthropic self-eval at max adaptive-thinking effort, ~1M-token budget, no compaction, 5 grading runs. Top tracked result. | https://www.anthropic.com/claude-fable-5-mythos-5-system-card | — |
| 2 | Claude Mythos Preview | 83.6% | Anthropic | Opus 4.6 judge; Anthropic self-eval at max adaptive-thinking effort, same protocol as the Mythos 5 row. | https://www.anthropic.com/claude-fable-5-mythos-5-system-card | — |
| 3 | Claude Opus 4.8 | 80.4% | Anthropic | Opus 4.6 judge; Anthropic self-eval at max effort with a 1M-token budget and compaction at 200k, 5 grading runs. The Mythos-5 card reports 80.6% without compaction. | https://www-cdn.anthropic.com/0f0c97ad20d8005706296bd92aa1c27c6b2f4f61/Claude%20Opus%204.8%20System%20Card.pdf | — |
| 4 | Claude Opus 4.7 | 77.7% | Anthropic | Opus 4.6 judge; Anthropic self-eval at max effort with compaction at 200k, 5 grading runs. A strict improvement over Opus 4.6 on DRACO. | https://www-cdn.anthropic.com/037f06850df7fbe871e206dad004c3db5fd50340/Claude%20Opus%204.7%20System%20Card.pdf | — |
| 5 | MiniMax M3 | 73.23% | MiniMax | Opus 4.6 judge; MiniMax self-eval via its internal Deep Research harness (MiniMax Code), score averaged across questions. | https://www.minimax.io/blog/minimax-m3 | — |
| 6 | Perplexity Deep Research (Opus 4.6) | 70.5% | Perplexity | Gemini-3-Pro judge (paper). Deep-research agent; Perplexity's own result on the benchmark it authored, top of the paper's table. | https://arxiv.org/abs/2602.11685 | — |
| 7 | Perplexity Deep Research (Opus 4.5) | 67.2% | Perplexity | Gemini-3-Pro judge (paper). Older base-model variant of Perplexity Deep Research. | https://arxiv.org/abs/2602.11685 | — |
| 8 | Claude Fable 5 | 65.3% | Anthropic | OpenRouter eval, Gemini 3.1 Pro Preview judge (a third, stricter scale, not comparable to the Opus 4.6 or Gemini-3-Pro rows); top solo model in OpenRouter's panel, on 93/100 tasks (7 blocked by Fable 5 content filters). | https://openrouter.ai/blog/announcements/fusion-beats-frontier/ | — |
| 9 | Claude Opus 4.6 | 59.8% | Anthropic | Gemini-3-Pro judge (paper). Standard model + web search + code execution, not a deep-research agent; the same model that is the judge for the rows above. | https://arxiv.org/abs/2602.11685 | — |
| 10 | Gemini Deep Research | 59.0% | Google | Gemini-3-Pro judge (paper). Google's deep-research agent. | https://arxiv.org/abs/2602.11685 | — |
| 11 | OpenAI Deep Research (o3) | 52.1% | OpenAI | Gemini-3-Pro judge (paper). OpenAI's o3 deep-research agent. | https://arxiv.org/abs/2602.11685 | — |
| 12 | Claude Opus 4.5 | 46.7% | Anthropic | Gemini-3-Pro judge (paper). Standard model + web search + code execution, not a deep-research agent. | https://arxiv.org/abs/2602.11685 | — |
| 13 | OpenAI Deep Research (o4-mini) | 41.9% | OpenAI | Gemini-3-Pro judge (paper). OpenAI's most token-efficient deep-research agent. | https://arxiv.org/abs/2602.11685 | — |

FAQ:
- Q: Which system is currently best on DRACO?
  A: Claude Mythos 5 is the system/agent setup currently leading with a tracked score of 86.4%. This ranking reflects submitted system setups (model plus tools and policy), not just a base model. Based on our latest tracked results, last updated Jun 23, 2026.
- Q: What should I read into a DRACO score?
  A: DRACO scores are most useful for within-benchmark ranking. Read the Notes column to understand setup context, and use the methodology section before making procurement or architecture decisions.
- Q: Can I compare model-only and agent-with-tools rows directly?
  A: Not directly. Mixed pages can combine model-centric and full-system submissions. Treat those comparisons as directional unless evaluation setup and tool policy are explicitly aligned.
