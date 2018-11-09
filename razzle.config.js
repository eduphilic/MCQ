const fs = require("fs");
const path = require("path");
const rimraf = require("rimraf");
const BundleAnalyzerPlugin = require("webpack-bundle-analyzer")
  .BundleAnalyzerPlugin;
const WebpackShellPlugin = require("webpack-shell-plugin");
const { ReactLoadablePlugin } = require("react-loadable/webpack");
const webpack = require("webpack");

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

    // Enable tree shaking even in development so that server side dependencies
    // are dropped from the client bundle.
    if (dev) {
      config.plugins.push(new webpack.optimize.ModuleConcatenationPlugin());
    }

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

    if (target === "web") {
      // Remove array from entry setting so that tree shaking works.
      config.entry = {
        client: path.resolve(__dirname, "src/client"),
      };

      // Enable aggressive code splitting:
      // https://github.com/faceyspacey/webpack-flush-chunks#after
      config.optimization = {
        splitChunks: {
          chunks: "async",
          minSize: 30000,
          minChunks: 1,
          maxAsyncRequests: 5,
          maxInitialRequests: 3,
          automaticNameDelimiter: "~",
          name: true,
          cacheGroups: {
            vendors: {
              test: /[\\/]node_modules[\\/]/,
              priority: -10,
            },
            default: {
              minChunks: 2,
              priority: -20,
              reuseExistingChunk: true,
            },
          },
        },
      };

      config.plugins.push(
        new ReactLoadablePlugin({
          filename: path.resolve(__dirname, "build-server/react-loadable.json"),
        }),
      );
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
        engines: {
          node: "8",
        },
        dependencies: pkg.dependencies,
      };

      fs.writeFileSync(
        path.resolve(__dirname, "build-server/package.json"),
        JSON.stringify(packageJsonContents, null, 2),
        "utf8",
      );

      const schema = fs
        .readdirSync(path.resolve(__dirname, "src/api/schema"))
        .filter(filename => /\.graphql$/.test(filename))
        .map(filename =>
          fs.readFileSync(
            path.resolve(__dirname, "src/api/schema", filename),
            "utf8",
          ),
        )
        .reduce((accumulator, fileContents) => {
          return accumulator + fileContents;
        }, "");

      fs.writeFileSync(
        path.resolve(__dirname, "build-server/schema.graphql"),
        schema,
        "utf8",
      );

      fs.copyFileSync(
        path.resolve(__dirname, "firebase-admin-service-account.json"),
        path.resolve(
          __dirname,
          "build-server/firebase-admin-service-account.json",
        ),
      );
    });
  }
}
