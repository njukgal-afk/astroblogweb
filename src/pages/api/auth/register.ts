import type { APIRoute } from "astro";
import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  import.meta.env.SUPABASE_URL,
  import.meta.env.SUPABASE_ANON_KEY
);

export const POST: APIRoute = async ({ request, redirect }) => {
  // Data read from request
  const formData = await request.formData();
  const email = formData.get("email");
  const password = formData.get("password");

  // Validation
  if (!email || !password) {
    return new Response("Email and password are required.", { status: 400 });
  }
  // Sign up user with Supabase Auth
  const { error } = await supabase.auth.signUp({
    email: email.toString(),
    password: password.toString(),
  });
  //Handle errors
  if (error) {
    return new Response(`Error: ${error.message}`, { status: 400 });
  }
  // Redirect to login page after successful registration
  return redirect("/login");
};
