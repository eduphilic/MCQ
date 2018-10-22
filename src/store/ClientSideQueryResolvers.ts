import { QueryResolvers } from "./generated";

export type ClientSideQueryResolverKeys = keyof Pick<
  QueryResolvers.Type,
  "localization"
>;

type ClientSideQueryResolversWithoutTypename = Pick<
  QueryResolvers.Type,
  ClientSideQueryResolverKeys
>;

export type ClientSideQueryResolvers = {
  [K in keyof ClientSideQueryResolversWithoutTypename]: ResolverWithTypename<
    ClientSideQueryResolversWithoutTypename[K]
  >
};

type ReturnWithTypename<T> = T & { __typename: string };

type ResolverWithTypename<T> = T extends (
  parent: infer Parent,
  args: infer Args,
  ctx: infer Context,
  info: infer Info,
) => infer Return | Promise<infer Return>
  ? (
      parent: Parent,
      args: Args,
      ctx: Context,
      info: Info,
    ) => ReturnWithTypename<Return> | Promise<ReturnWithTypename<Return>>
  : never;
