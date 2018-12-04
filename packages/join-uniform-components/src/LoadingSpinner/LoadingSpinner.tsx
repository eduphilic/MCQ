import { styled } from "@join-uniform/theme";
import Avatar, { AvatarProps } from "@material-ui/core/Avatar";
import CircularProgress, {
  CircularProgressProps,
} from "@material-ui/core/CircularProgress";
import Fade from "@material-ui/core/Fade";
import React, {
  createContext,
  FC,
  ReactNode,
  useContext,
  useMemo,
} from "react";

export type LoadingSpinnerContextValue = {
  /**
   * Delay in milliseconds before displaying the loading spinner. Displaying
   * loading spinners immediately causes users to perceive the page as being
   * slower.
   *
   * @default 2000
   */
  transitionDelay?: number;

  /** 72x72px logo image. Displayed on 1x DPI screens. */
  src1_0x: string;

  /** 105x105px logo image. Displayed on 1.5x DPI screens. */
  src1_5x: string;

  /** 144x144px logo image. Displayed on 2x DPI screens. */
  src2_0x: string;
};

export type LoadingSpinnerProviderProps = LoadingSpinnerContextValue & {
  children?: ReactNode;
};

const LoadingSpinnerContext = createContext<LoadingSpinnerContextValue | null>(
  null,
);

/**
 * Provides the configuration for instances of LoadingSpinner.
 */
export function LoadingSpinnerProvider(props: LoadingSpinnerProviderProps) {
  const { children, ...rest } = props;

  const value = useMemo(() => rest, [
    rest.transitionDelay,
    rest.src1_0x,
    rest.src1_5x,
    rest.src2_0x,
  ]);

  return (
    <LoadingSpinnerContext.Provider value={value}>
      {children}
    </LoadingSpinnerContext.Provider>
  );
}

/**
 * Displays a loading spinner with the configured image and animation delay. The
 * spinner must be configured through the use of a LoadingSpinnerProvider. The
 * configuration is passed through the tree using React Context.
 */
export function LoadingSpinner() {
  const context = useContext(LoadingSpinnerContext);
  if (!context) {
    throw new Error(
      "LoadingSpinner was used without a corresponding context provider.",
    );
  }

  const { transitionDelay, src1_0x, src1_5x, src2_0x } = context;
  const srcSet = useMemo(() => `${src1_0x}, ${src1_5x} 1.5x, ${src2_0x} 2.0x`, [
    src1_0x,
    src1_5x,
    src2_0x,
  ]);

  return (
    <Fade in unmountOnExit style={{ transitionDelay: `${transitionDelay}ms` }}>
      <Wrapper>
        <InnerWrapper>
          <LogoImage alt="" src={src1_0x} srcSet={srcSet} />
          <StyledCircularProgress size={120} thickness={1.2} />
        </InnerWrapper>
      </Wrapper>
    </Fade>
  );
}

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
`;

const InnerWrapper = styled.div`
  position: relative;
  width: 120px;
  height: 120px;
`;

const LogoImage = styled(Avatar as FC<AvatarProps>)`
  position: absolute;
  width: 72px;
  height: 72px;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
`;

const StyledCircularProgress = styled(CircularProgress as FC<
  CircularProgressProps
>)`
  width: 120px;
  height: 120px;
`;
