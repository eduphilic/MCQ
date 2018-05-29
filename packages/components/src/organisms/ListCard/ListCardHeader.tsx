import React, { SFC } from "react";
import styled from "styled";
import { Container, Subscribe } from "unstated";

import Toolbar from "@material-ui/core/Toolbar";

import { Typography } from "../../atoms/Typography";
import {
  ListCardHeaderContainer,
  ListCardHeaderState,
} from "./ListCardHeaderContainer";

export const ListCardHeader: SFC<{}> = () => (
  <Subscribe to={[ListCardHeaderContainer]}>
    {(cardHeader: Container<ListCardHeaderState>) => {
      const shouldRender = Boolean(cardHeader.state.title);
      if (!shouldRender) return null;

      const { title, iconNode } = cardHeader.state;

      return (
        <ToolbarFlexRow title={title}>
          {iconNode}
          <Typography variant="cardTitle">{title}</Typography>
        </ToolbarFlexRow>
      );
    }}
  </Subscribe>
);

const ToolbarFlexRow = styled(Toolbar)`
  display: flex;

  > *:first-child {
    margin-right: ${({ theme }) => theme.spacing.unit}px;
    color: #757575;
  }
`;
