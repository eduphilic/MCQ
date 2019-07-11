/* tslint:disable:ordered-imports */
import * as firebase from "firebase/app";
import "firebase/auth";
/* tslint:enable:ordered-imports */

import App, { Container } from "next/app";
import React, { StrictMode } from "react";
import { StagingEnvironmentBanner } from "../src/components/StagingEnvironmentBanner";
import { BaselineStylesProvider } from "../src/display";

/**
 * Custom Next.js App component. It removes the server side rendered CSS from
 * the DOM so that the client side modified CSS can take over. It also applies
 * the theme.
 */
class CustomApp extends App {
	componentDidMount() {
		// Remove the server-side injected CSS.
		const jssStyles = document.querySelector("#jss-server-side");
		if (jssStyles) {
			jssStyles.parentNode!.removeChild(jssStyles);
		}

		firebase.initializeApp(process.env.FIREBASE_CONFIG);
	}

	render() {
		const { Component, pageProps } = this.props;

		return (
			<Container>
				<StrictMode>
					<BaselineStylesProvider>
						<Component {...pageProps} />
						<StagingEnvironmentBanner />
					</BaselineStylesProvider>
				</StrictMode>
			</Container>
		);
	}
}

export default CustomApp;
