"use client";

import { useTranslations, useLocale } from "next-intl";
import { Link, usePathname as useLocalizedPathname } from "@/i18n/routing";
import { useState } from "react";
import Image from "next/image";
import { ArrowUpRight, Menu, X } from "lucide-react";
import avatar from "@/assets/jp.png";

const menuItems = ["home", "portfolio", "resume"] as const;

const linkBase =
  "font-mono text-xs uppercase tracking-widest transition-colors duration-150 rounded-xs";
const linkInactive = "text-mute hover:text-ink";
// Highlighter under the current page.
const linkActive =
  "text-ink shadow-[inset_0_-0.5em_0_var(--hl)] hover:text-ink";
const localeLinkStyle =
  "text-mute hover:text-ink border-2 border-grid-strong hover:border-ink";

export function NavBar() {
  const t = useTranslations();
  const locale = useLocale();
  const localizedPathname = useLocalizedPathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Determine the opposite locale
  const oppositeLocale = locale === "en" ? "fr" : "en";
  const localeLabel = locale === "en" ? "FR" : "EN";

  const hrefFor = (mi: (typeof menuItems)[number]) =>
    mi === "home" ? "/" : `/${mi}`;

  // localizedPathname comes from @/i18n/routing, so the locale prefix is
  // already stripped: /en -> "/", /fr/resume -> "/resume".
  const isActive = (mi: (typeof menuItems)[number]) => {
    const href = hrefFor(mi);
    return href === "/"
      ? localizedPathname === "/"
      : localizedPathname === href || localizedPathname.startsWith(`${href}/`);
  };

  return (
    <nav className="print:hidden bg-paper/95 backdrop-blur-xs sticky top-0 z-50 border-b-2 border-ink">
      <div className="mx-auto max-w-6xl flex items-center justify-between gap-4 h-[68px] px-4 sm:px-6 lg:px-8">
        <Link
          href="/"
          className="flex items-center gap-3 text-ink hover:text-ink"
        >
          <Image
            src={avatar}
            width={40}
            height={40}
            priority
            className="rounded-full w-10 h-10 border-2 border-ink"
            alt=""
          />
          <span className="font-mono font-semibold text-sm tracking-wide">
            JP MELANSON
          </span>
        </Link>

        <ul className="hidden sm:flex items-center gap-6">
          {menuItems.map((mi) => (
            <li key={mi}>
              <Link
                href={hrefFor(mi)}
                aria-current={isActive(mi) ? "page" : undefined}
                className={`${linkBase} px-0.5 py-1 ${
                  isActive(mi) ? linkActive : linkInactive
                }`}
              >
                {t(`${mi}.title`)}
              </Link>
            </li>
          ))}
          <li>
            <Link
              href={localizedPathname}
              locale={oppositeLocale}
              className={`${linkBase} px-2 py-1 ${localeLinkStyle}`}
              aria-label={t("switchLocale")}
            >
              {localeLabel}
            </Link>
          </li>
          <li>
            <Link
              href="https://calendly.com/jp305/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 bg-ink text-paper hover:text-paper font-mono text-xs uppercase tracking-widest px-3.5 py-2 rounded-sm transition-transform duration-150 hover:-translate-y-px"
            >
              <span>{t("bookMe")}</span>
              <ArrowUpRight size={14} aria-hidden="true" />
            </Link>
          </li>
        </ul>

        <button
          type="button"
          className="sm:hidden flex items-center justify-center w-10 h-10 -mr-2 rounded-sm text-ink"
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
          className="sm:hidden absolute top-full inset-x-0 h-[calc(100dvh-68px)] overflow-y-auto flex flex-col gap-2 px-4 py-6 bg-paper border-t-2 border-ink"
        >
          {menuItems.map((mi) => (
            <li key={mi}>
              <Link
                href={hrefFor(mi)}
                onClick={() => setIsMenuOpen(false)}
                aria-current={isActive(mi) ? "page" : undefined}
                className={`font-display text-2xl font-semibold inline-block px-2 py-3 ${
                  isActive(mi)
                    ? "text-ink shadow-[inset_0_-0.45em_0_var(--hl)]"
                    : "text-ink-soft hover:text-ink"
                }`}
              >
                {t(`${mi}.title`)}
              </Link>
            </li>
          ))}
          <li className="mt-4 flex gap-3">
            <Link
              href="https://calendly.com/jp305/30min"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setIsMenuOpen(false)}
              className="btn btn-primary flex-1"
            >
              <span>{t("bookMe")}</span>
              <ArrowUpRight size={16} aria-hidden="true" />
            </Link>
            <Link
              href={localizedPathname}
              locale={oppositeLocale}
              onClick={() => setIsMenuOpen(false)}
              className="btn btn-ghost"
              aria-label={t("switchLocale")}
            >
              {localeLabel}
            </Link>
          </li>
        </ul>
      )}
    </nav>
  );
}
