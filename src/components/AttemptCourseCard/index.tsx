import React, { SFC } from "react";
import styled, { withProps } from "styled";

import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";

import { AttemptCourse, AttemptCourseProps } from "components/AttemptCourse";
import {
  AttemptCourseCardHeader,
  AttemptCourseCardHeaderProps,
} from "components/AttemptCourseCardHeader";
import { ContentCenterWrapper } from "components/ContentCenterWrapper";

export interface AttemptCourseCardProps {
  /** Card header props. */
  cardHeaderProps: AttemptCourseCardHeaderProps;

  /** Courses to list. */
  courses: AttemptCourseProps[];

  /** Background image to repeat around attempt card. */
  backgroundImage?: string;

  /**
   * Background fill color. It is used to fill in vertical spacing gaps between
   * repeated tiles.
   */
  backgroundFill?: string;
}

/**
 * Call to action card section for landing page. Contents a list of courses for
 * a particular branch of the military service.
 */
export const AttemptCourseCard: SFC<AttemptCourseCardProps> = props => {
  const { cardHeaderProps, courses, backgroundImage, backgroundFill } = props;

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
    <BackgroundCardWrapper
      backgroundImage={backgroundImage}
      backgroundFill={backgroundFill}
    >
      <ContentCenterWrapper>
        <Card>
          <CardContent>
            <Wrapper>
              <AttemptCourseCardHeader {...cardHeaderProps} />

              <CourseRowsWrapper>{courseRows}</CourseRowsWrapper>
            </Wrapper>
          </CardContent>
        </Card>
      </ContentCenterWrapper>
    </BackgroundCardWrapper>
  );
};

const BackgroundCardWrapper = withProps<
  Pick<AttemptCourseCardProps, "backgroundImage" | "backgroundFill">
>()(styled.div)`
  padding: 95px 0;
  background: ${({ backgroundImage }) =>
    backgroundImage ? `url("${backgroundImage}")` : "none"};
  background-color: ${({ backgroundFill }) =>
    backgroundFill ? backgroundFill : "transparent"};
`;

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
