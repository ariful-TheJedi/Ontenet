"use client";
import { useEffect, useState } from "react";

const API_URL = "https://sub.drabdurrazzak.com";

export default function BlogPost({ postSlug }) {
  const [post, setPost] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!postSlug) {
      setError("Invalid post slug");
      return;
    }

    async function fetchPost() {
      try {
        const res = await fetch(`${API_URL}/wp-json/custom/v1/post/${postSlug}`);
        if (!res.ok) {
          if (res.status === 404) throw new Error("Post not found");
          throw new Error(`Request failed with status ${res.status}`);
        }

        const data = await res.json();
        if (!data || Object.keys(data).length === 0) {
          throw new Error("No post data returned");
        }

        setPost(data);
      } catch (err) {
        console.error("❌ Error fetching post:", err);
        setError(err.message || "Failed to load post");
      }
    }

    fetchPost();
  }, [postSlug]);

  // ⚠️ Error state (no redirect)
  if (error) {
    return (
      <div className="error-message">
        <h2>⚠️ Unable to load post</h2>
        <p>{error}</p>
        <a href="/blogs" className="back-link">← Back to Blogs</a>
      </div>
    );
  }

  // If still fetching
  if (!post) return null; // 🔹 Parent already shows the loading spinner

  // ✅ Render post
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
            <a href="https://www.facebook.com/nephrology.bd/" className="facebook">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a
              style={{ background: "white" }}
              href="https://www.youtube.com/@dr.muhammadabdurrazzak9632"
              className="youtube"
            >
              <i style={{ color: "red" }} className="fab fa-youtube"></i>
            </a>
            <a
              href="https://www.linkedin.com/in/muhammad-abdur-razzak-mbbs-md-fasn-60a594128/"
              className="linkedin"
            >
              <i className="fab fa-linkedin-in"></i>
            </a>
            <a
              style={{ background: "black" }}
              href="https://x.com/abdurrazzak103"
              className="pinterest"
            >
              <i className="fab fa-x-twitter"></i>
            </a>
          </div>
        </div>

        <div className="post-backto">
          <a href="/blogs" alt="go to image gallery page">Back To Blogs</a>
        </div>
      </div>
    </div>
  );
}
