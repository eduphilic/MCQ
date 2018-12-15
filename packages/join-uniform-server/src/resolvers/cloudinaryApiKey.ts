import { QueryCloudinaryApiKeyResolver } from "@join-uniform/graphql/server";

export const cloudinaryApiKey: QueryCloudinaryApiKeyResolver = async (
  _parent,
  _args,
  ctx,
) => {
  return ctx.cloudinaryService.getApiKey();
};
