/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // Cache optimized images for 60 days
    minimumCacheTTL: 60 * 60 * 24 * 60,
    // Enable modern formats
    formats: ['image/avif', 'image/webp'],
  },
};

export default nextConfig;
