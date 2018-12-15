import { MutationGenerateCloudinaryMediaLibraryAuthenticationTokenResolver } from "@join-uniform/graphql/server";

export const generateCloudinaryMediaLibraryAuthenticationToken: MutationGenerateCloudinaryMediaLibraryAuthenticationTokenResolver = async (
  _parent,
  _args,
  ctx,
) => {
  return ctx.cloudinaryService.generateMediaUploadWidgetAuthenticationToken();
};
