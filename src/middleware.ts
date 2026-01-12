import { defineMiddleware } from "astro/middleware";

export const onRequest = defineMiddleware((context, next) => {
  const pathname = context.url.pathname;

  // Protect dashboard route

  if (pathname.startsWith("/dashboard")) {
    const accessToken = context.cookies.get("sb-access-token")?.value;
    if (!accessToken) {
      return context.redirect("/login");
    }
  }

  return next();
});
