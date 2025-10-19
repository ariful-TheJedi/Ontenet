import { useState, useEffect } from "react";

export default function useGalleryImages(categorySlug) {
  const [gallery, setGallery] = useState({ images: [] });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // ✅ Make sure API_URL always points to your WordPress domain
  const API_URL = process.env.NEXT_PUBLIC_API_URL || "https://sub.drabdurrazzak.com";

  useEffect(() => {
    if (!categorySlug) return; // Wait until slug is available

    async function fetchGallery() {
      try {
        setLoading(true);

        // Sanitize slug — WordPress route expects lowercase, hyphenated format
        const safeSlug = encodeURIComponent(categorySlug.toLowerCase().replace(/\s+/g, "-"));
        const url = `${API_URL}/wp-json/custom/v1/images/${safeSlug}`;


        const res = await fetch(url, { method: "GET" });

        if (!res.ok) {
          throw new Error(`Failed to load images (status: ${res.status})`);
        }

        const data = await res.json();

        // Ensure consistent structure
        setGallery({ images: Array.isArray(data) ? data : [] });
      } catch (err) {
        console.error("❌ Error fetching gallery:", err);
        setError(err);
      } finally {
        setLoading(false);
      }
    }

    fetchGallery();
  }, [categorySlug]);

  return { gallery, loading, error };
}
