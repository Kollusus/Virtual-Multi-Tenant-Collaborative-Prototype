import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  allowedDevOrigins: [process.env.NEXTAUTH_URL ?? ""],
  // basePath: "/testnextjs",
  // assetPrefix: "/testnextjs",
  experimental: {
    optimizePackageImports: [
      "@mantine/core",
      "@mantine/dates",
      "@mantine/form",
      "@mantine/hooks",
      "@mantine/utils",
      "@tabler/icons-react",
    ],
  },
  devIndicators: false,
  productionBrowserSourceMaps: true,
};

export default nextConfig;
