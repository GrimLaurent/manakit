/** @type {import('next').NextConfig} */
const nextConfig = {
  i18n: {
    locales: ['default', 'fr-FR', 'en-US'],
    defaultLocale: 'default',
    localeDetection: false,
  },
  trailingSlash: true,
  reactStrictMode: true,
  swcMinify: true,
};

module.exports = nextConfig;
