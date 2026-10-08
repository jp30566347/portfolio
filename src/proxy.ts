import { type NextRequest, NextResponse } from "next/server";
import createMiddleware from "next-intl/middleware";
import { routing } from "./i18n/routing";

// `proxy` replaced the `middleware` file convention in Next.js 16. next-intl
// still exports this factory from "next-intl/middleware".
const handleI18nRouting = createMiddleware(routing);

const defaultPrefix = `/${routing.defaultLocale}`;

export function proxy(request: NextRequest) {
  const response = handleI18nRouting(request);

  // English is served unprefixed, so /en and /en/... are only old URLs and
  // next-intl strips the prefix with a 307. Their target never varies, and a
  // temporary redirect tells Google to keep /en around as a URL of its own
  // instead of folding it into /. Other redirects stay 307: / -> /fr depends
  // on the visitor's cookie and Accept-Language.
  const { pathname } = request.nextUrl;
  const isDefaultPrefixed =
    pathname === defaultPrefix || pathname.startsWith(`${defaultPrefix}/`);
  if (isDefaultPrefixed && response.status === 307) {
    return new NextResponse(null, { status: 308, headers: response.headers });
  }

  return response;
}

export default proxy;

export const config = {
  // Everything except API routes, Next internals, and files with an extension.
  // Deliberately not a hardcoded locale list — that duplicates routing.locales
  // and silently breaks when a locale is added.
  matcher: "/((?!api|_next|_vercel|.*\\..*).*)",
};
