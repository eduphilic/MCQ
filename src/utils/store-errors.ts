export const createStoreNullError = (field: string) =>
  new Error(
    `"${field}" was null in the store but was expected to contain a value.`,
  );
