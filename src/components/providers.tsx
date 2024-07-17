"use client";

import { NextUIProvider, Spinner } from "@nextui-org/react";

import { I18nProviderClient } from "../../locales/client";
import { PropsWithChildren } from "react";

interface Props extends PropsWithChildren {
  locale: string;
}

export function Providers({ children, locale }: Props) {
  return (
    <I18nProviderClient
      locale={locale}
      fallback={
        <div className="flex justify-center">
          <Spinner />
        </div>
      }
    >
      <NextUIProvider>{children}</NextUIProvider>
    </I18nProviderClient>
  );
}
