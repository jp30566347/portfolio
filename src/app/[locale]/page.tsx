import { hasLocale } from "next-intl";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { ArrowUpRight, Download } from "lucide-react";
import { Link } from "@/i18n/routing";
import { routing } from "@/i18n/routing";
import { ContactCta } from "@/components/ContactCta";
import { BOOKING_URL, cvHref } from "@/lib/links";

const mark = (chunks: React.ReactNode) => <mark>{chunks}</mark>;

const workedWith = [
  "Ticketmaster",
  "Sapien",
  "CRIUCPQ",
  "FastAF",
  "doormath.ca",
  "Asurion",
];

type Service = {
  key: "product" | "ai" | "platform" | "cto";
  /** Footer line: what you get, or the agent tooling. Not translated. */
  tags: string[];
};

const services: Service[] = [
  { key: "product", tags: ["web", "iOS", "Android"] },
  { key: "ai", tags: ["Claude Code", "Codex", "MCP", "evals"] },
  { key: "platform", tags: ["audits", "SOC 2", "ISO 27001", "Law 25"] },
  { key: "cto", tags: ["1 day / week", "one quarter", "one-off audit"] },
];

const timeline = [
  "sapien",
  "doormath",
  "criucpq",
  "fastaf",
  "ticketmaster",
] as const;

const bullets = ["description1", "description2", "description3"] as const;

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

  return (
    <div className="flex flex-col gap-16 sm:gap-24">
      {/* Hero */}
      <section className="pt-6 sm:pt-12">
        <p className="label">{t("label")}</p>
        <h1 className="mt-4 max-w-[22ch]">{t.rich("heroTitle", { mark })}</h1>
        <p className="mt-6 text-lg sm:text-xl text-ink-soft max-w-[52ch] leading-relaxed">
          {t("heroSub")}
        </p>
        <div className="mt-8 flex flex-col sm:flex-row gap-3">
          <Link href="/portfolio" className="btn btn-primary">
            {t("seeWork")}
          </Link>
          <a
            href={BOOKING_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-ghost"
          >
            {t("book30")}
            <ArrowUpRight size={16} aria-hidden="true" />
          </a>
          <a
            href={cvHref(locale)}
            download
            className="inline-flex items-center gap-2 self-center px-2 py-2.5 font-mono text-xs uppercase tracking-widest text-mute hover:text-ink"
          >
            <Download size={14} aria-hidden="true" />
            {t("downloadCv")}
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

      {/* What I do */}
      <section className="flex flex-col gap-8">
        <div className="flex flex-wrap items-baseline gap-x-4 gap-y-1">
          <h2>{t("whatIDo")}</h2>
          <span className="label">{t("whatIDoNote")}</span>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {services.map((s) => (
            <article
              key={s.key}
              className="relative sheet sheet-lift p-6 flex flex-col"
            >
              <h3 className="mb-2">{t(`services.${s.key}.title`)}</h3>
              <p className="text-ink-soft mb-5">
                {t.rich(`services.${s.key}.lead`, { mark })}
              </p>
              <ul className="flex flex-col gap-2 mb-6 grow text-sm text-ink-soft list-none p-0">
                {bullets.map((b) => (
                  <li key={b} className="flex gap-2">
                    <span className="text-pen shrink-0" aria-hidden="true">
                      —
                    </span>
                    <span>{t(`services.${s.key}.${b}`)}</span>
                  </li>
                ))}
              </ul>
              <ul className="flex flex-wrap gap-1.5 pt-4 border-t-2 border-dashed border-grid-strong list-none p-0">
                {s.tags.map((tag) => (
                  <li
                    key={tag}
                    className="font-mono text-[11px] uppercase tracking-wider text-mute border border-grid-strong rounded-xs px-1.5 py-0.5"
                  >
                    {tag}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      {/* Track record */}
      <section className="flex flex-col gap-8">
        <div className="flex flex-wrap items-baseline justify-between gap-4">
          <div className="flex flex-wrap items-baseline gap-x-4 gap-y-1">
            <h2>{t("experience")}</h2>
            <span className="label">{t("experienceNote")}</span>
          </div>
          <a href={cvHref(locale)} download className="btn btn-ghost">
            <Download size={16} aria-hidden="true" />
            {t("downloadCvLong")}
          </a>
        </div>
        <div className="relative sheet p-5 sm:p-8">
          <span className="tape" aria-hidden="true"></span>
          <ol className="list-none p-0 m-0 flex flex-col">
            {timeline.map((k) => (
              <li
                key={k}
                className="grid grid-cols-1 sm:grid-cols-[8rem_1fr] gap-x-6 gap-y-1 py-4 first:pt-0 last:pb-0 border-b-2 last:border-b-0 border-dashed border-grid-strong"
              >
                <span className="font-mono text-xs text-mute tabular-nums pt-1.5">
                  {t(`timeline.${k}.when`)}
                </span>
                <div>
                  <p className="m-0 font-display font-semibold text-lg text-ink leading-snug">
                    {t(`timeline.${k}.company`)}
                    <span className="text-mute font-sans font-normal text-base">
                      {" "}
                      · {t(`timeline.${k}.role`)}
                    </span>
                  </p>
                  <p className="m-0 mt-1 text-ink-soft">
                    {t(`timeline.${k}.line`)}
                  </p>
                </div>
              </li>
            ))}
          </ol>
          <p className="margin-note mt-6 mb-0">{t("timelineAlso")}</p>
        </div>
      </section>

      <ContactCta locale={locale} />
    </div>
  );
}
