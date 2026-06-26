# HealthAdminBench

HealthAdminBench leaderboard for computer-use agents completing 135 healthcare administration tasks — prior authorization, denials and appeals, and DME orders — across four simulated GUI portals.

Canonical URL: https://leaderboard.steel.dev/leaderboards/healthadminbench/
Category: Browser agents
Scope: agent
Last updated: 2026-06-12

About:
- HealthAdminBench evaluates computer-use agents on healthcare revenue-cycle work: 135 expert-designed tasks covering prior authorization, appeals and denials management, and durable medical equipment (DME) order processing, executed in four simulated GUI environments (an EHR, two payer portals, and a fax system). It was built by Stanford's Shah Lab with Stanford Healthcare and Kinetic Systems.
- Each task decomposes into fine-grained verifiable subtasks — 1,698 evaluation points in total — scored by deterministic portal-state checks plus LLM-judged rubric items for free-text documentation and clinical reasoning. Full-task success requires passing every subtask, making it a strict end-to-end reliability measure.
- The benchmark's headline finding is the gap between subtask and full-task performance: agents routinely complete 70–95% of subtasks while finishing far fewer whole workflows, which mirrors the reliability bar real back-office automation has to clear.

Methodology:
- Headline metric is full-task success rate (pass@1 over 135 tasks): a task counts only if all of its subtasks pass. Subtask success rate is reported alongside it and is much higher for every agent.
- The paper's default configuration is screenshot-only observations with task-description-plus-portal-guidance prompting; configuration moves scores dramatically (Claude Opus 4.6 jumps from 14.8% to 51.9% with accessibility-tree observations, and task-specific prompts push harness agents above 90%).
- Rows mix two harness families: the paper's standardized harness, native computer-use systems (Anthropic and OpenAI CUA loops), and Anthropic's internal browser-use port from its system card; compare within a family before comparing across.
- Anthropic's system card rows used an internal port of the benchmark with a browser-use agent, adaptive thinking, a 500k-token per-task budget, per-portal skill files, and a single trial per model, with Claude Opus 4.8 grading the LLM-judged subtasks; Anthropic states these results are not directly comparable to the published leaderboard.

Example evaluation tasks:
- "Open referral REF-2025-002 for Smith, Emily (67F with Santa Clara Family Health Plan - Medicare Advantage). Determine whether the payer requires prior authorization for this eye follow-up visit. Document your determination, then clear the referral from the worklist." (citation: HealthAdminBench task explorer, https://som-shahlab.github.io/health-admin-bench-website/data/master_json.json)
- "Open denial DEN-001 for Martinez, Carlos. Review all available information about this denial and determine the appropriate triage disposition. Document your reasoning in a triage note." (citation: HealthAdminBench task explorer, https://som-shahlab.github.io/health-admin-bench-website/data/master_json.json)
- "Download all 3 required documents, fax to DME supplier, and document in the Notes tab." (citation: HealthAdminBench task explorer, https://som-shahlab.github.io/health-admin-bench-website/data/master_json.json)

Interpretation notes:
- New benchmark with no independent submissions yet: current rows are the paper authors' baselines plus Anthropic's self-reported system card run.
- Anthropic system card rows come from an internal port with a browser-use scaffold, per-portal skill files, and a single trial, and were self-graded by Claude Opus 4.8; Anthropic itself flags them as not directly comparable to the published leaderboard.
- Setup differences (observation mode, prompting, orchestration) move scores more than model choice does on this page, so read the Notes column before treating rank gaps as capability gaps.

Canonical links:
- HealthAdminBench paper: https://arxiv.org/abs/2604.09937
- Project site and leaderboard: https://som-shahlab.github.io/health-admin-bench-website/
- HealthAdminBench repository: https://github.com/som-shahlab/health-admin-bench
- Claude Fable 5 & Mythos 5 system card: https://www.anthropic.com/claude-fable-5-mythos-5-system-card

| Rank | System | Score | Organization | Notes | Source | Repo |
|------|--------|-------|--------------|-------|--------|------|
| 1 | Claude Mythos 5 (browser-use) | 51.9% | Anthropic | Anthropic-run internal port with a browser-use scaffold, per-portal skill files, and a single trial; Anthropic flags it as not directly comparable to the published leaderboard. | https://www.anthropic.com/claude-fable-5-mythos-5-system-card | — |
| 1 | Claude Opus 4.8 (browser-use) | 51.9% | Anthropic | Same Anthropic internal-port setup as the Mythos 5 row, and also the grader model for the run's LLM-judged subtasks; ties its successor at 51.9%. | https://www.anthropic.com/claude-fable-5-mythos-5-system-card | — |
| 3 | Claude Mythos Preview (browser-use) | 47.4% | Anthropic | Anthropic internal-port run with browser-use scaffold and per-portal skill files, single trial; not directly comparable to the paper harness rows. | https://www.anthropic.com/claude-fable-5-mythos-5-system-card | — |
| 4 | Claude Sonnet 4.6 (browser-use) | 45.2% | Anthropic | Anthropic internal-port run with browser-use scaffold and per-portal skill files, single trial; not directly comparable to the paper harness rows. | https://www.anthropic.com/claude-fable-5-mythos-5-system-card | — |
| 5 | Claude Opus 4.6 CUA | 36.3% | Anthropic | Native Anthropic computer-use system; best paper result under the headline screenshot-only, task-description-plus-portal-guidance configuration. | https://arxiv.org/abs/2604.09937 | — |
| 6 | GPT-5.4 CUA | 26.7% | OpenAI | Native OpenAI computer-use loop; highest subtask success in the paper but weaker end-to-end completion than Claude Opus 4.6 CUA. | https://arxiv.org/abs/2604.09937 | — |
| 7 | Kimi K2.5 | 15.6% | Moonshot AI | Paper's standardized harness with screenshot-only observations and portal guidance prompting; strongest harness-based model. | https://arxiv.org/abs/2604.09937 | — |
| 8 | Claude Opus 4.6 | 14.8% | Anthropic | Standardized harness, screenshot-only; the paper notes it reaches 51.9% under accessibility-tree observations, showing how much observation mode matters. | https://arxiv.org/abs/2604.09937 | — |
| 9 | Qwen 3.5 | 13.3% | Alibaba | Paper's standardized harness with screenshot-only observations and portal guidance prompting. | https://arxiv.org/abs/2604.09937 | — |
| 10 | Gemini 3.1 Pro | 11.9% | Google | Paper's standardized harness with screenshot-only observations and portal guidance prompting. | https://arxiv.org/abs/2604.09937 | — |
| 11 | GPT-5.4 | 5.9% | OpenAI | Standardized harness, screenshot-only; far below its native CUA result, underlining the impact of system-level orchestration. | https://arxiv.org/abs/2604.09937 | — |

FAQ:
- Q: Which system is currently best on HealthAdminBench?
  A: Claude Mythos 5 (browser-use) is the system/agent setup currently leading with a tracked score of 51.9%. This ranking reflects submitted system setups (model plus tools and policy), not just a base model. Based on our latest tracked results, last updated Jun 12, 2026.
- Q: What should I read into a HealthAdminBench score?
  A: HealthAdminBench scores are most useful for within-benchmark ranking. Read the Notes column to understand setup context, and use the methodology section before making procurement or architecture decisions.
- Q: Can I compare every row directly?
  A: Use caution. Rows can vary by evaluator, harness, attempt budget, tool access, task filtering, or verification level. Source links and notes are part of the score, not decoration.
