import Grid from "@material-ui/core/Grid";
import InputAdornment from "@material-ui/core/InputAdornment";
import TextField from "@material-ui/core/TextField";
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
          <Grid key={categoryTitle} container>
            <Grid item xs={12} md={4}>
              <CategoryButton fullWidth onClick={() => alert("Update basket")}>
                {categoryTitle}
              </CategoryButton>
            </Grid>
          </Grid>
        ))}
      </CardContent>
      <CardContent>
        <Typography variant="H6" paragraph>
          Offers &amp; Discount
        </Typography>

        <Grid container>
          <Grid item xs={12} md={4}>
            <TextField
              variant="outlined"
              label="Coupon Code"
              fullWidth
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <Button color="blue" style={{ textTransform: "uppercase" }}>
                      Apply
                    </Button>
                  </InputAdornment>
                ),
              }}
            />
          </Grid>
        </Grid>
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

  .icon-wrapper {
    flex: 1;
    display: inline-flex;
    justify-content: flex-end;
    color: ${({ theme }) => theme.palette.error.main};
  }
`;
