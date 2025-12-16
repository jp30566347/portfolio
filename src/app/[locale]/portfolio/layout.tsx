import "../../globals.css";
import { getTranslations } from 'next-intl/server';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'portfolio' });

  return {
    title: t("title"),
    description: t("description"),
  };
}

interface Props extends React.PropsWithChildren {}

export default async function Layout({ children }: Props) {
  return <>{children}</>;
}
