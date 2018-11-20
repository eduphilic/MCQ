const fs = require("fs");
const path = require("path");
const childProcess = require("child_process");
const rimraf = require("rimraf");
const BundleAnalyzerPlugin = require("webpack-bundle-analyzer")
  .BundleAnalyzerPlugin;
const WebpackShellPlugin = require("webpack-shell-plugin");
const { ReactLoadablePlugin } = require("react-loadable/webpack");

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
        retrieveProductionEnvironmentalVariables();

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

/**
 * The Firebase Functions development emulator does not have access to
 * configured production environmental variables. To work around this we
 * retrieve using the command documented below:
 *
 * @see https://firebase.google.com/docs/functions/local-emulator#install_and_configure_the_cloud_functions_shell
 */
function retrieveProductionEnvironmentalVariables() {
  /* tslint:disable-next-line:no-console */
  console.log("Retrieving Firebase environmental variables...");

  const stdout = childProcess.execSync("yarn firebase functions:config:get", {
    cwd: path.resolve(__dirname),
    env: process.env,
    encoding: "utf8",
  });

  // Trim any text surrounding the stdout from the executed command. We are only
  // interested in the printed out JSON.
  let foundStart = false;
  let foundEnd = false;
  const firebaseEnvironmentalVariablesJson = stdout
    .split("\n")
    .filter(l => {
      if (!foundStart && l !== "{") return false;
      if (!foundStart && l === "{") {
        foundStart = true;
        return true;
      }
      if (!foundEnd && l === "}") {
        foundEnd = true;
        return true;
      }
      if (foundEnd) return false;
      return true;
    })
    .join("\n");

  // "functions.config(...)" is interested in a file called
  // ".runtimeconfig.json" which includes the environmental variables.
  fs.writeFileSync(
    path.resolve(__dirname, ".runtimeconfig.json"),
    firebaseEnvironmentalVariablesJson,
    "utf8",
  );

  /* tslint:disable-next-line:no-console */
  console.log("...done.");
}
