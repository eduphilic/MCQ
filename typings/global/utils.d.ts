/**
 * Remove a field from a type definition.
 */
type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
