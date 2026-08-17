import "../../globals.css";
import { hasLocale } from "next-intl";
import { getTranslations } from "next-intl/server";
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
  const t = await getTranslations({ locale, namespace: "portfolio" });

  return {
    title: t("title"),
    description: t("description"),
  };
}

export default async function Layout({ children }: React.PropsWithChildren) {
  return <>{children}</>;
}
