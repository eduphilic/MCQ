// @ts-check
const path = require("path");
const webpack = require("webpack");
const { findMonorepo } = require("react-dev-utils/workspaceUtils");

/** * @param {webpack.Configuration} defaultConfig */
module.exports = (baseConfig, env, defaultConfig) => {
  const config = defaultConfig;

  // Allow Storybook to transpile packages included from the monorepo.
  const monorepoPackages = findMonorepo(path.resolve(__dirname, "..")).pkgs;
  const babelLoader = config.module.rules.find(
    l => l.loader && l.loader.includes("babel-loader"),
  );
  babelLoader.include.push(...monorepoPackages);

  // Transpile TypeScript.
  config.module.rules.push({
    test: /\.tsx?/,
    include: babelLoader.include,
    exclude: babelLoader.exclude,
    use: [
      {
        loader: babelLoader.loader,
        query: babelLoader.query,
      },
      "ts-loader",
    ],
  });

  return defaultConfig;
};
