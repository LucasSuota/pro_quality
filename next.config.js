/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    FORMSPREE_URL: process.env.FORMSPREE_URL,
    FORMSPREE_URL_TEST: process.env.FORMSPREE_URL_TEST,
  },
};

module.exports = nextConfig;
