import { createClient } from '@supabase/supabase-js';
export { renderers } from '../../../renderers.mjs';

const supabase = createClient(
  "https://gfovfplifjcardtujiwe.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imdmb3ZmcGxpZmpjYXJkdHVqaXdlIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Njc3ODczOTIsImV4cCI6MjA4MzM2MzM5Mn0.Umfz2kkA1xZzBLzZKneZBpf2HDrXyhpF1uY1q2cNLL0"
);
const POST = async ({ request, cookies, redirect }) => {
  const formData = await request.formData();
  const email = formData.get("email");
  const password = formData.get("password");
  if (!email || !password) {
    return new Response("Email and password are required.", { status: 400 });
  }
  const { data, error } = await supabase.auth.signInWithPassword({
    email: email.toString(),
    password: password.toString()
  });
  if (error) {
    return new Response(`Error: ${error.message}`, { status: 401 });
  }
  cookies.set("sb-access-token", data.session.access_token, {
    path: "/",
    httpOnly: true,
    sameSite: "lax"
  });
  cookies.set("sb-refresh-token", data.session.refresh_token, {
    path: "/",
    httpOnly: true,
    sameSite: "lax"
  });
  return redirect("/dashboard");
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  POST
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
