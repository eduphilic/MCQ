import { ResolveProperty, Resolver } from "@nestjs/graphql";
import gql from "graphql-tag";
import { GraphQLSchemaService } from "../graphql-schema";

@Resolver()
export class Test1Resolver {
  constructor(schemaService: GraphQLSchemaService) {
    schemaService.registerGraphQLTypeDefinition(gql`
      extend type Query {
        cats: Boolean
      }
    `);
  }

  @ResolveProperty()
  cats() {
    return true;
  }
}
