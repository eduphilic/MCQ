import { HtmlConfig, LogoConfig } from "@join-uniform/graphql";
import fs from "fs";
import { JWT } from "google-auth-library";
import fetch from "node-fetch";
import * as yup from "yup";

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
  /** File path to store/load local copy of Firebase Remote Config Template. */
  templatePath: string;
};

type Values = ReturnType<ReturnType<typeof createSchema>["validateSync"]>;

export async function createFirebaseRemoteConfigClient(options: Options) {
  const client = new FirebaseRemoteConfigClient(options);

  await client.initialize();

  return client;
}

export class FirebaseRemoteConfigClient {
  private readonly jwtClient: InstanceType<typeof JWT>;
  private readonly schema: ReturnType<typeof createSchema>;
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
    this.schema = createSchema();
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
  async setValues(values: any) {
    this.assertInitialized(true);
    try {
      this.schema.validateSync(values);
    } catch (e) {
      throw new Error(`
Firebase Remote Config values update failed validation.

Validation error: ${e.message}
`);
    }

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
   *
   * In development mode: validate both the local and remote copies of the
   * Firebase Remote Config template. It updates either the remote or local copy
   * depending on which has a higher version number.
   */
  async initialize() {
    this.assertInitialized(false);

    /* tslint:disable-next-line:no-console */
    console.log("FirebaseRemoteConfigClient: Validating remote template.");
    const remoteTemplate: FirebaseRemoteConfigTemplate = await this.fetchTemplate();

    const templateValues = this.decodeTemplateValues(remoteTemplate);
    this.schema.validateSync(templateValues);
    this.template = remoteTemplate;

    if (this.options.dev) await synchronizeTemplate.call(this);
    this.wasInitialized = true;
    /* tslint:disable-next-line:no-console */
    console.log("FirebaseRemoteConfigClient: Initialization complete.");
    return;

    async function synchronizeTemplate(this: FirebaseRemoteConfigClient) {
      let localTemplate: FirebaseRemoteConfigTemplate | null = null;
      if (fs.existsSync(this.options.templatePath)) {
        /* tslint:disable-next-line:no-console */
        console.log("FirebaseRemoteConfigClient: Validating local template.");
        localTemplate = JSON.parse(
          fs.readFileSync(this.options.templatePath, "utf8"),
        );
        const localTemplateValues = this.decodeTemplateValues(localTemplate!);
        this.schema.validateSync(localTemplateValues);
      }

      // Store local copy of template if local version doesn't exist or has a
      // lesser version number than the remote version.
      if (
        !localTemplate ||
        parseInt(localTemplate.version.versionNumber, 10) <
          parseInt(remoteTemplate.version.versionNumber, 10)
      ) {
        /* tslint:disable-next-line:no-console */
        console.log("FirebaseRemoteConfigClient: Updating local template.");
        fs.writeFileSync(
          this.options.templatePath,
          `${JSON.stringify(remoteTemplate, null, 2)}\n`,
          "utf8",
        );
      }

      // Update remote copy of template of local version has a higher version
      // number.
      if (
        localTemplate &&
        parseInt(localTemplate.version.versionNumber, 10) >
          parseInt(remoteTemplate.version.versionNumber, 10)
      ) {
        /* tslint:disable-next-line:no-console */
        console.log("FirebaseRemoteConfigClient: Updating remote template.");
        await this.updateTemplate(localTemplate);
        this.template = localTemplate;
      }
    }
  }

  /**
   * Return the values from the provided Remote Config template.
   *
   * @param template Firebase Remote Config template.
   */
  private decodeTemplateValues(template: FirebaseRemoteConfigTemplate): Values {
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

function createSchema() {
  // const localizedString = () =>
  //   yup
  //     .object()
  //     .shape({
  //       key: yup.string().required(),
  //       en: yup.string().required(),
  //       hi: yup.string(),
  //     })
  //     .required();

  return yup
    .object<{ htmlConfig: HtmlConfig; logoConfig: LogoConfig }>()
    .shape({
      htmlConfig: yup
        .object<HtmlConfig>()
        .shape({
          googleAnalyticsId: yup.string(),
          metaKeywords: yup.string(),
          metaDescription: yup.string(),
          metaAuthor: yup.string(),
          metaAbstract: yup.string(),
          metaCopyright: yup.string(),
          landingFooter: yup.string(),
        })
        .required(),
      logoConfig: yup.object<LogoConfig>().shape({
        url: yup.string().required(),
      }),

      // // Legacy configuration:
      // logoImageConfig: yup
      //   .object()
      //   .shape({
      //     url: yup.string().nullable(true),
      //   })
      //   .required(),
      // sessionFormConfig: yup
      //   .object()
      //   .shape({
      //     formTitleUserSignIn: localizedString(),
      //     formTitleUserSignUp: localizedString(),
      //     formTitleAdminSignIn: localizedString(),
      //     fullNameFieldPlaceholder: localizedString(),
      //     phoneNumberFieldPlaceholder: localizedString(),
      //     passwordFieldPlaceholder: localizedString(),
      //     passwordVerifyFieldPlaceholder: localizedString(),
      //     emailAddressFieldPlaceholder: localizedString(),
      //     submitButtonLabel: localizedString(),
      //     termsConditionsCheckboxLabel: localizedString(),
      //     passwordResetLinkLabel: localizedString(),
      //   })
      //   .required(),
      // adminLoginPageConfig: yup
      //   .object()
      //   .shape({
      //     heroPrimaryText: localizedString(),
      //     heroSecondaryText: localizedString(),
      //   })
      //   .required(),
      // indexPageConfig: yup
      //   .object()
      //   .shape({
      //     heroBackgroundImageUrl: yup.string().required(),
      //     heroBackgroundAlpha: yup.number().required(),
      //     heroPrimaryText: localizedString(),
      //     heroFeatures: yup
      //       .array()
      //       .of(localizedString())
      //       .required(),
      //     heroFooterText: localizedString(),
      //     aboutTitle: localizedString(),
      //     aboutText: localizedString(),
      //     aboutImages: yup
      //       .array()
      //       .of(
      //         yup.object().shape({
      //           imageUrl: yup.string().required(),
      //           title: localizedString(),
      //           text: localizedString(),
      //         }),
      //       )
      //       .required(),
      //   })
      //   .required(),
    });
}
