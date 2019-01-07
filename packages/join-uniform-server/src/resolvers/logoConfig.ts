import { QueryLogoConfigResolver } from "@join-uniform/graphql/server";

const r: QueryLogoConfigResolver = async (_parent, _args, ctx) => {
  return {
    id: "logo-config",
    ...ctx.firebaseRemoteConfigClient.getValues().logoConfig,
  };
};

export { r as logoConfig };
