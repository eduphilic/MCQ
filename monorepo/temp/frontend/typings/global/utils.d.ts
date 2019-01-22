// Opposite of Pick.
// Ref: http://ideasintosoftware.com/typescript-advanced-tricks/

type Diff<
  T extends string | number | symbol,
  U extends string | number | symbol
> = ({ [P in T]: P } & { [P in U]: never } & { [x: string]: never })[T];

/**
 * Remove a field from a type definition.
 */
type Omit<T, K extends keyof T> = Pick<T, Diff<keyof T, K>>;
