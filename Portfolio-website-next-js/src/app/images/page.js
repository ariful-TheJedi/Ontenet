"use client";
import { useEffect, useState } from "react";
import GalleryClient from "./GalleryClient";
import Loading from "@/components/sub-components/Loading";
import useGalleryImages from "@/components/hooks/imageGallery";

export default function ImagesPage() {
  const [title, setTitle] = useState("");
  const [slug, setSlug] = useState("");

  // ✅ Get slug from URL
  useEffect(() => {
    const path = window.location.pathname;
    const currentSlug = path.split("/images/")[1];
    if (currentSlug) {
      setSlug(currentSlug);
      const formatted = currentSlug
        .replace(/-/g, " ")
        .replace(/\b\w/g, (c) => c.toUpperCase());
      setTitle(formatted);
    }
  }, []);

  // ✅ Fetch gallery once slug is ready
  const { gallery, loading, error } = useGalleryImages(slug);

  // ✅ Update document title + meta description
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

  // ✅ Handle loading & error states
  if (!slug || loading) return <Loading />;
  if (error)
    return <p className="loading-fullscreen">⚠️ {error.message}</p>;
  if (!gallery || !gallery.images)
    return <p className="loading-fullscreen">No images found</p>;

  // ✅ Pass fetched data to GalleryClient
  return <GalleryClient gallery={gallery} title={title} />;
}
