import path from "path";
import { FirebaseRemoteConfigClientCredentials } from "./services";

export function getFirebaseRemoteConfigClientCredentials() {
  try {
    const serviceAccount: {
      client_email: string;
      private_key: string;
      project_id: string;
    } = require(path.resolve(__dirname, "firebase-admin-service-account.json"));

    const credentials: FirebaseRemoteConfigClientCredentials = {
      clientEmail: serviceAccount.client_email,
      privateKey: serviceAccount.private_key,
      projectId: serviceAccount.project_id,
    };

    return credentials;
  } catch (e) {
    throw new Error(`
Failed to load Firebase Admin Service Account file:
firebase-admin-service-account.json

Error: ${e.message}
`);
  }
}
