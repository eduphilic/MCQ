const withTypescript = require("@zeit/next-typescript");

module.exports = withTypescript({
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

    return config;
  },
});
