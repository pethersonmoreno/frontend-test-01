import React from "react";
import { withStyles } from "@material-ui/core/styles";
import ButtonBase from "@material-ui/core/ButtonBase";

const styles = theme => ({
    trailerItem: {
        position: "relative",
        backgroundColor: "#000",
        padding: 2,
        "& > img": {
            width: "100%"
        },
        "& > .title": {
            backgroundColor: "rgba(0, 0, 0, 0.6);",
            position: "absolute",
            bottom: 2,
            left: 2,
            right: 2,
            height: "21.15%",
            "& > p": {
                padding: 15,
                fontFamily: "Roboto-Condensed",
                fontSize: 14,
                textAlign: "center",
                color: "#FFFFFF"
            }
        },
        "& > .hoverFocus": {
            position: "absolute",
            left: 0,
            right: 0,
            top: 0,
            bottom: 0,
            backgroundColor: "#000",
            opacity: 0.2,
            transition: theme.transitions.create("opacity")
        },
        "&:hover, &.focusVisible": {
            zIndex: 1,
            backgroundColor: "#fff",
            "& > .hoverFocus": {
                opacity: 0
            }
        }
    },
    focusVisible: {}
});
const TrailerItem = ({ classes, className, thumb, item }) => (
    <ButtonBase
        className={`${classes.trailerItem} ${className}`}
        focusRipple
        focusVisibleClassName="focusVisible"
    >
        <img src={item.snippet.thumbnails[thumb].url} alt="Youtube Thumbnail" />
        <div className="title">
            <p>{item.snippet.title}</p>
        </div>
        <div className="hoverFocus" />
    </ButtonBase>
);

export default withStyles(styles)(TrailerItem);
