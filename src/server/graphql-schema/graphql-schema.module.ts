import { Module } from "@nestjs/common";
import { GraphQLSchemaService } from "./graphql-schema.service";

@Module({
  providers: [GraphQLSchemaService],
  exports: [GraphQLSchemaService],
})
export class GraphQLSchemaModule {}
