/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  env: {
    NEXT_PUBLIC_TEMPLATE_CLIENT_ID: process.env.NEXT_PUBLIC_TEMPLATE_CLIENT_ID,
  },
}

module.exports = nextConfig