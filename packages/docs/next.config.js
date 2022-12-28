const withMDX = require('@next/mdx')({
  extension: /\.mdx?$/,
});

const mdxConfig = withMDX({
  // Append the default value with md extensions
  pageExtensions: ['ts', 'tsx', 'js', 'jsx', 'md', 'mdx'],
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
};

module.exports = { ...nextConfig, ...mdxConfig };
