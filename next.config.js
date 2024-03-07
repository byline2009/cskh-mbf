/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    NEXTAUTH_APP_API_URL: process.env.NEXTAUTH_APP_API_URL,
  },
};

module.exports = nextConfig;
