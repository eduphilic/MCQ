import { Module } from "@nestjs/common";
import { ConfigService } from "./config.service";
import { FirebaseConfig } from "./firebase-config";

@Module({
  providers: [ConfigService, FirebaseConfig],
})
export class ConfigModule {}
