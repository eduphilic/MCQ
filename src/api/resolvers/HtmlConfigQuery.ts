import { HtmlConfig, QueryResolvers } from "../generated";

export const htmlConfig: QueryResolvers.HtmlConfigResolver = async (
  _parent,
  _args,
  ctx,
) => {
  const htmlConfig = (await ctx.configurationRepository.getParameterByKey(
    "htmlConfig",
  )) as HtmlConfig;

  return htmlConfig;
};
