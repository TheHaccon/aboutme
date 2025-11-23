import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  distDir: "out",
  reactCompiler: true,
  basePath: "/aboutme",
  assetPrefix: "/aboutme/",
};

export default nextConfig;
