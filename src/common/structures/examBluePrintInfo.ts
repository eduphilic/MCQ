import { ExamBluePrintInfo } from "common/types/ExamBluePrintInfo";

export const examBluePrintInfo: ExamBluePrintInfo = [
  "General Knowledge",
  "General Knowledge",
  "English 1",
  "History",
  "Geography",
  "Political Science",
  "General Knowledge 2",
  "World War 1",
  "Global Warming",
  "Pollution",
].map(t => ({ subjectTitle: t, questionCount: 50, marksAllocated: 150 }));
