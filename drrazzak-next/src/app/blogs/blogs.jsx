"use client";

import React from "react";
import usePosts from "@/components/Hooks/all-posts-data";
import slugify from "@/components/Hooks/slugify";
import Loader from "@/components/sub-components/Loading";
import Link from "next/link";

const API_URL = process.env.NEXT_PUBLIC_API_URL;


// -------------------- BlogPostCard --------------------
export const BlogPostCard = ({
  featured_image,
  date,
  title,
  excerpt,
  slug
}) => {
  return (
    <div className="blog-post-card">
      <img
        src={featured_image}
        alt={title}
        className="blog-post-card-image"
      />
      <div className="blog-post-card-content">
        <div className="blog-post-card-meta">Published: {date}</div>

        {/* {tags && (
          <div className="blog-post-card-tags">
            {tags.map((tag, index) => (
              <span key={index} className="blog-post-card-tag">
                {tag}
              </span>
            ))}
          </div>
        )} */}

        <h3 className="blog-post-card-title">{title}</h3>

        <p dangerouslySetInnerHTML={{ __html: excerpt }} />

        <div className="blog-post-card-button">
          <Link
            // href={{
            //   pathname: `/post/${slugify(slug)}`,
            //   query: { id },
            // }}
            href={`/post/${slug}`}
            className="read-more-link"
          >
            Read More
        </Link>
        </div>
      </div>
    </div>
  );
};

// -------------------- Blogs Component --------------------
const Blogs = () => {
  const { posts, loading, error } = usePosts(API_URL);

  if (loading) return <Loader />;
  if (error)
    return <p className="loading-fullscreen">⚠️ {error}</p>;


  return (
    <div className="blogs-container">
      {posts.map((category, i) => (
        <section className="blogs" key={i}>
          <h1
            className="blogs-category"
            dangerouslySetInnerHTML={{ __html: category.category }}
          />
          <div className="blogs-grid">
            {category.posts.map((post, index) => (
              <BlogPostCard key={index} {...post} />
            ))}
          </div>
        </section>
      ))}
    </div>
  );
};

export default Blogs;
