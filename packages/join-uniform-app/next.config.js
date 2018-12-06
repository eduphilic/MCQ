// Add ability to transpile other packages in the monorepo.

// @ts-nocheck
// @ts-ignore
const withTypescript = require("@zeit/next-typescript");
const withTranspileModules = require("next-plugin-transpile-modules");
const webpack = require("webpack");
const path = require("path");

const transpileModules = [
  "@join-uniform/components",
  "@join-uniform/graphql",
  "@join-uniform/theme",
];

module.exports = withTypescript(
  withTranspileModules({
    transpileModules,

    distDir: "../../dist/functions/next",

    publicRuntimeConfig: {
      graphQLUri:
        process.env.GRAPHQL_URI || "https://www.joinuniform.com/graphql",
    },

    webpack(config) {
      config.resolve.alias = {
        ...(config.resolve.alias || {}),

        ...transpileModules.reduce((accumulator, mod) => {
          accumulator[mod] = `${mod}/src`;
          return accumulator;
        }, {}),
      };

      config.plugins.push(
        new webpack.NormalModuleReplacementPlugin(
          /(generated\.server)|(\/src\/typeDefs)/,
          path.resolve(
            __dirname,
            "../join-uniform-graphql/src/generated.server.ignore.ts",
          ),
        ),
      );

      return config;
    },
  }),
);
