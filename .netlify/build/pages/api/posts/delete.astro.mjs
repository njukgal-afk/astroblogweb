import { c as createSupabaseServerClient, a as attachSession } from '../../../chunks/supabaseServer_DHuB7_vB.mjs';
export { renderers } from '../../../renderers.mjs';

const POST = async ({ request, cookies, redirect }) => {
  const { supabase, access, refresh } = createSupabaseServerClient(cookies);
  await attachSession(supabase, access, refresh);
  const { data: userData } = await supabase.auth.getUser();
  const user = userData.user;
  if (!user) return redirect("/login");
  const formData = await request.formData();
  const id = formData.get("id")?.toString();
  if (!id) return new Response("Missing post id", { status: 400 });
  const { error } = await supabase.from("posts").delete().eq("id", id);
  if (error) return new Response(error.message, { status: 400 });
  return redirect("/dashboard");
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  POST
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
