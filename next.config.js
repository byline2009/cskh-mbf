/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverActions: true,
  },
  reactStrictMode: false,
  distDir: "_next",
  generateBuildId: async () => {
    if (process.env.BUILD_ID) {
      return process.env.BUILD_ID;
    } else {
      return `${new Date().getTime()}`;
    }
  },
  env: {
    NEXTAUTH_APP_API_URL: process.env.NEXTAUTH_APP_API_URL,
  },
  swcMinify: true,
  webpack(config) {
    config.experiments = { ...config.experiments, topLevelAwait: true };
    return config;
  },
};

module.exports = nextConfig;
