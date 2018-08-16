import { LocalizationStateConsumer } from "features/localization";
import React, { SFC } from "react";
import styled from "styled";
import { LocalizedString } from "types";

import Typography from "@material-ui/core/Typography";

import { CategoryItem, CategoryItemProps } from "../CategoryItem";

export type CategorySubscriptionProps = CategoryItemProps & {
  categoryLabel: LocalizedString;
};

export const CategorySubscription: SFC<CategorySubscriptionProps> = props => {
  const { categoryQuantitySelectionSettings, selectedQuantityIndex } = props;

  const quantityLabel =
    categoryQuantitySelectionSettings.quantitiesLabels[selectedQuantityIndex];

  return (
    <LocalizationStateConsumer>
      {({ localizationLanguage }) => (
        <CategoryItem {...props}>
          <RightTextGroupWrapper>
            <Typography>
              {quantityLabel[localizationLanguage] || quantityLabel.en}
            </Typography>

            <TypographyRed>Expiring on 3 Jul 2018</TypographyRed>
          </RightTextGroupWrapper>
        </CategoryItem>
      )}
    </LocalizationStateConsumer>
  );
};

const RightTextGroupWrapper = styled.div`
  display: flex;
  flex-grow: 1;

  > *:first-child {
    width: 25%;
  }

  > *:last-child {
    width: 75%;
  }

  ${({ theme }) => theme.breakpoints.down("xs")} {
    flex-wrap: wrap;

    > * {
      width: 100% !important;
    }
  }
`;

const TypographyRed = styled(Typography)`
  color: ${({ theme }) => theme.palette.error.main};
`;
