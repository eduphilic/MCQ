import gql from "graphql-tag";
import { MutationUpdateLogoUrlResolver } from "~/generated";
import { logoConfig } from "../queries/logoConfig";

export const TypeDefUpdateLogoUrl = gql`
  extend type Mutation {
    updateLogoUrl(logoUrl: String!): LogoConfig!
  }
`;

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
