module.exports = {
  distDir: 'dist',
  images: {
    domains: ['placeimg.com'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
  },
  webpack: (config, options) => {
    config.module.rules.push({
      test: /\.svg$/,
      use: 'raw-loader',
    });

    return config;
  },
};
