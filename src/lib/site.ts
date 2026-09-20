import { routing } from "@/i18n/routing";

/** Canonical origin. The apex 308s here, so every absolute URL uses www. */
export const SITE_URL = "https://www.jp305.dev";

/** Pages that search engines should index, one per locale. */
export const INDEXED_PATHS = ["", "/portfolio"] as const;

/**
 * Absolute URL of a page in one locale. Mirrors `localePrefix: "as-needed"`:
 * the default locale is unprefixed, so the English home page is the root.
 */
export const localizedUrl = (locale: string, path: string = "") =>
  locale === routing.defaultLocale
    ? `${SITE_URL}${path || "/"}`
    : `${SITE_URL}/${locale}${path}`;

/** hreflang map for one path: every locale plus the English default. */
export const languageAlternates = (path: string = "") =>
  Object.fromEntries([
    ...routing.locales.map((l) => [l, localizedUrl(l, path)]),
    ["x-default", localizedUrl(routing.defaultLocale, path)],
  ]) as Record<string, string>;

/** `alternates` for a page's metadata: canonical + hreflang. */
export const alternatesFor = (locale: string, path: string = "") => ({
  canonical: localizedUrl(locale, path),
  languages: languageAlternates(path),
});

/** Open Graph wants a territory; the site is written from Québec. */
export const ogLocale = (locale: string) => `${locale}_CA`;

/**
 * Who the site is about. Fed to the JSON-LD `Person` so search engines tie
 * the pages to one entity, and so the common misspelling of the family name
 * (Melançon, Melancon) resolves to the same person.
 */
export const person = {
  id: `${SITE_URL}/#person`,
  name: "Jean-Philippe Melanson",
  givenName: "Jean-Philippe",
  familyName: "Melanson",
  alternateName: [
    "JP Melanson",
    "JP Melançon",
    "JP Melancon",
    "Jean-Philippe Melançon",
    "Jean-Philippe Melancon",
  ],
  email: "jp@jp305.dev",
  locality: "Lévis",
  region: "QC",
  country: "CA",
  sameAs: [
    "https://www.linkedin.com/in/jp305",
    "https://github.com/jp30566347",
    "https://tui.jp305.dev",
  ],
  alumniOf: "École de technologie supérieure",
  knowsAbout: [
    "Fractional CTO",
    "Software architecture",
    "TypeScript",
    "React",
    "Next.js",
    "React Native",
    "Rust",
    "PostgreSQL",
    "AWS",
    "Cloud infrastructure",
    "AI coding agents",
    "LLM applications",
    "Application security",
  ],
} as const;
