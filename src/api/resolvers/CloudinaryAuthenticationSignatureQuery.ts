import { QueryCloudinaryAuthenticationSignatureResolver } from "../generated";

export const cloudinaryAuthenticationSignature: QueryCloudinaryAuthenticationSignatureResolver = async (
  _parent,
  _args,
  ctx,
) => {
  return ctx.cloudinaryService.generateAuthenticationSignature();
};
