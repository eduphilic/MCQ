import React, { SFC } from "react";
import {
  ArcherContainer,
  ArcherElement,
  ArcherElementProps,
} from "react-archer";
import styled from "styled";

import { Typography } from "components/Typography";
import {
  TypographyButton,
  TypographyButtonProps,
} from "components/TypographyButton";
import { TourPortal } from "./components/TourPortal";
import { TourPortalContents } from "./components/TourPortalContents";
import { ReactComponent as SwipeIcon } from "./swipe.svg";

export const ExamTakingTourModal: SFC = () => {
  return (
    <TourPortal>
      {({ closeModal }) => (
        <TourPortalContents>
          <div
            style={{
              position: "fixed",
              width: "30vmin",
              height: "30vmin",
              left: "50%",
              top: "60%",
              transform: "translate(-50%, -50%)",
            }}
          >
            <SwipeIcon style={{ fill: "#669b64" }} />
            <Typography
              style={{
                position: "absolute",
                width: "200%",
                left: "-50%",
                paddingTop: 16,
                fontSize: 13,
                textAlign: "center",
                color: "#fff",
              }}
            >
              Swipe LEFT/RIGHT to goto next or previous questions
            </Typography>
          </div>

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

            <ProgressionButton onClick={closeModal}>
              OK, GOT IT!
            </ProgressionButton>
          </ArcherContainer>
        </TourPortalContents>
      )}
    </TourPortal>
  );
};

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
