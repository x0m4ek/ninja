
/** @type {import('next').NextConfig} */
const nextConfig = {
    eslint: {
        // Warning: This allows production builds to successfully complete even if
        // your project has ESLint errors.
        ignoreDuringBuilds: true,
      },
      env: {
        NEXT_PUBLIC_VERCEL_URL: process.env.VERCEL_URL,
      },
};

export default nextConfig;
