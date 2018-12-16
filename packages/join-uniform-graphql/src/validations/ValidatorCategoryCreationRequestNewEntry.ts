import * as yup from "yup";
import { CategoryCreationRequestNewEntry } from "../generated.client";
import { base } from "./ValidatorCategoryCreationRequestExistingEntry";

export const ValidatorCategoryCreationRequestNewEntry = yup.object<
  CategoryCreationRequestNewEntry
>({
  ...base,
  entryName: yup.string().required(),
  entryExplanation: yup.string().required(),
});
