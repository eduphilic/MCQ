import { QuerySessionResolver } from "../generated";

export const session: QuerySessionResolver = (_parent, _args, ctx) => {
  const role = ctx.userService.getCurrentUserRole();

  return role;
};
