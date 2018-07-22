import { withFormik } from "formik";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { State } from "store";
import { actions } from "./actions";
import { DispatchProps, FormState, OwnProps, Props, StateProps } from "./types";

import { SubscriptionManagementPage } from "./SubscriptionManagementPage";

export { OwnProps as SubscriptionManagementPageProps };

const initialFormState: FormState = {
  selectedEntryIDs: [],
};

const onSubmitPlaceholder = (values: any) => {
  /* tslint:disable-next-line:no-console */
  console.log("values", values);
};

const SubscriptionManagementPageContainer = withRouter(
  connect<StateProps, DispatchProps, OwnProps, State>(
    ({
      subscriptionManagement: {
        loaded,
        entries,
        examQuantitySelectionSettings,
      },
    }): StateProps => ({
      loaded,
      isOnboarding: true,

      entries,
      examQuantitySelectionSettings,
    }),
    { loadPlaceholderData: actions.loadPlaceholderData },
  )(
    withFormik<Props, FormState>({
      mapPropsToValues: () => initialFormState,
      handleSubmit: onSubmitPlaceholder,
    })(SubscriptionManagementPage),
  ),
);
export { SubscriptionManagementPageContainer as SubscriptionManagementPage };
