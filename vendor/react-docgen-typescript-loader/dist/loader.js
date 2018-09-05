"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// TODO: Import from "react-docgen-typescript" directly when
// https://github.com/styleguidist/react-docgen-typescript/pull/104 is hopefully
// merged in. Will be considering to make a peer dependency as that point.
var parser_js_1 = require("react-docgen-typescript/lib/parser.js");
var validateOptions_1 = __importDefault(require("./validateOptions"));
var generateDocgenCodeBlock_1 = __importDefault(require("./generateDocgenCodeBlock"));
var loader_utils_1 = require("loader-utils");
var path_1 = __importDefault(require("path"));
var updateFileInCache_1 = require("./updateFileInCache");
// * webpackIndex = webpackInstances.push(loader._compiler) - 1;
//      *
//      * const instanceName = webpackIndex + '_' + (loaderOptions.instance || 'default');
//      *
var webpackInstances = [];
function loader(source) {
    var callback = this.async();
    if (!callback) {
        throw new Error("Expected loader to operate in asynchronous mode.");
    }
    processResource(this, source).then(function (newSource) { return callback(null, newSource); }, function (error) { return callback(error); });
}
exports.default = loader;
function processResource(context, source) {
    return __awaiter(this, void 0, void 0, function () {
        var options, parserOptions, parser, componentDocs, languageServiceProvider, webpackIndex, instanceName, _a, instance_1, error;
        return __generator(this, function (_b) {
            // Mark the loader as being cacheable since the result should be
            // deterministic.
            context.cacheable(true);
            options = loader_utils_1.getOptions(context) || {};
            validateOptions_1.default(options);
            options.docgenCollectionName =
                options.docgenCollectionName || "STORYBOOK_REACT_CLASSES";
            if (typeof options.setDisplayName !== "boolean") {
                options.setDisplayName = true;
            }
            parserOptions = {
                propFilter: options.skipPropsWithName || options.skipPropsWithoutDoc
                    ? {
                        skipPropsWithName: options.skipPropsWithName || undefined,
                        skipPropsWithoutDoc: options.skipPropsWithoutDoc || undefined,
                    }
                    : options.propFilter,
            };
            parser = parser_js_1.withDefaultConfig(parserOptions);
            if (options.tsconfigPath) {
                parser = parser_js_1.withCustomConfig(options.tsconfigPath, parserOptions);
            }
            else if (options.compilerOptions) {
                parser = parser_js_1.withCompilerOptions(options.compilerOptions, parserOptions);
            }
            componentDocs = null;
            if (options.experimentalLanguageServiceProvider) {
                languageServiceProvider = options.experimentalLanguageServiceProvider;
                webpackIndex = webpackInstances.indexOf(context._compiler);
                if (webpackIndex === -1) {
                    webpackIndex = webpackInstances.push(context._compiler) - 1;
                }
                instanceName = webpackIndex + "_docgen";
                _a = languageServiceProvider({
                    instance: instanceName,
                    configFile: options.tsconfigPath
                        ? path_1.default.basename(options.tsconfigPath)
                        : undefined,
                    compilerOptions: options.compilerOptions
                        ? options.compilerOptions
                        : undefined,
                }, context.context, context.resourcePath), instance_1 = _a.instance, error = _a.error;
                if (error) {
                    throw new Error(error.message);
                }
                if (!instance_1) {
                    throw new Error("Could not retrieve language service instance");
                }
                updateFileInCache_1.updateFileInCache(context.resourcePath, source, instance_1);
                componentDocs = parser.parse(context.resourcePath, function () { return instance_1.program; });
            }
            if (componentDocs === null) {
                componentDocs = parser.parse(context.resourcePath);
            }
            // Return amended source code if there is docgen information available.
            if (componentDocs.length) {
                return [2 /*return*/, generateDocgenCodeBlock_1.default({
                        filename: context.resourcePath,
                        source: source,
                        componentDocs: componentDocs,
                        docgenCollectionName: options.docgenCollectionName,
                        setDisplayName: options.setDisplayName,
                    })];
            }
            // Return unchanged source code if no docgen information was available.
            return [2 /*return*/, source];
        });
    });
}
