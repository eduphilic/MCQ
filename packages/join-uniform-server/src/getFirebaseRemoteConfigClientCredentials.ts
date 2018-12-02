import { FirebaseRemoteConfigClientCredentials } from "./services";

export function getFirebaseRemoteConfigClientCredentials() {
  try {
    const serviceAccount: {
      client_email: string;
      private_key: string;
      project_id: string;
    } = JSON.parse(process.env.FIREBASE_SERVICE_ACCOUNT_CREDENTIALS!);

    if (typeof serviceAccount !== "object") {
      throw new Error(`Invalid service account: ${serviceAccount}`);
    }

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
