/**
 * Exam info displayed on the ExamOverviewMarkings component. It is shown before
 * the exam starts.
 */
export interface ExamMarkingsInfo {
  totalMarks: number;
  passingMarks: number;
  totalTimeMinutes: number;
  questionsCount: number;
  marksPerCorrectAnswer: number;
  marksPerIncorrectAnswer: number;
}
