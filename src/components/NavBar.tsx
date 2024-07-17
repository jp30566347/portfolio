"use client";

import { Navbar, NavbarContent, NavbarItem } from "@nextui-org/react";
import Link from "next/link";
import { useCurrentLocale, useI18n } from "../../locales/client";
import { usePathname } from "next/navigation";
import classNames from "classnames";

const menuItems = ["home", "resume", "portfolio"] as const;

export function NavBar() {
  const t = useI18n();
  const locale = useCurrentLocale();
  const pathname = usePathname();
  console.debug("pathname", pathname);

  return (
    <Navbar>
      <NavbarContent>
        {menuItems.map((mi, index) => {
          const href = `/${mi.replace(menuItems[0], "")}`;
          const isActive =
            (mi === "home" && (pathname === `/${locale}/` || pathname === '/')) ||
            pathname.indexOf("/" + mi) > -1;

          return (
            <NavbarItem key={index}>
              <Link
                href={href}
                locale={locale}
                className={classNames({
                  underline: isActive,
                  "no-underline": !isActive,
                })}
              >
                {t(`${mi}.title`)}
              </Link>
            </NavbarItem>
          );
        })}
      </NavbarContent>
    </Navbar>
  );
}
