import React from "react";
import { BrowserRouter as Router, Routes, Route, Link, useParams } from "react-router-dom";
import useGalleryCategories from "./Hooks/gallery-category";
import Loading from "./sub-components/Loading";



import slugify from "./Hooks/slugify";




// Child component: one card
const GalleryCard = ({ title, link, images }) => {

  let masonry = ["tall","big","wide"];  
 
  return (
    <Link to={`/images/${slugify(title)}`} className="gallery-card">
      <h2 className="gallery-title">{title}</h2>
      <div className="gallery-grid">
        {images.map((img, idx) => (
          <img
            loading="lazy"
            key={idx}
            src={img}
            alt={img.alt || title}
            className={`gallery-img ${img.className || ""}`}
          />
        ))}
      </div>
    </Link>
  );
};



// Main component: gallery container

import { Helmet } from "react-helmet";

const Gallery = ({title}) => {

  const { categories, loading, error } = useGalleryCategories();


  if (error) {
    return <p className="loading-fullscreen">⚠️ {error.message}</p>;
  }
  if (loading) return (<Loading />);


  return (
    <div className="gallery-container">
      {categories.map((gallery,i) => (
        <div key={i}>
          <GalleryCard 
            title={gallery.name}
            link={gallery.link}
            images={gallery.preview}        
          />
        </div>
      ))}
    </div>
  );
};

export default Gallery;
