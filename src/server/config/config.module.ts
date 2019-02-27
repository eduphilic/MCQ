import { Module } from "@nestjs/common";
import { ConfigController } from "./config.controller";
import { ConfigService } from "./config.service";

/**
 * Exposes the server configuration which was loaded from environment variables.
 */
@Module({
  providers: [ConfigService],
  exports: [ConfigService],
  controllers: [ConfigController],
})
export class ConfigModule {}
