const path = require("path");
const {
  rewireWebpack: rewireTypescript,
  rewireJest: rewireTypescriptJest,
  rewireTSLint,
} = require("react-app-rewire-typescript-babel-preset");
const { getLoader } = require("react-app-rewired");

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

    // @ts-ignore
    const scriptsLoader = getLoader(rewiredConfig.module.rules, rule =>
      Boolean(
        rule.test &&
          rule.test.toString() === /\.(ts|tsx|js|mjs|jsx)$/.toString(),
      ),
    );

    // console.log("scriptsLoader", scriptsLoader);
    // process.exit(0);

    const babelLoader = scriptsLoader;

    // @ts-ignore
    // const babelLoader = getLoader(scriptsLoader.use, rule =>
    //   Boolean(
    //     rule.loader &&
    //       (/babel-loader/.test(rule.loader) ||
    //         /babel-preset-react-app.loader/.test(rule.loader)),
    //   ),
    // );

    // console.log("babelLoader", babelLoader);

    // @ts-ignore
    babelLoader.options.plugins.push([
      "babel-plugin-styled-components",
      { ssr: true },
    ]);

    // process.exit(0);

    // Add Styled Components Babel Plugin
    // rewiredConfig = injectBabelPlugin(
    //   ["babel-plugin-styled-components", { ssr: true }],
    //   rewiredConfig,
    // );

    // Add React Hot Reload
    if (env === "development") {
      // rewiredConfig = injectBabelPlugin(
      //   ["react-hot-loader/babel"],
      //   rewiredConfig,
      // );
      // @ts-ignore
      babelLoader.options.plugins.push(
        require.resolve("react-hot-loader/babel"),
      );
    }

    rewiredConfig.resolve = rewiredConfig.resolve || {};
    rewiredConfig.resolve.modules = rewiredConfig.resolve.modules || [];
    rewiredConfig.resolve.modules.push(path.join(__dirname, "src"));

    return rewiredConfig;
  },
};
