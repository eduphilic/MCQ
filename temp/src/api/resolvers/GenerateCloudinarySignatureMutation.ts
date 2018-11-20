import {
  MutationGenerateCloudinarySignatureArgs,
  MutationGenerateCloudinarySignatureResolver,
} from "../generated";

export const generateCloudinarySignature: MutationGenerateCloudinarySignatureResolver = async (
  _parent,
  args: MutationGenerateCloudinarySignatureArgs,
  context,
) => {
  return context.cloudinaryService.generateSignature(args.paramsToSign);
};
