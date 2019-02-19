import {
  MiddlewareConsumer,
  Module,
  NestModule,
  RequestMethod,
} from "@nestjs/common";

import { ConfigModule } from "./config";
import { NextRendererMiddleware, NextRendererModule } from "./next-renderer";
import { SessionMiddleware, SessionModule } from "./session";

@Module({
  imports: [ConfigModule, NextRendererModule, SessionModule],
})
export class ApplicationModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(SessionMiddleware, NextRendererMiddleware)
      .forRoutes({ path: "", method: RequestMethod.ALL });
  }
}
