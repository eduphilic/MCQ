import childProcess from "child_process";
import { Injectable, OnModuleInit } from "@nestjs/common";
import { ConfigLoader } from "./config.interfaces";

@Injectable()
export class FirebaseCliConfig<T extends object>
  implements OnModuleInit, ConfigLoader<T> {
  private config!: T | null;

  onModuleInit() {
    this.config = this.getFirebaseEnvironmentalVariables();
  }

  getConfig() {
    return this.config;
  }

  /**
   * The Firebase Functions development emulator does not have access to
   * configured production environmental variables. To work around this we
   * retrieve using the command documented below:
   *
   * @see https://firebase.google.com/docs/functions/local-emulator#install_and_configure_the_cloud_functions_shell
   */
  private getFirebaseEnvironmentalVariables() {
    let stdout: string;
    try {
      stdout = childProcess.execSync("yarn firebase functions:config:get", {
        cwd: __dirname,
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

    return JSON.parse(firebaseEnvironmentalVariablesJson) as T;
  }
}
