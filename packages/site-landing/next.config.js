/**
 * Override the default Next.js configuration to allow importing source from
 * other packages in the monorepo without first transpiling them.
 *
 * @see https://github.com/zeit/next.js/issues/3018
 * @see https://github.com/wellcometrust/next-plugin-transpile-modules
 */

const path = require("path");

/* eslint-disable import/no-extraneous-dependencies */
const { findMonorepo } = require("react-dev-utils/workspaceUtils");
const withTM = require("@weco/next-plugin-transpile-modules");

const monorepoPackages = findMonorepo(__dirname /* appDir */).pkgs.map(p =>
  path.basename(p),
);

module.exports = withTM({
  transpileModules: monorepoPackages,
});
