import "../globals.css";
import { Providers } from "@/components/providers";
import AppLayout from "@/components/AppLayout";
import Script from "next/script";
import { getTranslations } from 'next-intl/server';
import { routing } from '@/i18n/routing';
import { getMessages } from '@/i18n/messages';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  let { locale } = await params;
  // Ensure that a valid locale is used, default to 'en' if not provided or invalid
  if (!locale || !routing.locales.includes(locale as any)) {
    locale = routing.defaultLocale;
  }
  const t = await getTranslations({ locale, namespace: 'home' });

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

interface Props extends React.PropsWithChildren {
  params: Promise<{
    locale: string;
  }>;
}

export default async function Layout({ children, params }: Props) {
  let { locale } = await params;
  // Ensure that a valid locale is used, default to 'en' if not provided or invalid
  if (!locale || !routing.locales.includes(locale as any)) {
    locale = routing.defaultLocale;
  }

  const messages = getMessages(locale);

  return (
    <html lang={locale}>
      <head>
        <link rel="stylesheet" href="https://use.typekit.net/oov2wcw.css" />
      </head>
      {process.env.NODE_ENV === "production" && (
        <Script
          defer
          data-domain="jp305.dev"
          src="https://plausible.io/js/script.js"
        ></Script>
      )}
      <body>
        <Providers locale={locale} messages={messages}>
          <AppLayout locale={locale}>{children}</AppLayout>
        </Providers>
      </body>
    </html>
  );
}
