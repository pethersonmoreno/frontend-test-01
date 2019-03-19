import React from "react";
import { withStyles } from "@material-ui/core/styles";
import bgImage from "../assets/background.png";

const styles = () => ({
  root: {
    width: "100%",
    height: "100%",
    backgroundImage: `url(${bgImage})`,
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center center"
  }
});
const MainApp = ({ classes, children }) => (
  <div className={classes.root}>{children}</div>
);

export default withStyles(styles)(MainApp);
