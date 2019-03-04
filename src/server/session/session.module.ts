import { Module } from "@nestjs/common";
import { ConfigModule } from "../config";
import { CookieSessionMiddleware } from "./cookie-session.middleware";
import { SessionController } from "./session.controller";
import { SessionMiddleware } from "./session.middleware";

@Module({
  imports: [ConfigModule],
  providers: [CookieSessionMiddleware, SessionMiddleware],
  exports: [CookieSessionMiddleware, SessionMiddleware],
  controllers: [SessionController],
})
export class SessionModule {}
