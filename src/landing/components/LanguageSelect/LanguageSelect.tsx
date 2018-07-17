import { LocalizationStateConsumer, strings } from "localization";
import React, { SFC } from "react";
import styled from "styled";

import FormControl from "@material-ui/core/FormControl";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormLabel from "@material-ui/core/FormLabel";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import Typography from "@material-ui/core/Typography";

export type LanguageSelectProps = {};

/**
 * Provides language selection to visitors of the landing page.
 */
export const LanguageSelect: SFC<LanguageSelectProps> = () => {
  return (
    <Wrapper>
      <SideWrapper>
        <FormLabel component="legend">
          <Heading>{strings.components_LanguageSelect_Text}</Heading>
        </FormLabel>
      </SideWrapper>

      <SideWrapper>
        <LocalizationStateConsumer>
          {({ localizationLanguage, setLocalizationLanguage }) => (
            <RadioGroup
              aria-label={strings.components_LanguageSelect_Text}
              row
              value={localizationLanguage}
              onChange={e => setLocalizationLanguage((e.target as any).value)}
            >
              <FormControlLabel
                value="en"
                control={<Radio />}
                label={strings.components_LanguageSelect_English}
              />

              <FormControlLabel
                value="hi"
                control={<Radio />}
                label={strings.components_LanguageSelect_Hindi}
              />
            </RadioGroup>
          )}
        </LocalizationStateConsumer>
      </SideWrapper>
    </Wrapper>
  );
};

const Wrapper = styled((({ children, className }) => (
  <FormControl className={className} component="div">
    {children}
  </FormControl>
)) as SFC<{ className?: string }>)`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 100%;
`;

const SideWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const Heading = styled(Typography).attrs({ variant: "subheading" })`
  margin-right: ${props => props.theme.spacing.unit * 2}px;
  white-space: nowrap;
`;
