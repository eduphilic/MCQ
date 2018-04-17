const path = require("path");
const webpack = require("webpack");
const { findMonorepo } = require("react-dev-utils/workspaceUtils");

module.exports = (baseConfig, env, defaultConfig) => {
  const config = defaultConfig;

  // Allow Storybook to transpile packages included from the monorepo.
  const monorepoPackages = findMonorepo(path.resolve(__dirname, "..")).pkgs;
  const babelLoader = config.module.rules.find(
    l => l.loader && l.loader.includes("babel-loader"),
  );
  babelLoader.include.push(...monorepoPackages);

  // Add SVG React component support like Create React App.
  babelLoader.query.plugins.unshift([
    "babel-plugin-named-asset-import",
    {
      loaderMap: {
        svg: {
          ReactComponent: "svgr/webpack![path]",
        },
      },
    },
  ]);

  // Transpile TypeScript.
  config.module.rules.push({
    test: /\.tsx?$/,
    include: babelLoader.include,
    exclude: babelLoader.exclude,
    use: [
      {
        loader: babelLoader.loader,
        query: babelLoader.query,
      },
      "ts-loader",
      {
        loader: "react-docgen-typescript-loader",
        options: {
          includes: ["components.*\\.tsx$"],
          excludes: ["stories\\.tsx$"],
        },
      },
    ],
  });
  config.resolve.extensions.push(".ts", ".tsx");

  return defaultConfig;
};
