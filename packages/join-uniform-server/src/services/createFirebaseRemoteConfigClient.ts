import { JWT } from "google-auth-library";
import fetch from "node-fetch";
import { DBFirebaseRemoteConfigTemplate } from "~/models";

export type FirebaseRemoteConfigClientCredentials = {
  projectId: string;
  clientEmail: string;
  privateKey: string;
};

type FirebaseRemoteConfigTemplate = {
  parameters?: Record<
    string,
    {
      defaultValue: { value: string };
    }
  >;
  version: {
    versionNumber: string;
  };
};

type Options = {
  credentials: FirebaseRemoteConfigClientCredentials;
  dev: boolean;
};

export async function createFirebaseRemoteConfigClient(options: Options) {
  const client = new FirebaseRemoteConfigClient(options);

  await client.initialize();

  return client;
}

export class FirebaseRemoteConfigClient {
  private readonly jwtClient: InstanceType<typeof JWT>;
  private wasInitialized = false;
  private template!: FirebaseRemoteConfigTemplate;

  constructor(private options: Options) {
    this.jwtClient = new JWT(
      options.credentials.clientEmail,
      undefined,
      options.credentials.privateKey,
      "https://www.googleapis.com/auth/firebase.remoteconfig",
      undefined,
    );
  }

  /**
   * Returns the configuration values from the loaded Firebase Remote Config
   * template.
   */
  getValues() {
    this.assertInitialized(true);
    return this.decodeTemplateValues(this.template);
  }

  /**
   * Updates the Firebase Remote Config template using the provided values.
   *
   * @param values Updated values to publish to Firebase Remote Config.
   */
  async setValues(values: DBFirebaseRemoteConfigTemplate) {
    this.assertInitialized(true);

    const parameters: FirebaseRemoteConfigTemplate["parameters"] = {};

    Object.entries(values).forEach(([key, value]) => {
      parameters[key] = {
        defaultValue: { value: JSON.stringify(value) },
      };
    });

    const newTemplate: FirebaseRemoteConfigTemplate = { ...this.template };
    newTemplate.version.versionNumber = (
      parseInt(newTemplate.version.versionNumber, 10) + 1
    ).toString();
    newTemplate.parameters = parameters;

    await this.updateTemplate(newTemplate);
    this.template = newTemplate;
  }

  /**
   * Initialize the Firebase Remote Config client. Retrieves and caches the
   * template.
   */
  async initialize() {
    this.assertInitialized(false);

    const remoteTemplate: FirebaseRemoteConfigTemplate = await this.fetchTemplate();
    this.template = remoteTemplate;
    this.wasInitialized = true;
  }

  /**
   * Return the values from the provided Remote Config template.
   *
   * @param template Firebase Remote Config template.
   */
  private decodeTemplateValues(
    template: FirebaseRemoteConfigTemplate,
  ): DBFirebaseRemoteConfigTemplate {
    if (!template.parameters) {
      throw new Error(`
Firebase Remote Config template is missing "parameters" field.
`);
    }
    const parameters: any = {};

    try {
      Object.entries(template.parameters).forEach(([key, value]) => {
        if (
          value.defaultValue === undefined ||
          value.defaultValue.value === undefined
        ) {
          return;
        }

        parameters[key] = JSON.parse(value.defaultValue.value);
      });
    } catch (e) {
      throw new Error(`
Failed to decode Firebase Remote Config template.

Error: ${e.message}
`);
    }

    return parameters;
  }

  /**
   * Forcibly publishes the provided template to Firebase Remote Config.
   *
   * @param template Firebase Remote Config template.
   */
  private async updateTemplate(template: FirebaseRemoteConfigTemplate) {
    const accessToken = await this.getAccessToken();
    const body = JSON.stringify(template);
    const response = await fetch(
      `https://firebaseremoteconfig.googleapis.com/v1/projects/${
        this.options.credentials.projectId
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
      throw new Error(`
Failed to update Firebase Remote Config template.

Fetch error: ${response.statusText}
`);
    }
  }

  /**
   * Fetch Remote Config template.
   */
  private async fetchTemplate() {
    const accessToken = await this.getAccessToken();
    const response = await fetch(
      `https://firebaseremoteconfig.googleapis.com/v1/projects/${
        this.options.credentials.projectId
      }/remoteConfig`,
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
          "Accept-Encoding": "gzip",
        },
      },
    );

    if (!response.ok) {
      throw new Error(`
Failed to fetch Firebase Remote Config template.

Fetch error: ${response.statusText}
`);
    }

    return response.json();
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

  /**
   * Throws an error if the client has not been initialized.
   *
   * @param shouldBeInitialized Whether or not the client should be initialized.
   */
  private assertInitialized(shouldBeInitialized: boolean) {
    if (shouldBeInitialized !== this.wasInitialized) {
      throw new Error(`
FirebaseRemoteConfigClient was ${
        shouldBeInitialized ? "not" : "already"
      } initialized.
`);
    }
  }
}
