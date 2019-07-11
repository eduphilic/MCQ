import MuiContainer, {
	ContainerProps as MuiContainerProps,
} from "@material-ui/core/Container";
import { useContext } from "react";
import { ThemeContext } from "styled-components";

export type ContainerProps = OmitStrict<MuiContainerProps, "maxWidth">;

/**
 * Centers the page contents and provides horizontal margins.
 */
export function Container(props: ContainerProps) {
	const theme = useContext(ThemeContext);

	return (
		<MuiContainer
			{...props}
			maxWidth={theme.app.maxContentWidthBreakpoint}
		/>
	);
}
