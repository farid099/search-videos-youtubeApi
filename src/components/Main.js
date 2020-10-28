import React, { useEffect, useState } from "react";
import youtube from "../apis/youtube";
import SearchBox from "./SearchBox";
import VideoDetails from "./VideoDetails";
import VideoList from "./VideoList";

export default function Main() {
  const [videos, setVideos] = useState([]);
  const [selectedVideo ,setSelectedVideo] = useState('')

  useEffect(() => {
      onSubmitHandler('Karabagh is Azerbaijan');
  }, [])

  const onSubmitHandler = async (text) => {
    const response = await youtube.get("/search", {
      params: {
        q: text,
      },
    });
    setVideos(response.data.items);
    setSelectedVideo(response.data.items[0])

};

  const onSelectVideo = (video) =>{

    setSelectedVideo(video);
  }

  return (
    <div className="ui container">
      <SearchBox onSubmitHandler={onSubmitHandler}></SearchBox>
      <div className="ui grid">
        <div className="ui row">
          <div className="eleven wide column">
            <VideoDetails video={selectedVideo}/>
          </div>
          <div className="five wide column">
            <VideoList videos={videos} onSelectVideo={onSelectVideo}/>
          </div>
        </div>
      </div>
    </div>
  );
}
