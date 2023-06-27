/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    swcMinify: true,
    optimizeFonts: true,
    images: {
       domains:[
        'files.stripe.com'
       ]
    },
    
}

module.exports = nextConfig
