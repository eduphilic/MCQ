import gql from "graphql-tag";
import { QueryCloudinaryCloudNameResolver } from "~/generated";

export const TypeDefCloudinaryCloudName = gql`
  extend type Query {
    cloudinaryApiKey: String!
  }
`;

export const cloudinaryCloudName: QueryCloudinaryCloudNameResolver = async (
  _parent,
  _args,
  ctx,
) => {
  return ctx.cloudinaryService.getCloudName();
};
