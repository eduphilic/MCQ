// Add ability to transpile other packages in the monorepo.

// @ts-nocheck
// @ts-ignore
const withTypescript = require("@zeit/next-typescript");
const withTM = require("next-plugin-transpile-modules");
const path = require("path");

module.exports = withTypescript(
  withTM({
    transpileModules: ["@join-uniform/components"],

    distDir: "../../dist/functions/next",

    webpack(config) {
      config.resolve.alias = {
        ...(config.resolve.alias || {}),
        "@join-uniform/components": "@join-uniform/components/src",
      };

      return config;
    },
  }),
);
