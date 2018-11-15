// tslint:disable:no-duplicate-imports
import * as admin from "firebase-admin";
import * as functions from "firebase-functions";
import "firebase-functions";

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
