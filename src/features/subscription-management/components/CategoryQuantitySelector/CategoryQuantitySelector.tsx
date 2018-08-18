import { LocalizationStateConsumer } from "features/localization";
import React, { ChangeEvent, Component } from "react";
import styled from "styled";

import Checkbox from "@material-ui/core/Checkbox";
import FormControlLabel, {
  FormControlLabelProps,
} from "@material-ui/core/FormControlLabel";
import FormGroup, { FormGroupProps } from "@material-ui/core/FormGroup";

import {
  CategoryQuantitySelectorItem,
  CategoryQuantitySelectorItemProps,
} from "../CategoryQuantitySelectorItem";

export type CategoryQuantitySelectorProps = CategoryQuantitySelectorItemProps & {
  /**
   * Called on quantity change.
   */
  onChange: (quantityIndex: number | null) => void;
};

/**
 * Selection control for selecting the number of exams to purchase from a
 * particular entry category.
 */
export class CategoryQuantitySelector extends Component<
  CategoryQuantitySelectorProps
> {
  private handleChange = (event: ChangeEvent<{}>, checked: boolean) => {
    const selectedQuantityIndex = parseInt(
      (event as ChangeEvent<HTMLInputElement>).target.value,
      10,
    );

    this.props.onChange(checked ? selectedQuantityIndex : null);
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
            <QuantityFormGroup>
              {categoryQuantitySelectionSettings.quantities.map(
                (quantityValue, index) => (
                  <QuantityCheckbox
                    key={`${quantityValue}-${index}`}
                    value={index.toString()}
                    checked={selectedQuantityIndex === index}
                    onChange={this.handleChange}
                    label={
                      // prettier-ignore
                      categoryQuantitySelectionSettings.quantitiesLabels[index][localizationLanguage] ||
                      categoryQuantitySelectionSettings.quantitiesLabels[index].en
                    }
                  />
                ),
              )}
            </QuantityFormGroup>
          </CategoryQuantitySelectorItem>
        )}
      </LocalizationStateConsumer>
    );
  }
}

const QuantityFormGroup = styled<FormGroupProps>(props => (
  <FormGroup row {...props} />
))`
  flex-grow: 1;
  justify-content: space-between;
`;

const QuantityCheckbox = styled<
  Omit<FormControlLabelProps, "innerRef" | "control">
>(props => (
  <StyledLabel control={<StyledCheckbox color="primary" />} {...props} />
))`
  ${({ theme }) => theme.breakpoints.down("sm")} {
    width: 50%;
    margin-left: 0;
    margin-right: 0;
  }
`;

/* Remove left padding */
const StyledCheckbox = styled(Checkbox)`
  width: 24px;
  margin-right: 12px;
`;

/* Remove left negative margin. */
const StyledLabel = styled(FormControlLabel)`
  margin-left: 0;
  user-select: none;
`;
