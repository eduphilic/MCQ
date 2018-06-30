import { IExamMetaSubject } from "exam-taking/models/IExamMetaSubject";

export const examBluePrintInfo: IExamMetaSubject[] = [
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
].map((t, index) => ({
  id: `${t}-${index}`,
  title: { en: t },
  questionCount: 50,
  marksAllocated: 150,
}));
