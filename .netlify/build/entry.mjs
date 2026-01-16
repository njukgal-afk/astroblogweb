import { renderers } from './renderers.mjs';
import { s as serverEntrypointModule } from './chunks/_@astrojs-ssr-adapter_CvSoi7hX.mjs';
import { manifest } from './manifest_BYrfDau1.mjs';
import { createExports } from '@astrojs/netlify/ssr-function.js';

const serverIslandMap = new Map();;

const _page0 = () => import('./pages/_image.astro.mjs');
const _page1 = () => import('./pages/api/auth/login.astro.mjs');
const _page2 = () => import('./pages/api/auth/register.astro.mjs');
const _page3 = () => import('./pages/api/posts/create.astro.mjs');
const _page4 = () => import('./pages/api/posts/delete.astro.mjs');
const _page5 = () => import('./pages/api/posts/update.astro.mjs');
const _page6 = () => import('./pages/blogs/carrotcakerecipe.astro.mjs');
const _page7 = () => import('./pages/dashboard.astro.mjs');
const _page8 = () => import('./pages/login.astro.mjs');
const _page9 = () => import('./pages/news.astro.mjs');
const _page10 = () => import('./pages/signup.astro.mjs');
const _page11 = () => import('./pages/index.astro.mjs');
const pageMap = new Map([
    ["node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/api/auth/login.ts", _page1],
    ["src/pages/api/auth/register.ts", _page2],
    ["src/pages/api/posts/create.ts", _page3],
    ["src/pages/api/posts/delete.ts", _page4],
    ["src/pages/api/posts/update.ts", _page5],
    ["src/pages/blogs/carrotcakerecipe.md", _page6],
    ["src/pages/dashboard.astro", _page7],
    ["src/pages/login.astro", _page8],
    ["src/pages/news.astro", _page9],
    ["src/pages/signup.astro", _page10],
    ["src/pages/index.astro", _page11]
]);

const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    actions: () => import('./noop-entrypoint.mjs'),
    middleware: () => import('./_astro-internal_middleware.mjs')
});
const _args = {
    "middlewareSecret": "d825768c-44b7-4dd5-b281-c0a0e28c89ff"
};
const _exports = createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;
const _start = 'start';
if (Object.prototype.hasOwnProperty.call(serverEntrypointModule, _start)) {
	serverEntrypointModule[_start](_manifest, _args);
}

export { __astrojsSsrVirtualEntry as default, pageMap };
