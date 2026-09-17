import "../globals.css";
import AppLayout from "@/components/AppLayout";
import Script from "next/script";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { hasLocale, NextIntlClientProvider } from "next-intl";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { routing } from "@/i18n/routing";
import { alternatesFor, ogLocale, person, SITE_URL } from "@/lib/site";
import avatar from "@/assets/jp.png";
import { body, display, mono } from "../fonts";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) notFound();
  setRequestLocale(locale);
  const t = await getTranslations({ locale, namespace: "home" });
  const title = "JP Melanson — " + t("metaTitle");

  return {
    metadataBase: new URL(SITE_URL),
    title: { template: "JP Melanson — %s", default: title },
    description: t("description"),
    alternates: alternatesFor(locale),
    icons: "/favicon.ico",
    openGraph: {
      title,
      description: t("description"),
      url: alternatesFor(locale).canonical,
      siteName: "JP Melanson",
      locale: ogLocale(locale),
      alternateLocale: routing.locales
        .filter((l) => l !== locale)
        .map(ogLocale),
      type: "profile",
      firstName: person.givenName,
      lastName: person.familyName,
      images: [{ url: avatar.src, width: avatar.width, height: avatar.height }],
    },
    twitter: { card: "summary" },
    // Set in the host's env once the Search Console HTML-tag method is used;
    // the DNS method needs nothing here.
    verification: process.env.GOOGLE_SITE_VERIFICATION
      ? { google: process.env.GOOGLE_SITE_VERIFICATION }
      : undefined,
  };
}

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

interface Props extends React.PropsWithChildren {
  params: Promise<{
    locale: string;
  }>;
}

/** One entity for the whole site: the person, and the site as their home. */
function jsonLd(locale: string, description: string, jobTitle: string) {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        "@id": person.id,
        name: person.name,
        givenName: person.givenName,
        familyName: person.familyName,
        alternateName: person.alternateName,
        description,
        jobTitle,
        url: alternatesFor(locale).canonical,
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
        "@id": `${SITE_URL}/#website`,
        url: SITE_URL,
        name: "JP Melanson",
        inLanguage: routing.locales,
        about: { "@id": person.id },
        publisher: { "@id": person.id },
      },
    ],
  };
}

export default async function Layout({ children, params }: Props) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) notFound();
  setRequestLocale(locale);
  const t = await getTranslations({ locale, namespace: "home" });

  return (
    <html
      lang={locale}
      className={`${display.variable} ${body.variable} ${mono.variable}`}
    >
      <body className="font-sans">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(
              jsonLd(locale, t("description"), t("label"))
            ).replace(/</g, "\\u003c"),
          }}
        />
        {process.env.NODE_ENV === "production" && (
          <Script
            defer
            data-domain="jp305.dev"
            src="https://plausible.io/js/script.js"
          ></Script>
        )}
        {/* locale, messages and timeZone are inherited from i18n/request.ts */}
        <NextIntlClientProvider>
          <AppLayout locale={locale}>{children}</AppLayout>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
