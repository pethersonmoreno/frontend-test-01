import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

const styles = () => ({
  button: {
    color: "rgba(169, 158, 126, 0.95);",
    borderColor: "rgba(169, 158, 126, 0.50)"
  }
});
const ButtonCustom = ({ classes, ...otherProps }) => (
  <Button className={classes.button} {...otherProps} />
);
export default withStyles(styles)(ButtonCustom);
