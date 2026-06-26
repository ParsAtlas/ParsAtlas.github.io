# Aider

Aider leaderboard ranking LLMs on the Aider Polyglot benchmark: 225 of the hardest Exercism exercises across C++, Go, Java, JavaScript, Python, and Rust, scored inside Aider's real edit loop.

Canonical URL: https://leaderboard.steel.dev/leaderboards/aider/
Category: Coding
Scope: model
Last updated: 2026-06-08

About:
- Aider Polyglot is the coding benchmark behind the Aider pair-programming tool. It tests an LLM on 225 of Exercism's hardest exercises (the ones few models could solve on the earlier single-language benchmark) across C++, Go, Java, JavaScript, Python, and Rust.
- Unlike isolated code-generation tests, Polyglot scores the model inside Aider's real edit loop: the model must emit changes in a structured edit format (diff, diff-fenced, whole, or architect) and gets a second attempt with the failing unit-test output if the first attempt fails.
- Because it measures instruction-following and reliable file editing rather than raw synthesis, the leaderboard is a strong practical signal for choosing a model for an autonomous or pair-programming coding assistant, and it reports cost per run alongside accuracy.

Methodology:
- Primary metric is percent correct (pass_rate_2): the share of the 225 exercises where all hidden unit tests pass after the model's second attempt.
- A secondary metric, percent using correct edit format, reports how often the model emitted edits Aider could apply without retry; low edit-format compliance drags down effective accuracy.
- Each model runs with Aider's standard prompting and a per-model edit format; some rows fix a thinking-token budget or reasoning effort, which the leaderboard records in the model label.
- Architect-mode rows pair a planner model with a separate editor model, so they are system results rather than single-model numbers; read the model label before comparing.

Example evaluation tasks:
- "To try and encourage more sales of different books from a popular 5 book series, a bookshop has decided to offer discounts on multiple book purchases." (citation: Aider polyglot benchmark, book-store exercise, https://github.com/Aider-AI/polyglot-benchmark/blob/main/python/exercises/practice/book-store/.docs/instructions.md)
- "Given students' names along with the grade that they are in, create a roster for the school." (citation: Aider polyglot benchmark, grade-school exercise, https://github.com/Aider-AI/polyglot-benchmark/blob/main/python/exercises/practice/grade-school/.docs/instructions.md)
- "Pick the best hand(s) from a list of poker hands." (citation: Aider polyglot benchmark, poker exercise, https://github.com/Aider-AI/polyglot-benchmark/blob/main/python/exercises/practice/poker/.docs/instructions.md)

Interpretation notes:
- Numbers are the official Aider polyglot leaderboard; frontier models released after Aider's last run may be missing until it re-runs them.
- Aider also has an older single-language code-editing leaderboard; this page tracks only the modern Polyglot benchmark, so do not mix scores from the two.
- Architect-mode and planner+editor rows are system results, not single-model numbers; rows with a thinking-token or reasoning-effort label are configuration-specific.

Canonical links:
- Aider polyglot leaderboard: https://aider.chat/docs/leaderboards/
- Polyglot benchmark announcement & methodology: https://aider.chat/2024/12/21/polyglot.html
- Polyglot exercises repository: https://github.com/Aider-AI/polyglot-benchmark
- Aider repository: https://github.com/Aider-AI/aider
- Leaderboard data file (YAML): https://github.com/Aider-AI/aider/blob/main/aider/website/_data/polyglot_leaderboard.yml

| Rank | System | Score | Organization | Notes | Source | Repo |
|------|--------|-------|--------------|-------|--------|------|
| 1 | gpt-5 (high) | 88.0% | OpenAI | Official Aider polyglot leaderboard; diff edit format, 91.6% well-formed edits, ~$29.08 per run. | https://aider.chat/docs/leaderboards/ | — |
| 2 | gpt-5 (medium) | 86.7% | OpenAI | Official Aider polyglot leaderboard; diff edit format, 88.4% well-formed edits, ~$17.69 per run. | https://aider.chat/docs/leaderboards/ | — |
| 3 | o3-pro (high) | 84.9% | OpenAI | Official Aider polyglot leaderboard; diff edit format, 97.8% well-formed edits, ~$146.32 per run. | https://aider.chat/docs/leaderboards/ | — |
| 4 | gemini-2.5-pro-preview-06-05 (32k think) | 83.1% | Google | Official Aider polyglot leaderboard; diff-fenced edit format, 99.6% well-formed edits, ~$49.88 per run. | https://aider.chat/docs/leaderboards/ | — |
| 5 | o3 (high) | 81.3% | OpenAI | Official Aider polyglot leaderboard; diff edit format, 94.7% well-formed edits, ~$21.23 per run. | https://aider.chat/docs/leaderboards/ | — |
| 5 | gpt-5 (low) | 81.3% | OpenAI | Official Aider polyglot leaderboard; diff edit format, 86.7% well-formed edits, ~$10.37 per run. | https://aider.chat/docs/leaderboards/ | — |
| 7 | grok-4 (high) | 79.6% | xAI | Official Aider polyglot leaderboard; diff edit format, 97.3% well-formed edits, ~$59.62 per run. | https://aider.chat/docs/leaderboards/ | — |
| 8 | gemini-2.5-pro-preview-06-05 (default think) | 79.1% | Google | Official Aider polyglot leaderboard; diff-fenced edit format, 100% well-formed edits, ~$45.60 per run. | https://aider.chat/docs/leaderboards/ | — |
| 9 | o3 (high) + gpt-4.1 | 78.2% | OpenAI | Official Aider polyglot leaderboard; architect mode (planner + editor), 100% well-formed edits, ~$17.55 per run. | https://aider.chat/docs/leaderboards/ | — |
| 10 | Gemini 2.5 Pro Preview 05-06 | 76.9% | Google | Official Aider polyglot leaderboard; diff-fenced edit format, 97.3% well-formed edits, ~$37.41 per run. | https://aider.chat/docs/leaderboards/ | — |
| 10 | o3 | 76.9% | OpenAI | Official Aider polyglot leaderboard; diff edit format, 93.8% well-formed edits, ~$13.75 per run. | https://aider.chat/docs/leaderboards/ | — |
| 12 | DeepSeek-V3.2-Exp (Reasoner) | 74.2% | DeepSeek | Official Aider polyglot leaderboard; open-weight model, diff edit format, 97.3% well-formed edits, ~$1.30 per run. | https://aider.chat/docs/leaderboards/ | https://huggingface.co/deepseek-ai/DeepSeek-V3.2-Exp |
| 13 | Gemini 2.5 Pro Preview 03-25 | 72.9% | Google | Official Aider polyglot leaderboard; diff-fenced edit format, 92.4% well-formed edits. | https://aider.chat/docs/leaderboards/ | — |
| 14 | o4-mini (high) | 72.0% | OpenAI | Official Aider polyglot leaderboard; diff edit format, 90.7% well-formed edits, ~$19.64 per run. | https://aider.chat/docs/leaderboards/ | — |
| 14 | claude-opus-4-20250514 (32k thinking) | 72.0% | Anthropic | Official Aider polyglot leaderboard; diff edit format, 97.3% well-formed edits, ~$65.75 per run. | https://aider.chat/docs/leaderboards/ | — |

FAQ:
- Q: Which system is currently best on Aider?
  A: gpt-5 (high) is the model currently leading with a tracked score of 88.0%. This page is model-focused, so rankings mostly reflect model capability under the reported harness. Based on our latest tracked results, last updated Jun 8, 2026.
- Q: What should I read into a Aider score?
  A: Aider scores are most useful for within-benchmark ranking. Read the Notes column to understand setup context, and use the methodology section before making procurement or architecture decisions.
