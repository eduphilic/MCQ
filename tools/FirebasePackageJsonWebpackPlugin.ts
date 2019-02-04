import fs from "fs";
// eslint-disable-next-line import/no-extraneous-dependencies
import { PackageJson } from "package-json";
import { Compiler, Plugin } from "webpack";

/**
 * Emits a package.json file for use with Firebase Functions. It copies over the
 * the non-development dependencies so that Firebase can install them.
 */
export class FirebasePackageJsonWebpackPlugin implements Plugin {
  constructor(private packageJsonPath: string) {}

  apply(compiler: Compiler) {
    compiler.hooks.emit.tap("FirebasePackageJsonWebpackPlugin", compilation => {
      const packageJson: PackageJson = JSON.parse(
        fs.readFileSync(this.packageJsonPath, "utf8"),
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

      compilation.fileDependencies.add(this.packageJsonPath);
      // eslint-disable-next-line no-param-reassign
      compilation.assets["package.json"] = {
        source: () => firebasePackageJsonStringified,
        size: () => firebasePackageJsonStringified.length,
      };
    });
  }
}
