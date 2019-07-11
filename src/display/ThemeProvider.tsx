import { ThemeProvider as MaterialUIThemeProvider } from "@material-ui/styles";
import React, { ReactNode } from "react";
import { ThemeProvider as StyledComponentsThemeProvider } from "styled-components";
import { theme } from "./theme";

type Props = {
	children?: ReactNode;
};

export function ThemeProvider(props: Props) {
	return (
		<MaterialUIThemeProvider theme={theme}>
			<StyledComponentsThemeProvider theme={theme}>
				<>{props.children}</>
			</StyledComponentsThemeProvider>
		</MaterialUIThemeProvider>
	);
}
