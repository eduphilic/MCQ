// @ts-check

// Suppress: Cannot compile namespaces when the '--isolatedModules' flag is provided.ts(1208)
// @ts-ignore
if (true) {
}

const withCss = require("@zeit/next-css");
const withFonts = require("next-fonts");
const withImages = require("next-images");

/**
 * @type {import("next-config").NextCustomizedConfig}
 */
module.exports = withoutTypeChecking(
	withCss(
		withFonts(
			withSvgr(
				withImages({
					poweredByHeader: false,
				}),
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

		env: {
			FIREBASE_CONFIG:
				process.env.SITE_ENVIRONMENT === "production"
					? {
							type: "production",
							apiKey: "",
							authDomain: "",
							databaseURL: "",
							projectId: "",
							storageBucket: "",
							messagingSenderId: "",
							appId: "",
					  }
					: {
							type: "staging",
							apiKey: "AIzaSyDGFumSvAaX6GY6555WeLLUasnkoO-3fEk",
							authDomain: "joinuniformindia-test.firebaseapp.com",
							databaseURL:
								"https://joinuniformindia-test.firebaseio.com",
							projectId: "joinuniformindia-test",
							storageBucket: "joinuniformindia-test.appspot.com",
							messagingSenderId: "31549096619",
							appId: "1:31549096619:web:be9f5a7fbb904c90",
					  },
		},

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
