import { useTranslations } from "next-intl";

/**
 * "Notebook · p.2 · Work" — every page of the site is a page of the notebook.
 * The page number is real (site order), so it carries information.
 */
export function PageLabel({ page, title }: { page: number; title: string }) {
  const t = useTranslations();
  return (
    <p className="label">
      {t("notebook")} · p.{page} · {title}
    </p>
  );
}
