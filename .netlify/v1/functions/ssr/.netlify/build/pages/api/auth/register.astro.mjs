import { createClient } from '@supabase/supabase-js';
export { renderers } from '../../../renderers.mjs';

const supabase = createClient(
  "https://gfovfplifjcardtujiwe.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imdmb3ZmcGxpZmpjYXJkdHVqaXdlIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Njc3ODczOTIsImV4cCI6MjA4MzM2MzM5Mn0.Umfz2kkA1xZzBLzZKneZBpf2HDrXyhpF1uY1q2cNLL0"
);
const POST = async ({ request, redirect }) => {
  const formData = await request.formData();
  const email = formData.get("email");
  const password = formData.get("password");
  if (!email || !password) {
    return new Response("Email and password are required.", { status: 400 });
  }
  const { error } = await supabase.auth.signUp({
    email: email.toString(),
    password: password.toString()
  });
  if (error) {
    return new Response(`Error: ${error.message}`, { status: 400 });
  }
  return redirect("/login");
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  POST
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
