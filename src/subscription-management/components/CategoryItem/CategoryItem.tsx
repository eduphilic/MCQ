import { LocalizationStateConsumer } from "localization";
import React, { SFC } from "react";
import styled from "styled";
import { LocalizedString } from "types";
import { ICategoryQuantitySelectionSettings } from "../../models/ICategoryQuantitySelectionSettings";

import Typography from "@material-ui/core/Typography";

export type CategoryItemProps = {
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
};

export const CategoryItem: SFC<CategoryItemProps> = props => {
  const { children, categoryLabel } = props;

  return (
    <Wrapper>
      <div>
        <LocalizationStateConsumer>
          {({ localizationLanguage }) => (
            <Typography
              variant="subheading"
              component="span"
              style={{ width: 140, fontWeight: 500 }}
            >
              {categoryLabel[localizationLanguage] || categoryLabel.en}
            </Typography>
          )}
        </LocalizationStateConsumer>
      </div>

      {children}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  min-height: 48px;

  ${({ theme }) => theme.breakpoints.down("sm")} {
    flex-wrap: wrap;

    > *:nth-child(1),
    > *:nth-child(2) {
      margin-bottom: 8px;
    }
  }
`;
