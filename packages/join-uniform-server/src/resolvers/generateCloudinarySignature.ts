import {
  MutationGenerateCloudinarySignatureArgs,
  MutationGenerateCloudinarySignatureResolver,
} from "@join-uniform/graphql/server";

export const generateCloudinarySignature: MutationGenerateCloudinarySignatureResolver = async (
  _parent,
  args: MutationGenerateCloudinarySignatureArgs,
  context,
) => {
  return context.cloudinaryService.generateSignature(args.paramsToSign);
};
