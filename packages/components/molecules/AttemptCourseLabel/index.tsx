import Typography from "material-ui/Typography";
import React, { SFC } from "react";
import styled from "styled";

export interface AttemptCourseLabelProps {
  /** Course title. */
  courseTitle: string;

  /** Subtext. */
  passText: string;
}

/**
 * Course label and statistic for landing page onboarding call to action card.
 */
export const AttemptCourseLabel: SFC<AttemptCourseLabelProps> = props => {
  const { courseTitle, passText } = props;

  return (
    <Wrapper>
      <CourseTitle>{courseTitle}</CourseTitle>
      <PassText>{passText}</PassText>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;

  > * {
    margin-right: ${props => props.theme.spacing.unit}px;
    white-space: nowrap;
    overflow: hidden;
  }
`;

const CourseTitle = styled(Typography).attrs({
  variant: "body2",
})`
  font-size: 12px;
  text-transform: uppercase;
`;

const PassText = styled(Typography).attrs({
  variant: "body1",
})`
  font-size: 10px;
  font-weight: 600;
  text-transform: uppercase;
  color: #828282;
`;
