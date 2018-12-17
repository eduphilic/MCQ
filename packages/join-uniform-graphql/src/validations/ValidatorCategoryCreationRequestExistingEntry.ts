import * as yup from "yup";
import { CategoryCreationRequestExistingEntry } from "../generated.client";

export const base = {
  categoryName: yup.string().required(),
  categoryEducation: yup.string().required(),
  pricePerPaper: yup
    .number()
    .integer()
    .min(1)
    .required(),
};

export const ValidatorCategoryCreationRequestExistingEntry = yup.object<
  CategoryCreationRequestExistingEntry
>({
  ...base,
  existingEntryId: yup.string().required(),
});
