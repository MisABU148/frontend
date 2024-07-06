// next.config.mjs
const isProd = process.env.NODE_ENV === 'production';

const nextConfig = {
    assetPrefix: isProd ? '/frontend/' : '',
    basePath: isProd ? '/frontend' : '',
    trailingSlash: true,
    reactStrictMode: true,
    webpack: (config) => {
        config.module.rules.push({
            test: /\.svg$/,
            use: ["@svgr/webpack"],
        });
        return config;
    }
};

export default nextConfig;
