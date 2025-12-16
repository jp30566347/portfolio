import bundleAnalyzer from "@next/bundle-analyzer";
import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin('./src/i18n/request.ts');

const withBundleAnalyzer = bundleAnalyzer({
  enabled: process.env.ANALYZE === "true",
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    optimizePackageImports: ["@nextui-org/react"],
  },
};

export default withBundleAnalyzer(withNextIntl(nextConfig));
