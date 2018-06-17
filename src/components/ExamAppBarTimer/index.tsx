import { examTimerYellow } from "common/css/colors";
import React, { Component } from "react";
import styled, { css } from "styled";

import Button from "@material-ui/core/Button";
import Pause from "@material-ui/icons/Pause";
import PlayArrow from "@material-ui/icons/PlayArrow";

import { Typography } from "components/Typography";

// tslint:disable-next-line:no-empty-interface
export interface ExamAppBarTimerProps {}

interface ExamAppBarTimerState {
  secondsElapsed: number;
  timerStarted: boolean;
}

export class ExamAppBarTimer extends Component<
  ExamAppBarTimerProps,
  ExamAppBarTimerState
> {
  private timer: number | null = null;

  state: ExamAppBarTimerState = {
    secondsElapsed: 0,
    timerStarted: true,
  };

  componentDidMount() {
    this.startTimer();
  }

  componentWillUnmount() {
    this.stopTimer();
  }

  private startTimer = () => {
    this.timer = window.setInterval(
      () =>
        this.setState(state => ({ secondsElapsed: state.secondsElapsed + 1 })),
      1000 /* one second */,
    );
    this.setState({ timerStarted: true });
  };

  private stopTimer = (unmounting?: boolean) => {
    if (this.timer) window.clearInterval(this.timer);

    if (!unmounting) this.setState({ timerStarted: false });
  };

  private handleClick = () => {
    if (this.state.timerStarted) this.stopTimer();
    else this.startTimer();
  };

  /**
   * @see https://stackoverflow.com/questions/6312993/javascript-seconds-to-time-string-with-format-hhmmss
   */
  private generateSecondsText = () => {
    const date = new Date(0);
    date.setSeconds(this.state.secondsElapsed);
    return date.toISOString().substr(11, 8);
  };

  render() {
    const secondsText = this.generateSecondsText();
    const icon = this.state.timerStarted ? (
      <PauseIconLeft />
    ) : (
      <ResumeIconLeft />
    );

    return (
      <Wrapper>
        <Button size="small" color="inherit" onClick={this.handleClick}>
          {icon}

          <Typography variant="examDrawerTitle" style={{ color: "inherit" }}>
            {secondsText}
          </Typography>
        </Button>
      </Wrapper>
    );
  }
}

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  color: ${examTimerYellow};
`;

const iconMargin = css`
  margin-right: ${({ theme }) => theme.spacing.unit / 2}px;
`;

const PauseIconLeft = styled(Pause)`
  ${iconMargin};
`;

const ResumeIconLeft = styled(PlayArrow)`
  ${iconMargin};
`;
