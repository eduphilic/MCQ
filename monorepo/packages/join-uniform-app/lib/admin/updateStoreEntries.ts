import { DataProxy } from "apollo-cache";
import {
  EntryManagerGetEntriesDocument,
  EntryManagerGetEntriesQuery,
  EntryManagerGetEntriesVariables,
} from "~/lib/client";

/**
 * Updates the list of Entries in the Apollo cache.
 *
 * @param proxy Apollo Cache proxy object.
 * @param updateFn Called with the GetEntries query result to allow mutation.
 */
export function updateStoreEntries(
  proxy: DataProxy,
  updateFn: (queryResult: EntryManagerGetEntriesQuery) => void,
) {
  const queryResult = proxy.readQuery<
    EntryManagerGetEntriesQuery,
    EntryManagerGetEntriesVariables
  >({ query: EntryManagerGetEntriesDocument });
  if (!queryResult) return;

  updateFn(queryResult);

  proxy.writeQuery<
    EntryManagerGetEntriesQuery,
    EntryManagerGetEntriesVariables
  >({
    query: EntryManagerGetEntriesDocument,
    data: queryResult,
  });
}
