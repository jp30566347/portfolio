import { hasLocale } from "next-intl";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { ArrowUpRight } from "lucide-react";
import { Link } from "@/i18n/routing";
import { routing } from "@/i18n/routing";
import { PageLabel } from "@/components/PageLabel";

const mark = (chunks: React.ReactNode) => <mark>{chunks}</mark>;

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
  const t = await getTranslations({ locale, namespace: "home" });

  const stats = [
    { value: "15+", label: t("stat.years") },
    { value: "100+", label: t("stat.projects") },
    { value: "−60%", label: t("stat.bill"), note: t("stat.billNote") },
    { value: "2", label: t("stat.apps") },
  ];

  return (
    <div className="flex flex-col gap-16 sm:gap-24">
      {/* Hero */}
      <section className="pt-6 sm:pt-12">
        <PageLabel page={1} title={t("label")} />
        <h1 className="mt-4 max-w-[22ch]">{t.rich("heroTitle", { mark })}</h1>
        <p className="mt-6 text-lg sm:text-xl text-ink-soft max-w-[52ch] leading-relaxed">
          {t("heroSub")}
        </p>
        <div className="mt-8 flex flex-col sm:flex-row gap-3">
          <Link href="/portfolio" className="btn btn-primary">
            {t("seeWork")}
          </Link>
          <Link
            href="https://calendly.com/jp305/30min"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-ghost"
          >
            {t("book30")}
            <ArrowUpRight size={16} aria-hidden="true" />
          </Link>
        </div>

        {/* Stats */}
        <ul className="mt-16 sm:mt-20 grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 list-none p-0">
          {stats.map((s) => (
            <li key={s.label} className="relative sheet px-4 py-4 sm:px-5">
              {s.note && (
                <span
                  className="margin-note absolute -top-7 left-1 rotate-[-2deg] whitespace-nowrap hidden lg:block"
                  aria-hidden="true"
                >
                  {s.note} ↓
                </span>
              )}
              <span className="block font-display text-3xl sm:text-4xl font-semibold tracking-tight tabular-nums">
                {s.value}
              </span>
              <span className="label mt-1 block normal-case tracking-wide">
                {s.label}
              </span>
              {s.note && (
                <span className="margin-note mt-2 block lg:hidden">
                  {s.note}
                </span>
              )}
            </li>
          ))}
        </ul>
      </section>

      {/* Intro + Currently */}
      <section className="grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_280px] gap-10 lg:gap-16 items-start">
        <div className="flex flex-col gap-6 text-lg leading-relaxed text-ink-soft max-w-[62ch]">
          <p>{t.rich("intro1", { mark })}</p>
          <p>{t.rich("intro2", { mark })}</p>
          <p>{t.rich("intro3", { mark })}</p>
        </div>
        <aside className="relative sheet p-5 lg:mt-2">
          <span className="tape" aria-hidden="true"></span>
          <h2 className="label !text-mute mb-4">{t("currently.title")}</h2>
          <dl className="grid grid-cols-[auto_1fr] gap-x-4 gap-y-3 text-sm">
            <dt className="font-mono text-mute">{t("currently.buildingK")}</dt>
            <dd className="m-0 font-semibold text-ink">
              {t("currently.buildingV")}
            </dd>
            <dt className="font-mono text-mute">{t("currently.learningK")}</dt>
            <dd className="m-0 font-semibold text-ink">
              {t("currently.learningV")}
            </dd>
            <dt className="font-mono text-mute">{t("currently.openK")}</dt>
            <dd className="m-0 font-semibold text-ink">
              {t("currently.openV")}
            </dd>
          </dl>
        </aside>
      </section>

      {/* CTA */}
      <section className="sheet sheet-lift p-6 sm:p-8 flex flex-col sm:flex-row sm:items-center justify-between gap-6">
        <div>
          <h2 className="text-2xl sm:text-3xl">{t("ctaTitle")}</h2>
          <p className="mt-2 text-ink-soft max-w-[48ch]">{t("ctaSub")}</p>
        </div>
        <Link
          href="https://calendly.com/jp305/30min"
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-primary shrink-0"
        >
          {t("book30")}
          <ArrowUpRight size={16} aria-hidden="true" />
        </Link>
      </section>
    </div>
  );
}
