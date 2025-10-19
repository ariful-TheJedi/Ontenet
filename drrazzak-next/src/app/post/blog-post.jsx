"use client";
import { useEffect, useState } from "react";
import Link from "next/link";

const API_URL = "https://sub.drabdurrazzak.com";

export default function BlogPost({ postSlug }) {
  const [post, setPost] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!postSlug) {
      setError("Invalid post slug");
      setLoading(false);
      return;
    }

    let abort = false;

    async function fetchPost() {
      try {
        setLoading(true);
        setError(null);

        const res = await fetch(`${API_URL}/wp-json/custom/v1/post/${postSlug}`);

        if (!res.ok) {
          if (res.status === 404) throw new Error("Post not found");
          throw new Error(`Request failed with status ${res.status}`);
        }

        const data = await res.json();

        if (!data || Object.keys(data).length === 0) {
          throw new Error("Post not found");
        }

        if (!abort) setPost(data);
      } catch (err) {
        console.error("❌ Error fetching post:", err);
        if (!abort) setError(err.message || "Failed to load post");
      } finally {
        if (!abort) setLoading(false);
      }
    }

    fetchPost();

    return () => {
      abort = true;
    };
  }, [postSlug]);

  // Important: return null while loading so Suspense fallback (from PostPage) is the only loading UI shown.
  if (loading) return null;

  // Error / Not found — show styled error card (keeps your original design)
  if (error) {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "70vh",
          textAlign: "center",
          backgroundColor: "#fafafa",
        }}
      >
        <div
          style={{
            background: "#fff",
            padding: "2rem 3rem",
            borderRadius: "12px",
            boxShadow: "0 4px 16px rgba(0,0,0,0.1)",
            maxWidth: "480px",
          }}
        >
          <div style={{ fontSize: "3rem", color: "#ff9800" }}>⚠️</div>
          <h2 style={{ margin: "1rem 0", color: "#333" }}>{error}</h2>
          <p style={{ color: "#666", marginBottom: "1.5rem" }}>
            We couldn’t find the article you’re looking for. It may have been moved or deleted.
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
              transition: "background 0.3s",
            }}
            onMouseOver={(e) => (e.currentTarget.style.backgroundColor = "#115da9ff")}
            onMouseOut={(e) => (e.currentTarget.style.backgroundColor = "#10559bff")}
          >
            ← Back to Blogs
          </a>
        </div>
      </div>
    );
  }

  // Success — render full post (all original elements included)
  return (
    <div className="single-post">
      <div className="post-content">
        {post.featured_image && (
          <div className="hero-image">
            <img src={post.featured_image} alt={post.title} />
          </div>
        )}

        <div className="post-inner">
          <div className="post-meta">
            {post.categories?.[0] && (
              <span
                className="category"
                dangerouslySetInnerHTML={{ __html: post.categories[0] }}
              />
            )}
            <span className="date">
              <i className="far fa-calendar-alt"></i> {post.date}
            </span>
          </div>

          <h1 className="post-title">{post.title}</h1>

          <div
            className="post-body"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />

          {/* Author Short Bio */}
          <div className="author-card">
            <img
              src={`${API_URL}/wp-content/uploads/2025/10/dr-muhammad-abdur-razzak-logo.png`}
              alt="Author dr-muhammad-abdur-razzak transplant nephrologist"
              className="author-image"
            />
            <div className="author-info">
              <a href="/about-me" className="author-name">
                Dr. Muhammad Abdur Razzak
              </a>
              <p className="author-title">Transplant Nephrologist</p>
              <p className="author-posts">
                <a href="/publications">12+ Publications</a>
              </p>
            </div>
          </div>

          {/* Social Sharing */}
          <div className="social-sharing">
            <a href="https://www.facebook.com/nephrology.bd/" className="facebook" aria-label="Share on Facebook">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a
              style={{ background: "white" }}
              href="https://www.youtube.com/@dr.muhammadabdurrazzak9632"
              className="youtube"
              aria-label="Visit YouTube"
            >
              <i style={{ color: "red" }} className="fab fa-youtube"></i>
            </a>
            <a
              href="https://www.linkedin.com/in/muhammad-abdur-razzak-mbbs-md-fasn-60a594128/"
              className="linkedin"
              aria-label="Visit LinkedIn"
            >
              <i className="fab fa-linkedin-in"></i>
            </a>
            <a
              style={{ background: "black" }}
              href="https://x.com/abdurrazzak103"
              className="pinterest"
              aria-label="Visit X"
            >
              <i className="fab fa-x-twitter"></i>
            </a>
          </div>
        </div>

        <div className="post-backto">
          <Link href="/blogs" aria-label="Back to blogs">
            ← Back To Blogs
          </Link>
        </div>
      </div>
    </div>
  );
}
