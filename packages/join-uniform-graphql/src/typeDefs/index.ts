import { DocumentNode } from "graphql";
import gql from "graphql-tag";

import TypeMutation from "./TypeMutation.graphql";
import TypeQuery from "./TypeQuery.graphql";

import ScalarJson from "./ScalarJson.graphql";
import ScalarTranslation from "./ScalarTranslation.graphql";

import EnumLanguage from "./EnumLanguage.graphql";

import TypeCategory from "./TypeCategory.graphql";
import TypeCloudinaryMediaWidgetAuthenticationToken from "./TypeCloudinaryMediaWidgetAuthenticationToken.graphql";
import TypeEntry from "./TypeEntry.graphql";
import TypeHtmlConfig from "./TypeHtmlConfig.graphql";
import TypeLogoConfig from "./TypeLogoConfig.graphql";

export const typeDefs: DocumentNode = gql`
  ${TypeQuery}
  ${TypeMutation}

  ${ScalarJson}
  ${ScalarTranslation}

  ${EnumLanguage}

  ${TypeCategory}
  ${TypeCloudinaryMediaWidgetAuthenticationToken}
  ${TypeEntry}
  ${TypeHtmlConfig}
  ${TypeLogoConfig}
`;
