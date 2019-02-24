import fs from "fs";
import { PackageJson } from "package-json";
import path from "path";

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

  fs.writeFileSync(
    path.resolve(__dirname, "../dist/package.json"),
    firebasePackageJsonStringified,
    "utf8",
  );
}

function createFirebaseFunctionsEntry() {
  const records: {
    chunks: {
      byName: Record<string, number>; // "pages/_app.js": 0, ...
    };
  } = JSON.parse(
    fs.readFileSync(
      path.resolve(__dirname, "../dist/frontend/serverless/records.json"),
      "utf8",
    ),
  );

  const entryFileContents = `
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

  fs.writeFileSync(
    path.resolve(__dirname, "../dist/index.js"),
    entryFileContents,
    "utf8",
  );
}

createFirebaseFunctionsPackageJson();
createFirebaseFunctionsEntry();

function safeName(chunkName: string) {
  return chunkName.replace(/[\/\\\.]/g, "_");
}
