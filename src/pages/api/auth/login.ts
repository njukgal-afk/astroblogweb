import type { APIRoute } from "astro";
import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  import.meta.env.SUPABASE_URL,
  import.meta.env.SUPABASE_ANON_KEY
);

export const POST: APIRoute = async ({ request, cookies, redirect }) => {
  // Data read form
  const formData = await request.formData();
  const email = formData.get("email");
  const password = formData.get("password");

  // Validation
  if (!email || !password) {
    return new Response("Email and password are required.", { status: 400 });
  }
  // Sign in user with Supabase Auth
  const { data, error } = await supabase.auth.signInWithPassword({
    email: email.toString(),
    password: password.toString(),
  });

  //Handle log in errors
  if (error) {
    return new Response(`Error: ${error.message}`, { status: 401 });
  }
  //Store session tokens
  cookies.set("sb-access-token", data.session.access_token, {
    path: "/",
    httpOnly: true,
    sameSite: "lax",
  });
  cookies.set("sb-refresh-token", data.session.refresh_token, {
    path: "/",
    httpOnly: true,
    sameSite: "lax",
  });

  // Redirect to Dashboard after successful login
  return redirect("/dashboard");
};
