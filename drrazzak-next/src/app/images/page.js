"use client";
import { useEffect, useState } from "react";
import GalleryClient from "./GalleryClient";
import useGalleryImages from "@/components/hooks/imageGallery";

export default function ImagesPage() {
  const [title, setTitle] = useState("");
  const [slug, setSlug] = useState("");

  // Get slug from URL
  useEffect(() => {
    const path = window.location.pathname;
    const currentSlug = path.split("/images/")[1];
    if (currentSlug) {
      const decoded = decodeURIComponent(currentSlug);
      setSlug(decoded);
      setTitle(decoded.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase()));
    }
  }, []);

  // Load images only after slug is ready
  const { gallery, loading, error } = useGalleryImages(slug);

  // Update <title> and <meta description>
  useEffect(() => {
    if (title) {
      document.title = `${title} | Dr. Muhammad Abdur Razzak`;

      const desc = `Explore photo highlights from ${title}, featuring moments from conferences and workshops attended by Dr. Muhammad Abdur Razzak.`;

      let meta = document.querySelector("meta[name='description']");
      if (!meta) {
        meta = document.createElement("meta");
        meta.name = "description";
        document.head.appendChild(meta);
      }
      meta.setAttribute("content", desc);
    }
  }, [title]);

  if (!slug || loading) return <div className="loading-fullscreen">Loading...</div>;
  if (error) return <p className="loading-fullscreen">⚠️ {error.message}</p>;

  return <GalleryClient title={title} />;
}
