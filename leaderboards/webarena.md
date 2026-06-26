# WebArena

WebArena leaderboard for autonomous browser agents evaluated on reproducible, self-hosted web tasks across shopping, forum, GitLab, CMS, map, and wiki environments.

Canonical URL: https://leaderboard.steel.dev/leaderboards/webarena/
Category: Browser agents
Scope: agent
Last updated: 2026-05-27

About:
- WebArena evaluates browser agents in reproducible, self-hosted websites instead of the open live web. Its 812 tasks cover e-commerce, forum discussion, collaborative software development, content management, maps, and reference lookup.
- The benchmark is strongest when you care about repeatable web-agent experiments: every task has a controlled start state and functional success criteria rather than a changing production website.
- Because many rows come from a public community tracker, a WebArena score should be read alongside the source, submitted scaffold, observation mode, and whether the result was independently reproduced.

Methodology:
- Primary metric is end-to-end task success rate on the WebArena task set; the original GPT-4-based baseline was 14.41% versus 78.24% human performance.
- Evaluation checks functional correctness through task-specific validators and answer checks in the hosted environment.
- Scores can change with prompt scaffolding, observation mode, browser action space, and retry or step budget.
- We prefer rows tied to WebArena's public leaderboard, papers, or repositories that include enough setup detail to reproduce the run.

Example evaluation tasks:
- "What is the top-1 best-selling product in 2022" (citation: WebArena test config, https://raw.githubusercontent.com/web-arena-x/webarena/main/config_files/test.raw.json)
- "Tell me the full address of all international airports that are within a driving distance of 50 km to Carnegie Mellon University" (citation: WebArena test config, https://raw.githubusercontent.com/web-arena-x/webarena/main/config_files/test.raw.json)
- "Tell me the the number of reviews that our store received by far that mention term "disappointed"" (citation: WebArena test config, https://raw.githubusercontent.com/web-arena-x/webarena/main/config_files/test.raw.json)

Interpretation notes:
- Controlled environments improve reproducibility, but tracker rows still vary by scaffold and submission policy.
- Filtered task-set or modified-grader reports are not ranked as full WebArena results unless the row notes that setup explicitly.

Canonical links:
- WebArena paper: https://arxiv.org/abs/2307.13854
- WebArena project: https://webarena.dev/
- WebArena repository: https://github.com/web-arena-x/webarena
- WebArena public leaderboard: https://docs.google.com/spreadsheets/d/1M801lEpBbKSNwP-vDBkC_pF7LdyGU1f_ufZb_NWNBZQ

| Rank | System | Score | Organization | Notes | Source | Repo |
|------|--------|-------|--------------|-------|--------|------|
| 1 | WebTactix (DeepSeek v3.2) | 74.3% | WebTactix | Project page reports 594/812 correct tasks, or 74.34%; this is a WebTactix system using DeepSeek v3.2, not a bare model result. | https://paper-submission-anoymous.github.io/webtactix_introduction/ | https://github.com/paper-submission-anoymous/webtactix |
| 2 | OpAgent | 71.6% | CodeFuse AI | Open-source multi-agent browser system; repository publishes the WebArena result and final trajectories. | https://github.com/codefuse-ai/OpAgent | https://github.com/codefuse-ai/OpAgent |
| 3 | ColorBrowserAgent | 71.2% | MadeAgents | Human-like browser agent result; code and trajectories are public in the MadeAgents repository. | https://arxiv.org/abs/2601.07262 | https://github.com/MadeAgents/browser-agent |
| 4 | Claude Code + GBOX MCP | 68.0% | GBOX AI | Claude Code backed by GBOX MCP scaffolding; public report and trajectories are in the BabelCloud WebArena repository. | https://github.com/babelcloud/webarena/blob/main/gbox/report.md | https://github.com/babelcloud/webarena |
| 5 | DeepSky Agent | 66.9% | DeepSky | Public tracker row; no separate public source or repository link was found in the tracker. | https://docs.google.com/spreadsheets/d/1M801lEpBbKSNwP-vDBkC_pF7LdyGU1f_ufZb_NWNBZQ | — |
| 6 | Narada AI | 64.2% | Narada AI | Narada blog and public tracker report the WebArena result; no public code repository was found. | https://narada.ai/blog/narada-ai-web-agent-operator | — |
| 7 | IBM CUGA | 61.7% | IBM | CUGA reports 61.7% on WebArena and publishes code, evaluation artifacts, and results. | https://cuga.dev/ | https://github.com/cuga-project/cuga-agent |
| 8 | Kimi K2.5 | 58.9% | Moonshot AI | Technical report reports GUI-based browsing without external tools; Kimi K2.5 weights are publicly released. | https://arxiv.org/html/2602.02276v1 | https://huggingface.co/moonshotai/Kimi-K2.5 |
| 9 | OpenAI Operator | 58.1% | OpenAI | OpenAI Computer-Using Agent result reported with the Operator system card and public WebArena tracker. | https://openai.com/index/operator-system-card/ | — |
| 10 | Jace.AI (AWA-1.5) | 57.1% | Jace AI | Jace reports AWA 1.5 at 57.14% on WebArena; implementation is proprietary. | https://jace.ai/blog/awa-1-5-achieves-breakthrough-performance-on-web-arena-benchmark | — |
| 11 | Plan-MCTS + GPT-5-mini | 55.3% | Academic Research | Plan-MCTS paper reports 55.3% on the full 812-task WebArena test set with GPT-5-mini. | https://arxiv.org/html/2602.14083v1 | — |
| 12 | WebOperator + GPT-4o | 54.6% | KAIST KAG NLP | WebOperator paper and project report 54.6% with GPT-4o; code and experiment artifacts are public. | https://arxiv.org/abs/2512.12692 | https://github.com/kagnlp/WebOperator |
| 13 | ScribeAgent + GPT-4o | 53.0% | Academic Research | ScribeAgent reports 53.0% with GPT-4o; the tracker marks data as proprietary. | https://arxiv.org/abs/2411.15004 | — |
| 14 | AgentSymbiotic | 52.1% | Academic Research | AgentSymbiotic reports 52.1%; an anonymized public code artifact is linked from the tracker. | https://www.arxiv.org/abs/2502.07942 | https://anonymous.4open.science/r/agent-0E80/README.md |
| 15 | Learn-by-Interact | 48.0% | Academic Research | Paper reports 48.0% on WebArena; no public implementation repository was found. | https://arxiv.org/abs/2501.10893 | — |
| 16 | WebUncertainty + GPT-4-Turbo | 46.9% | Academic Research | WebUncertainty reports 46.9% with GPT-4-Turbo on WebArena and publishes the project repository. | https://arxiv.org/html/2604.17821v1 | https://github.com/windbd/WebUncertainty |
| 17 | AgentOccam-Judge | 45.7% | Amazon Science | AgentOccam-Judge public tracker row; Amazon Science publishes the AgentOccam implementation. | https://arxiv.org/abs/2410.13825 | https://github.com/amazon-science/AgentOccam |
| 18 | A3-Qwen3.5-9B | 42.1% | McGill NLP | BrowserGym leaderboard discussion reports 42.1%; the paper/model card table reports 41.5 under its project setup. | https://huggingface.co/spaces/ServiceNow/browsergym-leaderboard/discussions/12 | https://github.com/McGill-NLP/agent-as-annotators |
| 19 | GUI-API Hybrid Agent | 38.9% | Academic Research | Latest arXiv version reports 38.9%; the public tracker still lists 35.8 for an earlier or alternate setup. | https://arxiv.org/abs/2410.16464 | — |
| 20 | WebPilot | 37.2% | Academic Research | Paper reports 37.2%; the public tracker notes no open-source code or trajectories were released. | https://www.arxiv.org/pdf/2408.15978 | — |
| 21 | Agent Workflow Memory | 35.5% | Academic Research | Workflow-memory agent result; public repository is available with the paper artifacts. | https://arxiv.org/pdf/2409.07429 | https://github.com/zorazrw/agent-workflow-memory |
| 22 | SteP | 33.5% | ASAPP Research | Public tracker reports 33.5%; the SteP project publishes code and WebArena materials. | https://arxiv.org/abs/2310.03720 | https://github.com/asappresearch/webagents-step |
| 23 | TTI | 26.1% | Academic Research | Test-time interaction result; WebArena artifacts are public on Hugging Face. | https://arxiv.org/abs/2506.07976 | https://huggingface.co/sjunhongs/tti_webarena/tree/main |
| 24 | BrowserGym + GPT-4 | 23.5% | ServiceNow Research | BrowserGym/WorkArena paper reports this WebArena baseline; BrowserGym is open source. | https://arxiv.org/pdf/2403.07718.pdf | https://github.com/ServiceNow/BrowserGym |
| 25 | AgentTrek-1.0-32B | 22.4% | xLang AI | AgentTrek project reports 22.4%; code, model, and data links are public. | https://agenttrek.github.io/ | https://github.com/xlang-ai/AgentTrek |
| 26 | GPT-4 + Auto Eval | 20.2% | Academic Research | Automatic evaluator study reports a GPT-4 WebArena result; no separate implementation repository was found. | https://arxiv.org/abs/2404.06474 | — |
| 27 | GPT-4o + Tree Search | 19.2% | Academic Research | Tree-search agent result from the Search Agents project page. | https://jykoh.com/search-agents | — |
| 28 | AutoWebGLM | 18.2% | THUDM | AutoWebGLM paper reports 18.2%; official repository includes WebArena evaluation materials. | https://arxiv.org/abs/2404.03648 | https://github.com/THUDM/AutoWebGLM |
| 29 | NNetNav | 16.3% | Stanford NLP | NNetNav result with public model checkpoint linked from the tracker. | https://arxiv.org/abs/2410.02907 | https://huggingface.co/stanfordnlp/llama8b-nnetnav-wa |
| 30 | gpt-4-0613 (no not-achievable hint) | 14.9% | OpenAI | Original WebArena baseline without providing the not-achievable task hint. | https://arxiv.org/abs/2307.13854 | — |
| 31 | gpt-4o-2024-05-13 | 13.05% | OpenAI | Public tracker row from the WebArena team with the not-achievable task hint provided. | https://docs.google.com/spreadsheets/d/1M801lEpBbKSNwP-vDBkC_pF7LdyGU1f_ufZb_NWNBZQ | — |
| 32 | gpt-4-0613 (with not-achievable hint) | 11.7% | OpenAI | Original WebArena GPT-4 baseline when the not-achievable task hint is provided. | https://arxiv.org/abs/2307.13854 | — |
| 33 | Patel et al. + GPT-4 | 9.36% | Academic Research | Patel et al. report a GPT-4 WebArena evaluation row in the public tracker. | https://arxiv.org/abs/2405.20309 | — |
| 34 | gpt-3.5-turbo-16k-0613 | 8.87% | OpenAI | Original WebArena GPT-3.5 baseline. | https://arxiv.org/abs/2307.13854 | — |
| 35 | Qwen-1.5-chat-72b | 7.14% | Qwen | Patel et al. tracker row for the open-weight Qwen 1.5 chat model. | https://arxiv.org/abs/2405.20309 | https://huggingface.co/Qwen/Qwen1.5-72B-Chat |
| 36 | Gemini Pro | 7.12% | Google | WebArena tracker baseline for Gemini Pro; implementation is proprietary. | https://arxiv.org/abs/2307.13854 | — |
| 37 | Llama3-chat-70b | 7.02% | Meta | Public tracker baseline for the open-weight Llama 3 70B Instruct model. | https://docs.google.com/spreadsheets/d/1M801lEpBbKSNwP-vDBkC_pF7LdyGU1f_ufZb_NWNBZQ | https://huggingface.co/meta-llama/Meta-Llama-3-70B-Instruct |
| 38 | Synatra-CodeLLama7b | 6.28% | Academic Research | Synatra CodeLlama-7B WebArena row from the paper and public tracker. | https://arxiv.org/pdf/2409.15637 | — |
| 39 | Lemur-chat-70b | 5.3% | OpenLemur | Lemur-chat-70B WebArena row; open model weights are available on Hugging Face. | https://arxiv.org/abs/2310.06830 | https://huggingface.co/OpenLemur/lemur-70b-chat-v1 |
| 40 | Agent-FLAN | 4.68% | InternLM | Agent-FLAN result from the paper and public tracker; code and model artifacts are public. | https://arxiv.org/abs/2403.12881 | https://github.com/InternLM/Agent-FLAN |
| 41 | CodeLlama-instruct-34b | 4.06% | Meta | Lemur paper baseline for the public Code Llama 34B Instruct model. | https://arxiv.org/abs/2310.06830 | https://huggingface.co/codellama/CodeLlama-34b-Instruct-hf |
| 42 | AgentLM-70b | 3.81% | THUDM | AgentTuning paper reports the AgentLM-70B WebArena result and links released AgentLM models. | https://arxiv.org/abs/2310.12823 | https://github.com/THUDM/AgentTuning |
| 43 | Llama3-chat-8b | 3.32% | Meta | Public tracker baseline for the open-weight Llama 3 8B Instruct model. | https://docs.google.com/spreadsheets/d/1M801lEpBbKSNwP-vDBkC_pF7LdyGU1f_ufZb_NWNBZQ | https://huggingface.co/meta-llama/Meta-Llama-3-8B-Instruct |
| 44 | CodeAct Agent | 2.3% | Academic Research | CodeAct paper reports a WebArena row; official CodeAct repository is public. | https://arxiv.org/abs/2402.01030 | https://github.com/xingyaoww/code-act |
| 45 | AgentLM-13b | 1.6% | THUDM | AgentTuning paper reports the AgentLM-13B WebArena result and links released AgentLM models. | https://arxiv.org/abs/2310.12823 | https://github.com/THUDM/AgentTuning |
| 46 | Mixtral-8x7B | 1.39% | Mistral AI | Public tracker baseline for the open-weight Mixtral-8x7B Instruct model. | https://arxiv.org/abs/2307.13854 | https://huggingface.co/mistralai/Mixtral-8x7B-Instruct-v0.1 |
| 47 | AgentLM-7b | 0.74% | THUDM | AgentTuning paper reports the AgentLM-7B WebArena result and links released AgentLM models. | https://arxiv.org/abs/2310.12823 | https://github.com/THUDM/AgentTuning |
| 48 | FireAct | 0.25% | Academic Research | FireAct WebArena row from the public tracker; no public WebArena implementation artifact was found. | https://arxiv.org/abs/2310.05915 | — |
| 49 | CodeLlama-instruct-7b | 0.0% | Meta | Public tracker baseline for the public Code Llama 7B Instruct model. | https://docs.google.com/spreadsheets/d/1M801lEpBbKSNwP-vDBkC_pF7LdyGU1f_ufZb_NWNBZQ | https://huggingface.co/codellama/CodeLlama-7b-Instruct-hf |

FAQ:
- Q: Which system is currently best on WebArena?
  A: WebTactix (DeepSeek v3.2) is the system/agent setup currently leading with a tracked score of 74.3%. This ranking reflects submitted system setups (model plus tools and policy), not just a base model. Based on our latest tracked results, last updated May 27, 2026.
- Q: What should I read into a WebArena score?
  A: WebArena scores are most useful for within-benchmark ranking. Read the Notes column to understand setup context, and use the methodology section before making procurement or architecture decisions.
