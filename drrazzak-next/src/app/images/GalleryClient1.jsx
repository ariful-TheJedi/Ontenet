"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Loading from "@/components/sub-components/Loading";
import useGalleryImages from "@/components/hooks/imageGallery";

export default function GalleryClient({ title }) {
  const [selectedIndex, setSelectedIndex] = useState(null);
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
      <div className="image-gallery-grid">
        {gallery.images.map((img, idx) => (
          <Image
            key={idx}
            src={img.url}
            alt={img.alt || "dr muhammad razzak images"}
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

      {selectedIndex !== null && (
        <div className="image-gallery-overlay" onClick={closeOverlay}>
          <span className="image-gallery-close" onClick={closeOverlay}>
            &times;
          </span>
          <button className="image-gallery-prev" onClick={prevImage}>
            &#10094;
          </button>
          <Image
            src={gallery.images[selectedIndex].url}
            alt={gallery.images[selectedIndex].alt || "enlarged"}
            className="image-gallery-full"
            unoptimized
            width={900}
            height={900}
            style={{ width: "auto", height: "auto" }}
          />
          <button className="image-gallery-next" onClick={nextImage}>
            &#10095;
          </button>
        </div>
      )}
       {loading || <div className="image-gallery-backto-gallery">
           <Link href="/gallery" alt="go to image gallery page"> ← Back To Gallery</Link>
        </div>}
    </div>
  );
}
