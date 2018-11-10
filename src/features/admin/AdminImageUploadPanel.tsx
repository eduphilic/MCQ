import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import React from "react";

export function AdminImageUploadPanel() {
  return (
    <ExpansionPanel>
      <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
        <Typography>Logo</Typography>
      </ExpansionPanelSummary>
      <ExpansionPanelDetails>
        <Typography>Placeholder</Typography>
      </ExpansionPanelDetails>
    </ExpansionPanel>
  );
}
