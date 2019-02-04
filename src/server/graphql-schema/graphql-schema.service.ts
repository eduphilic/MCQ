import { Injectable } from "@nestjs/common";
import { DocumentNode, printSchema } from "graphql";
import gql from "graphql-tag";
import { makeExecutableSchema } from "graphql-tools";

@Injectable()
export class GraphQLSchemaService {
  private typeDefsEmitted = false;
  private typeDefs = [
    gql`
      type Query {
        _empty: Boolean
      }

      type Mutation {
        _empty: Boolean
      }
    `,
  ];

  registerGraphQLTypeDefinition(
    typeDefOrTypeDefs: DocumentNode | DocumentNode[],
  ) {
    this.assertTypeDefsNotEmitted();

    const definitions = !Array.isArray(typeDefOrTypeDefs)
      ? [typeDefOrTypeDefs]
      : typeDefOrTypeDefs;

    this.typeDefs.push(...definitions);
  }

  emitTypeDefs() {
    this.assertTypeDefsNotEmitted();
    this.typeDefsEmitted = true;

    const schema = makeExecutableSchema({ typeDefs: this.typeDefs });
    return printSchema(schema);
  }

  /**
   * Ensure resolvers have registered their GraphQL type definitions before the
   * server is initialized.
   */
  private assertTypeDefsNotEmitted() {
    if (this.typeDefsEmitted) {
      throw new Error("GraphQL TypeDefs were already emitted.");
    }
  }
}
