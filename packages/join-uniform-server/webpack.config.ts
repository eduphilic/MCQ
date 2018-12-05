import assert from "assert";
import fs from "fs";
import path from "path";
import { BannerPlugin, Configuration, DefinePlugin, Plugin } from "webpack";
import nodeExternals from "webpack-node-externals";

const firebaseServiceAccountCredentialsPath = path.resolve(__dirname, "../../firebase-admin-service-account.json"); // prettier-ignore
let firebaseServiceAccountCredentials: string;
try {
  assert(fs.existsSync(firebaseServiceAccountCredentialsPath));
  firebaseServiceAccountCredentials = fs.readFileSync(firebaseServiceAccountCredentialsPath, "utf8"); // prettier-ignore
} catch (e) {
  throw new Error(`
Failed to read Firebase Service Account Credentials.

Error: ${e.message}
`);
}

const dev = process.env.NODE_ENV !== "production";

const config: Configuration = {
  mode: dev ? "development" : "production",

  context: path.resolve(__dirname, "src"),

  entry: "./index.ts",

  output: {
    filename: "index.js",
    path: path.resolve(__dirname, "../../dist/functions"),
    libraryTarget: "this",
  },

  module: {
    rules: [
      {
        test: /\.tsx?$/,
        include: path.resolve(__dirname, "src"),
        exclude: /node_modules/,
        loader: require.resolve("babel-loader"),
      },
    ],
  },

  resolve: {
    extensions: [".ts", ".tsx", ".wasm", ".mjs", ".js", ".json"],
  },

  optimization: {
    minimize: false,
  },

  plugins: [
    dev
      ? new BannerPlugin({
          banner: 'require("source-map-support").install();',
          raw: true,
          entryOnly: true,
        })
      : null,
    new DefinePlugin({
      "process.env.NODE_ENV": JSON.stringify(dev ? "development" : "production"), // prettier-ignore
      "process.env.FIREBASE_SERVICE_ACCOUNT_CREDENTIALS": JSON.stringify(firebaseServiceAccountCredentials) // prettier-ignore
    }),
  ].filter((p): p is Plugin => p !== null),

  devtool: dev ? "eval-source-map" : false,

  target: "node",

  watchOptions: {
    ignored: /node_modules/,
  },

  externals: [
    nodeExternals(),
    nodeExternals({
      modulesDir: path.resolve(__dirname, "../../node_modules"),
    }),
  ],

  node: {
    __filename: false,
    __dirname: false,
    process: false,
  },

  performance: false,
};

export default config;
