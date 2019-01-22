import DataLoader from "dataloader";
import { DataLoadersContext } from "~/DataLoadersContext";

/**
 * Creates a DataLoader for an entity stored in Firestore.
 *
 * @param context
 * Context providing access to the persistence infrastructure.
 *
 * @param capitalizedEntityName
 * Name of the entities managed for use in error messages.
 *
 * @param databaseCollectionName
 * Firestore collection name.
 */
export function createFirestoreLoader<T>(
  context: DataLoadersContext,
  capitalizedEntityName: string,
  databaseCollectionName: string,
): DataLoader<string, T> {
  return new DataLoader<string, T>(batchLoad);

  async function batchLoad(ids: string[]): Promise<(T | Error)[]> {
    if (ids.length === 0) return [];
    const { firebaseDatabase: database } = context;

    const collectionReference = database.collection(databaseCollectionName);
    const documentReferences = ids.map(id => collectionReference.doc(id));
    const documentSnapshots = await database.getAll(
      documentReferences[0],
      ...documentReferences.slice(1),
    );

    return documentSnapshots.map(documentSnapshot => {
      if (!documentSnapshot.exists) {
        return new Error(`${capitalizedEntityName} with id ${documentSnapshot.id} does not exist.`); // prettier-ignore
      }

      return documentSnapshot.data() as T;
    });
  }
}
