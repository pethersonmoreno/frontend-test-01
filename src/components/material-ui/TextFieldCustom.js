import React from "react";
import { withStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";

const styles = () => ({
  textFieldLabel: {
    color: "rgba(169, 158, 126, 0.8)",
    "&$focused": {
      color: "rgba(169, 158, 126, 0.8)"
    }
  },
  textFieldInput: {
    color: "#fff",
    "&$underline": {
      "&:before, &:after": {
        borderBottomColor: "rgba(169, 158, 126, 0.42)"
      }
    },
    "&$underline:hover:not($disabled):not($focused):not($error)": {
      "&:before, &:after": {
        borderBottomColor: "rgba(169, 158, 126, 0.87)"
      }
    }
  },
  focused: {},
  notchedOutline: {},
  underline: {},
  disabled: {},
  error: {}
});
const TextFieldCustom = ({ classes, ...otherProps }) => (
  <TextField
    className={classes.textField}
    InputLabelProps={{
      classes: {
        root: classes.textFieldLabel,
        focused: classes.focused
      }
    }}
    InputProps={{
      classes: {
        root: classes.textFieldInput,
        focused: classes.focused,
        notchedOutline: classes.notchedOutline,
        underline: classes.underline,
        error: classes.error,
        disabled: classes.disabled
      }
    }}
    {...otherProps}
  />
);
export default withStyles(styles)(TextFieldCustom);
