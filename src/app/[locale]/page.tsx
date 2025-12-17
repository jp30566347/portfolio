import { getTranslations } from 'next-intl/server';
import Link from 'next/link';
import { ExternalLinkIcon } from 'lucide-react';
import { routing } from '@/i18n/routing';

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
  const t = await getTranslations({ locale, namespace: 'home' });

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative py-16 sm:py-24 px-4 sm:px-0">
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto animate-fade-in-up">
          <h1 className="mb-4 text-balance">
            {t('title').split('|')[0].trim()}
          </h1>
          <p className="text-xl sm:text-2xl text-primary-600 mb-8 font-light max-w-2xl text-balance">
            {t('description')}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <Link
              href="/portfolio"
              className="px-8 py-3 bg-accent hover:bg-accent-dark text-white rounded-lg font-semibold transition-all duration-200 shadow-md hover:shadow-lg"
            >
              {t('viewMyWork')}
            </Link>
            <Link
              href="https://calendly.com/jp305"
              target="_blank"
              className="px-8 py-3 bg-primary-100 hover:bg-primary-200 text-primary-800 rounded-lg font-semibold transition-all duration-200 border border-primary-300 flex items-center justify-center gap-2"
            >
              {t('bookConsultation')}
              <ExternalLinkIcon size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* Stats/Features */}
      <section className="py-12 px-4 sm:px-0 bg-primary-50 rounded-2xl mb-16">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="text-center">
            <div className="text-4xl font-bold text-accent mb-2">15+</div>
            <div className="text-primary-700 font-medium">{t('yearsExperience')}</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-accent mb-2">100+</div>
            <div className="text-primary-700 font-medium">{t('projectsDelivered')}</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-accent mb-2">250+</div>
            <div className="text-primary-700 font-medium">{t('collaborations')}</div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="flex flex-col gap-8 px-4 sm:px-0 max-w-4xl mx-auto mb-16">
        <div className="prose prose-lg max-w-none">
          <p className="text-lg leading-relaxed text-primary-700 mb-6">
            {t.rich('intro1', { mark: (chunks) => <mark className="font-medium">{chunks}</mark> })}
          </p>
          <p className="text-lg leading-relaxed text-primary-700 mb-6">
            {t.rich('intro2', { mark: (chunks) => <mark className="font-medium">{chunks}</mark> })}
          </p>
          <p className="text-lg leading-relaxed text-primary-700 mb-6">
            {t.rich('intro3', { mark: (chunks) => <mark className="font-medium">{chunks}</mark> })}
          </p>
          <p className="text-lg leading-relaxed text-primary-700 mb-6">
            {t.rich('intro4', { mark: (chunks) => <mark className="font-medium">{chunks}</mark> })}
          </p>
          <p className="text-lg leading-relaxed text-primary-700">
            {t.rich('intro5', { mark: (chunks) => <mark className="font-medium">{chunks}</mark> })}
          </p>
        </div>
      </section>
    </div>
  );
}
