import { hasLocale } from "next-intl";
import { getRequestConfig } from "next-intl/server";
import { routing } from "./routing";

// NB: next-intl now documents next/root-params as the modern replacement for
// setRequestLocale, but it cannot be used here: proxy.ts imports routing.ts,
// which transitively pulls this file into the proxy (middleware) bundle, and
// next/root-params is App-Router-only. Static rendering is achieved with
// setRequestLocale in the layouts/pages instead.
export default getRequestConfig(async ({ requestLocale }) => {
  // This typically corresponds to the `[locale]` segment
  const requested = await requestLocale;
  const locale = hasLocale(routing.locales, requested)
    ? requested
    : routing.defaultLocale;

  return {
    locale,
    messages: (await import(`../../messages/${locale}.json`)).default,
    timeZone: "UTC",
  };
});
