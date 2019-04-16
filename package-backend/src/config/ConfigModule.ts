import { Module } from "@nestjs/common";
import { ConfigService } from "./ConfigService";

/**
 * Loads and makes available the application config.
 */
@Module({
  providers: [ConfigService],
  exports: [ConfigService],
})
export class ConfigModule {}
