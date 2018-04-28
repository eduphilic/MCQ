import { ExamQuantitySelectorProps } from ".";

export const createPlaceholderExamQuantitySelectorProps = (): ExamQuantitySelectorProps => ({
  category: "Sol GD",
  pricingText: "(Rs 50 Per Exam)",
  availableQuantities: [5, 10, 20],
  value: 5,
  // tslint:disable-next-line:no-empty
  onChange: () => {},
});
