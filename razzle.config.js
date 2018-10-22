const fs = require("fs");
const path = require("path");
const rimraf = require("rimraf");
const BundleAnalyzerPlugin = require("webpack-bundle-analyzer")
  .BundleAnalyzerPlugin;
const WebpackShellPlugin = require("webpack-shell-plugin");

module.exports = {
  plugins: [
    {
      name: "typescript",
      options: {
        useBabel: true,
        useEslint: false,
        forkTsChecker: {
          tsconfig: "./tsconfig.json",
          tslint: "./tslint.json",
          watch: "./src",
          typeCheck: true,
        },
      },
    },
  ],
  modify(config, { target, dev }) {
    config.module.rules.push({
      test: /\.(graphql|gql)$/,
      exclude: /node_modules/,
      loader: "graphql-tag/loader",
    });

    if (target === "node") {
      config.entry = path.resolve(__dirname, "./src/server");
      config.output.filename = "index.js";
      config.output.path = path.resolve(__dirname, "./build-server");
      config.output.libraryTarget = "commonjs2";
      config.plugins.push(new CustomPostBuildPlugin());

      config.plugins = config.plugins.filter(
        c => !/StartServerPlugin/.test(c.constructor),
      );

      if (dev) {
        config.plugins.push(
          new WebpackShellPlugin({
            onBuildEnd: ["yarn firebase:start"],
            dev: true,
          }),
        );
      }
    }

    if (target === "web" && process.env.ANALYZE) {
      config.plugins.push(new BundleAnalyzerPlugin());
    }

    config.performance = config.performance || {};
    config.performance.hints = false;

    return config;
  },
};

class CustomPostBuildPlugin {
  apply(compiler) {
    compiler.hooks.afterEmit.tap("CustomPostBuildPlugin", () => {
      rimraf.sync(path.resolve(__dirname, "build-server/static"));

      const pkg = require("./package.json");
      const packageJsonContents = {
        private: true,
        name: "functions",
        version: "1.0.0",
        dependencies: pkg.dependencies,
      };

      fs.writeFileSync(
        path.resolve(__dirname, "build-server/package.json"),
        JSON.stringify(packageJsonContents, null, 2),
        "utf8",
      );

      fs.copyFileSync(
        path.resolve(__dirname, "schema.graphql"),
        path.resolve(__dirname, "build-server/schema.graphql"),
      );
    });
  }
}
