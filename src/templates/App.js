import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Menu from "../components/Menu";

const styles = theme => ({
    app: {
        height: "100%",

        [theme.breakpoints.up("md")]: {
            display: "flex"
        },

        "& > .menu": {
            textAlign: "center"
        },
        "& > .content": {
            [theme.breakpoints.up("md")]: {
                flex: "1 auto"
            },
            background:
                "linear-gradient(90deg, #000000 0%, rgba(0, 0, 0, 0) 98.3%)"
        }
    }
});
const App = ({ classes, children }) => (
    <div className={classes.app}>
        <div className="menu">
            <Menu />
        </div>
        <div className="content">{children}</div>
    </div>
);

export default withStyles(styles)(App);
