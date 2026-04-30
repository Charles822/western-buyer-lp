import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      { source: "/voice-concierge", destination: "/", permanent: true },
      {
        source: "/voice-agent",
        destination: "/voice-agent-for-manufacturers",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
