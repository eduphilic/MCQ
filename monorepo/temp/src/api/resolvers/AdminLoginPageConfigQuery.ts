import {
  AdminLoginPageConfig,
  QueryAdminLoginPageConfigResolver,
} from "../generated";

export const adminLoginPageConfig: QueryAdminLoginPageConfigResolver = async (
  _parent,
  _args,
  ctx,
) => {
  const adminLoginPageConfig = (await ctx.configurationRepository.getParameterByKey(
    "adminLoginPageConfig",
  )) as AdminLoginPageConfig;

  return adminLoginPageConfig;
};
