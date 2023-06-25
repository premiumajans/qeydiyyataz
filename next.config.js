/** @type {import('next').NextConfig} */


const { i18n } = require('./next-i18next.config')


const nextConfig = {
  reactStrictMode: true,
  i18n,
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    domains: ["ui-avatars.com", "admin.qeydiyyat.az"],
  },
}


module.exports = nextConfig
