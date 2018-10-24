import { IResolvers } from "apollo-server-koa";
// import { ClientSideState } from "../clientSideState";

export const Mutation: IResolvers<any, any>["Mutation"] = {
  setLocalizationLanguage: (_parent, args, ctx) => {
    const { language } = args;
    // if (language !== "en" && language !== "hi") {
    //   throw new Error('Expected localization language to be "en" or "hi".');
    // }
    const data = {
      // localization: {
      //   localizationLanguage: language,
      //   __typename: "Localization",
      // },
      localizationLanguage: language,
    };
    // ctx.cache.writeData<ClientSideState>({ data });
    ctx.cache.writeData({ data });
    return language;
  },
};
