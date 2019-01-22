import { LogoImageConfig, QueryLogoImageConfigResolver } from "../generated";

export const logoImageConfig: QueryLogoImageConfigResolver = async (
  _parent,
  _args,
  ctx,
) => {
  return ctx.configurationRepository.getParameterByKey(
    "logoImageConfig",
  ) as Promise<LogoImageConfig>;
};
