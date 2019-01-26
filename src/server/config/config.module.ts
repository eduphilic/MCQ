import { Module } from "@nestjs/common";
import { ConfigService } from "./config.service";
import { FirebaseConfig } from "./firebase-config";
import { FirebaseCliConfig } from "./firebase-cli-config";

@Module({
  providers: [ConfigService, FirebaseConfig, FirebaseCliConfig],
})
export class ConfigModule {}
