import React, { Component } from "react";
import styled from "styled";

import { Typography } from "componentsV0/Typography";

export interface SideSheetFieldGroupProps {
  /**
   * Text for the field group title.
   */
  fieldGroupTitle?: string;
}

export class SideSheetFieldGroup extends Component<SideSheetFieldGroupProps> {
  render() {
    const { children, fieldGroupTitle } = this.props;

    return (
      <Wrapper>
        {fieldGroupTitle && (
          <Typography variant="formFieldTitle">{fieldGroupTitle}</Typography>
        )}

        {children}
      </Wrapper>
    );
  }
}

const Wrapper = styled.div`
  &:not(:last-child) {
    margin-bottom: ${({ theme }) => theme.spacing.unit * 2}px;
  }
`;
