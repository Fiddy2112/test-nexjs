const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: process.env.ANALYZE === "true",
  reactStrictMode: true,
});

module.exports = withBundleAnalyzer();
