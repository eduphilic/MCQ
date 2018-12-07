import {
  Language,
  LocalizationStringKey,
  QueryTranslationResolver,
} from "@join-uniform/graphql/server";

export const translation: QueryTranslationResolver = async (
  _parent,
  args,
  ctx,
) => {
  const { translations } = ctx.firebaseRemoteConfigClient.getValues();

  return (Object.keys(translations) as LocalizationStringKey[]).reduce(
    (accumulator, key) => {
      accumulator[key] = translations[key].en;

      if (args.language === Language.Hindi && translations[key].hi) {
        accumulator[key] = translations[key].hi!;
      }

      return accumulator;
    },
    // tslint:disable-next-line:no-object-literal-type-assertion
    {} as Record<LocalizationStringKey, string>,
  );
};
