import Card, { CardContent } from "material-ui/Card";
import React, { SFC } from "react";
import styled from "styled";
import {
  AttemptCourse,
  AttemptCourseProps,
} from "../../molecules/AttemptCourse";
import {
  AttemptCourseCardHeader,
  AttemptCourseCardHeaderProps,
} from "../../molecules/AttemptCourseCardHeader";

export interface AttemptCourseCardProps {
  /** Card header props. */
  cardHeaderProps: AttemptCourseCardHeaderProps;

  /** Courses to list. */
  courses: AttemptCourseProps[];
}

/**
 * Call to action card section for landing page. Contents a list of courses for
 * a particular branch of the military service.
 */
export const AttemptCourseCard: SFC<AttemptCourseCardProps> = props => {
  const { cardHeaderProps, courses } = props;

  const courseRows: React.ReactNode[] = [];
  for (let i = 0; i < courses.length; i += 2) {
    courseRows.push(
      <CourseRow key={i}>
        <CourseWrapper>
          <AttemptCourse {...courses[i]} />
        </CourseWrapper>
        {i + 1 < courses.length ? (
          <CourseWrapper>
            <AttemptCourse {...courses[i + 1]} />
          </CourseWrapper>
        ) : null}
      </CourseRow>,
    );
  }

  return (
    <Card>
      <CardContent>
        <Wrapper>
          <AttemptCourseCardHeader {...cardHeaderProps} />

          <CourseRowsWrapper>{courseRows}</CourseRowsWrapper>
        </Wrapper>
      </CardContent>
    </Card>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;

  > div:nth-child(1) {
    margin-right: ${props => props.theme.spacing.unit * 2}px;
    margin-bottom: ${props => props.theme.spacing.unit * 2}px;
  }
`;

const CourseRowsWrapper = styled.div`
  flex: 1;
`;

const CourseRow = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const CourseWrapper = styled.div`
  flex-basis: ${props => `calc(50% - ${props.theme.spacing.unit * 8}px);`};
  margin: ${props => props.theme.spacing.unit * 1}px
    ${props => props.theme.spacing.unit * 4}px;

  ${props => props.theme.breakpoints.down("sm")} {
    flex-basis: 100%;
  }
`;
