import gql from "graphql-tag";
import { MutationGenerateCloudinaryMediaLibraryAuthenticationTokenResolver } from "~/generated";

export const TypeDefGenerateCloudinaryMediaLibraryAuthenticationToken = gql`
  extend type Mutation {
    # Generates the authentication parameters required for creating a session for
    # use with the Cloudinary Media Library widget.
    generateCloudinaryMediaLibraryAuthenticationToken: CloudinaryMediaWidgetAuthenticationToken!
  }
`;

export const generateCloudinaryMediaLibraryAuthenticationToken: MutationGenerateCloudinaryMediaLibraryAuthenticationTokenResolver = async (
  _parent,
  _args,
  ctx,
) => {
  return ctx.cloudinaryService.generateMediaUploadWidgetAuthenticationToken();
};
