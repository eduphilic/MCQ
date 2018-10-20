import gql from "graphql-tag";

export interface HtmlMetaData {
  googleAnalyticsId: string;
}

export const typeDefs = gql`
  extend type Query {
    htmlMetaData: HtmlMetaData
  }

  type HtmlMetaData {
    googleAnalyticsId: String
  }
`;

export const resolvers = {
  Query: {
    async htmlMetaData(): Promise<HtmlMetaData> {
      return { googleAnalyticsId: "3" };
    },
  },
};
