// We override the type definition because currently "gql" returns any.
// https://github.com/apollographql/graphql-tag/commit/c5a32a6d9330614eb7f8ce22948be195e474d8f5
// https://stackoverflow.com/questions/41558661/ignore-bundled-d-ts-and-use-external-declarations/41559327#41559327
/* eslint-disable @typescript-eslint/no-explicit-any */
declare module "graphql-tag" {
  import { DocumentNode } from "graphql";

  export default function gql(
    literals: any,
    ...placeholders: any[]
  ): DocumentNode;
}
