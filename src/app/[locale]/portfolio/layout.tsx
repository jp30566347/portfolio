import "../../globals.css";
import { getCurrentLocale, getI18n } from "../../../../locales/server";

export async function generateMetadata() {
  const t = await getI18n();
  const locale = getCurrentLocale();

  return {
    title: t("portfolio.title"),
    description: t("portfolio.description"),
    openGraph: {
      title: "JP Melanson - " + t("portfolio.title"),
      description: t("portfolio.description"),
      url: "https://www.jpmelanson.info/portfolio",
      siteName: "JP Melanson",
      locale,
      type: "website",
    },
  };
}

interface Props extends React.PropsWithChildren {}

export default async function Layout({ children }: Props) {
  return <>{children}</>;
}
