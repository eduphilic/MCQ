import { QueryResolvers, SessionFormConfig } from "../generated";

export const sessionFormConfig: QueryResolvers.SessionFormConfigResolver = async (
  _parent,
  _args,
  ctx,
) => {
  const sessionFormConfig = (await ctx.configurationRepository.getParameterByKey(
    "sessionFormConfig",
  )) as SessionFormConfig;

  return sessionFormConfig;
};
