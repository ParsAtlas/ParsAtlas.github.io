# WebVoyager

WebVoyager benchmark leaderboard for AI browser agents on 643 live-web tasks across 15 popular websites, with source-linked scores and methodology notes.

Canonical URL: https://leaderboard.steel.dev/leaderboards/webvoyager/
Category: Browser agents
Scope: agent
Last updated: 2026-03-22

About:
- WebVoyager evaluates end-to-end browser agents on 643 tasks across 15 popular real-world websites. Tasks cover search, navigation, form filling, map and travel lookup, shopping, and information retrieval on live pages rather than static snapshots.
- It is useful as a browser-agent adoption signal because many commercial and open-source agents report it, but it is unusually sensitive to task drift, removed tasks, evaluator choice, and whether the run used the full task suite.
- Read each row as a full-system result: model, prompt, browser execution layer, retry policy, DOM or accessibility extraction, and visual grounding can all contribute to the final score.

Methodology:
- Primary metric is task success rate: completed tasks divided by evaluated tasks. The original paper used GPT-4V as an automatic evaluator and reported 85.3% agreement with human judgment.
- We prioritize public sources that identify the system, score, task subset or evaluator when available, and a paper, repository, model card, or launch post that can be checked later.
- Direct comparisons are strongest when systems run the same task set, same evaluator, same attempt policy, and same handling of stale or auth-gated tasks.
- Rows that use filtered task subsets, manual correction, or custom judges are kept when source-linked, but notes should be read before treating adjacent ranks as meaningful differences.

Example evaluation tasks:
- "Provide a recipe for vegetarian lasagna with more than 100 reviews and a rating of at least 4.5 stars suitable for 6 people." (citation: WebVoyager dataset, https://raw.githubusercontent.com/MinorJerry/WebVoyager/main/data/WebVoyager_data.jsonl)
- "Search an Xbox Wireless controller with green color and rated above 4 stars." (citation: WebVoyager dataset, https://raw.githubusercontent.com/MinorJerry/WebVoyager/main/data/WebVoyager_data.jsonl)
- "Find a Blue iPhone 12 Pro 128gb and add to cart." (citation: WebVoyager dataset, https://raw.githubusercontent.com/MinorJerry/WebVoyager/main/data/WebVoyager_data.jsonl)

Interpretation notes:
- WebVoyager is high-visibility but not fully standardized across modern submissions; small score gaps can reflect setup choices as much as capability.

Canonical links:
- WebVoyager paper: https://arxiv.org/abs/2401.13919
- WebVoyager repository: https://github.com/MinorJerry/WebVoyager
- Emergence WebVoyager evaluation audit: https://arxiv.org/abs/2603.29020

| Rank | System | Score | Organization | Notes | Source | Repo |
|------|--------|-------|--------------|-------|--------|------|
| 1 | Alumnium | 98.5% | Alumnium | Claude Code orchestrating Alumnium MCP with GPT-5 Nano + Selenium; accessibility-tree parsing with visual reasoning. | https://alumnium.ai/blog/webvoyager-benchmark/ | https://github.com/alumnium-hq/alumnium |
| 2 | Surfer 2 | 97.1% | H Company | System-level orchestration with submitter-defined setup details. | https://hcompany.ai/surfer-2 | — |
| 3 | Magnitude | 93.9% | Magnitude | Open-source architecture utilizing a modular agentic stack. | https://magnitude.run/webvoyager | https://github.com/magnitudedev/browser-agent |
| 4 | Surfer-H + Holo1 | 92.2% | H Company | Multi-modal action kernels integrated via H-Company research. | https://arxiv.org/pdf/2506.02865 | https://github.com/hcompai/surfer-h-cli |
| 5 | Browserable | 90.4% | Browserable | Fine-tuned browser control models within a commercial framework. | https://www.browserable.ai/blog/web-voyager-benchmark | https://github.com/browserable/browserable |
| 6 | Browser Use | 89.1% | Browser Use | Multi-step orchestration framework for open-source automation. | https://browser-use.com/posts/sota-technical-report | https://github.com/browser-use/browser-use |
| 7 | GLM-5V-Turbo | 88.5% | Z.ai | Multimodal vision model optimized for GUI automation and coding tasks. | https://docs.z.ai/guides/vlm/glm-5v-turbo | — |
| 8 | Agent Kura | 87.0% | Kura | 602/643 tasks (41 removed for invalid/auth issues); reported on trykura.com. | https://www.trykura.com/benchmarks | — |
| 8 | Operator | 87% | OpenAI | Native browser integration using proprietary vision-control models. | https://openai.com/index/introducing-operator/ | — |
| 10 | Notte | 86.2% | Notte | Self-reported score from Notte's open-operator-evals harness (79.0% under LLM evaluation). | https://github.com/nottelabs/open-operator-evals | https://github.com/nottelabs/notte |
| 11 | Skyvern 2.0 | 85.85% | Skyvern | DOM-level reasoning coupled with real-time error-correction. | https://www.skyvern.com/blog/skyvern-2-0-state-of-the-art-web-navigation-with-85-8-on-webvoyager-eval | https://github.com/Skyvern-AI/skyvern |
| 12 | Project Mariner | 83.5% | Google | Gemini-powered reasoning with precise visual grounding. | https://blog.google/technology/google-deepmind/google-gemini-ai-update-december-2024/ | — |
| 13 | Agent-E | 73.2% | Emergence AI | Hierarchical planning modules within a multi-agent framework. | https://arxiv.org/abs/2407.13032 | https://github.com/EmergenceAI/Agent-E |
| 14 | WebSight | 68% | Academic Research | Navigation system prioritizing visual-only perceptual inputs. | https://arxiv.org/abs/2508.16987 | — |
| 15 | Runner H 0.1 | 67% | H Company | Foundational agent architecture for general web interaction. | https://www.hcompany.ai/blog/a-research-update | — |
| 16 | WebVoyager | 59.1% | Academic Research | Baseline implementation using standard multimodal LLM control. | https://arxiv.org/abs/2401.13919 | https://github.com/MinorJerry/WebVoyager |
| 17 | Anthropic Computer Use 3.5 | 56.0% | Anthropic | Sampled 50/602 tasks for direct comparison; reported on trykura.com. | https://www.trykura.com/benchmarks | — |
| 18 | WILBUR | 53% | Bardeen / UC Berkeley | Research implementation using black-box optimization techniques. | https://arxiv.org/abs/2404.05902 | — |
| 19 | GPT-4 (All Tools) | 30.8% | OpenAI | ChatGPT integrated tool baseline from original WebVoyager paper; reported on arxiv.org. | https://arxiv.org/abs/2401.13919 | — |

FAQ:
- Q: Which system is currently best on WebVoyager?
  A: Alumnium is the system/agent setup currently leading with a tracked score of 98.5%. This ranking reflects submitted system setups (model plus tools and policy), not just a base model. Based on our latest tracked results, last updated Mar 22, 2026.
- Q: What should I read into a WebVoyager score?
  A: WebVoyager scores are most useful for within-benchmark ranking. Read the Notes column to understand setup context, and use the methodology section before making procurement or architecture decisions.
- Q: Are these independently verified?
  A: Not always. Some rows are independently benchmarked and some are team-reported. Use each source link and notes field to verify evidence level before drawing strong conclusions.
- Q: Can I compare every row directly?
  A: Use caution. Rows can vary by evaluator, harness, attempt budget, tool access, task filtering, or verification level. Source links and notes are part of the score, not decoration.
- Q: How is WebVoyager different from WebArena?
  A: WebVoyager runs on live public websites and therefore captures drift, anti-bot behavior, and production UI variance. WebArena is self-hosted and more reproducible, making it better for controlled experiments and ablations.
- Q: Why do WebVoyager scores vary between sources?
  A: Modern submissions may remove stale tasks, use different judges, allow different retry budgets, or manually audit evaluator mistakes. Those choices can move scores without representing a clean capability difference.
- Q: Is WebVoyager enough to pick a production browser agent?
  A: No. It is a useful directional signal for navigation and retrieval, but production selection should also test latency, cost, authentication flows, CAPTCHA or bot defenses, reliability on your own target sites, and recovery from partial failures.
