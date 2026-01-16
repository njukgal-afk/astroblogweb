import { d as createComponent, e as createAstro, j as renderComponent, k as renderHead, r as renderTemplate, g as addAttribute } from '../chunks/astro/server_Cd5EGELj.mjs';
import 'piccolore';
/* empty css                                            */
import { $ as $$Head, a as $$Nav, b as $$Footer } from '../chunks/Head_CNZ5H35s.mjs';
import { c as createSupabaseServerClient, a as attachSession } from '../chunks/supabaseServer_DHuB7_vB.mjs';
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro();
const $$Dashboard = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Dashboard;
  const { supabase, access, refresh } = createSupabaseServerClient(Astro2.cookies);
  await attachSession(supabase, access, refresh);
  const { data: userData } = await supabase.auth.getUser();
  const user = userData.user;
  if (!user) {
    return Astro2.redirect("/login");
  }
  const { data: posts, error } = await supabase.from("posts").select("id, title, content, created_at").eq("user_id", user.id).order("created_at", { ascending: false });
  return renderTemplate`<html lang="en"> <head>${renderComponent($$result, "Head", $$Head, {})}<title>Dashboard</title>${renderHead()}</head> <body> ${renderComponent($$result, "Nav", $$Nav, {})} <main> <h1> Dashboard</h1> <p> Logged in as: ${user.email}</p> <h2>Create Posts</h2> <form method="post" action="/api/posts/create"> <div> <label for="title">Title</label><br> <input id="title" name="title" required> </div> <div> <label for="content">Content</label><br> <textarea id="content" name="content" rows="6" required></textarea> </div> <br> <button type="submit">Create Post</button> </form> <hr> <h2>Your Posts</h2> ${error && renderTemplate`<p style="color:red;"> ${error.message}</p>`} ${posts?.length ? renderTemplate`<ul> ${posts.map((p) => renderTemplate`<li> <h3>${p.title}</h3> <p>${p.content}</p> <form method="post" action="/api/posts/delete"> <input type="hidden" name="id"${addAttribute(p.id, "value")}> <button type="submit">Delete</button> </form> <hr> </li>`)} </ul>` : renderTemplate`<p>No posts yet.</p>`} </main> ${renderComponent($$result, "Footer", $$Footer, {})} </body></html>`;
}, "C:/Users/User/Astro_projects/astroblogweb/src/pages/dashboard.astro", void 0);

const $$file = "C:/Users/User/Astro_projects/astroblogweb/src/pages/dashboard.astro";
const $$url = "/dashboard";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Dashboard,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
