import { createClient } from '@supabase/supabase-js';

function createSupabaseServerClient(cookies) {
  const supabase = createClient(
    "https://gfovfplifjcardtujiwe.supabase.co",
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imdmb3ZmcGxpZmpjYXJkdHVqaXdlIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Njc3ODczOTIsImV4cCI6MjA4MzM2MzM5Mn0.Umfz2kkA1xZzBLzZKneZBpf2HDrXyhpF1uY1q2cNLL0"
  );
  const access = cookies.get("sb-access-token")?.value;
  const refresh = cookies.get("sb-refresh-token")?.value;
  return { supabase, access, refresh };
}
async function attachSession(supabase, access, refresh) {
  if (access && refresh) {
    await supabase.auth.setSession({
      access_token: access,
      refresh_token: refresh
    });
  }
}

export { attachSession as a, createSupabaseServerClient as c };
