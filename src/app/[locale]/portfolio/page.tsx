import { Button } from "@nextui-org/react";
import { ExternalLinkIcon, EyeIcon } from "lucide-react";
import Link from "next/link";
import { getTranslations } from 'next-intl/server';

export default async function Home({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'portfolio' });

  return (
    <div className="flex flex-col gap-5 mt-8 mx-4 sm:mx-0">
      <h1>{t('pageTitle')}</h1>
      <div className="flex flex-col gap-8">
        <div className="flex flex-col gap-5">
          <h2>{t('featured')}</h2>
          <hr />
          <div className="flex flex-wrap gap-4">
            <div className="rounded-3xl bg-slate-700/5 p-4 w-full sm:w-80">
              <div>
                <h4>{t('ventilo.title')}</h4>
                <h5>{t('ventilo.client')}</h5>
              </div>
              <ul className="list-disc m-3">
                <li>{t.rich('ventilo.description1', { mark: (chunks) => <mark>{chunks}</mark> })}</li>
                <li>{t.rich('ventilo.description2', { mark: (chunks) => <mark>{chunks}</mark> })}</li>
                <li>{t.rich('ventilo.description3', { mark: (chunks) => <mark>{chunks}</mark> })}</li>
              </ul>
              <div className="flex justify-center">
                <Link
                  href="https://www.ventilo.ca"
                  target="_blank"
                  className="w-48 bg-bitcoin-gray text-white px-8 py-3 flex gap-2 items-center justify-center rounded-lg"
                >
                  <div>{t('ventilo.visitWebsite')}</div>
                  <ExternalLinkIcon />
                </Link>
              </div>
            </div>
            <div className="rounded-3xl bg-slate-700/5 p-4 w-full sm:w-80">
              <div>
                <h4>{t('oxygapp.title')}</h4>
                <h5>{t('oxygapp.client')}</h5>
              </div>
              <ul className="list-disc m-3">
                <li>{t.rich('oxygapp.description1', { mark: (chunks) => <mark>{chunks}</mark> })}</li>
                <li>{t.rich('oxygapp.description2', { mark: (chunks) => <mark>{chunks}</mark> })}</li>
                <li>{t.rich('oxygapp.description3', { mark: (chunks) => <mark>{chunks}</mark> })}</li>
              </ul>
              <div className="flex gap-2 items-center justify-center">
                <Link
                  href="https://play.google.com/store/apps/details?id=com.iucpq.oxygapp&hl=en_US"
                  target="_blank"
                >
                  <img
                    src="/playstore.png"
                    alt={t('playStoreAlt')}
                    className="h-10"
                  />
                </Link>
                <Link
                  href="https://apps.apple.com/us/app/oxygapp/id1668892646"
                  target="_blank"
                >
                  <img
                    src="/appstore.png"
                    alt={t('appStoreAlt')}
                    className="h-10"
                  />
                </Link>
              </div>
            </div>
            <div className="rounded-3xl bg-slate-700/5 p-4 w-full sm:w-80">
              <div>
                <h4>{t('ventiloApp.title')}</h4>
                <h5>{t('ventiloApp.client')}</h5>
              </div>

              <ul className="list-disc m-3">
                <li>{t.rich('ventiloApp.description1', { mark: (chunks) => <mark>{chunks}</mark> })}</li>
                <li>{t.rich('ventiloApp.description2', { mark: (chunks) => <mark>{chunks}</mark> })}</li>
                <li>{t.rich('ventiloApp.description3', { mark: (chunks) => <mark>{chunks}</mark> })}</li>
              </ul>
              <div className="flex gap-2 items-center justify-center">
                <Link
                  href="https://play.google.com/store/apps/details?id=com.iucpq.ventillo&hl=en_US"
                  target="_blank"
                >
                  <img
                    src="/playstore.png"
                    alt={t('playStoreAlt')}
                    className="h-10"
                  />
                </Link>
                <Link
                  href="https://apps.apple.com/us/app/ventilo/id1478758927"
                  target="_blank"
                >
                  <img
                    src="/appstore.png"
                    alt={t('appStoreAlt')}
                    className="h-10"
                  />
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-5">
          <h2>{t('services')}</h2>
          <hr />
          <div className="flex flex-wrap gap-4">
            <div className="rounded-3xl bg-slate-700/5 p-4 w-full sm:w-80">
              <h3>{t('mobileDev.title')}</h3>
              <div className="flex flex-col">
                <ul className="list-disc m-3">
                  <li>{t.rich('mobileDev.description1', { mark: (chunks) => <mark>{chunks}</mark> })}</li>
                  <li>{t.rich('mobileDev.description2', { mark: (chunks) => <mark>{chunks}</mark> })}</li>
                  <li>{t.rich('mobileDev.description3', { mark: (chunks) => <mark>{chunks}</mark> })}</li>
                </ul>
                <img src="/react-native.jpg" className="object-contain h-32" />
              </div>
            </div>
            <div className="rounded-3xl bg-slate-700/5 p-4 w-full sm:w-80">
              <h3>{t('webDev.title')}</h3>
              <ul className="list-disc m-3">
                <li>{t.rich('webDev.description1', { mark: (chunks) => <mark>{chunks}</mark> })}</li>
                <li>{t.rich('webDev.description2', { mark: (chunks) => <mark>{chunks}</mark> })}</li>
                <li>{t.rich('webDev.description3', { mark: (chunks) => <mark>{chunks}</mark> })}</li>
              </ul>
              <div className="flex items-center justify-center gap-3">
                <img src="/nextjs.svg" className="object-contain h-24" /> +{" "}
                <img src="/react.svg" className="object-contain h-24" />
              </div>
            </div>
            <div className="rounded-3xl bg-slate-700/5 p-4 w-full sm:w-80">
              <h3>{t('apiDev.title')}</h3>
              <ul className="list-disc m-3">
                <li>{t.rich('apiDev.description1', { mark: (chunks) => <mark>{chunks}</mark> })}</li>
                <li>{t.rich('apiDev.description2', { mark: (chunks) => <mark>{chunks}</mark> })}</li>
                <li>{t.rich('apiDev.description3', { mark: (chunks) => <mark>{chunks}</mark> })}</li>
                <li>{t.rich('apiDev.description4', { mark: (chunks) => <mark>{chunks}</mark> })}</li>
              </ul>
              <div className="flex items-center justify-center gap-3">
                <img src="/pg.png" className="object-contain h-24" /> +{" "}
                <img src="/supabase.svg" className="object-contain h-24" />
              </div>
            </div>
            <div className="rounded-3xl bg-slate-700/5 p-4 w-full sm:w-80">
              <h3>{t('infrastructure.title')}</h3>
              <ul className="list-disc m-3">
                <li>{t.rich('infrastructure.description1', { mark: (chunks) => <mark>{chunks}</mark> })}</li>
                <li>{t.rich('infrastructure.description2', { mark: (chunks) => <mark>{chunks}</mark> })}</li>
                <li>{t.rich('infrastructure.description3', { mark: (chunks) => <mark>{chunks}</mark> })}</li>
              </ul>

              <div className="flex flex-col">
                <img src="/aws-arch.png" className="object-contain h-32" />
              </div>
            </div>
            <div className="rounded-3xl bg-slate-700/5 p-4 w-full sm:w-80">
              <h3>{t('bitcoin.title')}</h3>
              <ul className="list-disc m-3">
                <li>{t.rich('bitcoin.description1', { mark: (chunks) => <mark>{chunks}</mark> })}</li>
                <li>{t.rich('bitcoin.description2', { mark: (chunks) => <mark>{chunks}</mark> })}</li>
                <li>{t.rich('bitcoin.description3', { mark: (chunks) => <mark>{chunks}</mark> })}</li>
              </ul>
              <div className="flex flex-col">
                <img
                  src="/bitcoin-btc-logo.svg"
                  className="object-contain h-24"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
