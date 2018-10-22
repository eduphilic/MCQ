import { MutationResolvers } from "../generated";

export const Mutation: MutationResolvers.Type = {
  ...MutationResolvers.defaultResolvers,
  setLocalizationLanguage: (_parent, args, ctx) => {
    const { language } = args;
    if (language !== "en" && language !== "hi") {
      throw new Error('Expected localization language to be "en" or "hi".');
    }
    const data = { localizationLanguage: language, __typename: "Localization" };
    ctx.cache.writeData({ data });
    /* tslint:disable-next-line:no-console */
    console.log({ language });
    return language;
  },
};
