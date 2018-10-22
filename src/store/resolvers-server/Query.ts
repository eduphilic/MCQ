import { ClientSideQueryResolvers } from "../ClientSideQueryResolvers";
import { initialState } from "../clientSideState";
import { ServerSideQueryResolvers } from "../ServerSideQueryResolvers";

type QueryResolvers = ClientSideQueryResolvers & ServerSideQueryResolvers;

export const Query: QueryResolvers = {
  htmlConfig: (_parent, _args, ctx) => {
    return ctx.firebaseRemoteConfigClient.getFieldsByPrefix("html");
  },
  language: async (_parent, _args, ctx) => {
    const template = await ctx.firebaseRemoteConfigClient.getFieldsByPrefix<{
      language: string;
    }>("l10n");

    return JSON.parse(template.language);
  },

  // Client side state.
  localization: () => initialState.localization,
};
