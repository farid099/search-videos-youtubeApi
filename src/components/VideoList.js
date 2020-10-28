import React from 'react'
import Videos from './Videos'

export default function VideoList({videos,onSelectVideo}) {
    const renderedList = videos.map(video => {
        return (
          <Videos
            key={video.id.videoId}
            video={video}
            onSelectVideo={onSelectVideo}
          />
        );
      });
    
      return <div className="ui relaxed divided list">{renderedList}</div>;
    };
