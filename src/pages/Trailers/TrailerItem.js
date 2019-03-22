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
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            "& > p": {
                maxHeight: "100%",
                overflow: "hidden",
                margin: 0,
                padding: "2%",
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
const TrailerItem = ({ classes, className, thumb, item, onClick }) => (
    <div className={className}>
        <ButtonBase
            className={`${classes.trailerItem}`}
            focusRipple
            focusVisibleClassName="focusVisible"
            onClick={onClick}
        >
            <img
                src={item.snippet.thumbnails[thumb].url}
                alt="Youtube Thumbnail"
            />
            <div className="title">
                <p>{item.snippet.title}</p>
            </div>
            <div className="hoverFocus" />
        </ButtonBase>
    </div>
);

export default withStyles(styles)(TrailerItem);
