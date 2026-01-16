import { d as createComponent, j as renderComponent, k as renderHead, r as renderTemplate } from '../chunks/astro/server_Cd5EGELj.mjs';
import 'piccolore';
/* empty css                                            */
import { $ as $$Head, a as $$Nav, b as $$Footer } from '../chunks/Head_CNZ5H35s.mjs';
export { renderers } from '../renderers.mjs';

const $$Login = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`<html lang="en"> <head>${renderComponent($$result, "Head", $$Head, {})}<title>Log In</title>${renderHead()}</head> <body> ${renderComponent($$result, "Nav", $$Nav, {})} <main> <div class="loginclass"> <div class="loginitem1"> <img src="/images/landing_pic.jpeg" alt="Food picture"> </div> <div class="loginitem2"> <h3>Log In</h3> <br> <form method="post" action="/api/auth/login"> <div> <label for="email">Email</label> <input type="email" id="email" name="email" required> </div> <div> <label for="password">Password</label> <input type="password" id="password" name="password" required> </div> <button type="submit">Log In</button> <p class="signup-text">Don't have an account?</p> <a href="/signup" class="signup-btn">Sign Up</a> </form> </div> </div> ${renderComponent($$result, "Footer", $$Footer, {})} </main> </body></html>`;
}, "C:/Users/User/Astro_projects/astroblogweb/src/pages/login.astro", void 0);

const $$file = "C:/Users/User/Astro_projects/astroblogweb/src/pages/login.astro";
const $$url = "/login";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Login,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
