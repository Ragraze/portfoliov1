import { networkInterfaces } from "node:os";

const localOrigins = Object.values(networkInterfaces()).flatMap((interfaces) =>
  (interfaces ?? [])
    .filter((network) => network.family === "IPv4" && !network.internal)
    .map((network) => network.address),
);

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: process.env.PORTFOLIO_STANDALONE === "true" ? "standalone" : undefined,
  agentRules: false,
  devIndicators: false,
  deploymentId: process.env.NODE_ENV === "development" ? "dev-no-store-v1" : undefined,
  allowedDevOrigins: ["127.0.0.1", "rakanfadhil.com", ...localOrigins],
  async headers() {
    if (process.env.NODE_ENV !== "development") return [];

    return [
      {
        source: "/_next/static/:path*",
        headers: [
          { key: "Cache-Control", value: "private, no-store, max-age=0, must-revalidate" },
          { key: "CDN-Cache-Control", value: "no-store" },
          { key: "Cloudflare-CDN-Cache-Control", value: "no-store" },
        ],
      },
    ];
  },
  async rewrites() {
    return [
      { source: "/about", destination: "/" },
      { source: "/experience", destination: "/" },
      { source: "/project", destination: "/" },
      { source: "/certificates", destination: "/" },
    ];
  },
  webpack(config) {
    // Keep ?url SVG imports as files and load other SVGs as React components.
    const fileLoaderRule = config.module.rules.find((rule) => rule.test?.test?.(".svg"));

    config.module.rules.push(
      {
        ...fileLoaderRule,
        test: /\.svg$/i,
        resourceQuery: /url/,
      },
      {
        test: /\.svg$/i,
        issuer: fileLoaderRule.issuer,
        resourceQuery: { not: [...fileLoaderRule.resourceQuery.not, /url/] },
        use: {
          loader: "@svgr/webpack",
          options: {
            svgoConfig: {
              plugins: [
                {
                  name: "preset-default",
                  params: {
                    overrides: {
                      removeViewBox: false,
                    },
                  },
                },
              ],
            },
          },
        },
      },
    );

    fileLoaderRule.exclude = /\.svg$/i;

    return config;
  },
};

export default nextConfig;
