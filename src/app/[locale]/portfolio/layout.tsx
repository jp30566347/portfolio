import "../../globals.css";
import { routing } from '@/i18n/routing';
import { getMessages } from '@/i18n/messages';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  let { locale } = await params;
  // Ensure that a valid locale is used, default to 'en' if not provided or invalid
  if (!locale || !routing.locales.includes(locale as any)) {
    locale = routing.defaultLocale;
  }
  // Load messages directly to avoid next-intl namespace file loading issues
  const messages = getMessages(locale);

  return {
    title: messages.portfolio.title,
    description: messages.portfolio.description,
  };
}

interface Props extends React.PropsWithChildren {}

export default async function Layout({ children }: Props) {
  return <>{children}</>;
}
