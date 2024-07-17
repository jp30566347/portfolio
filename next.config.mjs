import bundleAnalyzer from "@next/bundle-analyzer";
const withBundleAnalyzer = bundleAnalyzer({
  enabled: process.env.ANALYZE === "true",
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    optimizePackageImports: ["@nextui-org/react"],
  },
  transpilePackages: ["next-international", "international-types"],
};

export default withBundleAnalyzer(nextConfig);
