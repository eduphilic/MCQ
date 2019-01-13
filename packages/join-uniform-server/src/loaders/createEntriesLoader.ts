import DataLoader from "dataloader";
import { DataLoadersContext } from "~/DataLoadersContext";
import { DBEntry } from "~/models";

export function createEntriesLoader(context: DataLoadersContext) {
  return new DataLoader<string, DBEntry>(async ids => {
    if (ids.length === 0) return [];
    const { firebaseDatabase: database } = context;

    const entriesCollectionReference = database.collection("entries");

    const entryDocumentReferences = ids.map(id =>
      entriesCollectionReference.doc(id),
    );

    const entryDocumentSnapshots = await database.getAll(
      entryDocumentReferences[0],
      ...entryDocumentReferences.slice(1),
    );

    return entryDocumentSnapshots.map(entryDocumentSnapshot =>
      entryDocumentSnapshot.exists
        ? (entryDocumentSnapshot.data() as DBEntry)
        : new Error(
            `Entry with id ${entryDocumentSnapshot.id} does not exist.`,
          ),
    );
  });
}
