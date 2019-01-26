import { Module } from "@nestjs/common";

import { ConfigModule } from "./config";
import { GraphQLModule } from "./graphql";
import { GraphQLSchemaModule } from "./graphql-schema";
import { NextRendererModule } from "./next-renderer";

@Module({
  imports: [
    ConfigModule,
    GraphQLModule,
    GraphQLSchemaModule,
    NextRendererModule,
  ],
})
export class ApplicationModule {}
