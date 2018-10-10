import { findMonorepo } from "@join-uniform/lib-build-tools";
import assert from "assert";
import path from "path";
import { Configuration, RuleSetLoader, RuleSetRule } from "webpack";

export default function(
  _baseConfig: Configuration,
  _env: "DEVELOPMENT" | "PRODUCTION",
  defaultConfig: Configuration,
): Configuration {
  const scriptRule = getScriptRule(defaultConfig);

  // Allow transpiling of source files from source directory of monorepo
  // packages directly. With this we can import uncompiled source directly
  // from monorepo packages.
  addMonorepoSourcePathsToScriptRule(scriptRule);

  const babelOptions = getBabelLoaderOptions(scriptRule);

  // Add TypeScript support.
  scriptRule.test = /\.[jt]sx?$/;
  babelOptions.presets.push(require.resolve("@babel/preset-typescript"));
  defaultConfig.resolve!.extensions!.unshift(".tsx", ".ts");

  // Populate Storybook Prop Types section using TypeScript types.
  // TODO: Fix performance issue before re-enabling.
  if (false) addDocGeneration(scriptRule);

  // Support for Create React App v2 SVG Component imports.
  babelOptions.plugins.push([
    require.resolve("babel-plugin-named-asset-import"),
    {
      loaderMap: {
        svg: {
          ReactComponent: "@svgr/webpack?-prettier,-svgo![path]",
        },
      },
    },
  ]);

  // Allow absolute imports from within @join-uniform/app-user.
  defaultConfig.resolve!.modules!.unshift(
    path.resolve(__dirname, "../../user/src"),
  );

  return defaultConfig;
}

function getScriptRule(config: Configuration) {
  const scriptRule = config.module!.rules.find(
    rule => rule.test!.toString() === String(/\.jsx?$/),
  );
  if (!scriptRule) throw new Error("Could not locate script loader.");
  return scriptRule;
}

function addMonorepoSourcePathsToScriptRule(scriptRule: RuleSetRule) {
  if (!scriptRule.include || !Array.isArray(scriptRule.include)) {
    throw new Error("Expected include to be string array.");
  }

  const monorepoPkgPaths = findMonorepo(path.resolve(__dirname, "..")).pkgs;
  const monorepoSourcePaths = monorepoPkgPaths.map(p => path.join(p, "src"));
  scriptRule.include.push(...monorepoSourcePaths);
  scriptRule.exclude = [/[/\\\\]node_modules[/\\\\]/];
}

function getBabelLoaderOptions(scriptRule: RuleSetRule) {
  let babelLoader: RuleSetLoader;
  try {
    babelLoader = (scriptRule.use as RuleSetLoader[]).find(
      loader => loader.loader === "babel-loader",
    )!;
    assert(babelLoader);
  } catch (e) {
    throw new Error("Could not locate babel loader.");
  }

  return babelLoader.options as Record<string, any[]>;
}

function addDocGeneration(scriptRule: RuleSetRule) {
  const scriptLoaders = scriptRule.use as RuleSetLoader[];
  scriptRule.oneOf = [
    {
      test: /components.*\.tsx?$/,
      use: [
        ...scriptLoaders,
        {
          loader: require.resolve("react-docgen-typescript-loader"),
        },
      ],
    },
    {
      use: scriptLoaders,
    },
  ];
  delete scriptRule.use;
}
