import assert from "assert";
import { Injectable, Inject } from "@nestjs/common";
import { Config } from "./config.dto";
import { ConfigProviders } from "./config.providers";

@Injectable()
export class ConfigService {
  constructor(@Inject(ConfigProviders.Combined) private config: Config) {}

  getConfig() {
    const config = this.config;
    assert(config, "Expected server environment variables to be loaded.");
    return config;
  }
}
