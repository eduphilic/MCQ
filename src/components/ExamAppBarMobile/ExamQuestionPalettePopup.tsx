import { drawerWidth } from "common/css/drawerWidth";
import React, {
  cloneElement,
  Component,
  EventHandler,
  MouseEvent,
  ReactElement,
} from "react";
import styled from "styled";

import Popover from "@material-ui/core/Popover";

import { ExamDrawerQuestionPalette } from "components/ExamDrawerQuestionPalette";

export interface ExamQuestionPalettePopupProps {
  /**
   * Requires a child React Element which accepts an onClick handler.
   */
  children: ReactElement<{
    onClick?: EventHandler<MouseEvent<HTMLElement>>;
  }>;
}

interface ExamQuestionPalettePopupState {
  anchorEl: HTMLElement | null;
}

/**
 * Provides a popup for the QuestionsPalette.
 */
export class ExamQuestionPalettePopup extends Component<
  ExamQuestionPalettePopupProps,
  ExamQuestionPalettePopupState
> {
  state: ExamQuestionPalettePopupState = {
    anchorEl: null,
  };

  handleClick: EventHandler<MouseEvent<HTMLElement>> = event =>
    this.setState({ anchorEl: event.currentTarget });

  handleClose = () => this.setState({ anchorEl: null });

  render() {
    const { children } = this.props;
    const { anchorEl } = this.state;

    const childWithOnClick = cloneElement(children, {
      onClick: this.handleClick,
    });

    return (
      <>
        {childWithOnClick}

        <Popover
          open={Boolean(anchorEl)}
          onClose={this.handleClose}
          anchorEl={anchorEl ? anchorEl : undefined}
          anchorOrigin={{
            horizontal: "left",
            vertical: "bottom",
          }}
          transformOrigin={{
            horizontal: "left",
            vertical: "top",
          }}
        >
          <ExamPaletteWrapper>
            <ExamDrawerQuestionPalette />
          </ExamPaletteWrapper>
        </Popover>
      </>
    );
  }
}

const ExamPaletteWrapper = styled.div`
  max-width: ${drawerWidth}px;
`;
