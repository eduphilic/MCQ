import gql from "graphql-tag";
import {
  MutationGenerateCloudinarySignatureArgs,
  MutationGenerateCloudinarySignatureResolver,
} from "~/generated";

export const TypeDefGenerateCloudinarySignature = gql`
  extend type Mutation {
    # Signs the parameters passed by the Cloudinary Upload Widget.
    # See: https://cloudinary.com/documentation/upload_widget#signed_uploads
    generateCloudinarySignature(paramsToSign: Json!): String!
  }
`;

export const generateCloudinarySignature: MutationGenerateCloudinarySignatureResolver = async (
  _parent,
  args: MutationGenerateCloudinarySignatureArgs,
  context,
) => {
  return context.cloudinaryService.generateSignature(args.paramsToSign);
};
