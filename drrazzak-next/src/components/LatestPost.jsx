"use client";

import React from "react";
import  BlogPostCard  from "./sub-components/blog-card";
import useLatestPosts from "./hooks/latest-three-posts";
import Link from "next/link";

const HomeLatestPosts = () => {
  const { posts, loading, error } = useLatestPosts();

  if (loading)
    return (
      <center>
        <p>Loading...</p>
      </center>
    );

  if (error)
    return (
      <center>
        <p>Error: {error}</p>
      </center>
    );

  return (
    <section className="home-latest-posts">
      <h2>Latest Posts</h2>

      <div className="home-latest-post-grid">
        {posts.map((post, index) => (
          <div className="home-latest-post-card" key={index}>
            <BlogPostCard {...post} />
          </div>
        ))}
      </div>

      <div className="home-latest-post-readmore">
        <Link href="/blog" className="home-latest-post-btn">
          Read More
        </Link>
      </div>
    </section>
  );
};

export default HomeLatestPosts;
