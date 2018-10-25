import {
  FormControl,
  FormControlLabel,
  FormLabel,
  Hidden,
  Radio,
  RadioGroup,
  Typography,
} from "@material-ui/core";
import React, { SFC } from "react";
import { LocalizationSupportedLanguages } from "../../models";
import { styled } from "../../styled";
import {
  LocalizationLanguageMutation,
  LocalizationLanguageQuery,
} from "../localization";

/**
 * Provides language selection to visitors of the landing page.
 */
export const LanguageSelect = () => (
  <Wrapper>
    <SideWrapper>
      <FormLabel component="legend">
        <Hidden smUp>
          <Heading>Language :</Heading>
        </Hidden>
        <Hidden xsDown>
          <Heading>Preferred Language :</Heading>
        </Hidden>
      </FormLabel>
    </SideWrapper>

    <SideWrapper>
      <LocalizationLanguageQuery>
        {localizationLanguage => (
          <LocalizationLanguageMutation>
            {setLocalization => (
              <RadioGroup
                aria-label={"Preferred Language"}
                row
                value={localizationLanguage}
                onChange={e => {
                  setLocalization((e.target as any).value);
                }}
              >
                <StyledFormControlLabel
                  value={LocalizationSupportedLanguages.English}
                  control={<StyledRadio />}
                  label="English"
                />

                <StyledFormControlLabel
                  value={LocalizationSupportedLanguages.Hindi}
                  control={<StyledRadio />}
                  label="हिंदी"
                />
              </RadioGroup>
            )}
          </LocalizationLanguageMutation>
        )}
      </LocalizationLanguageQuery>
    </SideWrapper>
  </Wrapper>
);

const Wrapper = styled((({ children, className }) => (
  <FormControl className={className} component="div">
    {children}
  </FormControl>
)) as SFC<{ className?: string }>)`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  margin-top: 2px;
  margin-bottom: 16px;
  width: 100%;
`;

const SideWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const Heading = styled(Typography).attrs({ variant: "subtitle1" })`
  margin-right: ${props => props.theme.spacing.unit * 2}px;
  white-space: nowrap;
  color: ${({ theme }) => theme.palette.secondary.main};
`;

const StyledFormControlLabel = styled(FormControlLabel).attrs({
  classes: { label: "language-select-form-control-label" },
})`
  .language-select-form-control-label {
    color: ${({ theme }) => theme.palette.secondary.main};
  }
`;

const StyledRadio = styled(Radio)`
  color: ${({ theme }) => theme.palette.secondary.main};
`;
