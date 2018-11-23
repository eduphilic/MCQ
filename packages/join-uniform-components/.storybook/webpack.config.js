module.exports = (baseConfig, env, defaultConfig) => {
  const scriptRule = defaultConfig.module.rules.find(
    r => r.test.toString() === /\.(mjs|jsx?)$/.toString(),
  );
  scriptRule.test = /\.(mjs|tsx?|jsx?)$/;

  const babelRule = scriptRule.use.find(r => r.loader.includes("babel-loader"));
  const babelOptions = babelRule.options;

  babelOptions.presets = babelOptions.presets.filter(p => !p.includes("flow"));
  babelOptions.presets.push(require.resolve("@babel/preset-typescript"));

  defaultConfig.resolve.extensions.push(".ts", ".tsx");

  return defaultConfig;
};
