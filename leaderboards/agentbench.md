# AgentBench

AgentBench leaderboard for LLM agents across 8 interactive environments, with a focus on function-calling and tool-use results.

Canonical URL: https://leaderboard.steel.dev/leaderboards/agentbench/
Category: Model evals / reasoning
Scope: model
Last updated: 2026-04-16

About:
- AgentBench evaluates LLMs as agents across 8 interactive environments, including operating-system tasks, database querying, knowledge graphs, games, lateral-thinking puzzles, ALFWorld, WebShop, and Mind2Web-style browsing.
- The current tracked page focuses on the Function Calling (FC) variant when rows cite it, because structured tool invocation is closest to modern agent deployment.
- It is useful as a broad agentic skill check, but aggregate scores hide large differences between environment types; a system can be strong on database or tool calling and weak on web or OS tasks.

Methodology:
- Scores aggregate task completion across benchmark environments; FC rows emphasize structured function calls over free-form action text.
- Original AgentBench was published at ICLR 2024; later leaderboard rows may use revised harnesses, containerized environments, or FC subsets.
- Community leaderboard rows are not always independently verified, so we keep source links and notes close to the score.
- Use AgentBench with narrower benchmarks such as GAIA, τ-bench, and SWE-bench when diagnosing which capability is driving an aggregate result.

Example evaluation tasks:
- "How many hidden files are in /home? (not including subdirectories)" (citation: AgentBench OS task data, https://raw.githubusercontent.com/THUDM/AgentBench/main/data/os_interaction/data/dev.json)
- "I would like to implement the following function: entering the "calc" command will enable the calculation of an expression.
The expression can include addition, subtraction, multiplication, division, and parentheses. If the absolute error between the calculated answer and the expected answer is less than 1e-5, it will be considered correct.
For example, I can calculate the result by entering "calc 2 * (9 / 3)", and the output will be 6." (citation: AgentBench OS task data, https://raw.githubusercontent.com/THUDM/AgentBench/main/data/os_interaction/data/dev.json)
- "Stock logs are shown in /usr/stock.log.
The last two columns are stock index and count respectively. Tell me how many times Bob sold a stock." (citation: AgentBench OS task data, https://raw.githubusercontent.com/THUDM/AgentBench/main/data/os_interaction/data/dev.json)

Interpretation notes:
- Community-submitted leaderboard; rows are not always independently verified or directly comparable across harness revisions.

Canonical links:
- AgentBench paper (ICLR 2024): https://arxiv.org/abs/2308.03688
- AgentBench repository: https://github.com/THUDM/AgentBench
- AgentBench FC leaderboard: https://docs.google.com/spreadsheets/d/e/2PACX-1vRR3Wl7wsCgHpwUw1_eUXW_fptAPLL3FkhnW_rua0O1Ji_GIVrpTjY5LaKAhwO-WeARjnY_KNw0SYNJ/pubhtml

| Rank | System | Score | Organization | Notes | Source | Repo |
|------|--------|-------|--------------|-------|--------|------|
| 1 | AgentRL w/ Qwen2.5-32B-Instruct | 70.4% | Tsinghua University | RL-trained on AgentBench FC environments; outperforms GPT-5 and Claude Sonnet 4 per paper. | https://arxiv.org/abs/2510.04206 | — |
| 2 | AgentRL w/ Qwen2.5-14B-Instruct | 67.7% | Tsinghua University | RL-trained 14B model; evaluated on ALFWorld, DB, KG, OS, and Webshop environments. | https://arxiv.org/abs/2510.04206 | — |
| 3 | AgentRL w/ GLM-4-9B-0414 | 65.0% | Tsinghua University | RL-trained on GLM-4-9B backbone; demonstrates cross-architecture generalization of AgentRL. | https://arxiv.org/abs/2510.04206 | — |
| 4 | AgentRL w/ Qwen2.5-7B-Instruct | 62.0% | Tsinghua University | RL-trained 7B model; competitive with much larger commercial models on AgentBench FC. | https://arxiv.org/abs/2510.04206 | — |
| 5 | AgentRL w/ Qwen2.5-3B-Instruct | 60.0% | Tsinghua University | Smallest AgentRL model; shows RL training benefit extends to 3B parameter scale. | https://arxiv.org/abs/2510.04206 | — |
| 6 | Claude Sonnet 4.5 | 58.9% | Anthropic | Community leaderboard submission; evaluated on AgentBench FC function-calling task suite. | https://docs.google.com/spreadsheets/d/e/2PACX-1vRR3Wl7wsCgHpwUw1_eUXW_fptAPLL3FkhnW_rua0O1Ji_GIVrpTjY5LaKAhwO-WeARjnY_KNw0SYNJ/pubhtml | — |
| 7 | Claude Sonnet 4.5 Thinking | 58.3% | Anthropic | Extended thinking variant; marginal drop vs base Sonnet 4.5 on FC tasks. | https://docs.google.com/spreadsheets/d/e/2PACX-1vRR3Wl7wsCgHpwUw1_eUXW_fptAPLL3FkhnW_rua0O1Ji_GIVrpTjY5LaKAhwO-WeARjnY_KNw0SYNJ/pubhtml | — |
| 8 | Claude Sonnet 4 Thinking | 58.2% | Anthropic | Community leaderboard submission; evaluated on AgentBench FC function-calling task suite. | https://docs.google.com/spreadsheets/d/e/2PACX-1vRR3Wl7wsCgHpwUw1_eUXW_fptAPLL3FkhnW_rua0O1Ji_GIVrpTjY5LaKAhwO-WeARjnY_KNw0SYNJ/pubhtml | — |
| 9 | Claude Sonnet 4 | 57.4% | Anthropic | Community leaderboard submission; evaluated on AgentBench FC function-calling task suite. | https://docs.google.com/spreadsheets/d/e/2PACX-1vRR3Wl7wsCgHpwUw1_eUXW_fptAPLL3FkhnW_rua0O1Ji_GIVrpTjY5LaKAhwO-WeARjnY_KNw0SYNJ/pubhtml | — |
| 10 | Claude Sonnet 3.7 | 53.2% | Anthropic | Community leaderboard submission; earlier Anthropic generation included for progress reference. | https://docs.google.com/spreadsheets/d/e/2PACX-1vRR3Wl7wsCgHpwUw1_eUXW_fptAPLL3FkhnW_rua0O1Ji_GIVrpTjY5LaKAhwO-WeARjnY_KNw0SYNJ/pubhtml | — |

FAQ:
- Q: Which system is currently best on AgentBench?
  A: AgentRL w/ Qwen2.5-32B-Instruct is the model currently leading with a tracked score of 70.4%. This page is model-focused, so rankings mostly reflect model capability under the reported harness. Based on our latest tracked results, last updated Apr 16, 2026.
- Q: What should I read into a AgentBench score?
  A: AgentBench scores are most useful for within-benchmark ranking. Read the Notes column to understand setup context, and use the methodology section before making procurement or architecture decisions.
- Q: Are these independently verified?
  A: Not always. Some rows are independently benchmarked and some are team-reported. Use each source link and notes field to verify evidence level before drawing strong conclusions.
- Q: Can I compare every row directly?
  A: Use caution. Rows can vary by evaluator, harness, attempt budget, tool access, task filtering, or verification level. Source links and notes are part of the score, not decoration.
