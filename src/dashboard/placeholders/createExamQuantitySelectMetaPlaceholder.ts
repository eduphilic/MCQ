import { IExamQuantitySelectMeta } from "../models/IExamQuantitySelectMeta";

export const createExamQuantitySelectMetaPlaceholder = (): IExamQuantitySelectMeta => ({
  examPriceRs: 50,
  quantities: [5, 10, 20, 1],
  quantitiesLabels: [
    { en: "5 Exams" },
    { en: "10 Exams" },
    { en: "20 Exams" },
    { en: "1 Free Exam" },
  ],
  quantitiesFreeIndexes: [3],
});
