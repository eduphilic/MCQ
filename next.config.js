const withTypescript = require("@zeit/next-typescript");
const withFonts = require("next-fonts");
const withCSS = require("@zeit/next-css");
const ShellPlugin = require("webpack-shell-plugin-next");

module.exports = withTypescript(
  withFonts(
    withCSS({
      target: "serverless",
      distDir: "../../dist/frontend",

      // Prevent screen clear after builds.
      webpack(config, { dev, isServer }) {
        if (dev && !isServer) {
          const friendlyErrorsPluginInstance = config.plugins.find(
            plugin => plugin.constructor.name === "FriendlyErrorsWebpackPlugin",
          );
          if (friendlyErrorsPluginInstance) {
            const FriendlyErrorsWebpackPlugin =
              friendlyErrorsPluginInstance.constructor;
            config.plugins = config.plugins.filter(
              plugin => plugin !== friendlyErrorsPluginInstance,
            );
            config.plugins.push(
              new FriendlyErrorsWebpackPlugin({ clearConsole: false }),
            );
          }
        }

        // TODO: Consolidate this logic with the version in the backend Webpack
        // configuration.
        if (dev && !isServer) {
          config.plugins.push(
            new ShellPlugin({
              onBuildEnd: {
                scripts: ["yarn start:webworkers"],
              },
            }),
          );
        }

        return config;
      },
    }),
  ),
);
