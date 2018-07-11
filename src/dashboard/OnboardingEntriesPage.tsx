import { BottomToolbarDock } from "navigation";
import React, { Component } from "react";
import { connect } from "react-redux";
import { State } from "store";
import styled from "styled";

import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";

import { TypographyButton } from "components/TypographyButton";
import { EntrySelect } from "./components/EntrySelect";
import { IEntry } from "./models/IEntry";
import { IEntrySelectMeta } from "./models/IEntrySelectMeta";

type OnboardingEntriesPageProps = {
  entries: IEntry[];
  entrySelectMeta: IEntrySelectMeta;
};

type OnboardingEntriesPageState = {
  selectedEntryIds: string[];
};

class OnboardingEntriesPage extends Component<
  OnboardingEntriesPageProps,
  OnboardingEntriesPageState
> {
  state: OnboardingEntriesPageState = { selectedEntryIds: [] };

  render() {
    const { entries, entrySelectMeta } = this.props;
    const { selectedEntryIds } = this.state;

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
}

const OnboardingEntriesPageContainer = connect(({ dashboard }: State) => ({
  entries: dashboard.entries!,
  entrySelectMeta: dashboard.entrySelectMeta!,
}))(OnboardingEntriesPage);
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
