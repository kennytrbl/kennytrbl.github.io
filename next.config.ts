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
      {
        protocol: "https",
        hostname: "lastfm.freetls.fastly.net",
        port: "",
        pathname: "**",
        search: "",
      },
    ],
  },
};

export default nextConfig;
