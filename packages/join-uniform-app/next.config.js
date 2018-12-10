// Add ability to transpile other packages in the monorepo.

// @ts-nocheck
// @ts-ignore
const withTypescript = require("@zeit/next-typescript");
const withTranspileModules = require("next-plugin-transpile-modules");

const transpileModules = [
  "@join-uniform/components",
  "@join-uniform/graphql",
  "@join-uniform/icons",
  "@join-uniform/localization",
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

      return config;
    },
  }),
);
