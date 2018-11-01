import { IResolvers } from "apollo-server-koa";
import { IndexPageConfig } from "../../models";
import { ServerContext } from "../../ServerContext";

export const resolvers: IResolvers<any, ServerContext> = {
  Query: {
    adminLoginPageConfig: (_parent, _args, ctx) => {
      return ctx.firebaseRemoteConfigClient.getParameterByKey(
        "adminLoginPageConfig",
      );
    },
  },

  Mutation: {
    updateIndexPageHeroConfig: async (_parent, args, ctx) => {
      const indexPageConfig: IndexPageConfig = {
        ...(await ctx.firebaseRemoteConfigClient.getParameterByKey(
          "indexPageConfig",
        )),
        ...args.indexPageConfig,
      };

      await ctx.firebaseRemoteConfigClient.updateParameterByKey(
        "indexPageConfig",
        indexPageConfig,
      );

      return ctx.firebaseRemoteConfigClient.getParameterByKey(
        "indexPageConfig",
      );
    },
  },
};
