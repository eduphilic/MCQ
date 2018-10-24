import { google } from "googleapis";
import fetch from "node-fetch";

const CACHE_EXPIRE_SECONDS = 300; // 5 minutes.

let firebaseRemoteConfigClient: FirebaseRemoteConfigClient | null = null;

/**
 * Returns a shared client instance which caches results for reuse between
 * requests.
 *
 * @param firebaseProjectId Firebase project id. Used to create request URL.
 */
export function getFirebaseRemoteConfigClient(firebaseProjectId: string) {
  if (firebaseRemoteConfigClient) return firebaseRemoteConfigClient;

  firebaseRemoteConfigClient = new FirebaseRemoteConfigClient(
    firebaseProjectId,
  );

  return firebaseRemoteConfigClient;
}

class FirebaseRemoteConfigClient {
  private cacheExpireTime: number = 0;
  private cachedTemplate: Record<string, unknown> | null = null;
  private jwtClient: InstanceType<typeof google.auth.JWT>;

  constructor(private firebaseProjectId: string) {
    const accountCredentials = getAccountCredentials();

    this.jwtClient = new google.auth.JWT(
      accountCredentials.client_email,
      undefined,
      accountCredentials.private_key,
      "https://www.googleapis.com/auth/firebase.remoteconfig",
      undefined,
    );
  }

  /**
   * Returns the requested parameter, optionally parsing from stringified JSON.
   * It caches results for reuse between requests.
   *
   * @param key The parameter key.
   * @param parseJson
   * Whether or not to parse the parameter into a JSON object.
   * Defaults to true.
   */
  async getParameterByKey(key: string, parseJson: boolean = true) {
    await this.updateTemplateCache();

    let parameter = this.cachedTemplate![key];
    if (parameter === undefined) {
      throw new Error(
        `Firebase RemoteConfig parameter "${key}" does not exist.`,
      );
    }

    if (parseJson) {
      if (typeof parameter !== "string") {
        throw new Error(
          `Firebase RemoteConfig parameter "${key}" can not be JSON parsed because it is not a string.`,
        );
      }
      try {
        parameter = JSON.parse(parameter);
      } catch (e) {
        throw new Error(
          `Firebase RemoteConfig parameter "${key}" failed to parse: ${
            e.message
          }`,
        );
      }
    }

    return parameter;
  }

  private async updateTemplateCache() {
    const currentTime = new Date().getTime();

    // Invalidate cache if it is expired.
    if (currentTime > this.cacheExpireTime) this.cachedTemplate = null;
    if (this.cachedTemplate) return;

    const accessToken = await this.getAccessToken();
    const response = await fetch(
      `https://firebaseremoteconfig.googleapis.com/v1/projects/${
        this.firebaseProjectId
      }/remoteConfig`,
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
          "Accept-Encoding": "gzip",
        },
      },
    );
    const responseJson: {
      parameters: Record<string, { defaultValue?: { value?: any } }>;
    } = await response.json();

    this.cachedTemplate = {};
    Object.keys(responseJson.parameters).forEach(key => {
      if (
        responseJson.parameters[key] &&
        responseJson.parameters[key].defaultValue &&
        responseJson.parameters[key].defaultValue!.value !== undefined
      ) {
        this.cachedTemplate![key] = responseJson.parameters[
          key
        ].defaultValue!.value!;
      }
    });

    this.cacheExpireTime = currentTime + CACHE_EXPIRE_SECONDS * 1000;
  }

  private async getAccessToken() {
    return new Promise<string>((resolve, reject) => {
      this.jwtClient.authorize((err, tokens) => {
        if (err) {
          reject(err);
          return;
        }
        resolve(tokens!.access_token!);
      });
    });
  }
}

/**
 * Returns the Firebase Admin SDK Service Account required to access Firebase
 * RemoteConfig.
 */
function getAccountCredentials() {
  return {
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
}
