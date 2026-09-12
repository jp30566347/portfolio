import { ArrowUpRight, Mail } from "lucide-react";
import { getTranslations } from "next-intl/server";
import { BOOKING_URL, EMAIL_HREF } from "@/lib/links";

/** The closing sheet of every page: one ask, two ways to answer it. */
export async function ContactCta({ locale }: { locale: string }) {
  const t = await getTranslations({ locale, namespace: "cta" });
  const tc = await getTranslations({ locale });

  return (
    <section className="sheet sheet-lift p-6 sm:p-8 flex flex-col sm:flex-row sm:items-center justify-between gap-6">
      <div>
        <h2 className="text-2xl sm:text-3xl">{t("title")}</h2>
        <p className="mt-2 text-ink-soft max-w-[48ch]">{t("sub")}</p>
      </div>
      <div className="flex flex-col sm:flex-row gap-3 shrink-0">
        <a
          href={BOOKING_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-primary"
        >
          {tc("bookMe")}
          <ArrowUpRight size={16} aria-hidden="true" />
        </a>
        <a href={EMAIL_HREF} className="btn btn-ghost">
          <Mail size={16} aria-hidden="true" />
          {tc("emailMe")}
        </a>
      </div>
    </section>
  );
}
