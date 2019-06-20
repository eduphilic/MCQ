import { Typography } from "@material-ui/core";
import { grey } from "@material-ui/core/colors";
import React from "react";
import styled from "styled-components";
import { theme } from "../display";

type Props = {
  className?: string;
};

// Make sure the copyright date is always up to date.
const currentYear = new Date().getFullYear();
const copyrightYear =
  process.env.NODE_ENV === "testing"
    ? // In testing environment, use a static value so snapshot test doesn't
      // fail in the future.
      "2019"
    : // Ensure a minimum year is displayed in case of misconfigured computer
      // date.
      (currentYear < 2019 ? 2019 : currentYear).toString();

/**
 * Page footer height, exported for use in grid layouts.
 */
export const pageFooterHeight = theme.spacing(5);

/**
 * Page copyright notice.
 */
export const PageFooter = styled((props: Props) => {
  const { className } = props;

  return (
    <footer className={className}>
      <Typography variant="caption" color="inherit">
        Copyright : Eduphilic Consultancy Pvt Ltd {copyrightYear}
      </Typography>
    </footer>
  );
})`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: ${pageFooterHeight}px;
  margin-top: auto;
  color: ${grey[50]};
  background-color: ${grey[800]};
`;
