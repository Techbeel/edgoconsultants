import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "edgoconsultants.com",
      },
      {
        protocol: "https",
        hostname: "www.edgoconsultants.com",
      },
      {
        protocol: "https",
        hostname: "*.vercel.app",
      },
    ],
    unoptimized: true, // Disable Next.js image optimization for static images
  },
  /* config options here */
};

export default nextConfig;
