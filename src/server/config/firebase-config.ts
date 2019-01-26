import { Injectable, OnModuleInit } from "@nestjs/common";
import * as functions from "firebase-functions";
import { ConfigLoader } from "./config.interfaces";

@Injectable()
export class FirebaseConfig<T extends object>
  implements OnModuleInit, ConfigLoader<T> {
  private config!: T | null;

  onModuleInit() {
    const config = functions.config();

    if (Object.keys(config).length === 0) {
      this.config = null;
      return;
    }

    this.config = config as T;
  }

  getConfig() {
    return this.config;
  }
}
