import { c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead, b as addAttribute } from '../chunks/astro/server_DZYtLLxf.mjs';
import 'piccolore';
import { $ as $$Layout } from '../chunks/Layout_BjieEwx1.mjs';
import { g as getAllBenchmarkPages } from '../chunks/benchmark-hub_B4z2g2Si.mjs';
export { renderers } from '../renderers.mjs';

const $$404 = createComponent(($$result, $$props, $$slots) => {
  const pages = getAllBenchmarkPages();
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "404 \u2014 Page Not Found | Steel.dev Leaderboard", "description": "This page doesn't exist. Browse AI agent benchmark leaderboards on Steel.dev." }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="section-frame w-full p-5 md:p-6"> <p class="m-0 text-xs uppercase tracking-[0.04em] muted">404</p> <h1 class="mb-3 mt-2 text-2xl font-semibold text-[var(--color-text-strong)] md:text-4xl">
Page not found
</h1> <p class="m-0 max-w-3xl">
This URL doesn't match any benchmark or page in the hub.
<br>
It may have moved or never existed.
</p> <p class="mt-4"> <a href="/">Back to benchmark hub</a> </p> </section> <section class="section-frame mt-8 w-full p-5 md:p-6"> <h2 class="m-0 text-base font-semibold text-[var(--color-text-strong)]">Available leaderboards</h2> <p class="mb-0 mt-2 text-sm muted">Jump directly to a benchmark page:</p> <div class="mt-3 flex flex-wrap gap-2"> ${pages.map((page) => renderTemplate`<a class="badge no-underline"${addAttribute(`/leaderboards/${page.meta.slug}/`, "href")}> ${page.meta.name} </a>`)} </div> </section> ` })}`;
}, "/Users/niknam/Documents/Code/ParsAtlas/pars-atlas-arena/src/pages/404.astro", void 0);

const $$file = "/Users/niknam/Documents/Code/ParsAtlas/pars-atlas-arena/src/pages/404.astro";
const $$url = "/404";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$404,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
