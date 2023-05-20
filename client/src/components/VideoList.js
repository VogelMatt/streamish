import React, { useEffect, useState } from "react";
import Video from './Video';
import { searchVideos,getAllVideosWithComments } from "../modules/videoManager";


export const VideoList = () => {
  const [videos, setVideos] = useState([]);
  const [searchInput, setSearchInput] = useState("");

  const getVideosAndComments = () => {
    getAllVideosWithComments().then(videos => setVideos(videos));
  };
  const vids = (searchInput, bool) => {
    searchVideos(searchInput, bool)
    // console.log(searchInput, "input")  
      .then((videos) => {
        // console.log(videos, "results")
        // const filteredVideos = videos.filter((vid) =>
        //   vid.Title.toLowerCase().includes(searchInput.toLowerCase())
        // );
        setVideos(videos);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleChange = (e) => {
    e.preventDefault();
    setSearchInput(e.target.value);
    if (e.target.value.length > 0) {
      vids(e.target.value, true);
    } else {
      getVideosAndComments();
    }
  };

  useEffect(() => {
    // getVideos();
    getVideosAndComments();
  }, []);



  return (
    <div className="container">
      <div>
      <input
        type="search"
        placeholder="Search here"
        onChange={handleChange}
        value={searchInput}
      />
      </div>
      <div className="row justify-content-center">
        {videos.map((video) => (
          <Video video={video} key={video.id} />
        ))}
      </div>
    </div>
  );
};

export default VideoList;