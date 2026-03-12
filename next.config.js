/** @type {import('next').NextConfig} */
const nextConfig = {
    output: "export",
    reactStrictMode: true,
    basePath: '/my_profile',
    assetPrefix: '/my_profile/',
    trailingSlash: true,
    images: {
        unoptimized: true
    }
};

module.exports = nextConfig
