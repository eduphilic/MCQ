import { IResolvers } from "apollo-server-koa";
import { ClientContext } from "../../ClientContext";
import { ClientState } from "../../ClientState";

export const resolvers: IResolvers<{}, ClientContext> = {
  Mutation: {
    setLocalizationLanguage: (_parent, args, ctx) => {
      const data: Partial<ClientState> = {
        localization: {
          __typename: "Localization",
          language: args.language,
        },
      };

      ctx.cache.writeData({ data });
      return args.language;
    },
  },
};
