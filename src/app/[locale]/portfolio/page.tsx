import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import playstore from "@/assets/playstore.png";
import appstore from "@/assets/appstore.png";
import { hasLocale } from "next-intl";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { routing } from "@/i18n/routing";
import { PageLabel } from "@/components/PageLabel";
import { ContactCta } from "@/components/ContactCta";

const mark = (chunks: React.ReactNode) => <mark>{chunks}</mark>;

type Project = {
  key: "ventilo" | "oxygapp" | "ventiloApp";
  website?: string;
  playStore?: string;
  appStore?: string;
};

const projects: Project[] = [
  { key: "ventilo", website: "https://www.ventilo.ca" },
  {
    key: "oxygapp",
    playStore:
      "https://play.google.com/store/apps/details?id=com.iucpq.oxygapp&hl=en_US",
    appStore: "https://apps.apple.com/us/app/oxygapp/id1668892646",
  },
  {
    key: "ventiloApp",
    playStore:
      "https://play.google.com/store/apps/details?id=com.iucpq.ventillo&hl=en_US",
    appStore: "https://apps.apple.com/us/app/ventilo/id1478758927",
  },
];

/** Personal open source. Not client work, so it gets its own section. */
type OpenSource = {
  key: "macroTui" | "nhlTui";
  site: string;
  /** The stack, not translated. */
  tags: string[];
};

const openSource: OpenSource[] = [
  {
    key: "macroTui",
    site: "https://tui.jp305.dev/macro-tui/",
    tags: ["Rust", "ratatui", "tokio"],
  },
  {
    key: "nhlTui",
    site: "https://tui.jp305.dev/nhl-tui/",
    tags: ["Rust", "ratatui", "tokio"],
  },
];

const REPO = "https://github.com/jp30566347/tui";

const bullets = ["description1", "description2", "description3"] as const;

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

  return (
    <div className="flex flex-col gap-16 sm:gap-24">
      <header className="pt-6 sm:pt-12">
        <PageLabel page={2} title={t("title")} />
        <h1 className="mt-4 max-w-[20ch]">{t("pageTitle")}</h1>
        <p className="mt-6 text-lg sm:text-xl text-ink-soft max-w-[52ch]">
          {t("description")}
        </p>
      </header>

      {/* Client work */}
      <section className="flex flex-col gap-8">
        <div className="flex flex-wrap items-baseline gap-x-4 gap-y-1">
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
              <p className="text-ink-soft mb-5">
                {t.rich(`${p.key}.lead`, { mark })}
              </p>
              <ul className="flex flex-col gap-2 mb-6 grow text-sm text-ink-soft list-none p-0">
                {bullets.map((b) => (
                  <li key={b} className="flex gap-2">
                    <span className="text-pen shrink-0" aria-hidden="true">
                      —
                    </span>
                    <span>{t(`${p.key}.${b}`)}</span>
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

      {/* Open source */}
      <section className="flex flex-col gap-8">
        <div className="flex flex-wrap items-baseline gap-x-4 gap-y-1">
          <h2>{t("openSource")}</h2>
          <span className="label">{t("openSourceNote")}</span>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {openSource.map((o) => (
            <article
              key={o.key}
              className="relative sheet sheet-lift p-6 flex flex-col"
            >
              <p className="label mb-3">{t(`${o.key}.client`)}</p>
              <h3 className="mb-2">{t(`${o.key}.title`)}</h3>
              <p className="text-ink-soft mb-5">{t(`${o.key}.lead`)}</p>
              <ul className="flex flex-col gap-2 mb-6 grow text-sm text-ink-soft list-none p-0">
                {bullets.map((b) => (
                  <li key={b} className="flex gap-2">
                    <span className="text-pen shrink-0" aria-hidden="true">
                      —
                    </span>
                    <span>{t.rich(`${o.key}.${b}`, { mark })}</span>
                  </li>
                ))}
              </ul>
              <ul className="flex flex-wrap gap-1.5 pb-5 list-none p-0">
                {o.tags.map((tag) => (
                  <li
                    key={tag}
                    className="font-mono text-[11px] uppercase tracking-wider text-mute border border-grid-strong rounded-xs px-1.5 py-0.5"
                  >
                    {tag}
                  </li>
                ))}
              </ul>
              <Link
                href={o.site}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-ghost w-full"
              >
                <span>{t(`${o.key}.cta`)}</span>
                <ArrowUpRight size={16} aria-hidden="true" />
              </Link>
            </article>
          ))}
        </div>
        <p className="text-sm text-ink-soft">
          {t.rich("openSourceFooter", {
            repo: (chunks) => (
              <Link
                href={REPO}
                target="_blank"
                rel="noopener noreferrer"
                className="underline underline-offset-4"
              >
                {chunks}
              </Link>
            ),
          })}
        </p>
      </section>

      <ContactCta locale={locale} />
    </div>
  );
}
