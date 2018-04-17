import Typography from "material-ui/Typography";
import React, { SFC } from "react";
import styled, { withProps } from "styled";

export interface AttemptCourseCardHeaderProps {
  /** Image url of service branch logo. */
  image: string;

  /** Label text to use under service branch logo. */
  label: string;
}

/**
 * Service branch image and description text for use on call to action cards on
 * landing page. Placed to the left of the attempt course list.
 */
export const AttemptCourseCardHeader: SFC<
  AttemptCourseCardHeaderProps
> = props => {
  const { image, label } = props;

  return (
    <Wrapper>
      <ServiceBranchImage image={image} />
      <Label>{label}</Label>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const ServiceBranchImage = withProps<{ image: string }>()(styled.div)`
  width: 160px;
  height: 120px;
  background-image: url("${props => props.image}");
  background-size: cover;
`;

const Label = styled(Typography).attrs({
  variant: "title",
})`
  margin-top: ${props => props.theme.spacing.unit * 4}px;
  color: #4f4f4f;
  font-size: 18px;
  font-weight: 600;
`;
