/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "standalone",
  images: { remotePatterns: [
    {
      protocol: "https",
      hostname: "upload.wikimedia.org",
    }
  ] }
};

export default nextConfig;
