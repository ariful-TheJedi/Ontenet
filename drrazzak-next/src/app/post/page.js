"use client";
import { useEffect, useState } from "react";
import BlogPost from "./blog-post";
import unslugify from "@/components/hooks/unslugyfy";
import Loading from "@/components/sub-components/Loading";

const API_URL = process.env.NEXT_PUBLIC_API_URL;

export default function Page() {
  const [post, setPost] = useState(null);
  const [slug, setSlug] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // ✅ Extract slug from URL
    const path = window.location.pathname;
    const slugFromPath = path.split("/post/")[1];
    setSlug(slugFromPath);

    if (!slugFromPath) {
      setError("Invalid post URL");
      setLoading(false);
      return;
    }

    async function fetchPost() {
      try {
        setLoading(true);
        const res = await fetch(`${API_URL}/wp-json/custom/v1/post/${slugFromPath}`);
        if (!res.ok) throw new Error("Post not found");

        const data = await res.json();
        if (!data || Object.keys(data).length === 0) throw new Error("Post not found");

        setPost(data);
        document.title = `${data.title} | Dr. Muhammad Abdur Razzak`;
      } catch (err) {
        console.error("❌ Error fetching post:", err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }

    fetchPost();
  }, []);

  // Loading
  if (loading) return <Loading />;

  // Error
  if (error) {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "70vh",
          textAlign: "center",
          // backgroundColor: "#fafafa",
        }}
      >
        <div
          style={{
            // background: "#fff",
            padding: "2rem 3rem",
            borderRadius: "12px",
            boxShadow: "0 4px 16px rgba(0,0,0,0.1)",
            maxWidth: "480px",
          }}
        >
          <div style={{ fontSize: "3rem", color: "#ff9800" }}>⚠️</div>
          <h2 style={{ margin: "1rem 0", color: "#333" }}>{error}</h2>
          <p style={{ color: "#666", marginBottom: "1.5rem" }}>
            We couldn’t find the article you’re looking for.
          </p>
          <a
            href="/blogs"
            style={{
              display: "inline-block",
              backgroundColor: "#115da9ff",
              color: "#fff",
              padding: "0.6rem 1.4rem",
              borderRadius: "8px",
              textDecoration: "none",
              fontWeight: "500",
            }}
          >
            ← Back to Blogs
          </a>
        </div>
      </div>
    );
  }

  // Success
  return <BlogPost post={post} />;
}
