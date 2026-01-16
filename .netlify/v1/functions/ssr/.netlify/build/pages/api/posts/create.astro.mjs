import { c as createSupabaseServerClient, a as attachSession } from '../../../chunks/supabaseServer_DHuB7_vB.mjs';
export { renderers } from '../../../renderers.mjs';

const POST = async ({ request, cookies, redirect }) => {
  const { supabase, access, refresh } = createSupabaseServerClient(cookies);
  await attachSession(supabase, access, refresh);
  const { data: userData } = await supabase.auth.getUser();
  const user = userData.user;
  if (!user) return redirect("/login");
  const formData = await request.formData();
  const title = formData.get("title")?.toString();
  const content = formData.get("content")?.toString();
  if (!title || !content) {
    return new Response("Title and content are required.", { status: 400 });
  }
  const { error } = await supabase.from("posts").insert([
    {
      title,
      content,
      user_id: user.id
    }
  ]);
  if (error) return new Response(error.message, { status: 400 });
  return redirect("/dashboard");
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  POST
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
