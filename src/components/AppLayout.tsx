import { PropsWithChildren } from "react";
import { NavBar } from "./NavBar";
import { getTranslations } from "next-intl/server";

interface AppLayoutProps extends PropsWithChildren {
  locale: string;
}

export default async function AppLayout({ children, locale }: AppLayoutProps) {
  const t = await getTranslations({ locale });

  return (
    <main className="flex min-h-screen flex-col">
      <NavBar />
      <div className="mx-auto max-w-6xl w-full px-4 sm:px-6 lg:px-8 py-8 sm:py-12 flex-1">
        {children}
      </div>
      <footer className="print:hidden border-t-2 border-ink bg-sheet mt-16">
        <div className="mx-auto max-w-6xl w-full px-4 sm:px-6 lg:px-8 py-6 flex flex-col sm:flex-row sm:items-center justify-between gap-2 font-mono text-xs text-mute">
          <span>© {new Date().getFullYear()} JP Melanson · Lévis, QC</span>
          <span className="margin-note">{t("footerSignoff")}</span>
        </div>
      </footer>
    </main>
  );
}
