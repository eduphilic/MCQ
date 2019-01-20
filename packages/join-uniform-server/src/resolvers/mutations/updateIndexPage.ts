import gql from "graphql-tag";
import { MutationUpdateIndexPageResolver } from "~/generated";

export const TypeDefUpdateIndexPage = gql`
  extend type Mutation {
    # Updates the Index Page configuration. It returns the updated
    # configuration.
    updateIndexPage(request: UpdateIndexPageRequest!): IndexPageConfig!
  }
`;

export const updateIndexPage: MutationUpdateIndexPageResolver = async (
  _parent,
  args,
  context,
) => {
  const { request } = args;
  const { firebaseRemoteConfigClient: config } = context;

  const configValues = config.getValues();

  configValues.indexPageConfig = {
    heroBackgroundImageUrl: request.heroBackgroundImageUrl,
    heroBackgroundAlpha: request.heroBackgroundAlpha,
    heroPrimaryText: {
      en: request.heroPrimaryTextEnglish,
      hi: request.heroPrimaryTextHindi,
    },
    heroFeatures: request.heroFeatures,
    heroFooterText: {
      en: request.heroFooterTextEnglish,
      hi: request.heroFooterTextHindi,
    },
    aboutTitle: {
      en: request.aboutTitleEnglish,
      hi: request.aboutTitleHindi,
    },
    aboutText: {
      en: request.aboutTextEnglish,
      hi: request.aboutTextHindi,
    },
    aboutImages: request.aboutImages,
  };

  await config.setValues(configValues);

  return {
    id: "index-page-config",
    ...configValues.indexPageConfig,
  };
};
