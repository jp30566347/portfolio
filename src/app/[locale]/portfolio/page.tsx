import { ExternalLink } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import playstore from "@/assets/playstore.png";
import appstore from "@/assets/appstore.png";
import reactNative from "@/assets/react-native.jpg";
import nextjsLogo from "@/assets/nextjs.svg";
import reactLogo from "@/assets/react.svg";
import postgresLogo from "@/assets/pg.png";
import supabaseLogo from "@/assets/supabase.svg";
import awsArch from "@/assets/aws-arch.png";
import bitcoinLogo from "@/assets/bitcoin-btc-logo.svg";
import { hasLocale } from "next-intl";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { routing } from "@/i18n/routing";

export default async function Home({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: requested } = await params;
  const locale = hasLocale(routing.locales, requested)
    ? requested
    : routing.defaultLocale;
  setRequestLocale(locale);
  const t = await getTranslations({ locale, namespace: "portfolio" });

  return (
    <div className="flex flex-col gap-12 mt-8 mx-4 sm:mx-0">
      <div className="max-w-4xl mx-auto w-full">
        <h1 className="mb-4">{t("pageTitle")}</h1>
        <p className="text-lg text-primary-600 max-w-2xl">{t("description")}</p>
      </div>

      <div className="flex flex-col gap-16 max-w-6xl mx-auto w-full">
        {/* Featured Projects */}
        <section className="flex flex-col gap-6">
          <div>
            <h2 className="mb-2">{t("featured")}</h2>
            <div className="h-1 w-20 bg-accent rounded-full"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Ventilo Card */}
            <div className="rounded-2xl bg-white border border-primary-200 p-6 shadow-soft hover:shadow-soft-lg transition-all duration-300 hover:-translate-y-1 flex flex-col">
              <div className="mb-4">
                <h4 className="mb-1">{t("ventilo.title")}</h4>
                <h5 className="text-accent">{t("ventilo.client")}</h5>
              </div>
              <ul className="list-disc list-inside space-y-2 mb-6 grow text-primary-700">
                <li>
                  {t.rich("ventilo.description1", {
                    mark: (chunks) => (
                      <mark className="font-medium">{chunks}</mark>
                    ),
                  })}
                </li>
                <li>
                  {t.rich("ventilo.description2", {
                    mark: (chunks) => (
                      <mark className="font-medium">{chunks}</mark>
                    ),
                  })}
                </li>
                <li>
                  {t.rich("ventilo.description3", {
                    mark: (chunks) => (
                      <mark className="font-medium">{chunks}</mark>
                    ),
                  })}
                </li>
              </ul>
              <div className="flex justify-center">
                <Link
                  href="https://www.ventilo.ca"
                  target="_blank"
                  className="w-full bg-accent hover:bg-accent-dark text-white px-6 py-3 flex gap-2 items-center justify-center rounded-lg transition-all duration-200 font-medium shadow-md hover:shadow-lg"
                >
                  <span>{t("ventilo.visitWebsite")}</span>
                  <ExternalLink size={16} />
                </Link>
              </div>
            </div>

            {/* OxygApp Card */}
            <div className="rounded-2xl bg-white border border-primary-200 p-6 shadow-soft hover:shadow-soft-lg transition-all duration-300 hover:-translate-y-1 flex flex-col">
              <div className="mb-4">
                <h4 className="mb-1">{t("oxygapp.title")}</h4>
                <h5 className="text-accent">{t("oxygapp.client")}</h5>
              </div>
              <ul className="list-disc list-inside space-y-2 mb-6 grow text-primary-700">
                <li>
                  {t.rich("oxygapp.description1", {
                    mark: (chunks) => (
                      <mark className="font-medium">{chunks}</mark>
                    ),
                  })}
                </li>
                <li>
                  {t.rich("oxygapp.description2", {
                    mark: (chunks) => (
                      <mark className="font-medium">{chunks}</mark>
                    ),
                  })}
                </li>
                <li>
                  {t.rich("oxygapp.description3", {
                    mark: (chunks) => (
                      <mark className="font-medium">{chunks}</mark>
                    ),
                  })}
                </li>
              </ul>
              <div className="flex gap-3 items-center justify-center">
                <Link
                  href="https://play.google.com/store/apps/details?id=com.iucpq.oxygapp&hl=en_US"
                  target="_blank"
                  className="transition-transform hover:scale-105"
                >
                  <Image
                    src={playstore}
                    alt={t("playStoreAlt")}
                    className="h-12 w-auto"
                  />
                </Link>
                <Link
                  href="https://apps.apple.com/us/app/oxygapp/id1668892646"
                  target="_blank"
                  className="transition-transform hover:scale-105"
                >
                  <Image
                    src={appstore}
                    alt={t("appStoreAlt")}
                    className="h-12 w-auto"
                  />
                </Link>
              </div>
            </div>

            {/* VentilO App Card */}
            <div className="rounded-2xl bg-white border border-primary-200 p-6 shadow-soft hover:shadow-soft-lg transition-all duration-300 hover:-translate-y-1 flex flex-col">
              <div className="mb-4">
                <h4 className="mb-1">{t("ventiloApp.title")}</h4>
                <h5 className="text-accent">{t("ventiloApp.client")}</h5>
              </div>
              <ul className="list-disc list-inside space-y-2 mb-6 grow text-primary-700">
                <li>
                  {t.rich("ventiloApp.description1", {
                    mark: (chunks) => (
                      <mark className="font-medium">{chunks}</mark>
                    ),
                  })}
                </li>
                <li>
                  {t.rich("ventiloApp.description2", {
                    mark: (chunks) => (
                      <mark className="font-medium">{chunks}</mark>
                    ),
                  })}
                </li>
                <li>
                  {t.rich("ventiloApp.description3", {
                    mark: (chunks) => (
                      <mark className="font-medium">{chunks}</mark>
                    ),
                  })}
                </li>
              </ul>
              <div className="flex gap-3 items-center justify-center">
                <Link
                  href="https://play.google.com/store/apps/details?id=com.iucpq.ventillo&hl=en_US"
                  target="_blank"
                  className="transition-transform hover:scale-105"
                >
                  <Image
                    src={playstore}
                    alt={t("playStoreAlt")}
                    className="h-12 w-auto"
                  />
                </Link>
                <Link
                  href="https://apps.apple.com/us/app/ventilo/id1478758927"
                  target="_blank"
                  className="transition-transform hover:scale-105"
                >
                  <Image
                    src={appstore}
                    alt={t("appStoreAlt")}
                    className="h-12 w-auto"
                  />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Services */}
        <section className="flex flex-col gap-6">
          <div>
            <h2 className="mb-2">{t("services")}</h2>
            <div className="h-1 w-20 bg-accent rounded-full"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Mobile Development */}
            <div className="rounded-2xl bg-white border border-primary-200 p-6 shadow-soft hover:shadow-soft-lg transition-all duration-300 hover:-translate-y-1">
              <h3 className="mb-4">{t("mobileDev.title")}</h3>
              <ul className="list-disc list-inside space-y-2 mb-6 text-primary-700">
                <li>
                  {t.rich("mobileDev.description1", {
                    mark: (chunks) => (
                      <mark className="font-medium">{chunks}</mark>
                    ),
                  })}
                </li>
                <li>
                  {t.rich("mobileDev.description2", {
                    mark: (chunks) => (
                      <mark className="font-medium">{chunks}</mark>
                    ),
                  })}
                </li>
                <li>
                  {t.rich("mobileDev.description3", {
                    mark: (chunks) => (
                      <mark className="font-medium">{chunks}</mark>
                    ),
                  })}
                </li>
              </ul>
              <div className="flex justify-center">
                <Image
                  src={reactNative}
                  className="object-contain h-32 rounded-lg w-auto"
                  alt="React Native"
                />
              </div>
            </div>

            {/* Web Development */}
            <div className="rounded-2xl bg-white border border-primary-200 p-6 shadow-soft hover:shadow-soft-lg transition-all duration-300 hover:-translate-y-1">
              <h3 className="mb-4">{t("webDev.title")}</h3>
              <ul className="list-disc list-inside space-y-2 mb-6 text-primary-700">
                <li>
                  {t.rich("webDev.description1", {
                    mark: (chunks) => (
                      <mark className="font-medium">{chunks}</mark>
                    ),
                  })}
                </li>
                <li>
                  {t.rich("webDev.description2", {
                    mark: (chunks) => (
                      <mark className="font-medium">{chunks}</mark>
                    ),
                  })}
                </li>
                <li>
                  {t.rich("webDev.description3", {
                    mark: (chunks) => (
                      <mark className="font-medium">{chunks}</mark>
                    ),
                  })}
                </li>
              </ul>
              <div className="flex items-center justify-center gap-3 pt-4">
                <Image
                  src={nextjsLogo}
                  className="object-contain h-20 w-auto"
                  alt="Next.js"
                />
                <span className="text-primary-400">+</span>
                <Image
                  src={reactLogo}
                  className="object-contain h-20 w-auto"
                  alt="React"
                />
              </div>
            </div>

            {/* API Development */}
            <div className="rounded-2xl bg-white border border-primary-200 p-6 shadow-soft hover:shadow-soft-lg transition-all duration-300 hover:-translate-y-1">
              <h3 className="mb-4">{t("apiDev.title")}</h3>
              <ul className="list-disc list-inside space-y-2 mb-6 text-primary-700">
                <li>
                  {t.rich("apiDev.description1", {
                    mark: (chunks) => (
                      <mark className="font-medium">{chunks}</mark>
                    ),
                  })}
                </li>
                <li>
                  {t.rich("apiDev.description2", {
                    mark: (chunks) => (
                      <mark className="font-medium">{chunks}</mark>
                    ),
                  })}
                </li>
                <li>
                  {t.rich("apiDev.description3", {
                    mark: (chunks) => (
                      <mark className="font-medium">{chunks}</mark>
                    ),
                  })}
                </li>
                <li>
                  {t.rich("apiDev.description4", {
                    mark: (chunks) => (
                      <mark className="font-medium">{chunks}</mark>
                    ),
                  })}
                </li>
              </ul>
              <div className="flex items-center justify-center gap-3 pt-4">
                <Image
                  src={postgresLogo}
                  className="object-contain h-20 w-auto"
                  alt="PostgreSQL"
                />
                <span className="text-primary-400">+</span>
                <Image
                  src={supabaseLogo}
                  className="object-contain h-20 w-auto"
                  alt="Supabase"
                />
              </div>
            </div>

            {/* Infrastructure */}
            <div className="rounded-2xl bg-white border border-primary-200 p-6 shadow-soft hover:shadow-soft-lg transition-all duration-300 hover:-translate-y-1">
              <h3 className="mb-4">{t("infrastructure.title")}</h3>
              <ul className="list-disc list-inside space-y-2 mb-6 text-primary-700">
                <li>
                  {t.rich("infrastructure.description1", {
                    mark: (chunks) => (
                      <mark className="font-medium">{chunks}</mark>
                    ),
                  })}
                </li>
                <li>
                  {t.rich("infrastructure.description2", {
                    mark: (chunks) => (
                      <mark className="font-medium">{chunks}</mark>
                    ),
                  })}
                </li>
                <li>
                  {t.rich("infrastructure.description3", {
                    mark: (chunks) => (
                      <mark className="font-medium">{chunks}</mark>
                    ),
                  })}
                </li>
              </ul>
              <div className="flex justify-center pt-4">
                <Image
                  src={awsArch}
                  className="object-contain h-32 rounded-lg w-auto"
                  alt="AWS Architecture"
                />
              </div>
            </div>

            {/* Bitcoin Consulting */}
            <div className="rounded-2xl bg-white border border-primary-200 p-6 shadow-soft hover:shadow-soft-lg transition-all duration-300 hover:-translate-y-1">
              <h3 className="mb-4">{t("bitcoin.title")}</h3>
              <ul className="list-disc list-inside space-y-2 mb-6 text-primary-700">
                <li>
                  {t.rich("bitcoin.description1", {
                    mark: (chunks) => (
                      <mark className="font-medium">{chunks}</mark>
                    ),
                  })}
                </li>
                <li>
                  {t.rich("bitcoin.description2", {
                    mark: (chunks) => (
                      <mark className="font-medium">{chunks}</mark>
                    ),
                  })}
                </li>
                <li>
                  {t.rich("bitcoin.description3", {
                    mark: (chunks) => (
                      <mark className="font-medium">{chunks}</mark>
                    ),
                  })}
                </li>
              </ul>
              <div className="flex justify-center pt-4">
                <Image
                  src={bitcoinLogo}
                  className="object-contain h-24 w-auto"
                  alt="Bitcoin"
                />
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
