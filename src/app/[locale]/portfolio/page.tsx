import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import playstore from "@/assets/playstore.png";
import appstore from "@/assets/appstore.png";
import { hasLocale } from "next-intl";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { routing } from "@/i18n/routing";
import { PageLabel } from "@/components/PageLabel";

const mark = (chunks: React.ReactNode) => <mark>{chunks}</mark>;

type Project = {
  key: "ventilo" | "oxygapp" | "ventiloApp";
  bullets: number;
  website?: string;
  playStore?: string;
  appStore?: string;
};

const projects: Project[] = [
  { key: "ventilo", bullets: 3, website: "https://www.ventilo.ca" },
  {
    key: "oxygapp",
    bullets: 3,
    playStore:
      "https://play.google.com/store/apps/details?id=com.iucpq.oxygapp&hl=en_US",
    appStore: "https://apps.apple.com/us/app/oxygapp/id1668892646",
  },
  {
    key: "ventiloApp",
    bullets: 3,
    playStore:
      "https://play.google.com/store/apps/details?id=com.iucpq.ventillo&hl=en_US",
    appStore: "https://apps.apple.com/us/app/ventilo/id1478758927",
  },
];

type Service = {
  key: "agentic" | "product" | "aiProduct" | "platform" | "cto";
  bullets: number;
  /** Footer line: the stack, or the engagement format. Not translated. */
  tags: string[];
  sticker?: boolean;
};

const services: Service[] = [
  {
    key: "agentic",
    bullets: 4,
    tags: ["Claude Code", "Codex", "MCP", "GitHub Actions"],
  },
  {
    key: "product",
    bullets: 4,
    sticker: true,
    tags: ["Next.js", "React Native", "TypeScript", "Vercel"],
  },
  {
    key: "aiProduct",
    bullets: 4,
    tags: ["Claude API", "OpenAI", "pgvector", "evals"],
  },
  {
    key: "platform",
    bullets: 4,
    tags: ["Postgres", "Supabase", "AWS", "IaC"],
  },
  {
    key: "cto",
    bullets: 4,
    tags: ["1 day / week", "one quarter", "one-off audit"],
  },
];

export default async function Work({
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

  const bulletsFor = (prefix: string, count: number) =>
    Array.from({ length: count }, (_, i) => `${prefix}.description${i + 1}`);

  return (
    <div className="flex flex-col gap-16 sm:gap-24">
      <header className="pt-6 sm:pt-12">
        <PageLabel page={2} title={t("title")} />
        <h1 className="mt-4 max-w-[20ch]">{t("pageTitle")}</h1>
        <p className="mt-6 text-lg sm:text-xl text-ink-soft max-w-[52ch]">
          {t("description")}
        </p>
      </header>

      {/* Services */}
      <section className="flex flex-col gap-8">
        <div className="flex items-baseline gap-4">
          <h2>{t("services")}</h2>
          <span className="label">{t("servicesNote")}</span>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s) => (
            <article
              key={s.key}
              className="relative sheet sheet-lift p-6 flex flex-col"
            >
              {s.sticker && (
                <span className="sticker" aria-hidden="true">
                  {t("sticker")}
                </span>
              )}
              <h3 className="mb-2">{t(`${s.key}.title`)}</h3>
              <p className="text-ink-soft mb-5">{t(`${s.key}.lead`)}</p>
              <ul className="flex flex-col gap-2 mb-6 grow text-sm text-ink-soft list-none p-0">
                {bulletsFor(s.key, s.bullets).map((k) => (
                  <li key={k} className="flex gap-2">
                    <span className="text-pen shrink-0" aria-hidden="true">
                      —
                    </span>
                    <span>{t.rich(k, { mark })}</span>
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
      {/* Featured */}
      <section className="flex flex-col gap-8">
        <div className="flex items-baseline gap-4">
          <h2>{t("featured")}</h2>
          <span className="label">{t("featuredNote")}</span>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p) => (
            <article
              key={p.key}
              className="relative sheet sheet-lift p-6 flex flex-col"
            >
              <p className="label mb-3">{t(`${p.key}.client`)}</p>
              <h3 className="mb-2">{t(`${p.key}.title`)}</h3>
              <p className="text-ink-soft mb-5">{t(`${p.key}.lead`)}</p>
              <ul className="flex flex-col gap-2 mb-6 grow text-sm text-ink-soft list-none p-0">
                {bulletsFor(p.key, p.bullets).map((k) => (
                  <li key={k} className="flex gap-2">
                    <span className="text-pen shrink-0" aria-hidden="true">
                      —
                    </span>
                    <span>{t.rich(k, { mark })}</span>
                  </li>
                ))}
              </ul>
              {p.website && (
                <Link
                  href={p.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-ghost w-full"
                >
                  <span>{t("visitWebsite")}</span>
                  <ArrowUpRight size={16} aria-hidden="true" />
                </Link>
              )}
              {(p.playStore || p.appStore) && (
                <div className="flex gap-3 items-center justify-center">
                  {p.playStore && (
                    <Link
                      href={p.playStore}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="transition-transform hover:-translate-y-0.5"
                    >
                      <Image
                        src={playstore}
                        alt={t("playStoreAlt")}
                        className="h-11 w-auto"
                      />
                    </Link>
                  )}
                  {p.appStore && (
                    <Link
                      href={p.appStore}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="transition-transform hover:-translate-y-0.5"
                    >
                      <Image
                        src={appstore}
                        alt={t("appStoreAlt")}
                        className="h-11 w-auto"
                      />
                    </Link>
                  )}
                </div>
              )}
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
