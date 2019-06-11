import { Typography } from "@material-ui/core";
import { ReactNode } from "react";
import styled from "styled-components";
import { ThemeProvider, themes } from "../display";

type Props = {
  children?: ReactNode;
  className?: string;
};

function StickyFooterImpl(props: Props) {
  return (
    <div className={props.className}>
      {props.children}

      <ThemeProvider theme={themes.dark}>
        <StickyFooterText>
          <Typography variant="caption" color="textPrimary">
            Copyright : Eduphilic Consultancy Pvt Ltd {new Date().getFullYear()}
          </Typography>
        </StickyFooterText>
      </ThemeProvider>
    </div>
  );
}

/**
 * Layout component which docks the copyright notice to bottom of the page.
 */
export const StickyFooter = styled(StickyFooterImpl)`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const StickyFooterText = styled.footer`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: ${({ theme }) => theme.spacing(5)}px;
  margin-top: auto;
  background-color: ${({ theme }) => theme.palette.background.default};
`;
