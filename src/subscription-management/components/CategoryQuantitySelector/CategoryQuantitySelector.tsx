import { LocalizationStateConsumer } from "localization";
import React, { ChangeEvent, Component } from "react";
import styled from "styled";
import { LocalizedString } from "types";
import { ICategoryQuantitySelectionSettings } from "../../models/ICategoryQuantitySelectionSettings";

import FormControlLabel, {
  FormControlLabelProps,
} from "@material-ui/core/FormControlLabel";
import Radio from "@material-ui/core/Radio";
import RadioGroup, { RadioGroupProps } from "@material-ui/core/RadioGroup";
import Typography from "@material-ui/core/Typography";

export type CategoryQuantitySelectorProps = {
  /**
   * Settings that dictate the quantities of exams offered for each category.
   */
  categoryQuantitySelectionSettings: ICategoryQuantitySelectionSettings;

  /**
   * Name of the entry category.
   */
  categoryLabel: LocalizedString;

  /**
   * Selected quantity.
   */
  selectedQuantityIndex: number;

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
      categoryLabel,
      selectedQuantityIndex,
    } = this.props;

    return (
      <LocalizationStateConsumer>
        {({ localizationLanguage }) => (
          <Wrapper>
            <div>
              <Typography
                variant="subheading"
                component="span"
                style={{ width: 140, fontWeight: 500 }}
              >
                {categoryLabel[localizationLanguage] || categoryLabel.en}
              </Typography>
            </div>

            <QuantityRadioGroup
              value={selectedQuantityIndex.toString()}
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
          </Wrapper>
        )}
      </LocalizationStateConsumer>
    );
  }
}

const Wrapper = styled.div`
  display: flex;
  align-items: center;

  ${({ theme }) => theme.breakpoints.down("sm")} {
    flex-wrap: wrap;

    > *:nth-child(1),
    > *:nth-child(2) {
      margin-bottom: 8px;
    }
  }
`;

const QuantityRadioGroup = styled<RadioGroupProps>(props => (
  <RadioGroup row {...props} />
))`
  flex-grow: 1;
  justify-content: space-evenly;
`;

const QuantityRadio = styled<Omit<FormControlLabelProps, "control">>(props => (
  <FormControlLabel control={<StyledRadio color="primary" />} {...props} />
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
