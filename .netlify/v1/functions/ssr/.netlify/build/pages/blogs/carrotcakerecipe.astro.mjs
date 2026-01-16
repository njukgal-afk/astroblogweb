import { d as createComponent, j as renderComponent, k as renderHead, l as renderSlot, r as renderTemplate, u as unescapeHTML } from '../../chunks/astro/server_Cd5EGELj.mjs';
import 'piccolore';
/* empty css                                               */
import { $ as $$Head, a as $$Nav, b as $$Footer } from '../../chunks/Head_CNZ5H35s.mjs';
export { renderers } from '../../renderers.mjs';

const $$BlogLayout = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`<html lang="en"> <head><title>Blog Layout</title>${renderComponent($$result, "Head", $$Head, {})}${renderHead()}</head> <body> ${renderComponent($$result, "Nav", $$Nav, {})} <div class="bloglayout"> <main> ${renderSlot($$result, $$slots["default"])} </main> </div> ${renderComponent($$result, "Footer", $$Footer, {})} </body></html>`;
}, "C:/Users/User/Astro_projects/astroblogweb/src/layouts/BlogLayout.astro", void 0);

const html = () => "<h1 id=\"carrot-cake-recipe\">Carrot Cake Recipe</h1>\n<p>2026.01.16</p>\n<p>Source:(<a href=\"https://preppykitchen.com/carrot-and-walnut-cake/\">https://preppykitchen.com/carrot-and-walnut-cake/</a>)</p>\n<p>This recipe produces a moist, classic carrot cake topped with tangy cream cheese frosting.</p>\n<p><img src=\"/images/carrotcake.jpeg\" alt=\"Cake Picture\"></p>\n<p>Ingredients\r\nFor the Cake:\r\nFlour: 2 ½ cups (300g) all-purpose flour.\r\nLeavening/Salt: 2 tsp baking powder, 1 tsp baking soda, and 1 tsp salt.\r\nSpices: 1 tsp ground cinnamon and ½ tsp ground nutmeg.\r\nSugars: 1 cup granulated sugar and 1 cup packed light brown sugar.\r\nWet Ingredients: 1 ⅓ cups vegetable oil, 4 large eggs (room temperature), and 2 tsp vanilla extract.\r\nCarrots: 3 cups finely grated carrots (about 1 pound/455g).\r\nOptional Mix-ins: 1 cup chopped pecans or walnuts.\r\nFor the Cream Cheese Frosting:\r\nCream Cheese: 1 block (8 oz/227g), softened to room temperature.\r\nButter: 1 cup (2 sticks) unsalted butter, softened.\r\nSugar: 4–5 cups powdered sugar.\r\nVanilla: 2 tsp vanilla extract.</p>";

				const frontmatter = {"title":"Title","layout":"../../layouts/BlogLayout.astro"};
				const file = "C:/Users/User/Astro_projects/astroblogweb/src/pages/blogs/carrotcakerecipe.md";
				const url = "/blogs/carrotcakerecipe";
				function rawContent() {
					return "   \r\n            \r\n                                      \r\n   \r\n\r\n# Carrot Cake Recipe\r\n\r\n2026.01.16\r\n\r\nSource:(https://preppykitchen.com/carrot-and-walnut-cake/)\r\n\r\nThis recipe produces a moist, classic carrot cake topped with tangy cream cheese frosting.\r\n\r\n![Cake Picture](/images/carrotcake.jpeg)\r\n\r\nIngredients\r\nFor the Cake:\r\nFlour: 2 ½ cups (300g) all-purpose flour.\r\nLeavening/Salt: 2 tsp baking powder, 1 tsp baking soda, and 1 tsp salt.\r\nSpices: 1 tsp ground cinnamon and ½ tsp ground nutmeg.\r\nSugars: 1 cup granulated sugar and 1 cup packed light brown sugar.\r\nWet Ingredients: 1 ⅓ cups vegetable oil, 4 large eggs (room temperature), and 2 tsp vanilla extract.\r\nCarrots: 3 cups finely grated carrots (about 1 pound/455g).\r\nOptional Mix-ins: 1 cup chopped pecans or walnuts.\r\nFor the Cream Cheese Frosting:\r\nCream Cheese: 1 block (8 oz/227g), softened to room temperature.\r\nButter: 1 cup (2 sticks) unsalted butter, softened.\r\nSugar: 4–5 cups powdered sugar.\r\nVanilla: 2 tsp vanilla extract.\r\n";
				}
				async function compiledContent() {
					return await html();
				}
				function getHeadings() {
					return [{"depth":1,"slug":"carrot-cake-recipe","text":"Carrot Cake Recipe"}];
				}

				const Content = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter;
					content.file = file;
					content.url = url;

					return renderTemplate`${renderComponent(result, 'Layout', $$BlogLayout, {
								file,
								url,
								content,
								frontmatter: content,
								headings: getHeadings(),
								rawContent,
								compiledContent,
								'server:root': true,
							}, {
								'default': () => renderTemplate`${unescapeHTML(html())}`
							})}`;
				});

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  Content,
  compiledContent,
  default: Content,
  file,
  frontmatter,
  getHeadings,
  rawContent,
  url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
