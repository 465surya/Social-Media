import React, { useState, useEffect, useCallback } from "react";
import PropTypes from "prop-types";
import Navbar from "../Market/Navbar";
import { Avatar } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import ThumbDownIcon from "@mui/icons-material/ThumbDown";
import InsertCommentIcon from "@mui/icons-material/InsertComment";
import NearMeIcon from "@mui/icons-material/NearMe";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { NavLink } from "react-router-dom";

import imla from "../youtube/aes.gif";
import "./Shorts.css";

function YouTubeShorts() {
  const [videos, setVideos] = useState([]);
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  const [subs, setSubs] = useState(false);

  // Fetch videos from the API
  useEffect(() => {
    fetch("http://localhost:3000/shot/data")
      .then((response) => response.json())
      .then((data) => setVideos(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  const constructIframeSrc = useCallback(
    (ids) => {
      if (ids.length === 0) return "";
      const videoList = ids.join(",");
      return `https://www.youtube.com/embed/${ids[currentVideoIndex]}?autoplay=1&controls=0&loop=1&playlist=${videoList}&modestbranding=1&showinfo=1`;
    },
    [currentVideoIndex]
  );

  useEffect(() => {
    const iframe = document.getElementById("youtube-video");
    if (iframe) {
      iframe.src = constructIframeSrc(videos.map((video) => video.ids));
    }
  }, [constructIframeSrc, videos]);

  const handleScroll = (event) => {
    if (event.deltaY > 0) {
      // Scroll down
      setCurrentVideoIndex((prevIndex) => (prevIndex + 1) % videos.length);
    } else {
      // Scroll up
      setCurrentVideoIndex((prevIndex) =>
        prevIndex === 0 ? videos.length - 1 : prevIndex - 1
      );
    }
  };

  const handleNextVideo = () => {
    setCurrentVideoIndex((prevIndex) => (prevIndex + 1) % videos.length);
  };

  const handlePreviousVideo = () => {
    setCurrentVideoIndex((prevIndex) =>
      prevIndex === 0 ? videos.length - 1 : prevIndex - 1
    );
  };

  const handleSubscribe = () => {
    setSubs((sub) => !sub);
  };

  if (videos.length === 0) {
    return <div>Loading...</div>;
  }

  const currentVideo = videos[currentVideoIndex];

  return (
    <div className="shorti">
      <img src={imla} alt="Background" className="logos" />
      <Navbar />
      <div className="shortsWrapper">
        <div className="shot">SHORTS</div>
        <div className="video" onWheel={handleScroll}>
          <iframe
            id="youtube-video"
            src={constructIframeSrc(videos.map((video) => video.ids))}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            title="YouTube Video"
          ></iframe>
          <div className="shortsContainer">
            <div className="shortsVideoTopIcon">
              <NavLink to="/profile">
                <ArrowBackIcon />
              </NavLink>
            </div>
            <div className="shortsVideoTopIcon">
              <MoreVertIcon />
            </div>
          </div>
          <div className="shortsVideoSideIcons">
            <div className="shortsVideoSideIcon">
              <ThumbUpIcon />
              <p>{currentVideo.like}</p>
            </div>
            <div className="shortsVideoSideIcon">
              <ThumbDownIcon />
              <p>{currentVideo.dislike}</p>
            </div>
            <div className="shortsVideoSideIcon">
              <InsertCommentIcon />
              <p>{currentVideo.comment}</p>
            </div>
            <div className="shortsVideoSideIcon">
              <NearMeIcon />
              <p>{currentVideo.share}</p>
            </div>
          </div>
          <div className="shortsBottom">
            <div className="shortsDesc">
              <p className="description">{currentVideo.description}</p>
            </div>
            <div className="shortDetails">
              <Avatar src="https://yt3.googleusercontent.com/f5czdYQhm1BHizoLfKNlOevcN1uvBayviNFn4KYfjhN4dVYCKzz6cTw8oYtup7N1_reQImjJ=s160-c-k-c0x00ffffff-no-rj" />
              <p style={{ fontWeight: "900", marginLeft: "10px" }}>
                {currentVideo.channel}
              </p>
              <button
                style={{
                  background: subs ? "red" : "hsla(0,0%,69.4%,.609)",
                }}
                onClick={handleSubscribe}
              >
                {subs ? "SUBSCRIBED" : "SUBSCRIBE"}
              </button>
              <div className="navigationButtons">
                <button onClick={handlePreviousVideo} className="navButton">
                  <KeyboardArrowUpIcon />
                </button>
                <button onClick={handleNextVideo} className="navButton">
                  <KeyboardArrowDownIcon />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}


export default YouTubeShorts;
