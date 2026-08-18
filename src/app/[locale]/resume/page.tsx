import { hasLocale } from "next-intl";
import { getTranslations, setRequestLocale } from "next-intl/server";
import {
  Mail,
  Phone,
  MapPin,
  ExternalLink,
  Globe,
  Printer,
} from "lucide-react";
import type { ComponentType, SVGProps } from "react";
import { Github, Linkedin } from "@/components/BrandIcons";
import { routing } from "@/i18n/routing";
import { PageLabel } from "@/components/PageLabel";

const jobs = [
  "sapien",
  "doormath",
  "fastaf",
  "ticketmaster1",
  "asurion",
  "ticketmaster2",
  "balihoo",
  "ticketmaster3",
  "laval",
] as const;

const skills = [
  "skillTypescript",
  "skillJavascript",
  "skillReact",
  "skillNextjs",
  "skillReactNative",
  "skillPostgres",
  "skillAWS",
  "skillGitHub",
  "skillSystemDesign",
  "skillCodeArchitecture",
] as const;

const sectionTitle =
  "label !text-ink font-semibold mb-4 print:mb-2 pb-1.5 print:pb-1 border-b-2 border-ink";
const chip =
  "px-2.5 py-1 print:px-1.5 print:py-0.5 text-xs print:text-[10px] font-mono bg-sheet border border-ink text-ink rounded-xs";
const contactHref =
  "text-sm print:text-xs text-pen hover:text-pen-deep flex items-center gap-1 print:gap-0.5 break-all";

export default async function Resume({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: requested } = await params;
  const locale = hasLocale(routing.locales, requested)
    ? requested
    : routing.defaultLocale;
  setRequestLocale(locale);
  const t = await getTranslations({ locale, namespace: "resume" });

  const contacts: {
    Icon: ComponentType<SVGProps<SVGSVGElement>>;
    label: string;
    value: string;
    href?: string;
    external?: boolean;
  }[] = [
    { Icon: MapPin, label: t("address"), value: t("addressValue") },
    {
      Icon: Phone,
      label: t("phone"),
      value: t("phoneValue"),
      href: "tel:+14189035365",
    },
    {
      Icon: Mail,
      label: t("email"),
      value: t("emailValue"),
      href: "mailto:jp@jp305.dev",
    },
    {
      Icon: Linkedin,
      label: t("linkedin"),
      value: t("linkedinValue"),
      href: "https://www.linkedin.com/in/jp305",
      external: true,
    },
    {
      Icon: Github,
      label: t("github"),
      value: t("githubValue"),
      href: "https://www.github.com/jp30566347",
      external: true,
    },
    {
      Icon: Globe,
      label: t("website"),
      value: t("websiteValue"),
      href: "https://jp305.dev/portfolio",
      external: true,
    },
  ];

  return (
    <div className="flex flex-col gap-6">
      <div className="print:hidden flex flex-wrap items-end justify-between gap-4 pt-6 sm:pt-12">
        <div>
          <PageLabel page={3} title={t("title")} />
          <p className="mt-3 text-ink-soft max-w-[52ch]">{t("intro")}</p>
        </div>
        <span className="label flex items-center gap-2">
          <Printer size={14} aria-hidden="true" />
          {t("printHint")}
        </span>
      </div>

      <div className="resume-page flex flex-col print:mt-0 print:border-0 print:rounded-none sheet overflow-hidden">
        {/* Header */}
        <div className="w-full px-6 sm:px-8 py-8 print:px-4 print:py-4 bg-ink text-paper flex flex-col gap-1 print:gap-0.5">
          <h1 className="text-paper print:text-3xl">{t("name")}</h1>
          <p className="font-mono text-hl text-sm sm:text-base print:text-sm uppercase tracking-widest">
            {t("jobTitle")}
          </p>
        </div>

        <div className="flex flex-col sm:flex-row-reverse print:flex-row">
          {/* Sidebar */}
          <div className="px-6 py-6 sm:py-8 print:px-3 print:py-3 flex flex-col sm:w-72 print:w-52 gap-8 print:gap-4 bg-paper border-t-2 sm:border-t-0 sm:border-l-2 border-ink">
            <section>
              <h3 className={sectionTitle}>{t("contact")}</h3>
              <ul className="flex flex-col gap-4 print:gap-2 list-none p-0">
                {contacts.map((c) => (
                  <li
                    key={c.label}
                    className="flex items-start gap-3 print:gap-2"
                  >
                    <c.Icon
                      className="w-4 h-4 print:w-3 print:h-3 text-pen mt-0.5 print:mt-0 shrink-0"
                      aria-hidden="true"
                    />
                    <div className="min-w-0">
                      <span className="block font-mono text-[11px] print:text-[10px] uppercase tracking-wider text-mute mb-0.5">
                        {c.label}
                      </span>
                      {c.href ? (
                        <a
                          href={c.href}
                          target={c.external ? "_blank" : undefined}
                          rel={c.external ? "noopener noreferrer" : undefined}
                          className={contactHref}
                        >
                          {c.value}
                          {c.external && (
                            <ExternalLink
                              className="w-3 h-3 print:w-2 print:h-2 shrink-0"
                              aria-hidden="true"
                            />
                          )}
                        </a>
                      ) : (
                        <address className="text-sm print:text-xs text-ink-soft not-italic">
                          {c.value}
                        </address>
                      )}
                    </div>
                  </li>
                ))}
              </ul>
            </section>

            <section>
              <h3 className={sectionTitle}>{t("skills")}</h3>
              <ul className="flex flex-wrap gap-1.5 print:gap-1 list-none p-0">
                {skills.map((k) => (
                  <li key={k} className={chip}>
                    {t(k)}
                  </li>
                ))}
              </ul>
            </section>

            <section>
              <h3 className={sectionTitle}>{t("languages")}</h3>
              <ul className="flex flex-wrap gap-1.5 print:gap-1 list-none p-0">
                <li className={chip}>{t("languageFrench")}</li>
                <li className={chip}>{t("languageEnglish")}</li>
              </ul>
            </section>
          </div>

          {/* Main */}
          <div className="flex flex-col flex-1 gap-8 sm:gap-10 print:gap-4 px-6 sm:px-8 py-6 sm:py-8 print:px-4 print:py-3 print:pl-6 bg-sheet">
            <section>
              <h3 className={sectionTitle}>{t("overview")}</h3>
              <p className="text-ink-soft print:text-sm leading-relaxed print:leading-snug">
                {t("overviewText")}
              </p>
            </section>

            <section>
              <h3 className={sectionTitle}>{t("workExperience")}</h3>
              <div className="flex flex-col gap-7 print:gap-3">
                {jobs.map((jobKey, index) => {
                  const descriptions: string[] = [];
                  for (let i = 1; i <= 4; i++) {
                    const key = `jobs.${jobKey}.description${i}`;
                    if (!t.has(key)) break;
                    descriptions.push(t(key));
                  }
                  return (
                    <article
                      key={jobKey}
                      className={`print:break-inside-avoid grid grid-cols-[auto_1fr] gap-x-4 print:gap-x-3 ${
                        index === 4 ? "print:break-before-page print:pt-6" : ""
                      }`}
                    >
                      <div
                        className="flex flex-col items-center"
                        aria-hidden="true"
                      >
                        <div className="w-2.5 h-2.5 print:w-2 print:h-2 rounded-full bg-pen border-2 print:border border-sheet outline outline-2 outline-ink mt-1.5 print:mt-1"></div>
                        {index < jobs.length - 1 && (
                          <div className="w-0.5 print:w-px flex-1 bg-grid-strong mt-1.5"></div>
                        )}
                      </div>
                      <div className="pb-1 min-w-0">
                        <h4 className="text-ink print:text-base">
                          {t(`jobs.${jobKey}.title`)}
                        </h4>
                        <p className="text-pen font-semibold print:text-sm">
                          {t(`jobs.${jobKey}.company`)}{" "}
                          <span className="text-mute font-normal">
                            · {t(`jobs.${jobKey}.location`)}
                          </span>
                        </p>
                        <p className="font-mono text-xs print:text-[10px] text-mute mt-0.5 mb-2 print:mb-1 tabular-nums">
                          {t(`jobs.${jobKey}.period`)}
                        </p>
                        <ul className="flex flex-col gap-1.5 print:gap-0.5 text-ink-soft text-[15px] print:text-xs list-none p-0">
                          {descriptions.map((desc, i) => (
                            <li key={i} className="flex gap-2">
                              <span
                                className="text-pen shrink-0"
                                aria-hidden="true"
                              >
                                —
                              </span>
                              <span>{desc}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </article>
                  );
                })}
              </div>
            </section>

            <section>
              <h3 className={sectionTitle}>{t("education")}</h3>
              <article className="grid grid-cols-[auto_1fr] gap-x-4 print:gap-x-3">
                <div className="flex flex-col items-center" aria-hidden="true">
                  <div className="w-2.5 h-2.5 print:w-2 print:h-2 rounded-full bg-pen border-2 print:border border-sheet outline outline-2 outline-ink mt-1.5 print:mt-1"></div>
                </div>
                <div>
                  <h4 className="text-ink print:text-base">
                    {t("educationDegree")}
                  </h4>
                  <p className="text-pen font-semibold print:text-sm">
                    {t("educationSchool")}
                  </p>
                  <p className="font-mono text-xs print:text-[10px] text-mute mt-0.5 mb-2 print:mb-1 tabular-nums">
                    2004-09 – 2008-09
                  </p>
                  <ul className="flex flex-col gap-1 print:gap-0.5 text-ink-soft text-sm print:text-xs list-none p-0">
                    <li className="flex gap-2">
                      <span className="text-pen shrink-0" aria-hidden="true">
                        —
                      </span>
                      <span>{t("educationLab")}</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-pen shrink-0" aria-hidden="true">
                        —
                      </span>
                      <span>{t("educationAward")}</span>
                    </li>
                  </ul>
                </div>
              </article>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
