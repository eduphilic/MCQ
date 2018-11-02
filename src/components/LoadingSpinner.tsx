import CircularProgress, {
  CircularProgressProps,
} from "@material-ui/core/CircularProgress";
import Fade from "@material-ui/core/Fade";
import React, { cloneElement, Fragment } from "react";
import { styled } from "../styled";
import { LogoImage } from "./LogoImage";

type Props = {
  fadeIn: boolean;
};

export const LoadingSpinner = (props: Props) => {
  const fadeInWrapper = props.fadeIn ? (
    <Fade in style={{ transitionDelay: "2000ms" }} />
  ) : (
    <Fragment />
  );

  return cloneElement(
    fadeInWrapper,
    undefined,
    <Wrapper>
      <SpinnerWrapper>
        <StyledLogoImage />
        <StyledCircularProgress />
      </SpinnerWrapper>
    </Wrapper>,
  );
};

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
`;

const SpinnerWrapper = styled.div`
  position: relative;
  width: 120px;
  height: 120px;
  margin: 16px;
`;

const StyledLogoImage = styled(LogoImage)`
  position: absolute;
  width: 72px;
  height: 72px;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
`;

const StyledCircularProgress = styled<CircularProgressProps>(props => (
  <CircularProgress {...props} size={120} thickness={1.2} />
))`
  width: 120px;
  height: 120px;
`;
