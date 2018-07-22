import { InjectedFormikProps } from "formik";
import { IEntry, IEntryCategory } from "models";
import { RouteComponentProps } from "react-router-dom";
import { IExamQuantitySelectionSettings } from "./models/IExamQuantitySelectionSettings";

export type StateProps = {
  loaded: boolean;
  isOnboarding: boolean;

  entries: IEntry[];
  categories: IEntryCategory[];
  examQuantitySelectionSettings: IExamQuantitySelectionSettings | null;
};

export type DispatchProps = {
  loadPlaceholderData: () => any;
};

export type OwnProps = RouteComponentProps<{}> & {};

export type Props = StateProps & DispatchProps & OwnProps;

export type PropsWithFormState = InjectedFormikProps<Props, FormState>;

export type Page = "entry-select" | "category-select";

export type FormState = {
  selectedEntryIDs: string[];
  selectedQuantities: { categoryID: string; quantityIndex: number }[];
};
