import React from "react";

const TrailerItem = ({ item }) => (
  <div>
    <img src={item.snippet.thumbnails.default.url} alt="Youtube Thumbnail" />
  </div>
);

export default TrailerItem;
