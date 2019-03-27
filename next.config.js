const withTypescript = require("@zeit/next-typescript");
const withFonts = require("next-fonts");
const withCSS = require("@zeit/next-css");

module.exports = withTypescript(
  withFonts(
    withCSS(
      withSharedWorkers({
        target: "serverless",
        distDir: "../../dist/frontend",

        webpack(config) {
          return config;
        },
      }),
    ),
  ),
);

// Add support for SharedWebWorker.
// https://github.com/zeit/next-plugins/blob/master/packages/next-workers/index.js
// https://github.com/webpack-contrib/worker-loader/pull/178
function withSharedWorkers(nextConfig = {}) {
  return {
    ...nextConfig,

    webpack(config, options) {
      config.module.rules.push({
        test: /\.shared-worker\.ts$/,
        loader: require.resolve("worker-loader"),
        options: {
          name: "static/[hash].shared-worker.js",
          publicPath: "/_next/",
          isSharedWorker: true,
        },
      });

      if (nextConfig.webpack) return nextConfig.webpack(config, options);
      return config;
    },
  };
}
