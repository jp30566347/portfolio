import { Ubuntu } from "next/font/google";
import "../globals.css";
import { getCurrentLocale, getI18n } from "../../../locales/server";
import { Providers } from "@/components/providers";
import AppLayout from "@/components/AppLayout";

const ubuntu = Ubuntu({ subsets: ["latin"], weight: "300", style: "normal" });

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
      <body className={ubuntu.className}>
        <Providers locale={locale}>
          <AppLayout>{children}</AppLayout>
        </Providers>
      </body>
      <script defer data-domain="jpmelanson.info" src="https://plausible.io/js/script.js"></script>
    </html>
  );
}
