import {
  Entry,
  IndexCard,
  QueryIndexCardsResolver,
} from "@join-uniform/graphql/server";

export const indexCards: QueryIndexCardsResolver = async (
  _parent,
  _args,
  context,
) => {
  // 1. Get list of Entries.
  // 2. Get the list of each Entry's activated Categories.
  // 3.

  const { firebaseDatabase: database } = context;

  const entriesRef = database.collection("entries");
  const entriesSnapshot = await entriesRef.get();

  const entries = entriesSnapshot.docs.map(
    (doc): Entry => ({
      ...(doc.data() as Omit<Entry, "id">),
      id: doc.id,
    }),
  );

  const indexCardsResult: IndexCard[] = entries.map(
    (entry): IndexCard => ({
      entryId: entry.id,
      title: `Indian ${entry.name} Recruitment`,
      categories: [],
      entryLogoUrl: entry.logoUrl,
      colorBlock: "#e2f0d9",
      colorCategoryBackground: "#c5e0b4",
      colorLogoBackground: "#c5e0b4",
      colorTitle: "#404040",
    }),
  );

  return indexCardsResult;
};
