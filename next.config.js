/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'puppy.instabizweb.com', pathname: '/_next/image**' },
    ],
  },
};
module.exports = nextConfig;
