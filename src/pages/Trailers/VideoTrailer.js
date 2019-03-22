import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

const styles = () => ({
    videoContainer: {
        background: "rgba(29, 26, 26, 0.9)",
        position: "fixed",
        zIndex: 1,
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        "& > .wrapper": {
            minWidth: 300,
            width: "67.75%",
            maxHeight: "100%",
            backgroundColor: "#000",
            border: "1px solid #A99E7E",
            boxSizing: "border-box",
            boxShadow: "0px 0px 50px #000000",
            "& .wrapperPadding": {
                padding: `1.28%`
            },
            "& .iframeContainer": {
                position: "relative",
                overflowX: "hidden",
                "& > .ratio": {
                    display: "block",
                    width: "100%",
                    height: "auto"
                },
                "& > iframe": {
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%"
                }
            }
        },
        "& > .bgClick": {
            position: "absolute",
            top: 0,
            left: 0,
            bottom: 0,
            right: 0
        },
        "& > button": {
            position: "absolute",
            top: 26,
            right: 30
        }
    }
});
class VideoTrailer extends Component {
    state = {
        maxWidth: "100%"
    };
    componentDidMount() {
        this.updateSize();
        window.addEventListener("resize", this.startUpdateSize);
    }
    componentWillUnmount() {
        window.removeEventListener("resize", this.startUpdateSize);
    }
    startUpdateSize = () => {
        if (this.timeoutUpdateSize) {
            clearTimeout(this.timeoutUpdateSize);
        }
        this.timeoutUpdateSize = setTimeout(() => {
            this.updateSize();
            this.timeoutUpdateSize = null;
        }, 10);
    };
    updateSize = () => {
        const maxWidth = (document.body.clientHeight / 9) * 16;
        this.setState({ maxWidth });
    };
    render() {
        const { classes, close, trailer } = this.props;
        const { maxWidth } = this.state;
        console.log(trailer);
        return (
            <div className={classes.videoContainer}>
                <div className="bgClick" onClick={close} />
                <div className="wrapper" style={{ maxWidth }}>
                    <div className="wrapperPadding">
                        <div
                            className="iframeContainer"
                            ref={iframeContainer =>
                                (this.iframeContainer = iframeContainer)
                            }
                        >
                            <img
                                class="ratio"
                                alt="ratio"
                                src="http://placehold.it/16x9"
                            />
                            <iframe
                                id="ytplayer"
                                title="ytplayer"
                                type="text/html"
                                allowfullscreen="allowfullscreen"
                                mozallowfullscreen="mozallowfullscreen"
                                msallowfullscreen="msallowfullscreen"
                                oallowfullscreen="oallowfullscreen"
                                webkitallowfullscreen="webkitallowfullscreen"
                                src={`https://www.youtube.com/embed/${
                                    trailer.snippet.resourceId.videoId
                                }?autoplay=1&fs=1&modestbranding=1&rel=0&origin=http://localhost:3000`}
                                frameborder="0"
                            />
                        </div>
                    </div>
                </div>
                <Button color="primary" onClick={close}>
                    CLOSE
                </Button>
            </div>
        );
    }
}
export default withStyles(styles)(VideoTrailer);
