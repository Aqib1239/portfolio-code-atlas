/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Lint is available via `npm run lint`, but never blocks a production build.
  eslint: {
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
