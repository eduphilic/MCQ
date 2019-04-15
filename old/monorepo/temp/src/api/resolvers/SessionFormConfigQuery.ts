import {
  QuerySessionFormConfigResolver,
  SessionFormConfig,
} from "../generated";

export const sessionFormConfig: QuerySessionFormConfigResolver = async (
  _parent,
  _args,
  ctx,
) => {
  const sessionFormConfig = (await ctx.configurationRepository.getParameterByKey(
    "sessionFormConfig",
  )) as SessionFormConfig;

  return sessionFormConfig;
};
