import React from 'react'

export default function VideoDetails({video}) {

    if (!video) {
        return <div>Loading...</div>;
    }


    const videoSrc = `https://www.youtube.com/embed/${video.id.videId}`;

        return (
            <div>
              <div className="ui embed">
                <iframe title="video player" src={videoSrc} />
              </div>
              <div className="ui segment">
                <h4 className="ui header">{video.snippet.title}</h4>
                <p>{video.snippet.description}</p>
              </div>
            </div>
          );
}
