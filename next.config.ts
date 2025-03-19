import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async rewrites() {
    return [
      {
        source: "/api/:path*",
        destination: "http://89.111.155.239:8000/:path*",
      },
    ];
  },
};

export default nextConfig;
