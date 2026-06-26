# ClawBench

ClawBench leaderboard for browser agents completing 153 everyday state-changing tasks on 144 live production websites.

Canonical URL: https://leaderboard.steel.dev/leaderboards/clawbench/
Category: Browser agents
Scope: agent
Last updated: 2026-04-16

About:
- ClawBench evaluates browser agents on 153 everyday online tasks across 144 live platforms in 15 categories, including purchases, appointments, job applications, and detailed forms.
- Its emphasis is on state-changing, write-heavy workflows. A lightweight interception layer blocks final submissions so agents can be evaluated safely on production sites without causing real-world side effects.
- The first reported results show a large gap: the best of seven frontier models completed 33.3%, making ClawBench useful for measuring robustness beyond navigation-only or read-only web tasks.

Methodology:
- Evaluation uses human ground truth and an agentic evaluator over session replay, screenshots, HTTP traffic, reasoning traces, and browser actions.
- Tasks often require using user-provided documents, filling many fields correctly, and recovering from dynamic live-site behavior.
- Because ClawBench is new, most rows currently come from the paper's initial model suite rather than independent follow-up submissions.
- Compare ClawBench with WebVoyager and Online-Mind2Web when separating read/navigation ability from transactional form-completion ability.

Example evaluation tasks:
- "On Uber Eats, order delivery: one Pad Thai, deliver to home address, note "no peanuts"" (citation: ClawBench task JSON, https://github.com/TIGER-AI-Lab/ClawBench/blob/main/test-cases/v1/001-daily-life-food-uber-eats/task.json)
- "Search Zillow for a one-bedroom apartment in Toronto downtown under $3500/month, select one and submit a rental application" (citation: ClawBench task JSON, https://github.com/TIGER-AI-Lab/ClawBench/blob/main/test-cases/v1/011-daily-life-housing-zillow/task.json)
- "Search "Senior Software Engineer" (Toronto) on Indeed, apply to the top-ranked listing" (citation: ClawBench task JSON, https://github.com/TIGER-AI-Lab/ClawBench/blob/main/test-cases/v1/091-job-search-hr-job-apply-indeed/task.json)

Interpretation notes:
- New benchmark with limited independent submissions; current rows mainly reflect the initial paper's model suite.

Canonical links:
- ClawBench paper: https://arxiv.org/abs/2604.08523
- Project page: https://claw-bench.com
- ClawBench repository: https://github.com/reacher-z/ClawBench

| Rank | System | Score | Organization | Notes | Source | Repo |
|------|--------|-------|--------------|-------|--------|------|
| 1 | Claude Sonnet 4.6 | 33.3% | Anthropic | Native multi-modal reasoning with high success in Finance and Academic tasks. | https://arxiv.org/abs/2604.08523 | — |
| 2 | GLM-5 | 24.2% | Z.ai | Strongest text-only baseline; high performance in Developer-centric workflows. | https://arxiv.org/abs/2604.08523 | — |
| 3 | Gemini 3 Flash | 19.0% | Google | Efficiency-optimized vision model with consistent performance in Travel categories. | https://arxiv.org/abs/2604.08523 | — |
| 4 | Claude Haiku 4.5 | 18.3% | Anthropic | Balanced agentic loop demonstrating strong reasoning in Academic task groups. | https://arxiv.org/abs/2604.08523 | — |
| 5 | GPT-5.4 | 6.5% | OpenAI | Large-scale reasoning model baseline; highlights difficulty of live-web transactions. | https://arxiv.org/abs/2604.08523 | — |
| 6 | Gemini 3.1 Flash Lite | 3.3% | Google | Lightweight inference model tested on real-world multi-step website interactions. | https://arxiv.org/abs/2604.08523 | — |
| 7 | Kimi K2.5 | 0.7% | Moonshot AI | Early-stage agentic baseline demonstrating challenges in state-changing operations. | https://arxiv.org/abs/2604.08523 | — |

FAQ:
- Q: Which system is currently best on ClawBench?
  A: Claude Sonnet 4.6 is the system/agent setup currently leading with a tracked score of 33.3%. This ranking reflects submitted system setups (model plus tools and policy), not just a base model. Based on our latest tracked results, last updated Apr 16, 2026.
- Q: What should I read into a ClawBench score?
  A: ClawBench scores are most useful for within-benchmark ranking. Read the Notes column to understand setup context, and use the methodology section before making procurement or architecture decisions.
