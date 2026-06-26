# τ-bench

τ-bench leaderboard for conversational AI agents collaborating with users across complex enterprise domains, emphasizing policy adherence and pass^k reliability.

Canonical URL: https://leaderboard.steel.dev/leaderboards/tau-bench/
Category: Model evals / reasoning
Scope: model
Last updated: 2026-04-16

About:
- τ-bench evaluates conversational agents in realistic customer-service tasks where the agent must talk to a simulated user, call domain APIs, and follow a policy manual.
- The original domains are retail and airline, making it especially relevant for enterprise agents that must update backend state correctly while staying consistent across long multi-turn conversations.
- It is a reliability benchmark as much as a capability benchmark: agents can solve a task once but fail repeated trials because of nondeterminism or brittle policy adherence.

Methodology:
- Evaluation compares final database state to the annotated goal state, avoiding an LLM judge for pass/fail task completion.
- The key metric is pass^k: probability an agent succeeds across k independent trials, which penalizes systems that are correct only intermittently.
- Reported rows may use different user simulators, model settings, tool schemas, and trial counts; source notes matter for direct comparison.
- We prefer official taubench.com rows and technical reports that specify simulator and pass metric.

Example evaluation tasks:
- "Your name is Raj Lee and your email, you have multiple email addressed, raj89@example.com, rajlee@example.com, lee42@example.com, raj.lee6137@example.com.
You don't remember which email you used for placing the order. You are cautious, confident, pessimistic, sad. You want to cancel the order #W9933266 which you've just placed because you don't need the items." (citation: τ-bench retail dev tasks, https://raw.githubusercontent.com/sierra-research/tau-bench/main/tau_bench/envs/retail/tasks_dev.py)
- "Your name is Fatima Anderson and your zip code is 32100.
You are relaxing, logical, shy, polite. For the #W2974929 that you've just placed, you realize that you've picked the wrong deck material, change it to 'bamboo' deck material." (citation: τ-bench retail dev tasks, https://raw.githubusercontent.com/sierra-research/tau-bench/main/tau_bench/envs/retail/tasks_dev.py)
- "Your name is Aarav Sanchez and your email is aarav.sanchez5467@example.com.
You are patient, shy. Return the Portable Charger of your order. But before confirming, decide to return the Bookshelf and the Cycling Helmet as well.
You wanna get website credit for the return." (citation: τ-bench retail dev tasks, https://raw.githubusercontent.com/sierra-research/tau-bench/main/tau_bench/envs/retail/tasks_dev.py)

Interpretation notes:
- Compare rows carefully: prompt setup, tool schema, user simulator, and trial count can all change pass^k.

Canonical links:
- τ-bench paper: https://arxiv.org/abs/2406.12045
- τ-bench leaderboard: https://taubench.com/
- τ-bench repository: https://github.com/sierra-research/tau-bench
- Sierra Research blog: https://sierra.ai/blog/tau-bench-shaping-development-evaluation-agents

| Rank | System | Score | Organization | Notes | Source | Repo |
|------|--------|-------|--------------|-------|--------|------|
| 1 | Step-3.5-Flash | 88.2% | StepFun | Direct technical report; Step-3.5 architecture optimized for high-consistency tool use. | https://arxiv.org/abs/2602.10604 | — |
| 2 | GLM-4.7 | 87.4% | Z.ai | Official Z.ai Developer docs; Introduces enhanced agentic policy compliance for enterprise retail/airline workflows. | https://docs.z.ai/guides/llm/glm-4.7 | — |
| 3 | MiMo-V2-Flash | 80.3% | Xiaomi | Technical Report; MoE model with 309B total/15B active params and hybrid attention for long-horizon agent tasks. | https://arxiv.org/abs/2601.02780 | — |
| 4 | GLM-4.7-Flash | 79.5% | Z.ai | Verified via Cerebras & Z.ai; SOTA performance for a lightweight flash-tier model in tool-use consistency. | https://inference-docs.cerebras.ai/resources/glm-47-migration | — |
| 5 | MiniMax M2 | 77.2% | MiniMax | Official repository; M2 specifically models 'thinking' content to handle complex multi-turn toolchains. | https://github.com/MiniMax-AI/MiniMax-M2 | — |
| 6 | Claude Opus 4.5 | 70.2% | Anthropic | Sierra Research Evaluation; Measured using the 'High' user simulator and GPT-5.2 judge protocol. | https://taubench.com | — |
| 7 | GPT-5.2 | 69.9% | OpenAI | Sierra Research Evaluation; Results based on the standardized Sierra simulation harness. | https://taubench.com | — |
| 8 | Qwen3.5-397B-A17B | 68.4% | Alibaba | Official Qwen Blog; Native multimodal agent capabilities with sparse MoE architecture (17B active params). | https://qwen.ai/blog?id=qwen3.5 | — |
| 9 | Gemini 3 Flash | 67.8% | Google DeepMind | DeepMind Technical Report; Evaluation includes performance across retail, airline, and telecom domains. | https://storage.googleapis.com/deepmind-media/gemini/gemini_3_pro_model_evaluation.pdf | — |
| 10 | Gemini 3 Pro | 65.8% | Google DeepMind | DeepMind Technical Report; Frontier reasoning performance for enterprise customer service simulations. | https://storage.googleapis.com/deepmind-media/gemini/gemini_3_pro_model_evaluation.pdf | — |
| 11 | GLM-5 | 63.2% | Zhipu AI | τ-bench overall pass^1 (gpt-5.2 user sim, reasoning enabled); reported on taubench.com. | https://taubench.com/ | — |
| 12 | Claude Sonnet 4.5 | 62.9% | Anthropic | τ-bench overall pass^1 (gpt-5.2 user sim, reasoning enabled); reported on taubench.com. | https://taubench.com/ | — |

FAQ:
- Q: Which system is currently best on τ-bench?
  A: Step-3.5-Flash is the model currently leading with a tracked score of 88.2%. This page is model-focused, so rankings mostly reflect model capability under the reported harness. Based on our latest tracked results, last updated Apr 16, 2026.
- Q: What should I read into a τ-bench score?
  A: τ-bench scores are most useful for within-benchmark ranking. Read the Notes column to understand setup context, and use the methodology section before making procurement or architecture decisions.
- Q: Are these independently verified?
  A: Not always. Some rows are independently benchmarked and some are team-reported. Use each source link and notes field to verify evidence level before drawing strong conclusions.
- Q: Can I compare every row directly?
  A: Use caution. Rows can vary by evaluator, harness, attempt budget, tool access, task filtering, or verification level. Source links and notes are part of the score, not decoration.
