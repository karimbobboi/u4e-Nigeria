import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === "production";

const nextConfig: NextConfig = {
  output: "export", // ensures static export (Next.js 13+)
  basePath: isProd ? "/repo-name" : "",
  assetPrefix: isProd ? "/repo-name/" : "",
  images: {
    unoptimized: true, // required for static export if you use next/image
  },
};

export default nextConfig;