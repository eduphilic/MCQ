import { QueryIndexPageConfigResolver } from "@join-uniform/graphql/server";

export const indexPageConfig: QueryIndexPageConfigResolver = async (
  _parent,
  _args,
  context,
) => {
  const { firebaseRemoteConfigClient: config } = context;

  const value = config.getValues().indexPageConfig;

  return value;
};
