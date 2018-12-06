import { QueryHtmlConfigResolver } from "@join-uniform/graphql";

export const htmlConfig: QueryHtmlConfigResolver = async (
  _parent,
  _args,
  ctx,
) => {
  const values = ctx.firebaseRemoteConfigClient.getValues();
  return values.htmlConfig;
};
