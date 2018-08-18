import React, { Component, ReactNode, SFC } from "react";
import {
  ArcherContainer,
  ArcherElement,
  ArcherElementProps,
} from "react-archer";
import { createPortal } from "react-dom";
import styled from "styled";

import withWidth, {
  isWidthDown,
  WithWidthProps,
} from "@material-ui/core/withWidth";

import { Typography } from "components/Typography";
import {
  TypographyButton,
  TypographyButtonProps,
} from "components/TypographyButton";

type OwnProps = {};
type State = {
  portalElement: HTMLDivElement | null;
  open: boolean;
  page: "page1" | "page2";
};
type Props = OwnProps & WithWidthProps;

export { OwnProps as ExamTakingTourModalProps };

class ExamTakingTourModal extends Component<Props, State> {
  state: State = { portalElement: null, open: true, page: "page1" };

  componentDidMount() {
    const portalElement = document.createElement("div");

    document.body.appendChild(portalElement);
    this.setState({ portalElement });
  }

  componentWillUnmount() {
    const { portalElement } = this.state;

    if (portalElement) {
      document.body.removeChild(portalElement);
      this.setState({ portalElement: null });
    }
  }

  render() {
    const { width } = this.props;
    const { portalElement, open, page } = this.state;

    const isMobile = isWidthDown("sm", width);
    if (!isMobile || !portalElement || !open) return null;

    let portalContents: ReactNode;

    if (page === "page1") {
      portalContents = (
        <Wrapper revealAppBar={false}>
          <div
            style={{
              position: "fixed",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              color: "#fff",
            }}
          >
            Placeholder (Finger Swipe Image)
          </div>

          <ProgressionButton onClick={this.handleNextButtonClick}>
            NEXT
          </ProgressionButton>
        </Wrapper>
      );
    }

    if (page === "page2") {
      portalContents = (
        <Wrapper revealAppBar>
          <ArcherContainer
            strokeColor="#669b64"
            strokeWidth={4}
            arrowLength={4}
            arrowThickness={2.5}
          >
            <ToolbarRow>
              <ToolbarButtonSpacer />
              <ToolbarHalfButtonSpacer />

              <ArcherElement id="dashboard-button">
                <ToolbarButton />
              </ArcherElement>

              <ToolbarButtonSpacer />
              <ArcherElement id="change-language-button">
                <ToolbarButton />
              </ArcherElement>

              <ToolbarPauseButtonWrapper>
                <ArcherElement id="pause-button">
                  <ToolbarPauseButton />
                </ArcherElement>
              </ToolbarPauseButtonWrapper>

              <ArcherElement id="submit-exam-button">
                <SubmitExamButton />
              </ArcherElement>
            </ToolbarRow>

            <ToolbarRow>
              <ToolbarButtonSpacer />
              <ArcherElement id="question-palette-button">
                <ToolbarButton />
              </ArcherElement>
            </ToolbarRow>

            <div
              style={{
                display: "flex",
                justifyContent: "center",
                marginTop: 32,
              }}
            >
              <Description
                id="pause-button-description"
                relations={[
                  {
                    from: { anchor: "top" },
                    to: { anchor: "bottom", id: "pause-button" },
                  },
                ]}
              >
                Pause Exam
              </Description>
            </div>

            <div
              style={{
                display: "flex",
                justifyContent: "center",
                marginTop: 16,
              }}
            >
              <Description
                id="submit-exam-button-description"
                relations={[
                  {
                    from: { anchor: "right" },
                    to: { anchor: "bottom", id: "submit-exam-button" },
                  },
                ]}
              >
                Submit Exam
              </Description>
            </div>

            <div
              style={{
                display: "flex",
                justifyContent: "center",
                marginTop: 24,
              }}
            >
              <Description
                id="change-language-button-description"
                relations={[
                  {
                    from: { anchor: "left" },
                    to: { anchor: "bottom", id: "change-language-button" },
                  },
                ]}
              >
                Change Language
              </Description>
            </div>

            {/* <div style={{ display: "flex", marginTop: 32, paddingLeft: 100 }}>
            <Description
              id="dashboard-button-description"
              relations={[
                {
                  from: { anchor: "left" },
                  to: { anchor: "bottom", id: "dashboard-button" },
                },
              ]}
            >
              Exit Exam
            </Description>
          </div> */}

            <div style={{ display: "flex", marginTop: 24, paddingLeft: 100 }}>
              <Description
                id="question-palette-button-description"
                relations={[
                  {
                    from: { anchor: "left" },
                    to: { anchor: "bottom", id: "question-palette-button" },
                  },
                ]}
              >
                Exit Exam <br />
                <br />
                Question Palette
              </Description>
            </div>

            <ProgressionButton onClick={this.handleCloseButtonClick}>
              OK, GOT IT!
            </ProgressionButton>
          </ArcherContainer>
        </Wrapper>
      );
    }

    return createPortal(portalContents, portalElement);
  }

  private handleNextButtonClick = () => {
    this.setState({ page: "page2" });
  };

  private handleCloseButtonClick = () => {
    this.setState({ open: false });
  };
}

const ExamTakingTourModalWithWidth = withWidth()(ExamTakingTourModal);
export { ExamTakingTourModalWithWidth as ExamTakingTourModal };

const Wrapper = styled.div<{ revealAppBar: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 9999;
  background: linear-gradient(
    to bottom,
    ${({ revealAppBar }) =>
        revealAppBar
          ? `
            rgba(0, 0, 0, 0),
            rgba(0, 0, 0, 0) 64px,
            rgba(0, 0, 0, 0.85) 64px,
            `
          : `rgba(0, 0, 0, 0.85),`}
      rgba(0, 0, 0, 0.75)
  );
`;

const ToolbarRow = styled.div`
  display: flex;
  width: 100vw;
  height: 32px;

  ${({ theme }) => theme.breakpoints.up("sm")} {
    padding-left: 8px;
  }
`;

const ToolbarButtonSpacer = styled.div`
  width: 16px;
`;

const ToolbarHalfButtonSpacer = styled.div`
  width: 8px;
`;

const ToolbarButton = styled.div`
  width: 24px;
  height: 32px;
`;

const ToolbarPauseButtonWrapper = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
`;

const ToolbarPauseButton = styled.div`
  width: 120px;
  height: 32px;
`;

const SubmitExamButton = styled.div`
  width: 100px;
  height: 32px;
`;

const Description: SFC<ArcherElementProps> = ({ children, ...rest }) => (
  <ArcherElement {...rest}>
    <div style={{ paddingLeft: 4, paddingRight: 4 }}>
      <Typography style={{ color: "#fff" }}>{children}</Typography>
    </div>
  </ArcherElement>
);

const ProgressionButton = styled<TypographyButtonProps>(props => (
  <TypographyButton {...props} color="primary" filled />
))`
  position: fixed;
  left: 50%;
  bottom: 24px;
  transform: translateX(-50%);
`;
