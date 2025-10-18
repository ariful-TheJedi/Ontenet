import { useEffect, useState } from "react";

/**
 * useBackgroundLoader - loads a GIF and switches from static image when ready
 * @param {string} staticBg - fallback static background image
 * @param {string} gif - animated GIF background
 * @returns {string} bgUrl - returns whichever is ready (GIF or static)
 */
export const useBackgroundLoader = (staticBg, gif) => {
  const [bgUrl, setBgUrl] = useState(staticBg);

  useEffect(() => {
    if (!gif) return;

    const img = new Image();
    img.src = gif;
    img.onload = () => {
      setBgUrl(gif);
    };

    img.onerror = () => {
      console.warn("❌ Failed to load GIF, fallback to static image:", gif);
      setBgUrl(staticBg);
    };

    return () => {
      img.onload = null;
      img.onerror = null;
    };
  }, [staticBg, gif]);

  return bgUrl;
};
