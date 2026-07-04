import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Removed output: "export" to enable Next.js Serverless API routes
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
