import { c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead, b as addAttribute } from '../chunks/astro/server_DZYtLLxf.mjs';
import 'piccolore';
import { $ as $$Layout } from '../chunks/Layout_BjieEwx1.mjs';
import { $ as $$FaqList } from '../chunks/FaqList_BlKaPhVX.mjs';
import { h as homeFaqs, g as getAllBenchmarkPages, a as getTopResult } from '../chunks/benchmark-hub_B4z2g2Si.mjs';
/* empty css                                 */
export { renderers } from '../renderers.mjs';

const $$Index = createComponent(($$result, $$props, $$slots) => {
  const pages = getAllBenchmarkPages();
  const benchmarkIndexSchema = JSON.stringify({
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "AI Benchmark Hub",
    description: "Benchmark hub with canonical leaderboard pages for web agents, computer use, research, and coding.",
    url: "https://leaderboard.steel.dev/",
    numberOfItems: pages.length,
    itemListElement: pages.map((page, index) => ({
      "@type": "ListItem",
      position: index + 1,
      item: {
        "@type": "WebPage",
        name: `${page.meta.name} leaderboard`,
        url: `https://leaderboard.steel.dev/leaderboards/${page.meta.slug}/`
      }
    }))
  });
  const faqSchema = JSON.stringify({
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: homeFaqs.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.a.replace(/<[^>]+>/g, "")
      }
    }))
  });
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "AI Agent Benchmark Leaderboards: Browser, Coding & Computer Use | Steel.dev", "description": "Compare AI agent benchmark leaderboards for browser agents, computer use, research, and coding, with sourced scores and methodology notes.", "structuredData": [benchmarkIndexSchema, faqSchema], "markdownUrl": "/index.md", "data-astro-cid-j7pv25f6": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<article class="home-shell mx-auto w-full py-8" data-astro-cid-j7pv25f6> <header class="home-hero" data-astro-cid-j7pv25f6> <div class="flex items-center gap-4" data-astro-cid-j7pv25f6> <img src="/cursor.svg" alt="" width="56" height="56" aria-hidden="true" class="hero-cursor shrink-0" data-astro-cid-j7pv25f6> <h1 class="m-0 text-[2rem] font-medium leading-10 tracking-[-0.045em] text-(--color-text-strong)" data-astro-cid-j7pv25f6>
Browser Agent Leaderboards
</h1> </div> <p class="mb-0 mt-4 max-w-3xl text-sm leading-6 muted" data-astro-cid-j7pv25f6>
Track the best-performing AI agents and models across browser agent benchmarks, computer
        use, research, and coding. Each leaderboard page includes methodology notes, scope labels,
        and source-linked benchmark results.
</p> </header> <section id="benchmarks" class="mt-16 scroll-mt-8" data-astro-cid-j7pv25f6> <div class="home-card-grid" data-astro-cid-j7pv25f6> ${pages.map((page) => {
    const topRows = page.results.slice(0, 3);
    const top = getTopResult(page.results);
    return renderTemplate`<article class="leaderboard-card" data-astro-cid-j7pv25f6> <div class="lb-module-head flex items-center gap-3 px-3 py-2" data-astro-cid-j7pv25f6> <h2 class="m-0 text-sm font-normal tracking-[-0.02em] text-(--color-accent)" data-astro-cid-j7pv25f6> ${page.meta.name} </h2> <div class="lb-head-lines" aria-hidden="true" data-astro-cid-j7pv25f6> <span data-astro-cid-j7pv25f6></span> <span data-astro-cid-j7pv25f6></span> <span data-astro-cid-j7pv25f6></span> <span data-astro-cid-j7pv25f6></span> <span data-astro-cid-j7pv25f6></span> </div> </div> <div class="p-4" data-astro-cid-j7pv25f6> <p class="m-0 min-h-18 text-xs leading-5 muted" data-astro-cid-j7pv25f6>${page.meta.about[0]}</p> <table class="mt-7 w-full border-collapse text-xs" data-astro-cid-j7pv25f6> <thead class="lb-header text-left text-[0.625rem] uppercase tracking-wide text-(--color-text-dim)" data-astro-cid-j7pv25f6> <tr data-astro-cid-j7pv25f6> <th class="py-2 pr-3 font-semibold" data-astro-cid-j7pv25f6>Model</th> <th class="py-2 pl-3 text-right font-semibold" data-astro-cid-j7pv25f6> <span class="inline-flex items-center gap-1.5" data-astro-cid-j7pv25f6>
Score
<span class="score-triangle" aria-hidden="true" data-astro-cid-j7pv25f6></span> </span> </th> </tr> </thead> <tbody data-astro-cid-j7pv25f6> ${topRows.map((row) => renderTemplate`<tr class="lb-row" data-astro-cid-j7pv25f6> <td class="py-2 pr-3 text-(--color-text-strong)" data-astro-cid-j7pv25f6> <span class="mr-2 inline-block h-1.5 w-1.5 rounded-full bg-(--color-text-dim) align-middle" data-astro-cid-j7pv25f6></span> ${row.systemName} </td> <td class="py-2 pl-3 text-right font-semibold text-(--color-accent)" data-astro-cid-j7pv25f6> ${row.scoreDisplay} </td> </tr>`)} </tbody> </table> ${top && renderTemplate`<p class="mb-0 mt-3 text-[0.6875rem] dim" data-astro-cid-j7pv25f6>
Current leader:${" "} <span class="text-(--color-text-muted)" data-astro-cid-j7pv25f6>${top.systemName}</span> </p>`} </div> <a${addAttribute(`/leaderboards/${page.meta.slug}/`, "href")} class="leaderboard-card-link" data-astro-cid-j7pv25f6>
View Full Leaderboard page
<svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" class="leaderboard-card-link-icon" data-astro-cid-j7pv25f6> <path d="M7 7h10v10" data-astro-cid-j7pv25f6></path> <path d="M7 17 17 7" data-astro-cid-j7pv25f6></path> </svg> </a> </article>`;
  })} </div> </section> <section id="faq" class="mt-16 scroll-mt-8" data-astro-cid-j7pv25f6> ${renderComponent($$result2, "FaqList", $$FaqList, { "items": homeFaqs, "data-astro-cid-j7pv25f6": true })} </section> </article> ` })} `;
}, "/Users/niknam/Documents/Code/ParsAtlas/pars-atlas-arena/src/pages/index.astro", void 0);

const $$file = "/Users/niknam/Documents/Code/ParsAtlas/pars-atlas-arena/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
