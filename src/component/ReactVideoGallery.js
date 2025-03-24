import React, { useState } from "react";
import "./react-video-gallery.css";
import img1 from "../videos/video1.jpg";
import video1 from "../videos/video1.mp4";
import img2 from "../videos/video2.jpg";
import video2 from "../videos/video2.mp4";
import img3 from "../videos/video3.jpg";
import video3 from "../videos/video3.mp4";
import img4 from "../videos/video4.jpg";
import video4 from "../videos/video4.mp4";
import img5 from "../videos/video5.jpg";
import video5 from "../videos/video5.mp4";
import img6 from "../videos/video6.jpg";
import video6 from "../videos/video6.mp4";

const logo = "/brainwave-symbol.svg";

const ReactVideoGallery = () => {
  const [selectedVideo, setSelectedVideo] = useState(null);

  const videos = [
    { id: 1, poster: img1, videoUri: video1, title: "Introduction to Crypto" },
    { id: 2, poster: img2, videoUri: video2, title: "Bitcoin vs Ethereum" },
    { id: 3, poster: img3, videoUri: video3, title: "How to Buy Crypto" },
    { id: 4, poster: img4, videoUri: video4, title: "Crypto Security Tips" },
    { id: 5, poster: img5, videoUri: video5, title: "Top Altcoins Explained" },
    { id: 6, poster: img6, videoUri: video6, title: "Future of Web3 & Crypto" },
  ];

  return (
    <div className="page-container">
      {/* Header Section */}
      <header className="header">
        <img src={logo} alt="CryptoAccess Logo" className="logo" />
        <h1>CryptoAccess</h1>
      </header>

      {/* Video Gallery */}
      <h2 className="gallery-title">Video Gallery</h2>
      <p className="gallery-description">
        Explore our curated collection of videos covering cryptocurrency trends, tutorials, 
        and expert insights. Stay informed and enhance your crypto knowledge with our engaging content.
      </p>

      <div className="gallery">
        {videos.map((item) => (
          <div className="video" key={item.id} onClick={() => setSelectedVideo(item.videoUri)}>
            <video controls poster={item.poster}>
              <source src={item.videoUri} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <h3 className="video-title">{item.title}</h3>
          </div>
        ))}
      </div>

      {/* Modal for Enlarged Video */}
      {selectedVideo && (
        <div className="model" onClick={() => setSelectedVideo(null)}>
          <button className="model-close-btn">&times;</button>
          <video src={selectedVideo} controls autoPlay className="modal-video" />
        </div>
      )}
    </div>
  );
};

export default ReactVideoGallery;
