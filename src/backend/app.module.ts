import { Module } from "@nestjs/common";
import { ConfigModule } from "./config";
import { LandingModule } from "./landing";
import { SecurityModule } from "./security";
import { UserModule } from "./user";

@Module({
  imports: [ConfigModule, LandingModule, SecurityModule, UserModule],
})
export class ApplicationModule {}
