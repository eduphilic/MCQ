import { withFormik } from "formik";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { State } from "store";
// tslint:disable-next-line:import-name
import uuidv1 from "uuid/v1";
import { actions } from "./actions";
import { isOnboardingSelector } from "./selectors";
import { DispatchProps, FormState, OwnProps, Props, StateProps } from "./types";

import { SubscriptionManagementPage } from "./SubscriptionManagementPage";

export { OwnProps as SubscriptionManagementPageProps };

const initialFormState: FormState = {
  selectedEntryIDs: [],
  selectedQuantities: [],
};

const SubscriptionManagementPageContainer = withRouter(
  connect<StateProps, DispatchProps, OwnProps, State>(
    (state): StateProps => {
      const {
        subscriptionManagement: {
          loaded,
          entries,
          categories,
          examQuantitySelectionSettings,
        },
      } = state;

      return {
        loaded,
        isOnboarding: isOnboardingSelector(state),

        entries,
        categories,
        examQuantitySelectionSettings,
      };
    },
    {
      loadPlaceholderData: actions.loadPlaceholderData,
      submitSubscriptions: actions.subscriptionAdditionSuccess,
    },
  )(
    withFormik<Props, FormState>({
      mapPropsToValues: () => initialFormState,
      handleSubmit: (values, formikBag) => {
        const { selectedQuantities } = values;
        const { submitSubscriptions } = formikBag.props;

        const subscriptionID = uuidv1();

        submitSubscriptions(
          selectedQuantities.map(q => ({
            ...q,
            subscriptionID,
          })),
        );

        if (!formikBag.props.isOnboarding) {
          alert(
            "Display congratulations or summary of additional subscriptions purchase.",
          );
          formikBag.resetForm();
        }
      },
    })(SubscriptionManagementPage),
  ),
);
export { SubscriptionManagementPageContainer as SubscriptionManagementPage };
