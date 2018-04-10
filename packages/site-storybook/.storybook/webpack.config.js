const path = require("path");
const { findMonorepo } = require("react-dev-utils/workspaceUtils");

module.exports = (baseConfig, env, defaultConfig) => {
  const config = defaultConfig;

  // Allow Storybook to transpile packages included from the monorepo.
  const monorepoPackages = findMonorepo(path.resolve(__dirname, "..")).pkgs;
  const babelLoader = config.module.rules.find(
    l => l.loader && l.loader.includes("babel-loader"),
  );
  babelLoader.include.push(...monorepoPackages);

  return defaultConfig;
};
