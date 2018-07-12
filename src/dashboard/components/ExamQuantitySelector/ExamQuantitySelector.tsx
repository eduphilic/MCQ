import { strings } from "localization";
import React, { ChangeEvent, Component } from "react";
import styled from "styled";
import { LocalizedString } from "types";
import { IExamQuantitySelectMeta } from "../../models/IExamQuantitySelectMeta";

import FormControlLabel, {
  FormControlLabelProps,
} from "@material-ui/core/FormControlLabel";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Radio from "@material-ui/core/Radio";
import RadioGroup, { RadioGroupProps } from "@material-ui/core/RadioGroup";
import Typography from "@material-ui/core/Typography";

export type ExamQuantitySelectorProps = {
  /**
   * Settings that dictate the quantities of exams offered for each category.
   */
  examQuantitySelectMeta: IExamQuantitySelectMeta;

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
export class ExamQuantitySelector extends Component<ExamQuantitySelectorProps> {
  private handleChange = (_event: ChangeEvent<{}>, value: string) => {
    this.props.onChange(parseInt(value, 10));
  };

  render() {
    const {
      examQuantitySelectMeta,
      categoryLabel,
      selectedQuantityIndex,
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
              {/* TODO: Select correct localization. */}
              {categoryLabel.en}
            </Typography>
          </GridItemVerticalAlign>

          <PricingTextWrapper>
            <Typography variant="subheading" component="span">
              {strings.dashboard_ExamQuantitySelector_PricingText.replace(
                "{}",
                examQuantitySelectMeta.examPriceRs.toString(),
              )}
            </Typography>
          </PricingTextWrapper>

          <GridItemVerticalAlign xs={12} sm>
            <QuantityRadioGroup
              value={selectedQuantityIndex.toString()}
              onChange={this.handleChange}
            >
              {examQuantitySelectMeta.quantities.map((quantityValue, index) => (
                <QuantityRadio
                  key={`${quantityValue}-${index}`}
                  value={index.toString()}
                  // TODO: Select correct localization.
                  label={examQuantitySelectMeta.quantitiesLabels[index].en}
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

const QuantityRadioGroup = styled<RadioGroupProps>(props => (
  <RadioGroup row {...props} />
))`
  flex-grow: 1;
`;

const QuantityRadio = styled<Omit<FormControlLabelProps, "control">>(props => (
  <FormControlLabel control={<Radio color="primary" />} {...props} />
))`
  ${({ theme }) => theme.breakpoints.down("sm")} {
    width: 50%;
    margin-right: 0;
  }
`;
