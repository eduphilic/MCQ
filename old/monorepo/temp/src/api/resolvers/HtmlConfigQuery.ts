import { HtmlConfig, QueryHtmlConfigResolver } from "../generated";

export const htmlConfig: QueryHtmlConfigResolver = async (
  _parent,
  _args,
  ctx,
) => {
  const htmlConfig = (await ctx.configurationRepository.getParameterByKey(
    "htmlConfig",
  )) as HtmlConfig;

  return htmlConfig;
};
