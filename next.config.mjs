// next.config.mjs
const isProd = process.env.NODE_ENV === 'production';

const nextConfig = {
    assetPrefix: isProd ? '/frontend/' : '',
    basePath: isProd ? '/frontend' : '',
    trailingSlash: true,
    reactStrictMode: true,
    images: {
        domains: ['imgs.xkcd.com'],
    },
};

export default nextConfig;
