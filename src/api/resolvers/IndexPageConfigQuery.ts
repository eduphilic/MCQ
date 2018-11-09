import { IndexPageConfig, QueryResolvers } from "../generated";

export const indexPageConfig: QueryResolvers.IndexPageConfigResolver = async (
  _parent,
  _args,
  ctx,
) => {
  const indexPageConfig = (await ctx.configurationRepository.getParameterByKey(
    "indexPageConfig",
  )) as IndexPageConfig;

  /* tslint:disable-next-line:no-console */
  console.log({ indexPageConfig });

  return indexPageConfig;
};
