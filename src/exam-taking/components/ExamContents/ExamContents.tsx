import React, { SFC } from "react";
import styled from "styled";

import withWidth, {
  isWidthUp,
  WithWidthProps,
} from "@material-ui/core/withWidth";

export interface ExamContentsProps extends WithWidthProps {
  /**
   * Orientation to display the question image and answers.
   *
   * Horizontal will display the various question answers on the left, followed
   * by the question image on the right. On mobile, this will be arranged
   * vertically.
   *
   * @default horizontal
   */
  orientation?: "horizontal" | "vertical";

  /**
   * Optional question image.
   */
  questionImageUrl?: string;
}

const ExamContents: SFC<ExamContentsProps> = props => {
  const { orientation = "horizontal", width } = props;

  const isHorizontalOrientation =
    orientation === "horizontal" && isWidthUp("sm", width);
  const Container = isHorizontalOrientation
    ? ContainerHorizontal
    : ContainerVertical;

  return (
    <Container>
      <div>Placeholder</div>
    </Container>
  );
};

const ExamContentsWithWidth = withWidth()(ExamContents);
export { ExamContentsWithWidth as ExamContents };

const ContainerHorizontal = styled.div`
  display: flex;
  width: 100%;
`;

const ContainerVertical = ContainerHorizontal.extend`
  flex-direction: column;
`;
