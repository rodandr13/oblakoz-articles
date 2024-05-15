/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "oblakoz.ru",
      }
    ]
  },
};

export default nextConfig;
