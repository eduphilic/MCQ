import { google } from "googleapis";
import fetch from "node-fetch";
import { IFirebaseRemoteConfigTemplate } from "../models/IFirebaseRemoteConfigTemplate";

// Firebase Admin SDK Service Account
const key = {
  type: "service_account",
  project_id: "joinuniformindia",
  private_key_id: "a9d57dc2383946e746bd5f986e7a028549a80be4",
  private_key:
    "-----BEGIN PRIVATE KEY-----\nMIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQCz64oOZHhkANNe\nD4Abv2JlIPHSVnaOPWQn8nA6uOtis3i/qPOQOMhhJ0lbXIzy8HxoB8qDYY8ZRZ8F\nkwOxmxibOLHps5hem5E9F9v4BFXOlC1Y4a+/9uIsyIC6QbC625hLhkUqDhnRu0JE\n93aC07/0VEB4BLMplVvr9xvGO/2bYTis0j1W9ogdVfDvSNSvEs2J+4TcOgUk3MWx\nodw9CVpSukpB1aPPZp7gPLnrzBs9YjJunuuxRrgd0ibHrnRUB94NYylBDWSD1zfp\nmWuA7Ek03R+UA5EPMTxKxNGmb4/GYUWd0kO2E9vp4GFwQRwQS0CuNTUaqHDfFz2G\nngOirQs/AgMBAAECggEAD/xMoFm8jpoPgusapUcnArg0yXea11QiCss8vc2XRbDk\nzhaV9AmaLXOe+L9A21w9mW/zxiI2uMvu70EFfNQRvBzYmzHfRwHzG2amyc2iIsAX\nRVnhUnYo2J9vPIfrSrbfEaVvjhHW/m5GWuKnxMOelE1LYGkpJ/fYGnTdTWAgI3Fk\nz0MlQyY+VW+ueQb8aVEmVUXbz0SHIgG7aDs9ZS6oAsOK8yqHLXxgUWpFE0jZmq8V\nMIDR0puC6xO0duCSbmiR2E/jzjT2gtSGhPQyFmamwbSAgq7kyEPMAr4qhm12+EFk\nSMTkvQ5qMgssK0Wm0SxYxVfnswRE3mMSZQ4n48LH0QKBgQDoY8YlwkDopzz0Xe6r\nBy+RL6q+pZ2i3FWp/zEczHJljZGpbcK/4gBRziZhbwTCH7iKazP9rapSNYvzkvjG\nPTOdEQBUZSgG22am2IHyXDxY9Z3WMziEbAE+IycW8c9mvWal/t/fin7ooYmGfrCm\nTDesCTAQhUI2GuWAbZTcWBP5zwKBgQDGMxTY7ONW+jQ4MIk8s4VfHEPu0u9fOAog\nkkfvfy8JZoeCeAUKe+FHhK2E6zjAxNLR/voSghVHPsqoL3gMu1D00m0Kcqd/atum\nUT3aS0ckLQUNk+gRU9ASRFUByuivUOd9X12oackNYKZ7HCjS2OL63oLURySu2UVO\nJ3u6cgbjkQKBgQCF3bOu3I93dZ7vRYzOiH0mLUc2O0DrJ/FQ0+f+pubfCQX3i3q7\n/fwhI5eIWONsz8kGM2rnnrqWULIlxWv5BhhNShXeh8be7FPdmKqCag95T0N0uFy+\nK1kr6iQCW5kVndUbmg5sPuOMLkGCcEhiA1WujDxbx+e0MxoxOO6fXz1ikQKBgFOa\nIGUQJyT9DSHWd0z/fHaN+am3l/jWLo9mpKlFQJX6hZZnAdlWP8RnFrpGbf4CB9tE\nbj94V3lh5yHiRAU6zf8283/AtR5t+JDDHBAESNHdm5AKn40PiWjrIeBLsrKgscSU\ngXEUjhXyesbbLe0iRzwCt7TK/ZIzW6SHywzuJDHBAoGBAJzJtca+wlTVXumCPcgf\n+fLpQ6IvLdt6iO3wkFz1W/CIs0kDAOlXWD42SHBFGHS14WAbD8wcUyqdXqFRJeNT\nyIh6HQ7uS7vVkBqYN9SwkEEvPZZwEZQcfWoQaoTEG/dC88OVpHbaWwpn1Sf4t8sH\n4UfnEPkx44hmCIyzcR0d2mdY\n-----END PRIVATE KEY-----\n",
  client_email:
    "firebase-adminsdk-a5g58@joinuniformindia.iam.gserviceaccount.com",
  client_id: "105098343987528636412",
  auth_uri: "https://accounts.google.com/o/oauth2/auth",
  token_uri: "https://oauth2.googleapis.com/token",
  auth_provider_x509_cert_url: "https://www.googleapis.com/oauth2/v1/certs",
  client_x509_cert_url:
    "https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-a5g58%40joinuniformindia.iam.gserviceaccount.com",
};

/**
 * Returns the Firebase Remote Config template.
 */
export class FirebaseRemoteConfigClient {
  private configTemplate: IFirebaseRemoteConfigTemplate | null = null;
  private expireTime = 0;

  constructor(private projectId: string) {
    this.getConfigTemplate = this.getConfigTemplate.bind(this);
  }

  async getConfigTemplate() {
    const currentTime = new Date().getTime();

    if (currentTime > this.expireTime) {
      this.configTemplate = null;
    }

    if (this.configTemplate) return this.configTemplate;

    const token = await this.getAccessToken();

    const response = await fetch(
      `https://firebaseremoteconfig.googleapis.com/v1/projects/${
        this.projectId
      }/remoteConfig`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
          "Accept-Encoding": "gzip",
        },
      },
    );

    const responseJson: {
      parameters: {
        [key in keyof IFirebaseRemoteConfigTemplate]?: {
          defaultValue?: { value?: IFirebaseRemoteConfigTemplate[key] };
        }
      };
    } = await response.json();

    this.configTemplate = Object.keys(responseJson.parameters).reduce(
      (accumulator, key) => {
        // prettier-ignore
        if (
          responseJson.parameters[key as keyof IFirebaseRemoteConfigTemplate] &&
          responseJson.parameters[key as keyof IFirebaseRemoteConfigTemplate]!.defaultValue &&
          responseJson.parameters[key as keyof IFirebaseRemoteConfigTemplate]!.defaultValue!.value !== undefined
        ) {
          accumulator[key as keyof IFirebaseRemoteConfigTemplate] = responseJson.parameters[key as keyof IFirebaseRemoteConfigTemplate]!.defaultValue!.value!;
        }
        return accumulator;
      },
      {} as IFirebaseRemoteConfigTemplate,
    );
    this.expireTime = currentTime + 3600 * 1000;

    return this.configTemplate;
  }

  private getAccessToken() {
    return new Promise<string>((resolve, reject) => {
      const jwtClient = new google.auth.JWT(
        key.client_email,
        undefined,
        key.private_key,
        "https://www.googleapis.com/auth/firebase.remoteconfig",
        undefined,
      );

      jwtClient.authorize((err, tokens) => {
        if (err) {
          reject(err);
          return;
        }
        resolve(tokens!.access_token!);
      });
    });
  }
}
