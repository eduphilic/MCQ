import { FormControlLabel } from "material-ui/Form";
import Grid from "material-ui/Grid";
import Paper from "material-ui/Paper";
import Radio, { RadioGroup } from "material-ui/Radio";
import Typography from "material-ui/Typography";
import React, { ChangeEvent, Component, ReactElement } from "react";
import styled from "styled";

// tslint:disable-next-line:no-empty-interface
export interface ExamQuantitySelectorProps {
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
   * Available quantities.
   */
  availableQuantities: number[];

  /**
   * Selected quantity.
   */
  value: number;

  /**
   * Called on quantity change.
   */
  onChange: (value: number) => void;
}

/**
 * Selection control for selecting the number of exams to purchase from a
 * particular entry category.
 */
export class ExamQuantitySelector extends Component<ExamQuantitySelectorProps> {
  private handleChange = (_event: ChangeEvent<{}>, value: string) => {
    this.props.onChange(parseInt(value, 10));
  };

  render() {
    const props = this.props;

    return (
      <Paper style={{ padding: "8px 16px", marginTop: 16 }}>
        <Grid container>
          <GridItemVerticalAlign style={{ marginRight: 8 }}>
            <Typography
              variant="subheading"
              component="span"
              style={{ width: 140, fontWeight: 500 }}
            >
              {props.category}
            </Typography>
          </GridItemVerticalAlign>

          <PricingTextWrapper>
            <Typography variant="subheading" component="span">
              {props.pricingText}
            </Typography>
          </PricingTextWrapper>

          <GridItemVerticalAlign xs={12} sm>
            <QuantityRadioGroup
              category={props.category}
              value={props.value}
              onChange={this.handleChange}
            >
              {props.availableQuantities.map(q => (
                <QuantityRadio key={q} quantity={q} />
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
    value: number;
    category: string;
    onChange: (event: ChangeEvent<{}>, value: string) => void;
    children: ReactElement<any>[];
  }) => (
    <RadioGroup
      className={props.className}
      aria-label={props.category}
      name={props.category}
      value={props.value.toString()}
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
  (props: { className?: string; quantity: number }) => (
    <FormControlLabel
      className={props.className}
      value={props.quantity.toString()}
      label={`${props.quantity} Exams`}
      control={<Radio color="primary" />}
    />
  ),
)`
  ${({ theme }) => theme.breakpoints.down("sm")} {
    width: 50%;
    margin-right: 0;
  }
`;
