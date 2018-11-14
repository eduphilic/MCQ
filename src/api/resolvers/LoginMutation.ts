import { MutationLoginArgs, MutationLoginResolver } from "../generated";

export const login: MutationLoginResolver = async (
  _parent,
  args: MutationLoginArgs,
  context,
) => {
  return context.userService.loginUser(args.username, args.password);
};
