"use client";

import { useTranslations, useLocale } from "next-intl";
import { Link, usePathname as useLocalizedPathname } from "@/i18n/routing";
import { useState } from "react";
import Image from "next/image";
import { ExternalLink, Menu, X } from "lucide-react";
import avatar from "@/assets/jp.png";

const menuItems = ["home", "resume", "portfolio"] as const;

const linkBase = "text-base rounded-lg transition-all duration-200 font-medium";
const linkInactive = "text-gray-300 hover:text-white hover:bg-primary-700";
const localeLinkStyle =
  "text-gray-300 hover:text-white hover:bg-primary-700 border border-gray-600 hover:border-gray-500";

export function NavBar() {
  const t = useTranslations();
  const locale = useLocale();
  const localizedPathname = useLocalizedPathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Determine the opposite locale
  const oppositeLocale = locale === "en" ? "fr" : "en";
  const localeLabel = locale === "en" ? "FR" : "EN";

  const hrefFor = (mi: (typeof menuItems)[number]) =>
    `/${mi.replace(menuItems[0], "")}`;

  // localizedPathname comes from @/i18n/routing, so the locale prefix is
  // already stripped: /en -> "/", /fr/resume -> "/resume". Comparing against
  // the raw next/navigation pathname is what previously left "home" never
  // matching, since that returns "/en" with no trailing slash.
  const isActive = (mi: (typeof menuItems)[number]) => {
    const href = hrefFor(mi);
    return href === "/"
      ? localizedPathname === "/"
      : localizedPathname === href || localizedPathname.startsWith(`${href}/`);
  };

  return (
    <nav className="print:hidden bg-primary-800/95 text-white shadow-soft sticky top-0 z-50 backdrop-blur-xs backdrop-saturate-150 flex w-full items-center justify-center">
      <div className="flex flex-row flex-nowrap items-center justify-between gap-4 w-full max-w-full h-[72px] px-6">
        <Link href="/" className="hover:opacity-80 transition-opacity">
          <Image
            src={avatar}
            width={52}
            height={52}
            priority
            className="rounded-full w-[52px] h-[52px] border-2 border-accent-light shadow-md"
            alt="JP"
          />
        </Link>

        <ul className="hidden sm:flex items-center gap-2">
          {menuItems.map((mi) => (
            <li key={mi}>
              <Link
                href={hrefFor(mi)}
                className={`${linkBase} px-4 py-2 ${
                  isActive(mi) ? "bg-accent text-white shadow-md" : linkInactive
                }`}
              >
                {t(`${mi}.title`)}
              </Link>
            </li>
          ))}
          <li>
            <Link
              href="https://calendly.com/jp305"
              target="_blank"
              className="flex gap-2 items-center px-4 py-2 bg-accent hover:bg-accent-dark text-white rounded-lg font-medium transition-all duration-200 shadow-md hover:shadow-lg"
            >
              <span>{t("bookMe")}</span>
              <ExternalLink size={14} />
            </Link>
          </li>
          <li>
            <Link
              href={localizedPathname}
              locale={oppositeLocale}
              className={`${linkBase} px-4 py-2 ${localeLinkStyle}`}
            >
              {localeLabel}
            </Link>
          </li>
        </ul>

        <button
          type="button"
          className="sm:hidden flex items-center justify-center w-6 h-full rounded-lg outline-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent-light"
          aria-label={isMenuOpen ? t("closeMenu") : t("openMenu")}
          aria-expanded={isMenuOpen}
          aria-controls="mobile-menu"
          onClick={() => setIsMenuOpen((open) => !open)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {isMenuOpen && (
        <ul
          id="mobile-menu"
          className="sm:hidden absolute top-full inset-x-0 h-[calc(100dvh-72px)] overflow-y-auto flex flex-col gap-4 px-6 py-6 bg-primary-800 shadow-soft"
        >
          {menuItems.map((mi) => (
            <li key={mi}>
              <Link
                href={hrefFor(mi)}
                onClick={() => setIsMenuOpen(false)}
                className={`${linkBase} block px-4 py-3 ${
                  isActive(mi) ? "bg-accent text-white" : linkInactive
                }`}
              >
                {t(`${mi}.title`)}
              </Link>
            </li>
          ))}
          <li>
            <Link
              href="https://calendly.com/jp305/30min"
              target="_blank"
              onClick={() => setIsMenuOpen(false)}
              className="bg-accent hover:bg-accent-dark text-white text-base px-4 py-3 rounded-lg flex items-center justify-center gap-2 font-medium transition-all duration-200 shadow-md"
            >
              <span>{t("bookMe")}</span>
              <ExternalLink size={14} />
            </Link>
          </li>
          <li>
            <Link
              href={localizedPathname}
              locale={oppositeLocale}
              onClick={() => setIsMenuOpen(false)}
              className={`${linkBase} block px-4 py-3 text-center ${localeLinkStyle}`}
            >
              {localeLabel}
            </Link>
          </li>
        </ul>
      )}
    </nav>
  );
}
