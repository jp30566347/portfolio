import React from "react";
import { Button } from "@nextui-org/react";
import { ExternalLinkIcon, EyeIcon } from "lucide-react";
import Link from "next/link";
import { routing } from '@/i18n/routing';
import { getMessages } from '@/i18n/messages';

// Helper to parse rich text with React components
function parseRichText(text: string, components: { mark: (chunks: string) => React.ReactNode }) {
  const parts: React.ReactNode[] = [];
  const regex = /<mark>(.*?)<\/mark>/g;
  let lastIndex = 0;
  let match;

  while ((match = regex.exec(text)) !== null) {
    // Add text before the match
    if (match.index > lastIndex) {
      parts.push(text.substring(lastIndex, match.index));
    }
    // Add the marked content
    parts.push(components.mark(match[1]));
    lastIndex = regex.lastIndex;
  }
  
  // Add remaining text
  if (lastIndex < text.length) {
    parts.push(text.substring(lastIndex));
  }
  
  return parts.length > 0 ? parts : text;
}

export default async function Home({
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
  
  // Create a translation function that accesses nested keys
  const getNestedValue = (obj: any, path: string): string => {
    const keys = path.split('.');
    let value: any = obj;
    for (const k of keys) {
      value = value?.[k];
    }
    return value || path;
  };
  
  const t = (key: string) => getNestedValue(messages, key);
  const tRich = (key: string, components: { mark: (chunks: string) => React.ReactNode }) => {
    const text = getNestedValue(messages, key);
    return parseRichText(text, components);
  };
  
  // Create t object with rich method
  const tWithRich = Object.assign(t, { rich: tRich });

  return (
    <div className="flex flex-col gap-12 mt-8 mx-4 sm:mx-0">
      <div className="max-w-4xl mx-auto w-full">
        <h1 className="mb-4">{tWithRich('portfolio.pageTitle')}</h1>
        <p className="text-lg text-primary-600 max-w-2xl">
          {tWithRich('portfolio.description')}
        </p>
      </div>

      <div className="flex flex-col gap-16 max-w-6xl mx-auto w-full">
        {/* Featured Projects */}
        <section className="flex flex-col gap-6">
          <div>
            <h2 className="mb-2">{tWithRich('portfolio.featured')}</h2>
            <div className="h-1 w-20 bg-accent rounded-full"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Ventilo Card */}
            <div className="rounded-2xl bg-white border border-primary-200 p-6 shadow-soft hover:shadow-soft-lg transition-all duration-300 hover:-translate-y-1 flex flex-col">
              <div className="mb-4">
                <h4 className="mb-1">{t('portfolio.ventilo.title')}</h4>
                <h5 className="text-accent">{t('portfolio.ventilo.client')}</h5>
              </div>
              <ul className="list-disc list-inside space-y-2 mb-6 flex-grow text-primary-700">
                <li>{tWithRich.rich('portfolio.ventilo.description1', { mark: (chunks) => <mark className="font-medium">{chunks}</mark> })}</li>
                <li>{tWithRich.rich('portfolio.ventilo.description2', { mark: (chunks) => <mark className="font-medium">{chunks}</mark> })}</li>
                <li>{tWithRich.rich('portfolio.ventilo.description3', { mark: (chunks) => <mark className="font-medium">{chunks}</mark> })}</li>
              </ul>
              <div className="flex justify-center">
                <Link
                  href="https://www.ventilo.ca"
                  target="_blank"
                  className="w-full bg-accent hover:bg-accent-dark text-white px-6 py-3 flex gap-2 items-center justify-center rounded-lg transition-all duration-200 font-medium shadow-md hover:shadow-lg"
                >
                  <span>{tWithRich('portfolio.ventilo.visitWebsite')}</span>
                  <ExternalLinkIcon size={16} />
                </Link>
              </div>
            </div>

            {/* OxygApp Card */}
            <div className="rounded-2xl bg-white border border-primary-200 p-6 shadow-soft hover:shadow-soft-lg transition-all duration-300 hover:-translate-y-1 flex flex-col">
              <div className="mb-4">
                <h4 className="mb-1">{tWithRich('portfolio.oxygapp.title')}</h4>
                <h5 className="text-accent">{tWithRich('portfolio.oxygapp.client')}</h5>
              </div>
              <ul className="list-disc list-inside space-y-2 mb-6 flex-grow text-primary-700">
                <li>{tWithRich.rich('portfolio.oxygapp.description1', { mark: (chunks) => <mark className="font-medium">{chunks}</mark> })}</li>
                <li>{tWithRich.rich('portfolio.oxygapp.description2', { mark: (chunks) => <mark className="font-medium">{chunks}</mark> })}</li>
                <li>{tWithRich.rich('portfolio.oxygapp.description3', { mark: (chunks) => <mark className="font-medium">{chunks}</mark> })}</li>
              </ul>
              <div className="flex gap-3 items-center justify-center">
                <Link
                  href="https://play.google.com/store/apps/details?id=com.iucpq.oxygapp&hl=en_US"
                  target="_blank"
                  className="transition-transform hover:scale-105"
                >
                  <img
                    src="/playstore.png"
                    alt={tWithRich('portfolio.playStoreAlt')}
                    className="h-12"
                  />
                </Link>
                <Link
                  href="https://apps.apple.com/us/app/oxygapp/id1668892646"
                  target="_blank"
                  className="transition-transform hover:scale-105"
                >
                  <img
                    src="/appstore.png"
                    alt={tWithRich('portfolio.appStoreAlt')}
                    className="h-12"
                  />
                </Link>
              </div>
            </div>

            {/* VentilO App Card */}
            <div className="rounded-2xl bg-white border border-primary-200 p-6 shadow-soft hover:shadow-soft-lg transition-all duration-300 hover:-translate-y-1 flex flex-col">
              <div className="mb-4">
                <h4 className="mb-1">{tWithRich('portfolio.ventiloApp.title')}</h4>
                <h5 className="text-accent">{tWithRich('portfolio.ventiloApp.client')}</h5>
              </div>
              <ul className="list-disc list-inside space-y-2 mb-6 flex-grow text-primary-700">
                <li>{tWithRich.rich('portfolio.ventiloApp.description1', { mark: (chunks) => <mark className="font-medium">{chunks}</mark> })}</li>
                <li>{tWithRich.rich('portfolio.ventiloApp.description2', { mark: (chunks) => <mark className="font-medium">{chunks}</mark> })}</li>
                <li>{tWithRich.rich('portfolio.ventiloApp.description3', { mark: (chunks) => <mark className="font-medium">{chunks}</mark> })}</li>
              </ul>
              <div className="flex gap-3 items-center justify-center">
                <Link
                  href="https://play.google.com/store/apps/details?id=com.iucpq.ventillo&hl=en_US"
                  target="_blank"
                  className="transition-transform hover:scale-105"
                >
                  <img
                    src="/playstore.png"
                    alt={tWithRich('portfolio.playStoreAlt')}
                    className="h-12"
                  />
                </Link>
                <Link
                  href="https://apps.apple.com/us/app/ventilo/id1478758927"
                  target="_blank"
                  className="transition-transform hover:scale-105"
                >
                  <img
                    src="/appstore.png"
                    alt={tWithRich('portfolio.appStoreAlt')}
                    className="h-12"
                  />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Services */}
        <section className="flex flex-col gap-6">
          <div>
            <h2 className="mb-2">{tWithRich('portfolio.services')}</h2>
            <div className="h-1 w-20 bg-accent rounded-full"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Mobile Development */}
            <div className="rounded-2xl bg-white border border-primary-200 p-6 shadow-soft hover:shadow-soft-lg transition-all duration-300 hover:-translate-y-1">
              <h3 className="mb-4">{tWithRich('portfolio.mobileDev.title')}</h3>
              <ul className="list-disc list-inside space-y-2 mb-6 text-primary-700">
                <li>{tWithRich.rich('portfolio.mobileDev.description1', { mark: (chunks) => <mark className="font-medium">{chunks}</mark> })}</li>
                <li>{tWithRich.rich('portfolio.mobileDev.description2', { mark: (chunks) => <mark className="font-medium">{chunks}</mark> })}</li>
                <li>{tWithRich.rich('portfolio.mobileDev.description3', { mark: (chunks) => <mark className="font-medium">{chunks}</mark> })}</li>
              </ul>
              <div className="flex justify-center">
                <img src="/react-native.jpg" className="object-contain h-32 rounded-lg" alt="React Native" />
              </div>
            </div>

            {/* Web Development */}
            <div className="rounded-2xl bg-white border border-primary-200 p-6 shadow-soft hover:shadow-soft-lg transition-all duration-300 hover:-translate-y-1">
              <h3 className="mb-4">{tWithRich('portfolio.webDev.title')}</h3>
              <ul className="list-disc list-inside space-y-2 mb-6 text-primary-700">
                <li>{tWithRich.rich('portfolio.webDev.description1', { mark: (chunks) => <mark className="font-medium">{chunks}</mark> })}</li>
                <li>{tWithRich.rich('portfolio.webDev.description2', { mark: (chunks) => <mark className="font-medium">{chunks}</mark> })}</li>
                <li>{tWithRich.rich('portfolio.webDev.description3', { mark: (chunks) => <mark className="font-medium">{chunks}</mark> })}</li>
              </ul>
              <div className="flex items-center justify-center gap-3 pt-4">
                <img src="/nextjs.svg" className="object-contain h-20" alt="Next.js" />
                <span className="text-primary-400">+</span>
                <img src="/react.svg" className="object-contain h-20" alt="React" />
              </div>
            </div>

            {/* API Development */}
            <div className="rounded-2xl bg-white border border-primary-200 p-6 shadow-soft hover:shadow-soft-lg transition-all duration-300 hover:-translate-y-1">
              <h3 className="mb-4">{tWithRich('portfolio.apiDev.title')}</h3>
              <ul className="list-disc list-inside space-y-2 mb-6 text-primary-700">
                <li>{tWithRich.rich('portfolio.apiDev.description1', { mark: (chunks) => <mark className="font-medium">{chunks}</mark> })}</li>
                <li>{tWithRich.rich('portfolio.apiDev.description2', { mark: (chunks) => <mark className="font-medium">{chunks}</mark> })}</li>
                <li>{tWithRich.rich('portfolio.apiDev.description3', { mark: (chunks) => <mark className="font-medium">{chunks}</mark> })}</li>
                <li>{tWithRich.rich('portfolio.apiDev.description4', { mark: (chunks) => <mark className="font-medium">{chunks}</mark> })}</li>
              </ul>
              <div className="flex items-center justify-center gap-3 pt-4">
                <img src="/pg.png" className="object-contain h-20" alt="PostgreSQL" />
                <span className="text-primary-400">+</span>
                <img src="/supabase.svg" className="object-contain h-20" alt="Supabase" />
              </div>
            </div>

            {/* Infrastructure */}
            <div className="rounded-2xl bg-white border border-primary-200 p-6 shadow-soft hover:shadow-soft-lg transition-all duration-300 hover:-translate-y-1">
              <h3 className="mb-4">{tWithRich('portfolio.infrastructure.title')}</h3>
              <ul className="list-disc list-inside space-y-2 mb-6 text-primary-700">
                <li>{tWithRich.rich('portfolio.infrastructure.description1', { mark: (chunks) => <mark className="font-medium">{chunks}</mark> })}</li>
                <li>{tWithRich.rich('portfolio.infrastructure.description2', { mark: (chunks) => <mark className="font-medium">{chunks}</mark> })}</li>
                <li>{tWithRich.rich('portfolio.infrastructure.description3', { mark: (chunks) => <mark className="font-medium">{chunks}</mark> })}</li>
              </ul>
              <div className="flex justify-center pt-4">
                <img src="/aws-arch.png" className="object-contain h-32 rounded-lg" alt="AWS Architecture" />
              </div>
            </div>

            {/* Bitcoin Consulting */}
            <div className="rounded-2xl bg-white border border-primary-200 p-6 shadow-soft hover:shadow-soft-lg transition-all duration-300 hover:-translate-y-1">
              <h3 className="mb-4">{tWithRich('portfolio.bitcoin.title')}</h3>
              <ul className="list-disc list-inside space-y-2 mb-6 text-primary-700">
                <li>{tWithRich.rich('portfolio.bitcoin.description1', { mark: (chunks) => <mark className="font-medium">{chunks}</mark> })}</li>
                <li>{tWithRich.rich('portfolio.bitcoin.description2', { mark: (chunks) => <mark className="font-medium">{chunks}</mark> })}</li>
                <li>{tWithRich.rich('portfolio.bitcoin.description3', { mark: (chunks) => <mark className="font-medium">{chunks}</mark> })}</li>
              </ul>
              <div className="flex justify-center pt-4">
                <img
                  src="/bitcoin-btc-logo.svg"
                  className="object-contain h-24"
                  alt="Bitcoin"
                />
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
