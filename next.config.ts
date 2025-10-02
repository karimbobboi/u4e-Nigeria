import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: { unoptimized: true }, // optional if you want local image handling
}
export default nextConfig;
