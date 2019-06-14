// @ts-check

// Suppress: Cannot compile namespaces when the '--isolatedModules' flag is provided.ts(1208)
// @ts-ignore
// tslint:disable-next-line no-empty
if (true) {
}

const withTypescript = require("@zeit/next-typescript");
const withCss = require("@zeit/next-css");
const withFonts = require("next-fonts");
const withImages = require("next-images");
const withTM = require("@weco/next-plugin-transpile-modules");

/**
 * @type {import("next-config").NextCustomizedConfig}
 */
module.exports = withTypescript(
  withCss(
    withFonts(
      withSvgr(
        withImages(
          withMaterialUITranspileModules({
            poweredByHeader: false,
          }),
        ),
      ),
    ),
  ),
);

/**
 * @param {import("next-config").NextConfig} nextConfig
 * @return {import("next-config").NextConfig}
 */
function withSvgr(nextConfig = {}) {
  return {
    ...nextConfig,

    webpack(config, options) {
      config.module = config.module || { rules: [] };

      config.module.rules.push({
        test: /\.svg$/,
        use: [
          {
            loader: require.resolve("@svgr/webpack"),
            options: {
              dimensions: false,
            },
          },
        ],
      });

      return nextConfig.webpack ? nextConfig.webpack(config, options) : config;
    },
  };
}

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
  const modules = {
    "@material-ui/core": "es",
    "@material-ui/icons": "esm",
    "@material-ui/styles": "es",
  };

  return withTM({
    ...nextConfig,

    transpileModules: Object.keys(modules).map(
      moduleName => `${moduleName}/es`,
    ),

    webpack: (config, options) => {
      config.resolve = config.resolve || {};

      config.resolve.alias = {
        ...config.resolve.alias,

        ...Object.entries(modules).reduce(
          (accumulator, [moduleName, esDirectory]) => {
            accumulator[moduleName] = `${moduleName}/${esDirectory}`;

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
