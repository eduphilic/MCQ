import { DocumentNode } from "graphql";
import gql from "graphql-tag";

import htmlConfig from "./TypeHtmlConfig.graphql";
import logoConfig from "./TypeLogoConfig.graphql";
import query from "./TypeQuery.graphql";

export const typeDefs: DocumentNode = gql`
  ${query}

  ${htmlConfig}
  ${logoConfig}
`;
