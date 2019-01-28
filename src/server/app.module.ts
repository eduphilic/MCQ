import {
  Module,
  NestModule,
  MiddlewareConsumer,
  RequestMethod,
} from "@nestjs/common";

import { ConfigModule } from "./config";
import { GraphQLModule } from "./graphql";
import { GraphQLSchemaModule } from "./graphql-schema";
import { NextRendererModule, NextRendererMiddleware } from "./next-renderer";
import { SessionModule, SessionMiddleware } from "./session";

@Module({
  imports: [
    ConfigModule,
    GraphQLModule,
    GraphQLSchemaModule,
    NextRendererModule,
    SessionModule,
  ],
})
export class ApplicationModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(SessionMiddleware)
      .forRoutes({ path: "", method: RequestMethod.ALL });
    consumer
      .apply(NextRendererMiddleware)
      .with([/^\/graphql/])
      .forRoutes({ path: "", method: RequestMethod.ALL });
  }
}
