import { BottomToolbarDock } from "navigation";
import React, { Component } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { State } from "store";
import styled from "styled";
import { actions as dashboardActions } from "./actions";

import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";

import { TypographyButton } from "components/TypographyButton";
import { EntrySelect } from "./components/EntrySelect";
import { IEntry } from "./models/IEntry";
import { IEntrySelectMeta } from "./models/IEntrySelectMeta";

type OnboardingEntriesPageProps = {
  entries: IEntry[];
  entrySelectMeta: IEntrySelectMeta;
  initialSelectedEntryIds: string[];
  onEntriesSubmission: (entries: IEntry[]) => any;
};

type OnboardingEntriesPageState = {
  selectedEntryIds: string[];
  submitted: boolean;
};

class OnboardingEntriesPage extends Component<
  OnboardingEntriesPageProps,
  OnboardingEntriesPageState
> {
  state: OnboardingEntriesPageState = {
    selectedEntryIds: this.props.initialSelectedEntryIds,
    submitted: false,
  };

  render() {
    const { entries, entrySelectMeta, initialSelectedEntryIds } = this.props;
    const { selectedEntryIds, submitted } = this.state;

    if (submitted) return <Redirect to="/welcome/subscriptions" push />;

    const isNextButtonDisabled =
      selectedEntryIds.length < entrySelectMeta.minEntriesCount;

    const toolbarNode = (
      <AppBar position="static" color="default">
        <Toolbar>
          <ButtonWrapper>
            <TypographyButton
              color="primary"
              filled
              disabled={isNextButtonDisabled}
              onClick={this.handleNextButtonClick}
            >
              Next
            </TypographyButton>
          </ButtonWrapper>
        </Toolbar>
      </AppBar>
    );

    return (
      <BottomToolbarDock toolbarNode={toolbarNode}>
        <EntrySelect
          entries={entries}
          initialSelectedEntries={initialSelectedEntryIds}
          minSelectedCount={entrySelectMeta.minEntriesCount}
          maxSelectedCount={entrySelectMeta.maxEntriesCount}
          onSelectionChange={this.handleSelectionChange}
        />
      </BottomToolbarDock>
    );
  }

  private handleSelectionChange = (_: boolean, selectedEntryIds: string[]) => {
    this.setState({ selectedEntryIds });
  };

  private handleNextButtonClick = () => {
    const { entries, onEntriesSubmission } = this.props;
    const { selectedEntryIds } = this.state;

    const selectedEntries = selectedEntryIds.reduce<IEntry[]>((acc, id) => {
      return acc.concat(entries.find(e => e.id === id)!);
    }, []);

    onEntriesSubmission(selectedEntries);
    this.setState({ submitted: true });
  };
}

const OnboardingEntriesPageContainer = connect(
  ({ dashboard }: State) => ({
    entries: dashboard.entries!,
    entrySelectMeta: dashboard.entrySelectMeta!,
    initialSelectedEntryIds: dashboard.entriesPendingPurchase.map(e => e.id),
  }),
  {
    onEntriesSubmission: dashboardActions.setEntriesPendingPurchase,
  },
)(OnboardingEntriesPage);
export { OnboardingEntriesPageContainer as OnboardingEntriesPage };

const ButtonWrapper = styled.div`
  display: flex;
  width: 100%;
  max-width: 1232px;
  height: 100%;
  margin: 0 auto;
  align-items: center;
  justify-content: flex-end;
`;
