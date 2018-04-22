import { ContentCenterWrapper } from "components/atoms/ContentCenterWrapper";
import Grid from "material-ui/Grid";
import React, { ReactNode, SFC } from "react";
import styled from "styled";
import { DarkTheme, LightTheme } from "theme";
import { PageFooter } from "../../atoms/PageFooter";
import { Logo } from "../../molecules/Logo";

export interface AdminLoginTemplateProps {
  heroNode: ReactNode;
  loginForm: ReactNode;
}

export const AdminLoginTemplate: SFC<AdminLoginTemplateProps> = props => {
  const { heroNode, loginForm } = props;

  return (
    <DarkTheme>
      <Wrapper>
        <div className="appBar">
          <ContentCenterWrapper>
            <Logo />
          </ContentCenterWrapper>
        </div>

        <div className="content">
          <ContentCenterWrapper>
            <Grid container>
              <Grid item sm={8} hidden={{ xsDown: true }}>
                {heroNode}
              </Grid>
              <Grid item sm={4} xs={12}>
                <LightTheme>{loginForm}</LightTheme>
              </Grid>
            </Grid>
          </ContentCenterWrapper>
        </div>

        <PageFooter />
      </Wrapper>
    </DarkTheme>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  background-color: #404040;

  .appBar {
    padding: ${({ theme }) => theme.spacing.unit * 2}px 0;
    background-image: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0.8) 3%,
      rgba(0, 0, 0, 0)
    );
  }

  .content {
    flex: 1;
  }
`;
