/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    NEXTAUTH_APP_API_URL: process.env.NEXTAUTH_APP_API_URL,
    NEXTAUTH_APP_API_URL_SSL: process.env.NEXTAUTH_APP_API_URL_SSL,

  },
  webpack(config) {
    config.experiments = { ...config.experiments, topLevelAwait: true };
    return config;
  },
};

module.exports = nextConfig;

