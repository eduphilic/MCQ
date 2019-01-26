/* eslint-disable import/no-extraneous-dependencies, @typescript-eslint/no-use-before-define */
import path from "path";
import webpack, { Configuration } from "webpack";
import nodeExternals from "webpack-node-externals";
import StartServerPlugin from "start-server-webpack-plugin";
import { FirebasePackageJsonWebpackPlugin } from "./tools/FirebasePackageJsonWebpackPlugin";
import { FirebaseDummyNextConfigEmitterWebpackPlugin } from "./tools/FirebaseDummyNextConfigEmitterWebpackPlugin";
import { createFirebaseAdminServiceAccountCredentialsWebpackDefinePlugin } from "./tools/createFirebaseAdminServiceAccountCredentialsWebpackDefinePlugin";

export default function(): Configuration {
  return {
    mode,

    entry: {
      index: (mode === "development" ? ["webpack/hot/signal"] : []).concat([
        "./src/main.ts",
      ]),
    },

    output: {
      path: path.join(__dirname, "dist/functions"),
      filename: "[name].js",
      libraryTarget: "this",
    },

    module: {
      rules: [
        {
          test: /\.tsx?$/,
          exclude: /node_modules/,
          use: {
            loader: "ts-loader",
            options: {
              compilerOptions: {
                target: "es6",
                module: "esnext",
                noEmit: false,
              },
            },
          },
        },
      ],
    },

    resolve: {
      extensions: [".ts", ".tsx", ".wasm", ".mjs", ".js", ".json"],
    },

    optimization: {
      minimize: false,
    },

    target: "node",

    externals: [nodeExternals({ whitelist: ["webpack/hot/signal"] })],

    devtool: false,

    node: {
      __filename: false,
      __dirname: false,
      process: false,
    },

    plugins: (mode === "development"
      ? [
          new webpack.HotModuleReplacementPlugin(),
          new StartServerPlugin({
            name: "index.js",
            signal: true,
          }),
        ]
      : []
    ).concat(
      createFirebaseAdminServiceAccountCredentialsWebpackDefinePlugin(
        __dirname,
      ),
      new FirebasePackageJsonWebpackPlugin(
        path.join(__dirname, "package.json"),
      ),
      new FirebaseDummyNextConfigEmitterWebpackPlugin(),
    ),
  };
}

const mode: "production" | "development" =
  process.env.NODE_ENV === "production" ? "production" : "development";
