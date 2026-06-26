import { d as createAstro, c as createComponent, m as maybeRenderHead, u as unescapeHTML, a as renderTemplate } from './astro/server_DZYtLLxf.mjs';
import 'piccolore';
import 'clsx';
/* empty css                         */

const $$Astro = createAstro("https://ParsAtlas.github.io");
const $$FaqList = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$FaqList;
  const { items, heading = "Frequently asked questions" } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<section class="table-shell faq-shell w-full" data-astro-cid-z65bj42f> <div class="faq-module-head flex items-center gap-3 px-4 py-3" data-astro-cid-z65bj42f> <h2 class="m-0 text-sm font-semibold uppercase tracking-[-0.02em]" data-astro-cid-z65bj42f> ${heading} </h2> <div class="lb-head-lines" aria-hidden="true" data-astro-cid-z65bj42f> <span data-astro-cid-z65bj42f></span> <span data-astro-cid-z65bj42f></span> <span data-astro-cid-z65bj42f></span> <span data-astro-cid-z65bj42f></span> <span data-astro-cid-z65bj42f></span> </div> </div> <div data-astro-cid-z65bj42f> ${items.map((item) => renderTemplate`<details class="faq-item px-4 py-3" data-astro-cid-z65bj42f> <summary class="flex cursor-pointer list-none items-center justify-between gap-3 text-sm text-(--color-text-strong) hover:text-(--color-text)" data-astro-cid-z65bj42f> <span data-astro-cid-z65bj42f>${item.q}</span> <span class="muted shrink-0" data-astro-cid-z65bj42f> <span class="inline details-closed" data-astro-cid-z65bj42f>+</span> <span class="hidden details-open" data-astro-cid-z65bj42f>-</span> </span> </summary> <div class="faq-answer mt-3 border-l-2 border-[color-mix(in_srgb,var(--color-border)_35%,transparent)] pl-3 text-sm leading-relaxed muted" data-astro-cid-z65bj42f>${unescapeHTML(item.a)}</div> </details>`)} </div> </section> `;
}, "/Users/niknam/Documents/Code/ParsAtlas/pars-atlas-arena/src/components/FaqList.astro", void 0);

export { $$FaqList as $ };
