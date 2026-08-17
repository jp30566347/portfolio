import createMiddleware from "next-intl/middleware";
import { routing } from "./i18n/routing";

// `proxy` replaced the `middleware` file convention in Next.js 16. next-intl
// still exports this factory from "next-intl/middleware".
export const proxy = createMiddleware(routing);

export default proxy;

export const config = {
  // Everything except API routes, Next internals, and files with an extension.
  // Deliberately not a hardcoded locale list — that duplicates routing.locales
  // and silently breaks when a locale is added.
  matcher: "/((?!api|_next|_vercel|.*\\..*).*)",
};
