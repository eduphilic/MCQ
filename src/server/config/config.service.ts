import { Inject, Injectable, OnModuleInit } from "@nestjs/common";
import assert from "assert";
import * as yup from "yup";
import { Config } from "./config.dto";
import { ConfigProviders } from "./config.providers";

@Injectable()
export class ConfigService implements OnModuleInit {
  constructor(
    @Inject(ConfigProviders.Combined) private config: Config,
    @Inject(ConfigProviders.Schema) private configSchema: yup.Schema<Config>,
  ) {}

  onModuleInit() {
    this.configSchema.validateSync(this.config);
  }

  getConfig() {
    const config = this.config;
    assert(config, "Expected server environment variables to be loaded.");
    return config;
  }
}
