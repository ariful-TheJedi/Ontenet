import React, { useState, useEffect } from "react";
// import "bootstrap/dist/css/bootstrap.min.css";

function Projects() {
  // Save launch date (30 days from now, only once)
  const [launchDate] = useState(() => {
    const date = new Date("2025-10-15T00:00:00");
    date.setDate(date.getDate());
    return date;
  });

  const [timeLeft, setTimeLeft] = useState({});

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date();
      const distance = launchDate - now;

      if (distance <= 0) {
        clearInterval(timer);
        setTimeLeft({
          days: 0,
          hours: 0,
          minutes: 0,
          seconds: 0,
        });
      } else {
        setTimeLeft({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor((distance / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((distance / (1000 * 60)) % 60),
          seconds: Math.floor((distance / 1000) % 60),
        });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [launchDate]);

  return (
    <div className="position-relative vh-100 text-white text-center overflow-hidden">
      {/* Background Video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="position-fixed top-0 start-0 w-100 h-100"
        style={{ objectFit: "cover", zIndex: -2 }}
      >
        <source src="https://attestdesign.com/wp-content/uploads/2025/06/Video-Production-Main-website-25fps.mp4" type="video/mp4" />
        Your browser does not support HTML5 video.
      </video>

      {/* Dark Overlay */}
      <div
        className="position-fixed top-0 start-0 w-100 h-100"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.6)", zIndex: -1 }}
      ></div>

      {/* Content */}
      <div className="d-flex align-items-center justify-content-center vh-100 px-3">
        <div className="container">
          <h1 className="display-3 fw-bold">🚀 Coming Soon</h1>
          <p className="lead mb-5">
            We’re launching in <span className="fw-bold">30 days</span>! Stay tuned.
          </p>

          {/* Countdown */}
          <div className="row justify-content-center g-3">
            {["days", "hours", "minutes", "seconds"].map((unit, i) => (
              <div key={i} className="col-6 col-md-2">
                <div className="p-3 border rounded bg-dark bg-opacity-50">
                  <h2 className="fw-bold mb-0">{timeLeft[unit] ?? "0"}</h2>
                  <span className="text-uppercase small">{unit}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
