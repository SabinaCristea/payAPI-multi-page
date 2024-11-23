import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/, // Matches .svg files
      use: ["@svgr/webpack"], // Uses @svgr/webpack loader
    });
    return config;
  },
};

export default nextConfig;
