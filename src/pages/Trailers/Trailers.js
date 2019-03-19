import React, { Component } from "react";
import TrailerItem from "./TrailerItem";

const getPlaylist = ({ playlistId, key, maxResults }) =>
  fetch(
    `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=${maxResults}&playlistId=${playlistId}&key=${key}`
  );

const playlistId = "PL6t93nUFQQ1ZiXMfhPyhjb0PX3LgEVMcF";
class Trailers extends Component {
  state = {
    items: []
  };
  componentDidMount() {
    this.loadItems(5);
  }
  loadItems = maxResults => {
    getPlaylist({
      playlistId,
      key: process.env.REACT_APP_YOUTUBE_KEY,
      maxResults
    })
      .then(data => data.json())
      .then(data => this.setState({ items: data.items }));
  };
  loadMore = () => {
    this.loadItems(50);
  };

  render() {
    const { items } = this.state;
    return (
      <div>
        Trailers
        <div>
          {items.map(item => (
            <TrailerItem item={item} />
          ))}
        </div>
        <button onClick={this.loadMore}>Load More</button>
      </div>
    );
  }
}

export default Trailers;
