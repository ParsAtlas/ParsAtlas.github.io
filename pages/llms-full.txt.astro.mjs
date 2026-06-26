import { a as getTopResult, b as benchmarkCategoryLabels, r as renderBenchmarkMarkdown, g as getAllBenchmarkPages } from '../chunks/benchmark-hub_B4z2g2Si.mjs';
export { renderers } from '../renderers.mjs';

const GET = () => {
  const pages = getAllBenchmarkPages();
  const lines = [];
  lines.push("# Steel Benchmark Hub — Full Context");
  lines.push("");
  lines.push("> Benchmark-specific rankings for agent and model evaluation.");
  lines.push("> Source: https://leaderboard.steel.dev | Maintained by Steel (https://steel.dev)");
  lines.push("");
  lines.push("## Benchmarks");
  lines.push("");
  lines.push("| Name | Category | Scope | Top tracked row | URL |");
  lines.push("|------|----------|-------|-----------------|-----|");
  pages.forEach((page) => {
    const top = getTopResult(page.results);
    lines.push(
      `| ${page.meta.name} | ${benchmarkCategoryLabels[page.meta.category]} | ${page.meta.scope} | ${top ? `${top.systemName} (${top.scoreDisplay})` : "N/A"} | https://leaderboard.steel.dev/leaderboards/${page.meta.slug}/ |`
    );
  });
  lines.push("");
  for (const page of pages) {
    lines.push(renderBenchmarkMarkdown(page, { headingLevel: 2 }));
    lines.push("");
  }
  return new Response(lines.join("\n"), {
    headers: {
      "Content-Type": "text/plain; charset=utf-8"
    }
  });
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  GET
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
