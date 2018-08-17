import { LocalizationStateConsumer } from "features/localization";
import React, { SFC } from "react";
import styled from "styled";
import { LocalizedString } from "types";
import { ICategoryQuantitySelectionSettings } from "../../models/ICategoryQuantitySelectionSettings";

import Typography from "@material-ui/core/Typography";

export type CategoryQuantitySelectorItemProps = {
  /**
   * Settings that dictate the quantities of exams offered for each category.
   */
  categoryQuantitySelectionSettings: ICategoryQuantitySelectionSettings;

  /**
   * Name of the entry category.
   */
  categoryLabel: LocalizedString;

  /**
   * Education label.
   */
  education?: LocalizedString;

  /**
   * Selected quantity.
   */
  selectedQuantityIndex: number;
};

export const CategoryQuantitySelectorItem: SFC<
  CategoryQuantitySelectorItemProps
> = props => {
  const { children, categoryLabel, education } = props;

  return (
    <Wrapper>
      <div>
        <LocalizationStateConsumer>
          {({ localizationLanguage }) => (
            <>
              <Typography
                variant="subheading"
                component="span"
                style={{ fontSize: 14, fontWeight: 500 }}
              >
                {categoryLabel[localizationLanguage] || categoryLabel.en}
              </Typography>

              {education && (
                <EducationRequirements>
                  {education[localizationLanguage] || education.en}
                </EducationRequirements>
              )}
            </>
          )}
        </LocalizationStateConsumer>
      </div>

      {children}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  margin-bottom: ${({ theme }) => theme.spacing.unit * 2}px;
`;

const EducationRequirements = styled<{ className?: string }>(
  ({ className, children }) => (
    <Typography className={className} variant="body1">
      {children}
    </Typography>
  ),
)`
  font-weight: 500;
  font-size: 14px;
  color: #4db7f1;
`;
