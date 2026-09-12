import { notFound } from "next/navigation";
import { hasLocale } from "next-intl";
import { getTranslations } from "next-intl/server";
import { renderToBuffer } from "@react-pdf/renderer";
import { routing } from "@/i18n/routing";
import { cvDocument } from "@/cv/CvDocument";
import { buildCv } from "@/cv/data";

// Rendered once per locale at build time from messages/*.json, so the PDF can
// never drift from the site's copy and no browser is needed on the server.
export const dynamic = "force-static";

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function GET(
  _request: Request,
  { params }: { params: Promise<{ locale: string }> }
) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) notFound();

  const t = await getTranslations({ locale, namespace: "resume" });
  const pdf = await renderToBuffer(cvDocument(buildCv(t, locale)));

  return new Response(new Uint8Array(pdf), {
    headers: {
      "Content-Type": "application/pdf",
      "Content-Disposition": `inline; filename="JP-Melanson-CV-${locale}.pdf"`,
    },
  });
}
