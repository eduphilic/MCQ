import React, { Component, ReactElement } from "react";

import FilterList from "@material-ui/icons/FilterList";

import { ResponsiveToolbarTypographyButton } from "../../molecules/ResponsiveToolbarTypographyButton";
import { SideSheetToggleStateConsumer } from "./SideSheetToggleState";

export interface SideSheetToggleButtonProps {
  /**
   * Icon to use when side sheet is used on the page. Icon is displayed in the
   * app bar on mobile.
   *
   * @default "<FilterList />"
   */
  sideSheetIconElement?: ReactElement<any>;

  /**
   * Tooltip text for side sheet toggle button.
   *
   * @default "Filtering Options"
   */
  sideSheetIconTooltipTitle?: string;
}

export class SideSheetToggleButton extends Component<
  SideSheetToggleButtonProps
> {
  render() {
    const {
      sideSheetIconElement = <FilterList />,
      sideSheetIconTooltipTitle = "Filtering Options",
    } = this.props;

    return (
      <SideSheetToggleStateConsumer>
        {api =>
          api.toggleButtonVisibility &&
          !api.fixedPanelVisible && (
            <ResponsiveToolbarTypographyButton
              dense
              iconNode={sideSheetIconElement}
              tooltipTitle={sideSheetIconTooltipTitle}
              onClick={api.toggleOpen}
            />
          )
        }
      </SideSheetToggleStateConsumer>
    );
  }
}
