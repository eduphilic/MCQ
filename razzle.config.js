const fs = require("fs");
const path = require("path");
const rimraf = require("rimraf");
const BundleAnalyzerPlugin = require("webpack-bundle-analyzer")
  .BundleAnalyzerPlugin;

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
    if (target === "node") {
      config.entry = path.resolve(__dirname, "./src/server");
      config.output.filename = "index.js";
      config.output.path = path.resolve(__dirname, "./build-server");
      config.output.libraryTarget = "commonjs2";
      config.plugins.push(new CustomPostBuildPlugin());

      config.plugins = config.plugins.filter(
        c => !/StartServerPlugin/.test(c.constructor),
      );
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

      fs.writeFileSync(
        path.resolve(__dirname, "build-server/package.json"),
        JSON.stringify(
          {
            private: true,
            name: "functions",
            version: "1.0.0",
            dependencies: pkg.dependencies,
          },
          null,
          2,
        ),
        "utf8",
      );
    });
  }
}
