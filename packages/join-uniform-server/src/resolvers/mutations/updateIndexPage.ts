import gql from "graphql-tag";
import {
  IndexPageAboutImage,
  LocalizedString,
  MutationUpdateIndexPageResolver,
} from "~/generated";

export const TypeDefUpdateIndexPage = gql`
  extend type Mutation {
    updateIndexPage(request: IndexPageUpdateRequest!): IndexPageConfig!
  }
`;

export const updateIndexPage: MutationUpdateIndexPageResolver = async (
  _parent,
  args,
  context,
) => {
  const { request } = args;
  const {
    firebaseRemoteConfigClient: config,
    firebaseDatabase: database,
  } = context;

  const configValues = config.getValues();
  // configValues.logoConfig.url = request.logoUrl;
  configValues.indexPageConfig.heroBackgroundImageUrl = request.heroBackgroundImageUrl; // prettier-ignore
  configValues.indexPageConfig.heroBackgroundAlpha = request.heroBackgroundAlpha; // prettier-ignore
  configValues.indexPageConfig.heroPrimaryText = {
    en: request.heroPrimaryTextEnglish,
    hi: request.heroPrimaryTextHindi,
  };
  configValues.indexPageConfig.heroFeatures = request.heroFeatures.map(
    (heroFeature): LocalizedString => ({
      en: heroFeature.en,
      hi: heroFeature.hi,
    }),
  );
  configValues.indexPageConfig.aboutTitle = {
    en: request.aboutTitleEnglish,
    hi: request.aboutTitleHindi,
  };
  configValues.indexPageConfig.aboutText = {
    en: request.aboutTextEnglish,
    hi: request.aboutTextHindi,
  };
  configValues.indexPageConfig.aboutImages = request.aboutImages.map(
    (aboutImage): IndexPageAboutImage => ({
      id: aboutImage.id,
      imageUrl: aboutImage.imageUrl,
      text: {
        en: aboutImage.text.en,
        hi: aboutImage.text.hi,
      },
      title: {
        en: aboutImage.title.en,
        hi: aboutImage.title.hi,
      },
    }),
  );

  await config.setValues(configValues);

  const indexCardsRef = database.collection("indexCards");
  const batch = database.batch();

  for (const indexCard of request.indexCards) {
    const indexCardSnapshot = await indexCardsRef
      .where("entryId", "==", indexCard.entryId)
      .limit(1)
      .get();
    batch.set(
      !indexCardSnapshot.empty
        ? indexCardSnapshot.docs[0].ref
        : indexCardsRef.doc(),
      // Need to convert the GraphQL object to a plain object.
      JSON.parse(JSON.stringify(indexCard)),
    );
  }

  await batch.commit();

  return {
    id: "index-page-config",
    ...configValues.indexPageConfig,
  };
};
