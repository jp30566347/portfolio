import "../globals.css";
import AppLayout from "@/components/AppLayout";
import Script from "next/script";
import { hasLocale, NextIntlClientProvider } from "next-intl";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { routing } from "@/i18n/routing";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: requested } = await params;
  const locale = hasLocale(routing.locales, requested)
    ? requested
    : routing.defaultLocale;
  setRequestLocale(locale);
  const t = await getTranslations({ locale, namespace: "home" });

  return {
    title: {
      template: "JP Melanson - %s",
      default: "JP Melanson - " + t("title"),
    },
    description: t("description"),
    icons: "/favicon.ico",
    openGraph: {
      title: "JP Melanson - " + t("title"),
      description: t("description"),
      url: "https://www.jpmelanson.info",
      siteName: "JP Melanson",
      locale,
      type: "website",
    },
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
  const { locale: requested } = await params;
  const locale = hasLocale(routing.locales, requested)
    ? requested
    : routing.defaultLocale;
  setRequestLocale(locale);

  return (
    <html lang={locale}>
      <body>
        {/* React 19 hoists stylesheet links into <head>, so no manual <head>
            element is needed — and a bare expression sibling of <head>/<body>
            inside <html> is fragile under React 19's HTML normalization. */}
        <link rel="preconnect" href="https://use.typekit.net" />
        <link rel="stylesheet" href="https://use.typekit.net/oov2wcw.css" />
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
