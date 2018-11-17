import { Configuration, RuleSetLoader } from "webpack";
const webpack: typeof import("webpack") = require("webpack");
const path: typeof import("path") = require("path");

module.exports = (
  _storybookBaseConfig: any,
  _env: any,
  defaultConfig: Configuration,
) => {
  const babelRule = defaultConfig.module!.rules.find(rule =>
    Boolean(rule.test && rule.test.toString() === /\.(mjs|jsx?)$/.toString()),
  );

  if (!babelRule || !babelRule.use || !Array.isArray(babelRule.use)) {
    throw new Error(
      "Could not retrieve Babel rule from Webpack configuration.",
    );
  }

  babelRule.test = /\.(tsx?|mjs|jsx?)$/;
  babelRule.include = [
    path.resolve(__dirname),
    path.resolve(__dirname, "../stories"),
    path.resolve(__dirname, "../../src"),
  ];

  const babelLoader = babelRule.use.find(
    loader => typeof loader === "object" && loader.loader === "babel-loader",
  ) as RuleSetLoader | undefined;

  if (!babelLoader || typeof babelLoader.options !== "object") {
    throw new Error(
      "Could not retrieve Babel loader from Babel rule in Webpack configuration.",
    );
  }

  // Replace Flow preset with TypeScript preset.
  const babelOptions: {
    presets: string[];
  } = babelLoader.options as any;

  babelOptions.presets = babelOptions.presets
    .filter(preset => !preset.includes("preset-flow"))
    .concat(require.resolve("@babel/preset-typescript"));

  defaultConfig.resolve!.extensions!.push(".tsx", ".ts");

  // Adding an environmental variable so that providers supplied as a decorators
  // don't cause an error because they use the React hooks api.
  // https://github.com/storybooks/storybook/issues/4691
  defaultConfig.plugins!.push(
    new webpack.DefinePlugin({
      "process.env.STORYBOOK": JSON.stringify("true"),
    }),
  );

  return defaultConfig;
};
