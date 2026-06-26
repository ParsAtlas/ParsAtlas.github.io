import { d as createAstro, c as createComponent, m as maybeRenderHead, b as addAttribute, a as renderTemplate, e as renderScript, r as renderComponent, F as Fragment, u as unescapeHTML } from '../../chunks/astro/server_DZYtLLxf.mjs';
import 'piccolore';
import { $ as $$Layout } from '../../chunks/Layout_BjieEwx1.mjs';
import 'clsx';
import { d as benchmarkScopeLabels, c as getBenchmarkPage, e as generateBenchmarkFaq, f as buildBenchmarkFaqFacts, i as renderBenchmarkTitle, j as renderBenchmarkDescription, g as getAllBenchmarkPages } from '../../chunks/benchmark-hub_B4z2g2Si.mjs';
import { $ as $$FaqList } from '../../chunks/FaqList_BlKaPhVX.mjs';
/* empty css                                     */
export { renderers } from '../../renderers.mjs';

const $$Astro$3 = createAstro("https://ParsAtlas.github.io");
const $$BenchmarkResultsTable = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$BenchmarkResultsTable;
  const { rows, scope, heading = "Leaderboard", slug = "" } = Astro2.props;
  const collapseLimit = 12;
  const shouldCollapse = rows.length > collapseLimit;
  const hiddenCount = rows.length - collapseLimit;
  function repoLabel(repoUrl) {
    if (repoUrl.includes("github.com")) return "GitHub repository";
    if (repoUrl.includes("huggingface.co")) return "Hugging Face repository";
    return "Repository";
  }
  function formatReportedDate(reportedAt) {
    if (!reportedAt) return "\u2014";
    const dateInput = /^\d{4}-\d{2}$/.test(reportedAt) ? `${reportedAt}-01` : reportedAt;
    const date = /* @__PURE__ */ new Date(`${dateInput}T00:00:00Z`);
    if (Number.isNaN(date.getTime())) return reportedAt;
    return date.toLocaleDateString("en-US", {
      month: "short",
      year: "numeric",
      timeZone: "UTC"
    });
  }
  return renderTemplate`${maybeRenderHead()}<section${addAttribute(["table-shell w-full", shouldCollapse && "is-collapsed"], "class:list")}> <div class="lb-module-head flex items-center gap-3 px-3 py-2"> <h2 class="m-0 text-sm font-normal uppercase tracking-[-0.02em] text-[var(--color-accent)]"> ${heading || "Leaderboard"} </h2> <div class="lb-head-lines" aria-hidden="true"> <span></span> <span></span> <span></span> <span></span> <span></span> </div> <span class="hidden text-xs font-bold uppercase text-[var(--color-accent)] sm:inline">${benchmarkScopeLabels[scope]} scope</span> </div> <div class="overflow-x-auto p-4 md:p-6"> <table class="w-full min-w-[640px] border-collapse text-xs"> <thead class="lb-header text-left text-[0.6875rem] uppercase tracking-[0.025em] text-[var(--color-text-dim)]"> <tr> <th class="px-3 py-2 font-semibold">System / Submission</th> <th class="px-3 py-2 font-semibold"> <span class="inline-flex items-center gap-1.5">
Score
<span class="score-triangle" aria-hidden="true"></span> </span> </th> <th class="px-3 py-2 font-semibold">Organization</th> <th class="px-3 py-2 font-semibold">Reported</th> <th class="px-3 py-2 font-semibold">Source</th> </tr> </thead> <tbody> ${rows.map((row) => {
    return renderTemplate`<tr class="lb-row group align-middle"> <td class="px-3 py-3 text-[var(--color-text-strong)]"> <div class="flex flex-wrap items-center gap-2"> <span class="system-name">${row.systemName}</span> ${row.isNew && renderTemplate`<span class="badge badge-accent">New</span>`} ${row.repoUrl && renderTemplate`<a${addAttribute(row.repoUrl, "href")} target="_blank" rel="noopener" class="repo-source-link"${addAttribute(`${row.systemName} ${repoLabel(row.repoUrl)}`, "aria-label")}${addAttribute(repoLabel(row.repoUrl), "title")}> ${row.repoUrl.includes("huggingface.co") ? renderTemplate`<img src="/hf-logo.png" alt="" width="16" height="16" aria-hidden="true" class="h-4 w-4 object-contain">` : row.repoUrl.includes("github.com") ? renderTemplate`<img src="/github-logo.svg" alt="" width="13" height="13" aria-hidden="true" class="h-[13px] w-[13px] object-contain">` : renderTemplate`<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"> <path d="M15 3h6v6"></path> <path d="M10 14 21 3"></path> <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path> </svg>`} </a>`} ${row.notesShort && renderTemplate`<span class="note-tooltip relative inline-flex"> <button type="button" class="note-trigger"${addAttribute(`Note for ${row.systemName}`, "aria-label")}${addAttribute(`note-${slug}-${row.rank}`, "aria-describedby")}> <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"> <circle cx="12" cy="12" r="10"></circle> <path d="M12 16v-4"></path> <path d="M12 8h.01"></path> </svg> </button> <div${addAttribute(`note-${slug}-${row.rank}`, "id")} role="tooltip" popover="manual" class="note-bubble"> ${row.notesShort} </div> </span>`} </div> </td> <td class="px-3 py-3 font-semibold text-[var(--color-accent)]"> ${row.scoreDisplay} </td> <td class="px-3 py-3 text-[var(--color-text-dim)]">${row.organization}</td> <td class="px-3 py-3 whitespace-nowrap muted"> ${row.reportedAt ? renderTemplate`<time${addAttribute(row.reportedAt, "datetime")}>${formatReportedDate(row.reportedAt)}</time>` : "\u2014"} </td> <td class="px-3 py-3"> <a${addAttribute(row.sourceUrl, "href")} target="_blank" rel="noopener">
Source
</a> </td> </tr>`;
  })} </tbody> </table> </div> ${shouldCollapse && renderTemplate`<button type="button" class="lb-expand-btn" aria-expanded="false"> <span class="lb-expand-label-collapsed">Expand to see ${hiddenCount} more</span> <span class="lb-expand-label-expanded">Show less</span> <span class="score-triangle lb-expand-triangle" aria-hidden="true"></span> </button>`} </section> ${renderScript($$result, "/Users/niknam/Documents/Code/ParsAtlas/pars-atlas-arena/src/components/BenchmarkResultsTable.astro?astro&type=script&index=0&lang.ts")}`;
}, "/Users/niknam/Documents/Code/ParsAtlas/pars-atlas-arena/src/components/BenchmarkResultsTable.astro", void 0);

const $$Astro$2 = createAstro("https://ParsAtlas.github.io");
const $$CopyMarkdownButton = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$CopyMarkdownButton;
  const { rows, heading } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="copy-md-control hidden shrink-0 md:inline-flex"> <button type="button" class="copy-md-btn copy-md-main" aria-label="Copy markdown"${addAttribute(JSON.stringify(rows), "data-rows")}${addAttribute(heading, "data-heading")}> <span class="copy-md-icon" aria-hidden="true"> <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-3 w-3"> <rect width="14" height="14" x="8" y="8" rx="2" ry="2"></rect> <path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"></path> </svg> </span> <span class="copy-md-label">Copy markdown</span> </button> </div> ${renderScript($$result, "/Users/niknam/Documents/Code/ParsAtlas/pars-atlas-arena/src/components/CopyMarkdownButton.astro?astro&type=script&index=0&lang.ts")}`;
}, "/Users/niknam/Documents/Code/ParsAtlas/pars-atlas-arena/src/components/CopyMarkdownButton.astro", void 0);

const $$TocObserver = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderScript($$result, "/Users/niknam/Documents/Code/ParsAtlas/pars-atlas-arena/src/components/TocObserver.astro?astro&type=script&index=0&lang.ts")}`;
}, "/Users/niknam/Documents/Code/ParsAtlas/pars-atlas-arena/src/components/TocObserver.astro", void 0);

const ATLAS_REPO_URL = "https://github.com/steel-dev/atlas";
const ATLAS_INSTALL = "npm install @steel-dev/atlas";
const atlasBenchmarkNotes = {
  browsecomp: "It ships with a BrowseComp eval, so you can benchmark your own build on the same tasks.",
  draco: "It ships with a DRACO eval, so you can benchmark your own build on the same tasks.",
  gaia: "It reaches JavaScript-rendered and login-gated pages through Steel, with multiple search providers built in."
};
function getAtlasNote(slug) {
  return atlasBenchmarkNotes[slug];
}

const $$Astro$1 = createAstro("https://ParsAtlas.github.io");
const $$AtlasCallout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$AtlasCallout;
  const { note, class: className } = Astro2.props;
  const githubIcon = `<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 .5C5.73.5.5 5.73.5 12c0 5.08 3.29 9.39 7.86 10.91.58.11.79-.25.79-.56v-2c-3.2.7-3.88-1.54-3.88-1.54-.53-1.34-1.29-1.7-1.29-1.7-1.05-.72.08-.7.08-.7 1.16.08 1.77 1.19 1.77 1.19 1.03 1.77 2.7 1.26 3.36.96.1-.75.4-1.26.73-1.55-2.55-.29-5.24-1.28-5.24-5.69 0-1.26.45-2.29 1.19-3.1-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.18 1.18a11.1 11.1 0 0 1 5.8 0c2.21-1.49 3.18-1.18 3.18-1.18.63 1.59.23 2.76.11 3.05.74.81 1.19 1.84 1.19 3.1 0 4.42-2.69 5.39-5.25 5.68.41.36.78 1.07.78 2.16v3.2c0 .31.21.68.8.56A11.51 11.51 0 0 0 23.5 12C23.5 5.73 18.27.5 12 .5z"/></svg>`;
  const copyIcon = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-3 w-3"><rect width="14" height="14" x="8" y="8" rx="2" ry="2"></rect><path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"></path></svg>`;
  const checkIcon = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-3 w-3"><polyline points="20 6 9 17 4 12"></polyline></svg>`;
  return renderTemplate`${maybeRenderHead()}<aside${addAttribute(["atlas-callout", "section-frame", className], "class:list")} data-astro-cid-2gkqdik3> <h2 class="atlas-callout-title" data-astro-cid-2gkqdik3>Build your own deep research agent — on any of these models</h2> <p class="atlas-callout-body" data-astro-cid-2gkqdik3> <a${addAttribute(ATLAS_REPO_URL, "href")} target="_blank" rel="noopener" data-astro-cid-2gkqdik3>Atlas</a> is Steel&rsquo;s open-source deep
    research harness. Pick any model from this board for the lead, route the rest by role, and Atlas runs
    the loop end to end — planning, search, browser fetch, claim verification, and a cited report. Your
    models, your budget; the harness is open source.
${note && renderTemplate`${renderComponent($$result, "Fragment", Fragment, { "data-astro-cid-2gkqdik3": true }, { "default": ($$result2) => renderTemplate`${note}` })}`} </p> <div class="atlas-callout-actions" data-astro-cid-2gkqdik3> <button type="button" class="atlas-install code-inline"${addAttribute(ATLAS_INSTALL, "data-copy")} aria-label="Copy install command" data-astro-cid-2gkqdik3> <code data-astro-cid-2gkqdik3>${ATLAS_INSTALL}</code> <span class="atlas-copy-icon" aria-hidden="true" data-astro-cid-2gkqdik3>${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate`${unescapeHTML(copyIcon)}` })}</span> <span class="atlas-copy-check" aria-hidden="true" data-astro-cid-2gkqdik3>${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate`${unescapeHTML(checkIcon)}` })}</span> </button> <a${addAttribute(ATLAS_REPO_URL, "href")} target="_blank" rel="noopener" class="btn-primary atlas-github" data-astro-cid-2gkqdik3> ${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate`${unescapeHTML(githubIcon)}` })}
View Atlas on GitHub
<span aria-hidden="true" data-astro-cid-2gkqdik3>↗</span> </a> </div> </aside>  ${renderScript($$result, "/Users/niknam/Documents/Code/ParsAtlas/pars-atlas-arena/src/components/AtlasCallout.astro?astro&type=script&index=0&lang.ts")}`;
}, "/Users/niknam/Documents/Code/ParsAtlas/pars-atlas-arena/src/components/AtlasCallout.astro", void 0);

const $$Astro = createAstro("https://ParsAtlas.github.io");
function getStaticPaths() {
  return getAllBenchmarkPages().map((page) => ({
    params: { slug: page.meta.slug }
  }));
}
const $$slug = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$slug;
  const slug = Astro2.params.slug ?? "";
  const page = getBenchmarkPage(slug);
  if (!page) {
    return Astro2.redirect("/");
  }
  const faqItems = generateBenchmarkFaq(page.meta, buildBenchmarkFaqFacts(page));
  const atlasNote = getAtlasNote(page.meta.slug);
  const pageUrl = `https://leaderboard.steel.dev/leaderboards/${page.meta.slug}/`;
  const pageTitle = page.meta.seoTitle ?? renderBenchmarkTitle(page.meta);
  const pageDescription = page.meta.seoDescription ?? renderBenchmarkDescription(page.meta);
  const faqSchema = JSON.stringify({
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqItems.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.a.replace(/<[^>]+>/g, "")
      }
    }))
  });
  const itemListSchema = JSON.stringify({
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: `${page.meta.name} leaderboard`,
    description: pageDescription,
    url: pageUrl,
    numberOfItems: page.results.length,
    itemListElement: page.results.map((result) => ({
      "@type": "ListItem",
      position: result.rank,
      item: {
        "@type": "Thing",
        name: result.systemName,
        url: result.sourceUrl
      }
    }))
  });
  const breadcrumbSchema = JSON.stringify({
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Benchmark Hub",
        item: "https://leaderboard.steel.dev/"
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Leaderboards Hub",
        item: "https://leaderboard.steel.dev/"
      },
      {
        "@type": "ListItem",
        position: 3,
        name: page.meta.name,
        item: pageUrl
      }
    ]
  });
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "ogImage": `/og/${page.meta.slug}.png`, "title": pageTitle, "description": pageDescription, "structuredData": [faqSchema, itemListSchema, breadcrumbSchema], "markdownUrl": `/leaderboards/${page.meta.slug}.md` }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="benchmark-detail-layout"> <aside class="toc-rail benchmark-sidebar" aria-label="On this page"> <h1 class="m-0 text-[2rem] font-medium leading-9 tracking-[-0.045em] text-[var(--color-text-strong)]"> ${page.meta.name} Leaderboard
</h1> <p class="mb-0 mt-4 text-sm leading-6 muted"> ${page.meta.description} </p> <p class="mb-0 mt-3 text-xs"> <span class="dim">Last updated:</span> ${page.meta.lastUpdated} </p> <div class="mt-4 flex flex-wrap gap-2"> <span class="badge">${page.meta.scope} scope</span> </div> <ol class="toc-list"> <li><a href="#leaderboard" aria-current="true">Leaderboard</a></li> <li><a href="#about">About this benchmark</a></li> <li><a href="#example-tasks">Example tasks</a></li> <li><a href="#methodology">Methodology</a></li> <li><a href="#links">Links</a></li> <li><a href="#faq">FAQ</a></li> </ol> <div class="mt-5"> ${renderComponent($$result2, "CopyMarkdownButton", $$CopyMarkdownButton, { "rows": page.results, "heading": `${page.meta.name} Leaderboard` })} </div> </aside> <article class="article-shell benchmark-content-panel"> <section id="leaderboard" class="scroll-mt-8"> ${renderComponent($$result2, "BenchmarkResultsTable", $$BenchmarkResultsTable, { "rows": page.results, "scope": page.meta.scope, "heading": "Leaderboard", "slug": page.meta.slug })} </section> ${atlasNote && renderTemplate`${renderComponent($$result2, "AtlasCallout", $$AtlasCallout, { "note": atlasNote, "class": "mt-6" })}`} <section id="about" class="mt-6 scroll-mt-8 text-sm leading-6 muted"> <h2 class="m-0 text-xl font-medium tracking-[-0.03em] text-[var(--color-text-strong)]">
About this benchmark
</h2> <div class="mt-4"> ${page.meta.about.map((paragraph) => renderTemplate`<p class="mb-4 last:mb-0">${paragraph}</p>`)} </div> ${page.meta.importantNotes.length > 0 && renderTemplate`<div class="dashed-frame mt-5 p-4"> ${page.meta.importantNotes.map((note) => renderTemplate`<p class="mb-3 text-sm muted last:mb-0">${note}</p>`)} </div>`} </section> <section id="example-tasks" class="mt-8 scroll-mt-8"> <h2 class="m-0 text-xl font-medium tracking-[-0.03em] text-[var(--color-text-strong)]">
Example tasks
</h2> <p class="mb-0 mt-3 text-sm leading-6 muted">
Three public tasks quoted from benchmark sources:
</p> <ul class="m-0 mt-4 list-disc space-y-2 pl-5"> ${page.meta.taskExamples.map((item) => renderTemplate`<li class="text-sm leading-6 muted"> <span class="text-[var(--color-text-strong)]">&quot;${item.quote}&quot;</span>${" "} <a${addAttribute(item.sourceUrl, "href")} target="_blank" rel="noopener">
Citation: ${item.sourceLabel} </a> </li>`)} </ul> </section> <section id="methodology" class="mt-8 scroll-mt-8"> <h2 class="m-0 text-xl font-medium tracking-[-0.03em] text-[var(--color-text-strong)]">
Methodology
</h2> <ul class="m-0 mt-4 list-disc space-y-2 pl-5"> ${page.meta.methodology.map((item) => renderTemplate`<li class="text-sm leading-6 muted">${item}</li>`)} </ul> </section> <section id="links" class="mt-8 scroll-mt-8"> <h2 class="m-0 text-xl font-medium tracking-[-0.03em] text-[var(--color-text-strong)]">
Links
</h2> <ul class="m-0 mt-4 list-disc space-y-2 pl-5"> ${page.meta.links.map((link) => renderTemplate`<li class="text-sm"> <a${addAttribute(link.url, "href")} target="_blank" rel="noopener"> ${link.label} </a> </li>`)} </ul> </section> ${page.meta.relatedBenchmarks.length > 0 && renderTemplate`<section class="section-frame mt-8 w-full p-4"> <h2 class="m-0 text-base font-semibold text-[var(--color-text-strong)]">
Related benchmarks
</h2> <p class="mb-0 mt-2 text-sm muted">
Compare this benchmark with related pages from the hub:
</p> <div class="mt-3 flex flex-wrap gap-2"> ${page.meta.relatedBenchmarks.map((relatedSlug) => renderTemplate`<a class="badge no-underline"${addAttribute(`/leaderboards/${relatedSlug}/`, "href")}> ${relatedSlug} </a>`)} </div> <p class="mb-0 mt-3 text-sm"> <a href="/">Back to benchmark hub</a> </p> </section>`} <section id="faq" class="mt-8 scroll-mt-8"> ${renderComponent($$result2, "FaqList", $$FaqList, { "items": faqItems })} </section> </article> </div> ${renderComponent($$result2, "TocObserver", $$TocObserver, {})} ` })}`;
}, "/Users/niknam/Documents/Code/ParsAtlas/pars-atlas-arena/src/pages/leaderboards/[slug].astro", void 0);

const $$file = "/Users/niknam/Documents/Code/ParsAtlas/pars-atlas-arena/src/pages/leaderboards/[slug].astro";
const $$url = "/leaderboards/[slug]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$slug,
  file: $$file,
  getStaticPaths,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
