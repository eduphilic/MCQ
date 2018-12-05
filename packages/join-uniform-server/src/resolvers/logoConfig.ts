import { QueryLogoConfigResolver } from "./generated";

export const logoConfig: QueryLogoConfigResolver = async (
  _parent,
  _args,
  ctx,
) => {
  /* tslint:disable-next-line:no-console */
  console.log("config", ctx.firebaseRemoteConfigClient.getValues().logoConfig);
  return ctx.firebaseRemoteConfigClient.getValues().logoConfig;
};
