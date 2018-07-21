import { InjectedFormikProps } from "formik";
import { IEntry } from "models";
import { RouteComponentProps } from "react-router-dom";
import { LocalizationKey } from "types";

export type StateProps = {
  loaded: boolean;
  entries: IEntry[];
  isOnboarding: boolean;
};

export type DispatchProps = {
  loadPlaceholderData: () => any;
};

export type OwnProps = RouteComponentProps<{}> & {
  routeEntrySelectLocalizationKey: LocalizationKey;
  routeCategorySelectLocalizationKey: LocalizationKey;
};

export type Props = StateProps & DispatchProps & OwnProps;

export type PropsWithFormState = InjectedFormikProps<Props, FormState>;

export type Page = "entry-select" | "category-select";

export type FormState = {
  selectedEntryIDs: string[];
};
