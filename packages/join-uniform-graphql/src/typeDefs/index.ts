import { DocumentNode } from "graphql";
import gql from "graphql-tag";

import TypeMutation from "./TypeMutation.graphql";
import TypeQuery from "./TypeQuery.graphql";

import ScalarJson from "./ScalarJson.graphql";
import ScalarLocalizedString from "./ScalarLocalizedString.graphql";
import ScalarTranslation from "./ScalarTranslation.graphql";

import EnumLanguage from "./EnumLanguage.graphql";

import TypeCategory from "./TypeCategory.graphql";
import TypeCloudinaryMediaWidgetAuthenticationToken from "./TypeCloudinaryMediaWidgetAuthenticationToken.graphql";
import TypeEntry from "./TypeEntry.graphql";
import TypeHtmlConfig from "./TypeHtmlConfig.graphql";
import TypeIndexCard from "./TypeIndexCard.graphql";
import TypeIndexCardCategory from "./TypeIndexCardCategory.graphql";
import TypeIndexPageAboutImage from "./TypeIndexPageAboutImage.graphql";
import TypeIndexPageConfig from "./TypeIndexPageConfig.graphql";
import TypeIndexYouTubeVideo from "./TypeIndexYouTubeVideo.graphql";
import TypeLogoConfig from "./TypeLogoConfig.graphql";

import InputAboutImageUpdate from "./InputAboutImageUpdate.graphql";
import InputCategoryCreationRequestExistingEntry from "./InputCategoryCreationRequestExistingEntry.graphql";
import InputCategoryCreationRequestNewEntry from "./InputCategoryCreationRequestNewEntry.graphql";
import InputCategoryUpdate from "./InputCategoryUpdate.graphql";
import InputEntryUpdate from "./InputEntryUpdate.graphql";
import InputIndexCardCategoryUpdate from "./InputIndexCardCategoryUpdate.graphql";
import InputIndexCardUpdate from "./InputIndexCardUpdate.graphql";
import InputIndexPageUpdate from "./InputIndexPageUpdate.graphql";

export const typeDefs: DocumentNode = gql`
  ${TypeQuery}
  ${TypeMutation}

  ${ScalarJson}
  ${ScalarLocalizedString}
  ${ScalarTranslation}

  ${EnumLanguage}

  ${TypeCategory}
  ${TypeCloudinaryMediaWidgetAuthenticationToken}
  ${TypeEntry}
  ${TypeHtmlConfig}
  ${TypeIndexCard}
  ${TypeIndexCardCategory}
  ${TypeIndexPageAboutImage}
  ${TypeIndexPageConfig}
  ${TypeIndexYouTubeVideo}
  ${TypeLogoConfig}

  ${InputAboutImageUpdate}
  ${InputCategoryCreationRequestExistingEntry}
  ${InputCategoryCreationRequestNewEntry}
  ${InputCategoryUpdate}
  ${InputEntryUpdate}
  ${InputIndexCardCategoryUpdate}
  ${InputIndexCardUpdate}
  ${InputIndexPageUpdate}
`;
