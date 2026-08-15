const { withAxiom } = require("next-axiom");

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  cacheComponents: true,
  images: {
    // Cache optimized images for 30 days.
    minimumCacheTTL: 60 * 60 * 24 * 30,
  },
  env: {
    RESEND_API_KEY: process.env.RESEND_API_KEY,
  },
};

module.exports = withAxiom(nextConfig);
