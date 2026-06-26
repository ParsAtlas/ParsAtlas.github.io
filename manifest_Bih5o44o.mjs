import '@astrojs/internal-helpers/path';
import '@astrojs/internal-helpers/remote';
import 'piccolore';
import { N as NOOP_MIDDLEWARE_HEADER, h as decodeKey } from './chunks/astro/server_DZYtLLxf.mjs';
import 'clsx';
import 'es-module-lexer';
import 'html-escaper';

const NOOP_MIDDLEWARE_FN = async (_ctx, next) => {
  const response = await next();
  response.headers.set(NOOP_MIDDLEWARE_HEADER, "true");
  return response;
};

const codeToStatusMap = {
  // Implemented from IANA HTTP Status Code Registry
  // https://www.iana.org/assignments/http-status-codes/http-status-codes.xhtml
  BAD_REQUEST: 400,
  UNAUTHORIZED: 401,
  PAYMENT_REQUIRED: 402,
  FORBIDDEN: 403,
  NOT_FOUND: 404,
  METHOD_NOT_ALLOWED: 405,
  NOT_ACCEPTABLE: 406,
  PROXY_AUTHENTICATION_REQUIRED: 407,
  REQUEST_TIMEOUT: 408,
  CONFLICT: 409,
  GONE: 410,
  LENGTH_REQUIRED: 411,
  PRECONDITION_FAILED: 412,
  CONTENT_TOO_LARGE: 413,
  URI_TOO_LONG: 414,
  UNSUPPORTED_MEDIA_TYPE: 415,
  RANGE_NOT_SATISFIABLE: 416,
  EXPECTATION_FAILED: 417,
  MISDIRECTED_REQUEST: 421,
  UNPROCESSABLE_CONTENT: 422,
  LOCKED: 423,
  FAILED_DEPENDENCY: 424,
  TOO_EARLY: 425,
  UPGRADE_REQUIRED: 426,
  PRECONDITION_REQUIRED: 428,
  TOO_MANY_REQUESTS: 429,
  REQUEST_HEADER_FIELDS_TOO_LARGE: 431,
  UNAVAILABLE_FOR_LEGAL_REASONS: 451,
  INTERNAL_SERVER_ERROR: 500,
  NOT_IMPLEMENTED: 501,
  BAD_GATEWAY: 502,
  SERVICE_UNAVAILABLE: 503,
  GATEWAY_TIMEOUT: 504,
  HTTP_VERSION_NOT_SUPPORTED: 505,
  VARIANT_ALSO_NEGOTIATES: 506,
  INSUFFICIENT_STORAGE: 507,
  LOOP_DETECTED: 508,
  NETWORK_AUTHENTICATION_REQUIRED: 511
};
Object.entries(codeToStatusMap).reduce(
  // reverse the key-value pairs
  (acc, [key, value]) => ({ ...acc, [value]: key }),
  {}
);

function sanitizeParams(params) {
  return Object.fromEntries(
    Object.entries(params).map(([key, value]) => {
      if (typeof value === "string") {
        return [key, value.normalize().replace(/#/g, "%23").replace(/\?/g, "%3F")];
      }
      return [key, value];
    })
  );
}
function getParameter(part, params) {
  if (part.spread) {
    return params[part.content.slice(3)] || "";
  }
  if (part.dynamic) {
    if (!params[part.content]) {
      throw new TypeError(`Missing parameter: ${part.content}`);
    }
    return params[part.content];
  }
  return part.content.normalize().replace(/\?/g, "%3F").replace(/#/g, "%23").replace(/%5B/g, "[").replace(/%5D/g, "]");
}
function getSegment(segment, params) {
  const segmentPath = segment.map((part) => getParameter(part, params)).join("");
  return segmentPath ? "/" + segmentPath : "";
}
function getRouteGenerator(segments, addTrailingSlash) {
  return (params) => {
    const sanitizedParams = sanitizeParams(params);
    let trailing = "";
    if (addTrailingSlash === "always" && segments.length) {
      trailing = "/";
    }
    const path = segments.map((segment) => getSegment(segment, sanitizedParams)).join("") + trailing;
    return path || "/";
  };
}

function deserializeRouteData(rawRouteData) {
  return {
    route: rawRouteData.route,
    type: rawRouteData.type,
    pattern: new RegExp(rawRouteData.pattern),
    params: rawRouteData.params,
    component: rawRouteData.component,
    generate: getRouteGenerator(rawRouteData.segments, rawRouteData._meta.trailingSlash),
    pathname: rawRouteData.pathname || void 0,
    segments: rawRouteData.segments,
    prerender: rawRouteData.prerender,
    redirect: rawRouteData.redirect,
    redirectRoute: rawRouteData.redirectRoute ? deserializeRouteData(rawRouteData.redirectRoute) : void 0,
    fallbackRoutes: rawRouteData.fallbackRoutes.map((fallback) => {
      return deserializeRouteData(fallback);
    }),
    isIndex: rawRouteData.isIndex,
    origin: rawRouteData.origin
  };
}

function deserializeManifest(serializedManifest) {
  const routes = [];
  for (const serializedRoute of serializedManifest.routes) {
    routes.push({
      ...serializedRoute,
      routeData: deserializeRouteData(serializedRoute.routeData)
    });
    const route = serializedRoute;
    route.routeData = deserializeRouteData(serializedRoute.routeData);
  }
  const assets = new Set(serializedManifest.assets);
  const componentMetadata = new Map(serializedManifest.componentMetadata);
  const inlinedScripts = new Map(serializedManifest.inlinedScripts);
  const clientDirectives = new Map(serializedManifest.clientDirectives);
  const serverIslandNameMap = new Map(serializedManifest.serverIslandNameMap);
  const key = decodeKey(serializedManifest.key);
  return {
    // in case user middleware exists, this no-op middleware will be reassigned (see plugin-ssr.ts)
    middleware() {
      return { onRequest: NOOP_MIDDLEWARE_FN };
    },
    ...serializedManifest,
    assets,
    componentMetadata,
    inlinedScripts,
    clientDirectives,
    routes,
    serverIslandNameMap,
    key
  };
}

const manifest = deserializeManifest({"hrefRoot":"file:///Users/niknam/Documents/Code/ParsAtlas/pars-atlas-arena/","cacheDir":"file:///Users/niknam/Documents/Code/ParsAtlas/pars-atlas-arena/node_modules/.astro/","outDir":"file:///Users/niknam/Documents/Code/ParsAtlas/pars-atlas-arena/dist/","srcDir":"file:///Users/niknam/Documents/Code/ParsAtlas/pars-atlas-arena/src/","publicDir":"file:///Users/niknam/Documents/Code/ParsAtlas/pars-atlas-arena/public/","buildClientDir":"file:///Users/niknam/Documents/Code/ParsAtlas/pars-atlas-arena/dist/client/","buildServerDir":"file:///Users/niknam/Documents/Code/ParsAtlas/pars-atlas-arena/dist/server/","adapterName":"","routes":[{"file":"file:///Users/niknam/Documents/Code/ParsAtlas/pars-atlas-arena/dist/404.html","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/index.CaJfAEmo.css"}],"routeData":{"route":"/404","isIndex":false,"type":"page","pattern":"^\\/404\\/?$","segments":[[{"content":"404","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/404.astro","pathname":"/404","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"file:///Users/niknam/Documents/Code/ParsAtlas/pars-atlas-arena/dist/index.md","links":[],"scripts":[],"styles":[],"routeData":{"route":"/index.md","isIndex":false,"type":"endpoint","pattern":"^\\/index\\.md\\/?$","segments":[[{"content":"index.md","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/index.md.ts","pathname":"/index.md","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"file:///Users/niknam/Documents/Code/ParsAtlas/pars-atlas-arena/dist/llms-full.txt","links":[],"scripts":[],"styles":[],"routeData":{"route":"/llms-full.txt","isIndex":false,"type":"endpoint","pattern":"^\\/llms-full\\.txt\\/?$","segments":[[{"content":"llms-full.txt","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/llms-full.txt.ts","pathname":"/llms-full.txt","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"file:///Users/niknam/Documents/Code/ParsAtlas/pars-atlas-arena/dist/llms.txt","links":[],"scripts":[],"styles":[],"routeData":{"route":"/llms.txt","isIndex":false,"type":"endpoint","pattern":"^\\/llms\\.txt\\/?$","segments":[[{"content":"llms.txt","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/llms.txt.ts","pathname":"/llms.txt","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"file:///Users/niknam/Documents/Code/ParsAtlas/pars-atlas-arena/dist/results/index.html","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/index.CaJfAEmo.css"},{"type":"inline","content":".faq-module-head[data-astro-cid-z65bj42f]{background:var(--color-text-strong);color:var(--color-bg)}.faq-shell[data-astro-cid-z65bj42f] .faq-item[data-astro-cid-z65bj42f]:first-of-type{border-top:0}.faq-module-head[data-astro-cid-z65bj42f] .lb-head-lines[data-astro-cid-z65bj42f] span[data-astro-cid-z65bj42f]{background:var(--color-bg)}details[data-astro-cid-z65bj42f][open] .details-closed[data-astro-cid-z65bj42f]{display:none}details[data-astro-cid-z65bj42f][open] .details-open[data-astro-cid-z65bj42f]{display:inline}.faq-answer[data-astro-cid-z65bj42f] a{color:var(--color-link);text-decoration-color:color-mix(in srgb,var(--color-link) 40%,transparent)}.faq-answer[data-astro-cid-z65bj42f] a:hover{color:var(--color-accent);text-decoration-color:var(--color-accent)}\n"},{"type":"external","src":"/_astro/results.BQeiNAoI.css"}],"routeData":{"route":"/results","isIndex":false,"type":"page","pattern":"^\\/results\\/?$","segments":[[{"content":"results","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/results.astro","pathname":"/results","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"file:///Users/niknam/Documents/Code/ParsAtlas/pars-atlas-arena/dist/index.html","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/index.CaJfAEmo.css"},{"type":"inline","content":".faq-module-head[data-astro-cid-z65bj42f]{background:var(--color-text-strong);color:var(--color-bg)}.faq-shell[data-astro-cid-z65bj42f] .faq-item[data-astro-cid-z65bj42f]:first-of-type{border-top:0}.faq-module-head[data-astro-cid-z65bj42f] .lb-head-lines[data-astro-cid-z65bj42f] span[data-astro-cid-z65bj42f]{background:var(--color-bg)}details[data-astro-cid-z65bj42f][open] .details-closed[data-astro-cid-z65bj42f]{display:none}details[data-astro-cid-z65bj42f][open] .details-open[data-astro-cid-z65bj42f]{display:inline}.faq-answer[data-astro-cid-z65bj42f] a{color:var(--color-link);text-decoration-color:color-mix(in srgb,var(--color-link) 40%,transparent)}.faq-answer[data-astro-cid-z65bj42f] a:hover{color:var(--color-accent);text-decoration-color:var(--color-accent)}\n.home-shell[data-astro-cid-j7pv25f6]{max-width:67.5rem}.home-hero[data-astro-cid-j7pv25f6]{max-width:43rem}.home-card-grid[data-astro-cid-j7pv25f6]{display:grid;grid-template-columns:1fr;gap:1.5rem}.leaderboard-card[data-astro-cid-j7pv25f6]{display:flex;flex-direction:column;overflow:hidden;border:1px solid var(--color-border);border-radius:3px;background:var(--color-bg);font-family:var(--font-mono)}.leaderboard-card[data-astro-cid-j7pv25f6]>.p-4[data-astro-cid-j7pv25f6]{flex:1 1 auto}.leaderboard-card-link[data-astro-cid-j7pv25f6]{display:flex;align-items:center;justify-content:center;gap:.5rem;border-top:1px solid var(--color-border);background:color-mix(in srgb,var(--color-surface) 58%,var(--color-bg));color:var(--color-text);padding:.75rem 1rem;font-size:.75rem;text-align:center;text-decoration:none}.leaderboard-card-link[data-astro-cid-j7pv25f6]:hover{background:color-mix(in srgb,var(--color-surface-strong) 76%,var(--color-bg));color:var(--color-text-strong);text-decoration:none}@media(min-width:768px){.home-card-grid[data-astro-cid-j7pv25f6]{grid-template-columns:repeat(2,minmax(0,1fr))}}\n"}],"routeData":{"route":"/","isIndex":true,"type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}}],"site":"https://ParsAtlas.github.io","base":"/","trailingSlash":"ignore","compressHTML":true,"componentMetadata":[["/Users/niknam/Documents/Code/ParsAtlas/pars-atlas-arena/src/pages/404.astro",{"propagation":"none","containsHead":true}],["/Users/niknam/Documents/Code/ParsAtlas/pars-atlas-arena/src/pages/index.astro",{"propagation":"none","containsHead":true}],["/Users/niknam/Documents/Code/ParsAtlas/pars-atlas-arena/src/pages/leaderboards/[slug].astro",{"propagation":"none","containsHead":true}],["/Users/niknam/Documents/Code/ParsAtlas/pars-atlas-arena/src/pages/results.astro",{"propagation":"none","containsHead":true}]],"renderers":[],"clientDirectives":[["idle","(()=>{var l=(n,t)=>{let i=async()=>{await(await n())()},e=typeof t.value==\"object\"?t.value:void 0,s={timeout:e==null?void 0:e.timeout};\"requestIdleCallback\"in window?window.requestIdleCallback(i,s):setTimeout(i,s.timeout||200)};(self.Astro||(self.Astro={})).idle=l;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var n=(a,t)=>{let i=async()=>{await(await a())()};if(t.value){let e=matchMedia(t.value);e.matches?i():e.addEventListener(\"change\",i,{once:!0})}};(self.Astro||(self.Astro={})).media=n;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var a=(s,i,o)=>{let r=async()=>{await(await s())()},t=typeof i.value==\"object\"?i.value:void 0,c={rootMargin:t==null?void 0:t.rootMargin},n=new IntersectionObserver(e=>{for(let l of e)if(l.isIntersecting){n.disconnect(),r();break}},c);for(let e of o.children)n.observe(e)};(self.Astro||(self.Astro={})).visible=a;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000@astro-page:src/pages/404@_@astro":"pages/404.astro.mjs","\u0000@astro-page:src/pages/index.md@_@ts":"pages/index.md.astro.mjs","\u0000@astro-page:src/pages/index@_@astro":"pages/index.astro.mjs","\u0000@astro-page:src/pages/leaderboards/[slug].md@_@ts":"pages/leaderboards/_slug_.md.astro.mjs","\u0000@astro-page:src/pages/leaderboards/[slug]@_@astro":"pages/leaderboards/_slug_.astro.mjs","\u0000@astro-page:src/pages/llms-full.txt@_@ts":"pages/llms-full.txt.astro.mjs","\u0000@astro-page:src/pages/llms.txt@_@ts":"pages/llms.txt.astro.mjs","\u0000@astro-page:src/pages/og/[slug].png@_@ts":"pages/og/_slug_.png.astro.mjs","\u0000@astro-page:src/pages/og/[slug]/[rank].png@_@ts":"pages/og/_slug_/_rank_.png.astro.mjs","\u0000@astro-page:src/pages/results@_@astro":"pages/results.astro.mjs","\u0000@astro-renderers":"renderers.mjs","\u0000noop-middleware":"_noop-middleware.mjs","\u0000virtual:astro:actions/noop-entrypoint":"noop-entrypoint.mjs","\u0000@astrojs-manifest":"manifest_Bih5o44o.mjs","/Users/niknam/Documents/Code/ParsAtlas/pars-atlas-arena/src/components/AtlasCallout.astro?astro&type=script&index=0&lang.ts":"_astro/AtlasCallout.astro_astro_type_script_index_0_lang.uhf5pPc-.js","/Users/niknam/Documents/Code/ParsAtlas/pars-atlas-arena/src/components/BenchmarkResultsTable.astro?astro&type=script&index=0&lang.ts":"_astro/BenchmarkResultsTable.astro_astro_type_script_index_0_lang.C-7r0fZs.js","/Users/niknam/Documents/Code/ParsAtlas/pars-atlas-arena/src/components/CopyMarkdownButton.astro?astro&type=script&index=0&lang.ts":"_astro/CopyMarkdownButton.astro_astro_type_script_index_0_lang.Cwt3fAoP.js","/Users/niknam/Documents/Code/ParsAtlas/pars-atlas-arena/src/components/PostHogInit.astro?astro&type=script&index=0&lang.ts":"_astro/PostHogInit.astro_astro_type_script_index_0_lang.DM79Oi59.js","/Users/niknam/Documents/Code/ParsAtlas/pars-atlas-arena/src/components/TocObserver.astro?astro&type=script&index=0&lang.ts":"_astro/TocObserver.astro_astro_type_script_index_0_lang.DcSCRUbp.js","/Users/niknam/Documents/Code/ParsAtlas/pars-atlas-arena/src/pages/results.astro?astro&type=script&index=0&lang.ts":"_astro/results.astro_astro_type_script_index_0_lang.CjRImYrE.js","astro:scripts/before-hydration.js":""},"inlinedScripts":[["/Users/niknam/Documents/Code/ParsAtlas/pars-atlas-arena/src/components/AtlasCallout.astro?astro&type=script&index=0&lang.ts","document.querySelectorAll(\".atlas-install\").forEach(e=>{e.addEventListener(\"click\",()=>{navigator.clipboard.writeText(e.dataset.copy??\"\").then(()=>{e.classList.add(\"is-copied\"),setTimeout(()=>e.classList.remove(\"is-copied\"),1600)})})});"],["/Users/niknam/Documents/Code/ParsAtlas/pars-atlas-arena/src/components/BenchmarkResultsTable.astro?astro&type=script&index=0&lang.ts","document.querySelectorAll(\".lb-expand-btn\").forEach(e=>{e.addEventListener(\"click\",()=>{const i=e.closest(\".table-shell\");i&&(i.classList.toggle(\"is-collapsed\"),e.setAttribute(\"aria-expanded\",String(!i.classList.contains(\"is-collapsed\"))))})});document.querySelectorAll(\".note-trigger\").forEach(e=>{const i=e.getAttribute(\"aria-describedby\");if(!i)return;const o=document.getElementById(i);if(!o||typeof o.showPopover!=\"function\")return;const t=8,p=120;let n,c=!1;const a=()=>{const u=e.getBoundingClientRect(),s=o.getBoundingClientRect(),f=document.documentElement.clientWidth,h=document.documentElement.clientHeight;let l=u.top-s.height-t,d=u.left+u.width/2-s.width/2;l<t&&(l=u.bottom+t),d<t&&(d=t),d+s.width>f-t&&(d=f-s.width-t),l+s.height>h-t&&(l=Math.max(t,h-s.height-t)),o.style.top=`${l}px`,o.style.left=`${d}px`},r=()=>a(),v=()=>{n!==void 0&&(window.clearTimeout(n),n=void 0),!c&&(c=!0,o.showPopover(),a(),window.addEventListener(\"scroll\",r,!0),window.addEventListener(\"resize\",r))},w=()=>{c&&(c=!1,o.hidePopover(),window.removeEventListener(\"scroll\",r,!0),window.removeEventListener(\"resize\",r))},m=()=>{n!==void 0&&window.clearTimeout(n),n=window.setTimeout(w,p)},E=()=>{n!==void 0&&(window.clearTimeout(n),n=void 0)};e.addEventListener(\"mouseenter\",v),e.addEventListener(\"mouseleave\",m),e.addEventListener(\"focus\",v),e.addEventListener(\"blur\",w),o.addEventListener(\"mouseenter\",E),o.addEventListener(\"mouseleave\",m)});"],["/Users/niknam/Documents/Code/ParsAtlas/pars-atlas-arena/src/components/CopyMarkdownButton.astro?astro&type=script&index=0&lang.ts","function s(e){if(!e)return\"—\";const t=/^\\d{4}-\\d{2}$/.test(e)?`${e}-01`:e,n=new Date(`${t}T00:00:00Z`);return Number.isNaN(n.getTime())?e:n.toLocaleDateString(\"en-US\",{month:\"short\",year:\"numeric\",timeZone:\"UTC\"})}function c(e){const t=JSON.parse(e.dataset.rows??\"[]\"),n=e.dataset.heading??\"Leaderboard\",a=\"| System | Organization | Score | Reported | Notes | Source | Repo |\",r=\"| --- | --- | --- | --- | --- | --- | --- |\",i=t.map(o=>`| ${o.systemName} | ${o.organization} | ${o.scoreDisplay} | ${s(o.reportedAt)} | ${o.notesShort} | [Source](${o.sourceUrl}) | ${o.repoUrl?`[Repo](${o.repoUrl})`:\"—\"} |`);return[`## ${n}`,\"\",a,r,...i].join(`\n`)}document.querySelectorAll(\".copy-md-btn\").forEach(e=>{e.addEventListener(\"click\",()=>{navigator.clipboard.writeText(c(e)).then(()=>{const t=e.querySelector(\".copy-md-label\"),n=t?t.textContent:e.textContent;t?t.textContent=\"Copied\":e.textContent=\"Copied\",setTimeout(()=>{t?t.textContent=n:e.textContent=n},1800)})})});"],["/Users/niknam/Documents/Code/ParsAtlas/pars-atlas-arena/src/components/TocObserver.astro?astro&type=script&index=0&lang.ts","const i=Array.from(document.querySelectorAll(\".toc-list a[href^='#']\")),c=i.map(e=>{const t=e.hash.slice(1);return t?document.getElementById(t):null}).filter(e=>!!e);function n(e){i.forEach(t=>{if(t.hash===`#${e}`){t.setAttribute(\"aria-current\",\"true\");const o=t.closest(\".toc-list\");o&&(o.style.setProperty(\"--toc-active-y\",`${t.offsetTop}px`),o.style.setProperty(\"--toc-active-height\",`${t.offsetHeight}px`))}else t.removeAttribute(\"aria-current\")})}function r(){const e=window.scrollY+window.innerHeight*.28,t=c.reduce((o,s)=>s.offsetTop<=e?s:o,c[0]??null);t&&n(t.id)}i.length>0&&c.length>0&&(r(),window.addEventListener(\"scroll\",r,{passive:!0}),window.addEventListener(\"resize\",r));"],["/Users/niknam/Documents/Code/ParsAtlas/pars-atlas-arena/src/pages/results.astro?astro&type=script&index=0&lang.ts","const d=document.getElementById(\"results-table\");if(d){let p=function(t,e){const r=(e.dataset.reported??\"\").localeCompare(t.dataset.reported??\"\");return r!==0?r:Number(t.dataset.rank??0)-Number(e.dataset.rank??0)},g=function(t,e){return Number(t.dataset.rank??0)-Number(e.dataset.rank??0)},u=function(){if(!h)return;const t=a.benchmark===\"all\"?p:g,e=f.slice().sort(t);for(const r of e)h.appendChild(r);k&&(k.textContent=a.benchmark===\"all\"?\"Sorted by reported date\":\"Sorted by rank\")},m=function(){const t=a.query;let e=0;for(const r of f){const o=a.category===\"all\"||r.dataset.category===a.category,l=a.benchmark===\"all\"||r.dataset.benchmark===a.benchmark,c=t===\"\"||(r.dataset.search??\"\").includes(t);o&&l&&c?(r.removeAttribute(\"data-hidden\"),e++):r.setAttribute(\"data-hidden\",\"\")}y&&(y.textContent=String(e)),b&&(b.hidden=e!==0)},v=function(){for(const t of s){if(t.dataset.value===\"all\")continue;const e=t.dataset.category??\"\";if(a.category===\"all\"||e===a.category)t.removeAttribute(\"data-hidden\");else if(t.setAttribute(\"data-hidden\",\"\"),t.dataset.value===a.benchmark){a.benchmark=\"all\";const r=s.find(o=>o.dataset.value===\"all\");for(const o of s)o.classList.toggle(\"is-active\",o===r),o.setAttribute(\"aria-pressed\",String(o===r))}}};const h=d.querySelector(\"tbody\"),f=Array.from(d.querySelectorAll(\"tbody tr\")),y=document.querySelector(\"[data-results-count]\"),b=document.querySelector(\"[data-empty-state]\"),k=document.querySelector(\"[data-sort-hint]\"),n=document.querySelector(\"#results-search\"),s=Array.from(document.querySelectorAll('[data-filter=\"benchmark\"]')),a={category:\"all\",benchmark:\"all\",query:\"\"};for(const t of document.querySelectorAll('[data-filter=\"category\"], [data-filter=\"benchmark\"]'))t.addEventListener(\"click\",()=>{const e=t.dataset.filter,r=t.dataset.value??\"all\",o=a.benchmark;a[e]=r;const l=document.querySelectorAll(`[data-filter=\"${e}\"]`);for(const c of l){const i=c===t;c.classList.toggle(\"is-active\",i),c.setAttribute(\"aria-pressed\",String(i))}e===\"category\"&&v(),m(),(e===\"benchmark\"&&a.benchmark!==o||e===\"category\"&&a.benchmark===\"all\"&&o!==\"all\")&&u()});n&&n.addEventListener(\"input\",()=>{a.query=n.value.trim().toLowerCase(),m()})}"]],"assets":["/file:///Users/niknam/Documents/Code/ParsAtlas/pars-atlas-arena/dist/404.html","/file:///Users/niknam/Documents/Code/ParsAtlas/pars-atlas-arena/dist/index.md","/file:///Users/niknam/Documents/Code/ParsAtlas/pars-atlas-arena/dist/llms-full.txt","/file:///Users/niknam/Documents/Code/ParsAtlas/pars-atlas-arena/dist/llms.txt","/file:///Users/niknam/Documents/Code/ParsAtlas/pars-atlas-arena/dist/results/index.html","/file:///Users/niknam/Documents/Code/ParsAtlas/pars-atlas-arena/dist/index.html"],"buildFormat":"directory","checkOrigin":false,"allowedDomains":[],"actionBodySizeLimit":1048576,"serverIslandNameMap":[],"key":"lmmpwwQKD0vnrp8njNY5mG0wDHj1kLCGy3T2nnAWzIU="});
if (manifest.sessionConfig) manifest.sessionConfig.driverModule = null;

export { manifest };
