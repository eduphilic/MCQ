import { Injectable, OnModuleInit } from "@nestjs/common";
import * as functions from "firebase-functions";

@Injectable()
export class FirebaseConfig<T extends object> implements OnModuleInit {
  private loadedConfig!: T | null;

  onModuleInit() {
    const config = functions.config();

    if (Object.keys(config).length === 0) {
      this.loadedConfig = null;
      return;
    }

    this.loadedConfig = config as T;
  }

  getLoadedConfig() {
    return this.loadedConfig;
  }
}
