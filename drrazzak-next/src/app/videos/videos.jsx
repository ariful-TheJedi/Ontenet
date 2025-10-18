import React from "react";

// import "./VideoPage.css";

const VideoPage = ({title}) => {
  return (
    <div className="video-page">
      {/* FEATURED VIDEO */}
      <section className="video-feature">
        <div className="video-feature-frame">
             <iframe width="560" height="315" src="https://www.youtube.com/embed/xNnJJWm9UaM?si=M-e4shsQ6lFQq_qv" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture;fullscreen; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </div>
      </section>

      {/* VIDEO GRID */}
      <section className="video-grid">
        <div className="video-card">
          <div className="video-frame">
<iframe width="560" height="315" src="https://www.youtube.com/embed/qH0E7G4jIBs?si=fe-Z-X-Pe8zxClhb" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture;fullscreen; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
          </div>
        </div>

        <div className="video-card">
          <div className="video-frame">
<iframe width="560" height="315" src="https://www.youtube.com/embed/8Qm7otvIB_I?si=-v4BV5FbMBocTeXD" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture;fullscreen; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
          </div>
        </div>

        <div className="video-card">
          <div className="video-frame">
<iframe width="560" height="315" src="https://www.youtube.com/embed/VRrlEANlHqY?si=Kt9fWBAggxKhm87l" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture;fullscreen;web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
          </div>
        </div>

        <div className="video-card">
          <div className="video-frame">
<iframe width="560" height="315" src="https://www.youtube.com/embed/IML3_aoOyBI?si=jz3ntBM00aLRybTv" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture;fullscreen; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
          </div>
        </div>

              <div className="video-card">
          <div className="video-frame">
<iframe width="560" height="315" src="https://www.youtube.com/embed/Cn1hkvWRxiA?si=Jj8mHPYeiVWgipk2" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture;fullscreen; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>    
         
          </div>
        </div>

                      <div className="video-card">
          <div className="video-frame">
<iframe width="560" height="315" src="https://www.youtube.com/embed/dBdtj-5XK7M?si=NZJAosWIXdB8UplS" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture;fullscreen; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>    
          </div>
        </div>

              <div className="video-card">
          <div className="video-frame">
<iframe width="560" height="315" src="https://www.youtube.com/embed/uQNOTKHgR64?si=3aYNAkWh5cxv5FWm" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture;fullscreen; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>      
          </div>
        </div>
              <div className="video-card">
          <div className="video-frame">
<iframe width="560" height="315" src="https://www.youtube.com/embed/fXNWqhXhoqI?si=EMxw1tcA9KkOCDxO" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture;fullscreen;web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>       
          </div>
        </div>


      </section>

      {/* VIEW MORE BUTTON */}
      <div className="video-more-wrapper">
        <a href="https://www.youtube.com/@dr.muhammadabdurrazzak9632" className="video-more-btn">View My Channel</a>
      </div>
    </div>
  );
};

export default VideoPage;
