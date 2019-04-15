import gql from "graphql-tag";
import { QueryLogoConfigResolver } from "~/generated";

export const TypeDefLogoConfig = gql`
  extend type Query {
    logoConfig: LogoConfig!
  }
`;

const r: QueryLogoConfigResolver = async (_parent, _args, ctx) => {
  return {
    id: "logo-config",
    ...ctx.firebaseRemoteConfigClient.getValues().logoConfig,
  };
};

export { r as logoConfig };
