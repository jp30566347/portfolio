import type { MetadataRoute } from "next";
import { routing } from "@/i18n/routing";
import { INDEXED_PATHS, languageAlternates, localizedUrl } from "@/lib/site";

// Served at /sitemap.xml: one entry per locale per page, each carrying the
// hreflang set so Google pairs the French and English versions, and the date
// the pages last changed (see next.config.mjs) so it knows when to refetch.
// Both pages and both locales share messages/ and the same components, so
// one date covers all four URLs.
export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = process.env.SITE_LAST_MODIFIED || undefined;

  return INDEXED_PATHS.flatMap((path) =>
    routing.locales.map((locale) => ({
      url: localizedUrl(locale, path),
      lastModified,
      changeFrequency: "monthly" as const,
      priority: path === "" ? 1 : 0.8,
      alternates: { languages: languageAlternates(path) },
    }))
  );
}
