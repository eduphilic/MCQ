import gql from "graphql-tag";
import { IndexPageConfig, QueryIndexPageConfigResolver } from "~/generated";

export const TypeDefIndexPageConfig = gql`
  extend type Query {
    indexPageConfig: IndexPageConfig!
  }
`;

const r: QueryIndexPageConfigResolver = async (_parent, _args, context) => {
  const { firebaseRemoteConfigClient: configClient } = context;

  const config = configClient.getValues();

  const indexPageConfig: IndexPageConfig = {
    ...config.indexPageConfig,
    id: "index-page-config",
  };

  return indexPageConfig;
};

export { r as indexPageConfig };
