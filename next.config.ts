import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Keep workspace discovery inside this project when a parent has a lockfile.
  turbopack: {
    root: process.cwd(),
  },
};

export default nextConfig;
