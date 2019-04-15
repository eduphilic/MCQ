// @ts-nocheck

// @ts-ignore
const fs = require("fs");
const path = require("path");

// prettier-ignore
const monorepoPackages = {
  "@join-uniform/icons": path.resolve(__dirname, "../../join-uniform-icons/src"),
  "@join-uniform/localization": path.resolve(__dirname, "../../join-uniform-localization/src"),
  "@join-uniform/theme": path.resolve(__dirname, "../../join-uniform-theme/src"),
};

module.exports = (baseConfig, env, defaultConfig) => {
  const scriptRule = defaultConfig.module.rules.find(
    r => r.test.toString() === /\.(mjs|jsx?)$/.toString(),
  );
  scriptRule.test = /\.(mjs|tsx?|jsx?)$/;
  scriptRule.include.push(...Object.values(monorepoPackages));

  const babelRule = scriptRule.use.find(r => r.loader.includes("babel-loader"));
  const babelOptions = babelRule.options;

  babelOptions.presets = babelOptions.presets.filter(p => !p.includes("flow"));
  babelOptions.presets.push(require.resolve("@babel/preset-typescript"));
  babelOptions.plugins = babelOptions.plugins || [];
  babelOptions.plugins.push(require.resolve("babel-plugin-styled-components"));

  defaultConfig.resolve.extensions.push(".ts", ".tsx");

  defaultConfig.resolve = defaultConfig.resolve || {};
  defaultConfig.resolve.alias = defaultConfig.resolve.alias || {};
  defaultConfig.resolve.alias = {
    ...defaultConfig.resolve.alias,

    ...monorepoPackages,
  };

  return defaultConfig;
};
