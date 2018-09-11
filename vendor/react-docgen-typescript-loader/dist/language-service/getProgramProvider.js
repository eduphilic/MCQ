"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var updateFileInCache_1 = require("./updateFileInCache");
var path_1 = __importDefault(require("path"));
var webpackInstances = [];
function getProgramProvider(context, options, source, languageServiceProvider) {
    var webpackIndex = webpackInstances.indexOf(context._compiler);
    if (webpackIndex === -1) {
        webpackIndex = webpackInstances.push(context._compiler) - 1;
    }
    var instanceName = webpackIndex + "_docgen";
    var _a = languageServiceProvider({
        instance: instanceName,
        configFile: options.tsconfigPath
            ? path_1.default.basename(options.tsconfigPath)
            : undefined,
        compilerOptions: options.compilerOptions
            ? options.compilerOptions
            : undefined,
    }, context.context, context.resourcePath), instance = _a.instance, error = _a.error;
    if (error) {
        throw new Error(error.message);
    }
    if (!instance) {
        throw new Error("Could not retrieve language service instance");
    }
    updateFileInCache_1.updateFileInCache(context.resourcePath, source, instance);
    return function () { return instance.program; };
}
exports.getProgramProvider = getProgramProvider;
