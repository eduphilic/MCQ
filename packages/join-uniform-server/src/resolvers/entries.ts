import { Entry, QueryEntriesResolver } from "@join-uniform/graphql/server";

export const entries: QueryEntriesResolver = async (_parent, _args, ctx) => {
  const { firebaseDatabase } = ctx;

  const snapshot = await firebaseDatabase.collection("entries").get();
  if (snapshot.empty) return [];

  const result: Entry[] = [];
  snapshot.forEach(queryDocumentSnapshot => {
    result.push({
      id: queryDocumentSnapshot.id,
      ...(queryDocumentSnapshot.data() as Omit<Entry, "id">),
    });
  });

  return result;
};
