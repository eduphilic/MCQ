import path from "path";
import { Configuration } from "webpack";
import nodeExternals from "webpack-node-externals";
// import { createFirebaseAdminServiceAccountCredentialsWebpackDefinePlugin } from "./tools/createFirebaseAdminServiceAccountCredentialsWebpackDefinePlugin";
// import { FirebaseDummyNextConfigEmitterWebpackPlugin } from "./tools/FirebaseDummyNextConfigEmitterWebpackPlugin";

export default function(): Configuration {
  return {
    mode,

    entry: {
      index: "./src/server/main.ts",
    },

    output: {
      path: path.join(__dirname, "dist/api"),
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

    plugins: [
      // createFirebaseAdminServiceAccountCredentialsWebpackDefinePlugin(
      //   __dirname,
      // ),
      // new FirebaseDummyNextConfigEmitterWebpackPlugin(),
    ],
  };
}

const mode: "production" | "development" =
  process.env.NODE_ENV === "production" ? "production" : "development";
