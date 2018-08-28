import { entryImages } from "common/structures/entryImages";
import { Card } from "components/Card";
import { CardActionArea } from "components/CardActionArea";
import {
  CardDualColumnsTextContent,
  CardDualColumnsTextContentRow,
} from "components/CardDualColumnsTextContent";
import { CardHeader } from "components/CardHeader";
import { Typography } from "components/Typography";
import React from "react";
import styled from "styled";

export const FreeExamCard = () => {
  const rows: CardDualColumnsTextContentRow[] = [
    { id: "attempted", leftNode: "Attempted", rightNode: "02 Tests" },
    { id: "remaining", leftNode: "Remaining", rightNode: "08 Tests" },
  ].map(row => ({
    ...row,
    leftNode: <Typography variant="Subtitle2">{row.leftNode}</Typography>,
    rightNode: <Typography variant="Subtitle2">{row.rightNode}</Typography>,
  }));

  return (
    <StyledCard hoverable>
      <CardActionArea onClick={() => alert("Start free exam")}>
        <CardHeader
          title="Soldier Tradesman"
          subheader="Validity 31st Jan 2019"
          overline="1 Free Test"
          imageUrl={entryImages.Army}
        />
        <CardDualColumnsTextContent rows={rows} />
      </CardActionArea>
    </StyledCard>
  );
};

const StyledCard = styled(Card)`
  background-color: #ecd100;
`;
