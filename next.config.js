const myAlias = require("./alias");
const withCSS = require("@zeit/next-css");
const { parsed: localEnv } = require("dotenv").config();
const webpack = require("webpack");
const optimizedImages = require("next-optimized-images");
const withPlugins = require("next-compose-plugins");

const nextConfig = {
  webpack: (config, options) => {
    const { alias } = config.resolve;

    config.plugins.push(new webpack.EnvironmentPlugin(localEnv));
    config.resolve.alias = {
      ...alias,
      ...myAlias,
    };
    config.module.rules.push({
      test: /\.svg$/,
      issuer: {
        test: /\.(js|ts)x?$/,
      },
      use: ["@svgr/webpack"],
    });

    return config;
  },
};

module.exports = withPlugins([
  [
    optimizedImages,
    {
      handleImages: ["jpeg", "png"],
    },
  ],
  withCSS,
  nextConfig,
]);
