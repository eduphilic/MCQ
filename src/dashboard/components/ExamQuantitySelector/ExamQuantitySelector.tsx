import React, { ChangeEvent, Component, ReactElement } from "react";
import styled from "styled";

import FormControlLabel from "@material-ui/core/FormControlLabel";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import Typography from "@material-ui/core/Typography";

export type ExamQuantitySelectorProps = {
  /**
   * Name of the entry category.
   */
  category: string;

  /**
   * Pricing text placed to the right next to the category name.
   *
   * E.g. (Rs 50 Per exam)
   */
  pricingText: string;

  /**
   * Available quantities (labels).
   */
  availableQuantitiesLabels: string[];

  /**
   * Available quantities (values).
   */
  availableQuantitiesValues: string[];

  /**
   * Selected quantity value.
   */
  value: string;

  /**
   * Called on quantity change.
   */
  onChange: (value: string) => void;
};

/**
 * Selection control for selecting the number of exams to purchase from a
 * particular entry category.
 */
export class ExamQuantitySelector extends Component<ExamQuantitySelectorProps> {
  private handleChange = (_event: ChangeEvent<{}>, value: string) => {
    this.props.onChange(value);
  };

  render() {
    const {
      category,
      pricingText,
      value,
      availableQuantitiesValues,
      availableQuantitiesLabels,
    } = this.props;

    return (
      <Paper style={{ padding: "8px 16px", marginTop: 16 }}>
        <Grid container>
          <GridItemVerticalAlign style={{ marginRight: 8 }}>
            <Typography
              variant="subheading"
              component="span"
              style={{ width: 140, fontWeight: 500 }}
            >
              {category}
            </Typography>
          </GridItemVerticalAlign>

          <PricingTextWrapper>
            <Typography variant="subheading" component="span">
              {pricingText}
            </Typography>
          </PricingTextWrapper>

          <GridItemVerticalAlign xs={12} sm>
            <QuantityRadioGroup
              category={category}
              value={value}
              onChange={this.handleChange}
            >
              {availableQuantitiesValues.map((quantityValue, index) => (
                <QuantityRadio
                  key={value}
                  value={quantityValue}
                  label={availableQuantitiesLabels[index]}
                />
              ))}
            </QuantityRadioGroup>
          </GridItemVerticalAlign>
        </Grid>
      </Paper>
    );
  }
}

const GridItemVerticalAlign = styled(Grid).attrs({ item: true })`
  display: flex;
  align-items: center;
`;

const PricingTextWrapper = styled(GridItemVerticalAlign)`
  flex-grow: 1;
  justify-content: flex-end;

  ${({ theme }) => theme.breakpoints.up("sm")} {
    flex-grow: 0;
    margin-right: ${({ theme }) => theme.spacing.unit * 2}px;
  }
`;

const QuantityRadioGroup = styled(
  (props: {
    className?: string;
    value: string;
    category: string;
    onChange: (event: ChangeEvent<{}>, value: string) => void;
    children: ReactElement<any>[];
  }) => (
    <RadioGroup
      className={props.className}
      aria-label={props.category}
      name={props.category}
      value={props.value}
      onChange={props.onChange}
      row
    >
      {props.children}
    </RadioGroup>
  ),
)`
  flex-grow: 1;
`;
QuantityRadioGroup.displayName = "RadioGroup";

const QuantityRadio = styled(
  (props: { className?: string; value: string; label: string }) => (
    <FormControlLabel
      className={props.className}
      value={props.value}
      label={props.label}
      control={<Radio color="primary" />}
    />
  ),
)`
  ${({ theme }) => theme.breakpoints.down("sm")} {
    width: 50%;
    margin-right: 0;
  }
`;
