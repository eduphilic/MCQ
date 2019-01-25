import { Module } from "@nestjs/common";
import { GraphQLModule as NestGraphQLModule } from "@nestjs/graphql";
import { GraphQLSchemaModule, GraphQLSchemaService } from "../graphql-schema";

@Module({
  imports: [
    NestGraphQLModule.forRootAsync({
      imports: [GraphQLSchemaModule],
      useFactory: async (schemaService: GraphQLSchemaService) => ({
        typeDefs: schemaService.emitTypeDefs(),
      }),
      inject: [GraphQLSchemaService],
    }),
  ],
})
export class GraphQLModule {}
