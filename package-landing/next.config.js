const withTypescript = require("@zeit/next-typescript");
const withCSS = require("@zeit/next-css");
const withFonts = require("next-fonts");
const withTM = require("@weco/next-plugin-transpile-modules");

module.exports = withTypescript(
  withCSS(
    withFonts(
      withTM({
        transpileModules: ["@material-ui/core"],

        webpack: config => {
          config.resolve.alias = {
            ...config.resolve.alias,

            "@material-ui/core": "@material-ui/core/es",
            "@material-ui/styles": "@material-ui/styles/es",
          };

          return config;
        },
      }),
    ),
  ),
);
