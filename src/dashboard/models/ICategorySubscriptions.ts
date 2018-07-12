/**
 * Tracks the Entry Categories the user has selected subscriptions for.
 *
 * It is a dictionary of category ids to quantity option indexes. The quantity
 * option index corresponds to the quantity options from
 * IExamQuantitySelectMeta.
 */
export type ICategorySubscriptions = Record<string, number>;
