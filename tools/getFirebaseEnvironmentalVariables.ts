import childProcess from "child_process";
import fs from "fs";
import path from "path";

/**
 * The Firebase Functions development emulator does not have access to
 * configured production environmental variables. To work around this we
 * retrieve using the command documented below:
 *
 * @see https://firebase.google.com/docs/functions/local-emulator#install_and_configure_the_cloud_functions_shell
 */
export function getFirebaseEnvironmentalVariables() {
  if (fs.existsSync(path.resolve(__dirname, "../.runtimeconfig.json"))) return;

  /* tslint:disable-next-line:no-console */
  console.log("Retrieving Firebase environmental variables...");

  let stdout: string;
  try {
    stdout = childProcess.execSync("yarn firebase functions:config:get", {
      cwd: path.resolve(__dirname),
      env: process.env,
      encoding: "utf8",
    });
  } catch (e) {
    throw new Error(`Failed to retrieve Firebase Environmental variables.
This is needed to support running the Firebase emulator during development.
Ensure you have authenticated the project with Firebase using: yarn firebase login

Error: ${e.message}
`);
  }

  // Trim any text surrounding the stdout from the executed command. We are only
  // interested in the printed out JSON.
  let foundStart = false;
  let foundEnd = false;
  const firebaseEnvironmentalVariablesJson = stdout
    .split("\n")
    .filter(l => {
      if (!foundStart && l !== "{") return false;
      if (!foundStart && l === "{") {
        foundStart = true;
        return true;
      }
      if (!foundEnd && l === "}") {
        foundEnd = true;
        return true;
      }
      if (foundEnd) return false;
      return true;
    })
    .join("\n")
    .concat("\n");

  // "functions.config(...)" is interested in a file called
  // ".runtimeconfig.json" which includes the environmental variables.
  fs.writeFileSync(
    path.resolve(__dirname, "../.runtimeconfig.json"),
    firebaseEnvironmentalVariablesJson,
    "utf8",
  );

  /* tslint:disable-next-line:no-console */
  console.log("...done.");
}
