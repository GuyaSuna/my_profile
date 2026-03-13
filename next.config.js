/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production';

const nextConfig = {
    output: "export",
    reactStrictMode: true,
    basePath: isProd ? '/my_profile' : '',
    assetPrefix: isProd ? '/my_profile/' : '',
    trailingSlash: true,
    images: {
        unoptimized: true
    }
};

module.exports = nextConfig
