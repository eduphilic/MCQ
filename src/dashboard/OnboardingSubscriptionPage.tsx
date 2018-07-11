import React, { Component } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { State } from "store";
import { actions as dashboardActions } from "./actions";
import { IEntry } from "./models/IEntry";

import { Typography } from "components/Typography";
import { SelectedEntries } from "./components/SelectedEntries";
import { IEntrySelectMeta } from "./models/IEntrySelectMeta";

type OnboardingSubscriptionPageProps = {
  entries: IEntry[];
  entrySelectMeta: IEntrySelectMeta;
  selectedEntryIDs: string[];
  onEntriesPendingPurchaseChange: (entryIDs: IEntry[]) => any;
};

type OnboardingSubscriptionPageState = {
  addMoreButtonClicked: boolean;
};

class OnboardingSubscriptionPage extends Component<
  OnboardingSubscriptionPageProps,
  OnboardingSubscriptionPageState
> {
  state: OnboardingSubscriptionPageState = {
    addMoreButtonClicked: false,
  };

  render() {
    const { entries, entrySelectMeta, selectedEntryIDs } = this.props;
    const { addMoreButtonClicked } = this.state;

    if (addMoreButtonClicked) return <Redirect to="/welcome/entries" push />;

    return (
      <>
        <Typography variant="cardTitle">Your Selected Entries</Typography>
        <SelectedEntries
          entries={entries}
          entrySelectMeta={entrySelectMeta}
          selectedEntryIDs={selectedEntryIDs}
          onEntryRemoveButtonClick={this.handleEntryRemoveButtonClick}
          onAddMoreButtonClick={this.handleAddMoreEntriesButtonClick}
        />
      </>
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
  };

  private handleAddMoreEntriesButtonClick = () => {
    this.setState({ addMoreButtonClicked: true });
  };
}

const OnboardingSubscriptionPageContainer = connect(
  ({ dashboard }: State) => ({
    entries: dashboard.entries,
    entrySelectMeta: dashboard.entrySelectMeta,
    selectedEntryIDs: dashboard.entriesPendingPurchase.map(e => e.id),
  }),
  {
    onEntriesPendingPurchaseChange: dashboardActions.setEntriesPendingPurchase,
  },
)(OnboardingSubscriptionPage);
export { OnboardingSubscriptionPageContainer as OnboardingSubscriptionPage };
