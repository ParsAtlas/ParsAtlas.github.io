import { c as createComponent, m as maybeRenderHead, b as addAttribute, a as renderTemplate, e as renderScript, d as createAstro, r as renderComponent, f as renderSlot, g as renderHead, u as unescapeHTML } from './astro/server_DZYtLLxf.mjs';
import 'piccolore';
/* empty css                         */
import 'clsx';
import { g as getAllBenchmarkPages } from './benchmark-hub_B4z2g2Si.mjs';

const $$Header = createComponent(($$result, $$props, $$slots) => {
  const dropdownBenchmarks = getAllBenchmarkPages().slice(0, 3);
  return renderTemplate`${maybeRenderHead()}<header class="py-8" data-astro-cid-3ef6ksr2> <div class="flex min-h-8 flex-col gap-4 px-0 md:flex-row md:items-center md:justify-between md:px-6" data-astro-cid-3ef6ksr2> <a href="/" class="flex items-center gap-6 no-underline" aria-label="Steel leaderboard home" data-astro-cid-3ef6ksr2> <img src="/logo.png" alt="" class="h-8 w-11 object-contain" data-astro-cid-3ef6ksr2> <span class="sr-only" data-astro-cid-3ef6ksr2>Steel leaderboards</span> </a> <nav aria-label="Primary" class="md:-ml-auto md:mr-auto md:pl-6" data-astro-cid-3ef6ksr2> <ul class="m-0 flex list-none flex-wrap items-center gap-2 p-0 text-[0.8125rem] font-bold leading-6" data-astro-cid-3ef6ksr2> <li data-astro-cid-3ef6ksr2> <a href="/" class="no-underline text-[var(--color-text)] hover:text-[var(--color-text-strong)]" data-astro-cid-3ef6ksr2>Home</a> </li> <li class="dim" aria-hidden="true" data-astro-cid-3ef6ksr2>|</li> <li class="benchmarks-menu" data-astro-cid-3ef6ksr2> <a href="/" class="benchmarks-menu-trigger no-underline text-[var(--color-text)] hover:text-[var(--color-text-strong)]" aria-haspopup="true" aria-expanded="false" data-astro-cid-3ef6ksr2>
Benchmarks
<svg class="benchmarks-menu-chevron" xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" data-astro-cid-3ef6ksr2> <polyline points="6 9 12 15 18 9" data-astro-cid-3ef6ksr2></polyline> </svg> </a> <div class="benchmarks-dropdown" role="menu" data-astro-cid-3ef6ksr2> <ul class="benchmarks-dropdown-list" data-astro-cid-3ef6ksr2> ${dropdownBenchmarks.map((page) => renderTemplate`<li data-astro-cid-3ef6ksr2> <a${addAttribute(`/leaderboards/${page.meta.slug}/`, "href")} class="benchmarks-dropdown-item" role="menuitem" data-astro-cid-3ef6ksr2> <span class="benchmarks-dropdown-title" data-astro-cid-3ef6ksr2>${page.meta.name}</span> <span class="benchmarks-dropdown-desc" data-astro-cid-3ef6ksr2>${page.meta.description}</span> </a> </li>`)} </ul> <a href="/results" class="benchmarks-dropdown-footer" role="menuitem" data-astro-cid-3ef6ksr2>
Browse all results
<span aria-hidden="true" data-astro-cid-3ef6ksr2>→</span> </a> </div> </li> <li class="dim" aria-hidden="true" data-astro-cid-3ef6ksr2>|</li> <li data-astro-cid-3ef6ksr2> <a href="https://github.com/steel-dev/leaderboard" target="_blank" rel="noopener noreferrer" class="no-underline text-[var(--color-text)] hover:text-[var(--color-text-strong)]" data-astro-cid-3ef6ksr2>
Contribute
</a> </li> </ul> </nav> <nav aria-label="Steel links" data-astro-cid-3ef6ksr2> <ul class="m-0 flex list-none flex-wrap items-center gap-3 p-0 text-[0.8125rem] font-bold leading-6" data-astro-cid-3ef6ksr2> <li data-astro-cid-3ef6ksr2> <a href="https://discord.gg/steel-dev" target="_blank" rel="noopener noreferrer" class="header-icon-link" aria-label="Join Steel Discord" title="Discord" data-astro-cid-3ef6ksr2> <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" data-astro-cid-3ef6ksr2> <path d="M20.317 4.3698a19.7913 19.7913 0 0 0-4.8851-1.5152.0741.0741 0 0 0-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 0 0-.0785-.037 19.7363 19.7363 0 0 0-4.8852 1.515.0699.0699 0 0 0-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 0 0 .0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 0 0 .0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 0 0-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 0 1-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 0 1 .0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 0 1 .0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 0 1-.0066.1276 12.2986 12.2986 0 0 1-1.873.8914.0766.0766 0 0 0-.0407.1067c.3604.6986.7719 1.3634 1.225 1.9942a.076.076 0 0 0 .0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 0 0 .0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 0 0-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.9555 2.4189-2.1569 2.4189zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.946 2.4189-2.1568 2.4189Z" data-astro-cid-3ef6ksr2></path> </svg> </a> </li> <li data-astro-cid-3ef6ksr2> <a href="https://steel.dev?utm_source=leaderboard&utm_medium=website&utm_content=header" target="_blank" rel="noopener noreferrer" class="btn-primary" data-astro-cid-3ef6ksr2>
Try Steel
<span aria-hidden="true" data-astro-cid-3ef6ksr2>↗</span> </a> </li> </ul> </nav> </div> </header> `;
}, "/Users/niknam/Documents/Code/ParsAtlas/pars-atlas-arena/src/components/Header.astro", void 0);

const $$Footer = createComponent(($$result, $$props, $$slots) => {
  const lastUpdated = getAllBenchmarkPages().map((page) => page.meta.lastUpdated).sort().at(-1);
  const currentTime = (/* @__PURE__ */ new Date(
    `${lastUpdated ?? (/* @__PURE__ */ new Date()).toISOString().slice(0, 10)}T00:00:00Z`
  )).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
    timeZone: "UTC"
  });
  return renderTemplate`${maybeRenderHead()}<footer class="pb-8"> <div class="flex flex-col gap-2 border-t border-[var(--color-border-subtle)] pt-4 text-xs md:flex-row md:items-center md:justify-between"> <div class="muted">Last updated: ${currentTime}</div> <div> <a href="https://steel.dev?utm_source=leaderboard&utm_medium=website&utm_content=footer" target="_blank" rel="noopener noreferrer" class="no-underline text-[var(--color-text)] hover:text-[var(--color-text-strong)]">Steel.dev</a> </div> <div> <a href="https://github.com/steel-dev/leaderboard/tree/main/src/data" target="_blank" rel="noopener noreferrer" class="no-underline text-[var(--color-text)] hover:text-[var(--color-text-strong)]">Contribute</a> </div> </div> </footer>`;
}, "/Users/niknam/Documents/Code/ParsAtlas/pars-atlas-arena/src/components/Footer.astro", void 0);

const $$PostHogInit = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderScript($$result, "/Users/niknam/Documents/Code/ParsAtlas/pars-atlas-arena/src/components/PostHogInit.astro?astro&type=script&index=0&lang.ts")}`;
}, "/Users/niknam/Documents/Code/ParsAtlas/pars-atlas-arena/src/components/PostHogInit.astro", void 0);

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a, _b;
const $$Astro = createAstro("https://ParsAtlas.github.io");
const $$Layout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Layout;
  const {
    title = "Browser Agent Leaderboards | Steel.dev",
    description = "Compare and evaluate AI agents on Steel.dev's leaderboard",
    structuredData = null,
    ogImage = "/og/home.png",
    markdownUrl
  } = Astro2.props;
  const canonicalURL = new URL(Astro2.url.pathname, "https://leaderboard.steel.dev");
  const markdownURL = markdownUrl ? new URL(markdownUrl, "https://leaderboard.steel.dev") : null;
  const structuredDataItems = Array.isArray(structuredData) ? structuredData.filter(Boolean) : structuredData ? [structuredData] : [];
  const googleTagInit = `
window.dataLayer = window.dataLayer || [];
function gtag(){window.dataLayer.push(arguments);}
gtag("js", new Date());
gtag("config", "G-88TGJXEHJ6");
`;
  return renderTemplate(_b || (_b = __template(['<html lang="en"> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width"><link rel="icon" type="image/png" href="/favicon-96x96.png" sizes="96x96"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><link rel="shortcut icon" href="/favicon.ico"><link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png"><link rel="manifest" href="/site.webmanifest"><meta name="generator"', "><title>", '</title><meta name="description"', '><link rel="canonical"', ">", '<!-- Open Graph / Social Media Meta Tags --><meta property="og:title"', '><meta property="og:description"', '><meta property="og:image"', '><meta property="og:url"', '><meta property="og:type" content="website"><meta name="twitter:card" content="summary_large_image"><meta name="twitter:title"', '><meta name="twitter:description"', '><meta name="twitter:image"', '><meta name="google-site-verification" content="u255cG_eERjkv7qF9hArpEz8bdDPLQrfHD6IqCvk4jo">', '<!-- Google tag (gtag.js) --><script async src="https://www.googletagmanager.com/gtag/js?id=G-88TGJXEHJ6"><\/script><script>', "<\/script>", "</head> <body> ", ' <div class="page-shell flex min-h-screen flex-col"> ', ' <main class="flex-1 pb-16"> ', " </main> ", " </div> </body></html>"])), addAttribute(Astro2.generator, "content"), title, addAttribute(description, "content"), addAttribute(canonicalURL, "href"), markdownURL && renderTemplate`<link rel="alternate" type="text/markdown"${addAttribute(markdownURL, "href")}>`, addAttribute(title, "content"), addAttribute(description, "content"), addAttribute(new URL(ogImage, "https://leaderboard.steel.dev"), "content"), addAttribute(canonicalURL, "content"), addAttribute(title, "content"), addAttribute(description, "content"), addAttribute(new URL(ogImage, "https://leaderboard.steel.dev"), "content"), structuredDataItems.map((item) => renderTemplate(_a || (_a = __template(['<script type="application/ld+json">', "<\/script>"])), unescapeHTML(item))), unescapeHTML(googleTagInit), renderHead(), renderComponent($$result, "PostHogInit", $$PostHogInit, {}), renderComponent($$result, "Header", $$Header, {}), renderSlot($$result, $$slots["default"]), renderComponent($$result, "Footer", $$Footer, {}));
}, "/Users/niknam/Documents/Code/ParsAtlas/pars-atlas-arena/src/layouts/Layout.astro", void 0);

export { $$Layout as $ };
