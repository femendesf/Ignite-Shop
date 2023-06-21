/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'files.stripe.com',
            port: '3000/',
            pathname: '/**',
          },
        ],
      },
}

module.exports = nextConfig
