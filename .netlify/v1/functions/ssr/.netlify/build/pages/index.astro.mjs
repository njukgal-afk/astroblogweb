import { d as createComponent, j as renderComponent, k as renderHead, r as renderTemplate } from '../chunks/astro/server_Cd5EGELj.mjs';
import 'piccolore';
/* empty css                                            */
import { $ as $$Head, a as $$Nav, b as $$Footer } from '../chunks/Head_CNZ5H35s.mjs';
export { renderers } from '../renderers.mjs';

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`<html lang="en"> <head>${renderComponent($$result, "Head", $$Head, {})}${renderHead()}</head> <body> ${renderComponent($$result, "Nav", $$Nav, {})} <main> <div class="landing-page"> <div class="item1"> <img src="/images/landing_pic.jpeg" alt="Food picture"> </div> <div class="item2"> <h1>Welcome to Foodie blog!</h1> <p>Your go-to destination for insightful articles on web development, programming, and technology trends. Dive into our expertly crafted content and stay ahead in the ever-evolving tech landscape.</p> </div> </div> <div class="recentblog"> <h3>Recent Blogs</h3> <div class="recentbloggrid"> <div class="bloggriditem"> <img src="/images/carrotcake.jpeg" alt="Blog 1"> <a href="/blogs/carrotcakerecipe"><h3>Carrot Cake Recipe</h3></a> <p>Discover easy and delicious recipes for homemade carrot cake.</p> </div> <div class="bloggriditem"> <img src="/images/landing.jpeg" alt="Blog 2"> <a href="/blogs/carrotcakerecipe"><h3>Recipe to make carrot cake</h3></a> <p>Discover easy and delicious recipes for homemade carrot cake.</p> </div> <div class="bloggriditem"> <img src="/images/landing.jpeg" alt="Blog 3"> <a href="/blogs/carrotcakerecipe"><h3>Recipe to make carrot cake</h3></a> <p>Discover easy and delicious recipes for homemade carrot cake.</p> </div> <div class="bloggriditem"> <img src="/images/landing.jpeg" alt="Blog 4"> <a href="/blogs/carrotcakerecipe"><h3>Recipe to make carrot cake</h3></a> <p>Discover easy and delicious recipes for homemade carrot cake.</p> </div> </div> </div> ${renderComponent($$result, "Footer", $$Footer, {})} </main> </body></html>`;
}, "C:/Users/User/Astro_projects/astroblogweb/src/pages/index.astro", void 0);

const $$file = "C:/Users/User/Astro_projects/astroblogweb/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
