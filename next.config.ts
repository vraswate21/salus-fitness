import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  typescript: { ignoreBuildErrors: false },
  webpack(config, { dev }) {
    if (dev) {
      // Reduce memory pressure in development
      config.optimization = {
        ...config.optimization,
        splitChunks: false,
        runtimeChunk: false,
      };
    }
    // Disable source maps to save memory
    config.devtool = false;
    return config;
  },
};

export default nextConfig;
