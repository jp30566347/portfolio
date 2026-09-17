import "../../globals.css";
import type { Metadata } from "next";
import { hasLocale } from "next-intl";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { routing } from "@/i18n/routing";
import { alternatesFor } from "@/lib/site";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale: requested } = await params;
  const locale = hasLocale(routing.locales, requested)
    ? requested
    : routing.defaultLocale;
  setRequestLocale(locale);
  const t = await getTranslations({ locale, namespace: "portfolio" });
  const alternates = alternatesFor(locale, "/portfolio");

  return {
    title: t("title"),
    description: t("description"),
    alternates,
    openGraph: {
      title: "JP Melanson — " + t("title"),
      description: t("description"),
      url: alternates.canonical,
    },
  };
}

export default async function Layout({ children }: React.PropsWithChildren) {
  return <>{children}</>;
}
