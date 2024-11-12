import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        // hostname: 'localhost',
        hostname: 'xmh-tawny.vercel.app',
      }
    ]
  }
};

export default nextConfig;
