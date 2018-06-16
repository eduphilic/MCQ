/**
 * Summary of an exam about to be taken. Used in the ExamBluePrint component.
 */
export type ExamBluePrintInfo = {
  id: string;
  subjectTitle: string;
  questionCount: number;
  marksAllocated: number;
}[];
