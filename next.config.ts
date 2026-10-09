import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  compress: true,
  poweredByHeader: false,
  reactStrictMode: true,
  images: {
    formats: ["image/avif", "image/webp"],
    minimumCacheTTL: 2592000, // 30 days
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
  compiler: {
    removeConsole: process.env.NODE_ENV === "production" ? { exclude: ["error", "warn"] } : false,
  },
  experimental: {
    optimizePackageImports: ["lucide-react", "framer-motion", "react-icons"],
  },
  async redirects() {
    return [
      {
        source: "/work/forida",
        destination: "/work",
        permanent: true,
      },
      {
        source: "/work/silom",
        destination: "/work",
        permanent: true,
      },
      {
        source: "/work/biblical-touring",
        destination: "/work",
        permanent: true,
      },
      {
        source: "/work/fareeda-homecare",
        destination: "/work",
        permanent: true,
      },
      {
        source: "/work/siloam",
        destination: "/work",
        permanent: true,
      },
      {
        source: "/work/mmu",
        destination: "/work",
        permanent: true,
      },
      {
        source: "/work/havendeeds",
        destination: "/work",
        permanent: true,
      },
    ];
  },
  async headers() {
    return [
      {
        source: "/:all*(svg|jpg|png|webp|avif|woff2|woff)",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
