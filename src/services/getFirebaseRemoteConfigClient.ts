import { google } from "googleapis";
import fetch from "node-fetch";

const CACHE_EXPIRE_SECONDS = 300; // 5 minutes.

let firebaseRemoteConfigClient: FirebaseRemoteConfigClient | null = null;

type Credentials = {
  projectId: string;
  clientEmail: string;
  privateKey: string;
};

/**
 * Returns a shared client instance which caches results for reuse between
 * requests.
 *
 * @param firebaseProjectId Firebase project id. Used to create request URL.
 */
export function getFirebaseRemoteConfigClient(credentials: Credentials) {
  if (firebaseRemoteConfigClient) return firebaseRemoteConfigClient;

  firebaseRemoteConfigClient = new FirebaseRemoteConfigClient(credentials);
  return firebaseRemoteConfigClient;
}

class FirebaseRemoteConfigClient {
  private cacheExpireTime: number = 0;
  private cachedTemplate: Record<string, unknown> | null = null;
  private jwtClient: InstanceType<typeof google.auth.JWT>;

  constructor(private credentials: Credentials) {
    this.jwtClient = new google.auth.JWT(
      this.credentials.clientEmail,
      undefined,
      this.credentials.privateKey,
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
        this.credentials.projectId
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
