import { IResolvers } from "apollo-server-koa";
import { ClientContext } from "../../ClientContext";
import { ClientState } from "../../ClientState";
import { setLanguage } from "./strings";

export const resolvers: IResolvers<{}, ClientContext> = {
  Mutation: {
    setLocalizationLanguage: (_parent, args, ctx) => {
      const data: Partial<ClientState> = {
        localization: {
          __typename: "localization",
          language: args.language,
        },
      };

      ctx.cache.writeData({ data });
      return args.language;
    },
  },
};
