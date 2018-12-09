// @ts-nocheck

// @ts-ignore
const fs = require("fs");
const path = require("path");
const webpack = require("webpack");

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

  defaultConfig.plugins.push(
    new webpack.DefinePlugin({
      "process.env.TRANSLATIONS": JSON.stringify(loadLocalizationStrings()),
    }),
  );

  return defaultConfig;
};

function loadLocalizationStrings() {
  try {
    const firebaseTemplate = JSON.parse(
      fs.readFileSync(
        path.resolve(
          __dirname,
          "../../../config/firebase-remote-config-template.json",
        ),
        "utf8",
      ),
    );
    const translations = JSON.parse(
      firebaseTemplate.parameters.translations.defaultValue.value,
    );
    const localizationStrings = Object.keys(translations).reduce(
      (accumulator, key) => {
        accumulator.en[key] = translations[key].en;
        return accumulator;
      },
      { en: {} },
    );
    return localizationStrings;
  } catch (e) {
    // tslint:disable-next-line
    console.warn(e);
    return { en: {} };
  }
}
