import { Formik } from "formik";
import { strings } from "localization";
import { IEntry, IEntryCategory } from "models";
import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { Redirect, RouteComponentProps, withRouter } from "react-router-dom";
import { State } from "store";
import styled from "styled";
import { actions as dashboardActions } from "./actions";
import { ICategorySubscriptions } from "./models/ICategorySubscriptions";
import { IEntrySelectMeta } from "./models/IEntrySelectMeta";
import { OnboardingProgress, onboardingProgressSelector } from "./selectors";

import { Divider } from "@material-ui/core";
import CardContent from "@material-ui/core/CardContent";
import CardHeader from "@material-ui/core/CardHeader";
import Hidden from "@material-ui/core/Hidden";

import { CardMobileFlat } from "components/CardMobileFlat";
import { Typography } from "components/Typography";
import { TypographyButton } from "components/TypographyButton";
import { BottomToolbarDock } from "navigation";
import {
  BottomToolbar,
  ExamQuantitySelector,
  IExamQuantitySelectionSettings,
  SelectedEntries,
} from "subscription-management";

type OwnProps = {};
export { OwnProps as OnboardingSubscriptionPageProps };

type StateProps = {
  onboardingProgress: OnboardingProgress;
  entries: IEntry[];
  entryCategories: IEntryCategory[];
  entrySelectMeta: IEntrySelectMeta;
  selectedEntryIDs: string[];
  examQuantitySelectMeta: IExamQuantitySelectionSettings;
};

type DispatchProps = {
  onEntriesPendingPurchaseChange: (entryIDs: IEntry[]) => any;
  onSubmitPurchase: (
    entries: IEntry[],
    subscriptions: ICategorySubscriptions,
  ) => any;
};

type OnboardingSubscriptionPageProps = OwnProps &
  StateProps &
  DispatchProps &
  RouteComponentProps<{}>;

type OnboardingSubscriptionPageState = {
  addMoreButtonClicked: boolean;
  total: number;
  initialValues: ICategorySubscriptions;
};

class OnboardingSubscriptionPage extends Component<
  OnboardingSubscriptionPageProps,
  OnboardingSubscriptionPageState
> {
  state: OnboardingSubscriptionPageState = {
    addMoreButtonClicked: false,
    total: calculateTotal(
      this.createInitialValues(),
      this.props.examQuantitySelectMeta,
    ),
    initialValues: this.createInitialValues(),
  };

  constructor(props: OnboardingSubscriptionPageProps) {
    super(props);

    // Using a bind here because createInitialValues is called from the state
    // initializer before the method is defined.
    this.createInitialValues = this.createInitialValues.bind(this);
  }

  componentDidUpdate(prevProps: OnboardingSubscriptionPageProps) {
    // TODO: Remove this hack. This is done so that the Formik form resets.
    if (prevProps.selectedEntryIDs !== this.props.selectedEntryIDs) {
      this.setState({ initialValues: this.createInitialValues() });
    }
  }

  render() {
    const {
      onboardingProgress,
      entries,
      entryCategories,
      entrySelectMeta,
      selectedEntryIDs,
      examQuantitySelectMeta,
      onSubmitPurchase,
    } = this.props;
    const { addMoreButtonClicked, total, initialValues } = this.state;
    const selectedEntries = entries.filter(e =>
      selectedEntryIDs.includes(e.id),
    );

    if (onboardingProgress === "complete") {
      return <Redirect to="/dashboard" push />;
    }

    if (addMoreButtonClicked) return <Redirect to="/welcome/entries" push />;

    return (
      <Formik
        initialValues={initialValues}
        onSubmit={subscriptions => {
          onSubmitPurchase(selectedEntries, subscriptions);
          this.props.history.push("/dashboard");
        }}
        validateOnChange
        validate={this.handleFormChange}
        // TODO: Remove this hack. This is done so that the Formik form resets.
        enableReinitialize
      >
        {api => (
          <BottomToolbarDock
            toolbarNode={
              <BottomToolbar>
                <Hidden xsDown>
                  <Typography variant="cardTitle">
                    Subscribe Exam Pack
                  </Typography>
                </Hidden>

                <RightToolbarGroup>
                  <Typography variant="cardTitle" style={{ fontWeight: 600 }}>
                    Total Rs {total}
                  </Typography>

                  <TypographyButton
                    color="yellow"
                    filled
                    onClick={api.submitForm}
                  >
                    {strings.dashboard_OnboardingSubscriptionPage_PayButtonText}
                  </TypographyButton>
                </RightToolbarGroup>
              </BottomToolbar>
            }
          >
            <CardMobileFlat>
              <CardHeader
                title={
                  <Typography variant="cardTitle">
                    Your Selected Entries
                  </Typography>
                }
              />
              <CardContent>
                <SelectedEntries
                  entries={entries}
                  minEntriesCount={entrySelectMeta.minEntriesCount}
                  maxEntriesCount={entrySelectMeta.maxEntriesCount}
                  selectedEntryIDs={selectedEntryIDs}
                  onEntryRemoveButtonClick={this.handleEntryRemoveButtonClick}
                  onAddMoreButtonClick={this.handleAddMoreEntriesButtonClick}
                />
              </CardContent>
            </CardMobileFlat>

            {/* TODO: Use correct localization */}
            {selectedEntries.map(e => (
              <CardMobileFlat key={e.id}>
                <CardHeader
                  title={
                    <Typography variant="cardTitle">{e.title.en}</Typography>
                  }
                  subheader={strings.subscription_management_QuantitySelectionCardPricingText.replace(
                    "{}",
                    examQuantitySelectMeta.examPriceRs.toString(),
                  )}
                />

                <CardContent>
                  {entryCategories
                    .filter(c => c.entryID === e.id)
                    .map((c, index, cc) => (
                      <Fragment key={c.id}>
                        <ExamQuantitySelector
                          categoryLabel={c.title}
                          examQuantitySelectionSettings={examQuantitySelectMeta}
                          selectedQuantityIndex={api.values[c.id]}
                          // tslint:disable-next-line:no-empty
                          onChange={quantityIndex =>
                            api.setFieldValue(c.id, quantityIndex)
                          }
                        />
                        {index < cc.length - 1 && (
                          <Hidden mdUp>
                            <StyledDivider />
                          </Hidden>
                        )}
                      </Fragment>
                    ))}
                </CardContent>
              </CardMobileFlat>
            ))}
          </BottomToolbarDock>
        )}
      </Formik>
    );
  }

  private handleEntryRemoveButtonClick = (entryID: string) => {
    const {
      entries,
      selectedEntryIDs,
      onEntriesPendingPurchaseChange,
    } = this.props;
    const updatedSelectedEntryIDs = selectedEntryIDs.filter(s => s !== entryID);
    const updatedEntries = entries.filter(e =>
      updatedSelectedEntryIDs.includes(e.id),
    );

    onEntriesPendingPurchaseChange(updatedEntries);
    // TODO: Remove this hack. This is done so that the Formik form resets.
    setTimeout(() => {
      this.handleFormChange(this.state.initialValues);
    }, 100);
  };

  private handleAddMoreEntriesButtonClick = () => {
    this.setState({ addMoreButtonClicked: true });
  };

  private handleFormChange = (values: ICategorySubscriptions) => {
    const { examQuantitySelectMeta } = this.props;

    this.setState({ total: calculateTotal(values, examQuantitySelectMeta) });
  };

  private createInitialValues(): ICategorySubscriptions {
    const { entryCategories, selectedEntryIDs } = this.props;

    const selectedEntriesCategories = entryCategories.filter(c =>
      selectedEntryIDs.includes(c.entryID),
    );

    return selectedEntriesCategories.reduce(
      (acc, c) => {
        acc[c.id] = 0;

        return acc;
      },
      // tslint:disable-next-line:no-object-literal-type-assertion
      {} as ICategorySubscriptions,
    );
  }
}

const OnboardingSubscriptionPageContainer = connect(
  ({ dashboard }: State) => ({
    onboardingProgress: onboardingProgressSelector(dashboard),
    entries: dashboard.entries,
    entryCategories: dashboard.entryCategories,
    entrySelectMeta: dashboard.entrySelectMeta,
    selectedEntryIDs: dashboard.entriesPendingPurchase.map(e => e.id),
    examQuantitySelectMeta: {} as any,
  }),
  {
    onEntriesPendingPurchaseChange: dashboardActions.setEntriesPendingPurchase,
    onSubmitPurchase: dashboardActions.setSubscribedEntries,
  },
)(OnboardingSubscriptionPage);

const OnboardingSubscriptionPageContainerWithRouter = withRouter(
  OnboardingSubscriptionPageContainer,
);
export {
  OnboardingSubscriptionPageContainerWithRouter as OnboardingSubscriptionPage,
};

const calculateTotal = (
  subscriptions: ICategorySubscriptions,
  {
    examPriceRs,
    quantities,
    quantitiesFreeIndexes,
  }: IExamQuantitySelectionSettings,
): number => {
  const total = Object.values(subscriptions).reduce((acc, quantityIndex) => {
    const free = quantitiesFreeIndexes.includes(quantityIndex);
    if (free) return acc;

    return acc + examPriceRs * quantities[quantityIndex];
  }, 0);

  return total;
};

const RightToolbarGroup = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: flex-end;

  > *:first-child {
    margin-right: ${({ theme }) => theme.spacing.unit * 4}px;
  }
`;

const StyledDivider = styled(Divider)`
  margin: ${({ theme }) => theme.spacing.unit * 2}px;
`;
