/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "s3.us-east-1.amazonaws.com",
        pathname: "/medusajs.cloud-data-prod-use1-*/**",
      },
      {
        protocol: "https",
        hostname: "**.amazonaws.com",
      },
    ],
  },
 
}

export default nextConfig
