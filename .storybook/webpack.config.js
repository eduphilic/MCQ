// @ts-nocheck
// @ts-ignore
const path = require("path");

// TODO: Remove this hack after react-scripts gains official Babel 7 release.
const oldArgs = [...process.argv];
process.argv = [...oldArgs, "--scripts-version", "@strothj/react-scripts"];
const reactAppRewired = require("react-app-rewired");
process.argv = oldArgs;

const overrides = require("react-app-rewired/config-overrides");
const reactScriptsConfig = require(path.join(
  reactAppRewired.paths.scriptVersion,
  "config/webpack.config.dev",
));
const {
  getLanguageServiceInstance,
} = require("react-docgen-typescript-language-service");

module.exports = (baseConfig, env, defaultConfig) => {
  // Retrieve the Webpack config from Create React App with the modifications
  // applied from /config-overrides.js.
  const rewiredReactScriptsConfig = overrides.webpack(
    reactScriptsConfig,
    env === "PRODUCTION" ? "production" : "development",
  );
  const config = defaultConfig;

  // Remove Babel 6 loader.
  config.module.rules = config.module.rules.filter(
    r => /\.jsx?$/.toString() !== r.test.toString(),
  );

  // Locate the Babel 7 loader configuration from the rewired configuration.
  // Create React App's Babel 7 loader was adjusted to add TypeScript support
  // using react-app-rewired. We're using this in place of Storybook's Babel 6
  // version which doesn't support TypeScript.
  const scriptLoader = reactAppRewired.getLoader(
    rewiredReactScriptsConfig.module.rules,
    scriptLoaderMatcher,
  );
  scriptLoader.include.push(__dirname); // Transpile Storybook config directory.

  // Use a different cache directory than that of Create React App so they don't
  // overwrite each other's caches.
  const babelLoader = scriptLoader.use.find(
    l => l.loader && l.loader.includes("babel"),
  );
  babelLoader.options.cacheDirectory = path.resolve(
    __dirname,
    "../node_modules/.cache/babel-loader-storybook",
  );

  // Remove thread-loader to fix issue with continuos integration server.
  scriptLoader.use = scriptLoader.use.filter(
    l => !/thread\-loader/.test(l.loader),
  );

  // Add loader to add documentation for component props.
  const scriptLoaderLoaders = scriptLoader.use;
  scriptLoader.use = undefined;
  scriptLoader.oneOf = [
    {
      test: /components.*\.tsx?$/,
      use: [
        ...scriptLoaderLoaders,
        {
          loader: require.resolve("react-docgen-typescript-loader"),
          options: {
            experimentalLanguageServiceProvider: getLanguageServiceInstance,
          },
        },
      ],
    },
    {
      use: scriptLoaderLoaders,
    },
  ];

  config.module.rules.unshift(scriptLoader);
  config.resolve = rewiredReactScriptsConfig.resolve;

  return config;
};

// This snippet locates the loader responsible for adding the Babel in the
// Webpack config. It is taken from the source code of
// react-app-rewire-typescript-babel-preset.
function scriptLoaderMatcher(rule) {
  return (
    rule.test &&
    rule.test.toString() === /\.(ts|tsx|js|jsx|mjs)$/.toString() &&
    Array.isArray(rule.use) &&
    rule.use.find(r => r.loader && /babel-loader/.test(r.loader))
  );
}
