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
  // The home page carries the full name so a search for either form of it
  // lands here; subpages keep the short brand through the template.
  const title = `${person.displayName} — ${t("metaTitle")}`;

  return {
    metadataBase: new URL(SITE_URL),
    title: { template: "JP Melanson — %s", default: title },
    description: t("description"),
    alternates: alternatesFor(locale),
    // Icons live in /public under stable URLs. The app/favicon.ico convention
    // rendered a second <link rel="icon"> whose hash query changed between
    // builds; Google crawled every variant as a URL of its own and asks for a
    // favicon URL that does not change. The 192px PNG is the multiple of 48px
    // Google wants for the icon it shows beside a result.
    icons: {
      icon: [
        { url: "/favicon.ico", sizes: "16x16 32x32" },
        { url: "/favicon-16x16.png", type: "image/png", sizes: "16x16" },
        { url: "/favicon-32x32.png", type: "image/png", sizes: "32x32" },
        {
          url: "/android-chrome-192x192.png",
          type: "image/png",
          sizes: "192x192",
        },
      ],
      apple: "/apple-touch-icon.png",
    },
    manifest: "/site.webmanifest",
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

export default async function Layout({ children, params }: Props) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) notFound();
  setRequestLocale(locale);

  return (
    <html
      lang={locale}
      className={`${display.variable} ${body.variable} ${mono.variable}`}
    >
      <body className="font-sans">
        {/* Structured data (Person, WebSite, the page) is rendered per page. */}
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
