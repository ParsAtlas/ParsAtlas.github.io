# SWE-bench Verified

SWE-bench Verified leaderboard for coding agents resolving 500 human-filtered real GitHub issues with Docker-based test execution.

Canonical URL: https://leaderboard.steel.dev/leaderboards/swe-bench-verified/
Category: Coding
Scope: model
Last updated: 2026-05-28

About:
- SWE-bench Verified is the 500-instance human-reviewed split of SWE-bench, built from real GitHub issues in popular Python repositories. Agents receive an issue and repository state, then generate a patch.
- It became the standard public signal for autonomous coding agents because scoring uses actual test execution rather than preference judgments or synthetic unit tests.
- The benchmark is now mature and heavily exposed in public training data. Recent audits argue that top frontier scores should be interpreted with contamination and test-design caveats, especially when comparing very high-scoring systems.

Methodology:
- Metric is % Resolved: the share of instances where the generated patch passes the benchmark tests after being applied in the evaluation harness.
- SWE-bench uses containerized execution to improve reproducibility, though environment details, tool permissions, time limits, and scaffold design still matter.
- Verified was curated by expert review from the larger SWE-bench set, but later audits found remaining flawed or underspecified tests at high performance levels.
- We retain Verified because it is widely reported, while linking to source notes so readers can distinguish official leaderboard entries from launch-post claims.

Example evaluation tasks:
- "Subclassed SkyCoord gives misleading attribute access message" (citation: SWE-bench Verified dataset, https://huggingface.co/datasets/princeton-nlp/SWE-bench_Verified)
- "Please support header rows in RestructuredText output" (citation: SWE-bench Verified dataset, https://huggingface.co/datasets/princeton-nlp/SWE-bench_Verified)
- "IndexError: tuple index out of range in identify_format (io.registry)" (citation: SWE-bench Verified dataset, https://huggingface.co/datasets/princeton-nlp/SWE-bench_Verified)

Interpretation notes:
- Strong at measuring public issue-resolution workflows; weaker as a frontier-only signal once scores approach saturation or contamination dominates.

Canonical links:
- SWE-bench leaderboard: https://www.swebench.com/
- SWE-bench repository: https://github.com/princeton-nlp/SWE-bench
- SWE-bench Verified announcement: https://openai.com/index/introducing-swe-bench-verified/
- OpenAI limitations analysis: https://openai.com/index/why-we-no-longer-evaluate-swe-bench-verified/

| Rank | System | Score | Organization | Notes | Source | Repo |
|------|--------|-------|--------------|-------|--------|------|
| 1 | Claude Mythos 5 | 95.5% | Anthropic | Averaged over 5 trials in standard configuration (adaptive thinking at max effort, thinking blocks included in sampling). Self-reported in the Claude 5 system card. | https://www-cdn.anthropic.com/d00db56fa754a1b115b6dd7cb2e3c342ee809620.pdf | — |
| 2 | Claude Fable 5 | 95.0% | Anthropic | Generally available sibling of Mythos 5; averaged over 5 trials in standard configuration. Self-reported in the Claude 5 system card. | https://www-cdn.anthropic.com/d00db56fa754a1b115b6dd7cb2e3c342ee809620.pdf | — |
| 3 | Claude Mythos Preview | 93.9% | Anthropic | Utilizes Mythos reasoning loops to reach near-human resolution on verified tasks. | https://www.mindstudio.ai/blog/claude-mythos-benchmark-results-swe-bench-agentic-coding | — |
| 4 | Claude Opus 4.8 | 88.6% | Anthropic | Anthropic's May 2026 frontier release; standard configuration with thinking blocks included. Self-reported in the Opus 4.8 system card. | https://www.anthropic.com/news/claude-opus-4-8 | — |
| 5 | Claude Opus 4.7 | 87.6% | Anthropic | Anthropic's April 2026 frontier release; optimized for long-context codebase understanding. | https://www.anthropic.com/news/claude-opus-4-7 | — |
| 6 | Claude Opus 4.5 | 80.9% | Anthropic | Self-reported on the official leaderboard; high-throughput frontier model. | https://www.anthropic.com/news/claude-opus-4-5 | — |
| 7 | Claude Opus 4.6 | 80.8% | Anthropic | Self-reported by Anthropic; near-parity with Opus 4.5. | https://www.anthropic.com/news/claude-opus-4-6 | — |
| 8 | DeepSeek-V4-Pro-Max | 80.6% | DeepSeek | Large-scale MoE model with specialized coding reinforcement learning. | https://huggingface.co/deepseek-ai/DeepSeek-V4-Pro/ | — |
| 8 | Gemini 3.1 Pro | 80.6% | Google DeepMind | Self-reported by Google DeepMind at Gemini 3.1 Pro launch, February 2026. | https://deepmind.google/models/gemini/pro/ | — |
| 10 | Kimi K2.6 | 80.2% | Moonshot AI | Advanced reasoning model with integrated terminal and editor tools. | https://www.kimi.com/blog/kimi-k2-6 | — |
| 10 | MiniMax M2.5 | 80.2% | MiniMax | Leading open-weight model on the official leaderboard. | https://www.minimax.io/news/minimax-m25 | — |
| 12 | GPT-5.2 | 80.0% | OpenAI | Self-reported by OpenAI on the official leaderboard. | https://openai.com/index/introducing-gpt-5-2/ | — |
| 13 | Claude Sonnet 4.6 | 79.6% | Anthropic | Self-reported; high efficiency with frontier-class coding performance. | https://www.anthropic.com/news/claude-sonnet-4-6 | — |
| 14 | DeepSeek-V4-Flash-Max | 79.0% | DeepSeek | SWE-bench Verified resolve rate; reported on huggingface.co. | https://huggingface.co/deepseek-ai/DeepSeek-V4-Flash | — |
| 15 | Qwen3.6 Plus | 78.8% | Alibaba Cloud / Qwen Team | SWE-bench Verified resolve rate; reported on qwen.ai. | https://qwen.ai/blog?id=qwen3.6 | — |
| 16 | Gemini 3 Flash | 78.0% | Google DeepMind | SWE-bench Verified resolve rate; reported on blog.google. | https://blog.google/products/gemini/gemini-3-flash/ | — |
| 16 | MiMo-V2-Pro | 78.0% | Xiaomi | SWE-bench Verified resolve rate; reported on mimo.xiaomi.com. | https://mimo.xiaomi.com/mimo-v2-pro | — |
| 18 | GLM-5 | 77.8% | Zhipu AI | SWE-bench Verified resolve rate; reported on docs.z.ai. | https://docs.z.ai/guides/llm/glm-5 | — |

FAQ:
- Q: Which system is currently best on SWE-bench Verified?
  A: Claude Mythos 5 is the model currently leading with a tracked score of 95.5%. This page is model-focused, so rankings mostly reflect model capability under the reported harness. Based on our latest tracked results, last updated May 28, 2026.
- Q: What should I read into a SWE-bench Verified score?
  A: SWE-bench Verified scores are most useful for within-benchmark ranking. Read the Notes column to understand setup context, and use the methodology section before making procurement or architecture decisions.
- Q: Are these independently verified?
  A: Not always. Some rows are independently benchmarked and some are team-reported. Use each source link and notes field to verify evidence level before drawing strong conclusions.
