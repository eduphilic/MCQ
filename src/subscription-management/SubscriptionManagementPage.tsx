import { Formik } from "formik";
import { IEntry } from "models";
import React, { SFC } from "react";
import { connect } from "react-redux";
import { Route, Switch } from "react-router-dom";
import { routePathFromLocalizationKey } from "routes";
import { State } from "store";
import { LocalizationKey } from "types";

import { BottomToolbarDock } from "navigation";
import { BottomToolbar } from "./components/BottomToolbar";

type StateProps = {
  entries: IEntry[];
};

type OwnProps = {
  routeEntrySelectLocalizationKey: LocalizationKey;
};
export { OwnProps as SubscriptionManagePageProps };

type Props = StateProps & OwnProps;

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
  const { routeEntrySelectLocalizationKey } = props;

  const toolbarNode = <BottomToolbar />;

  const entrySelectRoute = routePathFromLocalizationKey(
    routeEntrySelectLocalizationKey,
  );

  return (
    <Formik initialValues={initialFormState} onSubmit={onSubmitPlaceholder}>
      {() => (
        <BottomToolbarDock toolbarNode={toolbarNode}>
          <Switch>
            <Route path={entrySelectRoute}>
              <div>Placeholder</div>
            </Route>
          </Switch>
        </BottomToolbarDock>
      )}
    </Formik>
  );
};

const SubscriptionManagementPageContainer = connect<
  StateProps,
  {},
  OwnProps,
  State
>(({ subscriptionManagement: { entries } }) => ({
  entries,
}))(SubscriptionManagementPage);
export { SubscriptionManagementPageContainer as SubscriptionManagementPage };
