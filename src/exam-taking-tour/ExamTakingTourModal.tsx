import React, { Component } from "react";
import { ArcherContainer, ArcherElement } from "react-archer";
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
};
type Props = OwnProps & WithWidthProps;

export { OwnProps as ExamTakingTourModalProps };

class ExamTakingTourModal extends Component<Props, State> {
  state: State = { portalElement: null };

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
    const { portalElement } = this.state;

    const isMobile = isWidthDown("sm", width);
    if (!isMobile || !portalElement) return null;

    const portalContents = (
      <Wrapper revealAppBar>
        <ArcherContainer
          strokeColor="#669b64"
          strokeWidth={4}
          arrowLength={4}
          arrowThickness={2.5}
        >
          <div style={{ display: "flex", width: "100vw" }}>
            <ArcherElement id="dashboard-button">
              <div style={{ width: 40, height: 32 }} />
            </ArcherElement>
          </div>

          <div style={{ display: "flex", marginTop: 128, paddingLeft: 100 }}>
            <ArcherElement
              id="dashboard-button-description"
              relations={[
                {
                  from: { anchor: "left" },
                  to: { anchor: "right", id: "dashboard-button" },
                },
              ]}
            >
              <div style={{ paddingLeft: 4 }}>
                <Typography style={{ color: "#fff" }}>Exit Exam</Typography>
              </div>
            </ArcherElement>
          </div>

          <ProgressionButton>OK, GOT IT!</ProgressionButton>
        </ArcherContainer>
      </Wrapper>
    );

    return createPortal(portalContents, portalElement);
  }
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

// const AppBar = styled.div`
//   display: flex;
//   width: 100%;
//   height: 32px;
// `;

// const AppBarIcon = styled.div`
//   width: 50px;
//   height: 32px;
// `;

// type StyleProp = React.DetailedHTMLProps<
//   React.HTMLAttributes<HTMLDivElement>,
//   HTMLDivElement
// >["style"];
// const InfoBox = styled<{ className?: string; style?: StyleProp }>(
//   ({ children, className, style }) => (
//     <div className={className} style={style}>
//       <Typography style={{ color: "#fff" }}>{children}</Typography>
//     </div>
//   ),
// )`
//   color: #fff;
// `;

const ProgressionButton = styled<TypographyButtonProps>(props => (
  <TypographyButton {...props} color="primary" filled />
))`
  position: fixed;
  left: 50%;
  bottom: 24px;
  transform: translateX(-50%);
`;
