import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  agentRules: false,
  // Dev only: lets phones on the same Wi-Fi load dev scripts via the laptop's LAN IP.
  // Without it the page renders but nothing interactive works. Update if the IP changes.
  allowedDevOrigins: ["172.29.55.214"],
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
