import assert from "assert";
import childProcess from "child_process";
import fs from "fs";
import path from "path";
import { DefinePlugin } from "webpack";

/**
 * Queries the Firebase command line tool to determine the currently active
 * Firebase Project (default or staging). It creates an instance of the Webpack
 * DefinePlugin and passes it the contents of the corresponding Firebase admin
 * service account credentials:
 * /firebase-admin-service-account.default.json
 * /firebase-admin-service-account.staging.json
 *
 * @param context
 * Root project directory. The directory containing the "src" directory.
 */
export function createFirebaseAdminServiceAccountCredentialsWebpackDefinePlugin(
  context: string,
) {
  const supportedProjectAliases: ("default" | "staging")[] = [
    "default",
    "staging",
  ];
  let activeProject: typeof supportedProjectAliases[0];

  try {
    const firebaseUseOutput = childProcess.execSync("yarn firebase use", {
      env: process.env,
      encoding: "utf8",
    });

    const projectAlias = firebaseUseOutput.split("\n")[1];
    const projectAliases: { projects: Record<string, string> } = JSON.parse(
      fs.readFileSync(path.resolve(context, ".firebaserc"), "utf8"),
    );
    const activeProjectAlias = Object.entries(projectAliases.projects).find(
      ([_key, value]) => value === projectAlias,
    );

    if (!activeProjectAlias) {
      throw new Error(
        `current project "${projectAlias}" is not listed in ".firebaserc"'s project aliases.`,
      );
    }
    activeProject = activeProjectAlias[0] as typeof supportedProjectAliases[0];
    assert(activeProject);
  } catch (e) {
    throw new Error(`Unable to detect currently active Firebase Project: ${e}`);
  }

  if (!supportedProjectAliases.includes(activeProject)) {
    throw new Error(
      `Expected the active project to be one of these: default, staging. Got: ${activeProject}.`,
    );
  }

  let credentials: string;
  try {
    credentials = fs.readFileSync(
      path.resolve(
        context,
        `firebase-admin-service-account.${activeProject}.json`,
      ),
      "utf8",
    );
  } catch (e) {
    throw new Error(
      `Unable to read Firebase Admin Service Account credentials: ${e}`,
    );
  }

  return new DefinePlugin({
    "process.env.FIREBASE_ADMIN_SERVICE_ACCOUNT_CREDENTIALS": credentials,
    "process.env.FIREBASE_DATABASE_URL": JSON.stringify(
      activeProject === "default"
        ? "https://joinuniformindia.firebaseio.com/"
        : "https://joinuniformindia-test.firebaseio.com/",
    ),
  });
}
