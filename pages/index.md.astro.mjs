import { a as getTopResult, b as benchmarkCategoryLabels, g as getAllBenchmarkPages } from '../chunks/benchmark-hub_B4z2g2Si.mjs';
export { renderers } from '../renderers.mjs';

const GET = () => {
  const pages = getAllBenchmarkPages();
  const lines = [];
  lines.push("# Steel Benchmark Hub");
  lines.push("");
  lines.push("> Benchmark-specific leaderboards for agent and model evaluation.");
  lines.push("> Source: https://leaderboard.steel.dev | Maintained by Steel (https://steel.dev)");
  lines.push("");
  lines.push("Canonical benchmark pages:");
  lines.push("");
  lines.push("| Benchmark | Category | Top tracked row | Updated | Description | URL |");
  lines.push("|-----------|----------|------------------|---------|-------------|-----|");
  pages.forEach((page) => {
    const top = getTopResult(page.results);
    lines.push(
      `| ${page.meta.name} | ${benchmarkCategoryLabels[page.meta.category]} | ${top ? `${top.systemName} (${top.scoreDisplay})` : "N/A"} | ${page.meta.lastUpdated} | ${page.meta.description} | https://leaderboard.steel.dev/leaderboards/${page.meta.slug}/ |`
    );
  });
  lines.push("");
  lines.push("## Featured");
  lines.push("");
  lines.push("- WebVoyager remains the flagship browser-agent benchmark module on the homepage.");
  lines.push(
    "- Each benchmark page follows: Leaderboard -> About -> Example tasks -> Methodology -> Links -> Related benchmarks -> FAQ."
  );
  lines.push("");
  lines.push("- [Full context file](https://leaderboard.steel.dev/llms-full.txt)");
  return new Response(lines.join("\n"), {
    headers: { "Content-Type": "text/markdown; charset=utf-8" }
  });
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  GET
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
