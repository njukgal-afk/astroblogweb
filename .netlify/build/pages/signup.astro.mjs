import { d as createComponent, j as renderComponent, k as renderHead, r as renderTemplate } from '../chunks/astro/server_Cd5EGELj.mjs';
import 'piccolore';
/* empty css                                            */
import { $ as $$Head, a as $$Nav, b as $$Footer } from '../chunks/Head_CNZ5H35s.mjs';
export { renderers } from '../renderers.mjs';

const $$Signup = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`<html lang="en"> <head>${renderComponent($$result, "Head", $$Head, {})}<title>Sign Up</title>${renderHead()}</head> <body> ${renderComponent($$result, "Nav", $$Nav, {})} <main> <div class="signupclass"> <div class="signupitem1"> <img src="/images/landing_pic.jpeg" alt="Food picture"> </div> <div class="signupitem2"> <h3>Create an Account</h3> <form method="post" action="/api/auth/register"> <div> <label for="email">Email</label><br> <input type="email" id="email" name="email" required> </div> <br> <div> <label for="password">Password</label><br> <input type="password" id="password" name="password" required> </div> <br> <button type="submit">Sign Up</button> </form> <p class="signup-text">Already have an account?</p> <a href="/login" class="signup-btn">Log In</a> </div> </div> ${renderComponent($$result, "Footer", $$Footer, {})} </main> </body></html>`;
}, "C:/Users/User/Astro_projects/astroblogweb/src/pages/signup.astro", void 0);

const $$file = "C:/Users/User/Astro_projects/astroblogweb/src/pages/signup.astro";
const $$url = "/signup";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Signup,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
