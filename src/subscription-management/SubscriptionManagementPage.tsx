import { Formik, FormikProps } from "formik";
import { strings } from "localization";
import { IEntry } from "models";
import React, { SFC } from "react";
import { connect } from "react-redux";
import { RouteComponentProps, withRouter } from "react-router-dom";
import { routePathFromLocalizationKey } from "routes";
import { State } from "store";
import styled from "styled";
import { LocalizationKey } from "types";
import { actions } from "./actions";

import { TypographyButton } from "components/TypographyButton";
import { BottomToolbarDock } from "navigation";
import { BottomToolbar } from "./components/BottomToolbar";
import { EntrySelect } from "./components/EntrySelect";

type StateProps = {
  loaded: boolean;
  entries: IEntry[];
};

type DispatchProps = {
  loadPlaceholderData: () => any;
};

type OwnProps = RouteComponentProps<{}> & {
  routeEntrySelectLocalizationKey: LocalizationKey;
  routeCategorySelectLocalizationKey: LocalizationKey;
};
export { OwnProps as SubscriptionManagePageProps };

type Props = StateProps & DispatchProps & OwnProps;

type Page = "entry-select" | "category-select";

type FormState = {
  selectedEntryIDs: string[];
};

const initialFormState: FormState = {
  selectedEntryIDs: [],
};

const onSubmitPlaceholder = (values: any) => {
  /* tslint:disable-next-line:no-console */
  console.log("values", values);
};

const SubscriptionManagementPage: SFC<Props> = props => {
  const {
    routeEntrySelectLocalizationKey,
    location,
    loaded,
    entries,
    loadPlaceholderData,
  } = props;

  if (!loaded) {
    loadPlaceholderData();
    return null;
  }

  const page: Page =
    routePathFromLocalizationKey(routeEntrySelectLocalizationKey) ===
    location.pathname
      ? "entry-select"
      : "category-select";

  return (
    <Formik initialValues={initialFormState} onSubmit={onSubmitPlaceholder}>
      {formikProps => (
        <BottomToolbarDock toolbarNode={renderToolbarNode(formikProps, page)}>
          {page === "entry-select" && (
            <EntrySelect
              entries={entries}
              initialSelectedEntries={formikProps.values.selectedEntryIDs}
              minSelectedCount={1}
              maxSelectedCount={entries.length}
              onSelectionChange={selectedEntryIDs =>
                formikProps.setFieldValue("selectedEntryIDs", selectedEntryIDs)
              }
            />
          )}
        </BottomToolbarDock>
      )}
    </Formik>
  );
};

const renderToolbarNode = (
  _formikProps: FormikProps<FormState>,
  page: Page,
) => (
  <BottomToolbar>
    {page === "entry-select" ? (
      <>
        <FlexSpacer />
        <TypographyButton
          color="primary"
          filled
          // disabled={isNextButtonDisabled}
          // onClick={this.handleNextButtonClick}
        >
          {strings.common_NextButtonText}
        </TypographyButton>
      </>
    ) : null}
  </BottomToolbar>
);

const SubscriptionManagementPageContainer = withRouter(
  connect<StateProps, DispatchProps, OwnProps, State>(
    ({ subscriptionManagement: { loaded, entries } }) => ({
      loaded,
      entries,
    }),
    { loadPlaceholderData: actions.loadPlaceholderData },
  )(SubscriptionManagementPage),
);
export { SubscriptionManagementPageContainer as SubscriptionManagementPage };

const FlexSpacer = styled.div`
  flex: 1;
`;
