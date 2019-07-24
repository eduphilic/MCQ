module.exports = {
	presets: ["next/babel"],
	plugins: [
		[
			"babel-plugin-styled-components",
			{
				ssr: true,
				pure: true,
			},
		],
	],
	env: {
		test: {
			plugins: ["require-context-hook"],
		},
	},
};
