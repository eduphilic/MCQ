import { MutationResolvers } from "../generated";

export const login: MutationResolvers.LoginResolver = async (
  _parent,
  args,
  context,
) => {
  return context.userService.loginUser(args.username, args.password);
};
