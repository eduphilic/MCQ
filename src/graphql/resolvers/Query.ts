import { QueryResolvers } from "../generated";

export const Query: QueryResolvers.Type = {
  ...QueryResolvers.defaultResolvers,
  firebaseRemoteConfigTemplate: async (_parent, _args, ctx) => {
    /* tslint:disable-next-line:no-console */
    console.log({ ctx });
    const template = await ctx.firebaseRemoteConfigClient.getConfigTemplate();

    /* tslint:disable-next-line:no-console */
    console.log({ template });

    return template;
  },
};
