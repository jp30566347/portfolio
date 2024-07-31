// import { Ubuntu } from "next/font/google";
import "../globals.css";
import { getCurrentLocale, getI18n } from "../../../locales/server";
import { Providers } from "@/components/providers";
import AppLayout from "@/components/AppLayout";
import Script from "next/script";
import Head from "next/head";

// const ubuntu = Ubuntu({ subsets: ["latin"], weight: "300", style: "normal" });

export async function generateMetadata() {
  const t = await getI18n();
  const locale = getCurrentLocale();

  return {
    title: {
      template: "JP Melanson - %s",
      default: t("home.title"),
    },
    description: t("home.description"),
    icons: "favicon.ico",
    openGraph: {
      title: "JP Melanson - " + t("home.title"),
      description: t("home.description"),
      url: "https://www.jpmelanson.info",
      siteName: "JP Melanson",
      locale,
      type: "website",
    },
  };
}

interface Props extends React.PropsWithChildren {
  params: {
    locale: string;
  };
}

export default async function Layout({ children, params: { locale } }: Props) {
  return (
    <html lang={locale}>
      {process.env.NODE_ENV === "production" && (
        <>
          <Script
            defer
            data-domain="jpmelanson.info"
            src="https://plausible.io/js/script.js"
          ></Script>
        </>
      )}
      <Head>
        <link rel="stylesheet" href="https://use.typekit.net/oov2wcw.css" />
      </Head>
      <body>
        <Providers locale={locale}>
          <AppLayout>{children}</AppLayout>
        </Providers>
      </body>
    </html>
  );
}
