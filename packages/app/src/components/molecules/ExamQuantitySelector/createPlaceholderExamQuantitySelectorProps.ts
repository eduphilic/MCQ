import { ExamQuantitySelectorProps } from ".";

export const createPlaceholderExamQuantitySelectorProps = (): ExamQuantitySelectorProps => ({
  category: "Sol GD",
  pricingText: "(Rs 50 Per Exam)",
  availableQuantitiesLabels: ["5 Exams", "10 Exams", "20 Exams", "1 Free Exam"],
  availableQuantitiesValues: ["5", "10", "20", "free"],
  value: "5",
  // tslint:disable-next-line:no-empty
  onChange: () => {},
});
