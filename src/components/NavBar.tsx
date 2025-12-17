"use client";

import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenu,
  NavbarMenuItem,
  NavbarMenuToggle,
} from "@nextui-org/react";
import { useTranslations, useLocale } from 'next-intl';
import { usePathname } from "next/navigation";
import { Link, usePathname as useLocalizedPathname } from '@/i18n/routing';
import classNames from "classnames";
import { useState } from "react";
import { ExternalLinkIcon } from "lucide-react";

const menuItems = ["home", "resume", "portfolio"] as const;

export function NavBar() {
  const t = useTranslations();
  const locale = useLocale();
  const pathname = usePathname();
  const localizedPathname = useLocalizedPathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  // Determine the opposite locale
  const oppositeLocale = locale === 'en' ? 'fr' : 'en';
  const localeLabel = locale === 'en' ? 'FR' : 'EN';

  return (
    <Navbar
      className="print:hidden bg-primary-800 text-white shadow-soft sticky top-0 z-50 backdrop-blur-sm bg-opacity-95"
      isMenuOpen={isMenuOpen}
      onMenuOpenChange={setIsMenuOpen}
      maxWidth="full"
      height="72px"
    >
      <NavbarBrand>
        <Link href="/" className="hover:opacity-80 transition-opacity">
          <img
            src="/jp.png"
            className="rounded-full w-[52px] h-[52px] border-2 border-accent-light shadow-md"
            alt="JP"
          />
        </Link>
      </NavbarBrand>
      <NavbarContent className="hidden sm:flex gap-2" justify="center">
        {menuItems.map((mi, index) => {
          const href = `/${mi.replace(menuItems[0], "")}`;
          const isActive =
            (mi === "home" &&
              (pathname === `/${locale}/` || pathname === "/")) ||
            pathname.indexOf("/" + mi) > -1;

          return (
            <NavbarItem key={index}>
              <Link
                href={href}
                className={classNames(
                  "text-base px-4 py-2 rounded-lg transition-all duration-200 font-medium",
                  {
                    "bg-accent text-white shadow-md": isActive,
                    "text-gray-300 hover:text-white hover:bg-primary-700": !isActive,
                  }
                )}
              >
                {t(`${mi}.title`)}
              </Link>
            </NavbarItem>
          );
        })}
        <NavbarItem key="book">
          <Link
            href="https://calendly.com/jp305"
            target="_blank"
            className="flex gap-2 items-center px-4 py-2 bg-accent hover:bg-accent-dark text-white rounded-lg font-medium transition-all duration-200 shadow-md hover:shadow-lg"
          >
            <span>{t('bookMe')}</span>
            <ExternalLinkIcon size={14} />
          </Link>
        </NavbarItem>
        <NavbarItem key="locale">
          <Link
            href={localizedPathname}
            locale={oppositeLocale}
            className="px-4 py-2 rounded-lg transition-all duration-200 font-medium text-gray-300 hover:text-white hover:bg-primary-700 border border-gray-600 hover:border-gray-500"
          >
            {localeLabel}
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end" className="sm:hidden flex">
        <NavbarMenuToggle aria-label={isMenuOpen ? t('closeMenu') : t('openMenu')} />
        <NavbarMenu className="gap-4 py-6 bg-primary-800">
          {menuItems.map((mi, index) => {
            const href = `/${mi.replace(menuItems[0], "")}`;
            const isActive =
              (mi === "home" &&
                (pathname === `/${locale}/` || pathname === "/")) ||
              pathname.indexOf("/" + mi) > -1;

            return (
              <NavbarMenuItem key={index}>
                <Link
                  href={href}
                  onClick={() => {
                    setIsMenuOpen(false);
                  }}
                  className={classNames(
                    "text-base px-4 py-3 rounded-lg transition-all duration-200 font-medium",
                    {
                      "bg-accent text-white": isActive,
                      "text-gray-300 hover:text-white hover:bg-primary-700": !isActive,
                    }
                  )}
                >
                  {t(`${mi}.title`)}
                </Link>
              </NavbarMenuItem>
            );
          })}
          <NavbarMenuItem>
            <Link
              href="https://calendly.com/jp305/30min"
              target="_blank"
              className="bg-accent hover:bg-accent-dark text-white text-base px-4 py-3 rounded-lg flex items-center justify-center gap-2 font-medium transition-all duration-200 shadow-md"
              onClick={() => setIsMenuOpen(false)}
            >
              <span>{t('bookMe')}</span>
              <ExternalLinkIcon size={14} />
            </Link>
          </NavbarMenuItem>
          <NavbarMenuItem>
            <Link
              href={localizedPathname}
              locale={oppositeLocale}
              className="text-base px-4 py-3 rounded-lg transition-all duration-200 font-medium text-gray-300 hover:text-white hover:bg-primary-700 border border-gray-600 hover:border-gray-500 text-center"
              onClick={() => setIsMenuOpen(false)}
            >
              {localeLabel}
            </Link>
          </NavbarMenuItem>
        </NavbarMenu>
      </NavbarContent>
    </Navbar>
  );
}
