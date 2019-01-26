import { Module } from "@nestjs/common";
import { GraphQLModule } from "./graphql";
import { GraphQLSchemaModule } from "./graphql-schema";
import { NextRendererModule } from "./next-renderer";

@Module({
  imports: [GraphQLModule, GraphQLSchemaModule, NextRendererModule],
})
export class ApplicationModule {}
