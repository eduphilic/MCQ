const {
  rewireWebpack: rewireTypescript,
  rewireJest: rewireTypescriptJest,
} = require("react-app-rewire-typescript-babel-preset");
const { injectBabelPlugin } = require("react-app-rewired");

module.exports = {
  webpack: function(config, env) {
    // Add TypeScript Babel Preset
    let rewiredConfig = rewireTypescript(config);

    // Add React Hot Reload
    rewiredConfig = injectBabelPlugin(
      ["react-hot-loader/babel"],
      rewiredConfig,
    );

    return rewiredConfig;
  },
  jest: function(config) {
    return rewireTypescriptJest(config);
  },
};
