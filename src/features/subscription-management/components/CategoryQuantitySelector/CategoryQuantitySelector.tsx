import { LocalizationStateConsumer } from "features/localization";
import React, { ChangeEvent, Component } from "react";
import styled from "styled";

import FormControlLabel, {
  FormControlLabelProps,
} from "@material-ui/core/FormControlLabel";
import Radio from "@material-ui/core/Radio";
import RadioGroup, { RadioGroupProps } from "@material-ui/core/RadioGroup";

import {
  CategoryQuantitySelectorItem,
  CategoryQuantitySelectorItemProps,
} from "../CategoryQuantitySelectorItem";

export type CategoryQuantitySelectorProps = CategoryQuantitySelectorItemProps & {
  /**
   * Called on quantity change.
   */
  onChange: (quantityIndex: number) => void;
};

/**
 * Selection control for selecting the number of exams to purchase from a
 * particular entry category.
 */
export class CategoryQuantitySelector extends Component<
  CategoryQuantitySelectorProps
> {
  private handleChange = (_event: ChangeEvent<{}>, value: string) => {
    this.props.onChange(parseInt(value, 10));
  };

  render() {
    const {
      categoryQuantitySelectionSettings,
      selectedQuantityIndex,
    } = this.props;

    return (
      <LocalizationStateConsumer>
        {({ localizationLanguage }) => (
          <CategoryQuantitySelectorItem {...this.props}>
            <QuantityRadioGroup
              // Value supports a non-checked state when passed the value "null".
              value={
                selectedQuantityIndex !== null
                  ? selectedQuantityIndex.toString()
                  : undefined
              }
              onChange={this.handleChange}
            >
              {categoryQuantitySelectionSettings.quantities.map(
                (quantityValue, index) => (
                  <QuantityRadio
                    key={`${quantityValue}-${index}`}
                    value={index.toString()}
                    label={
                      // prettier-ignore
                      categoryQuantitySelectionSettings.quantitiesLabels[index][localizationLanguage] ||
                      categoryQuantitySelectionSettings.quantitiesLabels[index].en
                    }
                  />
                ),
              )}
            </QuantityRadioGroup>
          </CategoryQuantitySelectorItem>
        )}
      </LocalizationStateConsumer>
    );
  }
}

const QuantityRadioGroup = styled<RadioGroupProps>(props => (
  <RadioGroup row {...props} />
))`
  flex-grow: 1;
  justify-content: space-between;
`;

const QuantityRadio = styled<
  Omit<FormControlLabelProps, "innerRef" | "control">
>(props => (
  <StyledLabel control={<StyledRadio color="primary" />} {...props} />
))`
  ${({ theme }) => theme.breakpoints.down("sm")} {
    width: 50%;
    margin-left: 0;
    margin-right: 0;
  }
`;

/* Remove left padding */
const StyledRadio = styled(Radio)`
  width: 24px;
  margin-right: 12px;
`;

/* Remove left negative margin. */
const StyledLabel = styled(FormControlLabel)`
  margin-left: 0;
`;
