import { QueryLogoConfigResolver } from "~/generated";

const r: QueryLogoConfigResolver = async (_parent, _args, ctx) => {
  return {
    id: "logo-config",
    ...ctx.firebaseRemoteConfigClient.getValues().logoConfig,
  };
};

export { r as logoConfig };
