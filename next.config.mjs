/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "tailus.io",
        port: "",
        pathname: "/**"
      }
    ]
  }
};

export default nextConfig;
