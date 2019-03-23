import localforage = require("localforage");

/**
 * Retrieves the value stored under the specified `key`.
 *
 * @param key Storage key where value is stored.
 */
export async function getItem<Value>(key: string) {
  return localforage.getItem<Value | null>(key);
}
