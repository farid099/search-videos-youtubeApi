import React from "react";

export default function Videos({ video,onSelectVideo }) {
  return (
    <div onClick={()=>onSelectVideo(video)}>
      <img
        alt={video.snippet.title}
        className="ui image"
        src={video.snippet.thumbnails.medium.url}
      />
      <div className="content">
        <div className="header">{video.snippet.title}</div>
      </div>
    </div>
  );
}
