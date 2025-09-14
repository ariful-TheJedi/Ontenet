// BackgroundVideoOnly.jsx
import React from "react";

const Home= () => {
  return (
    <div className="video-section">
      <video
        className="bg-video w-100 h-100"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src="https://attestdesign.com/wp-content/uploads/2025/05/Video-Resizing.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default Home;
