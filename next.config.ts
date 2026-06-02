import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  basePath: '/olia-family',
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
