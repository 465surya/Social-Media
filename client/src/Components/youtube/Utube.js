import  { useEffect, useState } from "react";
import "./App.css";
import YouTubeShorts from "./youtube/YouTubeShorts"; // Adjust this import path if necessary
import axios from "axios";

function App() {
  const [ytVideo, setYtVideo] = useState([]);

  useEffect(() => {
    async function fetchVideos() {
      try {
        const response = await axios.get("api/video/posts");
        setYtVideo(response.data);
      } catch (err) {
        console.error(err);
      }
    }
    fetchVideos();
  }, []);

  return (
    <div className="app">
      <div className="app__videos">
        {ytVideo.map((vid) => (
          <YouTubeShorts
            key={vid._id}
            id={vid._id}
            src={vid.url}
            channel={vid.channel}
            description={vid.description}
            like={vid.likes}
            dislike={vid.dislike}
            share={vid.shares}
            comment={vid.comment}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
