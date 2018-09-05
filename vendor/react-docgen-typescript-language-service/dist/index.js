"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var makeLoaderOptions_1 = require("./makeLoaderOptions");
var tsLoader_1 = require("./tsLoader");
var getTypeScriptInstance = tsLoader_1.instances.getTypeScriptInstance;
function getLanguageServiceInstance(languageServiceOptions, 
/**
 * The directory of the module. Can be used as context for resolving other stuff.
 */
webpackContext, 
/**
 * The resource file.
 * eg: "/abc/resource.js"
 */
webpackResourcePath) {
    var loaderOptions = makeLoaderOptions_1.makeLoaderOptions(languageServiceOptions);
    var createProxy = function (name, target) {
        return new Proxy(target, {
            get: function (target, property) {
                if (!target.hasOwnProperty(property)) {
                    throw new Error("[get] Untrapped field in " + name + ": " + property.toString());
                }
                return target[property];
            },
        });
    };
    var webpack = {
        _compiler: {
            options: createProxy("webpack._compiler.options", {
                resolve: createProxy("webpack._compiler.options.resolve", {}),
            }),
            hooks: createProxy("webpack._compiler.hooks", {
                afterCompile: { tapAsync: function () { } },
                watchRun: { tapAsync: function () { } },
            }),
        },
        context: webpackContext,
        resourcePath: webpackResourcePath,
    };
    var webpackProxy = createProxy("webpack", webpack);
    return getTypeScriptInstance(loaderOptions, webpackProxy);
}
exports.getLanguageServiceInstance = getLanguageServiceInstance;
