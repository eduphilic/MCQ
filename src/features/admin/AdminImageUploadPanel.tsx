import Divider from "@material-ui/core/Divider";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelActions from "@material-ui/core/ExpansionPanelActions";
// import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import React from "react";
import { Button } from "../../components/Button";

export function AdminImageUploadPanel() {
  return (
    <ExpansionPanel>
      <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
        <Typography>Logo</Typography>
      </ExpansionPanelSummary>
      <Divider />
      <ExpansionPanelActions>
        <Button size="small" onClick={handleUploadClick}>
          Upload
        </Button>
      </ExpansionPanelActions>
    </ExpansionPanel>
  );

  function handleUploadClick() {
    cloudinary.openUploadWidget(
      {
        cloudName: "strothj",
        cropping: true,
        folder: "Logos",
        uploadPreset: "Uploads",
      },
      (error, result) => {
        if (error) alert(error);
        /* tslint:disable-next-line:no-console */
        console.log({ result });
      },
    );
  }
}

declare global {
  namespace cloudinary {
    function openUploadWidget(
      options: {
        cloudName: string;
        uploadPreset: string;
        cropping?: boolean;
        folder?: string;
      },
      cb: (error: any, result: any) => void,
    ): void;
  }
}
