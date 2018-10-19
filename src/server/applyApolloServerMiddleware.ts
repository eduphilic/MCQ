import { ApolloServer, gql } from "apollo-server-koa";

const typeDefs = gql`
  type Query {
    hello: String
  }
`;

const resolvers = {
  Query: {
    hello: () => "Hello world!",
  },
};

const server = new ApolloServer({ typeDefs, resolvers });

export const applyApolloServerMiddleware = (app: any) => {
  server.applyMiddleware({ app, bodyParserConfig: false, cors: false });
  /* tslint:disable-next-line:no-console */
  console.log(server.graphqlPath);
};
