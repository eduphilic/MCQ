// @ts-check
const path = require("path");
const webpack = require("webpack");
const { findMonorepo } = require("react-dev-utils/workspaceUtils");

/** @param {webpack.Configuration} defaultConfig */
module.exports = (baseConfig, env, defaultConfig) => {
  const config = defaultConfig;

  // Allow Storybook to transpile packages included from the monorepo.
  const monorepoPackages = findMonorepo(path.resolve(__dirname, "..")).pkgs;
  /** @type {webpack.Rule} */
  const babelLoader = config.module.rules.find(
    // @ts-ignore
    l => l.loader && l.loader.includes("babel-loader"),
  );
  // @ts-ignore
  babelLoader.include.push(...monorepoPackages);

  // Transpile TypeScript.
  config.module.rules.push({
    test: /\.tsx?$/,
    include: babelLoader.include,
    exclude: babelLoader.exclude,
    use: ["ts-loader", "react-docgen-typescript-loader"],
  });

  return defaultConfig;
};
