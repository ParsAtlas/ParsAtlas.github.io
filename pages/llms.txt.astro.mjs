import { g as getAllBenchmarkPages } from '../chunks/benchmark-hub_B4z2g2Si.mjs';
export { renderers } from '../renderers.mjs';

const GET = () => {
  const pages = getAllBenchmarkPages();
  const lines = [];
  lines.push("# Steel Agent Leaderboard");
  lines.push("");
  lines.push("> Benchmark hub with canonical benchmark leaderboard pages.");
  lines.push("");
  lines.push("Maintained by Steel (https://steel.dev).");
  lines.push("");
  lines.push("## Leaderboard");
  lines.push("");
  pages.forEach((page) => {
    lines.push(
      `- [${page.meta.name}](https://leaderboard.steel.dev/leaderboards/${page.meta.slug}/): ${page.meta.description}`
    );
  });
  lines.push("");
  lines.push("## Optional");
  lines.push("");
  lines.push(
    "- [Hub markdown index](https://leaderboard.steel.dev/index.md): Homepage benchmark hub summary."
  );
  lines.push(
    "- [Full context file](https://leaderboard.steel.dev/llms-full.txt): Leaderboard data in a single text file optimized for LLM context."
  );
  return new Response(lines.join("\n") + "\n", {
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
