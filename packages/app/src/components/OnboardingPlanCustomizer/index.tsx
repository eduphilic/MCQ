import React, { Component } from "react";
import styled from "styled";

import Typography from "@material-ui/core/Typography";

import { QuantitySlider, QuantitySliderProps } from "components/QuantitySlider";

// tslint:disable-next-line:no-empty-interface
export interface OnboardingPlanCustomizerProps extends QuantitySliderProps {}

interface OnboardingPlanCustomizerState {
  value: number | null;
}

export class OnboardingPlanCustomizer extends Component<
  OnboardingPlanCustomizerProps,
  OnboardingPlanCustomizerState
> {
  state: OnboardingPlanCustomizerState = { value: null };

  handleValueChange = (value: number) => {
    this.setState({ value });
  };

  render() {
    const { ...quantitySliderProps } = this.props;
    const { value } = this.state;

    return (
      <Wrapper>
        <QuantitySlider
          className="quantity-slider"
          {...quantitySliderProps}
          onChange={this.handleValueChange}
        />

        <Typography variant="body2">
          Access to {(value || 0).toString()} exams in each of your selected
          categories.
        </Typography>
      </Wrapper>
    );
  }
}

const Wrapper = styled.div`
  .quantity-slider {
    margin: 0 auto;
  }
`;
