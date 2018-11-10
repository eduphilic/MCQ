import { AdminLoginPageConfig, QueryResolvers } from "../generated";

export const adminLoginPageConfig: QueryResolvers.AdminLoginPageConfigResolver = async (
  _parent,
  _args,
  ctx,
) => {
  const adminLoginPageConfig = (await ctx.configurationRepository.getParameterByKey(
    "adminLoginPageConfig",
  )) as AdminLoginPageConfig;

  return adminLoginPageConfig;
};
