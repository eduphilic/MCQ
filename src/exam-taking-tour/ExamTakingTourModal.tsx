import React, { Component } from "react";
import { createPortal } from "react-dom";
import styled from "styled";

import withWidth, {
  isWidthDown,
  WithWidthProps,
} from "@material-ui/core/withWidth";

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
    }
  }

  render() {
    const { width } = this.props;
    const { portalElement } = this.state;

    const isMobile = isWidthDown("sm", width);
    if (!isMobile || !portalElement) return null;

    const portalContents = (
      <Wrapper revealAppBar>
        <div>
          <div>Placeholder</div>
        </div>
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
            rgba(0, 0, 0, 0.75) 64px,
            `
          : `rgba(0, 0, 0, 0.75),`}
      rgba(0, 0, 0, 0.75)
  );
`;
