// This file needs to be named: "babel.config.js" to support the monorepo setup:
// https://github.com/martpie/next-plugin-transpile-modules/issues/1#issuecomment-427749256

// @ts-ignore
module.exports = api => {
  api.cache(true);
  const presets = ["next/babel", "@zeit/next-typescript/babel"];
  const plugins = ["styled-components", "graphql-tag"];

  return { presets, plugins };
};
