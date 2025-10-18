/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export", // produce static HTML
  images: {
    unoptimized: true,
    domains: [
      "sub.drabdurrazzak.com",
      "test.drabdurrazzak.com",
      "secure.gravatar.com",
    ],
  },
  async rewrites() {
    return [
      {
        source: "/post/:slug*",  // match any /post/something
        destination: "/post",    // always render single /post/page.js
      },
      {
        source: "/images/:path*",
        destination: "/images",
      },
    ];
  },
};

export default nextConfig;
