import React from "react";
import { withStyles } from "@material-ui/core/styles";
import bgImage from "../assets/background.png";

const styles = () => ({
    root: {
        width: "100%",
        height: "100%",
        background:
            "radial-gradient(ellipse at center, rgba(0,0,0,0.83) 50%, rgba(0,0,0,1) 100%)",
        "& .bgImage": {
            width: "100%",
            height: "100%",
            backgroundImage: `url(${bgImage})`,
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center center"
        }
    }
});
const MainApp = ({ classes, children }) => (
    <div className={classes.root}>
        <div className="bgImage">{children}</div>
    </div>
);

export default withStyles(styles)(MainApp);
