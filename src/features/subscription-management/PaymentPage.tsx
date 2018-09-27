import RemoveCircle from "@material-ui/icons/RemoveCircle";
import { Button, ButtonProps } from "components/Button";
import { Card } from "components/Card";
import { CardContent } from "components/CardContent";
import { CardHeader } from "components/CardHeader";
import { Typography } from "components/Typography";
import React from "react";
import styled from "styled";

export const PaymentPage = () => (
  <>
    <Card>
      <CardHeader title="Order Summary" subheader="Order No: 17238351" />
      <CardContent>
        <Typography variant="H6" paragraph>
          Your Items
        </Typography>

        {[
          "Soldier GD 30 Mock Tests",
          "Soldier Tech 30 Mock Tests",
          "Soldier RT 30 Mock Tests",
        ].map(categoryTitle => (
          <div key={categoryTitle}>
            <CategoryButton onClick={() => alert("Update basket")}>
              {categoryTitle}
            </CategoryButton>
          </div>
        ))}
      </CardContent>
      <CardContent>
        <Typography variant="H6" paragraph>
          Offers &amp; Discount
        </Typography>
      </CardContent>
    </Card>

    <Card>
      <CardHeader title="Payment Processor" />
    </Card>
  </>
);

const CategoryButton = styled<
  Omit<ButtonProps, "innerRef"> & {
    children: string;
  }
>(({ children, ...rest }) => (
  <Button {...rest}>
    {children}
    <span className="icon-wrapper">
      <RemoveCircle />
    </span>
  </Button>
))`
  justify-content: flex-start;
  width: 300px;

  .icon-wrapper {
    flex: 1;
    display: inline-flex;
    justify-content: flex-end;
    color: ${({ theme }) => theme.palette.error.main};
  }
`;
