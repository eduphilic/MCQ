import React, { Component } from "react";
import { routePathFromLocalizationKey } from "routes";
import styled from "styled";
import { Page, PropsWithFormState } from "./types";

import { TypographyButton } from "components/TypographyButton";
import { strings } from "localization";
import { BottomToolbarDock } from "navigation";
import { BottomToolbar } from "./components/BottomToolbar";
import { EntrySelect } from "./components/EntrySelect";

export class SubscriptionManagementPage extends Component<PropsWithFormState> {
  componentDidMount() {
    const { loaded, loadPlaceholderData } = this.props;

    if (!loaded) loadPlaceholderData();
  }

  render() {
    const { routeEntrySelectLocalizationKey, loaded, location } = this.props;

    if (!loaded) return null;

    const page =
      routePathFromLocalizationKey(routeEntrySelectLocalizationKey) ===
      location.pathname
        ? "entry-select"
        : "category-select";

    return (
      <BottomToolbarDock toolbarNode={renderToolbarNode(page)}>
        {this.renderPageContents()}
      </BottomToolbarDock>
    );
  }

  private getCurrentPage = (): Page => {
    const {
      location: { pathname },
      routeEntrySelectLocalizationKey,
    } = this.props;

    const currentPageRoute = routePathFromLocalizationKey(
      routeEntrySelectLocalizationKey,
    );

    return pathname === currentPageRoute ? "entry-select" : "category-select";
  };

  private renderPageContents = () => {
    const currentPage = this.getCurrentPage();

    return currentPage === "entry-select" ? (
      <EntrySelect
        entries={this.props.entries}
        initialSelectedEntries={this.props.values.selectedEntryIDs}
        minSelectedCount={1}
        maxSelectedCount={this.props.entries.length}
        onSelectionChange={selectedEntryIDs =>
          this.props.setFieldValue("selectedEntryIDs", selectedEntryIDs)
        }
      />
    ) : null;
  };
}

const renderToolbarNode = (
  // _formikProps: FormikProps<FormState>,
  page: Page,
) => (
  <BottomToolbar>
    {page === "entry-select" ? (
      <>
        <FlexSpacer />
        <TypographyButton
          color="primary"
          filled
          // disabled={isNextButtonDisabled}
          // onClick={this.handleNextButtonClick}
        >
          {strings.common_NextButtonText}
        </TypographyButton>
      </>
    ) : null}
  </BottomToolbar>
);

const FlexSpacer = styled.div`
  flex: 1;
`;
