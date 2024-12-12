/** @type {import('next').NextConfig} */
const nextConfig = {
  // experimental: {
  //   serverActions: true,
  // },
  reactStrictMode: false,
  env: {
    NEXTAUTH_APP_API_URL: process.env.NEXTAUTH_APP_API_URL,
  },
  webpack(config) {
    config.experiments = { ...config.experiments, topLevelAwait: true };
    return config;
  },
  async rewrites() {
    const apiBaseUrl = process.env.NEXTAUTH_APP_API_URL; // Lấy từ biến môi trường
    if (!apiBaseUrl) {
      throw new Error("NEXTAUTH_APP_API_URL không được thiết lập trong .env!");
    }

    return [
      {
        source: '/api/:path*', // Proxy mọi request bắt đầu với /api
        destination: `${apiBaseUrl}/:path*`, // Chuyển hướng tới backend API
      },
    ];
  },
};

module.exports = nextConfig;

