import { JWT } from "google-auth-library";
import fetch from "node-fetch";

const CACHE_EXPIRE_SECONDS = 300; // 5 minutes.

export class ConfigurationRepository {
  private jwtClient: InstanceType<typeof JWT>;
  private projectId: string;

  private cacheExpireTime: number = 0;
  private cachedTemplate: FirebaseTemplate | null = null;

  constructor(firebaseCredentials: FirebaseCredentials) {
    this.jwtClient = new JWT(
      firebaseCredentials.clientEmail,
      undefined,
      firebaseCredentials.privateKey,
      "https://www.googleapis.com/auth/firebase.remoteconfig",
      undefined,
    );
    this.projectId = firebaseCredentials.projectId;
  }

  /**
   * Returns the requested parameter from the RemoteConfig template.
   *
   * @param key Parameter to retrieve.
   * @param parseJson Whether or not to use JSON.parse on the value.
   */
  async getParameterByKey(key: string, parseJson = true): Promise<unknown> {
    const { parameters } = await this.getFirebaseTemplate();

    const parameter = parameters[key];
    if (
      !parameter ||
      !parameter.defaultValue ||
      !parameter.defaultValue.value
    ) {
      throw new Error(`Parameter "${key}" does not exist in the template.`);
    }

    const value = parameter.defaultValue.value;
    return parseJson ? JSON.parse(value) : value;
  }

  /**
   * Update the specified template value.
   *
   * @param key The template key for the value needing an update.
   * @param value The value to set.
   * @param stringify Whether or not to stringify the value.
   */
  async updateParameterByKey(key: string, value: any, stringify = true) {
    const template = await this.getFirebaseTemplate();
    const accessToken = await this.getAccessToken();

    // TODO: Should probably make a copy of this so that the cached template can
    // be rolled backed in the event of a failure.
    template.parameters[key] = {
      defaultValue: {
        value: stringify ? JSON.stringify(value) : value,
      },
    };

    const body = JSON.stringify(template);

    const response = await fetch(
      `https://firebaseremoteconfig.googleapis.com/v1/projects/${
        this.projectId
      }/remoteConfig`,
      {
        method: "PUT",
        headers: {
          Authorization: `Bearer ${accessToken}`,
          "Accept-Encoding": "gzip",
          "Content-Type": "application/json",
          "If-Match": "*",
        },
        body,
      },
    );

    if (!response.ok) {
      throw new Error(
        `Failed to update Firebase RemoteConfig template key "${key}": ${
          response.statusText
        }`,
      );
    }

    this.cacheExpireTime = new Date().getTime() + CACHE_EXPIRE_SECONDS * 1000;
  }

  /**
   * Request an updated Firebase RemoteConfig template if the cache has expired.
   */
  private async getFirebaseTemplate(): Promise<FirebaseTemplate> {
    const currentTime = new Date().getTime();

    // Invalidate cache if it is expired.
    if (currentTime > this.cacheExpireTime) this.cachedTemplate = null;
    if (this.cachedTemplate) return this.cachedTemplate;

    const accessToken = await this.getAccessToken();
    const response = await fetch(
      `https://firebaseremoteconfig.googleapis.com/v1/projects/${
        this.projectId
      }/remoteConfig`,
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
          "Accept-Encoding": "gzip",
        },
      },
    );

    if (!response.ok) {
      throw new Error(
        `Unable to retrieve RemoteConfig template: ${response.statusText}`,
      );
    }

    this.cachedTemplate = await response.json();
    this.cacheExpireTime = currentTime + CACHE_EXPIRE_SECONDS * 1000;
    return this.cachedTemplate!;
  }

  /**
   * Request an access token for the RemoteConfig api.
   */
  private async getAccessToken() {
    return new Promise<string>((resolve, reject) => {
      this.jwtClient.authorize((err, tokens) => {
        if (err) {
          reject(err);
          return;
        }

        if (!tokens || !tokens.access_token) {
          reject(new Error("Unable to retrieve new access token."));
          return;
        }

        resolve(tokens.access_token);
      });
    });
  }
}

export type FirebaseCredentials = {
  projectId: string;
  clientEmail: string;
  privateKey: string;
};

type FirebaseTemplate = {
  conditions?: any;
  parameters: Record<
    string,
    {
      defaultValue?: { value?: string };
      conditionalValues?: any;
      description?: string;
    }
  >;
};
