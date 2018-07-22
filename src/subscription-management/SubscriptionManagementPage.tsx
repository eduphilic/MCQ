import { strings } from "localization";
import React, { Component } from "react";
import { routePathFromLocalizationKey } from "routes";
import styled from "styled";
import { Page, PropsWithFormState } from "./types";

import CardContent from "@material-ui/core/CardContent";
import CardHeader from "@material-ui/core/CardHeader";

import { CardMobileFlat } from "components/CardMobileFlat";
import { Typography } from "components/Typography";
import { TypographyButton } from "components/TypographyButton";
import { BottomToolbarDock } from "navigation";
import { BottomToolbar } from "./components/BottomToolbar";
import { EntrySelect } from "./components/EntrySelect";
// import { SelectedEntries } from "./components/SelectedEntries";

export class SubscriptionManagementPage extends Component<PropsWithFormState> {
  componentDidMount() {
    const { loaded, loadPlaceholderData } = this.props;

    if (!loaded) loadPlaceholderData();
  }

  render() {
    const { loaded } = this.props;

    if (!loaded) return null;

    return (
      <BottomToolbarDock toolbarNode={this.renderToolbarNode()}>
        {this.renderPageContents()}
      </BottomToolbarDock>
    );
  }

  private getEntryPageRoute = () => {
    const { isOnboarding } = this.props;

    return routePathFromLocalizationKey(
      isOnboarding
        ? "routes_Dashboard_OnboardingEntriesPage"
        : "routes_Dashboard_OnboardingEntriesPage",
    );
  };

  private getSubscriptionPageRoute = () => {
    const { isOnboarding } = this.props;

    return routePathFromLocalizationKey(
      isOnboarding
        ? "routes_Dashboard_OnboardingSubscriptionPage"
        : "routes_Dashboard_OnboardingSubscriptionPage",
    );
  };

  private getCurrentPage = (): Page => {
    const { location } = this.props;

    return location.pathname === this.getEntryPageRoute()
      ? "entry-select"
      : "category-select";
  };

  private getMinimumEntriesRequired = () => {
    const { isOnboarding } = this.props;
    return isOnboarding ? 1 : 0;
  };

  private renderPageContents = () => {
    const currentPage = this.getCurrentPage();

    return currentPage === "entry-select" ? (
      <EntrySelect
        entries={this.props.entries}
        initialSelectedEntries={this.props.values.selectedEntryIDs}
        minSelectedCount={this.getMinimumEntriesRequired()}
        maxSelectedCount={this.props.entries.length}
        onSelectionChange={selectedEntryIDs =>
          this.props.setFieldValue("selectedEntryIDs", selectedEntryIDs)
        }
      />
    ) : (
      <CardMobileFlat>
        <CardHeader
          title={
            <Typography variant="cardTitle">Your Selected Entries</Typography>
          }
        />
        <CardContent>{/* */}</CardContent>
      </CardMobileFlat>
    );
  };

  private renderToolbarNode = () => {
    const { values } = this.props;
    const page = this.getCurrentPage();

    const isNextButtonDisabled =
      values.selectedEntryIDs.length < this.getMinimumEntriesRequired();

    return (
      <BottomToolbar>
        {page === "entry-select" ? (
          <>
            <FlexSpacer />
            <TypographyButton
              color="primary"
              filled
              disabled={isNextButtonDisabled}
              onClick={this.handleNextButtonClick}
            >
              {strings.common_NextButtonText}
            </TypographyButton>
          </>
        ) : null}
      </BottomToolbar>
    );
  };

  private handleNextButtonClick = () => {
    const { history } = this.props;

    history.push(this.getSubscriptionPageRoute());
  };
}

const FlexSpacer = styled.div`
  flex: 1;
`;
