import { QueryResolvers } from "../generated";

export const Query: QueryResolvers.Type = {
  ...QueryResolvers.defaultResolvers,
  htmlConfig: (_parent, _args, ctx) => {
    return ctx.firebaseRemoteConfigClient.getFieldsByPrefix("html");
  },
  language: async (_parent, _args, ctx) => {
    const template = await ctx.firebaseRemoteConfigClient.getFieldsByPrefix<{
      language: string;
    }>("l10n");

    return JSON.parse(template.language);
  },
};
