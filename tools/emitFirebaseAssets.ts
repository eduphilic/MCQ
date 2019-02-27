import fs from "fs";
import { PackageJson } from "package-json";
import path from "path";

createFirebaseFunctionsPackageJson();
createFirebaseFunctionsEntry();
createFirebaseJson();

function createFirebaseFunctionsPackageJson() {
  const packageJson: PackageJson = JSON.parse(
    fs.readFileSync(path.resolve(__dirname, "../package.json"), "utf8"),
  );

  const firebasePackageJson: PackageJson = {
    private: true,
    name: "join-uniform-functions",
    version: packageJson.version || "1.0.0",
    engines: {
      node: "8",
    },
    dependencies: packageJson.dependencies,
  };

  const firebasePackageJsonStringified = `${JSON.stringify(
    firebasePackageJson,
    null,
    2,
  )}\n`;

  const outDir = path.resolve(__dirname, "../dist");
  if (!fs.existsSync(outDir)) fs.mkdirSync(outDir);

  fs.writeFileSync(
    path.join(outDir, "package.json"),
    firebasePackageJsonStringified,
    "utf8",
  );
}

function createFirebaseFunctionsEntry() {
  let entryFileContents: string;

  if (process.env.NODE_ENV === "production") {
    const records = generateRecords();

    entryFileContents = `
const functions = require("firebase-functions");

exports.api = functions.https.onRequest(require("./api/index.js").handleApiRequest);
${Object.keys(records.chunks.byName)
  .map(
    chunkName =>
      `exports.${safeName(
        chunkName,
      )} = functions.https.onRequest(require("./frontend/serverless/${chunkName}").render);`,
  )
  .join("\n")}
`;
  } else {
    entryFileContents = `
const http = require("http");
const handleApiRequest = require("./api/index.js").handleApiRequest;

const server = http.createServer((req, res) => {
  handleApiRequest(req, res);
});

server.listen(3001);
`;
  }

  fs.writeFileSync(
    path.resolve(__dirname, "../dist/index.js"),
    entryFileContents.trimLeft(),
    "utf8",
  );
}

function generateRecords(): {
  chunks: {
    byName: Record<string, number>; // "pages/_app.js": 0, ...
  };
} {
  return JSON.parse(
    fs.readFileSync(
      path.resolve(__dirname, "../dist/frontend/serverless/records.json"),
      "utf8",
    ),
  );
}

function createFirebaseJson() {
  if (process.env.NODE_ENV !== "production") return;

  const records = generateRecords();

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

  fs.writeFileSync(
    path.resolve(__dirname, "../firebase.json"),
    JSON.stringify(firebaseJson, null, 2),
    "utf8",
  );
}

function safeName(chunkName: string) {
  return chunkName.replace(/[\/\\\.]/g, "_");
}
