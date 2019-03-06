import CreateFilePlugin, {
  CreateFileWebpackPluginOptions,
} from "create-file-webpack";
import fs from "fs";
import NodemonPlugin from "nodemon-webpack-plugin";
import path from "path";
import webpack, {
  Configuration,
  ExternalsFunctionElement,
  Plugin,
} from "webpack";
import nodeExternals from "webpack-node-externals";

export default function(): Configuration {
  return {
    mode,

    entry: {
      "index.js": "./src/index.ts",
      "api/index.js": "./src/server/main.ts",
    },

    output: {
      path: path.join(__dirname, "dist"),
      filename: "[name]",
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

    externals: [nodeExternals(), bundleExternals()],

    devtool: false,

    node: {
      __filename: false,
      __dirname: false,
      process: false,
    },

    plugins: [
      new NodemonPlugin({
        watch: path.resolve(__dirname, "src/server"),
        script: path.resolve(__dirname, "dist/index.js"),
        ext: "ts",
      }),
      new CreateFilePlugin(createFirebasePackageJsonOptions()),
      createNextJsPageImports(),
      createFirebaseJsonPlugin(),
    ],
  };
}

const mode: "production" | "development" =
  process.env.NODE_ENV === "production" ? "production" : "development";

/**
 * Prevent Webpack from trying to bundle the client and api bundles into the
 * entry file located at: /dist/index.js.
 */
function bundleExternals(): ExternalsFunctionElement {
  return (_context, request, callback) => {
    if (request === "./api") {
      callback(null, `commonjs ${request}`);
      return;
    }

    callback(undefined, undefined);
  };
}

/**
 * Creates the "package.json" file required by Firebase Functions. It add the
 * required fields for the built project to execute.
 */
function createFirebasePackageJsonOptions(): CreateFileWebpackPluginOptions {
  const packageJson: {
    version: string;
    dependencies: {};
  } = JSON.parse(fs.readFileSync(path.join(__dirname, "package.json"), "utf8"));

  const firebasePackageJson = {
    private: true,
    name: "join-uniform",
    version: packageJson.version,
    engines: {
      node: "8",
    },
    dependencies: packageJson.dependencies,
  };

  return {
    path: path.join(__dirname, "dist"),
    fileName: "package.json",
    // tslint:disable-next-line:prefer-template
    content: JSON.stringify(firebasePackageJson, null, 2) + "\n",
  };
}

/**
 * Creates the "firebase.json" file in the root directory of this workspace. It
 * is used to map the serverless pages to corresponding Firebase Functions
 * routes.
 */
function createFirebaseJsonPlugin(): Plugin {
  if (process.env.NODE_ENV !== "production") {
    return new class implements Plugin {
      // tslint:disable-next-line:no-empty
      apply() {}
    }();
  }

  const records = generateNextJsPageRecords();

  const firebaseJson = {
    functions: {
      source: "dist",
    },
    hosting: {
      public: "dist/frontend/static",
      rewrites: Object.keys(records.chunks.byName)
        .map(chunkName => {
          const source = chunkName
            .replace(/^pages/, "")
            .replace(/\.js$/, "")
            .replace(/\/index$/, "/");

          return {
            source,
            function: safeName(chunkName),
          };
        })
        .concat({
          source: "/api/**",
          function: "api",
        }),
    },
  };

  return new CreateFilePlugin({
    fileName: "firebase.json",
    path: __dirname,
    content: `${JSON.stringify(firebaseJson, null, 2)}\n`,
  });
}

/**
 * Generates the following snippet in the production bundle for importing the
 * individual serverless Next.js pages:
 *
 * ```
exports.api = functions.https.onRequest(handleApiRequest);
const pages = [
  ["pages__app_js", require("./frontend/serverless/pages/_app.js").render],
  ["pages__document_js", require("./frontend/serverless/pages/_document.js").render],
  ["pages__error_js", require("./frontend/serverless/pages/_error.js").render],
  ["pages_index_js", require("./frontend/serverless/pages/index.js").render],
  ["pages_signup_js", require("./frontend/serverless/pages/signup.js").render]
];
pages.forEach(([nextPageExport, nextPageImport]) => {
module.exports[nextPageExport] = functions.https.onRequest(nextPageImport);
})
```
 */
function createNextJsPageImports(): Plugin {
  const definitions: Record<string, string> = {};

  if (process.env.NODE_ENV === "production") {
    const records = generateNextJsPageRecords();

    definitions.__NEXT_JS_PAGE_EXPORTS__ = `[\n${Object.keys(
      records.chunks.byName,
    )
      .map(chunkName => {
        return `        ["${safeName(
          chunkName,
        )}", require("./frontend/serverless/${chunkName}").render]`;
      })
      .join(",\n")}\n    ]`;
  }

  return new webpack.DefinePlugin(definitions);
}

/**
 * Parses the pages manifest from the serverless build of Next.js.
 */
function generateNextJsPageRecords(): {
  chunks: {
    byName: Record<string, number>; // "pages/_app.js": 0, ...
  };
} {
  return JSON.parse(
    fs.readFileSync(
      path.join(__dirname, "./dist/frontend/serverless/records.json"),
      "utf8",
    ),
  );
}

/**
 * Converts the Next.js page filenames to safe names for use as Node.js exports.
 */
function safeName(chunkName: string) {
  return chunkName.replace(/[\/\\\.]/g, "_");
}
