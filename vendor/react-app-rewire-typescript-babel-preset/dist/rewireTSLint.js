"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_app_rewired_1 = require("react-app-rewired");
var webpackUtils_1 = require("./webpackUtils");
function default_1(c, options) {
    // Validate and narrow type
    var config = webpackUtils_1.getValidatedConfig(c);
    // Grab the current ESLint config so we can copy some of its settings
    var esLintLoader = react_app_rewired_1.getLoader(config.module.rules, esLintLoaderMatcher);
    // Create a new rule
    var tsLintLoader = {
        test: /\.(ts|tsx)$/,
        enforce: "pre",
        use: [
            {
                options: options,
                loader: require.resolve("tslint-loader")
            }
        ],
        include: esLintLoader.include,
        exclude: esLintLoader.exclude
    };
    config.module.rules.unshift(tsLintLoader);
    return config;
}
exports.default = default_1;
var esLintLoaderMatcher = function (rule) {
    return Boolean(rule.test &&
        rule.test.toString() === /\.(js|jsx|mjs)$/.toString() &&
        Array.isArray(rule.use) &&
        rule.use.find(function (r) { return r.loader && /eslint-loader/.test(r.loader); }));
};
