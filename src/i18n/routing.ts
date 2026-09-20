import { defineRouting } from "next-intl/routing";
import { createNavigation } from "next-intl/navigation";

export const routing = defineRouting({
  // A list of all locales that are supported
  // English is listed first and set as default
  locales: ["en", "fr"],

  // English is the default locale
  defaultLocale: "en",

  // English lives at the root (/, /portfolio); only French is prefixed. With
  // "always", / answered a 307 to /en, so Google saw two competing copies of
  // the home page and reported /en as a duplicate without a chosen canonical.
  localePrefix: "as-needed",

  // The proxy's own `Link: rel="alternate"` header is generated from the
  // request URL and its x-default disagreed with the <link> tags in the
  // HTML. The page metadata (lib/site.ts) is the single source of hreflang.
  alternateLinks: false,
});

// Lightweight wrappers around Next.js' navigation APIs
// that will consider the routing configuration
export const { Link, redirect, usePathname, useRouter } =
  createNavigation(routing);
