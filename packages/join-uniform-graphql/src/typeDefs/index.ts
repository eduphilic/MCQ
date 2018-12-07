import { DocumentNode } from "graphql";
import gql from "graphql-tag";

import language from "./EnumLanguage.graphql";
import translation from "./ScalarTranslation.graphql";
import htmlConfig from "./TypeHtmlConfig.graphql";
import logoConfig from "./TypeLogoConfig.graphql";
import query from "./TypeQuery.graphql";

export const typeDefs: DocumentNode = gql`
  ${query}

  ${htmlConfig}
  ${logoConfig}

  ${language}
  ${translation}
`;
