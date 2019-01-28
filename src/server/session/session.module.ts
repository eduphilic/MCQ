import { Module } from "@nestjs/common";
import { ConfigModule } from "../config";
import { SessionMiddleware } from "./session.middleware";

@Module({
  imports: [ConfigModule],
  providers: [SessionMiddleware],
})
export class SessionModule {}
