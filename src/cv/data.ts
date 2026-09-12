import type { getTranslations } from "next-intl/server";

type T = Awaited<ReturnType<typeof getTranslations<"resume">>>;

export const jobKeys = [
  "sapien",
  "doormath",
  "criucpq",
  "fastaf",
  "ticketmaster1",
  "asurion",
  "ticketmaster2",
  "balihoo",
  "ticketmaster3",
  "laval",
] as const;

export type CvData = ReturnType<typeof buildCv>;

/** Everything the PDF needs, read once from the `resume` messages. */
export function buildCv(t: T, locale: string) {
  const bulletsOf = (prefix: string) => {
    const out: string[] = [];
    for (let i = 1; i <= 4; i++) {
      const key = `${prefix}.description${i}`;
      if (!t.has(key)) break;
      out.push(t(key));
    }
    return out;
  };

  return {
    locale,
    name: t("name"),
    jobTitle: t("jobTitle"),
    availability: t("availability"),
    contact: {
      title: t("contact"),
      rows: [
        { label: t("address"), value: t("addressValue") },
        {
          label: t("email"),
          value: t("emailValue"),
          href: `mailto:${t("emailValue")}`,
        },
        {
          label: t("linkedin"),
          value: t("linkedinValue"),
          href: `https://www.${t("linkedinValue")}`,
        },
        {
          label: t("github"),
          value: t("githubValue"),
          href: `https://${t("githubValue")}`,
        },
        {
          label: t("website"),
          value: t("websiteValue"),
          href: `https://www.${t("websiteValue")}/${locale}`,
        },
      ],
    },
    skills: {
      title: t("skills"),
      groups: (["Ship", "Lead", "AI"] as const).map((g) => ({
        label: t(`skills${g}`),
        value: t(`skills${g}List`),
      })),
    },
    languages: {
      title: t("languages"),
      items: [t("languageFrench"), t("languageEnglish")],
    },
    overview: { title: t("overview"), text: t("overviewText") },
    outcomes: {
      title: t("outcomes"),
      items: ([1, 2, 3, 4, 5] as const).map((i) => ({
        lead: t(`outcome${i}T`),
        detail: t(`outcome${i}D`),
      })),
    },
    experience: {
      title: t("workExperience"),
      jobs: jobKeys.map((k) => ({
        key: k,
        title: t(`jobs.${k}.title`),
        company: t(`jobs.${k}.company`),
        location: t(`jobs.${k}.location`),
        period: t(`jobs.${k}.period`),
        bullets: bulletsOf(`jobs.${k}`),
      })),
    },
    education: {
      title: t("education"),
      degree: t("educationDegree"),
      school: t("educationSchool"),
      period: t("educationPeriod"),
      bullets: [t("educationLab"), t("educationAward")],
    },
    side: {
      title: t("sideProjects"),
      items: [
        {
          lead: t("side1T"),
          detail: t("side1D"),
          href: "https://apps.apple.com/us/app/crownbtc/id6760546870",
        },
        {
          lead: t("side2T"),
          detail: t("side2D"),
          href: "https://tui.jp305.dev/macro-tui/",
        },
        {
          lead: t("side3T"),
          detail: t("side3D"),
          href: "https://tui.jp305.dev/nhl-tui/",
        },
      ],
    },
  };
}
