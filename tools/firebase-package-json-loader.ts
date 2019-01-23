/* eslint-disable import/no-extraneous-dependencies, import/no-unresolved */
import { loader } from "webpack";
import { PackageJson } from "package-json";

/**
 * Emits a package.json file for use with Firebase Functions. It copies over the
 * the non-development dependencies so that Firebase can install them.
 *
 * @param source Contents of the workspace package.json file as a string.
 */
// eslint-disable-next-line func-names
const firebasePackageJsonLoader: loader.Loader = function(source) {
  const packageJson: PackageJson = JSON.parse(source.toString());

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

  this.emitFile("package.json", firebasePackageJsonStringified, null);

  return firebasePackageJsonStringified;
};

export default firebasePackageJsonLoader;
