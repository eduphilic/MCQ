import React, { Component } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { State } from "store";
import { actions as dashboardActions } from "./actions";
import { IEntry } from "./models/IEntry";

import { Typography } from "components/Typography";
import { ExamQuantitySelector } from "./components/ExamQuantitySelector";
import { SelectedEntries } from "./components/SelectedEntries";
import { IEntrySelectMeta } from "./models/IEntrySelectMeta";
import { IExamQuantitySelectMeta } from "./models/IExamQuantitySelectMeta";

type OnboardingSubscriptionPageProps = {
  entries: IEntry[];
  entrySelectMeta: IEntrySelectMeta;
  selectedEntryIDs: string[];
  examQuantitySelectMeta: IExamQuantitySelectMeta;
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
    const {
      entries,
      entrySelectMeta,
      selectedEntryIDs,
      examQuantitySelectMeta,
    } = this.props;
    const { addMoreButtonClicked } = this.state;
    const selectedEntries = entries.filter(e =>
      selectedEntryIDs.includes(e.id),
    );

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

        {/* TODO: Use correct localization */}
        {selectedEntries.map(e => (
          <div key={e.id}>
            <Typography variant="cardTitle">{e.title.en}</Typography>
            {Array.from({ length: 3 }, (_: any, index) => (
              <ExamQuantitySelector
                key={index}
                categoryLabel={{ en: "Sol GD" }}
                examQuantitySelectMeta={examQuantitySelectMeta}
                selectedQuantityIndex={0}
                // tslint:disable-next-line:no-empty
                onChange={() => {}}
              />
            ))}
          </div>
        ))}
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
    examQuantitySelectMeta: dashboard.examQuantitySelectMeta,
  }),
  {
    onEntriesPendingPurchaseChange: dashboardActions.setEntriesPendingPurchase,
  },
)(OnboardingSubscriptionPage);
export { OnboardingSubscriptionPageContainer as OnboardingSubscriptionPage };
