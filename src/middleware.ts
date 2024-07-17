import { createI18nMiddleware } from "next-international/middleware";
import { NextResponse, type NextRequest } from "next/server";

const I18nMiddleware = createI18nMiddleware({
  locales: ["en", "fr"],
  defaultLocale: "en",
  urlMappingStrategy: "rewriteDefault",
});

export function middleware(request: NextRequest) {
  const res = I18nMiddleware(request);
  res.headers.set("x-current-path", request.nextUrl.pathname);
  return res;
}

export const config = {
  matcher: ["/((?!api|static|.*\\..*|_next|favicon.ico|robots.txt).*)"],
};
