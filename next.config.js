// @ts-check

// Suppress: Cannot compile namespaces when the '--isolatedModules' flag is provided.ts(1208)
// @ts-ignore
if (true) {
}

const withCss = require("@zeit/next-css");
const withFonts = require("next-fonts");
const withImages = require("next-images");
const withBundleAnalyzer = require("@next/bundle-analyzer")({
	enabled: process.env.ANALYZE === "true",
});

/**
 * @type {import("next-config").NextConfig}
 */
module.exports = withoutTypeChecking(
	withPolyfills(
		withCss(
			withFonts(
				withSvgr(
					withBundleAnalyzer(
						withImages({
							poweredByHeader: false,
							distDir: "dist",
						}),
					),
				),
			),
		),
	),
);

// #region Custom Plugins
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

			return nextConfig.webpack
				? nextConfig.webpack(config, options)
				: config;
		},
	};
}

/**
 * Disables build time type checking.
 *
 * @param {import("next-config").NextConfig} nextConfig
 * @return {import("next-config").NextConfig}
 * @see https://github.com/zeit/next.js/issues/7687#issuecomment-506440999
 * @see https://github.com/zeit/next.js/issues/7848
 */
function withoutTypeChecking(nextConfig = {}) {
	return {
		...nextConfig,

		webpack(config, options) {
			config.plugins = config.plugins || [];
			config.plugins = config.plugins.filter(
				plugin =>
					plugin.constructor.name !== "ForkTsCheckerWebpackPlugin",
			);

			return nextConfig.webpack
				? nextConfig.webpack(config, options)
				: config;
		},
	};
}

/**
 * Adds required polyfills.
 *
 * @param {import("next-config").NextConfig} nextConfig
 * @return {import("next-config").NextConfig}
 * @see https://nextjs.org/docs#browser-support
 * @see https://github.com/zeit/next.js/tree/canary/examples/with-polyfills
 */
function withPolyfills(nextConfig = {}) {
	return {
		...nextConfig,

		webpack(config, options) {
			/** @type {() => Promise<Record<string, string[]>>} */
			// @ts-ignore
			const originalEntry = config.entry;

			config.entry = async () => {
				const entries = await originalEntry();

				if (
					entries["main.js"] &&
					!entries["main.js"].includes("./lib/polyfills.ts")
				) {
					entries["main.js"].unshift("./lib/polyfills.ts");
				}

				return entries;
			};

			return nextConfig.webpack
				? nextConfig.webpack(config, options)
				: config;
		},
	};
}
// #endregion
