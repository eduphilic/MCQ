"use strict";
var __assign =
  (this && this.__assign) ||
  Object.assign ||
  function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];
      for (var p in s)
        if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
    }
    return t;
  };
var __importDefault =
  (this && this.__importDefault) ||
  function(mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, "__esModule", { value: true });
var fs_1 = __importDefault(require("fs"));
var path_1 = __importDefault(require("path"));
var paths_1 = __importDefault(require("@strothj/react-scripts/config/paths"));
// Replace the custom Babel transform in react-scripts with the one from this
// package. We do this to force the use of a preset with TypeScript support.
var replaceBabelTransform = function(settingValue) {
  return /babelTransform\.js/.test(settingValue)
    ? path_1.default.resolve(__dirname, "rewireBabelTransform.js")
    : settingValue;
};
var rewireJest = function(config) {
  var settingKeys = Object.keys(config);
  var _loop_1 = function(i) {
    var setting = config[settingKeys[i]];
    if (Array.isArray(setting)) {
      // Replace file extensions in setting arrays.
      for (var j = 0; j < setting.length; j += 1) {
        setting[j] = setting[j].replace("js,jsx,mjs", "ts,tsx,js,jsx,mjs");
        setting[j] = setting[j].replace("js|jsx|mjs", "ts|tsx|js|jsx|mjs");
      }
    } else if (typeof setting === "object") {
      // Replace file extensions in keys of setting dictionaries.
      var settingObj_1 = {};
      Object.keys(setting).forEach(function(settingObjKey) {
        var newSettingsObjKey = settingObjKey.replace(
          "js|jsx|mjs",
          "ts|tsx|js|jsx|mjs",
        );
        var newSettingValue = replaceBabelTransform(setting[settingObjKey]);
        // @ts-ignore
        settingObj_1[newSettingsObjKey] = newSettingValue;
      });
      config[settingKeys[i]] = settingObj_1;
    }
  };
  /* tslint:disable-next-line */
  for (var i = 0; i < settingKeys.length; i += 1) {
    _loop_1(i);
  }
  config.moduleFileExtensions.push("ts", "tsx", "web.ts");
  // tslint:disable-next-line:no-parameter-reassignment
  config = rewireSetupTestFrameworkScriptFile(config);
  return config;
};
// We reimplement the logic from "createJestConfig.js" so we can use
// "/src/setupTests.ts" . If no TypeScript version is available, we look for
// "/src/setupTests.js".
//
// ref: create-react-app/packages/react-scripts/scripts/utils/createJestConfig.js
// ```
// // Use this instead of `paths.testsSetup` to avoid putting
// // an absolute filename into configuration after ejecting.
// const setupTestsFile = fs.existsSync(paths.testsSetup)
//   ? '<rootDir>/src/setupTests.js'
//   : undefined;
// ```
function rewireSetupTestFrameworkScriptFile(config) {
  // ref: create-react-app/packages/react-scripts/config/paths.js
  // > testsSetup: resolveApp('src/setupTests.js'),
  var setupTestsFile = [
    // Check for TypeScript version of setupTests first.
    [
      paths_1.default.testsSetup.replace(/\.js$/, ".ts"),
      "<rootDir>/src/setupTests.ts",
    ],
    // Use Javascript version if TypeScript version is not present.
    [paths_1.default.testsSetup, "<rootDir>/src/setupTests.js"],
  ].reduce(function(acc, _a) {
    var filePath = _a[0],
      settingsValue = _a[1];
    if (acc) return acc;
    return fs_1.default.existsSync(filePath) ? settingsValue : undefined;
  }, undefined);
  return __assign({}, config, { setupTestFrameworkScriptFile: setupTestsFile });
}
exports.default = rewireJest;
