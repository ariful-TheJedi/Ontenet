import React, { useState } from "react";
import "../assets/ImageGallery.css";

const ImageGallery = () => {
  const [selectedIndex, setSelectedIndex] = useState(null);

  const [images, setImages] = useState([
    "https://picsum.photos/id/1018/600/400",
    "https://picsum.photos/id/1025/300/400",
    "https://picsum.photos/id/1035/400/300",
    "https://picsum.photos/id/1043/500/500",
    "https://picsum.photos/id/1060/600/350",
    "https://picsum.photos/id/1069/300/300",
    "https://picsum.photos/id/1074/400/600",
    "https://picsum.photos/id/1084/500/400",
    "https://picsum.photos/id/1081/600/500",
  ]);

  const loadMore = () => {
    const newImages = [
      "https://picsum.photos/id/109/600/400",
      "https://picsum.photos/id/110/400/500",
      "https://picsum.photos/id/111/500/300",
      "https://picsum.photos/id/112/600/600",
      "https://picsum.photos/id/113/500/350",
    ];
    setImages([...images, ...newImages]);
  };

  const closeOverlay = () => setSelectedIndex(null);

  const prevImage = (e) => {
    e.stopPropagation();
    setSelectedIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const nextImage = (e) => {
    e.stopPropagation();
    setSelectedIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="image-gallery-container">
      <div className="image-gallery-grid">
        {images.map((src, idx) => (
          <img
            key={idx}
            src={src}
            alt={`gallery-${idx}`}
            className="image-gallery-img"
            onClick={() => setSelectedIndex(idx)}
          />
        ))}
      </div>

      <div className="image-gallery-more-wrapper">
        <button className="image-gallery-more-btn" onClick={loadMore}>
          More Photos
        </button>
      </div>

      {selectedIndex !== null && (
        <div className="image-gallery-overlay" onClick={closeOverlay}>
          <span className="image-gallery-close" onClick={closeOverlay}>
            &times;
          </span>
          <button className="image-gallery-prev" onClick={prevImage}>
            &#10094;
          </button>
          <img
            src={images[selectedIndex]}
            alt="enlarged"
            className="image-gallery-full"
          />
          <button className="image-gallery-next" onClick={nextImage}>
            &#10095;
          </button>
        </div>
      )}
    </div>
  );
};

export default ImageGallery;
