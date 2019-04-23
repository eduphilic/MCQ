import { Module } from "@nestjs/common";
import { ConfigService } from "./ConfigService";

/**
 * Loads and makes available the application config.
 */
@Module({
  exports: [ConfigService],
  providers: [ConfigService],
})
export class ConfigModule {}
