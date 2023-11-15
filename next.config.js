const { withAxiom } = require("next-axiom");

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  env: {
    RESEND_API_KEY: process.env.RESEND_API_KEY,
  },
};

module.exports = withAxiom(nextConfig);
