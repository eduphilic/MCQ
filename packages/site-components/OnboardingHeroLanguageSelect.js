import React from "react";
/* eslint-disable */
import PropTypes from "prop-types";

import Radio, { RadioGroup } from "material-ui/Radio";
import {
  FormLabel,
  FormControl,
  FormControlLabel,
  FormHelperText,
} from "material-ui/Form";

import * as Components from "./OnboardingHeroLanguageSelect.components";

/** >>> !!! In progress !!! << */
const OnboardingHeroLanguageSelect = props => (
  <FormControl component="fieldset" style={{ width: "100%" }}>
    <Components.SelectionContainer>
      <Components.SelectionSectionContainer>
        <FormLabel component="legend">
          <Components.SelectionLabel>
            Select preferred language :
          </Components.SelectionLabel>
        </FormLabel>
      </Components.SelectionSectionContainer>

      <Components.SelectionSectionContainer>
        <RadioGroup
          aria-label="Language"
          value={props.value}
          onChange={props.onChange}
          row
        >
          <FormControlLabel
            value="english"
            control={<Radio />}
            label="English"
          />
          <FormControlLabel value="hindi" control={<Radio />} label="Hindi" />
        </RadioGroup>
      </Components.SelectionSectionContainer>
    </Components.SelectionContainer>
  </FormControl>
);

OnboardingHeroLanguageSelect.propTypes = {
  value: PropTypes.oneOf(["english", "hindi"]).isRequired,
  onChange: PropTypes.func.isRequired,
};

export default OnboardingHeroLanguageSelect;
