import { MutationGenerateCloudinaryMediaLibraryAuthenticationTokenResolver } from "../generated";

export const generateCloudinaryMediaLibraryAuthenticationToken: MutationGenerateCloudinaryMediaLibraryAuthenticationTokenResolver = async (
  _parent,
  _args,
  ctx,
) => {
  return ctx.cloudinaryService.generateMediaUploadWidgetAuthenticationToken();
};
