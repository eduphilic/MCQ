import { MutationUpdateLogoUrlResolver } from "@join-uniform/graphql/server";
import { logoConfig } from "./logoConfig";

const r: MutationUpdateLogoUrlResolver = async (
  parent,
  args,
  context,
  info,
) => {
  const { logoUrl } = args;
  const { firebaseRemoteConfigClient: configClient } = context;

  const config = configClient.getValues();

  config.logoConfig.url = logoUrl;

  await configClient.setValues(config);

  return logoConfig(parent, {}, context, info);
};

export { r as updateLogoUrl };
