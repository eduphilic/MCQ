import { strings } from "localization";
import React, { SFC } from "react";
import styled from "styled";

import FormControl from "@material-ui/core/FormControl";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormLabel from "@material-ui/core/FormLabel";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import Typography from "@material-ui/core/Typography";

export interface LanguageSelectProps {
  /**
   * Current display language.
   */
  language: "english" | "hindi";

  /**
   * Called with the new display language.
   */
  onChange: (language: "english" | "hindi") => void;
}

/**
 * Provides language selection to visitors of the landing page.
 */
export const LanguageSelect: SFC<LanguageSelectProps> = props => {
  const { language, onChange } = props;

  return (
    <Wrapper>
      <SideWrapper>
        <FormLabel component="legend">
          <Heading>{strings.languageSelectSelectPreferredLanguage}</Heading>
        </FormLabel>
      </SideWrapper>

      <SideWrapper>
        <RadioGroup
          aria-label={strings.languageSelectSelectPreferredLanguage}
          row
          value={language}
          onChange={event => onChange((event.target as any).value)}
        >
          <FormControlLabel
            value="english"
            control={<Radio />}
            label={strings.languageSelectEnglish}
          />

          <FormControlLabel
            value="hindi"
            control={<Radio />}
            label={strings.languageSelectHindi}
          />
        </RadioGroup>
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
