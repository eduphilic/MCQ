// @ts-check

// Suppress: Cannot compile namespaces when the '--isolatedModules' flag is provided.ts(1208)
// @ts-ignore
if (true) {
}

const withTypescript = require("@zeit/next-typescript");
const withCss = require("@zeit/next-css");
const withFonts = require("next-fonts");
const withTM = require("@weco/next-plugin-transpile-modules");

/**
 * @type {import("next-config").NextCustomizedConfig}
 */
module.exports = withTypescript(
  withCss(
    withFonts(
      withMaterialUITranspileModules({
        poweredByHeader: false,
      }),
    ),
  ),
);

/**
 * Use the Material UI modules code for improved tree-shaking. This must be
 * declared as the last Next.js plugin.
 *
 * @param {import("next-config").NextConfig} [nextConfig]
 * @return {import("next-config").NextConfig}
 * @see https://next.material-ui.com/guides/minimizing-bundle-size/#ecmascript
 * @see https://www.npmjs.com/package/@weco/next-plugin-transpile-modules#usage
 */
function withMaterialUITranspileModules(nextConfig = {}) {
  const modules = ["@material-ui/core", "@material-ui/styles"];

  return withTM({
    ...nextConfig,

    transpileModules: modules,

    webpack: (config, options) => {
      config.resolve = config.resolve || {};

      config.resolve.alias = {
        ...config.resolve.alias,

        ...modules.reduce(
          (accumulator, moduleName) => {
            accumulator[moduleName] = `${moduleName}/es`;

            return accumulator;
          },
          /** @type {Record<string, string>} */ ({}),
        ),
      };

      if (typeof nextConfig.webpack === "function") {
        return nextConfig.webpack(config, options);
      }

      return config;
    },
  });
}
