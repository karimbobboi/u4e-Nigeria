import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === "production";

const nextConfig: NextConfig = {
  basePath: isProd ? "/repo-name" : "",
  assetPrefix: isProd ? "/repo-name/" : "",
  images: {
    unoptimized: true, // required for static export if you use next/image
  },
};

export default nextConfig;