import { IndexPageConfig, QueryIndexPageConfigResolver } from "../generated";

export const indexPageConfig: QueryIndexPageConfigResolver = async (
  _parent,
  _args,
  ctx,
) => {
  const indexPageConfig = (await ctx.configurationRepository.getParameterByKey(
    "indexPageConfig",
  )) as IndexPageConfig;

  return indexPageConfig;
};
