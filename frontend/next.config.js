/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
};

module.exports = {
  typescript: {
    ignoreBuildErrors: true,
  },
  pageExtensions: ["mdx", "md", "jsx", "js", "tsx", "ts"],
};
