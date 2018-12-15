import { QueryCloudinaryCloudNameResolver } from "@join-uniform/graphql/server";

export const cloudinaryCloudName: QueryCloudinaryCloudNameResolver = async (
  _parent,
  _args,
  ctx,
) => {
  return ctx.cloudinaryService.getCloudName();
};
