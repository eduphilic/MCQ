/* eslint-disable import/no-extraneous-dependencies, @typescript-eslint/no-use-before-define */
import fs from "fs";
import path from "path";
import webpack, { Configuration } from "webpack";
import nodeExternals from "webpack-node-externals";
import StartServerPlugin from "start-server-webpack-plugin";
import { FirebasePackageJsonWebpackPlugin } from "./tools/FirebasePackageJsonWebpackPlugin";
import { FirebaseDummyNextConfigEmitterWebpackPlugin } from "./tools/FirebaseDummyNextConfigEmitterWebpackPlugin";

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
            loader: "babel-loader",
            options: babelRc,
          },
        },
      ],
    },

    resolve: {
      extensions: [".ts", ".tsx", ".wasm", ".mjs", ".js", ".json"],
    },

    target: "node",

    externals: [nodeExternals({ whitelist: ["webpack/hot/signal"] })],

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
      new webpack.DefinePlugin({
        "process.env.FIREBASE_ADMIN_SERVICE_ACCOUNT_CREDENTIALS": getFirebaseAdminServiceAccountCredentials(),
        "process.env.FIREBASE_DATABASE_URL": JSON.stringify(
          "https://joinuniformindia.firebaseio.com/",
        ),
      }),
      new FirebasePackageJsonWebpackPlugin(
        path.join(__dirname, "package.json"),
      ),
      new FirebaseDummyNextConfigEmitterWebpackPlugin(),
    ),
  };
}

const mode: "production" | "development" =
  process.env.NODE_ENV === "production" ? "production" : "development";

const babelRc = {
  babelrc: false,
  presets: [
    [
      "@babel/preset-env",
      {
        targets: { node: 8 },
        loose: true,
        modules: false,
        shippedProposals: true,
      },
    ],
    "@babel/preset-typescript",
  ],
  plugins: [
    ["@babel/plugin-proposal-decorators", { legacy: true }],
    ["@babel/plugin-proposal-class-properties", { loose: true }],
  ],
};

function getFirebaseAdminServiceAccountCredentials() {
  let credentials!: string;
  try {
    credentials = fs.readFileSync(
      path.join(__dirname, "firebase-admin-service-account.json"),
      "utf8",
    );
  } catch (e) {
    // eslint-disable-next-line no-console
    console.error(
      `Unable to read Firebase Admin Service Account credentials: ${e}`,
    );
    process.exit(1);
  }
  return credentials;
}
