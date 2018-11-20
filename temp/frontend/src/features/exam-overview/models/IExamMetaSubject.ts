import { LocalizedString } from "types";

/**
 * Information about one of the subjects covered by an exam. This is displayed
 * to the user before an exam begins.
 */
export interface IExamMetaSubject {
  /** Subject id. */
  id: string;

  /** Subject title. */
  title: LocalizedString;

  /** Number of questions provided from this subject. */
  questionCount: number;

  /** Marks allocated to this subject. */
  marksAllocated: number;
}
