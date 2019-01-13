import gql from "graphql-tag";
import { QueryHtmlConfigResolver } from "~/generated";

export const TypeDefHtmlConfig = gql`
  extend type Query {
    htmlConfig: HtmlConfig!
  }
`;

export const htmlConfig: QueryHtmlConfigResolver = async (
  _parent,
  _args,
  ctx,
) => {
  const values = ctx.firebaseRemoteConfigClient.getValues();
  return values.htmlConfig;
};
