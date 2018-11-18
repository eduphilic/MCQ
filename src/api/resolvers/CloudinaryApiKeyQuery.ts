import { QueryCloudinaryApiKeyResolver } from "../generated";

export const cloudinaryApiKey: QueryCloudinaryApiKeyResolver = async (
  _parent,
  _args,
  ctx,
) => {
  return ctx.cloudinaryService.getApiKey();
};
