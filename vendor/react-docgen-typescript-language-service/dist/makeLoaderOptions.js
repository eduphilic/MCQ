"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Because we're making use of a submodule in ts-loader, we need to initialize
 * the LoaderOptions object. We customize it here to suit the needs of this
 * library.
 *
 * @param options Configurable options from consuming library.
 * @see https://github.com/TypeStrong/ts-loader
 * @see https://github.com/TypeStrong/ts-loader/blob/master/src/index.ts
 * @see https://github.com/TypeStrong/ts-loader/blob/master/src/interfaces.ts
 */
function makeLoaderOptions(options) {
    var loaderOptions = {
        silent: typeof options.silent !== "boolean" ? true : options.silent,
        logLevel: (typeof options.logLevel !== "string"
            ? "warn"
            : "warn").toUpperCase(),
        logInfoToStdOut: typeof options.logInfoToStdOut !== "boolean"
            ? false
            : options.logInfoToStdOut,
        instance: options.instance,
        compiler: "typescript",
        configFile: typeof options.configFile !== "string"
            ? "tsconfig.json"
            : options.configFile,
        context: options.context,
        transpileOnly: false,
        ignoreDiagnostics: [],
        reportFiles: [],
        errorFormatter: undefined,
        onlyCompileBundledFiles: false,
        colors: typeof options.colors !== "boolean" ? true : options.colors,
        compilerOptions: typeof options.compilerOptions !== "object"
            ? {}
            : options.compilerOptions,
        appendTsSuffixTo: [],
        appendTsxSuffixTo: [],
        happyPackMode: false,
        getCustomTransformers: undefined,
        experimentalWatchApi: true,
        allowTsInNodeModules: false,
    };
    return loaderOptions;
}
exports.makeLoaderOptions = makeLoaderOptions;
