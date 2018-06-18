/* tslint:disable:object-literal-sort-keys */
const path = require("path");
const {
  rewireWebpack: rewireTypescript,
  rewireJest: rewireTypescriptJest,
  rewireTSLint,
} = require("react-app-rewire-typescript-babel-preset");
const { injectBabelPlugin } = require("react-app-rewired");

module.exports = {
  /**
   * @param {import("webpack").Configuration} config
   * @param {"development" | "production" | "testing"} env
   * @returns {import("webpack").Configuration}
   */
  webpack: function(config, env) {
    // Add TypeScript Babel Preset
    let rewiredConfig = rewireTypescript(config);
    rewiredConfig = rewireTSLint(rewiredConfig);

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
  /**
   * @param {object} config
   */
  jest: function(config) {
    return rewireTypescriptJest(config);
  },
};
