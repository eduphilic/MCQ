import { QueryCloudinaryCloudNameResolver } from "../generated";

export const cloudinaryCloudName: QueryCloudinaryCloudNameResolver = async (
  _parent,
  _args,
  ctx,
) => {
  return ctx.cloudinaryService.getCloudName();
};
