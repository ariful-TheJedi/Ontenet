"use client";
import { useState } from "react";
import { useParams } from "next/navigation";
import Image from "next/image";
import Loading from "@/components/sub-components/Loading";
import useGalleryImages from "@/components/Hooks/imageGallery";

export default function ImageGalleryPage() {
  const [selectedIndex, setSelectedIndex] = useState(null);
  const { title } = useParams();
  const { gallery, error, loading } = useGalleryImages(title);


  const closeOverlay = () => setSelectedIndex(null);

  const prevImage = (e) => {
    e.stopPropagation();
    setSelectedIndex((prev) =>
      prev === 0 ? gallery.images.length - 1 : prev - 1
    );
  };

  const nextImage = (e) => {
    e.stopPropagation();
    setSelectedIndex((prev) =>
      prev === gallery.images.length - 1 ? 0 : prev + 1
    );
  };

  if (loading) return <Loading />;
  if (error) return <p className="loading-fullscreen">⚠️ {error.message}</p>;
  if (!gallery || !gallery.images)
    return <p className="loading-fullscreen">No images found</p>;

  return (
    <div className="image-gallery-container">
      {/* Grid of images */}
      <div className="image-gallery-grid">
        {gallery.images.map((img, idx) => (
          // <img
          //   key={idx}
          //   src={img.url}
          //   alt={img.alt || img.title}
          //   className="image-gallery-img"
          //   onClick={() => setSelectedIndex(idx)}
          //   loading="lazy"
          // />
          <Image
            key={idx}
            src={img.url}
            alt={img.alt || img.title}
            className="image-gallery-img"
            loading="lazy"
            unoptimized
            width={500}     
            height={500}    
            style={{ width: "auto", height: "auto" }}
            onClick={() => setSelectedIndex(idx)}
          />
        ))}
      </div>

      {/* Overlay for enlarged image */}
      {selectedIndex !== null && (
        <div className="image-gallery-overlay" onClick={closeOverlay}>
          <span className="image-gallery-close" onClick={closeOverlay}>
            &times;
          </span>
          <button className="image-gallery-prev" onClick={prevImage}>
            &#10094;
          </button>
          <img
            src={gallery.images[selectedIndex].url}
            alt={gallery.images[selectedIndex].alt || "enlarged"}
            className="image-gallery-full"
          />
          <button className="image-gallery-next" onClick={nextImage}>
            &#10095;
          </button>
        </div>
      )}
    </div>
  );
}
