import { d as createComponent, m as maybeRenderHead, r as renderTemplate, k as renderHead } from './astro/server_Cd5EGELj.mjs';
import 'piccolore';
import 'clsx';

const $$Nav = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<header> <nav class="nav"> <h1 class="site-title"> <a href="/">Foodie Blog</a> </h1> <ul class="nav-links"> <li><a href="/">Home</a></li> <li><a href="/news">Blog</a></li> <li><a href="/login" class="login-btn">Log in</a></li> </ul> </nav> </header>`;
}, "C:/Users/User/Astro_projects/astroblogweb/src/components/Nav.astro", void 0);

const $$Footer = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<footer class="footer"> <p class="footer-text">Your Favorite Foodie blog</p> </footer>`;
}, "C:/Users/User/Astro_projects/astroblogweb/src/components/Footer.astro", void 0);

const $$Head = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`<head><title>Foodie blog web</title><!--I've learned the following meta tags (author information, responsive web) from w3schools.com--><meta name="author" content="Enkhjin Galbadrakh, 3204954"><meta name="viewport" content="width=device-width, initial-scale=1.0"><link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><link href="https://fonts.googleapis.com/css2?family=Finger+Paint&family=Gloria+Hallelujah&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Quicksand&display=swap" rel="stylesheet">${renderHead()}</head>`;
}, "C:/Users/User/Astro_projects/astroblogweb/src/components/Head.astro", void 0);

export { $$Head as $, $$Nav as a, $$Footer as b };
