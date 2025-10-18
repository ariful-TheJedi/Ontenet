import { useState, useEffect } from "react";

export default function useGalleryImages(title) {
  const [gallery, setGallery] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const API_URL = process.env.NEXT_PUBLIC_API_URL || "https://sub.drabdurrazzak.com";


  useEffect(() => {
    async function fetchGallery() {
      try {
        const res = await fetch(`${API_URL}/wp-json/custom/v1/images/${title}`);
        const data = await res.json();

        if (res.ok) {
          setGallery(data);
        } else {
          setError(data);
        }
      } catch (err) {
        console.error("❌ Error fetching gallery:", err);
        setError(err);
      } finally {
        setLoading(false);
      }
    }

    if (title) fetchGallery();
  }, [title]);

  return { gallery, loading, error };
}
