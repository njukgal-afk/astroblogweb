import { createClient } from "@supabase/supabase-js";
import type { AstroCookies } from "astro";

export function createSupabseServerClient(cookies: AstroCookies) {
  const supabase = createClient(
    import.meta.env.SUPABASE_URL,
    import.meta.env.SUPABASE_ANON_KEY
  );

  const access = cookies.get("sb-access-token")?.value;
  const refresh = cookies.get("sb-refresh-token")?.value;

  return { supabase, access, refresh };
}

export async function attachSession(
  supabase: ReturnType<typeof createClient>,
  access?: string,
  refresh?: string
) {
  if (access && refresh) {
    await supabase.auth.setSession({
      access_token: access,
      refresh_token: refresh,
    });
  }
}
