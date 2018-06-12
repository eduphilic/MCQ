import Typography from "@material-ui/core/Typography";
import { EntryLogo, EntryLogoProps } from "components/EntryLogo";
import React, { SFC } from "react";
import styled from "styled";

export interface AttemptCourseCardHeaderProps {
  /** Entry (military branch) of service to use for image. */
  entry: EntryLogoProps["entry"];

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
  const { entry, label } = props;

  return (
    <Wrapper>
      <EntryLogoContainer>
        <EntryLogo entry={entry} />
      </EntryLogoContainer>
      <Label>{label}</Label>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const EntryLogoContainer = styled.div`
  width: 160px;
  height: 120px;
`;

const Label = styled(Typography).attrs({
  variant: "title",
})`
  margin-top: ${props => props.theme.spacing.unit * 4}px;
  color: #4f4f4f;
  font-size: 18px;
  font-weight: 600;
`;
