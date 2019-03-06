import {
  MiddlewareConsumer,
  Module,
  NestModule,
  RequestMethod,
} from "@nestjs/common";
import { ConfigModule } from "./config";
import { LandingModule } from "./landing";
import { SessionMiddleware, SessionModule } from "./session";
import { UserModule } from "./user";

@Module({
  imports: [ConfigModule, SessionModule, UserModule, LandingModule],
})
export class ApplicationModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(SessionMiddleware)
      .forRoutes({ path: "", method: RequestMethod.ALL });
  }
}
