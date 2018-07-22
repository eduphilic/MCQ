import { LocalizationStateConsumer, strings } from "localization";
import { IEntry } from "models";
import React, { Component, Fragment } from "react";
import { routePathFromLocalizationKey } from "routes";
import styled from "styled";
import { Page, PropsWithFormState } from "./types";

import CardContent from "@material-ui/core/CardContent";
import CardHeader from "@material-ui/core/CardHeader";
import Divider from "@material-ui/core/Divider";
import Hidden from "@material-ui/core/Hidden";

import { CardMobileFlat } from "components/CardMobileFlat";
import { Typography } from "components/Typography";
import { TypographyButton } from "components/TypographyButton";
import { BottomToolbarDock } from "navigation";
import { BottomToolbar } from "./components/BottomToolbar";
import { EntrySelect } from "./components/EntrySelect";
import { ExamQuantitySelector } from "./components/ExamQuantitySelector";
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

  private getSelectedQuantityIndex = (categoryID: string): number => {
    const { values } = this.props;
    const { selectedQuantities } = values;

    const item = selectedQuantities.find(q => q.categoryID === categoryID);

    return item ? item.quantityIndex : 0;
  };

  private setSelectedQuantityIndex = (
    categoryID: string,
    quantityIndex: number,
  ) => {
    const { values, setFieldValue } = this.props;
    let selectedQuantities = values.selectedQuantities.slice();

    const item: (typeof selectedQuantities)[0] = selectedQuantities.find(
      q => q.categoryID === categoryID,
    ) || { categoryID, quantityIndex };
    item.quantityIndex = quantityIndex;

    selectedQuantities = selectedQuantities
      .filter(q => q.categoryID !== categoryID)
      .concat(item);

    setFieldValue("selectedQuantities", selectedQuantities);
  };

  private getTotal = (): number => {
    const { values, examQuantitySelectionSettings } = this.props;
    const { selectedQuantities } = values;
    const {
      quantities,
      quantitiesFreeIndexes,
      examPriceRs,
    } = examQuantitySelectionSettings!;

    const total = selectedQuantities.reduce((accumulator, quantity): number => {
      const quantityIndex = quantity.quantityIndex;

      const free = quantitiesFreeIndexes.includes(quantityIndex);
      if (free) return accumulator;

      return accumulator + examPriceRs * quantities[quantityIndex];
    }, 0);

    return total;
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

        {this.renderQuantitySelectionCardContents(e)}
      </CardMobileFlat>
    ));
  };

  private renderQuantitySelectionCardContents = (entry: IEntry) => {
    const { examQuantitySelectionSettings } = this.props;

    const categories = this.props.categories.filter(
      c => c.entryID === entry.id,
    );

    return (
      <CardContent>
        {categories.map((c, index) => (
          <Fragment key={c.id}>
            <ExamQuantitySelector
              categoryLabel={c.title}
              examQuantitySelectionSettings={examQuantitySelectionSettings!}
              selectedQuantityIndex={this.getSelectedQuantityIndex(c.id)}
              onChange={quantityIndex =>
                this.setSelectedQuantityIndex(c.id, quantityIndex)
              }
            />
            {index < categories.length - 1 && (
              <Hidden mdUp>
                <StyledDivider />
              </Hidden>
            )}
          </Fragment>
        ))}
      </CardContent>
    );
  };

  private renderToolbarNode = () => {
    const { values, submitForm } = this.props;
    const page = this.getCurrentPage();

    const isNextButtonDisabled =
      values.selectedEntryIDs.length < this.getMinimumEntriesRequired();

    const total = this.getTotal();

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
        ) : (
          <>
            <Hidden xsDown>
              <Typography variant="cardTitle">Subscribe Exam Pack</Typography>
            </Hidden>

            <RightToolbarGroup>
              <Typography variant="cardTitle" style={{ fontWeight: 600 }}>
                Total Rs {total}
              </Typography>

              <TypographyButton color="yellow" filled onClick={submitForm}>
                {strings.dashboard_OnboardingSubscriptionPage_PayButtonText}
              </TypographyButton>
            </RightToolbarGroup>
          </>
        )}
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

const StyledDivider = styled(Divider)`
  margin: ${({ theme }) => theme.spacing.unit * 2}px;
`;

const RightToolbarGroup = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: flex-end;

  > *:first-child {
    margin-right: ${({ theme }) => theme.spacing.unit * 4}px;
  }
`;
