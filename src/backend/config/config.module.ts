import { Module } from "@nestjs/common";
import { ConfigService } from "./config.service";

/**
 * Exposes the server configuration which was loaded from environment variables.
 */
@Module({
  providers: [ConfigService],
  exports: [ConfigService],
})
export class ConfigModule {}
