// tslint:disable:no-duplicate-imports
import * as admin from "firebase-admin";
import * as functions from "firebase-functions";
import "firebase-functions";

import childProcess from "child_process";
import fs from "fs";
import path from "path";

let initialized = false;
let firestore: FirebaseFirestore.Firestore | null = null;
let serviceAccountCredentials: {
  project_id: string;
  client_email: string;
  private_key: string;
};

/**
 * Ensures the Firebase environment has been initialized and is ready for
 * consumption.
 */
export function getInitializedFirebaseEnvironment() {
  if (!initialized) {
    retrieveProductionEnvironmentalVariables();

    // Load service account credentials to allow use of RemoteConfig API.
    try {
      serviceAccountCredentials = JSON.parse(
        fs.readFileSync(
          path.resolve(
            __dirname,
            process.env.NODE_ENV === "production"
              ? "firebase-admin-service-account.json"
              : "../firebase-admin-service-account.json",
          ),
          "utf8",
        ),
      );
    } catch (e) {
      throw new Error(
        `Unable to load "firebase-admin-service-account.json": ${e}`,
      );
    }

    const app = admin.initializeApp();
    firestore = app.firestore();
    firestore.settings({
      timestampsInSnapshots: true,
    });

    initialized = true;
  }

  return { admin, functions, firestore: firestore!, serviceAccountCredentials };
}

/**
 * The Firebase Functions development emulator does not have access to
 * configured production environmental variables. To work around this we
 * retrieve using the command documented below:
 *
 * @see https://firebase.google.com/docs/functions/local-emulator#install_and_configure_the_cloud_functions_shell
 */
function retrieveProductionEnvironmentalVariables() {
  if (process.env.NODE_ENV === "production") return;
  /* tslint:disable-next-line:no-console */
  console.log("Retrieving Firebase environmental variables...");

  const stdout = childProcess.execSync("yarn firebase functions:config:get", {
    cwd: path.resolve(__dirname, ".."),
    env: process.env,
    encoding: "utf8",
  });

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
    .join("\n");

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
