const path = require("path");
const {
  rewireWebpack: rewireTypescript,
  rewireJest: rewireTypescriptJest,
  rewireTSLint,
} = require("react-app-rewire-typescript-babel-preset");
const { injectBabelPlugin } = require("react-app-rewired");

module.exports = {
  /**
   * @param {object} config
   */
  jest: function(config) {
    return rewireTypescriptJest(config);
  },

  /**
   * @param {import("webpack").Configuration} config
   * @param {"development" | "production" | "testing"} env
   * @returns {import("webpack").Configuration}
   */
  webpack: function(config, env) {
    // Add TypeScript Babel Preset
    let rewiredConfig = rewireTypescript(config);

    // Integrate TSLint into terminal output while not running in continuous
    // integration. On Circle CI, this results in an EPIPE error.
    if (!process.env.CI) {
      rewiredConfig = rewireTSLint(rewiredConfig);
    }

    // Add Styled Components Babel Plugin
    rewiredConfig = injectBabelPlugin(
      ["babel-plugin-styled-components", { ssr: true }],
      rewiredConfig,
    );

    // Add React Hot Reload
    if (env === "development") {
      rewiredConfig = injectBabelPlugin(
        ["react-hot-loader/babel"],
        rewiredConfig,
      );
    }

    rewiredConfig.resolve = rewiredConfig.resolve || {};
    rewiredConfig.resolve.modules = rewiredConfig.resolve.modules || [];
    rewiredConfig.resolve.modules.push(path.join(__dirname, "src"));

    return rewiredConfig;
  },
};
