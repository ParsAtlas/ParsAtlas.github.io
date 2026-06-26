# GAIA

GAIA leaderboard for general AI assistants answering 466 real-world questions with reasoning, web browsing, tools, and exact final answers.

Canonical URL: https://leaderboard.steel.dev/leaderboards/gaia/
Category: Model evals / reasoning
Scope: agent
Last updated: 2026-04-16

About:
- GAIA evaluates general AI assistants on 466 real-world questions requiring reasoning, web browsing, multimodal understanding, file handling, and tool use.
- Questions are designed to be conceptually simple for humans with unambiguous final answers; 300 answers are withheld to power the official leaderboard.
- Top GAIA systems are usually orchestrated agents or ensembles, not raw model calls, so rankings reward tool selection, search depth, verification, and answer formatting.

Methodology:
- Scoring is final-answer accuracy or quasi-exact match against ground truth, with no partial credit or open-ended rubric.
- The official Hugging Face leaderboard is the canonical source for test-set submissions; launch posts may report related or approximate results.
- Scores average across difficulty levels, so inspect source breakdowns when comparing systems optimized for easy versus multi-step tasks.
- We prioritize official leaderboard rows and source pages that identify the agent composition or underlying model stack.

Example evaluation tasks:
- "What was the actual enrollment count of the clinical trial on H. pylori in acne vulgaris patients from Jan-May 2018 as listed on the NIH website?" (citation: GAIA paper, Figure 1, https://arxiv.org/pdf/2311.12983)
- "If this whole pint is made up of ice cream, how many percent above or below the US federal standards for butterfat content is it when using the standards as reported by Wikipedia in 2020? Answer as + or - a number rounded to one decimal place." (citation: GAIA paper, Figure 1, https://arxiv.org/pdf/2311.12983)
- "In NASA’s Astronomy Picture of the Day on 2006 January 21, two astronauts are visible, with one appearing much smaller than the other. As of August 2023, out of the astronauts in the NASA Astronaut Group that the smaller astronaut was a member of, which one spent the least time in space, and how many minutes did he spend in space, rounded to the nearest minute? Exclude any astronauts who did not spend any time in space. Give the last name of the astronaut, separated from the number of minutes by a semicolon. Use commas as thousands separators in the number of minutes." (citation: GAIA paper, Figure 1, https://arxiv.org/pdf/2311.12983)

Interpretation notes:
- Top entries are multi-model ensembles; scores usually cannot be attributed to one base model.

Canonical links:
- GAIA publication page: https://ai.meta.com/research/publications/gaia-a-benchmark-for-general-ai-assistants/
- GAIA paper: https://arxiv.org/abs/2311.12983
- GAIA leaderboard: https://huggingface.co/spaces/gaia-benchmark/leaderboard

| Rank | System | Score | Organization | Notes | Source | Repo |
|------|--------|-------|--------------|-------|--------|------|
| 1 | OPS-Agentic-Search | 92.36% | Alibaba Cloud | Official GAIA leaderboard submission; multi-model ensemble using Qwen, Claude 4.6, GPT-5, DeepSeek 3.2, Gemini 3 Pro, and Kimi K2.5. | https://gaia-benchmark-leaderboard.hf.space/ant_test | — |
| 1 | openJiuwen-deepagent | 92.36% | Suzhou AI Lab / Shuqian Tech | Official GAIA leaderboard submission; GPT-5 agent with o3 hints/summary plus Gemini 2.5 Pro and Claude tool roles. | https://gitcode.com/openJiuwen/agent-store/tree/main/community/deepagent | — |
| 3 | openJiuwen-deepagent (GPT5/Gemini) | 91.69% | openJiuwen | Official GAIA leaderboard submission; GPT-5 and Gemini 3 Pro backbone. | https://gaia-benchmark-leaderboard.hf.space/ant_test | — |
| 4 | Lemon Agent | 91.36% | Lenovo CTO Org | Official GAIA leaderboard submission; open-source Lemon agent using GPT-5, Gemini 3 Pro, and o3. | https://github.com/Open-Lemon/LemonAgent | — |
| 5 | JoinAI V2.2 | 90.7% | JoinAI-CMCC | Official GAIA leaderboard; multi-model ensemble with GPT-5, Gemini 3 Pro, DeepSeek 3.1, Qwen 3. | https://gaia-benchmark-leaderboard.hf.space/ant_test | — |
| 6 | Nemotron-ToolOrchestra | 90.37% | NVIDIA | Official GAIA leaderboard; Nemotron Tool-Orchestrator 8B routes tasks to specialized tools and frontier models. | https://research.nvidia.com/labs/lpr/ToolOrchestra/ | — |
| 7 | JoinAI V2.1 | 90.03% | JoinAI-CMCC | GAIA test set average score; reported on gaia-benchmark HF leaderboard. | https://gaia-benchmark-leaderboard.hf.space/ant_test | — |
| 7 | SU Zero (Shuqian Pro) | 90.03% | Shuqian Tech | Official GAIA leaderboard submission. | https://gaia-benchmark-leaderboard.hf.space/ant_test | — |
| 9 | HALO V1217-1 | 89.37% | Microsoft AI Asia | Official GAIA leaderboard submission from Microsoft AI Asia. | https://gaia-benchmark-leaderboard.hf.space/ant_test | — |
| 9 | ShawnAgent v3.1 | 89.37% | Independent | GAIA test set average score; reported on gaia-benchmark HF leaderboard. | https://gaia-benchmark-leaderboard.hf.space/ant_test | — |
| 11 | HALO V1217 | 89.04% | Microsoft AI Asia | Official GAIA leaderboard submission from Microsoft AI Asia. | https://gaia-benchmark-leaderboard.hf.space/ant_test | — |
| 11 | Su Zero + SQ Pro | 89.04% | Suzhou AI Lab / Shuqian Tech | Official GAIA leaderboard submission using GPT, Gemini, and Claude. | https://gaia-benchmark-leaderboard.hf.space/ant_test | — |
| 11 | JoinAI V2 | 89.04% | JoinAI-CMCC | Official GAIA leaderboard submission using GPT, Gemini, DeepSeek, and Qwen. | https://gaia-benchmark-leaderboard.hf.space/ant_test | — |
| 11 | ShawnAgent v3.0 | 89.04% | Independent | Official GAIA leaderboard submission using GPT-5.2, Claude Sonnet 4.5, and Gemini 3 Pro. | https://gaia-benchmark-leaderboard.hf.space/ant_test | — |
| 15 | Lemon Agent v1.0.8 | 88.37% | Lenovo CTO Org | Earlier official GAIA leaderboard Lemon Agent submission using GPT-5, o3, and Gemini 3 Pro. | https://github.com/Open-Lemon/LemonAgent | — |
| 16 | Su Zero + Shuqian Lite | 87.38% | Suzhou AI Lab / Shuqian Tech | Official GAIA leaderboard submission using Gemini 3, Claude Sonnet 4.5, and GPT-5.1. | https://gaia-benchmark-leaderboard.hf.space/ant_test | — |
| 17 | Co-Sight v2.1.0 | 87.04% | ZTE-AICloud | Official GAIA leaderboard submission using ZTE Nebula LLM, Claude Sonnet 4, and Gemini 2.5 Pro. | https://gaia-benchmark-leaderboard.hf.space/ant_test | — |
| 18 | JoinAI V1.1 | 86.71% | JoinAI | Official GAIA leaderboard submission using JoinLLM, GPT-4.1, DeepSeek V3.1, and Gemini 2.5 Pro. | https://gaia-benchmark-leaderboard.hf.space/ant_test | — |
| 19 | Manus | 86.5% | Monica AI | Self-reported; multi-agent system with parallel tool use across browser, code, and file tools. | https://manus.im/ | — |
| 20 | Deep Research (o3, cons@64) | 72.57% | OpenAI | OpenAI Deep Research consistency-over-64-samples result reported in the launch post. | https://openai.com/index/introducing-deep-research/ | — |
| 21 | Deep Research (o3) | 67.36% | OpenAI | OpenAI Deep Research pass@1 result on GAIA; launch post also reports 72.57% with consistency over 64 samples. | https://openai.com/index/introducing-deep-research/ | — |

FAQ:
- Q: Which system is currently best on GAIA?
  A: OPS-Agentic-Search is the system/agent setup currently leading with a tracked score of 92.36%. This ranking reflects submitted system setups (model plus tools and policy), not just a base model. Based on our latest tracked results, last updated Apr 16, 2026.
- Q: What should I read into a GAIA score?
  A: GAIA scores are most useful for within-benchmark ranking. Read the Notes column to understand setup context, and use the methodology section before making procurement or architecture decisions.
- Q: Are these independently verified?
  A: Not always. Some rows are independently benchmarked and some are team-reported. Use each source link and notes field to verify evidence level before drawing strong conclusions.
