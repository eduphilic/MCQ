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
  distDir: "dist",
  transpileModules: monorepoPackages,
  /* eslint-disable-next-line no-use-before-define */
  webpack: withStyledComponentsPlugin,
});

/**
 * Add Styled Components Babel plugin to Babel Loader. Set the plugin as the
 * first plugin to run per the documentation.
 *
 * @see https://www.styled-components.com/docs/tooling#usage
 */
function withStyledComponentsPlugin(config) {
  config.module.rules.forEach(l => {
    if (l.loader === "hot-self-accept-loader") return;

    const loader = l.use || l.loader;
    if (
      loader.options.plugins.find(
        p => Array.isArray(p) && p.includes("babel-plugin-styled-components"),
      )
    )
      return;

    loader.options.plugins.unshift([
      "babel-plugin-styled-components",
      { ssr: true },
    ]);
  });

  return config;
}
