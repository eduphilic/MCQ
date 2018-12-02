// Add ability to transpile other packages in the monorepo.

// @ts-nocheck
// @ts-ignore
const withTypescript = require("@zeit/next-typescript");
const withTM = require("next-plugin-transpile-modules");
const path = require("path");

const transpileModules = ["@join-uniform/components", "@join-uniform/theme"];

module.exports = withTypescript(
  withTM({
    transpileModules,

    distDir: "../../dist/functions/next",

    webpack(config) {
      config.resolve.alias = {
        ...(config.resolve.alias || {}),

        ...transpileModules.reduce((accumulator, mod) => {
          accumulator[mod] = `${mod}/src`;
          return accumulator;
        }, {}),
      };

      return config;
    },
  }),
);
