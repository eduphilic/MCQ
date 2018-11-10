import { QueryResolvers } from "../generated";

export const session: QueryResolvers.SessionResolver = (
  _parent,
  _args,
  ctx,
) => {
  const role = ctx.userService.getCurrentUserRole();

  return role;
};
