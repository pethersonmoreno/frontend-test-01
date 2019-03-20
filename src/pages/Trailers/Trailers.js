import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import TrailerItem from "./TrailerItem";
import Button from "@material-ui/core/Button";
import Loader from "../../components/Loader";

const getPlaylist = ({ playlistId, key, maxResults }) =>
    fetch(
        `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=${maxResults}&playlistId=${playlistId}&key=${key}`
    );

const playlistId = "PL6t93nUFQQ1ZiXMfhPyhjb0PX3LgEVMcF";

const thumbTypes = [
    {
        thumb: "default",
        width: 120,
        height: 90
    },
    {
        thumb: "medium",
        width: 320,
        height: 180
    },
    {
        thumb: "high",
        width: 480,
        height: 360
    },
    {
        thumb: "standard",
        width: 640,
        height: 480
    },
    {
        thumb: "maxres",
        width: 1280,
        height: 720
    }
];

const marginBetween = 45;
const externalMargin = 120;
const qtdByLine = 2;
const styles = () => ({
    container: {
        marginLeft: externalMargin / 2,
        marginRight: externalMargin / 2,
        "& > .line": {
            display: "flex",
            "& > .item": {
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flex: "1",
                margin: marginBetween / 2,
                "& > button": {
                    width: 254,
                    maxWidth: "100%",
                    margin: "30px auto"
                }
            }
        }
    }
});
class Trailers extends Component {
    state = {
        thumb: "default",
        items: [],
        showLoadMore: true,
        loading: false
    };
    componentDidMount() {
        this.loadItems(3).then(() => setTimeout(this.updateSize, 100));
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
        }, 100);
    };
    updateSize = () => {
        const spaces = (qtdByLine - 1) * marginBetween + externalMargin;
        const widthItem = (this.container.clientWidth - spaces) / qtdByLine;
        const possibleThumbs = thumbTypes.filter(t => t.width >= widthItem);
        let newThumb = "default";
        if (possibleThumbs.length > 0) {
            newThumb = possibleThumbs.sort((a, b) => a.width - b.width)[0]
                .thumb;
        }
        if (this.state.thumb !== newThumb) {
            this.setState({ thumb: newThumb });
        }
    };
    loadItems = maxResults => {
        this.setState({ loading: true });
        return getPlaylist({
            playlistId,
            key: process.env.REACT_APP_YOUTUBE_KEY,
            maxResults
        })
            .then(data => data.json())
            .then(data => this.setState({ items: data.items }))
            .finally(() => this.setState({ loading: false }));
    };
    loadMore = () => {
        this.setState({ showLoadMore: false });
        this.loadItems(50);
    };
    getLinesOfItems = () => {
        const { items } = this.state;
        let index = 0;
        return items.reduce((ret, item) => {
            if (ret.length > index && ret[index].items.length >= qtdByLine) {
                index++;
            }
            if (ret.length <= index) {
                return [...ret, { index, items: [item] }];
            }
            return ret.map(i => {
                if (i.index !== index) {
                    return i;
                }
                return { index, items: [...i.items, item] };
            });
        }, []);
    };

    render() {
        const { classes } = this.props;
        const { loading, thumb, showLoadMore } = this.state;
        const linesOfItems = this.getLinesOfItems();
        const linesFullOfItems = linesOfItems.filter(
            line => line.items.length >= qtdByLine
        );
        const lineNotFullOfItems = linesOfItems.find(
            line => line.items.length < qtdByLine
        );
        const arrEmptySpacesLastLine = [
            ...new Array(
                qtdByLine -
                    (lineNotFullOfItems ? lineNotFullOfItems.items.length : 0)
            )
        ];
        console.log(linesOfItems);
        return (
            <div
                className={classes.container}
                ref={container => (this.container = container)}
            >
                {linesFullOfItems.map(line => (
                    <div key={line.index} className="line">
                        {line.items.map(item => (
                            <TrailerItem
                                key={item.id}
                                className="item"
                                thumb={thumb}
                                item={item}
                            />
                        ))}
                    </div>
                ))}
                {lineNotFullOfItems && (
                    <div className="line">
                        {lineNotFullOfItems.items.map(item => (
                            <TrailerItem
                                key={item.id}
                                className="item"
                                thumb={thumb}
                                item={item}
                            />
                        ))}
                        {arrEmptySpacesLastLine.map((el, i) => (
                            <div key={i} className="item">
                                {i === 0 && <Loader loading={loading} />}
                                {i === 0 && !loading && showLoadMore && (
                                    <Button
                                        variant="outlined"
                                        margin="normal"
                                        onClick={this.loadMore}
                                    >
                                        Load More
                                    </Button>
                                )}
                            </div>
                        ))}
                    </div>
                )}
                {!lineNotFullOfItems && showLoadMore && (
                    <div className="line">
                        {arrEmptySpacesLastLine.map((el, i) => (
                            <div key={i} className="item">
                                {i === 0 && <Loader loading={loading} />}
                                {i === 0 && !loading && showLoadMore && (
                                    <Button
                                        variant="outlined"
                                        margin="normal"
                                        onClick={this.loadMore}
                                    >
                                        Load More
                                    </Button>
                                )}
                            </div>
                        ))}
                    </div>
                )}
            </div>
        );
    }
}

export default withStyles(styles)(Trailers);
