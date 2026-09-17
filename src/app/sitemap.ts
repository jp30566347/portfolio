import type { MetadataRoute } from "next";
import { routing } from "@/i18n/routing";
import { INDEXED_PATHS, languageAlternates, localizedUrl } from "@/lib/site";

// Served at /sitemap.xml: one entry per locale per page, each carrying the
// hreflang set so Google pairs the French and English versions.
export default function sitemap(): MetadataRoute.Sitemap {
  return INDEXED_PATHS.flatMap((path) =>
    routing.locales.map((locale) => ({
      url: localizedUrl(locale, path),
      changeFrequency: "monthly" as const,
      priority: path === "" ? 1 : 0.8,
      alternates: { languages: languageAlternates(path) },
    }))
  );
}
