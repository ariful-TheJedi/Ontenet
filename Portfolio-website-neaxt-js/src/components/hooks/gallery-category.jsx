
import { useState, useEffect } from "react";

export default function  useGalleryCategories() {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

const API_URL = process.env.NEXT_PUBLIC_API_URL;

  useEffect(() => {
    async function fetchCategories() {
      try {
        const res = await fetch(API_URL+"/wp-json/custom/v1/gallery");
        const data = await res.json();
        setCategories(data);
      } catch (err) {
        console.error("Error fetching categories:", err);
        setError(err)
      } finally {
        setLoading(false);
      }
    }
    fetchCategories();
  }, []);

  return { categories, loading,error };
}
