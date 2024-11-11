import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'xmh-tawny.vercel.app',
        // port: '3000'
      }
    ]
  }
};

export default nextConfig;
