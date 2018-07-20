import { Formik } from "formik";
import { IEntry } from "models";
import React, { SFC } from "react";
import { connect } from "react-redux";
import { Route, Switch } from "react-router-dom";
import { routePathFromLocalizationKey } from "routes";
import { State } from "store";
import { LocalizationKey } from "types";
import { actions } from "./actions";

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

type OwnProps = {
  routeEntrySelectLocalizationKey: LocalizationKey;
};
export { OwnProps as SubscriptionManagePageProps };

type Props = StateProps & DispatchProps & OwnProps;

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
    loaded,
    entries,
    loadPlaceholderData,
  } = props;

  if (!loaded) {
    loadPlaceholderData();
    return null;
  }

  const toolbarNode = <BottomToolbar />;

  const entrySelectRoute = routePathFromLocalizationKey(
    routeEntrySelectLocalizationKey,
  );

  return (
    <Formik initialValues={initialFormState} onSubmit={onSubmitPlaceholder}>
      {({ values, setFieldValue }) => (
        <BottomToolbarDock toolbarNode={toolbarNode}>
          <Switch>
            <Route
              path={entrySelectRoute}
              render={() => (
                <EntrySelect
                  entries={entries}
                  initialSelectedEntries={values.selectedEntryIDs}
                  minSelectedCount={1}
                  maxSelectedCount={entries.length}
                  onSelectionChange={selectedEntryIDs =>
                    setFieldValue("selectedEntryIDs", selectedEntryIDs)
                  }
                />
              )}
            />
          </Switch>
        </BottomToolbarDock>
      )}
    </Formik>
  );
};

const SubscriptionManagementPageContainer = connect<
  StateProps,
  DispatchProps,
  OwnProps,
  State
>(
  ({ subscriptionManagement: { loaded, entries } }) => ({
    loaded,
    entries,
  }),
  { loadPlaceholderData: actions.loadPlaceholderData },
)(SubscriptionManagementPage);
export { SubscriptionManagementPageContainer as SubscriptionManagementPage };
