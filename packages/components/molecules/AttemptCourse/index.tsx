import React, { SFC } from "react";
import styled from "styled";
import { AttemptButton } from "../../atoms/AttemptButton";
import {
  AttemptCourseLabel,
  AttemptCourseLabelProps,
} from "../AttemptCourseLabel";

export interface AttemptCourseProps extends AttemptCourseLabelProps {
  /* Called when attempt button is clicked. */
  onClick: () => void;
}

/**
 * Course entry on call to action cards of landing page.
 */
export const AttemptCourse: SFC<AttemptCourseProps> = props => {
  const { onClick, ...rest } = props;

  return (
    <Wrapper>
      <CourseLabelWrapper>
        <AttemptCourseLabel {...rest} />
      </CourseLabelWrapper>
      <AttemptButton onClick={onClick} />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
`;

const CourseLabelWrapper = styled.div`
  flex: 1;
`;
