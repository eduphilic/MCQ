import { QueryLogoConfigResolver } from "@join-uniform/graphql/server";

export const logoConfig: QueryLogoConfigResolver = async (
  _parent,
  _args,
  ctx,
) => {
  return ctx.firebaseRemoteConfigClient.getValues().logoConfig;
};
