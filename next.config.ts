import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  typescript: { ignoreBuildErrors: false },
  webpack(config) {
    config.devtool = false;
    return config;
  },
};

export default nextConfig;
