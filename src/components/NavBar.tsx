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
import Link from "next/link";
import { useCurrentLocale, useI18n } from "../../locales/client";
import { usePathname } from "next/navigation";
import classNames from "classnames";
import { useState } from "react";
import { ExternalLinkIcon } from "lucide-react";

const menuItems = ["home", "resume", "portfolio"] as const;

export function NavBar() {
  const t = useI18n();
  const locale = useCurrentLocale();
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <Navbar
      className="print:hidden bg-bitcoin-gray text-orange-200"
      isMenuOpen={isMenuOpen}
      onMenuOpenChange={setIsMenuOpen}
    >
      <NavbarBrand>
        <Link href="/" className="hover:bg-bitcoin-gray">
          <img
            src="jp.png"
            className="rounded-full w-[48px] h-[48px] border border-orange-200"
          />
        </Link>
      </NavbarBrand>
      <NavbarContent className="hidden sm:flex gap-4" justify="center">
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
                locale={locale}
                className={classNames("text-lg px-3 py-1", {
                  "bg-orange-200 text-bitcoin-gray": isActive,
                })}
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
            className="flex gap-1 items-center px-3 py-1"
          >
            <span>Book Me</span>
            <ExternalLinkIcon size={12} />
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end" className="sm:hidden flex">
        <NavbarMenuToggle />
        <NavbarMenu className="gap-4 py-4 bg-bitcoin-gray">
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
                  locale={locale}
                  onClick={() => {
                    setIsMenuOpen(false);
                  }}
                  className="bg-bitcoin-gray text-white border border-orange-200 text-xl px-8 py-4 flex"
                >
                  {t(`${mi}.title`)}
                </Link>
              </NavbarMenuItem>
            );
          })}
          <NavbarItem key="book">
            <Link
              href="https://calendly.com/jp305"
              target="_blank"
              className="bg-orange-200 text-bitcoin-gray border border-orange-200 text-xl px-8 py-4 flex items-center gap-1"
            >
              <span>Book Me</span>
              <ExternalLinkIcon size={12} />
            </Link>
          </NavbarItem>
        </NavbarMenu>
      </NavbarContent>
    </Navbar>
  );
}
