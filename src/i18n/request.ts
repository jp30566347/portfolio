import { getRequestConfig } from 'next-intl/server';
import { routing } from './routing';

export default getRequestConfig(async ({ requestLocale }) => {
  // This typically corresponds to the `[locale]` segment
  let locale = await requestLocale;

  // Ensure that a valid locale is used
  // Default to English if no locale is provided or invalid locale
  if (!locale || !routing.locales.includes(locale as any)) {
    locale = routing.defaultLocale; // 'en' is the default
  }

  return {
    locale,
    messages: (await import(`../../messages/${locale}.json`)).default,
    timeZone: 'UTC'
  };
});

