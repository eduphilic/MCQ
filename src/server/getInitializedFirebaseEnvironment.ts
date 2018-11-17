// tslint:disable:no-duplicate-imports
import assert from "assert";
import * as admin from "firebase-admin";
import * as functions from "firebase-functions";
import "firebase-functions";

import fs from "fs";
import path from "path";
import { CloudinaryCredentials, CloudinaryService } from "../api/services";

let initialized = false;
let firestore: FirebaseFirestore.Firestore | null = null;
let serviceAccountCredentials: {
  project_id: string;
  client_email: string;
  private_key: string;
};
let cloudinaryCredentials: CloudinaryCredentials;

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

    let cloudinaryCloudName: string;
    let cloudinaryApiKey: string;
    let cloudinaryApiSecret: string;

    // Load secrets from Functions config and verify values were set.
    try {
      cloudinaryCloudName = functions.config().cloudinary.cloud_name;
      assert(cloudinaryCloudName, "cloudinaryCloudName");
      cloudinaryApiKey = functions.config().cloudinary.api_key;
      assert(cloudinaryApiKey, "cloudinaryApiKey");
      cloudinaryApiSecret = functions.config().cloudinary.api_secret;
      assert(cloudinaryApiSecret, "cloudinaryApiSecret");
    } catch (e) {
      throw new Error(`Could not load environmental variables: ${e}`);
    }

    cloudinaryCredentials = {
      cloudName: cloudinaryCloudName,
      apiKey: cloudinaryApiKey,
      apiSecret: cloudinaryApiSecret,
    };

    /* tslint:disable-next-line:no-console */
    console.log(`Cloudinary "cloud_name" set to: ${cloudinaryCloudName}`);
    CloudinaryService.setConfig(cloudinaryCredentials);
    /* tslint:disable-next-line:no-console */
    console.log("Cloudinary SDK initialized.");

    initialized = true;
  }

  return {
    admin,
    functions,
    firestore: firestore!,
    serviceAccountCredentials,
    cloudinaryCredentials,
  };
}
