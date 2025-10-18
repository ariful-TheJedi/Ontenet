"use client";
import { useEffect, useState } from "react";

const API_URL = "https://sub.drabdurrazzak.com";

export default function BlogPost({ postId }) {
  const [post, setPost] = useState(null);
  const [error, setError] = useState(false);
  //nst ding, setLoading] = useEffect("");

  useEffect(() => {
    if (!postId) {
      setError(true);
      return;
    }

    async function fetchPost() {
      try {
        const res = await fetch(`${API_URL}/wp-json/custom/v1/post/${postId}`);
        if (!res.ok) throw new Error("Post not found");
        const data = await res.json();
        setPost(data);
      } catch (err) {
        console.error("Error fetching post:", err);
        setError(true);
      }
    }

    fetchPost();
  }, [postId]);

  if (error) {
    window.location.href = "/404.html";
    return null;
  }

  if (!post) return <div className="loading-fullscreen">Loading...</div>;

  return (
    <div className="single-post">
      <div className="post-content">
        <div className="hero-image">
          <img src={post.featured_image} alt={post.title} />
        </div>

        <div className="post-inner">
          <div className="post-meta">
            <span
              className="category"
              dangerouslySetInnerHTML={{ __html: post.categories?.[0] }}
            ></span>
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
                <a href="/publications" alt="">
                  12+ Publications
                </a>
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
