import { strings } from "../../features/localization";
import { ClientSideState } from "../clientSideState";
import { MutationResolvers } from "../generated";

export const Mutation: MutationResolvers.Type = {
  ...MutationResolvers.defaultResolvers,
  setLocalizationLanguage: (_parent, args, ctx) => {
    const { language } = args;
    if (language !== "en" && language !== "hi") {
      throw new Error('Expected localization language to be "en" or "hi".');
    }
    const data = {
      localization: {
        localizationLanguage: language,
        __typename: "Localization",
      },
    };
    ctx.cache.writeData<ClientSideState>({ data });
    strings.setLanguage(language);
    return language;
  },
};
