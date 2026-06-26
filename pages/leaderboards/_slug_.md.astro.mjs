import { c as getBenchmarkPage, r as renderBenchmarkMarkdown, g as getAllBenchmarkPages } from '../../chunks/benchmark-hub_B4z2g2Si.mjs';
export { renderers } from '../../renderers.mjs';

const getStaticPaths = () => {
  return getAllBenchmarkPages().map((page) => ({
    params: { slug: page.meta.slug }
  }));
};
const GET = ({ params }) => {
  const slug = params.slug;
  if (!slug) {
    return new Response("Not found", { status: 404 });
  }
  const page = getBenchmarkPage(slug);
  if (!page) {
    return new Response("Not found", { status: 404 });
  }
  const body = renderBenchmarkMarkdown(page, { headingLevel: 1 });
  return new Response(`${body}
`, {
    headers: {
      "Content-Type": "text/markdown; charset=utf-8"
    }
  });
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  GET,
  getStaticPaths
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
