import path from "path";
import { Module } from "@nestjs/common";
import {
  GraphQLModule as NestGraphQLModule,
  GqlModuleOptions,
} from "@nestjs/graphql";
import { GraphQLSchemaModule, GraphQLSchemaService } from "../graphql-schema";

@Module({
  imports: [
    NestGraphQLModule.forRootAsync({
      imports: [GraphQLSchemaModule],
      useFactory: async (
        schemaService: GraphQLSchemaService,
      ): Promise<GqlModuleOptions> => ({
        typeDefs: schemaService.emitTypeDefs(),
        definitions:
          process.env.NODE_ENV !== "production"
            ? {
                outputAs: "class",
                path: path.resolve(
                  __dirname,
                  "../../src/server/graphql.generated.ts",
                ),
              }
            : undefined,
      }),
      inject: [GraphQLSchemaService],
    }),
  ],
})
export class GraphQLModule {}
