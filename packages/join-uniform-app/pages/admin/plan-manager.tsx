// import { Theme } from "@join-uniform/theme";
import { createStyles, makeStyles } from "@material-ui/styles";
import React from "react";
import { AdminLayoutDashboardContainer } from "../../containers";

const styles = createStyles({
  rootClass: {
    color: "red",
  },
});

const useStyles = makeStyles(styles);

export default function AdminPlanManagerPage() {
  const classes = useStyles();

  return (
    <AdminLayoutDashboardContainer title="Plan Manager">
      <div className={classes.rootClass}>Page Contents</div>
    </AdminLayoutDashboardContainer>
  );
}
