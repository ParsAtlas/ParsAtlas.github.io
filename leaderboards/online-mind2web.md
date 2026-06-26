# Online-Mind2Web

Online-Mind2Web leaderboard for live web agents on 300 realistic tasks across 136 websites, including human and WebJudge evaluation notes.

Canonical URL: https://leaderboard.steel.dev/leaderboards/online-mind2web/
Category: Browser agents
Scope: agent
Last updated: 2026-04-16

About:
- Online-Mind2Web turns the static Mind2Web idea into a live benchmark of 300 tasks across 136 websites, covering shopping, finance, travel, government, and other consumer workflows.
- The paper was framed around the gap between offline benchmark progress and real online performance; agents that look strong on static snapshots can fail when pages, timing, and interaction flows change.
- It is one of the most useful web-agent benchmarks for current product work, but reported scores can depend heavily on whether evaluation used human judging, WebJudge, or a custom agentic judge.

Methodology:
- Primary score is task success rate across easy, medium, and hard tasks, where difficulty is stratified by reference human step count.
- The paper introduced WebJudge, an LLM-as-judge method with roughly 85% agreement with human judgment, but newer submissions sometimes use custom judges.
- Human evaluation is the clearest comparison point; automated judge scores should be compared only when judge, screenshots or traces, and task-level results are published.
- Rows are included when the source provides a benchmark score and enough information to identify the evaluator or setup.

Example evaluation tasks:
- "Open the page with an overview of the submission of releases on Discogs." (citation: Online-Mind2Web example result, https://raw.githubusercontent.com/OSU-NLP-Group/Online-Mind2Web/main/data/example/fb7b4f784cfde003e2548fdf4e8d6b4f/result.json)
- "Open the reviews of a recipe with beef sirloin" (citation: Browser Use Online-Mind2Web benchmark post, https://browser-use.com/posts/online-mind2web-benchmark)
- "Find full-time legal jobs in San Diego County, min $4,000+/month" (citation: Browser Use Online-Mind2Web benchmark post, https://browser-use.com/posts/online-mind2web-benchmark)

Interpretation notes:
- Judge methodology varies across submissions; human eval, WebJudge, and custom agentic judges can produce different scores for the same agent.

Canonical links:
- Online-Mind2Web paper (COLM 2025): https://arxiv.org/abs/2504.01382
- HAL Online-Mind2Web leaderboard: https://hal.cs.princeton.edu/online_mind2web
- Online-Mind2Web repository: https://github.com/OSU-NLP-Group/Online-Mind2Web
- Original Mind2Web project: https://osu-nlp-group.github.io/Mind2Web/

| Rank | System | Score | Organization | Notes | Source | Repo |
|------|--------|-------|--------------|-------|--------|------|
| 1 | Browser Use Cloud (bu-max) | 97.0% | Browser-Use | Self-reported using a custom agentic judge built on Claude Agent SDK; OpenAI's score uses a different screenshot-based judge — not directly comparable. | https://browser-use.com/posts/online-mind2web-benchmark | — |
| 2 | GPT-5.4 Native Computer Use | 93.0% | OpenAI | OpenAI-reported native computer-use score from GPT-5.4 launch announcement; per Browser Use leaderboard, raw data is not public. | https://openai.com/index/introducing-gpt-5-4/ | — |
| 3 | ABP + Claude Opus 4.6 | 90.53% | theredsix | Agent Browser Protocol with Claude Opus 4.6; all 300 task results published publicly. Previous SOTA was 78.7%. | https://github.com/theredsix/abp-online-mind2web-results | — |
| 4 | TinyFish | 90.0% | TinyFish AI | All 300 task runs published publicly; outperformed Gemini by 21 points and OpenAI Operator by 29 points at time of submission. | https://www.tinyfish.ai/blog/mind2web | — |
| 5 | UI-TARS-2 | 88.2% | ByteDance / VLM-Research | Native GUI agent trained with multi-turn RL; score from technical report, evaluated under standard Online-Mind2Web conditions. | https://arxiv.org/abs/2509.02544 | — |
| 6 | OpenAGI Lux | 83.6% | OpenAGI Foundation | Foundation computer-use model trained via Agentic Active Pre-training on OSGym; self-reported Online-Mind2Web score at launch. | https://agiopen.org/blog | — |
| 7 | Navigator | 78.7% | Yutori | Human-evaluation score; also achieves 64.7% on auto-evaluation (WebJudge). 3.3x faster per-step than Claude 4.5. | https://yutori.com/blog/introducing-navigator | — |
| 8 | ChatGPT Atlas Agent Mode | 71.0% | OpenAI | OpenAI-reported Atlas browser Agent Mode score cited in GPT-5.4 announcement; underlying run data not public. | https://openai.com/index/introducing-gpt-5-4/ | — |
| 9 | Gemini 2.5 Computer Use | 69.0% | Google DeepMind | Score reported by Yutori under identical evaluation settings; 57.3% on auto-evaluation (WebJudge). | https://yutori.com/blog/introducing-navigator | — |
| 10 | Stagehand (Gemini 2.5 CU) | 65.0% | Browserbase | Stagehand SDK wrapping Gemini 2.5 Computer Use; score from Browserbase's public Computer Use evaluations leaderboard. | https://www.stagehand.dev/agent-evals | — |
| 11 | OpenAI Operator | 61.3% | OpenAI | Score from Online-Mind2Web paper; OpenAI did not publish judge, harness, or task-level results for independent verification. | https://arxiv.org/abs/2504.01382 | — |
| 12 | Claude 4.0 | 61.0% | Anthropic | Human-evaluation score reported by Yutori; 47.7% on auto-evaluation (WebJudge). | https://yutori.com/blog/introducing-navigator | — |
| 13 | ACT-1-20250814 | 57.3% | Enhans | Online-Mind2Web SR (Easy 81.9 / Med 54.5 / Hard 35.1); reported on osunlp HF leaderboard. | https://huggingface.co/spaces/osunlp/Online_Mind2Web_Leaderboard | — |
| 14 | Claude Computer Use 3.7 (w/o thinking) | 56.3% | Anthropic | Online-Mind2Web SR (Easy 90.4 / Med 49.0 / Hard 32.4); reported on osunlp HF leaderboard. | https://www.anthropic.com/news/claude-3-7-sonnet | — |
| 15 | Claude 4.5 | 55.0% | Anthropic | Human-evaluation score reported by Yutori under identical evaluation settings; 59.3% on auto-evaluation (WebJudge). | https://yutori.com/blog/introducing-navigator | — |
| 15 | Stagehand (Sonnet 4.5) | 55.0% | Browserbase | Stagehand SDK with Claude Sonnet 4.5; score from Browserbase's public Computer Use evaluations leaderboard. | https://www.stagehand.dev/agent-evals | — |
| 17 | ACT-1-20250703 | 45.7% | Enhans | Online-Mind2Web SR (Easy 65.1 / Med 46.2 / Hard 23.0); reported on osunlp HF leaderboard. | https://huggingface.co/spaces/osunlp/Online_Mind2Web_Leaderboard | — |
| 18 | SeeAct (gpt-4o) | 30.7% | OSU NLP | Online-Mind2Web SR (Easy 60.2 / Med 25.2 / Hard 8.1); reported on osu-nlp-group.github.io. | https://osu-nlp-group.github.io/SeeAct/ | — |
| 19 | Browser Use (gpt-4o) | 30.0% | Browser Use | Online-Mind2Web SR (Easy 55.4 / Med 26.6 / Hard 8.1); reported on osunlp HF leaderboard. | https://github.com/browser-use/browser-use | — |
| 19 | HAL Leaderboard baseline (best open) | ~30% | Princeton / OSU | Reference baseline from the HAL leaderboard tracker; illustrates the gap between frontier commercial systems and open models. | https://hal.cs.princeton.edu/online_mind2web | — |
| 21 | Claude Computer Use 3.5 | 29.0% | Anthropic | Online-Mind2Web SR (Easy 56.6 / Med 20.3 / Hard 14.9); reported on osunlp HF leaderboard. | https://www.anthropic.com/news/3-5-models-and-computer-use | — |
| 22 | Agent-E (gpt-4o) | 28.0% | Emergence AI | Online-Mind2Web SR (Easy 49.4 / Med 26.6 / Hard 6.8); reported on osunlp HF leaderboard. | https://github.com/EmergenceAI/Agent-E | — |

FAQ:
- Q: Which system is currently best on Online-Mind2Web?
  A: Browser Use Cloud (bu-max) is the system/agent setup currently leading with a tracked score of 97.0%. This ranking reflects submitted system setups (model plus tools and policy), not just a base model. Based on our latest tracked results, last updated Apr 16, 2026.
- Q: What should I read into a Online-Mind2Web score?
  A: Online-Mind2Web scores are most useful for within-benchmark ranking. Read the Notes column to understand setup context, and use the methodology section before making procurement or architecture decisions.
- Q: Are these independently verified?
  A: Not always. Some rows are independently benchmarked and some are team-reported. Use each source link and notes field to verify evidence level before drawing strong conclusions.
- Q: Can I compare every row directly?
  A: Use caution. Rows can vary by evaluator, harness, attempt budget, tool access, task filtering, or verification level. Source links and notes are part of the score, not decoration.
