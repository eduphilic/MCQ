const path = require("path");
const {
  rewireWebpack: rewireTypescript,
  rewireJest: rewireTypescriptJest,
} = require("react-app-rewire-typescript-babel-preset");
const { injectBabelPlugin } = require("react-app-rewired");

module.exports = {
  webpack: function(config, env) {
    // Add TypeScript Babel Preset
    let rewiredConfig = rewireTypescript(config);

    // Add Styled Components Babel Plugin
    rewiredConfig = injectBabelPlugin(
      ["babel-plugin-styled-components", { ssr: true }],
      rewiredConfig,
    );

    // Add React Hot Reload
    rewiredConfig = injectBabelPlugin(
      ["react-hot-loader/babel"],
      rewiredConfig,
    );

    // Add monorepo path aliases, done because each package has a subdirectory
    // named "src". Using the settings from tsconfig.json so the settings can be
    // reused both in the Create React App setup and Storybook.
    const tsconfigJson = require("../../tsconfig.json");
    const alias = Object.entries(tsconfigJson.compilerOptions.paths).reduce(
      (acc, [package, mapping]) => {
        package = package.replace("/*", "");
        if (acc[package]) return acc;

        acc[package] = `${package}/src`;
        return acc;
      },
      {},
    );
    alias.components = path.resolve(__dirname, "src/components");
    rewiredConfig.resolve.alias = {
      ...rewiredConfig.resolve.alias,
      ...alias,
    };

    return rewiredConfig;
  },
  jest: function(config) {
    return rewireTypescriptJest(config);
  },
};
