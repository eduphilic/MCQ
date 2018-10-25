import { IResolvers } from "apollo-server-koa";
import { HtmlConfig } from "../models";
import { ServerContext } from "../ServerContext";

export const resolvers: IResolvers<any, ServerContext> = {
  Query: {
    htmlConfig: (_parent, _args, ctx): Promise<HtmlConfig> => {
      return ctx.firebaseRemoteConfigClient.getParameterByKey(
        "htmlConfig",
      ) as Promise<HtmlConfig>;
    },
  },
};
