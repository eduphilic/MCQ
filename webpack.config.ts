import webpack, { Configuration } from "webpack";
import path from "path";
import nodeExternals from "webpack-node-externals";
import StartServerPlugin from "start-server-webpack-plugin";

export default function(): Configuration {
  return {
    mode,

    entry: {
      server: (mode === "development" ? ["webpack/hot/signal"] : []).concat([
        "./src/main.ts",
      ]),
    },

    output: {
      path: path.join(__dirname, "dist"),
      filename: "index.js",
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

    plugins:
      mode === "development"
        ? [
            new webpack.HotModuleReplacementPlugin(),
            new StartServerPlugin({
              name: "index.js",
              signal: true,
            }),
          ]
        : [],
  };
}

const mode: "production" | "development" =
  process.env.NODE_ENV === "production" ? "production" : "development";

const babelRc = {
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
  plugins: [["@babel/plugin-proposal-decorators", { legacy: true }]],
};
