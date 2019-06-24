import { Container as MuiContainer } from "@material-ui/core";
import { ContainerProps } from "@material-ui/core/Container";
import { useContext } from "react";
import { ThemeContext } from "styled-components";

type Props = OmitStrict<ContainerProps, "maxWidth">;

/**
 * Centers the page contents and provides horizontal margins.
 */
export function Container(props: Props) {
  const theme = useContext(ThemeContext);

  return (
    <MuiContainer {...props} maxWidth={theme.app.maxContentWidthBreakpoint} />
  );
}
