import {
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
  Theme,
  Typography,
} from "@material-ui/core";
import { FormControlProps } from "@material-ui/core/FormControl";
import { styled } from "@material-ui/styles";
import React, { useState } from "react";

export function LanguageSelect() {
  const [language, setLanguage] = useState("english");

  return (
    <StyledFormControl aria-label="Preferred Language">
      <FormLabel component="legend">
        <Typography variant="subtitle1" color="primary">
          <span>Preferred&nbsp;</span>
          <span>Language :</span>
        </Typography>
      </FormLabel>

      <RadioGroup
        row
        value={language}
        onChange={(_event, value) => setLanguage(value)}
      >
        <FormControlLabel
          value={"english"}
          control={<StyledRadio color="primary" />}
          label="English"
        />
        <FormControlLabel
          value={"hindi"}
          control={<StyledRadio color="primary" />}
          label="हिंदी"
        />
      </RadioGroup>
    </StyledFormControl>
  );
}

const StyledFormControl = styled((props: FormControlProps) => (
  <FormControl {...props} />
))<Theme, {}>(({ theme }) => ({
  flexShrink: 0,
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  color: theme.palette.primary.main,

  "& > *:first-child": {
    marginRight: theme.spacing(2),
  },

  [theme.breakpoints.down("xs")]: {
    "& legend span:first-child": {
      display: "none",
    },
  },
}));

const StyledRadio = styled(Radio)({
  color: "inherit !important",
});
