import { FormControlLabel } from "material-ui/Form";
import Grid from "material-ui/Grid";
import Radio, { RadioGroup } from "material-ui/Radio";
import Typography from "material-ui/Typography";
import React, { ChangeEvent, Component } from "react";
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
      <Grid container spacing={16}>
        <GridItemVerticalAlign>
          <Typography variant="title" component="span">
            {props.category}
          </Typography>
        </GridItemVerticalAlign>

        <GridItemVerticalAlign>
          <Typography variant="subheading" component="span">
            {props.pricingText}
          </Typography>
        </GridItemVerticalAlign>

        <GridItemVerticalAlign xs={12} sm>
          <RadioGroup
            aria-label={props.category}
            name={props.category}
            // className={classes.group}
            value={props.value.toString()}
            onChange={this.handleChange}
            row
          >
            {props.availableQuantities.map(q => (
              <FormControlLabel
                key={q}
                value={q.toString()}
                label={`${q} Exams`}
                control={<Radio color="primary" />}
              />
            ))}
          </RadioGroup>
        </GridItemVerticalAlign>
      </Grid>
    );
  }
}

const GridItemVerticalAlign = styled(Grid).attrs({ item: true })`
  display: flex;
  align-items: center;
`;
