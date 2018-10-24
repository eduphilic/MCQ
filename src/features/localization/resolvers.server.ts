import { IResolvers } from "apollo-server-koa";
import { IndexPageConfig } from "../../models";
import { ServerContext } from "../../ServerContext";

export const resolvers: IResolvers<any, ServerContext> = {
  Query: {
    indexPageConfig: (_parent, _args, ctx) => {
      return ctx.firebaseRemoteConfigClient.getParameterByKey(
        "indexPageConfig",
      ) as Promise<IndexPageConfig>;
    },
  },
};
