import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'xmh-997k5le83-vmarinhodevs-projects.vercel.app/',
      }
    ]
  }
};

export default nextConfig;
