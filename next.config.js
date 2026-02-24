/** @type {import('next').NextConfig} */
const nextConfig = {
  // Ensure images are properly handled
  images: {
    domains: ['ui-avatars.com'],
    unoptimized: true,
  },
  output: 'export',
  
  // Ensure proper trailing slashes
  trailingSlash: false,
  
  // Ensure proper base path
  basePath: '',
  
  // Optimize for Vercel deployment
  experimental: {
    // Remove optimizeCss as it can cause build hangs
  },
  
  // Ensure proper script loading for tracking
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },
  
  // Optimize build performance
  swcMinify: true,
  
  // Reduce build time
  typescript: {
    ignoreBuildErrors: false,
  },
  
  eslint: {
    ignoreDuringBuilds: false,
  },
}

module.exports = nextConfig
