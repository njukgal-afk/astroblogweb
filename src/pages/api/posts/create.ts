import type { APIRoute } from "astro";
import {
  createSupabaseServerClient,
  attachSession,
} from "../../../lib/supabaseServer";

export const POST: APIRoute = async ({ request, cookies, redirect }) => {
  const { supabase, access, refresh } = createSupabaseServerClient(cookies);
  await attachSession(supabase, access, refresh);

  // Must have a logged in user to create a post
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
      user_id: user.id,
    },
  ]);
  if (error) return new Response(error.message, { status: 400 });
  return redirect("/dashboard");
};
