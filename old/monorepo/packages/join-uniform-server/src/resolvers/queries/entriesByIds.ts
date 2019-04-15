import gql from "graphql-tag";
import { Entry, QueryEntriesByIdsResolver } from "~/generated";
import { categoriesByIds } from "./categoriesByIds";

export const TypeDefEntriesByIds = gql`
  extend type Query {
    entriesByIds(ids: [ID!]!): [Entry!]!
  }
`;

const r: QueryEntriesByIdsResolver = async (parent, args, context, info) => {
  const { ids } = args;
  const { loaders } = context;

  const dbEntries = await loaders.entries.loadMany(ids);
  const promisedEntries: Promise<Entry>[] = dbEntries.map(
    async (entry, index): Promise<Entry> => ({
      ...entry,
      id: ids[index],
      categories: await categoriesByIds(
        parent,
        { ids: entry.categories },
        context,
        info,
      ),
    }),
  );

  return Promise.all(promisedEntries);
};

export { r as entriesByIds };
