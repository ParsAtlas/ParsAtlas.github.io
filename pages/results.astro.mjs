import { c as createComponent, r as renderComponent, e as renderScript, a as renderTemplate, m as maybeRenderHead, b as addAttribute } from '../chunks/astro/server_DZYtLLxf.mjs';
import 'piccolore';
import { $ as $$Layout } from '../chunks/Layout_BjieEwx1.mjs';
import { $ as $$FaqList } from '../chunks/FaqList_BlKaPhVX.mjs';
import { b as benchmarkCategoryLabels, g as getAllBenchmarkPages } from '../chunks/benchmark-hub_B4z2g2Si.mjs';
/* empty css                                   */
export { renderers } from '../renderers.mjs';

const $$Results = createComponent(($$result, $$props, $$slots) => {
  const pages = getAllBenchmarkPages();
  function reportedSortKey(reportedAt) {
    if (!reportedAt) return "";
    if (/^\d{4}-\d{2}$/.test(reportedAt)) return `${reportedAt}-01`;
    return reportedAt;
  }
  const entries = pages.flatMap(
    (page) => page.results.map((row) => ({
      benchmark: page.meta.name,
      benchmarkSlug: page.meta.slug,
      category: page.meta.category,
      categoryLabel: benchmarkCategoryLabels[page.meta.category],
      scope: page.meta.scope,
      rank: row.rank,
      systemName: row.systemName,
      organization: row.organization,
      scoreDisplay: row.scoreDisplay,
      scoreValue: row.scoreValue,
      sourceUrl: row.sourceUrl,
      repoUrl: row.repoUrl,
      notesShort: row.notesShort,
      reportedAt: row.reportedAt,
      reportedSortKey: reportedSortKey(row.reportedAt)
    }))
  );
  entries.sort((a, b) => {
    const dateCmp = b.reportedSortKey.localeCompare(a.reportedSortKey);
    if (dateCmp !== 0) return dateCmp;
    return a.rank - b.rank;
  });
  const totalResults = entries.length;
  const totalBenchmarks = pages.length;
  const categories = Object.keys(benchmarkCategoryLabels).map((key) => ({
    key,
    label: benchmarkCategoryLabels[key],
    count: entries.filter((e) => e.category === key).length
  })).filter((c) => c.count > 0);
  const benchmarkOptions = pages.map((page) => ({
    slug: page.meta.slug,
    name: page.meta.name,
    category: page.meta.category,
    count: page.results.length
  }));
  const BASE_URL = "https://leaderboard.steel.dev";
  const pageUrl = `${BASE_URL}/results`;
  const pageTitle = `AI Agent Benchmark Results: All ${totalBenchmarks} Leaderboards in One Index | Steel.dev`;
  const pageDescription = `Browse ${totalResults} sourced AI agent benchmark results across ${totalBenchmarks} leaderboards \u2014 WebVoyager, WebArena, OSWorld, SWE-bench Verified, GAIA, BrowseComp and more. Filter by category, benchmark, or search by agent or organization.`;
  const datasetSchema = JSON.stringify({
    "@context": "https://schema.org",
    "@type": "Dataset",
    name: "AI Agent Benchmark Results Index",
    description: pageDescription,
    url: pageUrl,
    dateModified: (/* @__PURE__ */ new Date()).toISOString().split("T")[0],
    creator: {
      "@type": "Organization",
      name: "Steel.dev",
      url: "https://steel.dev"
    },
    license: "https://creativecommons.org/licenses/by/4.0/",
    keywords: [
      "AI agent benchmark",
      "LLM benchmark leaderboard",
      "agent evaluation",
      "WebVoyager results",
      "WebArena leaderboard",
      "OSWorld leaderboard",
      "SWE-bench results",
      "GAIA benchmark scores",
      "BrowseComp results",
      "AI agent leaderboard",
      "browser agent benchmark",
      "coding agent benchmark",
      "computer use agent benchmark"
    ],
    variableMeasured: pages.map((page) => ({
      "@type": "PropertyValue",
      name: `${page.meta.name} score`,
      description: `Agent scores on the ${page.meta.name} benchmark`
    })),
    distribution: {
      "@type": "DataDownload",
      encodingFormat: "text/html",
      contentUrl: pageUrl
    }
  });
  const itemListSchema = JSON.stringify({
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "AI Agent Benchmarks",
    description: "List of AI agent benchmarks tracked in the Steel.dev results index",
    numberOfItems: pages.length,
    itemListElement: pages.map((page, i) => {
      const top = page.results[0];
      return {
        "@type": "ListItem",
        position: i + 1,
        name: page.meta.name,
        description: top ? `Top score: ${top.scoreDisplay} by ${top.systemName} (${top.organization})` : page.meta.name,
        url: `${BASE_URL}/leaderboards/${page.meta.slug}/`
      };
    })
  });
  const breadcrumbSchema = JSON.stringify({
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Browser Agent Leaderboards",
        item: `${BASE_URL}/`
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "All Benchmark Results",
        item: pageUrl
      }
    ]
  });
  const resultsFaqs = [
    {
      q: "Are scores on this page comparable across benchmarks?",
      a: "No. Each benchmark uses its own task set, evaluator, scoring metric, and scope (model vs. agent). A 90% on one benchmark and a 90% on another do not measure the same thing. Compare scores within a single benchmark, and read methodology notes on the individual <a href='/'>benchmark pages</a> before drawing conclusions."
    },
    {
      q: "Why is the default order by reported date rather than score?",
      a: "Scores across different benchmarks aren't on the same scale, so a global score sort would be misleading. Sorting by reported date surfaces the freshest results first. When you filter to a single benchmark the order switches to within-benchmark rank, which is the meaningful comparison."
    },
    {
      q: "Are these scores independently verified?",
      a: "Not always. Some rows are independently benchmarked and some are self-reported by the agent or model team. Every row links to its source (paper, model card, repository, or launch post). Use those links and any per-row notes to assess evidence level before drawing strong conclusions."
    },
    {
      q: "How is this index sourced and updated?",
      a: "Rows are taken from public papers, model cards, repositories, and launch posts. New results appear as they are published \u2014 typically weekly. If you spot a missing agent or a stale score, open a pull request or issue on <a href='https://github.com/steel-dev/leaderboard' target='_blank' rel='noopener noreferrer'>GitHub</a>."
    },
    {
      q: "How do I add my agent or model to this list?",
      a: "Open a pull request on <a href='https://github.com/steel-dev/leaderboard' target='_blank' rel='noopener noreferrer'>GitHub</a>. You need a publicly verifiable benchmark score, a link to the source (paper, post, or repo), and a homepage or repository for your agent."
    },
    {
      q: "Who maintains this leaderboard?",
      a: "<a href='https://steel.dev?utm_source=leaderboard&utm_medium=website&utm_content=results-faq' target='_blank' rel='noopener noreferrer'>Steel</a> maintains it as an open reference for the browser-agent ecosystem. Steel is browser infrastructure for AI agents \u2014 cloud browser sessions with anti-bot handling, proxy rotation, and session replay. Contributions and corrections are welcome on <a href='https://github.com/steel-dev/leaderboard' target='_blank' rel='noopener noreferrer'>GitHub</a>."
    }
  ];
  const faqSchema = JSON.stringify({
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: resultsFaqs.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.a.replace(/<[^>]+>/g, "")
      }
    }))
  });
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": pageTitle, "description": pageDescription, "structuredData": [datasetSchema, itemListSchema, breadcrumbSchema, faqSchema], "data-astro-cid-pttseihw": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<article class="results-shell mx-auto w-full py-8" data-astro-cid-pttseihw> <header class="results-hero" data-astro-cid-pttseihw> <h1 class="m-0 text-[2rem] font-medium leading-9 tracking-[-0.045em] text-(--color-text-strong)" data-astro-cid-pttseihw>
AI Agent Benchmark Results — All Leaderboards
</h1> <p class="mb-0 mt-4 max-w-3xl text-sm leading-6 muted" data-astro-cid-pttseihw>
Browse <strong data-astro-cid-pttseihw>${totalResults}</strong> sourced results across <strong data-astro-cid-pttseihw>${totalBenchmarks}</strong> AI
        agent benchmarks — WebVoyager, WebArena, OSWorld, SWE-bench Verified, GAIA, BrowseComp, and more.
        Every row links to the original paper, model card, repository, or launch post. Filter by category,
        benchmark, or search by agent or organization name.
</p> <p class="mb-0 mt-3 text-xs muted" data-astro-cid-pttseihw>
Need methodology, evaluator details, and example tasks before comparing scores? Open the
        individual <a href="/" data-astro-cid-pttseihw>benchmark hub</a> page for any benchmark below.
</p> </header> <details class="comparability-notice mt-6" data-astro-cid-pttseihw> <summary class="comparability-summary" data-astro-cid-pttseihw> <span class="comparability-icon" aria-hidden="true" data-astro-cid-pttseihw> <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-astro-cid-pttseihw> <path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z" data-astro-cid-pttseihw></path> <path d="M12 9v4" data-astro-cid-pttseihw></path> <path d="M12 17h.01" data-astro-cid-pttseihw></path> </svg> </span> <span class="comparability-heading" data-astro-cid-pttseihw>
Scores on this page are <em data-astro-cid-pttseihw>not</em> directly comparable across benchmarks.
</span> <span class="comparability-toggle muted shrink-0" aria-hidden="true" data-astro-cid-pttseihw> <span class="inline details-closed" data-astro-cid-pttseihw>+</span> <span class="hidden details-open" data-astro-cid-pttseihw>−</span> </span> </summary> <p class="comparability-text" data-astro-cid-pttseihw>
This index puts every result in one place for browsing — it does not normalize methodology.
        Each benchmark uses its own task set, evaluator, scoring metric, and scope (model vs. agent).
        A 90% on one benchmark does not mean the same thing as a 90% on another. Compare scores
<em data-astro-cid-pttseihw>within</em> a single benchmark using the filters below, and read each benchmark's
        methodology notes on its dedicated page before drawing conclusions.
</p> </details> <section class="mt-8 scroll-mt-8" id="filters" aria-label="Filter results" data-astro-cid-pttseihw> <div class="filter-block" data-astro-cid-pttseihw> <div class="filter-row" data-astro-cid-pttseihw> <span class="filter-label" data-astro-cid-pttseihw>Category</span> <div class="filter-chips" role="group" aria-label="Filter by category" data-astro-cid-pttseihw> <button type="button" class="filter-chip is-active" data-filter="category" data-value="all" aria-pressed="true" data-astro-cid-pttseihw>
All <span class="filter-chip-count" data-astro-cid-pttseihw>${totalResults}</span> </button> ${categories.map((c) => renderTemplate`<button type="button" class="filter-chip" data-filter="category"${addAttribute(c.key, "data-value")} aria-pressed="false" data-astro-cid-pttseihw> ${c.label} <span class="filter-chip-count" data-astro-cid-pttseihw>${c.count}</span> </button>`)} </div> </div> <div class="filter-row" data-astro-cid-pttseihw> <span class="filter-label" data-astro-cid-pttseihw>Benchmark</span> <div class="filter-chips" role="group" aria-label="Filter by benchmark" data-astro-cid-pttseihw> <button type="button" class="filter-chip is-active" data-filter="benchmark" data-value="all" aria-pressed="true" data-astro-cid-pttseihw>
All
</button> ${benchmarkOptions.map((b) => renderTemplate`<button type="button" class="filter-chip" data-filter="benchmark"${addAttribute(b.slug, "data-value")}${addAttribute(b.category, "data-category")} aria-pressed="false" data-astro-cid-pttseihw> ${b.name} <span class="filter-chip-count" data-astro-cid-pttseihw>${b.count}</span> </button>`)} </div> </div> <div class="filter-row" data-astro-cid-pttseihw> <label class="filter-label" for="results-search" data-astro-cid-pttseihw>Search</label> <input type="search" id="results-search" class="filter-search" placeholder="Filter by agent name or organization…" autocomplete="off" spellcheck="false" data-astro-cid-pttseihw> </div> </div> <p class="results-meta mt-3 text-xs dim" data-astro-cid-pttseihw>
Showing <span data-results-count data-astro-cid-pttseihw>${totalResults}</span> of ${totalResults} results
</p> </section> <section class="table-shell mt-4 w-full" id="results-table" data-astro-cid-pttseihw> <div class="lb-module-head flex flex-wrap items-center gap-3 px-3 py-2" data-astro-cid-pttseihw> <h2 class="m-0 text-sm font-normal uppercase tracking-[-0.02em] text-(--color-accent)" data-astro-cid-pttseihw>
Results
</h2> <div class="lb-head-lines" aria-hidden="true" data-astro-cid-pttseihw> <span data-astro-cid-pttseihw></span><span data-astro-cid-pttseihw></span><span data-astro-cid-pttseihw></span><span data-astro-cid-pttseihw></span><span data-astro-cid-pttseihw></span> </div> <span class="results-sort-hint text-[0.6875rem] uppercase tracking-[0.04em] text-(--color-text-dim)" data-sort-hint data-astro-cid-pttseihw>
Sorted by reported date
</span> </div> <div class="overflow-x-auto p-4 md:p-6" data-astro-cid-pttseihw> <table class="results-table w-full min-w-[760px] border-collapse text-xs" data-astro-cid-pttseihw> <thead class="lb-header text-left text-[0.6875rem] uppercase tracking-[0.025em] text-(--color-text-dim)" data-astro-cid-pttseihw> <tr data-astro-cid-pttseihw> <th class="px-3 py-2 font-semibold" data-astro-cid-pttseihw>Benchmark</th> <th class="px-3 py-2 font-semibold" data-astro-cid-pttseihw>Rank</th> <th class="px-3 py-2 font-semibold" data-astro-cid-pttseihw>System / Submission</th> <th class="px-3 py-2 font-semibold" data-astro-cid-pttseihw>Score</th> <th class="px-3 py-2 font-semibold" data-astro-cid-pttseihw>Organization</th> <th class="px-3 py-2 font-semibold" data-astro-cid-pttseihw>Reported</th> <th class="px-3 py-2 font-semibold" data-astro-cid-pttseihw>Source</th> </tr> </thead> <tbody data-astro-cid-pttseihw> ${entries.map((row) => renderTemplate`<tr class="lb-row align-middle"${addAttribute(row.category, "data-category")}${addAttribute(row.benchmarkSlug, "data-benchmark")}${addAttribute(row.rank, "data-rank")}${addAttribute(row.reportedSortKey, "data-reported")}${addAttribute(`${row.systemName} ${row.organization} ${row.benchmark}`.toLowerCase(), "data-search")} data-astro-cid-pttseihw> <td class="px-3 py-3 whitespace-nowrap" data-astro-cid-pttseihw> <a${addAttribute(`/leaderboards/${row.benchmarkSlug}/`, "href")} class="benchmark-link" data-astro-cid-pttseihw> ${row.benchmark} </a> </td> <td class="px-3 py-3 text-(--color-text-dim)" data-astro-cid-pttseihw>#${row.rank}</td> <td class="px-3 py-3 text-(--color-text-strong)" data-astro-cid-pttseihw> <div class="flex flex-wrap items-center gap-2" data-astro-cid-pttseihw> <span class="system-name" data-astro-cid-pttseihw>${row.systemName}</span> ${row.notesShort && renderTemplate`<span class="results-note"${addAttribute(row.notesShort, "title")} aria-label="Note" data-astro-cid-pttseihw>
ⓘ
</span>`} </div> </td> <td class="px-3 py-3 font-semibold text-(--color-accent)" data-astro-cid-pttseihw>${row.scoreDisplay}</td> <td class="px-3 py-3 text-(--color-text-dim)" data-astro-cid-pttseihw>${row.organization}</td> <td class="px-3 py-3 whitespace-nowrap muted" data-astro-cid-pttseihw>${row.reportedAt ?? "\u2014"}</td> <td class="px-3 py-3" data-astro-cid-pttseihw> <a${addAttribute(row.sourceUrl, "href")} target="_blank" rel="noopener noreferrer nofollow" data-astro-cid-pttseihw>
Source
</a> </td> </tr>`)} </tbody> </table> </div> <p class="px-4 py-3 text-xs dim border-t border-(--color-border)" data-empty-state hidden data-astro-cid-pttseihw>
No results match these filters. Clear filters or try a different search.
</p> </section> <section class="results-footnote mt-10 text-sm leading-6 muted" data-astro-cid-pttseihw> <p class="m-0" data-astro-cid-pttseihw>
Scores come from public papers, model cards, repositories, and launch posts. Comparisons are
        most useful within a single benchmark — across benchmarks, evaluators, task sets, judges,
        attempt budgets, and tool access can differ, so treat cross-benchmark rankings as
        directional. Use the individual <a href="/" data-astro-cid-pttseihw>benchmark pages</a> for methodology and
        interpretation notes.
</p> </section> <section id="faq" class="mt-10 scroll-mt-8" data-astro-cid-pttseihw> ${renderComponent($$result2, "FaqList", $$FaqList, { "items": resultsFaqs, "data-astro-cid-pttseihw": true })} </section> </article> ` })}  ${renderScript($$result, "/Users/niknam/Documents/Code/ParsAtlas/pars-atlas-arena/src/pages/results.astro?astro&type=script&index=0&lang.ts")}`;
}, "/Users/niknam/Documents/Code/ParsAtlas/pars-atlas-arena/src/pages/results.astro", void 0);

const $$file = "/Users/niknam/Documents/Code/ParsAtlas/pars-atlas-arena/src/pages/results.astro";
const $$url = "/results";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Results,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
