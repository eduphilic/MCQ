import { Module } from "@nestjs/common";
import {
  GqlModuleOptions,
  GraphQLModule as NestGraphQLModule,
} from "@nestjs/graphql";
import path from "path";
import { GraphQLSchemaModule, GraphQLSchemaService } from "../graphql-schema";
import { GraphQLController } from "./graphql.controller";

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
        playground: false,
      }),
      inject: [GraphQLSchemaService],
    }),
  ],
  controllers: [GraphQLController],
})
export class GraphQLModule {}
