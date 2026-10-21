import { getTranslations } from "next-intl/server";
import { routing } from "@/i18n/routing";
import { localizedUrl, person, SITE_URL } from "@/lib/site";
import avatar from "@/assets/jp.png";

type Path = "" | "/portfolio";

/**
 * One JSON-LD graph per page: the person, the site as their home, and the
 * page itself. The home page is a schema.org ProfilePage whose main entity is
 * the person: that is how search engines are told that this URL, and not the
 * CV PDF or a profile on someone else's domain, is the page about
 * Jean-Philippe Melanson. Every other page is a plain WebPage about him.
 */
export async function StructuredData({
  locale,
  path,
}: {
  locale: string;
  path: Path;
}) {
  const home = await getTranslations({ locale, namespace: "home" });
  const work = await getTranslations({ locale, namespace: "portfolio" });
  const isHome = path === "";
  const url = localizedUrl(locale, path);
  const websiteId = `${SITE_URL}/#website`;

  const page = isHome
    ? {
        "@type": "ProfilePage",
        name: `${person.displayName} — ${home("metaTitle")}`,
        description: home("description"),
        mainEntity: { "@id": person.id },
      }
    : {
        "@type": "WebPage",
        name: `JP Melanson — ${work("title")}`,
        description: work("description"),
      };

  const graph = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        "@id": person.id,
        name: person.name,
        givenName: person.givenName,
        familyName: person.familyName,
        alternateName: person.alternateName,
        description: home("description"),
        jobTitle: home("label"),
        url: localizedUrl(locale),
        image: `${SITE_URL}${avatar.src}`,
        email: `mailto:${person.email}`,
        address: {
          "@type": "PostalAddress",
          addressLocality: person.locality,
          addressRegion: person.region,
          addressCountry: person.country,
        },
        alumniOf: { "@type": "CollegeOrUniversity", name: person.alumniOf },
        knowsAbout: person.knowsAbout,
        sameAs: person.sameAs,
      },
      {
        "@type": "WebSite",
        "@id": websiteId,
        url: SITE_URL,
        name: "JP Melanson",
        alternateName: "jp305.dev",
        inLanguage: routing.locales,
        about: { "@id": person.id },
        publisher: { "@id": person.id },
      },
      {
        ...page,
        "@id": `${url}#webpage`,
        url,
        inLanguage: locale,
        isPartOf: { "@id": websiteId },
        about: { "@id": person.id },
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(graph).replace(/</g, "\\u003c"),
      }}
    />
  );
}
