import { ClientSideQueryResolverKeys } from "./ClientSideQueryResolvers";
import { QueryResolvers } from "./generated";

export type ServerSideQueryResolvers = Omit<
  QueryResolvers.Type,
  ClientSideQueryResolverKeys
>;
