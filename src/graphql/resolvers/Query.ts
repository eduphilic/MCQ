import { QueryResolvers } from "../generated";

export const Query: QueryResolvers.Type = {
  ...QueryResolvers.defaultResolvers,
  firebaseRemoteConfigTemplate: (_parent, _args, ctx) => {
    return ctx.firebaseRemoteConfigClient.getConfigTemplate();
  },
};
