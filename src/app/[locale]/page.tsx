import { hasLocale } from "next-intl";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { ArrowUpRight, Mail } from "lucide-react";
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
  const tc = await getTranslations({ locale });

  const workedWith = [
    "Ticketmaster",
    "Sapien",
    "CRIUCPQ",
    "FastAF",
    "doormath.ca",
    "Asurion",
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
          <a
            href="mailto:jp@jp305.dev"
            className="inline-flex items-center gap-2 self-center px-2 py-2.5 font-mono text-xs uppercase tracking-widest text-mute hover:text-ink"
          >
            <Mail size={14} aria-hidden="true" />
            {tc("emailMe")}
          </a>
        </div>

        {/* Worked with */}
        <div className="mt-16 sm:mt-20 border-y-2 border-ink py-4 flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-8">
          <span className="label shrink-0">{t("workedWith")}</span>
          <ul className="flex flex-wrap gap-x-6 gap-y-2 list-none p-0 font-display font-semibold text-lg sm:text-xl text-ink">
            {workedWith.map((name) => (
              <li key={name}>{name}</li>
            ))}
          </ul>
        </div>
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
        <div className="flex flex-col sm:flex-row gap-3 shrink-0">
          <Link
            href="https://calendly.com/jp305/30min"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary"
          >
            {t("book30")}
            <ArrowUpRight size={16} aria-hidden="true" />
          </Link>
          <a href="mailto:jp@jp305.dev" className="btn btn-ghost">
            <Mail size={16} aria-hidden="true" />
            {tc("emailMe")}
          </a>
        </div>
      </section>
    </div>
  );
}
