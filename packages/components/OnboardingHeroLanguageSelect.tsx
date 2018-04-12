import React from "react";
// import PropTypes from "prop-types";

import { FormControl, FormControlLabel, FormLabel } from "material-ui/Form";
import Radio from "material-ui/Radio";

import * as Components from "./OnboardingHeroLanguageSelect.components";

/**
 * Provides visits with the ability to select their preferred display language.
 */
const OnboardingHeroLanguageSelect = (props: any) => (
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
        <Components.SelectionRadioGroup
          value={props.value}
          onChange={props.onChange}
        >
          <FormControlLabel
            value="english"
            control={<Radio />}
            label="English"
          />
          <FormControlLabel value="hindi" control={<Radio />} label="Hindi" />
        </Components.SelectionRadioGroup>
      </Components.SelectionSectionContainer>
    </Components.SelectionContainer>
  </FormControl>
);

// OnboardingHeroLanguageSelect.propTypes = {
//   /**
//    * The current value of the select.
//    */
//   value: PropTypes.oneOf(["english", "hindi"]).isRequired,

//   /**
//    * Called when the selection is changed.
//    */
//   onChange: PropTypes.func.isRequired,
// };

export default OnboardingHeroLanguageSelect;
