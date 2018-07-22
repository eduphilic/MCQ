import { LocalizationStateConsumer, strings } from "localization";
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
import { SelectedEntries } from "./components/SelectedEntries";

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
    const { entries, values } = this.props;
    const { selectedEntryIDs } = values;

    const minEntriesRequired = this.getMinimumEntriesRequired();
    const currentPage = this.getCurrentPage();

    return currentPage === "entry-select" ? (
      <EntrySelect
        entries={entries}
        initialSelectedEntries={selectedEntryIDs}
        minSelectedCount={minEntriesRequired}
        maxSelectedCount={entries.length}
        onSelectionChange={value =>
          this.props.setFieldValue("selectedEntryIDs", value)
        }
      />
    ) : (
      <>
        <CardMobileFlat>
          <CardHeader
            title={
              <Typography variant="cardTitle">Your Selected Entries</Typography>
            }
          />
          <CardContent>
            <SelectedEntries
              entries={entries}
              minEntriesCount={minEntriesRequired}
              maxEntriesCount={entries.length}
              selectedEntryIDs={selectedEntryIDs}
              onEntryRemoveButtonClick={this.handleEntryRemoveButtonClick}
              onAddMoreButtonClick={this.handleAddMoreButtonClick}
            />
          </CardContent>
        </CardMobileFlat>

        <LocalizationStateConsumer>
          {({ localizationLanguage }) =>
            this.renderQuantitySelectionCards(localizationLanguage)
          }
        </LocalizationStateConsumer>
      </>
    );
  };

  private renderQuantitySelectionCards = (language: "en" | "hi") => {
    const { entries, examQuantitySelectionSettings, values } = this.props;
    const { selectedEntryIDs } = values;

    const selectedEntries = entries.filter(e =>
      selectedEntryIDs.includes(e.id),
    );

    return selectedEntries.map(e => (
      <CardMobileFlat key={e.id}>
        <CardHeader
          // Entry title.
          title={
            <Typography variant="cardTitle">
              {e.title[language] || e.title.en}
            </Typography>
          }
          // Exam pricing text.
          subheader={strings.subscription_management_QuantitySelectionCardPricingText.replace(
            "{}",
            examQuantitySelectionSettings!.examPriceRs.toString(),
          )}
        />
      </CardMobileFlat>
    ));
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

  private handleEntryRemoveButtonClick = (entryID: string) => {
    const { values, setFieldValue } = this.props;

    const selectedEntryIDs = values.selectedEntryIDs.filter(e => e !== entryID);
    setFieldValue("selectedEntryIDs", selectedEntryIDs);
  };

  private handleAddMoreButtonClick = () => {
    const { history } = this.props;

    history.push(this.getEntryPageRoute());
  };
}

const FlexSpacer = styled.div`
  flex: 1;
`;
