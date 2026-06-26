# OSWorld

OSWorld leaderboard for multimodal computer-use agents completing 369 real desktop tasks with execution-based verification.

Canonical URL: https://leaderboard.steel.dev/leaderboards/osworld/
Category: Computer use
Scope: agent
Last updated: 2026-05-28

About:
- OSWorld evaluates multimodal computer-use agents in real desktop environments across 369 tasks involving web apps, desktop software, files, and workflows spanning multiple applications.
- It is valuable for teams building GUI agents because tasks require visual grounding, keyboard and mouse execution, OS knowledge, and error recovery, not only text planning.
- Modern reports often distinguish original OSWorld, OSWorld-Verified, and submitter-run variants; read source details before comparing human-level claims.

Methodology:
- Original OSWorld uses execution-based validators that check final computer state after the agent acts in configured VM environments.
- Reported metric is success rate; the original paper reported a 72.36% human baseline and 12.24% for the best early model.
- OSWorld-Verified adds independent or standardized re-runs for some systems; self-reported rows can use different max steps, OS images, and tool permissions.
- We track public results with source URLs and note whether the source claims verified or independent execution.

Example evaluation tasks:
- "Can you enable the 'Do Not Track' feature in Chrome to enhance my online privacy?" (citation: OSWorld example JSON, https://raw.githubusercontent.com/xlang-ai/OSWorld/main/evaluation_examples/examples/chrome/030eeff7-b492-4218-b312-701ec99ee0cc.json)
- "Can you make my computer bring back the last tab I shut down?" (citation: OSWorld example JSON, https://raw.githubusercontent.com/xlang-ai/OSWorld/main/evaluation_examples/examples/chrome/06fe7178-4491-4589-810f-2e2bc9502122.json)
- "Computer, please navigate to the area in my browser settings where my passwords are stored.
I want to check my login information for Etsy without revealing it just yet." (citation: OSWorld example JSON, https://raw.githubusercontent.com/xlang-ai/OSWorld/main/evaluation_examples/examples/chrome/12086550-11c0-466b-b367-1d9e75b3910e.json)

Interpretation notes:
- Self-reported and independently verified rows coexist; setup differences can matter as much as the model.

Canonical links:
- OSWorld paper: https://arxiv.org/abs/2404.07972
- OSWorld project: https://os-world.github.io/
- OSWorld repository: https://github.com/xlang-ai/OSWorld
- OSWorld-Verified announcement: https://xlang.ai/blog/osworld-verified

| Rank | System | Score | Organization | Notes | Source | Repo |
|------|--------|-------|--------------|-------|--------|------|
| 1 | Claude Mythos Preview | 85.4% | Anthropic | OSWorld-Verified pass@1 (361 tasks, 100 max steps, auto-thinking at max effort, 5-run avg) on Anthropic's revised harness; supersedes the earlier 79.6% Glasswing report. Self-reported in the Claude 5 system card. | https://www-cdn.anthropic.com/d00db56fa754a1b115b6dd7cb2e3c342ee809620.pdf | — |
| 2 | Claude Mythos 5 | 85.0% | Anthropic | OSWorld-Verified pass@1 (361 tasks, 100 max steps, auto-thinking at max effort, 5-run avg) on Anthropic's revised harness. Self-reported in the Claude 5 system card. | https://www-cdn.anthropic.com/d00db56fa754a1b115b6dd7cb2e3c342ee809620.pdf | — |
| 2 | Claude Fable 5 | 85.0% | Anthropic | Generally available sibling of Mythos 5; OSWorld-Verified pass@1 (361 tasks, 100 max steps, auto-thinking at max effort, 5-run avg). Self-reported in the Claude 5 system card. | https://www-cdn.anthropic.com/d00db56fa754a1b115b6dd7cb2e3c342ee809620.pdf | — |
| 4 | Claude Opus 4.8 | 83.4% | Anthropic | OSWorld-Verified pass@1 (361 tasks, 100 steps, max effort, multi-run avg) using Anthropic's revised harness (zoom-tool fix, 128K tokens/turn) — not directly comparable to older entries. Self-reported in the Opus 4.8 system card. | https://www.anthropic.com/news/claude-opus-4-8 | — |
| 5 | OSAgent | 76.26% | TheAGI Company | Self-reported October 2025; trained with RL on OSWorld VMs and internal browser environments. | https://www.theagi.company/blog/osworld | — |
| 6 | GPT-5.4 | 75.0% | OpenAI | Self-reported at GPT-5.4 launch on OSWorld-Verified; awaiting independent verification. | https://openai.com/index/introducing-gpt-5-4/ | — |
| 7 | Claude Opus 4.6 | 72.7% | Anthropic | Reported on Anthropic's Glasswing page. | https://www.anthropic.com/glasswing | — |
| 8 | Claude Sonnet 4.6 | 72.5% | Anthropic | Independently assessed; within 0.2 points of Opus 4.6 at significantly lower cost. | https://www.anthropic.com/news/claude-sonnet-4-6 | — |
| 9 | Qwen3 VL 235B | 66.7% | Alibaba | Strongest open-source model on OSWorld; self-reported. | https://huggingface.co/Qwen/Qwen3-VL-235B-A22B | — |
| 10 | Claude Opus 4.5 | 66.3% | Anthropic | OSWorld-Verified self-reported result; reported on anthropic.com. | https://www.anthropic.com/news/claude-opus-4-5 | — |
| 11 | Kimi K2.5 | 63.3% | Moonshot AI | Self-reported in technical paper; GUI-only actions without external tools on OSWorld-Verified. | https://arxiv.org/html/2602.02276v1 | — |
| 12 | GLM-5V-Turbo | 62.3% | Zhipu AI | Self-reported VLM result; reported on docs.z.ai. | https://docs.z.ai/guides/vlm/glm-5v-turbo | — |
| 13 | Claude Sonnet 4.5 | 61.4% | Anthropic | OSWorld-Verified, official framework, 100 max steps, 4-run avg; reported on anthropic.com. | https://www.anthropic.com/news/claude-sonnet-4-5 | — |
| 14 | UiPath Screen Agent | 53.6% | UiPath | OSWorld-Verified independently verified result; enterprise automation scaffold on Claude Opus 4.5. | https://www.uipath.com/newsroom/uipath-screenagent-osworld-benchmark-top-ranking | — |
| 15 | Claude Haiku 4.5 | 50.7% | Anthropic | Self-reported result; reported on anthropic.com. | https://www.anthropic.com/news/claude-haiku-4-5 | — |
| 16 | Agent S2 + Claude 3.7 | 34.5% | Simular AI | Open-source modular agent; evaluated on 50-step OSWorld tasks. | https://simular.ai | — |
| 17 | OpenAI Operator (CUA) | 32.6% | OpenAI | Self-reported on 50-step OSWorld tasks at Operator launch. | https://openai.com/index/computer-using-agent/ | — |
| 18 | Qwen2.5 VL 72B Instruct | 8.8% | Alibaba Cloud / Qwen Team | Self-reported result; reported on huggingface.co. | https://huggingface.co/Qwen/Qwen2.5-VL-72B-Instruct | — |
| 19 | Qwen2.5 VL 32B Instruct | 5.9% | Alibaba Cloud / Qwen Team | Self-reported result; reported on huggingface.co. | https://huggingface.co/Qwen/Qwen2.5-VL-32B-Instruct | — |

FAQ:
- Q: Which system is currently best on OSWorld?
  A: Claude Mythos Preview is the system/agent setup currently leading with a tracked score of 85.4%. This ranking reflects submitted system setups (model plus tools and policy), not just a base model. Based on our latest tracked results, last updated May 28, 2026.
- Q: What should I read into a OSWorld score?
  A: OSWorld scores are most useful for within-benchmark ranking. Read the Notes column to understand setup context, and use the methodology section before making procurement or architecture decisions.
- Q: Are these independently verified?
  A: Not always. Some rows are independently benchmarked and some are team-reported. Use each source link and notes field to verify evidence level before drawing strong conclusions.
- Q: Can I compare every row directly?
  A: Use caution. Rows can vary by evaluator, harness, attempt budget, tool access, task filtering, or verification level. Source links and notes are part of the score, not decoration.
