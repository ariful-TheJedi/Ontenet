"use client";
import { useEffect, useState } from "react";
import GalleryClient from "./GalleryClient";
import useGalleryImages from "@/components/hooks/imageGallery";

export default function ImagesPage() {
  const [title, setTitle] = useState("");
  const { gallery, loading, error } = useGalleryImages(title);

  useEffect(() => {
    const path = window.location.pathname;
    const slug = path.split("/images/")[1];
    if (slug) setTitle(decodeURIComponent(slug));
  }, []);

  // dynamically update <title> and description
  useEffect(() => {
    if (title) {
      const formatted = title.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase());
      document.title = `${formatted} | Dr. Muhammad Abdur Razzak`;

      const meta = document.querySelector("meta[name='description']");
      const desc = `Explore photo highlights from ${formatted}, featuring moments from conferences and workshops attended by Dr. Muhammad Abdur Razzak.`;
      if (meta) {
        meta.setAttribute("content", desc);
      } else {
        const newMeta = document.createElement("meta");
        newMeta.name = "description";
        newMeta.content = desc;
        document.head.appendChild(newMeta);
      }
    }
  }, [title]);

  if (loading || !title) return <div className="loading-fullscreen">Loading...</div>;
  if (error) return <p className="loading-fullscreen">⚠️ {error.message}</p>;

  return <GalleryClient title={title} />;
}
