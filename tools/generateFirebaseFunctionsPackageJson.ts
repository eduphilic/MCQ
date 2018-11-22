// Generate a "package.json" file for the Firebase Functions directory
// "/dist/functions". This is needed because deployed functions need to have all
// dependencies listed.

import fs from "fs";
import path from "path";

const packageDirectories = fs
  .readdirSync(path.resolve(__dirname, "../packages"))
  .map(directoryName => path.resolve(__dirname, "../packages", directoryName));

const dependencies = packageDirectories.reduce(
  (accumulator, directoryPath) => {
    const packageJsonPath = path.resolve(directoryPath, "package.json");
    if (!fs.existsSync(packageJsonPath)) return accumulator;

    const packageJson: {
      dependencies?: Record<string, string>;
    } = JSON.parse(fs.readFileSync(packageJsonPath, "utf8"));

    if (!packageJson.dependencies) return accumulator;

    Object.entries(packageJson.dependencies).forEach(([key, value]) => {
      accumulator[key] = value;
    });

    return accumulator;
  },
  // tslint:disable-next-line:no-object-literal-type-assertion
  {} as Record<string, string>,
);

export function generateFirebaseFunctionsPackageJson() {
  if (!fs.existsSync(path.resolve(__dirname, "../dist"))) {
    fs.mkdirSync(path.resolve(__dirname, "../dist"));
  }

  if (!fs.existsSync(path.resolve(__dirname, "../dist/functions"))) {
    fs.mkdirSync(path.resolve(__dirname, "../dist/functions"));
  }

  fs.writeFileSync(
    path.resolve(__dirname, "../dist/functions/package.json"),
    `${JSON.stringify(
      {
        private: true,
        name: "@join-uniform/firebase-functions",
        version: "1.0.0",
        dependencies,
      },
      null,
      2,
    )}\n`,
    "utf8",
  );
}
