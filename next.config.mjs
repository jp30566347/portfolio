import { execSync } from "node:child_process";
import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin("./src/i18n/request.ts");

// <lastmod> for the sitemap: when the pages or their copy last changed, read
// from git at build time. Google refetches on its own schedule and went ten
// weeks without recrawling /fr while the site was rewritten around it;
// lastmod is the sitemap field it reads to learn that a URL changed. A
// shallow clone (Vercel, CI) answers with its oldest commit at worst. Without
// git the value is empty and the sitemap leaves the field out.
const lastModified = (() => {
  try {
    return execSync("git log -1 --format=%cI -- messages src", {
      encoding: "utf8",
      stdio: ["ignore", "pipe", "ignore"],
      timeout: 5000,
    }).trim();
  } catch {
    return "";
  }
})();

/** @type {import('next').NextConfig} */
const nextConfig = {
  env: { SITE_LAST_MODIFIED: lastModified },
  // react-pdf ships its own font and layout engine; bundling it breaks it.
  serverExternalPackages: ["@react-pdf/renderer"],
  async redirects() {
    // The résumé page became a PDF. Old links (LinkedIn, email signatures)
    // keep working. Dotted paths skip the next-intl proxy, so these live here.
    return [
      { source: "/resume", destination: "/en/cv.pdf", permanent: true },
      { source: "/en/resume", destination: "/en/cv.pdf", permanent: true },
      { source: "/fr/resume", destination: "/fr/cv.pdf", permanent: true },
      { source: "/cv.pdf", destination: "/en/cv.pdf", permanent: false },
    ];
  },
  async headers() {
    // Google follows the <link rel="preload" as="font"> tags and lists every
    // font file under "Crawled - currently not indexed". They are not pages:
    // noindex keeps them out of the index and the report without blocking
    // the fetch that rendering needs (which a robots.txt rule would do).
    return [
      {
        source: "/_next/static/:path(.*\\.woff2)",
        headers: [{ key: "X-Robots-Tag", value: "noindex" }],
      },
    ];
  },
};

export default withNextIntl(nextConfig);
