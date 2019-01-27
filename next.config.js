/* eslint-disable import/no-extraneous-dependencies, @typescript-eslint/no-var-requires */
const withTypescript = require("@zeit/next-typescript");

module.exports = withTypescript({
  distDir: "dist/functions/.next",

  // Prevent screen clear after builds.
  /* eslint-disable no-param-reassign */
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

    return config;
  },
  /* eslint-enable no-param-reassign */
});
