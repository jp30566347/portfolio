import { getTranslations } from 'next-intl/server';

export default async function Home({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'home' });

  return (
    <div className="mt-8 flex flex-col sm:flex-row gap-12 items-center sm:items-start">
      <div className="flex flex-col gap-5 px-4 sm:px-0">
        <p>{t.rich('intro1', { mark: (chunks) => <mark>{chunks}</mark> })}</p>
        <p>{t.rich('intro2', { mark: (chunks) => <mark>{chunks}</mark> })}</p>
        <p>{t.rich('intro3', { mark: (chunks) => <mark>{chunks}</mark> })}</p>
        <p>{t.rich('intro4', { mark: (chunks) => <mark>{chunks}</mark> })}</p>
        <p>{t.rich('intro5', { mark: (chunks) => <mark>{chunks}</mark> })}</p>
      </div>
    </div>
  );
}
