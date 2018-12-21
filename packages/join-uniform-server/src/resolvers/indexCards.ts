import {
  Category,
  Entry,
  IndexCard,
  QueryIndexCardsResolver,
  TypeIndexCardCategory,
} from "@join-uniform/graphql/server";

export const indexCards: QueryIndexCardsResolver = async (
  _parent,
  _args,
  context,
) => {
  const { firebaseDatabase: database } = context;

  const entriesRef = database.collection("entries");
  const categoriesRef = database.collection("categories");
  const indexCardsRef = database.collection("indexCards");
  const [
    entriesSnapshot,
    categoriesSnapshot,
    indexCardsSnapshot,
  ] = await Promise.all([
    entriesRef.get(),
    categoriesRef.get(),
    indexCardsRef.get(),
  ]);

  const entries = entriesSnapshot.docs.map(
    (doc): Entry => ({
      ...(doc.data() as Omit<Entry, "id">),
      id: doc.id,
    }),
  );

  const categories = categoriesSnapshot.docs.map(
    (doc): Category => ({
      ...(doc.data() as Omit<Category, "id">),
      id: doc.id,
    }),
  );

  const indexCardsRecords = indexCardsSnapshot.docs.map(
    doc => doc.data() as Omit<IndexCard, "title" | "entryLogoUrl">,
  );

  const indexCardsResult: IndexCard[] = entries
    .map(
      (entry): IndexCard => {
        const indexCard = indexCardsRecords.find(i => i.entryId === entry.id);

        return {
          entryId: entry.id,
          title: `Indian ${entry.name} Recruitment`,
          categories: categories
            .filter(category => entry.categories.includes(category.id))
            .filter(category => category.activated)
            .map(
              (category): TypeIndexCardCategory => {
                const indexCardCategory =
                  indexCard &&
                  indexCard.categories.find(c => c.categoryId === category.id);

                return {
                  categoryId: category.id,
                  title: category.name,
                  visible: indexCardCategory
                    ? indexCardCategory.visible
                    : false,
                };
              },
            ),
          entryLogoUrl: entry.logoUrl,
          colorBlock: indexCard ? indexCard.colorBlock : "#e2f0d9",
          colorCategoryBackground: indexCard
            ? indexCard.colorCategoryBackground
            : "#c5e0b4",
          colorLogoBackground: indexCard
            ? indexCard.colorLogoBackground
            : "#c5e0b4",
          colorTitle: indexCard ? indexCard.colorTitle : "#404040",
        };
      },
    )
    .filter(indexCard => indexCard.categories.length > 0);

  return indexCardsResult;
};
