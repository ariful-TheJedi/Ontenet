
import { useState, useEffect } from "react";
const API_URL = import.meta.env.VITE_API_DOMAIN;


export default function  useGalleryImages(slug) {
  const [gallery, setImages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchImages() {
      try {
        const res = await fetch(API_URL+"/wp-json/custom/v1/images/"+slug);
        const data = await res.json();
        setImages(data);
      } catch (err) {
        console.error("Error fetching Images", err);
        setError(err);
      } finally {
        setLoading(false);
      }
    }
    fetchImages();
  }, []);

  return { gallery,loading,error};
}
