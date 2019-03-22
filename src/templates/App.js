import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Menu from "../components/Menu";

const styles = () => ({
    app: {
        minWidth: 600,
        height: "100%",
        display: "flex",
        "& > .menu": {},
        "& > .content": {
            flex: "1 auto",
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
