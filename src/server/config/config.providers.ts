import { Provider } from "@nestjs/common/interfaces";
import childProcess from "child_process";
import * as functions from "firebase-functions";
import path from "path";
import * as yup from "yup";
import { Config } from "./config.dto";

export enum ConfigProviders {
  Combined = "Combined",
  Environment = "Environment",
  Cli = "Cli",
  Schema = "Schema",
}

/**
 * Returns async providers to ensure that the server configuration is loaded
 * before other modules start initializing.
 */
export function createProviders(): Provider[] {
  return [
    createConfigProvider(),
    createEnvironmentConfigProvider(),
    createCliConfigProvider(),
    createConfigSchemaProvider(),
  ];
}

/**
 * Provides a validation schema for the environment variables. This ensures that
 * the environment has been configured properly.
 */
export function createConfigSchemaProvider() {
  return {
    provide: ConfigProviders.Schema,
    useValue: yup.object<Config>({
      recaptcha: yupDict({ site_key: 0, secret_key: 0 }),
      session: yupDict({ key: 0, expire_milliseconds: 0 }),
    }),
  };

  type StringDictionary<T> = { [f in keyof T]: string };

  function yupDict<T extends StringDictionary<T>>(fields: Record<keyof T, 0>) {
    // eslint-disable-next-line @typescript-eslint/no-object-literal-type-assertion
    const initial = {} as yup.ObjectSchemaDefinition<T>;

    return yup
      .object<T>(
        Object.keys(fields).reduce((accumulator, key) => {
          accumulator[key as keyof T] = yup.string().required();
          return accumulator;
        }, initial),
      )
      .required();
  }
}

/**
 * Returns the server configuration using a combination of the strategies
 * exposed by createEnvironmentConfigProvider and createCliConfigProvider.
 */
export function createConfigProvider<T extends object>() {
  return {
    provide: ConfigProviders.Combined,
    inject: [ConfigProviders.Environment, ConfigProviders.Cli],
    useFactory: async (
      environmentConfig: T | null,
      cliConfigProvider: () => T,
    ) => {
      const config = environmentConfig;

      return config || cliConfigProvider();
    },
  };
}

/**
 * Provides the server environment variables which were injected by Firebase.
 * When not operating in a Firebase cloud environment, the returned value will
 * be null.
 */
export function createEnvironmentConfigProvider<T extends object>() {
  return {
    provide: ConfigProviders.Environment,
    useFactory: async (): Promise<T | null> => {
      const config = functions.config();
      return Object.keys(config).length === 0 ? null : (config as T);
    },
  };
}

/**
 * Provider which exposes a function which attempts to load the Firebase
 * environment variables using the Firebase command line tool. This is used when
 * operating using the Firebase emulator and when running the server directly
 * with Node.
 */
export function createCliConfigProvider<T extends object>() {
  return {
    provide: ConfigProviders.Cli,
    useFactory: async () => (): T => {
      let stdout: string;
      try {
        stdout = childProcess.execSync("yarn firebase functions:config:get", {
          cwd: path.resolve(__dirname, "../.."),
          env: process.env,
          encoding: "utf8",
        });
      } catch (e) {
        throw new Error(`Failed to retrieve Firebase Environmental variables.
This is needed to support running the Firebase emulator during development.
Ensure you have authenticated the project with Firebase using: yarn firebase login

Error: ${e.message}
`);
      }

      // Trim any text surrounding the stdout from the executed command. We are only
      // interested in the printed out JSON.
      let foundStart = false;
      let foundEnd = false;
      const firebaseEnvironmentalVariablesJson = stdout
        .split("\n")
        .filter(l => {
          if (!foundStart && l !== "{") return false;
          if (!foundStart && l === "{") {
            foundStart = true;
            return true;
          }
          if (!foundEnd && l === "}") {
            foundEnd = true;
            return true;
          }
          if (foundEnd) return false;
          return true;
        })
        .join("\n")
        .concat("\n");

      return JSON.parse(firebaseEnvironmentalVariablesJson);
    },
  };
}
