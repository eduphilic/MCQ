"use strict";
var __importDefault =
  (this && this.__importDefault) ||
  function(mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, "__esModule", { value: true });
var path_1 = __importDefault(require("path"));
var paths_1 = __importDefault(require("@strothj/react-scripts/config/paths"));
var react_app_rewired_1 = require("react-app-rewired");
var webpackUtils_1 = require("./webpackUtils");
// Switch out the entry point index.js for index.tsx.
// We need to do this on module import to intercept react-script's preflight
// module check.
paths_1.default.appIndexJs = paths_1.default.appIndexJs.replace(
  /src[\\\/]index.js$/,
  "src" + path_1.default.sep + "index.tsx",
);
function default_1(c) {
  // Validate and narrow type
  var config = webpackUtils_1.getValidatedConfig(c);
  config.resolve.extensions.unshift(".web.ts", ".web.tsx", ".ts", ".tsx");
  // Locate the Webpack loader responsible for handling Javascript assets and
  // add TypeScript file extensions.
  var scriptLoader = react_app_rewired_1.getLoader(
    config.module.rules,
    scriptsLoaderMatcher,
  );
  if (!scriptLoader) throw new Error("Unable to locate scripts loader.");
  scriptLoader.test = /\.(ts|tsx|js|jsx|mjs)$/;
  // Replace the babel-preset-react-app preset with the preset rewire from this
  // package. This is done so @babel/preset-flow can be removed.
  var babelLoader = react_app_rewired_1.getBabelLoader(config.module.rules);
  if (!babelLoader || !babelLoader.options)
    throw new Error("Unable to locate Babel loader.");
  babelLoader.options.presets = [
    path_1.default.resolve(__dirname, "rewirePreset"),
  ];
  // Older versions of react-scripts v2 use a Webpack loader to add support for
  // SVGs as React components. Later versions do this using a Babel plugin.
  // Check if it is present. If it is, replace the preset in the SVG loader's
  // sibling Babel loader.
  var svgLoader = react_app_rewired_1.getLoader(
    config.module.rules,
    svgLoaderMatcher,
  );
  if (svgLoader) {
    if (!("use" in svgLoader) || !Array.isArray(svgLoader.use))
      throw new Error("Unexpected layout for SVG loader.");
    var svgBabelLoader = svgLoader.use.find(function(l) {
      return /babel-loader/.test(l.loader);
    });
    if (
      !svgBabelLoader ||
      typeof svgBabelLoader !== "object" ||
      !("options" in svgBabelLoader) ||
      svgBabelLoader.options == null
    )
      throw new Error("Unable to locate sibling Babel loader in SVG loader.");
    if (typeof svgBabelLoader.options === "string")
      throw new Error("Unexpected layout for SVG loader.");
    svgBabelLoader.options.presets = babelLoader.options.presets;
  }
  return config;
}
exports.default = default_1;
// Matcher to find JavaScript/JSX loader using getLoader util from
// react-app-rewired. We need to able to locate the script loader to change the
// regular expression for its file name matching.
var scriptsLoaderMatcher = function(rule) {
  return Boolean(
    rule.test &&
      rule.test.toString() === /\.(js|jsx|mjs)$/.toString() &&
      Array.isArray(rule.use) &&
      rule.use.find(function(r) {
        return r.loader && /babel-loader/.test(r.loader);
      }),
  );
};
// The SVG loader will also need adjusting due to its use of the same preset as
// mentioned above.
var svgLoaderMatcher = function(rule) {
  return Boolean(
    rule.test &&
      rule.test.toString() === /\.svg$/.toString() &&
      Array.isArray(rule.use) &&
      rule.use &&
      rule.use.find(function(r) {
        return r.loader && /babel-loader/.test(r.loader);
      }),
  );
};
