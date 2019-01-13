import gql from "graphql-tag";
import { QueryCloudinaryApiKeyResolver } from "~/generated";

export const TypeDefCloudinaryApiKey = gql`
  extend type Query {
    cloudinaryCloudName: String!
  }
`;

export const cloudinaryApiKey: QueryCloudinaryApiKeyResolver = async (
  _parent,
  _args,
  ctx,
) => {
  return ctx.cloudinaryService.getApiKey();
};
