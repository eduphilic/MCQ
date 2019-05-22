import { Container, Grid, Hidden, Theme, Toolbar } from "@material-ui/core";
import { styled, ThemeProvider } from "@material-ui/styles";
import Head from "next/head";
import React from "react";
import { LayoutStickyFooter } from "../components";
import { LanguageSelect } from "../components/LanguageSelect";
import { Logo } from "../components/Logo";
import { themes } from "../lib";

type IndexPageProps = HeroSectionWrapperProps & {
  pageTitle: string;
  footerTitle: string;
  logoImageUrl: string;
};

type HeroSectionWrapperProps = {
  backgroundImageUrl: string;
  backgroundImageAlpha: number;
};

export default function IndexPage(props: IndexPageProps) {
  return (
    <LayoutStickyFooter title={props.footerTitle}>
      <Head>
        <title>{props.pageTitle}</title>
      </Head>
      <ThemeProvider theme={themes.dark}>
        <HeroSectionWrapper
          backgroundImageUrl={props.backgroundImageUrl}
          backgroundImageAlpha={props.backgroundImageAlpha}
        >
          <Container maxWidth="lg">
            <Toolbar disableGutters>
              <Logo component="h1" imageUrl={props.logoImageUrl} />

              <Hidden implementation="css" xsDown>
                <LanguageSelect />
              </Hidden>
            </Toolbar>

            <Hidden implementation="css" smUp>
              <Toolbar disableGutters variant="dense">
                <LanguageSelect />
              </Toolbar>
            </Hidden>
          </Container>

          <Container maxWidth="lg">
            <Grid container>
              <Grid item xs={8} />

              <Grid item xs={4} />
            </Grid>
          </Container>
        </HeroSectionWrapper>
      </ThemeProvider>
    </LayoutStickyFooter>
  );
}

IndexPage.getInitialProps = async (): Promise<IndexPageProps> => {
  return {
    pageTitle: "Join Uniform",
    footerTitle: "Copyright : Eduphilic Consultancy Pvt Ltd 2018",
    logoImageUrl:
      "https://res.cloudinary.com/https-www-joinuniform-com/image/upload/w_64,h_64/v1543925170/logo/joinUniform.png",
    backgroundImageUrl:
      "https://res.cloudinary.com/https-www-joinuniform-com/image/upload/v1545498864/hero/rctouv3v8ddngpav3gkl.png",
    backgroundImageAlpha: 0.25,
  };
};

const HeroSectionWrapper = styled(
  ({
    backgroundImageUrl,
    backgroundImageAlpha,
    ...rest
  }: HeroSectionWrapperProps) => <section {...rest} />,
)<Theme, HeroSectionWrapperProps>(
  ({ backgroundImageUrl, backgroundImageAlpha }) => ({
    background: `linear-gradient( rgba(0, 0, 0, ${backgroundImageAlpha}), rgba(0, 0, 0, ${backgroundImageAlpha}) ), url("${backgroundImageUrl}")`,
    backgroundSize: "cover",
  }),
);
