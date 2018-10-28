import { IResolvers } from "apollo-server-koa";
import { ServerContext } from "../../ServerContext";

export const resolvers: IResolvers<any, ServerContext> = {
  Query: {
    adminLoginPageConfig: (_parent, _args, ctx) => {
      return ctx.firebaseRemoteConfigClient.getParameterByKey(
        "adminLoginPageConfig",
      );
    },
  },
};
