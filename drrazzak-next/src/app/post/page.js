"use client";
import { useEffect, useState } from "react";
import BlogPost from "./blog-post";

export default function PostPage() {
  const [postId, setPostId] = useState(null);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const id = params.get("id");
    setPostId(id);

    document.title = "Blog Post | Dr. Muhammad Abdur Razzak";
  }, []);

  if (!postId) return <div className="loading-fullscreen">Loading...</div>;

  return <BlogPost postId={postId} />;
}
