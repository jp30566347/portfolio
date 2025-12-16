"use client";

import { NextUIProvider, Spinner } from "@nextui-org/react";
import { NextIntlClientProvider } from 'next-intl';
import { PropsWithChildren } from "react";

interface Props extends PropsWithChildren {
  locale: string;
  messages: any;
}

export function Providers({ children, locale, messages }: Props) {
  return (
    <NextIntlClientProvider locale={locale} messages={messages}>
      <NextUIProvider>{children}</NextUIProvider>
    </NextIntlClientProvider>
  );
}
