import assert from "assert";
import fs from "fs";
import path from "path";
import { BannerPlugin, Configuration, DefinePlugin, Plugin } from "webpack";
import nodeExternals from "webpack-node-externals";

const monorepoPackages = getMonorepoPackages();

const firebaseServiceAccountCredentialsPath = path.resolve(__dirname, "../../firebase-admin-service-account.json"); // prettier-ignore
let firebaseServiceAccountCredentials: string;
if (!process.env.CI) {
  try {
    assert(fs.existsSync(firebaseServiceAccountCredentialsPath));
    firebaseServiceAccountCredentials = fs.readFileSync(firebaseServiceAccountCredentialsPath, "utf8"); // prettier-ignore
  } catch (e) {
    throw new Error(`
Failed to read Firebase Service Account Credentials.

Error: ${e.message}
`);
  }
} else {
  firebaseServiceAccountCredentials = "";
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
        include: monorepoPackages.includes,
        use: {
          loader: require.resolve("babel-loader"),
          options: {
            babelrc: false,
            presets: [
              [ "@babel/preset-env", { modules: false, targets: { node: "8" } } ], // prettier-ignore
              "@babel/preset-react",
              "@babel/preset-typescript",
            ],
            plugins: ["@babel/plugin-proposal-class-properties"],
          },
        },
      },
      {
        test: /\.graphql$/,
        include: monorepoPackages.includes,
        loader: require.resolve("graphql-tag/loader"),
      },
    ],
  },

  resolve: {
    extensions: [".ts", ".tsx", ".wasm", ".mjs", ".js", ".json"],
    alias: {
      ...monorepoPackages.aliases,
      "~": path.resolve(__dirname, "src"),
    },
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
      whitelist: monorepoPackages.names.concat("@join-uniform/graphql/server"),
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

function getMonorepoPackages() {
  const monorepoPackageDirectories = fs
    .readdirSync(path.resolve(__dirname, ".."))
    .map(dirname => path.resolve(__dirname, "..", dirname))
    .filter(
      directory =>
        fs.existsSync(path.resolve(directory, "package.json")) &&
        fs.existsSync(path.resolve(directory, "src")),
    );

  const packages = monorepoPackageDirectories
    .map(directory => {
      const name = require(path.resolve(directory, "package.json")).name;
      const include = path.resolve(directory, "src");

      return { name, include };
    })
    .reduce(
      (accumulator, pkg) => {
        accumulator.names.push(pkg.name);
        accumulator.includes.push(pkg.include);
        accumulator.aliases[pkg.name] = `${pkg.name}/src`;
        return accumulator;
      },
      {
        names: [] as string[],
        includes: [] as string[],
        // tslint:disable-next-line:no-object-literal-type-assertion
        aliases: {} as Record<string, string>,
      },
    );

  packages.aliases["@join-uniform/common"] = "@join-uniform/common";
  return packages;
}
