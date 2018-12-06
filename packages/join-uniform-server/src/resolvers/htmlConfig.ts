import { QueryHtmlConfigResolver } from "@join-uniform/graphql/server";

export const htmlConfig: QueryHtmlConfigResolver = async (
  _parent,
  _args,
  ctx,
) => {
  const values = ctx.firebaseRemoteConfigClient.getValues();
  return values.htmlConfig;
};
