import { Module } from "@nestjs/common";
import { createProviders } from "./config.providers";
import { ConfigService } from "./config.service";

/**
 * Exposes the server configuration which was loaded from environment variables.
 */
@Module({
  providers: [ConfigService, ...createProviders()],
  exports: [ConfigService],
})
export class ConfigModule {}
