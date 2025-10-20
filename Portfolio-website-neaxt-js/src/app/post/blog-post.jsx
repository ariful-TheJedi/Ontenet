"use client";
import Link from "next/link";

const API_URL = process.env.NEXT_PUBLIC_API_URL;

export default function BlogPost({ post }) {
  if (!post) return null;

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
