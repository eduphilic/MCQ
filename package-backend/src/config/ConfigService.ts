import { Injectable } from "@nestjs/common";
import dotenv from "dotenv";
import * as functions from "firebase-functions";
import fs from "fs";
import path from "path";
import * as yup from "yup";
import { ConfigModel } from "./ConfigModel";

@Injectable()
export class ConfigService {
  private config: ConfigModel;

  constructor() {
    this.config = loadAndValidateEnvironmentConfig();
  }

  /**
   * Get the loaded application configuration.
   */
  getConfig() {
    return this.config;
  }
}

function loadAndValidateEnvironmentConfig() {
  let envConfig: Record<string, string>;

  if (process.env.NODE_ENV === "development") {
    envConfig = loadFromEnvFile();
  } else {
    envConfig = loadFromFirebaseConfig();
  }

  return yup
    .object<ConfigModel>({
      DEPLOYMENT_API_KEY: yup.string().required(),
    })
    .validateSync(envConfig, { strict: true, stripUnknown: true });
}

function loadFromEnvFile() {
  const workspaceRootPath = path.resolve(__dirname, "../../..");

  return dotenv.parse(
    fs.readFileSync(path.join(workspaceRootPath, ".env"), "utf8"),
  );
}

function loadFromFirebaseConfig() {
  const firebaseConfig = functions.config();
  const envConfig: Record<string, string> = {};

  // Flatten the Firebase config object into environment variables.
  Object.entries(firebaseConfig).forEach(([serviceKey, serviceValueMap]) => {
    Object.entries(serviceValueMap).forEach(([key, value]) => {
      envConfig[
        `${serviceKey.toUpperCase()}_${key.toUpperCase()}`
      ] = value as string;
    });
  });

  return envConfig;
}
