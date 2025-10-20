import React, { useState, useEffect } from "react";

const Domain = import.meta.env.VITE_API_DOMAIN;


const CVViewer = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Auto open on page load
  useEffect(() => {
    setIsOpen(true);
  }, []);

  return (
    <div className="cv-wrapper">
      {/* Download button always visible */}
      <a href={`${Domain+"/wp-content/uploads/2025/10/cv-dr-abdur-razzak.pdf"}`} download className="cv-download-button">
        <span className="cv-download-icon">⬇️</span>
        <span className="cv-download-text">Download CV</span>
      </a>

      {/* Trigger button */}
      <button className="cv-trigger" onClick={() => setIsOpen(true)}>
        📄 View CV
      </button>

      {/* Lightbox (only for larger screens) */}
      {isOpen && (
        <div className="cv-lightbox">
          <div className="cv-container">
            <button className="cv-close" onClick={() => setIsOpen(false)}>
              <span>×</span>
            </button>
            <iframe
              src={`${Domain+"/wp-content/uploads/2025/10/cv-dr-abdur-razzak.pdf"}`}
              title="Dr. Muhammad Abdurazzak CV"
              className="cv-frame"
            ></iframe>
            {/* Mobile fallback */}
            <p className="cv-fallback">
              📱 PDF viewer not supported on this device.{" "}
              <a href="/cv.pdf" target="_blank" rel="noopener noreferrer">
                Open CV in new tab
              </a>
              
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default CVViewer;
