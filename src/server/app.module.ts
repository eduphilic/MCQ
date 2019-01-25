import { Module } from "@nestjs/common";
import { GraphQLModule } from "./graphql";
import { GraphQLSchemaModule } from "./graphql-schema";
import { NextRendererModule } from "./next-renderer";
import { Test1Module } from "./test1/test1.module";

@Module({
  imports: [
    GraphQLModule,
    GraphQLSchemaModule,
    NextRendererModule,
    Test1Module,
  ],
})
export class ApplicationModule {}
