import { LocalizedString } from "../types";

export interface IEntryCategory {
  id: string;

  /**
   * Entry ID this Category belongs to.
   */
  entryID: string;

  /**
   * Category title.
   *
   * Example: Sol GD.
   */
  title: LocalizedString;

  /**
   * Education requirements for entry category.
   */
  education?: LocalizedString;
}
