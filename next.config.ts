import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "xysaswoufwhmmdoyufwh.supabase.co",
        port: "",
        pathname: "**",
        search: "",
      },
    ],
  },
};

export default nextConfig;
