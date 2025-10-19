"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import useGalleryCategories from "@/components/Hooks/gallery-category";
import Loading from "@/components/sub-components/Loading";
import slugify from "@/components/Hooks/slugify";



const GalleryCard = ({ title, link, images }) => {
  // same CSS classes as before — no changes
  return (
    <Link href={`/images/${link}`} className="gallery-card">
      <h2 className="gallery-title">{title}</h2>
      <div className="gallery-grid">
        {images.map((img, idx) => {
          const src = typeof img === "string" ? img : img.src;
          const alt = typeof img === "object" ? img.alt || title : "dr razzak photo";
          const className = typeof img === "object" ? img.className || "" : "";

          return (
            // Use <Image> if external domains configured, else fallback to <img>
            <Image
              key={idx}
              src={src}
              alt={alt}
              width={400}
              height={400}
              loading="lazy"
              className={`gallery-img ${className}`}
              unoptimized
            />
          );
        })}
      </div>
    </Link>
  );
};



const Gallery = ({ title }) => {
  const { categories, loading, error } = useGalleryCategories();

  if (error) {
    return <p className="loading-fullscreen">⚠️ {error.message}</p>;
  }
  if (loading) return <Loading />;

  if(categories.length === 0) return <p className="loading-fullscreen">No data found</p>;

  return (
    <div className="gallery-container">
      {categories.map((gallery, i) => (
        <div key={i}>
          <GalleryCard
            title={gallery.title}
            link={gallery.link}
            images={gallery.images}
          />
        </div>
      ))}
    </div>
  );
};

export default Gallery;
