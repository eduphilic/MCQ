import gql from "graphql-tag";
import { MutationDeleteEntriesResolver } from "~/generated";
import { entries } from "../queries/entries";

export const TypeDefDeleteEntries = gql`
  extend type Mutation {
    # Deletes the specified Entries. They most not have any Categories
    # associated with them.
    # Returns the remaining Entries.
    deleteEntries(entryIds: [ID!]!): [Entry!]!
  }
`;

const r: MutationDeleteEntriesResolver = async (
  parent,
  args,
  context,
  info,
) => {
  const { entryIds } = args;
  const { firebaseDatabase: database, loaders, mediator } = context;

  const entriesCollectionRef = database.collection("entries");
  const dbEntries = await loaders.entries.loadMany(entryIds);

  const batch = database.batch();

  dbEntries.forEach((entry, index) => {
    const entryId = entryIds[index];

    if (entry.categories.length > 0) {
      throw new Error(`Entry ${entryId} still has categories.`);
    }

    batch.delete(entriesCollectionRef.doc(entryId));
    loaders.entries.clear(entryId);
  });

  await mediator.dispatchEvents(
    [
      {
        type: "EntriesRemoved",
        entryIds,
      },
    ],
    context,
    batch,
  );
  await batch.commit();

  return entries(parent, {}, context, info);
};

export { r as deleteEntries };
