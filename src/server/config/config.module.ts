import { Module } from "@nestjs/common";
import { ConfigService } from "./config.service";
import { createProviders } from "./config.providers";

/**
 * Exposes the server configuration which was loaded from environment variables.
 */
@Module({
  providers: [ConfigService, ...createProviders()],
  exports: [ConfigService],
})
export class ConfigModule {}
