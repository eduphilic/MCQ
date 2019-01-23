/* eslint-disable import/no-extraneous-dependencies, @typescript-eslint/no-var-requires */
const withTypescript = require("@zeit/next-typescript");

module.exports = withTypescript({
  distDir: "dist/functions/.next",
});
