import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Menu from "../components/Menu";

const styles = () => ({
    app: {
        width: "100%",
        height: "100%",
        "& .header": {
            width: 300,
            "& img": {
                width: "100%"
            }
        },
        "& > .menu": {
            float: "left",
            width: 423
        },
        "& > .content": {
            marginLeft: 423,
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
